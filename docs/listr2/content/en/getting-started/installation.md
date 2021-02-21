---
title: Installation
description: 'Install listr2 via NPM.'
category: Getting Started
position: 2
---

## Install Latest Version

Add `listr2` dependency to your project:

<code-group>
  <code-block label="Yarn" active>

```bash
yarn add listr2
```

  </code-block>
  <code-block label="NPM">

```bash
npm install listr2
```

  </code-block>
</code-group>

## Install "listr" Compatible Version

<alert type="warning">

Backward compatibility with [Listr](https://github.com/SamVerschueren/listr) is broken after v1.3.12, albeit refactoring requires only moving renderer options to their own key, concerning the [conversation on the original repository](https://github.com/SamVerschueren/listr/issues/143#issuecomment-623094930).

</alert>

<alert type="danger">

Keep in mind that this is a very old version, with lots of missing features and bug fixes and **it will not get further bug fixes**.

</alert>

<alert type="info">

You can find the README of compatible version [here](https://github.com/cenk1cenk2/listr2/tree/84ff9c70ba4aab16106d1e7114453ac5e0351ec0).

</alert>

<code-group>
  <code-block label="Yarn" active>

```bash
yarn add listr2@1.3.12
```

  </code-block>
  <code-block label="NPM">

```bash
npm install listr2@1.3.12
```

  </code-block>
</code-group>
