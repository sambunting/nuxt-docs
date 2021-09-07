---
title: Upcoming Changes
description: 'Upcoming changes for next major version'
category: Migration
position: 1001
fullscreen: true
badge: v4.0.0+
---

## Support

- <badge>[#356](https://github.com/cenk1cenk2/listr2/issues/356)</badge><badge>[#355](https://github.com/cenk1cenk2/listr2/issues/355)</badge><badge>[#350](https://github.com/cenk1cenk2/listr2/issues/350)</badge>Node 10 support will be dropped since all the major dependencies are already dropped support with their latest newest releases.

## Library Swaps

- <badge>[#296](https://github.com/cenk1cenk2/listr2/issues/296)</badge>[`stdout-update`](https://github.com/keindev/stdout-update) will be swapped in instead of using `log-update`. This will be a limited breaking change only will break the tests that directly capture the stdout of the task, which is not the way to go for testing. This library hooks in to stdout to delay the data written to it, and mostly have better way of handling the terminal. But it also his problems of clearing whole the lines, if terminal drops to background.
- <badge>need-confirmation</badge>Will test out if the event emitter-based approach is better than rxjs at the moment, comparing performance.

## Refactor

- Clean up the code base, for the more readable base.
- Add more functional tests. There are still some conditions that are not frozen, albeit they are edge cases.
