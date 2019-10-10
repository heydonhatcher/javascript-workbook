//do while loop 1-100

let i = 0;
do {
  console.log(i);
  i++;
} while (i < 101);

//object

let person = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
};

// for in... loop - if statement - birth year is an odd number

//array of persons
let arrayOfPersons = [
  {
    firstName: "Heydon",
    lastName: "Hatcher",
    birthDate: "Mar 10, 1989",
    gender: "female"
  },
  {
    firstName: "Isaac",
    lastName: "Winburne",
    birthDate: "Dec 18, 1991",
    gender: "male"
  },
  {
    firstName: "Dorothy",
    lastName: "Winburne-Gilbertson",
    birthDate: "Nov 28, 1955",
    gender: "female"
  }
];

//using map
const information = arrayOfPersons.map(value => {
  return `This person is ${arrayOfPersons.firstName} ${arrayOfPersons.lastName}. They were born on ${arrayOfPersons.birthDate} and are a ${arrayOfPersons.gender}!`;
});

console.log(information);

//filter only males

//filter only people that were born after 1990
