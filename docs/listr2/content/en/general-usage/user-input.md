---
title: User Input
description: 'You can interact with the user with prompts.'
category: General Usage
position: 107
---

## Introduction

The input module uses the beautiful [enquirer](https://www.npmjs.com/package/enquirer).

<alert type="warning">

Attention: Enquirer is an optional dependency. Please install it first.

</alert>

So with running a `task.prompt` function, you can get access to any [enquirer](https://www.npmjs.com/package/enquirer) default prompts as well as the underlying instance for using a custom enquirer prompt.

To get an input from the user you can assign the task a new prompt in an async function and write the response to the context.

<alert type="danger">

It is not advised to run prompts in a concurrent tasks because multiple prompts will clash and overwrite each other's console output and when you do keyboard movements it will apply to them both.

</alert>

Prompts, since their rendered output gets passed as a data output will render multiple times in verbose renderer since verbose renderer is not updating the terminal is not intended to be used in non TTY environments. It will work anyhow albeit it might not look great. Since prompts are not even intended for non TTY terminals, this is a novelty.

Prompts can either have a title or not but they will always be rendered at the end of the current console while using the default renderer.

<ExampleAlert :example="{ link: 'https://github.com/cenk1cenk2/listr2/tree/master/examples/get-user-input.example.ts', name: 'examples section' }"></ExampleAlert>

## Usage

To access the prompts just utilize the `task.prompt` jumper function by passing in your [enquirer](https://www.npmjs.com/package/enquirer) prompts as an argument.

Prompts always rendered at the bottom of the tasks when using the default renderer with one line return in between it and the tasks.

<alert type="warning">

Please note that I rewrote the types for enquirer since some of them were failing for me. So it may have a chance of having some mistakes in it since I usually do not use all of them. Will merge the original types when enquirer fixes them with the pending merge request which can be tracked in the issue [#235](https://github.com/cenk1cenk2/listr2/issues/235).

</alert>

### Single Prompt

```typescript
new Listr<Ctx>(
  [
    {
      task: async (ctx, task): Promise<boolean> => (ctx.input = await task.prompt<boolean>({ type: 'Toggle', message: 'Do you love me?' }))
    },
    {
      title: 'This task will get your input.',
      task: async (ctx, task): Promise<void> => {
        ctx.input = await task.prompt<boolean>({ type: 'Toggle', message: 'Do you love me?' })
        // do something
        if (ctx.input === false) {
          throw new Error(':/')
        }
      }
    }
  ],
  { concurrent: false }
)
```

### Multiple Prompts

<alert type="warning">

If you want to pass in an array of prompts, be careful that you should name them, this is also enforced by Typescript as well. This is not true for single prompts, since they only return a single value, it will be directly gets passed to the assigned variable.

</alert>

```typescript
new Listr<Ctx>(
  [
    {
      title: 'This task will get your input.',
      task: async (ctx, task): Promise<void> => {
        ctx.input = await task.prompt<{ first: boolean; second: boolean }>([
          { type: 'Toggle', name: 'first', message: 'Do you love me?' },
          { type: 'Toggle', name: 'second', message: 'Do you love me?' }
        ])
        // do something
        if (ctx.input.first === false) {
          logger.log('oh okay')
        }
        if (ctx.input.second === false) {
          throw new Error('You did not had to tell me for the second time')
        }
      }
    }
  ],
  { concurrent: false }
)
```

### Use a Custom Prompt

You can either use a custom prompt out of the npm registry or a custom-created one as long as it works with [enquirer](https://www.npmjs.com/package/enquirer), it will work as expected. Instead of passing in the prompt name use the not-new-invoked class.

```typescript
import Enquirer from 'enquirer'
import EditorPrompt from 'enquirer-editor'

const enquirer = new Enquirer()
enquirer.register('editor', Editor)

new Listr<Ctx>(
  [
    {
      title: 'Custom prompt',
      task: async (ctx, task): Promise<void> => {
        ctx.testInput = await task.prompt({
          type: 'editor',
          message: 'Write something in this enquirer custom prompt.',
          initial: 'Start writing!',
          validate: (response): boolean | string => {
            return true
          }
        })
      }
    }
  ],
  { concurrent: false, injectWrapper: { enquirer } }
)
```

## Cancel a Prompt <badge>v3.1.0+</badge>

You can cancel a prompt while it's display with the task's provided `cancelPrompt` function.

<GithubIssueLink issue="173"></GithubIssueLink>

```typescript
import delay from 'delay'

new Listr<Ctx>(
  [
    {
      task: async (ctx, task): Promise<boolean> => (ctx.input = await task.prompt<boolean>({ type: 'Toggle', message: 'Do you love me?' }))
    },
    {
      title: 'This task will get your input.',
      task: async (ctx, task): Promise<void> => {
        // Cancel the prompt after 5 seconds
        delay(5000).then(() => task.cancelPrompt())

        ctx.input = await task.prompt({
          type: 'Input',
          message: 'Give me input before it disappears.'
        })
      }
    }
  ],
  { concurrent: false }
)
```
