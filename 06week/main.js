//const assert = require("assert");

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

const listOfPlayers = [];
const blueTeam = [];
const redTeam = [];

class player {
  constructor(
    person,
    canThrowBall,
    canDodgeBall,
    hasPaid,
    isHealthy,
    yearsExperience
  ) {
    console.log("person:", person);
    console.log(Object.entries(person));
    for (var [key, value] of Object.entries(person)) {
      console.log("key", key, "value", value);
      this[key] = value;
    }
    this.canThrowBall = canThrowBall;
    this.canDodgeBall = canDodgeBall;
    this.hasPaid = hasPaid;
    this.isHealthy = isHealthy;
    this.yearsExperience = yearsExperience;
  }
}
class blueTeammate {
  constructor(person) {
    for (var [key, value] of Object.entries(person)) {
      //console.log("key", key, "value", value);
      this[key] = value;
    }
    this.teamColor = "blue";
    this.mascot = "rattlin rattlesnakes";
  }
}
class redTeammate {
  constructor(person) {
    for (var [key, value] of Object.entries(person)) {
      //console.log("key", key, "value", value);
      this[key] = value;
    }
    this.teamColor = "red";
    this.mascot = "ole man opossums";
  }
}

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

const listPeopleChoices = () => {
  const listElement = document.getElementById("people");
  arrOfPeople.forEach(person => {
    const li = document.createElement("li");
    li.setAttribute("id", person.id);
    const button = document.createElement("button");
    button.innerHTML = "Make Player";
    button.addEventListener("click", function() {
      makePlayer(person);
    });
    li.appendChild(button);
    li.appendChild(
      document.createTextNode(person.name + " - " + person.skillSet)
    );
    listElement.append(li);
  });
  var clickedButton = event.target;
  console.log("event target:", clickedButton);
  var clickedDiv = clickedButton.parentElement;
  clickedDiv.removeChild(clickedButton);
};

const listPlayerChoices = () => {
  const playersElement = document.getElementById("players");
  while (playersElement.firstChild) {
    playersElement.removeChild(playersElement.firstChild);
  }
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

const makePlayer = (person, browser = true) => {
  //console.log(`li ${person.id} was clicked!`);
  let _player = new player(person, 1, 1, 1, 1, 1);
  //console.log(arrOfPeople.indexOf(person));
  let poppedPlayer = arrOfPeople.splice(arrOfPeople.indexOf(person), 1);
  //console.log("poppedPlayer:", poppedPlayer);
  //console.log("arrOfPeople:", arrOfPeople);
  listOfPlayers.push(_player);
  //console.log("final player object:", _player);
  //console.log("listOfPlayers:", listOfPlayers);
  if (browser) {
    var clickedButton = event.target;
    //console.log("event target:", clickedButton);
    var clickedDiv = clickedButton.parentElement;
    var newList = clickedDiv.parentElement;
    //console.log("newList:", newList);
    clickedDiv.removeChild(clickedButton);
    newList.removeChild(clickedDiv);
    listPlayerChoices();
  }
  //return newList;
  return _player;
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
