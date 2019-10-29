//const assert = require("assert");

// defines constant array of person objects
const arrOfPeople = [
  {
    id: 2,
    name: "Charles Young",
    age: 55,
    skillSet: "welding",
    placeBorn: "Omaha, Nebraska"
  },
  {
    id: 3,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky"
  },
  {
    id: 4,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas"
  },
  {
    id: 5,
    name: "John Willouby",
    age: 28,
    skillSet: "pipe fitting",
    placeBorn: "New York, New York"
  },
  {
    id: 6,
    name: "Stan Honest",
    age: 20,
    skillSet: "boom-a-rang throwing",
    placeBorn: "Perth, Australia"
  },
  {
    id: 7,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California"
  },
  {
    id: 8,
    name: "Walter Cole",
    age: 32,
    skillSet: "jump rope",
    placeBorn: "New Orleans, Louisiana"
  }
];

// empty arrays waiting to be filled
const listOfPlayers = [];
const blueTeam = [];
const redTeam = [];

// constructs the player object
class player {
  // constructor takes the following args
  constructor(
    person,
    canThrowBall,
    canDodgeBall,
    hasPaid,
    isHealthy,
    yearsExperience
  ) {
    // for loop that loops through the pre-existing key value pairs and adds them as attributes
    // to the resulting player object
    for (var [key, value] of Object.entries(person)) {
      console.log("key", key, "value", value);
      this[key] = value;
    }
    // sets additional attributes on the resulting player object
    this.canThrowBall = canThrowBall;
    this.canDodgeBall = canDodgeBall;
    this.hasPaid = hasPaid;
    this.isHealthy = isHealthy;
    this.yearsExperience = yearsExperience;
  }
}

// constructs the blueTeammate object
class blueTeammate {
  // for loop that loops through the pre-existing key value pairs and adds them as attributes
  // to the resulting blueTeammate object
  constructor(person) {
    for (var [key, value] of Object.entries(person)) {
      this[key] = value;
    }
    // sets additional attributes on the resulting blueTeammate object
    this.teamColor = "blue";
    this.mascot = "rattlin rattlesnakes";
  }
}

// constructs the redTeammate object
class redTeammate {
  // for loop that loops through the pre-existing key value pairs and adds them as attributes
  // to the resulting redTeammate object
  constructor(person) {
    for (var [key, value] of Object.entries(person)) {
      this[key] = value;
    }
    // sets additional attributes on the resulting redTeammate object
    this.teamColor = "red";
    this.mascot = "ole man opossums";
  }
}

// this function lists the array of person objects in arrOfPeople
const listPeopleChoices = () => {
  const listElement = document.getElementById("people");
  // iterates through arrOfPeople and adds each person li tags
  arrOfPeople.forEach(person => {
    const li = document.createElement("li");
    li.setAttribute("id", person.id);
    // creates a "Make Player" button
    const button = document.createElement("button");
    button.innerHTML = "Make Player";
    // creates an event listener for the "Make Player" button
    button.addEventListener("click", function() {
      // this calls the makePlayer() function
      makePlayer(person);
    });
    // adds the button to the DOM - li element
    li.appendChild(button);
    // adds the player information to the li element
    li.appendChild(
      document.createTextNode(person.name + " - " + person.skillSet)
    );
    // appending li element to the "people" ul in DOM
    listElement.append(li);
  });
  // assigns clicked variable to the event.target
  var clickedButton = event.target;
  // gets the parent of clickedButton
  var clickedDiv = clickedButton.parentElement;
  // removes the button upon click
  clickedDiv.removeChild(clickedButton);
};

// this function takes a person object and instantiates a player object from the person
const makePlayer = (person, browser = true) => {
  // instantiates new player object
  let _player = new player(person, 1, 1, 1, 1, 1);
  // removes person from arrOfPeople
  arrOfPeople.splice(arrOfPeople.indexOf(person), 1);
  // pushes person to listOfPlayers
  listOfPlayers.push(_player);
  // if in the browser, hit this code block
  if (browser) {
    // sets clickedButton to the clicked button
    var clickedButton = event.target;
    // sets clickedDiv to the parent element of clickedButton
    var clickedDiv = clickedButton.parentElement;
    // sets newList to the parent element of clickedDiv
    var newList = clickedDiv.parentElement;
    // removes clickedDiv from newList
    newList.removeChild(clickedDiv);
    // calls listPlayerChoices() which will be aware of the newList
    listPlayerChoices();
  }
  // returns the new player object
  return _player;
};

// this function lists the players eligible to be added to a team
const listPlayerChoices = () => {
  const playersElement = document.getElementById("players");
  // ensures that list is not redundantly displayed in the DOM
  while (playersElement.firstChild) {
    playersElement.removeChild(playersElement.firstChild);
  }
  // loops through
  listOfPlayers.forEach(person => {
    const li = document.createElement("li");
    const buttonOne = document.createElement("button");
    const buttonTwo = document.createElement("button");
    buttonOne.innerHTML = "Blue Team";
    buttonTwo.innerHTML = "Red Team";
    buttonOne.addEventListener("click", function() {
      addPlayerToTeam(person, "blue");
    });
    li.appendChild(buttonOne);
    li.appendChild(buttonTwo);
    li.appendChild(
      document.createTextNode(person.name + " - " + person.skillSet)
    );
    playersElement.append(li);
    buttonTwo.addEventListener("click", function() {
      addPlayerToTeam(person, "red");
    });
    li.appendChild(buttonOne);
    li.appendChild(buttonTwo);
    playersElement.append(li);
  });
};

const addPlayerToTeam = (player, color, browser = true) => {
  if (color === "blue") {
    let bluePlayer = new blueTeammate(player);
    console.log("bluePlayer:", bluePlayer);
    console.log("bluePlayer.teamColor", bluePlayer.teamColor);
    blueTeam.push(bluePlayer);
    if (browser) {
      listTeamMembers("blue", blueTeam);
    }
    return bluePlayer;
  } else if (color === "red") {
    let redPlayer = new redTeammate(player);
    console.log("redPlayer:", redPlayer);
    redTeam.push(redPlayer);
    if (browser) {
      listTeamMembers("red", redTeam);
    }
    return redPlayer;
  }
  console.log("blueTeam:", blueTeam, "- redTeam:", redTeam);
};

const listTeamMembers = (color, team) => {
  const teamElement = document.getElementById(color);
  while (teamElement.firstChild) {
    teamElement.removeChild(teamElement.firstChild);
  }
  team.forEach(player => {
    const li = document.createElement("li");
    li.setAttribute("id", player.id);
    li.appendChild(
      document.createTextNode(player.name + " - " + player.skillSet)
    );
    teamElement.append(li);
  });
  listOfPlayers.splice(listOfPlayers.indexOf(player), 1);

  var clickedButton = event.target;
  //console.log("event target:", clickedButton);
  var clickedDiv = clickedButton.parentElement;
  var newList = clickedDiv.parentElement;
  //console.log("newList:", newList);
  clickedDiv.removeChild(clickedButton);
  newList.removeChild(clickedDiv);
};

if (typeof describe === "function") {
  describe("#addPlayerToTeam()", () => {
    it("should instantiate player object from element of arrOfPeople", () => {
      var madePlayer = makePlayer(arrOfPeople[3], false);
      assert.equal(madePlayer.canDodgeBall, 1);
    });
    it("should instantiate player object 'bluePlayer'", () => {
      var testPlayer = makePlayer(arrOfPeople[0], false);
      var testTeamMate = addPlayerToTeam(testPlayer, "blue", false);
      assert.equal(testTeamMate.teamColor, "blue");
    });
    it("should instantiate player object 'redPlayer'", () => {
      var testPlayer = makePlayer(arrOfPeople[1], false);
      var testTeamMate = addPlayerToTeam(testPlayer, "red", false);
      assert.equal(testTeamMate.teamColor, "red");
    });
  });
}
