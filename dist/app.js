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


console.log("enemies.js linked");

 var GuildHall = require("./classes.js"),
     Combatants = require("./player.js");

let Enemies = {};

Enemies.Orc = function() {

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
},{"./classes.js":1,"./player.js":4}],3:[function(require,module,exports){
"use strict";

console.log("app.js linked");

let Tools = require("./weapons.js"),
  Combatants = require("./player.js"),
  SpellBook = require("./spells.js"),
  GuildHall = require('./classes.js'),
  Enemies = require('./enemies.js');

/*
  Test code to generate a human player and an orc player
 */
// var orc = new Enemies.Orc();
// orc.generateClass();
// orc.setWeapon(new Tools.BroadSword());
// console.log(orc.toString());

// var warrior = new Combatants.Human();
// warrior.setWeapon(new Tools.WarAxe());
// warrior.generateClass();  // This will be used for "Surprise me" option
// console.log(warrior.toString());
/*
  Test code to generate a spell
 */
// var spell = new SpellBook.Sphere();
// console.log("spell: ", spell.toString());

var playerName;
var classChoosen;
var weaponChoosen;

$(document).ready(function() {
  /*
    Show the initial view that accepts player name
   */
  $("#player-setup").show();

  /*
    When any button with card__link class is clicked,
    move on to the next view.
   */
  $(".card__link").click(function(e) {
    var nextCard = $(this).attr("next");

    var moveAlong = false;
  

    // we should not allow a blank name here as initial view is asking for name
    playerName = $("#player-name").val();
    // console.log('Hello ', playerName);

    switch (nextCard) { // next card is set to next attribute on href
      case "card--class": // first ahref next -- this is class of ahref and SECTION
                          // this shows which section we're on

        moveAlong = ($("#player-name").val() !== "");
        console.log(moveAlong);

        $('.class__link').click(function(e) {
          // Set the class here
          classChoosen = $(this).attr('id');
          classChoosen = classChoosen.toString();
          console.log('You choose the class: ', classChoosen);
        });

        break;

      case "card--weapon":
        // now pick a weapon
        console.log('You are a ', classChoosen);
        moveAlong = ($("#player-name").val() !== "");

        $('.weapon__link').click(function(e) {
          // Set the weapon here
          weaponChoosen = $(this).attr('id');
          weaponChoosen = weaponChoosen.toString();

          console.log('You choose the weapon: ', weaponChoosen);
        });

        break;

      case "card--battleground":

        console.log(weaponChoosen, classChoosen);
        moveAlong = ($("#player-name").val() !== "");
        console.log('we should start a battle here');

        startGame();

      break;

    }

    function startGame () {
/*     var playerName; var classChoosen; var weaponChoosen;
      we need to use this variable to set what we have
  Classes:
    Warrior, Valkyrie, Berserker, Monk, Wizard, Sorcerer, Conjurer 
    Thief, Ninja, Assassin
  Weapons:
    Dagger, BroadSword, WarAxe
    */

      /* this works but we should set the props equal to the
        values we set above */

      console.log('Class Picked Is: ', classChoosen);

      var newPlayer;
      // should create default player class here, do we start with class?

/*
 
      if (classChoosen === 'Warrior') {
        newPlayer =
        newPlayer.class =
      } else if  (classChoosen === 'Valkyrie') {
        newPlayer = 
        newPlayer.class =
      } else if  (classChoosen === 'Berserker') {
        newPlayer = 
        newPlayer.class =    
      } else if  (classChoosen === 'Monk') {
        newPlayer = 
        newPlayer.class = 
      } else if  (classChoosen === 'Wizard') {
        newPlayer = 
        newPlayer.class = 
      } else if  (classChoosen === 'Sorcerer') {
        newPlayer = 
        newPlayer.class = 
      } else if  (classChoosen === 'Conjurer') {
        newPlayer = 
        newPlayer.class = 
      } else if  (classChoosen === 'Thief') {
        newPlayer = 
        newPlayer.class =
      } else if  (classChoosen === 'Ninja') {
        newPlayer = 
        newPlayer.class =
      } else if  (classChoosen === 'Assassin') {
        newPlayer = 
        newPlayer.class =
      } else {
        console.log('what is going on? ');
      }
*/
      var playerWeapon = 'anything at the moment';

      var warrior = new Combatants.Human();
      warrior.playerName = playerName;

      // warrior.setWeapon(new WarAxe());
      // warrior.generateClass();  // This will be used for "Surprise me" option
      warrior.weapon = playerWeapon;
      warrior.class = new GuildHall.Warrior();

      console.log(warrior.toString());
      console.log(warrior);

    }

    if (moveAlong) {
      console.log('where are we: ', $(this));
      $(".card").hide();
      $("." + nextCard).show();
    }
  });

  /*
    When the back button clicked, move back a view
   */
  $(".card__back").click(function(e) {
    var previousCard = $(this).attr("previous");
    $(".card").hide();
    $("." + previousCard).show();
  });


  function showPlayerStats() {
    var outputPlayerStats = document.getElementsByClassName("playerStats");
  }

  function showEnemyStats() {
    var outputEnemyStats = document.getElementsByClassName("enemyStats");
  }


});


},{"./classes.js":1,"./enemies.js":2,"./player.js":4,"./spells.js":5,"./weapons.js":6}],4:[function(require,module,exports){
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


},{"./classes.js":1}],5:[function(require,module,exports){
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
},{}],6:[function(require,module,exports){
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
},{}]},{},[1,2,3,4,5,6]);
