console.log("Zadanie 4");
const getTotalBalanceByGender = (users, gender) =>
  users
    .filter((user) => user.gender === gender)
    .map((user) => user.balance)
    .reduce((total, balance) => total + balance, 0);

const allUsers = [
  {
    name: "Moore Hensley",
    gender: "male",
    balance: 2811,
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821,
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793,
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278,
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951,
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498,
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764,
  },
];

console.log("male: ", getTotalBalanceByGender(allUsers, "male")); // 12053

console.log("female: ", getTotalBalanceByGender(allUsers, "female")); // 8863

console.log("---------------------");
