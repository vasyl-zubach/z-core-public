type InputArg = string | null | undefined | false;
const cx = (...args: InputArg[]) => {
  let i = 0;
  let str = '';
  const argL = args.length;
  while (i < argL) {
    const c = args[i];
    if (typeof c === 'string' || typeof c === 'number') {
      str && (str += ' ');
      str += c;
    }
    i++;
  }
  return str;
};
export default cx;
