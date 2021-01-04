# @z-core/cx

[![npm version](https://badge.fury.io/js/%40z-core%2Fcx.svg)](https://badge.fury.io/js/%40z-core%2Fcx)

Tiny util for joining class names.

> Inspired by [classnames](https://www.npmjs.com/package/classnames) and [clsx](https://www.npmjs.com/package/clsx)

## Install

`npm install @z-core/cx --save`

## Use

The syntax is simplified as much as possible.

`cx` function takes as many arguments as possible and then combines all the non-false values.

```javascript
import cx from '@z-core/cx';

cx('foo', 'bar'); // => 'foo bar'
cx('foo', null, undefined, false, 'bar'); // => 'foo bar'
```

That way you can have some conditional class names.

Let's say we have a react component with class names at root wrapper depending on a state:

```jsx
import React, { useState } from 'react';
import cx from '@z-core/cx';

export MyComponnet = ({children, className}) => {
  const [ isActive ] = useState(false);
  const resultClassName = cx(
    'my-component-class', // predefined className string
    className, // passed className from props, can be `undefined` as optional prop
    isActive && 'my-component-class--active' // dynamic className based on state
  );
  return <div className={resultClassName}>{children}</div>
}
```

## Performance

Checked with [Benchmark.js](https://benchmarkjs.com/), compared to [classnames](https://www.npmjs.com/package/classnames) and [clsx](https://www.npmjs.com/package/clsx):

<details>
  <summary>Benchmark code</summary>

```js
import Benchmark from 'benchmark';
import classnames from 'classnames';
import clsx from 'clsx';
import cx from '../src';

const suite = new Benchmark.Suite();

// add tests
suite
  .add('classnames', () => {
    classnames('test', undefined, null);
    classnames('test', undefined, null, 'test2', false);
  })
  .add('clsx', () => {
    clsx('test', undefined, null);
    clsx('test', undefined, null, 'test2', false);
  })
  .add('@z-core/cx', () => {
    cx('test', undefined, null);
    cx('test', undefined, null, 'test2', false);
  })
  .on('cycle', (event) => {
    console.log(String(event.target));
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  .run({ async: true });
```

</details>

Results on my machine:

```bash
classnames x 4,506,898 ops/sec ±1.72% (90 runs sampled)
clsx x 14,265,321 ops/sec ±1.54% (88 runs sampled)
@z-core/cx x 16,321,970 ops/sec ±0.72% (90 runs sampled)
Fastest is @z-core/cx
```

## Source / Git repo

- code synced into [vasyl-zubach/z-core-public](https://github.com/vasyl-zubach/z-core-public);
- raise issues in there ^ too;

<details>
  <summary>Here's why:</summary>

This package is part of my bigger monorepo of a bunch of components and tools (but its source is closed 🤷‍♂️). As a starting point, I'll sync parts that can be shared publicly into [vasyl-zubach/z-core-public](https://github.com/vasyl-zubach/z-core-public). Eventually, I'll make it sync all the public stuff and tooling to get that public repo in working condition.

At some point, I hope it'll become bi-directionally synced 🤞 (I just need to learn how to do that 😉)

</details>

## License

MIT. Copyright (c) 2020 [Vasyl Zubach](https://zubach.com) [🐦](https://twitter.com/Vasyl_Zubach) [🐙](https://github.com/vasyl-zubach)
