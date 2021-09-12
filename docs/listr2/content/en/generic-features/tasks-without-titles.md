---
title: Tasks without Title
description: 'You can have tasks without a title if you wish to.'
category: Generic Features
position: 301
---

For default renderer, all tasks that do not have titles will be hidden from the visual task list and executed behind. You can still set `task.title` inside the task wrapper programmatically afterward if you so desire.

Since tasks can have subtasks as in the form of Listr classes again, if a task without a title does have subtasks with the title it will be rendered one less level indented. So you can use this operation to change the individual options of the set of tasks like `exitOnError` or `concurrency` or even render properties, like while you do want to collapse parent's subtasks after completed but do not want this for a given set of subtasks.

For verbose renderer, since it is not updating, it will show tasks that do not have a title as `Task without title.`
