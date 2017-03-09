"use strict";

 var GuildHall = require("./classes.js"),
     Combatants = require("./player.js"),
     Tools = require("./weapons.js"),
     Spell = require("./spells.js");

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
      } else if (setClass === 'Shaman') {
        newPlayer.class = new GuildHall.Shaman();        
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
      } else if (setClass === 'surpriseme') {
        newPlayer.generateClass();
      } else {
        console.log('createPlayer: No Class Set - Should not happen');
        newPlayer.class = 'noClass';
      }
      // console.log('startGame: Player has Class Attached');

      if (setWeapon === 'Dagger' ) {
        newPlayer.setWeapon(new Tools.Dagger());
      } else if (setWeapon === 'BroadSword') {
        newPlayer.setWeapon(new Tools.BroadSword());
      } else if (setWeapon === 'BattleAxe') {
        newPlayer.setWeapon(new Tools.BattleAxe());
      } else if (setWeapon === 'BrassKnuckles') {
        newPlayer.setWeapon(new Tools.BrassKnuckles());
      } else if (setWeapon === 'Pike') {
        newPlayer.setWeapon(new Tools.Pike());
      } else if (setWeapon === 'Rapier') {
        newPlayer.setWeapon(new Tools.Rapier());
      } else if (setWeapon === 'WarHammer') {
        newPlayer.setWeapon(new Tools.WarHammer());
      } else if (setWeapon === 'BearHands') {
        newPlayer.setWeapon(new Tools.BearHands());
      } else if (setWeapon === 'Shuriken') {
        newPlayer.setWeapon(new Tools.Shuriken());
      } else if (setWeapon === 'Sphere') {
        newPlayer.setWeapon(new Spell.Sphere());
      } else if (setWeapon === 'BadLarry') {
        newPlayer.setWeapon(new Spell.BadLarry());
      } else if (setWeapon === 'FreakyFriday') {
        newPlayer.setWeapon(new Spell.FreakyFriday());
      } else if (setWeapon === 'HeebyJeebs') {
        newPlayer.setWeapon(new Spell.HeebyJeebs());
      } else if (setWeapon === 'StartledMingus') {
        newPlayer.setWeapon(new Spell.StartledMingus());
      } else if (setWeapon === 'GlasgowKiss') {
        newPlayer.setWeapon(new Spell.GlasgowKiss());
      } else {
        console.log('createPlayer: No Weapon Set - Should not happen');
        newPlayer.weapon = 'noWeapon';
      }
      // console.log('createPlayer: Player has Weapon Attached');

      console.log('createPlayer: Player Created');

      return newPlayer;
};

module.exports = CreatePlayer;