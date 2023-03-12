let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

const printList = (list) => {
  let tmp = list;

  while (tmp) {
    console.log(tmp.value);
    tmp = tmp.next;
  }
};

printList(list);

const printList2 = (list) => {
  console.log(list.value);

  if (list.next) {
    printList2(list.next);
  }
};

printList2(list);
