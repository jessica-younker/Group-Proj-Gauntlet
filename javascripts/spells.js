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
    // to remove of "light, fire, etc"
    // return this.name + " for " + this.damage + " damage! ";
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

/*
  A FreakyFriday that can be cast by a magical class
 */

SpellBook.FreakyFriday = function() {
  this.name = "freakyFriday";
  this.damage = Math.floor(Math.random() * 15 + 15);

  var random = Math.round(Math.random() * (this.damageTypes.length - 1));
  this.type = this.damageTypes[random];
};
SpellBook.FreakyFriday.prototype = new SpellBook.Spell();

/*
  A HeebyJeebs that can be cast by a magical class
 */

SpellBook.HeebyJeebs = function() {
  this.name = "heebyJeebs";
  this.damage = Math.floor(Math.random() * 30 + 35);

  var random = Math.round(Math.random() * (this.damageTypes.length - 1));
  this.type = this.damageTypes[random];
};
SpellBook.HeebyJeebs.prototype = new SpellBook.Spell();

/*
  A BadLarry that can be cast by a magical class
 */

SpellBook.BadLarry = function() {
  this.name = "badLarry";
  this.damage = Math.floor(Math.random() * 7 + 17);

  var random = Math.round(Math.random() * (this.damageTypes.length - 1));
  this.type = this.damageTypes[random];
};
SpellBook.BadLarry.prototype = new SpellBook.Spell();

/*
  A StartledMingus that can be cast by a magical class
 */

SpellBook.StartledMingus = function() {
  this.name = "startledMingus";
  this.damage = Math.floor(Math.random() * 0 + 15);

  var random = Math.round(Math.random() * (this.damageTypes.length - 1));
  this.type = this.damageTypes[random];
};
SpellBook.StartledMingus.prototype = new SpellBook.Spell();

SpellBook.GlasgowKiss = function() {
  this.name = "glasgowKiss";
  this.damage = Math.floor(Math.random() * 3 + 20);

  var random = Math.round(Math.random() * (this.damageTypes.length - 1));
  this.type = this.damageTypes[random];
};
SpellBook.GlasgowKiss.prototype = new SpellBook.Spell();

module.exports = SpellBook;