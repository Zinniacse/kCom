const printfunction = function () {
  console.log(this.name);
};

const sakib = {
  name: "sakib",
  age: 35,
};
printfunction.call(sakib);
