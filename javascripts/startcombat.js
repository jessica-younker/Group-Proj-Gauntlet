'use strict';

var StartCombat = {};
var limbs = ["head", "neck", "arm", "leg", "torso", "foot", "blatter", "heart", "liver", "eyes", "ears"];

StartCombat.playerVersusEnemy = (player, enemy) => {
	$('.WinOrLose').empty();
	$('.PlayerStats').empty();
	$('.CombatInfo').empty();

	console.log('player obj: ', player);
	console.log('enemy obj: ', enemy);

	$('.PlayerStats').append('Player- ' + player.toString() + '<br>' + ' Enemy- ' + enemy.toString() );

	if ( player.health > 0 || enemy.health > 0 ) {
		let num = 1;

		while (true) {
			$('.CombatInfo').append('<br />' + '<b>Round ' + num + ': </b><br />');

			var coinFlip = Math.floor(Math.random() * 2 + 1);
			// Each Round Math.Random determines who plays the round. This could be good or bad :)

			const staticPlayerWeaponDamage = player.weapon.damage;
			const staticEnemyWeaponDamage = enemy.weapon.damage;
			let enemyDamageToPlayer, playerDamageToEnemy;

			if (num >= 2) {	
				enemy.weapon.damage = staticPlayerWeaponDamage +  Math.floor(Math.random() * 8.5);
				player.weapon.damage = staticEnemyWeaponDamage +  Math.floor(Math.random() * 8.5);
			}

		if (coinFlip === 1) {
			player.health = player.health - enemy.weapon.damage;

			if (player.health <= 0) {
				player.health = '0';
				enemyDamageToPlayer = '<h3>' + enemy.playerName + ' attacks ' + player.playerName + ' for ' + enemy.weapon.damage + 'hp. ' + enemy.playerName + ' rips off ' + player.playerName + `'s ` + limbs[Math.floor(Math.random()*limbs.length)] + '. ' + player.playerName + ' is now DEAD. <br /></h3>';	
			} else {
				enemyDamageToPlayer = enemy.playerName + ' attacks ' + player.playerName + ' for ' + enemy.weapon.damage + 'hp. ' + player.playerName + `'s` + ' health is now ' + player.health + '.<br />';
			}
			$('.CombatInfo').append(enemyDamageToPlayer);

			if ( player.health <= 0 ) {
				player.health = 0;
				let playerLost = `${player.playerName} has lost.` + '<br> ' + `Enemy ${enemy.playerName} has won.` + '</b>';
				$('.WinOrLose').append(playerLost);
				break;
			}
		} else {
			enemy.health = enemy.health - player.weapon.damage;
			
			if (enemy.health <= 0) {
				enemy.health = '0';
				playerDamageToEnemy = '<h3>' + player.playerName + ' attacks ' + enemy.playerName + ' for ' + player.weapon.damage + 'hp. ' + player.playerName + ' rips off ' + enemy.playerName + `'s ` + limbs[Math.floor(Math.random()*limbs.length)] + '. ' + enemy.playerName + ' is now DEAD. <br /></h3>';	
			} else {
				playerDamageToEnemy = player.playerName + ' attacks ' + enemy.playerName + ' for ' + player.weapon.damage + 'hp. ' + enemy.playerName + `'s` + ' health is now ' + enemy.health + '.<br />';
			}
			$('.CombatInfo').append(playerDamageToEnemy);

			if ( enemy.health <= 0 ) {
				let enemyLost = `Enemy ${enemy.playerName} has lost.` + '<br>' + `${player.playerName} has won.` + '</b>';
				$('.WinOrLose').append(enemyLost);
				break;
			}
		}
			num++;

		} // end loop
	} // end if
	
};

module.exports = StartCombat;
