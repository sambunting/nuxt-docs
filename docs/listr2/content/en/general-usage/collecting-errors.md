---
title: Collecting Errors
description: 'Collecting errors through running listr and analyzing them afterward.'
category: General Usage
position: 104
badge: 3.12.0+
---

## Introduction

Errors from the tasks are collected inside an array in the main listr task list as `tasks.err` where `tasks` is the listr class. Since there are options to ignore some errors on cases like `exitOnError` or the ability to retry the given task through `task.retry`, encountered errors can be swallowed while the execution. To deal with those swallowed errors, all the errors that are encountered even though it does not stops the execution gets collected through this property.

## ListrError

`ListrError` class has some additional information like the cause of the error and where it is coming from and the frozen context at the given time to further debug the issue while execution.

<ExternalTsDoc src="https://raw.githubusercontent.com/cenk1cenk2/listr2/master/docs/classes/index.ListrError.md" behead="1" pick="Constructors"></ExternalTsDoc>

## ListrErrorTypes

A listr error can be caused by multiple reasons, for a better explanation of why that particular error occurred, a type property on the `ListrError` exists.

<ExternalTsDoc src="https://raw.githubusercontent.com/cenk1cenk2/listr2/master/docs/enums/index.ListrErrorTypes.md" behead="1"></ExternalTsDoc>

## Usage

The order of the array `tasks.err` where `tasks` is the listr class, represents the order of errors that are encountered.

To keep the error collection mechanism simple and predictable, it might also process the errors coming from the subtasks as well.

For example, the following example will clear some things up about the given mindset.

```typescript
const task = new Listr(
  [
    {
      task: (): void => {
        throw new Error('1')
      }
    },
    {
      task: (_, task): Listr => {
        return task.newListr(
          [
            {
              task: (): void => {
                throw new Error('3')
              }
            },
            {
              task: (): void => {
                throw new Error('4')
              }
            }
          ],
          { exitOnError: true }
        )
      }
    },
    {
      task: (): void => {
        throw new Error('2')
      }
    }
  ],
  { exitOnError: false }
)
```

- Tasks are concurrent, so we expect them to run in a synchronous fashion.
- First error will be thrown from the first task. Since exitOnError is `false` on that context, `ListrError` will get collected by `tasks.err` and the value will be `{ message: '1', type: ListrErrorTypes.HAS_FAILED_WITHOUT_ERROR }`.
- Then it will recurse into the second task which has two subtasks.
- The first task from the subtasks will fail and since the `exitOnError` is set to `true` in that context, that subtasks will fail and throw. The `ListrError` appended to the `tasks.err` will be `{ message: '3', type: ListrErrorTypes.HAS_FAILED }`
- Since the subtask has crashed, it will not execute the upcoming tasks in the subtasks.
- It will return to the main task list and execute the 3rd task from that list. It will again show the same behavior with the first task and the `ListrError` will be `{ message: '2', type: ListrErrorTypes.HAS_FAILED_WITHOUT_ERROR }`.
