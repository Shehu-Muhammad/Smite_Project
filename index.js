function showLegend() {
    let infoStyle = document.getElementsByClassName("legend")[0].classList;
    let buttonTxt = document.getElementsByClassName("showHideLegend")[0];
    if(infoStyle.contains("hideInfo") == true) {
        infoStyle.remove("hideInfo");
        infoStyle.add("showInfo");
        buttonTxt.innerText = "Hide Legend";
    } else {
        infoStyle.add("hideInfo");
        infoStyle.remove("showInfo");
        buttonTxt.innerText = "Show Legend";
    }
}

document.getElementsByClassName("showHideLegend")[0].addEventListener("onclick", showLegend);

function team_five() {
    let key = document.getElementById("team_5v5").value;
    switch (key) {
        case "balanced_5v5":
            balanced(5);
            chosenGods = [];
            break;
        case "assassinHeavy":
            getAssassin(2);
            getGuardian(1);
            getMage(1);
            getHunter(1);
            chosenGods = [];
            break;
        case "hunterHeavy":
            getHunter(2);
            getGuardian(1);
            getMage(1);
            getWarrior(1);
            chosenGods = [];
            break;
        case "mageHeavy":
            getMage(2);
            getGuardian(1);
            getHunter(1);
            getWarrior(1);
            chosenGods = [];
            break;
        case "warriorHeavy":
            getWarrior(2);
            getHunter(1);
            getMage(1);
            getGuardian(1);
            chosenGods = [];
            break;
        case "guardianHeavy":
            getGuardian(2);
            getHunter(1);
            getMage(1);
            getAssassin(1);
            chosenGods = [];
            break;
    }
}

function team_three() {
    let key = document.getElementById("team_3v3").value;
    switch (key) {
    case "balanced_3v3":
            balanced(3);
            chosenGods = [];
            break;
        case "protectThePresidentA":
            getGuardian(2);
            getHunter(1);
            chosenGods = [];
            break;
        case "protectThePresidentB":
            getWarrior(2);
            getMage(1);
            chosenGods = [];
            break;
        case "protectThePresidentC":
            getGuardian(1);
            getWarrior(1);
            // getAdc(1);
            chosenGods = [];
            break;
        case "diveTheSquishy":
            getGuardian(1);
            getWarrior(1);
            getAssassin(1);
            chosenGods = [];
            break;
    }
}

function troll_five() {
    let key = document.getElementById("troll_5v5").value;
    switch(key) {
    case "allAssassinsFive":
        getAssassin(5);
        chosenGods = [];
        break;
    case "allHuntersFive":
        getHunter(5);
        chosenGods = [];
        break;
    case "allWarriorsFive":
        getWarrior(5);
        chosenGods = [];
        break;
    case "allGuardiansFive":
        getGuardian(5);
        chosenGods = [];
        break;
    case "allMagesFive":
        getMage(5);
        chosenGods = [];
        break;
        
        default:
            break;
    }
}

function troll_three() {
    let key = document.getElementById("troll_3v3").value;
    switch(key) {
    case "allAssassinsThree":
        getAssassin(3);
        chosenGods = [];
        break;
    case "allHuntersThree":
        getHunter(3);
        chosenGods = [];
        break;
    case "allWarriorsThree":
        getWarrior(3);
        chosenGods = [];
        break;
    case "allGuardiansThree":
        getGuardian(3);
        chosenGods = [];
        break;
    case "allMagesThree":
        getMage(3);
        chosenGods = [];
        break;
        
        default:
            break;
    }
}


function showGods() {
    // document.getElementById("showGods").innerHTML = chosenGods + "\n";
    let gods = document.getElementById("showGods");
    gods.innerHTML = "";
    for(var i = 0; i < chosenGods.length; i++) {

        gods.innerHTML += "<li>" + chosenGods[i] + "</li>";
    }
}

document.getElementById("showGods").addEventListener("onclick", showGods);

var GuardianArray = ["Ares", "Artio", "Athena", "Atlas", "Bacchus", "Cabrakan", "Cerberus", "Cthulu", "Fafnir", "Ganesha", "Geb", 
"Jormungandr", "Khepri", "Kumbhakarna", "Kuzenbo", "Sobek", "Sylvanus", "Terra", "Xing Tian", "Yemoja", "Ymir"];

var WarriorArray = ["Achilles", "Amaterasu", "Bellona", "Chaac", "Cu Chulainn", "Erlang Shen", "Gilgamesh", "Guan Yu", "Hercules", "Horus", "King Arthur",
"Mulan", "Nike", "Odin", "Osiris", "Shiva", "Sun Wukong", "Tyr", "Vamana"];

var HunterArray = ["Ah Muzen Cab", "Anhur", "Apollo", "Artemis", "Cernunnos", "Charybdis", "Chernobog", "Chiron", "Cupid", "Danzaburou",
"Hachiman", "Heimdallr", "Hou Yi", "Izanami", "Jing Wei", "Medusa", "Neith", "Rama", "Skadi", "Ullr", "Xbalanque"];

var AssassinArray = ["Arachne", "Awilix", "Bakasura", "Bastet", "Camazotz", "Cliodhna", "Da Ji", "Fenrir", "Hun Batz", "Kali", "Loki",
"Mercury", "Ne Zha", "Nemesis", "Pele", "Ratatoskr", "Ravana", "Serqet", "Set", "Susano", "Thanatos", "Thor", "Tsukuyomi"];

var MageArray = ["Yu Huang", "Agni", "Ah Puch", "Anubis", "Ao Kuang", "Aphrodite", "Baba Yaga", "Baron Samedi", "Chang'E", "Chronos",
"Discordia", "Eset", "Freya", "Hades", "He Bo", "Hel", "Hera", "Janus", "Kukulkan", "Merlin", "Morgan Le Fay", "Nox", "Nu Wa", "Olorun", 
"Persephone", "Poseidon", "Ra", "Raijin", "Scylla", "Sol", "The Morrigan", "Thoth", "Tiamat", "Vulcan", "Zeus", "Zhong Kui"];


var chosenGuardians = [];
var chosenWarriors = [];
var chosenAssassins = [];
var chosenHunters = [];
var chosenMages = [];
var chosenGods = [];


function getRandomInt(max) {
    return Math.floor(Math.random()*max);;
}

function randomGuardian() {
    let num = GuardianArray[getRandomInt(GuardianArray.length)];
    chosenGuardians.push(num);
    chosenGods.push(num);
    // console.log(GuardianArray[getRandomInt(GuardianArray.length)]);
    // console.log(chosenGuardians);
}

function randomWarrior() {
    let num = WarriorArray[getRandomInt(WarriorArray.length)];
    chosenWarriors.push(num);
    chosenGods.push(num);
    // console.log(WarriorArray[getRandomInt(WarriorArray.length)]);
    // console.log(chosenWarriors);
}

function randomHunter() {
    let num = HunterArray[getRandomInt(HunterArray.length)];
    chosenHunters.push(num);
    chosenGods.push(num);
    // console.log(HunterArray[getRandomInt(HunterArray.length)]);
    // console.log(chosenHunters);
}

function randomAssassin() {
    let num = AssassinArray[getRandomInt(AssassinArray.length)];
    chosenAssassins.push(num);
    chosenGods.push(num);
    // console.log(AssassinArray[getRandomInt(AssassinArray.length)]);
    // console.log(chosenAssassins);
}

function randomMage() {
    let num = MageArray[getRandomInt(MageArray.length)];
    chosenMages.push(num);
    chosenGods.push(num);
    // console.log(MageArray[getRandomInt(MageArray.length)]);
    // console.log(chosenMages);
}

function balanced(size) {
    if(size == "5") {
       randomGuardian();
       randomMage();
       randomWarrior();
       randomHunter();
       randomAssassin();
       showGods();
       chosenWarriors = [];
       chosenHunters = [];
       chosenMages = [];
       chosenGuardians = [];
       chosenAssassins = []; 
    } else if(size == "3") {
        randomGuardian();
        randomHunter();
        randomMage();
        showGods();
        chosenGuardians = [];
        chosenHunters = [];
        chosenMages = [];
    }
}

function getAssassin(size) {

    if(size == 1) {
        randomAssassin();
    } else {
    
        let i = 0;
        while(i < size) {
            randomAssassin();
            i++;
            // console.log(chosenGods);
        }
    }

    showGods();
    chosenAssassins = [];
}

function getGuardian(size) {
    let i = 0;
    while(i < size) {
        randomGuardian();
        i++;
    }
    showGods();
    chosenGuardians = [];
}

function getWarrior(size) {
    let i = 0;
    while(i < size) {
        randomWarrior();
        i++;
    }
    showGods();
    chosenWarriors = [];
}

function getHunter(size) {
    let i = 0;
    while(i < size) {
        randomHunter();
        i++;
    }
    showGods();
    chosenHunters = [];
}

function getMage(size) {
    let i = 0;
    while(i < size) {
        randomMage();
        i++;
    }
    showGods();
    chosenMages = [];
}



