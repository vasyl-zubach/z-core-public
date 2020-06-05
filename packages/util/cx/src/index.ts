type InputArg = string | null | undefined | false;
const cx = (...args: InputArg[]): string =>
  args.filter(str => typeof str === 'string').join(' ');
export default cx;
