"use strict";


console.log("weapons.js linked");

var Tools = {};

Tools.Weapon = function() {

var Weapon = function() {

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