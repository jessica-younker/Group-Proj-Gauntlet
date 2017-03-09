"use strict";

console.log("main.js linked");

let Tools = require("./weapons.js"),
    Combatants = require("./player.js"),
    SpellBook = require("./spells.js"),
    GuildHall = require('./classes.js'),
    Enemies = require('./enemies.js'),
    CreatePlayer = require('./createplayer.js'),
    StartCombat = require('./startcombat.js');

let playerName,
    classChosen, 
    weaponChosen,
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
    var moveAlong = false;
    playerName = $("#player-name").val();

    // start loop: if nextCard is EQUAL to an <a next="card--X"> go to next 
    switch (nextCard) {

      case "card--class":
        moveAlong = ($("#player-name").val() !== "");

        $('.class__link').click(function() {
          classChosen = $(this).attr('id');
          console.log('handleSetup: card--card: You choose the class:', classChosen);
        });

        break;

      case "card--weapon":
        moveAlong = (classChosen !== undefined);
        $('#spellButtons').hide();
        $('#weaponButtons').hide();
        if (classChosen === "Shaman" || classChosen ==="Wizard" || classChosen ==="Conjurer" || classChosen ==="Sorcerer") {
            $('#spellButtons').show();
        } else {
            $('#weaponButtons').show();
        } 
        $('.weapon__link').click(function() {
          weaponChosen = $(this).attr('id');
          console.log('handleSetup: card--weapon: You choose the weapon: ', weaponChosen);
        });

        break;

      case "card--battleground":
        moveAlong = (weaponChosen !== undefined);

        createdPlayer = CreatePlayer.createPlayer(playerName, classChosen, weaponChosen);

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
            // we need more health again
            var y = CreatePlayer.createPlayer(playerName, classChosen, weaponChosen);
            var x = Enemies.createEnemy(); // create new Enemy
            StartCombat.playerVersusEnemy(y, x);
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