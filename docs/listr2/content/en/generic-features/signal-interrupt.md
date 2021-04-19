---
title: Signal Interrupt
description: 'Default behavior is to track the signal interrupt and then stop rendering accordingly.'
category: Generic Features
position: 25
fullscreen: true
---

When the interrupt signal is caught Listr will render for one last time therefore you will always have clean exits. This registers event listener `process.on('exit')`, therefore it will use a bit more CPU cycles depending on the Listr task itself.

You can disable this default behavior by passing in the options for the root task `{ registerSignalListeners: false }`.
