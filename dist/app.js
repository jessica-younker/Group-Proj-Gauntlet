(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
/*
  TODO: Modularize this code with IIFE or Browserify
 */
console.log("classes.js linked");

var GuildHall = {};
/*
  Base function for a player, or enemy, class (profession)
 */
GuildHall.PlayerClass = function() {
  this.name = "Beggar";
  this.healthBonus = 0;
  this.strengthBonus = 0;
  this.intelligenceBonus = 0;
  this.magical = false;

  this.toString = function() {
    return this.name;
  };
};

/*
    FIGHTER CLASSES
      - Warrior
      - Valkyrie
      - Berserker
      - Monk
 */

GuildHall.Fighter = function() {
  this.healthBonus = 20;
  this.strengthBonus = 10;
  this.intelligenceBonus = this.intelligenceBonus - 10;
};
GuildHall.Fighter.prototype = new GuildHall.PlayerClass();


GuildHall.Warrior = function() {
  this.name = "Warrior";
  this.healthBonus = this.healthBonus + 25;
  this.strengthBonus = this.strengthBonus + 30;
};
GuildHall.Warrior.prototype = new GuildHall.Fighter();


GuildHall.Valkyrie = function() {
  this.name = "Valkyrie";
  this.healthBonus = this.healthBonus + 20;
  this.strengthBonus = this.strengthBonus + 10;
};
GuildHall.Valkyrie.prototype = new GuildHall.Fighter();


GuildHall.Berserker = function() {
  this.name = "Berserker";
  this.healthBonus = this.healthBonus + 35;
  this.strengthBonus = this.strengthBonus + 20;
};
GuildHall.Berserker.prototype = new GuildHall.Fighter();


GuildHall.Monk = function() {
  this.name = "Monk";
  this.healthBonus = this.healthBonus + 10;
  this.strengthBonus = this.strengthBonus + 40;
};
GuildHall.Monk.prototype = new GuildHall.Fighter();


/*
    MAGICAL CLASSES
      - Shaman
      - Wizard
      - Conujurer
      - Sorcerer
 */
GuildHall.Mage = function() {
  this.name = "Mage";
  this.magical = true;
  this.healthBonus = this.healthBonus - 10;
  this.strengthBonus = this.strengthBonus - 20;
  this.intelligenceBonus = this.intelligenceBonus + 20;
};
GuildHall.Mage.prototype = new GuildHall.PlayerClass();


GuildHall.Shaman = function() {
  this.name = "Shaman";
  this.healthBonus = this.healthBonus + 5;
  this.strengthBonus = this.strengthBonus - 10;
  this.intelligenceBonus = this.intelligenceBonus + 20;
};
GuildHall.Shaman.prototype = new GuildHall.Mage();


GuildHall.Wizard = function() {
  this.name = "Wizard";
  this.healthBonus = this.healthBonus - 15;
  this.strengthBonus = this.strengthBonus - 25;
  this.intelligenceBonus = this.intelligenceBonus + 40;
};
GuildHall.Wizard.prototype = new GuildHall.Mage();


GuildHall.Conjurer = function() {
  this.name = "Conjurer";
  this.strengthBonus = this.strengthBonus - 10;
  this.intelligenceBonus = this.intelligenceBonus + 10;
};
GuildHall.Conjurer.prototype = new GuildHall.Mage();


GuildHall.Sorcerer = function() {
  this.name = "Sorcerer";
  this.healthBonus = this.healthBonus - 5;
  this.strengthBonus = this.strengthBonus - 20;
  this.intelligenceBonus = this.intelligenceBonus + 30;
};
GuildHall.Sorcerer.prototype = new GuildHall.Mage();



/*
    STEALTH CLASSES
      - Thief
      - Ninja
      - Assassin
 */
GuildHall.Stealth = function() {
  this.name = "Stealth";
  this.healthBonus = this.healthBonus + 15;
  this.strengthBonus = this.strengthBonus + 5;
  this.intelligenceBonus = this.intelligenceBonus + 10;
};
GuildHall.Stealth.prototype = new GuildHall.PlayerClass();


GuildHall.Thief = function() {
  this.name = "Thief";
  this.healthBonus = this.healthBonus + 50;
  this.strengthBonus = this.strengthBonus + 50;
  this.intelligenceBonus = this.intelligenceBonus + 50;
};
GuildHall.Thief.prototype = new GuildHall.Stealth();


GuildHall.Ninja = function() {
  this.name = "Ninja";
  this.healthBonus = this.healthBonus + 5;
  this.strengthBonus = this.strengthBonus + 15;
  this.intelligenceBonus = this.intelligenceBonus + 40;
};
GuildHall.Ninja.prototype = new GuildHall.Stealth();


GuildHall.Assassin = function() {
  this.name = "Assassin";
  this.healthBonus = this.healthBonus - 15;
  this.strengthBonus = this.strengthBonus + 10;
  this.intelligenceBonus = this.intelligenceBonus + 80;
};
GuildHall.Assassin.prototype = new GuildHall.Stealth();

module.exports = GuildHall;





},{}],2:[function(require,module,exports){
"use strict";

 var GuildHall = require("./classes.js"),
     Combatants = require("./player.js"),
     Tools = require("./weapons.js");

let CreatePlayer = {};

CreatePlayer.createPlayer = (setName, setClass, setWeapon) => {

      console.log('createPlayer init: Parameters passed: ', setName, setClass, setWeapon);

      let newPlayer = new Combatants.Human();
          newPlayer.playerName = setName;

      // we could attach an images for a class, weapon, species, etc.

      if (setClass === 'Warrior') {
        newPlayer.class = new GuildHall.Warrior();
      } else if (setClass === 'Valkyrie') {
        newPlayer.class = new GuildHall.Valkyrie();
      } else if (setClass === 'Berserker') {
        newPlayer.class = new GuildHall.Berserker();
      } else if (setClass === 'Monk') {
        newPlayer.class = new GuildHall.Monk();
      } else if (setClass === 'Wizard') {
        newPlayer.class = new GuildHall.Wizard();
      } else if (setClass === 'Sorcerer') {
        newPlayer.class = new GuildHall.Sorcerer();
      } else if (setClass === 'Conjurer') {
        newPlayer.class = new GuildHall.Conjurer();
      } else if (setClass === 'Thief') {
        newPlayer.class = new GuildHall.Thief();
      } else if (setClass === 'Ninja') {
        newPlayer.class = new GuildHall.Ninja();
      } else if (setClass === 'Assassin') {
        newPlayer.class = new GuildHall.Assassin();
      } else {
        console.log('createPlayer: No Class Set - Should not happen');
        newPlayer.class = 'noClass';
      }
      // console.log('startGame: Player has Class Attached');

      if (setWeapon === 'Dagger' ) {
        newPlayer.setWeapon(new Tools.Dagger());
      } else if (setWeapon === 'BroadSword') {
        newPlayer.setWeapon(new Tools.BroadSword());
      } else if (setWeapon === 'WarAxe') {
        newPlayer.setWeapon(new Tools.WarAxe());
      } else {
        console.log('createPlayer: No Weapon Set - Should not happen');
        newPlayer.weapon = 'noWeapon';
      }
      // console.log('createPlayer: Player has Weapon Attached');

      console.log('createPlayer: Player Created');

      return newPlayer;
};

module.exports = CreatePlayer;
},{"./classes.js":1,"./player.js":5,"./weapons.js":8}],3:[function(require,module,exports){
"use strict";


console.log("enemies.js linked");

 var GuildHall = require("./classes.js"),
     Combatants = require("./player.js"),
     Tools = require("./weapons.js");

let Enemies = {};

Enemies.createEnemy = () => {

  var orc = new Enemies.Orc();
  orc.generateClass();
  orc.setWeapon(new Tools.BroadSword());

  console.log('createEnemy: Enemy Created');

  return orc;
};

Enemies.Orc = function() {

  this.playerName = "Orcy McOrc Face";
  this.health = this.health + 20;
  this.species = "Orc";
  this.allowedClasses = ["Warrior", "Berserker", "Shaman"];

  this.generateClass = function() {
    // Get a random index from the allowed classes array
    var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

    // Get the string at the index
    var randomClass = this.allowedClasses[random];

    // Composes the corresponding player class into the player object
    this.class = new GuildHall[randomClass]();
    return this.class;
  };
};

Enemies.Orc.prototype = new Combatants.Monster();

module.exports = Enemies;
},{"./classes.js":1,"./player.js":5,"./weapons.js":8}],4:[function(require,module,exports){
"use strict";

console.log("main.js linked");

let Tools = require("./weapons.js"),
    Combatants = require("./player.js"),
    SpellBook = require("./spells.js"),
    GuildHall = require('./classes.js'),
    Enemies = require('./enemies.js'),
    CreatePlayer = require('./createplayer.js'),
    StartCombat = require('./startcombat.js');

let classChoosen, 
    weaponChoosen,
    createdPlayer,
    createdEnemy;

$(document).ready(function() {
  $("#player-setup").show();
});

$(".card__link").click( (e) => {
  handleSetup(e);
});

function handleSetup (e) {
    var nextCard = $(e.currentTarget).attr("next");
    var playerName = $("#player-name").val();
    var moveAlong = false;

    // start loop: if nextCard is EQUAL to an <a next="card--X"> go to next 
    switch (nextCard) {

      case "card--class":
        moveAlong = ($("#player-name").val() !== "");

        $('.class__link').click(function() {
          classChoosen = $(this).attr('id');
          console.log('handleSetup: card--card: You choose the class:', classChoosen);
        });

        break;

      case "card--weapon":
        moveAlong = (classChoosen !== undefined);

        $('.weapon__link').click(function() {
          weaponChoosen = $(this).attr('id');
          console.log('handleSetup: card--weapon: You choose the weapon: ', weaponChoosen);
        });

        break;

      case "card--battleground":
        moveAlong = (weaponChoosen !== undefined);

        createdPlayer = CreatePlayer.createPlayer(playerName, classChoosen, weaponChoosen);

          let playerStats =
            '<br />' + 'name: ' + createdPlayer.playerName +
            '<br />' + 'class: ' + createdPlayer.class.name +
            '<br />' + 'weapon: ' + createdPlayer.weapon.name +
            '<br />' + 'species: ' + createdPlayer.species +
            '<br />' + 'health: ' + createdPlayer.health +
            '<br />' + 'intelligence: ' + createdPlayer.intelligence;
            $('.playerStats').append(playerStats);

        createdEnemy = Enemies.createEnemy();

          let enemyStats =
            '<br />' + 'name: ' + createdEnemy.playerName +
            '<br />' + 'class: ' + createdEnemy.class.name +
            '<br />' + 'weapon: ' + createdEnemy.weapon.name +
            '<br />' + 'species: ' + createdEnemy.species +
            '<br />' + 'health: ' + createdEnemy.health +
            '<br />' + 'intelligence: ' + createdEnemy.intelligence;
            $('.enemyStats').append(enemyStats);

        break;

      case "card--runbattle":
        moveAlong = true;

        StartCombat.playerVersusEnemy(createdPlayer, createdEnemy);

        $('#playagain').click( () => {
          console.log('not yet');
          /* we need to create a new instance of obj or values will be the same... below code doesn't work
          createdPlayer = CreatePlayer.createPlayer(playerName, classChoosen, weaponChoosen);
          createdEnemy = Enemies.createEnemy();
          StartCombat.playerVersusEnemy(createdPlayer, createdEnemy);
          */
        });

        break;

    }

    /* When True: Set Class 'Card' to Hide (hides everything)
       Then Specifically Set the Class with the a.next to Show. */
    if (moveAlong) { 
      $(".card").hide();
      $("." + nextCard).show();
    } else {
      console.log('Set a Name or Pick a Class or Pick a Weapon');
    }

    $(".card__back").click(function() {
      var previousCard = $(this).attr("previous");
      $(".card").hide();
      $("." + previousCard).show();
    });

}

function showPlayerStats() {
  var outputPlayerStats = document.getElementsByClassName("playerStats");
}

function showEnemyStats() {
  var outputEnemyStats = document.getElementsByClassName("enemyStats");
}

// var warrior = new Combatants.Human();
// warrior.setWeapon(new Tools.WarAxe());
// warrior.generateClass();  // This will be used for "Surprise me" option
// console.log(warrior.toString());
/*
  Test code to generate a spell
 */
// var spell = new SpellBook.Sphere();
// console.log("spell: ", spell.toString());
// 

},{"./classes.js":1,"./createplayer.js":2,"./enemies.js":3,"./player.js":5,"./spells.js":6,"./startcombat.js":7,"./weapons.js":8}],5:[function(require,module,exports){
"use strict";
/*
  TODO: Modularize this code with IIFE or Browserify
 */
console.log("player.js linked");

var GuildHall = require("./classes.js");

var Combatants = {};

/*
  Define the base object for any player of Gauntlet,
  whether a human player or a monster.
 */
Combatants.Player = function(name) {
  this.species = null;
  this.class = null;
  this.weapon = null;

  this.playerName = name || "unknown adventurer";
  this.health = Math.floor(Math.random() * 40 + 50);
  this.limbs = ["head", "neck", "arm", "leg", "torso"];
  this.skinColor = "gray";
  this.skinColors = [this.skinColor];
  this.strength = 90;
  this.intelligence = 90;

  this.toString = function() {
    var output = [this.playerName,
      ": a ",
      this.skinColor,
      " skinned ",
      this.species,
      " ",
      this.class,
      " with ",
      this.health,
      " health. ",
      (this.class.magical) ? "Able to cast " : " Wielding a ",
      this.weapon.toString(),
      "!"
    ].join("");
    return output;
  };
};

Combatants.Player.prototype.setWeapon = function(newWeapon) {
  this.weapon = newWeapon;
};

Combatants.Player.prototype.generateClass = function() { 
  // Get a random index from the allowed classes array
  var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

  // Get the string at the index
  var randomClass = this.allowedClasses[random];

  // Composes the corresponding player class into the player object
  this.class = new GuildHall[randomClass]();

  // Add the health bonus
  this.health += this.class.healthBonus;
  return this.class;
};

/*
  Define the base properties for a human in a 
  constructor function.
 */
Combatants.Human = function() {
  var randomSkin;

  this.species = "Human";
  this.intelligence = this.intelligence + 20;

  this.skinColors.push("brown", "red", "white", "disease");
  randomSkin = Math.round(Math.random() * (this.skinColors.length-1));
  this.skinColor = this.skinColors[randomSkin];

  this.allowedClasses = ["Warrior", "Berserker", "Valkyrie", "Monk"];
};
Combatants.Human.prototype = new Combatants.Player();

/*
  Define the base properties for a monster in a 
  constructor function.
 */
Combatants.Monster = function() {
  this.health = this.health - 30;
  this.intelligence = this.intelligence -20;
  this.strength = this.strength + 30;
};
Combatants.Monster.prototype = new Combatants.Player();

module.exports = Combatants;


},{"./classes.js":1}],6:[function(require,module,exports){
"use strict";
/*
  TODO: Modularize this code with IIFE or Browserify
 */
console.log("spells.js linked");

var SpellBook = {};

/*
  Base spell function that defines name, damage, damage type
 */
SpellBook.Spell = function() {
  this.name = "";
  this.damage = 0;

  this.damageTypes = ["lightning", "fire", "water", "earth", "mysticism"];
  this.type = "";

  this.toString = function() {
    return this.name + " of " + this.type + " for " + this.damage + " damage!";
  };
};

/*
  An elemental sphere that can be cast by a magical class
 */
SpellBook.Sphere = function() {
  this.name = "sphere";
  this.damage = Math.floor(Math.random() * 10 + 10);

  var random = Math.round(Math.random() * (this.damageTypes.length - 1));
  this.type = this.damageTypes[random];
};
SpellBook.Sphere.prototype = new SpellBook.Spell();

module.exports = SpellBook;
},{}],7:[function(require,module,exports){
'use strict';

var StartCombat = {};

StartCombat.playerVersusEnemy = (player, enemy) => {
	$('.combatContainer').empty();

	console.log('player obj: ', player);
	console.log('enemy obj: ', enemy);

	console.log(player.toString() );
	console.log(enemy.toString() );

	if ( player.health > 0 || enemy.health > 0 ) {
		let num = 1;

		while (true) {
			console.log('Round ', num);

			player.health = player.health - enemy.weapon.damage;
			console.log(enemy.playerName + ' attacks ' + player.playerName + ' for ' + enemy.weapon.damage + 'hp. ' + player.playerName + `'s` + ' health is now ' + player.health);

			if ( player.health <= 0 ) {
				console.log(player.playerName + ' has lost.');

				let playerLost = `${player.playerName} has lost.` + '<br /><br />' + '<b>' + `${enemy.playerName} has won.` + '</b>';
				$('.combatContainer').append(playerLost);

				break;
			}

			enemy.health = enemy.health - player.weapon.damage;
			console.log(player.playerName + ' attacks ' + enemy.playerName + ' for ' + player.weapon.damage + 'hp. ' + enemy.playerName + `'s` + ' health is now ' + enemy.health);

			if ( enemy.health <= 0 ) {
				console.log(enemy.playerName + ' has lost.');
				
				let enemyLost = `${enemy.playerName} has lost.` + '<br /><br />' + '<b>' + `${player.playerName} has won.` + '</b>';
				$('.combatContainer').append(enemyLost);

				break;
			}

			num++;

		} // end loop
	} // end if
	
};

module.exports = StartCombat;

},{}],8:[function(require,module,exports){
"use strict";


console.log("weapons.js linked");

var Tools = {};

Tools.Weapon = function() {

  this.name = "bare hands";
  this.damage = 1;
  this.hands = 2;

  this.toString = function() {
    return this.name;
  };
};
 
Tools.Dagger = function() {        
  this.name = "dagger";
  this.damage = 4;
  this.hands = 1;
};
Tools.Dagger.prototype = new Tools.Weapon();

Tools.BroadSword = function() {
  this.name = "broad sword";
  this.damage = 14;
  this.hands = 2;
};
Tools.BroadSword.prototype = new Tools.Weapon();

Tools.WarAxe = function() {
  this.name = "war axe";
  this.damage = 18;
  this.hands = 2;
};
Tools.WarAxe.prototype = new Tools.Weapon();

module.exports = Tools;
},{}]},{},[1,2,3,4,5,6,7,8]);
