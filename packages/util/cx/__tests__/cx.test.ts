import cx from '../src';

test('single string argument', () => {
  expect(cx('test')).toEqual('test');
});

test('multiple string arguments', () => {
  expect(cx('test', 'test2')).toEqual('test test2');
});

test('multiple not only string arguments', () => {
  expect(cx('test', undefined, 'test2', null, false)).toEqual('test test2');
});
