---
title: Testing
description: 'For testing you can use a custom or the verbose renderer.'
category: Generic Features
position: 303
fullscreen: true
---

For testing purposes you can use the verbose renderer by passing in the option of `{ renderer: 'verbose' }`. This will generate text-based and linear output which is required for testing.

If you want to change the logger of the verbose renderer you can do that by passing a class implementing `Logger` class which is exported from the index and passing it through as a renderer option with `{ renderer: 'verbose', rendererOptions: { logger: MyLoggerClass } }`.

The verbose renderer will always output predicted output with no fancy features.

| On              | Output                                                              |
| --------------- | ------------------------------------------------------------------- |
| Task Started    | \[STARTED\] \${TASK TITLE ?? 'Task without title.'}                 |
| Task Failure    | \[FAILED\] \${TASK TITLE ?? 'Task without title.'}                  |
| Task Skipped    | \[SKIPPED\] \${SKIP MESSAGE ?? TASK TITLE ?? 'Task without title.'} |
| Task Successful | \[SUCCESS\] \${TASK TITLE ?? 'Task without title.'}                 |
| Spit Output     | \[DATA\] \${TASK OUTPUT}                                            |
| Title Change    | \[TITLE\] \${NEW TITLE}                                             |
| Rollback        | \[ROLLBACK\] \${TASK TITLE ?? 'Task without title.'}                |
| Retry           | \[RETRYING\] \${TASK TITLE ?? 'Task without title.'}                |
