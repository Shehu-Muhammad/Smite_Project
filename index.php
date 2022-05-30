<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Smite Random Gods Generator</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="flex-container">
        
    <h1>Select a team comp from dropdown and generate your gods</h1>
    <div class="flex-container">
        <label>Select a 5v5 Team Comp</label><br>
        <select id="team_5v5">
            <option disabled value="#">5v5 Comps</option>
            <option value="balanced_5v5">Balanced</option>
            <option value="assassinHeavy">Assassin Heavy</option>
            <option value="hunterHeavy">Hunter Heavy</option>
            <option value="mageHeavy">Mage Heavy</option>
            <option value="warriorHeavy">Warrior Heavy</option>
            <option value="guardianHeavy">Guardian Heavy</option>
        </select>
        <button name="submitTeamSize" onclick="team_five()">Generate 5-Stack</button><br>
    </div>
    <div class="flex-container">
        <label>Select a 3v3 Team Comp</label><br>
        <select id="team_3v3">
            <option disabled value="#">3v3 Comps</option>
            <option value="balanced_3v3">Balanced</option>
            <option value="protectThePresidentA">Protect the President Type A</option>
            <option value="protectThePresidentB">Protect the President Type B</option>
            <option value="protectThePresidentC">Protect the President Type C</option>
            <option value="diveTheSquishy">Dive the Squishy</option>
        </select>
        <button name="submitTeamSize" onclick="team_three()">Generate 3-Stack</button><br>
    </div>
    <div class="flex-container">
        <label>Select a 3v3 Troll Comp</label><br>
        <select id="troll_3v3">
            <option disabled value="#">3v3 Troll Comps</option>
            <option value="allAssassinsThree">All Assassin</option>
            <option value="allHuntersThree">All Hunters</option>
            <option value="allWarriorsThree">All Warriors</option>
            <option value="allGuardiansThree">All Guardians</option>
            <option value="allMagesThree">All Mages</option>
        </select>
        <button name="submitTeamSize" onclick="troll_three()">Generate Troll 3-Stack</button><br>
    </div>
    <div class="flex-container">
        <label>Select a 5v5 Troll Comp</label><br>
        <select id="troll_5v5">
            <option disabled value="#">5v5 Troll Comps</option>
            <option value="allAssassinsFive">All Assassin</option>
            <option value="allHuntersFive">All Hunters</option>
            <option value="allWarriorsFive">All Warriors</option>
            <option value="allGuardiansFive">All Guardians</option>
            <option value="allMagesFive">All Mages</option>
        </select>
        <button name="submitTeamSize" onclick="troll_five()">Generate Troll 5-Stack</button><br>
    </div>
    <h2>Legend</h2>
    <button class="showHideLegend" onclick="showLegend()">Hide Legend</button>
    <div class="legend showInfo">

        <ul>
            <p>5v5 Team Comps Explained</p>
            <li>Balanced: One Guardian, One Mage, One Warrior, One Hunter, and One Assassin</li>
            <li>Assassin Heavy: Two Assassins, One Guardian, One Mage, and One Hunter</li>
            <li>Hunter Heavy: Two Hunters, One Guardian, One Mage, and One Warrior</li>
            <li>Mage Heavy: Two Mages, One Guardian, One Hunter, and One Warrior</li>
            <li>Warrior Heavy: Two Warriors, One Hunter, One Mage, and One Guardian</li>
            <li>Guardian Heavy: Two Guardians, One Hunter, One Mage, and One Assassin</li>
        </ul>
        <ul>
            <p>3v3 Team Comps Explained</p>
            <li>Balanced: One Guardian, One Mage, One Hunter</li>
            <li>Protect the President Type A: Two Guardians and One Hunter</li>
            <li>Protect the President Type B: Two Warriors and One Mage</li>
            <li>Protect the President Type C: One Guardian, One Warrior, and One ADC (could be magical or physical)</li>
            <li>Dive the Squishies: One Guardian, One Warrior, and One Assassin</li>
        </ul>
        <ul>
            <p>Troll Comps Explained</p>
            <li>All Assassins: All Assassins</li>
            <li>All Hunters: All Hunters</li>
            <li>All Warriors: All Warriors</li>
            <li>All Guardians: All Guardians</li>
            <li>All Mages: All Mages</li>
        </ul>
    </div>
    
    <div class="flex-container">
        <ol>
            <p>Your Selected Team Comp</p>
            <p id="showGods"></p>
            <p>1 v 1 and 2 v 2 coming Soon!</p>
        </ol>
    </div>
    
</div>

<script src="index.js"></script>
</body>
</html>