"use strict";

 var GuildHall = require("./classes.js"),
     Combatants = require("./player.js"),
     Tools = require("./weapons.js"),
     Spell = require("./spells.js");

let CreatePlayer = {};

CreatePlayer.createPlayer = (setName, setClass, setWeapon) => {

      console.log('createPlayer init: Parameters passed: ', setName, setClass, setWeapon);

      let newPlayer = {};
          newPlayer.playerName = setName;

      // we could attach an images for a class, weapon, species, etc.

      if (setClass === 'Warrior') {
        newPlayer = new GuildHall.Warrior();
      } else if (setClass === 'Valkyrie') {
        newPlayer = new GuildHall.Valkyrie();
      } else if (setClass === 'Berserker') {
        newPlayer = new GuildHall.Berserker();
      } else if (setClass === 'Monk') {
        newPlayer = new GuildHall.Monk();
      } else if (setClass === 'Shaman') {
        newPlayer = new GuildHall.Shaman();        
      } else if (setClass === 'Wizard') {
        newPlayer = new GuildHall.Wizard();
      } else if (setClass === 'Sorcerer') {
        newPlayer = new GuildHall.Sorcerer();
      } else if (setClass === 'Conjurer') {
        newPlayer = new GuildHall.Conjurer();
      } else if (setClass === 'Thief') {
        newPlayer = new GuildHall.Thief();
      } else if (setClass === 'Ninja') {
        newPlayer = new GuildHall.Ninja();
      } else if (setClass === 'Assassin') {
        newPlayer = new GuildHall.Assassin();
      } else if (setClass === 'surpriseme') {
        newPlayer.generateClass();
      } else {
        console.log('createPlayer: No Class Set - Should not happen');
        newPlayer = 'noClass';
      }
      // console.log('startGame: Player has Class Attached');

      if (setWeapon === 'Dagger' ) {
        newPlayer.weapon = new Tools.Dagger();
      } else if (setWeapon === 'BroadSword') {
        newPlayer.weapon = new Tools.BroadSword();
      } else if (setWeapon === 'BattleAxe') {
        newPlayer.weapon = new Tools.BattleAxe();
      } else if (setWeapon === 'BrassKnuckles') {
        newPlayer.weapon = new Tools.BrassKnuckles();
      } else if (setWeapon === 'Pike') {
        newPlayer.weapon = new Tools.Pike();
      } else if (setWeapon === 'Rapier') {
        newPlayer.weapon = new Tools.Rapier();
      } else if (setWeapon === 'WarHammer') {
        newPlayer.weapon = new Tools.WarHammer();
      } else if (setWeapon === 'BearHands') {
        newPlayer.weapon = new Tools.BearHands();
      } else if (setWeapon === 'Shuriken') {
        newPlayer.weapon = new Tools.Shuriken();
      } else if (setWeapon === 'Sphere') {
        newPlayer.weapon = new Spell.Sphere();
      } else if (setWeapon === 'BadLarry') {
        newPlayer.weapon = new Spell.BadLarry();
      } else if (setWeapon === 'FreakyFriday') {
        newPlayer.weapon = new Spell.FreakyFriday();
      } else if (setWeapon === 'HeebyJeebs') {
        newPlayer.weapon = new Spell.HeebyJeebs();
      } else if (setWeapon === 'StartledMingus') {
        newPlayer.weapon = new Spell.StartledMingus();
      } else if (setWeapon === 'GlasgowKiss') {
        newPlayer.weapon = new Spell.GlasgowKiss();
      } else {
        console.log('createPlayer: No Weapon Set - Should not happen');
        newPlayer.weapon = 'noWeapon';
      }
      // console.log('createPlayer: Player has Weapon Attached');

      console.log('createPlayer: Player Created');

      return newPlayer;
};

module.exports = CreatePlayer;