---
title: Upcoming Changes
description: 'Upcoming changes for next major version'
category: Migration
position: 1001
badge: v4.0.0+
---

## Support

- Node 10 support will be dropped since all the major dependencies are already dropped support with their latest newest releases.

  <GithubIssueLink issue="356"></GithubIssueLink> <GithubIssueLink issue="355"></GithubIssueLink> <GithubIssueLink issue="350"></GithubIssueLink>

## Library Swaps

- [`stdout-update`](https://github.com/keindev/stdout-update) will be swapped in instead of using `log-update`. This will be a limited breaking change only will break the tests that directly capture the stdout of the task, which is not the way to go for testing. This library hooks into stdout to delay the data written to it, and most have a better way of handling the terminal. But it also his problems of clearing whole the lines, if terminal drops to background.

  <GithubIssueLink issue="501"></GithubIssueLink> <GithubIssueLink issue="296"></GithubIssueLink> <GithubIssueLink issue="289"></GithubIssueLink>

- Drop rxjs in favor of an event emitter-based approach, due to its size and unnecessary weight on the repository as well as crashing dependencies for dependents.

  <GithubIssueLink issue="493"></GithubIssueLink> <GithubIssueLink issue="409"></GithubIssueLink>

## Refactor

- Clean up the code base, for the more readable base.
- Add more functional tests. There are still some conditions that are not frozen, albeit they are edge cases.
