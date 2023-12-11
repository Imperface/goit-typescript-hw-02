/*
  Створіть новий тип даних, який підходить для цих двох об'єктів.
*/
type Common = {
  [key: string]: number | string | string[] | { [key: string]: Date };
};

const page1: Common = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};

const page2: Common = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};

export {};
