---
title: Simple Renderer
description: 'The renderer that comes bundled with listr can be further customized.'
category: Renderers
position: 20
---

## Introduction

Simple renderer is an alternative renderer contributed by [jurijzahn8019](https://github.com/jurijzahn8019). It is the slimmed down version of default renderer which is neither static or refreshing. It will dump the output as in the way of logging depending on the tasks.

## Global Options

````typescript
public static rendererOptions: {
    /**
     * if true this will add
     * timestamp at the begin of the rendered line
     *
     * @example
     *
     * ```bash
     * [12:33:44] ✔ Do something important
     * ```
     *
     * @default false
     */
    prefixWithTimestamp?: boolean
    /**
     * choose between process.stdout and process.stderr
     *
     * @default stdout
     */
    output?: 'stdout' | 'stderr'
  } = { prefixWithTimestamp: false, output: 'stdout' }
````
