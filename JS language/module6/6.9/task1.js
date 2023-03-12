function work(a, b) {
  alert(a + b); // произвольная функция или метод
}

const spy = (f) => {
  const wrapper = (...args) => {
    wrapper.calls.push(args);
    return f.apply(this, args);
  }

  wrapper.calls = [];

  return wrapper;
};

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  alert("call:" + args.join()); // "call:1,2", "call:4,5"
}
