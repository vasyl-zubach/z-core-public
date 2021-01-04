// @ts-nocheck

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
