"use strict";


console.log("enemies.js linked");

 var GuildHall = require("./classes.js"),
     Combatants = require("./player.js"),
     Tools = require("./weapons.js"),
     Spell = require("./spells.js");

let Enemies = {};

Enemies.createEnemy = () => {

  var orc = new Enemies.Orc();
  orc.generateName();
  orc.generateSpecies();
  orc.generateClass();
  orc.generateWeapon();

  console.log('createEnemy: Enemy Created');

  return orc;
};

Enemies.Orc = function() {

  this.health = this.health + 20;
  this.allowedClasses = [ "Warrior", "Berserker", "Shaman", "Conjurer", "Sorcerer" ];
  this.allowedWeapons = ["BrassKnuckles", "Dagger", "BroadSword", "BattleAxe", "WarHammer"];
  this.allowedSpells = ["Sphere", "FreakyFriday", "HeebyJeebs", "BadLarry", "StartledMingus", "GlasgowKiss"];
  this.allowedSpecies = [ "Orc","Swamp Tentacle", "Troll", "Vampire Bat", "Scorpion", "Reaper" ];
  this.allowedNames = [
      "Ug", "Onog", "Wogharod", "Supaugh", "Xugug", "Prutha",
      "Fupgugh", "Bugrol", "Obghat", "Trougha" ];

  this.generateName = () => {
    var random = Math.round(Math.random() * (this.allowedNames.length - 1));
    var randomName = this.allowedNames[random];
    this.playerName = randomName;
    return this.playerName;
  };

  this.generateSpecies = () => {
    var random = Math.round(Math.random() * (this.allowedSpecies.length - 1));
    var randomSpecies = this.allowedSpecies[random];
    this.species = randomSpecies;
    return this.species;
  };

  this.generateClass = function() {
    // Get a random index from the allowed classes array
    var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

    // Get the string at the index
    var randomClass = this.allowedClasses[random];

    // Composes the corresponding player class into the player object
    this.class = new GuildHall[randomClass]();
    return this.class;
  };

  this.generateWeapon = function() {
    var random;
    if (this.class.magical) {
        random = Math.round(Math.random() * (this.allowedSpells.length - 1));
        var randomSpell = this.allowedSpells[random];
        this.setWeapon(new Spell[randomSpell]());

    } else {
        // Get a random index from the allowed classes array
        random = Math.round(Math.random() * (this.allowedWeapons.length - 1));

        // Get the string at the index
        var randomWeapon = this.allowedWeapons[random];

        // Composes the corresponding player class into the player object
        this.weapon = new Tools[randomWeapon]();
        console.log("generateweapon", this.weapon.toString());
        return this.weapon;
    }
  };

};

Enemies.Orc.prototype = new Combatants.Monster();

module.exports = Enemies;