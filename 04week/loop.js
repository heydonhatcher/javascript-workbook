//do while loop 1-100

let i = 0;
do {
  console.log(i);
  i++;
} while (i < 1001);

//object

let person = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
};

// for in... loop - if statement - birth year is an odd number
for (prop in person) {
  if (prop === "birthDate") {
    let bdy = person.birthDate.split(", ")[1];
    if (parseInt(bdy) % 2 !== 0) {
      console.log(person.birthDate);
    }
  }
}

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
const information = arrayOfPersons.map(_person => {
  for (prop in _person) {
    console.log(prop + ":", _person[prop]);
  }
});

//filter only males
const males = arrayOfPersons.filter(prop => {
  if (prop.gender === "male") {
    return prop;
  }
});

console.log("males:", males);

//filter only people that were born after 1990
const youngins = arrayOfPersons.filter(prop => {
  if (parseInt(prop.birthDate.split(", ")[1]) >= 1990) {
    return prop;
  }
});

console.log("youngins:", youngins);
