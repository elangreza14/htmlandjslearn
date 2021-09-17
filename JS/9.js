function start() {
  // tipe data OBJECT
  const person = {
    name: "John",
    age: 17,
    sex: "male",
  };
  console.log(person);
  console.log(typeof person);
  console.log(person.name);
  console.log(person.age);
  console.log(person["sex"]);
}

start();
