---
title: Introduction
description: 'The renderer that comes bundled with listr can be further customized.'
category: Renderers
position: 400
fullscreen: true
---

There are three main renderers which are `default`, `verbose`, and `silent`. Default renderer is the one that can be seen in the demo, which is an updating renderer. But if the environment advertises itself as non TTY it will fall back to the verbose renderer automatically. Verbose renderer is a text based renderer. It uses the silent renderer for the subtasks since the parent task already started a renderer. But silent renderer can also be used for processes that fallback to have no output but just a task list.

Renderers can have global options where it is set through `rendererOptions` and per-task options where it is injected inside the `Task` as `options`.

Depending on the selected renderer, `rendererOptions` as well as the `options` in the `Task` will change accordingly. It defaults to default renderer as mentioned with the fallback to verbose renderer on non TTY environments.
