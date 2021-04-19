---
title: Showing Output
description: 'Showing output from a task.'
category: General Usage
position: 10
---

<ExampleAlert :example="{ link: 'https://github.com/cenk1cenk2/listr2/tree/master/examples/show-output.example.ts', name: 'examples section' }"></ExampleAlert>

## Show Output Through the Task Itself

This will show the output in a small bar that can only show the last output from the task.

```typescript
new Listr<Ctx>(
  [
    {
      title: 'This task will execute.',
      task: async (ctx, task): Promise<void> => {
        task.output = 'I will push an output. [0]'
        await delay(500)

        task.output = 'I will push an output. [1]'
        await delay(500)

        task.output = 'I will push an output. [2]'
        await delay(500)
      }
    }
  ],
  { concurrent: false }
)
```

## Passing Data Through an Observable or a Stream

Since observables and streams are supported they can also be used to generate output.

<ExampleAlert :example="{ link: 'https://github.com/cenk1cenk2/listr2/tree/master/examples/stream.example.ts', name: 'examples section' }"></ExampleAlert>

```typescript
new Listr<Ctx>(
  [
    {
      // Task can also handle and observable
      title: 'Observable test.',
      task: (): Observable<string> =>
        new Observable((observer) => {
          observer.next('test')

          delay(500)
            .then(() => {
              observer.next('changed')
              return delay(500)
            })
            .then(() => {
              observer.complete()
            })
        })
    }
  ],
  { concurrent: false }
)
```

## Accessing `process.stdout` to Render a Stream <badge>v2.1.0+</badge>

Since `process.stdout` method is controlled by `log-update` to create a refreshing interface, for anything else that might need to output data and can use `Writeable` streams, `task.stdout()` will create a new punch-hole to redirect all the write requests to `task.output`. This is especially beneficial for external libraries like `enquirer`, which is already integrated, or something like `ink`.

<alert type="warning">

This, unfortunately, relies on cleaning all ANSI escape characters, since currently, I do not find a good way to sandbox them inside `log-update` which utilizes the cursor position by itself. So use this with caution, because it will only render the last chunk in a stream as well as clean up all the ANSI escape characters except for styles.

</alert>

```typescript
import { Box, Color, render } from 'ink'
import React, { Fragment, useEffect, useState } from 'react'

import { Listr } from 'Listr2'
import { Logger } from '@utils/logger'

type Ctx = {}

const logger = new Logger({ useIcons: false })

async function main(): Promise<void> {
  let task: Listr<Ctx, 'default'>

  task = new Listr<Ctx, 'default'>(
    [
      {
        title: 'This task will show INK as output.',
        task: async (ctx, task): Promise<any> => {
          const Counter = () => {
            const [counter, setCounter] = useState(0)

            useEffect(() => {
              const timer = setInterval(() => {
                setCounter((previousCounter) => previousCounter + 1)
              }, 100)

              return (): void => {
                clearInterval(timer)
              }
            }, [])

            return <Color green>{counter} tests passed</Color>
          }

          const { unmount, waitUntilExit } = render(<Counter />, task.stdout())

          setTimeout(unmount, 2000)

          return waitUntilExit()
        }
      }
    ],
    { concurrent: false }
  )

  try {
    const context = await task.run()
    console.log(`Context: ${JSON.stringify(context)}`)
  } catch (e) {
    console.error(e)
  }
}

main()
```

## Renderer

### Default Renderer

#### Persistent Output

To keep the output when the task finishes while using the default renderer, you can set `{ persistentOutput: true }` in the `Task` options.

```typescript
new Listr<Ctx>(
  [
    {
      title: 'This task will execute.',
      task: async (ctx, task): Promise<void> => {
        task.output = 'I will push an output. [0]'
      },
      options: { persistentOutput: true }
    }
  ],
  { concurrent: false }
)
```

#### Use the Bottom Bar

If task output to the bottom bar is selected, it will create a bar at the end of the tasks leaving one line return space in between. The bottom bar can only be used in the default renderer.

Items count that is desired to be showed in the bottom bar can be set through `Task` option `bottomBar`.

- If set to `true` it will only show the last output from the task.
- If it is set to a number it will limit the output to that number.
- If set to `Infinity`, it will keep all the output.

```typescript
new Listr<Ctx>(
  [
    {
      title: 'This task will execute.',
      task: async (ctx, task): Promise<void> => {
        task.output = 'I will push an output. [0]'
        await delay(500)

        task.output = 'I will push an output. [1]'
        await delay(500)

        task.output = 'I will push an output. [2]'
        await delay(500)
      },
      options: {
        bottomBar: Infinity
      }
    }
  ],
  { concurrent: false }
)
```
