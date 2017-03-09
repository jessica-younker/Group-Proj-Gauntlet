"use strict";


console.log("weapons.js linked");

var Tools = {};

Tools.Weapon = function() {

  this.name = "bare hands";
  this.damage = 1;
  this.hands = 2;

  this.toString = function() {
    return this.name + " for " + this.damage + " damage!";
  };
};
 
Tools.BrassKnuckles = function() {        
  this.name = "brass knuckles";
  this.damage = 3;
  this.hands = 2;
};
Tools.BrassKnuckles.prototype = new Tools.Weapon();
 
Tools.Dagger = function() {        
  this.name = "dagger";
  this.damage = 4;
  this.hands = 1;
};
Tools.Dagger.prototype = new Tools.Weapon();

Tools.Rapier = function() {        
  this.name = "rapier";
  this.damage = 10;
  this.hands = 1;
};
Tools.Rapier.prototype = new Tools.Weapon();

Tools.Pike = function() {        
  this.name = "pike";
  this.damage = 12;
  this.hands = 2;
};
Tools.Pike.prototype = new Tools.Weapon();

Tools.BroadSword = function() {
  this.name = "broad sword";
  this.damage = 14;
  this.hands = 2;
};
Tools.BroadSword.prototype = new Tools.Weapon();

Tools.BattleAxe = function() {
  this.name = "battle axe";
  this.damage = 18;
  this.hands = 2;
};
Tools.BattleAxe.prototype = new Tools.Weapon();

Tools.WarHammer = function() {        
  this.name = "war hammer";
  this.damage = 20;
  this.hands = 2;
};
Tools.WarHammer.prototype = new Tools.Weapon();

Tools.Shuriken = function() {        
  this.name = "shuriken";
  this.damage = 6;
  this.hands = 1;
};
Tools.Shuriken.prototype = new Tools.Weapon();

Tools.BearHands = function() {        
  this.name = "bear hands";
  this.damage = 2;
  this.hands = 2;
};
Tools.BearHands.prototype = new Tools.Weapon();

module.exports = Tools;