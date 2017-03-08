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

});