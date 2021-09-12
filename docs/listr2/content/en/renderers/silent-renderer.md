---
title: Silent Renderer
description: 'The renderer that comes bundled with listr can be further customized.'
category: Renderers
position: 405
---

## Introduction

Silent renderer is mostly used internally, to not render the subtasks, but where it can further be utilized by running scripted tasks, inside a listr and you do not want to show any output.

With this way, you can use your own logging method to output data and just use listr as a task list to keep the task flow going.

## Global Options

<ExternalTsDoc src="https://raw.githubusercontent.com/cenk1cenk2/listr2/master/docs/classes/renderer_silent_renderer.SilentRenderer.md" behead="0" pick="rendererOptions"></ExternalTsDoc>

## Per-Task Options

<ExternalTsDoc src="https://raw.githubusercontent.com/cenk1cenk2/listr2/master/docs/classes/renderer_silent_renderer.SilentRenderer.md" behead="0" pick="rendererTaskOptions"></ExternalTsDoc>
