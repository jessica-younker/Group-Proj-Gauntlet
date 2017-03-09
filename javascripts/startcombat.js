'use strict';

var StartCombat = {};

StartCombat.playerVersusEnemy = (player, enemy) => {
	$('.combatContainer').empty();

	console.log('player obj: ', player);
	console.log('enemy obj: ', enemy);

	console.log(player.toString() );
	console.log(enemy.toString() );

	if ( player.health > 0 || enemy.health > 0 ) {
		let num = 1;

		while (true) {
			console.log('Round ', num);

			player.health = player.health - enemy.weapon.damage;
			console.log(enemy.playerName + ' attacks ' + player.playerName + ' for ' + enemy.weapon.damage + 'hp. ' + player.playerName + `'s` + ' health is now ' + player.health);

			if ( player.health <= 0 ) {
				console.log(player.playerName + ' has lost.');

				let playerLost = `${player.playerName} has lost.` + '<br /><br />' + '<b>' + `${enemy.playerName} has won.` + '</b>';
				$('.combatContainer').append(playerLost);

				break;
			}

			enemy.health = enemy.health - player.weapon.damage;
			console.log(player.playerName + ' attacks ' + enemy.playerName + ' for ' + player.weapon.damage + 'hp. ' + enemy.playerName + `'s` + ' health is now ' + enemy.health);

			if ( enemy.health <= 0 ) {
				console.log(enemy.playerName + ' has lost.');
				
				let enemyLost = `${enemy.playerName} has lost.` + '<br /><br />' + '<b>' + `${player.playerName} has won.` + '</b>';
				$('.combatContainer').append(enemyLost);

				break;
			}

			num++;

		} // end loop
	} // end if
	
};

module.exports = StartCombat;
