function tick(arr) {
  const { ms, cb } = arr.shift();
  setTimeout(() => {
    cb();
    if (arr.length) {
      tick(arr);
    }
  }, ms);
}

export default function thunk(time, fn) {
  let funcs = [];
  const add = (ms, cb) => {
    funcs.push({ ms, cb });
    return { thunk: add };
  };

  add(time, fn);

  tick(funcs);

  return {
    thunk(m, f) {
      add(m, f);
      return { thunk: add };
    }
  };
}
