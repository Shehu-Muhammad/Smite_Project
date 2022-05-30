var cleanlist = [];
var selected = [];
var gods = [];

function God(name, image, type, role, duty) {
    this.name = name;
    this.image = image;
    this.type = type;
    this.role = role;
    this.duty = duty;
}

//Guardians
const Ares = new God('Ares', '', 'Magical', 'Guardian', 'Tank');
const Artio = new God('Artio', '', 'Magical', 'Guardian', 'Tank');
const Athena = new God('Athena', '', 'Magical', 'Guardian', 'Tank');
const Atlas = new God('Atlas', '', 'Magical', 'Guardian', 'Tank');
const Bacchus = new God('Bacchus', '', 'Magical', 'Guardian', 'Tank');
const Cabrakan = new God('Cabrakan', '', 'Magical', 'Guardian', 'Tank');
const Cerberus = new God('Cerberus', '', 'Magical', 'Guardian', 'Tank');
const Cthulhu = new God('Cthulhu', '', 'Magical', 'Guardian', 'Tank');
const Fafnir = new God('Fafnir', '', 'Magical', 'Guardian', 'Tank');
const Ganesha = new God('Ganesha', '', 'Magical', 'Guardian', 'Tank');
const Geb = new God('Geb', '', 'Magical', 'Guardian', 'Tank');
const Jormungandr = new God('Jormungandr', '', 'Magical', 'Guardian', 'Tank');
const Khepri = new God('Khepri', '', 'Magical', 'Guardian', 'Tank');
const Kumbhakarna = new God('Kumbhakarna', '', 'Magical', 'Guardian', 'Tank');
const Kuzembo = new God('Kuzembo', '', 'Magical', 'Guardian', 'Tank');
const Sobek = new God('Sobek', '', 'Magical', 'Guardian', 'Tank');
const Sylvanus = new God('Sylvanus', '', 'Magical', 'Guardian', 'Tank');
const Terra = new God('Terra', '', 'Magical', 'Guardian', 'Tank');
const Xing_Tian = new God('Xing Tian', '', 'Magical', 'Guardian', 'Tank');
const Yemoja = new God('Yemoja', '', 'Magical', 'Guardian', 'Tank');
const Ymir = new God('Ymir', '', 'Magical', 'Guardian', 'Tank');

//Warriors
const Achilles = new God('Achilles', '', 'Physical', 'Warrior', 'Hybrid');
const Amaterasu = new God('Amaterasu', '', 'Physical', 'Warrior', 'Hybrid');
const Bellona = new God('Bellona', '', 'Physical', 'Warrior', 'Hybrid');
const Chaac = new God('Chaac', '', 'Physical', 'Warrior', 'Hybrid');
const Cu_Chulainn = new God('Cu Chulainn', '', 'Physical', 'Warrior', 'Hybrid');
const Erlang_Shen = new God('Erlang Shen', '', 'Physical', 'Warrior', 'Hybrid');
const Gilgamesh = new God( 'Gilgamesh', '', 'Physical', 'Warrior', 'Hybrid');
const Guan_Yu= new God('Guan Yu', '', 'Physical', 'Warrior', 'Hybrid');
const Hercules = new God('Hercules', '', 'Physical', 'Warrior', 'Hybrid');
const Horus = new God('Horus', '', 'Physical', 'Warrior', 'Hybrid');
const King_Arthur = new God('King Arthur', '', 'Physical', 'Warrior', 'Hybrid');
const Mulan = new God('Mulan', '', 'Physical', 'Warrior', 'Hybrid');
const Nike = new God('Nike', '', 'Physical', 'Warrior', 'Hybrid');
const Odin = new God('Odin', '', 'Physical', 'Warrior', 'Hybrid');
const Osiris = new God('Osiris', '', 'Physical', 'Warrior', 'Hybrid');
const Shiva = new God('Shiva', '', 'Physical', 'Warrior', 'Hybrid');
const Sun_Wukong = new God('Sun Wukong', '', 'Physical', 'Warrior', 'Hybrid');
const Tyr = new God('Tyr', '', 'Physical', 'Warrior', 'Hybrid');
const Vamana = new God('Vamana', '', 'Physical', 'Warrior', 'Hybrid');

//Hunters
const Ah_Muzen_Cab = new God('Ah Muzen Cab', '', 'Physical', 'Hunter', 'ADC');
const Anhur = new God('Anhur', '', 'Physical', 'Hunter', 'ADC');
const Apollo = new God('Apollo', '', 'Physical', 'Hunter', 'ADC');
const Artemis = new God('Artemis', '', 'Physical', 'Hunter', 'ADC');
const Cernunnos = new God('Cernunnos', '', 'Physical', 'Hunter', 'ADC');
const Charybdis = new God('Charybdis', '', 'Physical', 'Hunter', 'ADC');
const Chernobog = new God('Chernobog', '', 'Physical', 'Hunter', 'ADC');
const Chiron = new God('Chiron', '', 'Physical', 'Hunter', 'ADC');
const Cupid = new God('Cupid', '', 'Physical', 'Hunter', 'ADC');
const Danzaburou = new God('Danzaburou', '', 'Physical', 'Hunter', 'ADC');
const Hachiman = new God('Hachiman', '', 'Physical', 'Hunter', 'ADC');
const Heimdallr = new God('Heimdallr', '', 'Physical', 'Hunter', 'ADC');
const Hou_Yi = new God('Hou Yi', '', 'Physical', 'Hunter', 'ADC');
const Izanami = new God('Izanami', '', 'Physical', 'Hunter', 'ADC');
const Jing_Wei = new God('Jing Wei', '', 'Physical', 'Hunter', 'ADC');
const Medusa = new God('Medusa', '', 'Physical', 'Hunter', 'ADC');
const Neith = new God('Neith', '', 'Physical', 'Hunter', 'ADC');
const Rama = new God('Rama', '', 'Physical', 'Hunter', 'ADC');
const Skadi = new God('Skadi', '', 'Physical', 'Hunter', 'ADC');
const Ullr = new God('Ullr', '', 'Physical', 'Hunter', 'ADC');
const Xbalanque = new God('Xbalanque', '', 'Physical', 'Hunter', 'ADC');

//Assassins
const Arachne = new God('Arachne', '', 'Physical', 'Assassin', 'Eliminator');
const Awilix = new God('Awilix', '', 'Physical', 'Assassin', 'Eliminator');
const Bakasura = new God('Bakasura', '', 'Physical', 'Assassin', 'Eliminator');
const Bastet = new God('Bastet', '', 'Physical', 'Assassin', 'Eliminator');
const Camazotz = new God('Camazotz', '', 'Physical', 'Assassin', 'Eliminator');
const Cliodhna = new God('Cliodhna', '', 'Physical', 'Assassin', 'Eliminator');
const Da_Ji = new God('Da Ji', '', 'Physical', 'Assassin', 'Eliminator');
const Fenrir = new God('Fenrir', '', 'Physical', 'Assassin', 'Eliminator');
const Hun_Batz = new God('Hun Batz', '', 'Physical', 'Assassin', 'Eliminator');
const Kali = new God('Kali', '', 'Physical', 'Assassin', 'Eliminator');
const Loki = new God('Loki', '', 'Physical', 'Assassin', 'Eliminator');
const Mercury = new God('Mercury', '', 'Physical', 'Assassin', 'Eliminator');
const Ne_Zha = new God('Ne Zha', '', 'Physical', 'Assassin', 'Eliminator');
const Nemesis = new God('Nemesis', '', 'Physical', 'Assassin', 'Eliminator');
const Pele = new God('Pele', '', 'Physical', 'Assassin', 'Eliminator');
const Ratatoskr = new God('Ratatoskr', '', 'Physical', 'Assassin', 'Eliminator');
const Ravana = new God('Ravana', '', 'Physical', 'Assassin', 'Eliminator');
const Serqet = new God('Serqet', '', 'Physical', 'Assassin', 'Eliminator');
const Set = new God('Set', '', 'Physical', 'Assassin', 'Eliminator');
const Susano = new God('Susano', '', 'Physical', 'Assassin', 'Eliminator');
const Thanatos = new God('Thanatos', '', 'Physical', 'Assassin', 'Eliminator');
const Thor = new God('Thor', '', 'Physical', 'Assassin', 'Eliminator');
const Tsukuyomi = new God('Tsukuyomi', '', 'Physical', 'Assassin', 'Eliminator');

//Mages
const Yu_Huang = new God('Yu Huang', '', 'Magical', 'Mage', 'Burst');
const Agni = new God('Agni', '', 'Magical', 'Mage', 'Burst');
const Ah_Puch = new God('Ah Puch', '', 'Magical', 'Mage', 'Burst');
const Anubis = new God('Anubis', '', 'Magical', 'Mage', 'Burst');
const Ao_Kuang = new God('Ao Kuang', '', 'Magical', 'Mage', 'Burst');
const Aphrodite = new God('Aphrodite', '', 'Magical', 'Mage', 'Burst');
const Baba_Yaga = new God('Baba Yaga', '', 'Magical', 'Mage', 'Burst');
const Baron_Samedi = new God('Baron Samedi', '', 'Magical', 'Mage', 'Burst');
const Chang_E = new God('Chang\'E', '', 'Magical', 'Mage', 'Burst');
const Chronos = new God('Chronos', '', 'Magical', 'Mage', 'ADC');
const Discordia = new God('Discordia', '', 'Magical', 'Mage', 'Burst');
const Eset = new God('Eset', '', 'Magical', 'Mage', 'Burst');
const Freya = new God('Freya', '', 'Magical', 'Mage', 'ADC');
const Hades = new God('Hades', '', 'Magical', 'Mage', 'Burst');
const He_Bo = new God('He Bo', '', 'Magical', 'Mage', 'Burst');
const Hel = new God('Hel', '', 'Magical', 'Mage', 'Burst');
const Hera = new God('Hera', '', 'Magical', 'Mage', 'Burst');
const Janus = new God('Janus', '', 'Magical', 'Mage', 'Burst');
const Kukulkan = new God('Kukulkan', '', 'Magical', 'Mage', 'Burst');
const Merlin = new God('Merlin', '', 'Magical', 'Mage', 'Burst');
const Morgan_Le_Fay = new God('Morgan Le Fay', '', 'Magical', 'Mage', 'Burst');
const Nox = new God('Nox', '', 'Magical', 'Mage', 'Burst');
const Nu_Wa = new God('Nu Wa', '', 'Magical', 'Mage', 'Burst');
const Olorun = new God('Olorun', '', 'Magical', 'Mage', 'ADC');
const Persephone = new God('Persephone', '', 'Magical', 'Mage', 'Burst');
const Poseidon = new God('Poseidon', '', 'Magical', 'Mage', 'Burst');
const Ra = new God('Ra', '', 'Magical', 'Mage', 'Burst');
const Raijin = new God('Raijin', '', 'Magical', 'Mage', 'Burst');
const Scylla = new God('Scylla', '', 'Magical', 'Mage', 'Burst');
const Sol = new God('Sol', '', 'Magical', 'Mage', 'Burst');
const The_Morrigan = new God('The Morrigan', '', 'Magical', 'Mage', 'Burst');
const Thoth = new God('Thoth', '', 'Magical', 'Mage', 'Burst');
const Tiamat = new God('Tiamat', '', 'Magical', 'Mage', 'Burst');
const Vulcan = new God('Vulcan', '', 'Magical', 'Mage', 'Burst');
const Zeus = new God('Zeus', '', 'Magical', 'Mage', 'Burst');
const Zhong_Kui = new God('Zhong Kui', '', 'Magical', 'Mage', 'Burst');

gods.push(Ares);
gods.push(Artio);
gods.push(Athena);
gods.push(Atlas);
gods.push(Bacchus);
gods.push(Cabrakan);
gods.push(Cerberus);
gods.push(Cthulhu);
gods.push(Fafnir);
gods.push(Ganesha);
gods.push(Geb);
gods.push(Jormungandr);
gods.push(Khepri);
gods.push(Kumbhakarna);
gods.push(Kuzembo);
gods.push(Sobek);
gods.push(Sylvanus);
gods.push(Terra);
gods.push(Xing_Tian);
gods.push(Yemoja);
gods.push(Ymir);
gods.push(Achilles);
gods.push(Amaterasu);
gods.push(Bellona);
gods.push(Chaac);
gods.push(Cu_Chulainn);
gods.push(Erlang_Shen);
gods.push(Gilgamesh);
gods.push(Guan_Yu);
gods.push(Hercules);
gods.push(Horus);
gods.push(King_Arthur);
gods.push(Mulan);
gods.push(Nike);
gods.push(Odin);
gods.push(Osiris);
gods.push(Shiva);
gods.push(Sun_Wukong);
gods.push(Tyr);
gods.push(Vamana);
gods.push(Ah_Muzen_Cab);
gods.push(Anhur);
gods.push(Apollo);
gods.push(Artemis);
gods.push(Cernunnos);
gods.push(Charybdis);
gods.push(Chernobog);
gods.push(Chiron);
gods.push(Cupid);
gods.push(Danzaburou);
gods.push(Hachiman);
gods.push(Heimdallr);
gods.push(Hou_Yi);
gods.push(Izanami);
gods.push(Jing_Wei);
gods.push(Medusa);
gods.push(Neith);
gods.push(Rama);
gods.push(Skadi);
gods.push(Ullr);
gods.push(Xbalanque);
gods.push(Yu_Huang);
gods.push(Agni);
gods.push(Ah_Puch);
gods.push(Anubis);
gods.push(Ao_Kuang);
gods.push(Aphrodite);
gods.push(Baba_Yaga);
gods.push(Baron_Samedi);
gods.push(Chang_E);
gods.push(Chronos);
gods.push(Discordia);
gods.push(Eset);
gods.push(Freya);
gods.push(Hades);
gods.push(He_Bo);
gods.push(Hel);
gods.push(Hera);
gods.push(Janus);
gods.push(Kukulkan);
gods.push(Merlin);
gods.push(Morgan_Le_Fay);
gods.push(Nox);
gods.push(Nu_Wa);
gods.push(Olorun);
gods.push(Persephone);
gods.push(Poseidon);
gods.push(Ra);
gods.push(Raijin);
gods.push(Scylla);
gods.push(Sol);
gods.push(The_Morrigan);
gods.push(Thoth);
gods.push(Tiamat);
gods.push(Vulcan);
gods.push(Zeus);
gods.push(Zhong_Kui);
gods.push(Arachne);
gods.push(Awilix);
gods.push(Bakasura);
gods.push(Bastet);
gods.push(Camazotz);
gods.push(Cliodhna);
gods.push(Da_Ji);
gods.push(Fenrir);
gods.push(Hun_Batz);
gods.push(Kali);
gods.push(Loki);
gods.push(Mercury);
gods.push(Ne_Zha);
gods.push(Nemesis);
gods.push(Pele);
gods.push(Ratatoskr);
gods.push(Ravana);
gods.push(Serqet);
gods.push(Set);
gods.push(Susano);
gods.push(Thanatos);
gods.push(Thor);
gods.push(Tsukuyomi);

//https://dev.to/sagdish/generate-unique-non-repeating-random-numbers-g6g
function randomUniqueNum(range, outputCount) {
    let arr = []
    for (let i = 1; i <= range; i++) {
      arr.push(i)
    }
  
    let result = [];
  
    for (let i = 1; i <= outputCount; i++) {
      const random = Math.floor(Math.random() * (range - i));
      result.push(arr[random]);
      arr[random] = arr[range - i];
    }
  
    return result;
  }

//filters gods by role  
function filterByRole(role) {
    for(var i = 0; i < gods.length; i++){
        if(gods[i].role == role) {
            selected.push(gods[i].name);
        }
    }
    return selected;
}

function filterByDuty(duty) {
    for(var i = 0; i < gods.length; i++){
        if(gods[i].duty == duty) {
            selected.push(gods[i].name);
        }
    }
    return selected;
}

//randomly selects gods
function chooseGods(num, selected) {
    if(num == 1) {
        randomNumbers(num, selected);
    } else if(num == 2) {
        randomNumbers(num, selected);
    } else if(num == 3) {
        randomNumbers(num, selected);
    } else if(num == 4) {
        randomNumbers(num, selected);
    } else if( num == 5) {
        randomNumbers(num, selected);
    }
    return cleanlist;
}

//creates number to randomly select gods *Tries to avoids duplicates*
function randomNumbers(num, selected){
    let choices = randomUniqueNum(selected.length-1, num);
    for(var i = 0; i < choices.length; i++) {
        cleanlist.push(selected[choices[i]]);
    }
}

//5v5 Team Comps
function balanced(num) {
    if(num == "5") {
        filterByRole('Guardian');
        chooseGods(1, selected);
        selected = [];
        filterByRole('Warrior');
        chooseGods(1, selected);
        selected = [];
        filterByRole('Mage');
        chooseGods(1, selected);
        selected = [];
        filterByRole('Hunter');
        chooseGods(1, selected);
        selected = [];
        filterByRole('Assassin');
        chooseGods(1, selected);
        selected = [];
    } else if(num == "3") {
        filterByRole('Guardian');
        chooseGods(1, selected);
        selected = [];
        filterByRole('Mage');
        chooseGods(1, selected);
        selected = [];
        filterByRole('Hunter');
        chooseGods(1, selected);
        selected = [];
    }
}

function assassinHeavy() {
    filterByRole('Assassin');
    chooseGods(2, selected);
    selected = [];
    filterByRole('Guardian');
    chooseGods(1, selected);
    selected = [];
    filterByRole('Mage');
    chooseGods(1, selected);
    selected = [];
    filterByRole('Hunter');
    chooseGods(1, selected);
    selected = [];
}

function hunterHeavy() {
    filterByRole('Hunter');
    chooseGods(2, selected);
    selected = [];
    filterByRole('Guardian');
    chooseGods(1, selected);
    selected = [];
    filterByRole('Mage');
    chooseGods(1, selected);
    selected = [];
    filterByRole('Warrior');
    chooseGods(1, selected);
    selected = [];
}

function mageHeavy() {
    filterByRole('Mage');
    chooseGods(2, selected);
    selected = [];
    filterByRole('Guardian');
    chooseGods(1, selected);
    selected = [];
    filterByRole('Hunter');
    chooseGods(1, selected);
    selected = [];
    filterByRole('Warrior');
    chooseGods(1, selected);
    selected = [];
}

function warriorHeavy() {
    filterByRole('Warrior');
    chooseGods(2, selected);
    selected = [];
    filterByRole('Hunter');
    chooseGods(1, selected);
    selected = [];
    filterByRole('Mage');
    chooseGods(1, selected);
    selected = [];
    filterByRole('Guardian');
    chooseGods(1, selected);
    selected = [];
}

function guardianHeavy() {
    filterByRole('Guardian');
    chooseGods(2, selected);
    selected = [];
    filterByRole('Hunter');
    chooseGods(1, selected);
    selected = [];
    filterByRole('Mage');
    chooseGods(1, selected);
    selected = [];
    filterByRole('Assassin');
    chooseGods(1, selected);
    selected = [];
}

//3v3 Team Comps
function protectThePresidentA() {
    filterByRole('Guardian');
    chooseGods(2, selected);
    selected = [];
    filterByRole('Hunter');
    chooseGods(1, selected);
    selected = [];
}

function protectThePresidentB() {
    filterByRole('Warrior');
    chooseGods(2, selected);
    selected = [];
    filterByRole('Mage');
    chooseGods(1, selected);
    selected = [];
}

function protectThePresidentC() {
    filterByRole('Guardian');
    chooseGods(1, selected);
    selected = [];
    filterByRole('Warrior');
    chooseGods(1, selected);
    selected = [];
    filterByDuty('ADC');
    chooseGods(1, selected);
    selected = [];
}

function diveTheSquishy() {
    filterByRole('Guardian');
    chooseGods(1, selected);
    selected = [];
    filterByRole('Warrior');
    chooseGods(1, selected);
    selected = [];
    filterByRole('Assassin');
    chooseGods(1, selected);
    selected = [];
}

//5v5 Troll Comps
function troll_five() {
    let key = document.getElementById("troll_5v5").value;
    switch(key) {
    case "allAssassinsFive":
        troll(5, 'Assassin');
        showGods();
        break;
    case "allHuntersFive":
        troll(5, 'Hunter');
        showGods();
        break;
    case "allWarriorsFive":
        troll(5, 'Warrior');
        showGods();
        break;
    case "allGuardiansFive":
        troll(5, 'Guardian');
        showGods();
        break;
    case "allMagesFive":
        troll(5, 'Mage');
        showGods();
        break;
        
        default:
            break;
    }
}

//3v3 Troll Comps
function troll_three() {
    let key = document.getElementById("troll_3v3").value;
    switch(key) {
    case "allAssassinsThree":
        troll(3, 'Assassin');
        showGods();
        break;
    case "allHuntersThree":
        troll(3, 'Hunter');
        showGods();
        break;
    case "allWarriorsThree":
        troll(3, 'Warrior');
        showGods();
        break;
    case "allGuardiansThree":
        troll(3, 'Guardian');
        showGods();
        break;
    case "allMagesThree":
        troll(3, 'Mage');
        showGods();
        break;
        
        default:
            break;
    }
}

//Creates troll comp of all the same role
function troll(num, role) {
    filterByRole(role);
    chooseGods(num, selected);
    selected = [];
}

//3-Stack Switch Case
function team_three() {
    let key = document.getElementById("team_3v3").value;
    switch (key) {
    case "balanced_3v3":
            balanced(3);
            showGods();
            break;
        case "protectThePresidentA":
            protectThePresidentA();
            showGods();
            break;
        case "protectThePresidentB":
            protectThePresidentB();
            showGods();
            break;
        case "protectThePresidentC":
            protectThePresidentC();
            showGods();
            break;
        case "diveTheSquishy":
            diveTheSquishy();
            showGods();
            break;
    }
}

//5-Stack Switch Case
function team_five() {
    let key = document.getElementById("team_5v5").value;
    switch (key) {
        case "balanced_5v5":
            balanced(5);
            showGods();
            break;
        case "assassinHeavy":
            assassinHeavy();
            showGods();
            break;
        case "hunterHeavy":
            hunterHeavy();
            showGods();
            break;
        case "mageHeavy":
            mageHeavy();
            showGods();
            break;
        case "warriorHeavy":
            warriorHeavy();
            showGods();
            break;
        case "guardianHeavy":
            guardianHeavy();
            showGods();
            break;
    }
}

//Toggles the legend info
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

//Displays the data to the front end
function showGods() {
    // document.getElementById("showGods").innerHTML = chosenGods + "\n";
    let gods = document.getElementById("showGods");
    gods.innerHTML = "";
    for(var i = 0; i < cleanlist.length; i++) {

        gods.innerHTML += "<li>" + cleanlist[i] + "</li>";
    }
    cleanlist = [];
}

document.getElementById("showGods").addEventListener("onclick", showGods);