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