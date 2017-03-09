'use strict';

var StartCombat = {};

StartCombat.playerVersusEnemy = (player, enemy) => {
	$('.WinOrLose').empty();
	$('.PlayerStats').empty();
	$('.CombatInfo').empty();

	console.log('player obj: ', player);
	console.log('enemy obj: ', enemy);

	$('.PlayerStats').append('Player- ' + player.toString() + '<br /> Enemy- ' + enemy.toString() );

	if ( player.health > 0 || enemy.health > 0 ) {
		let num = 1;

		while (true) { // may not be needed... we need a button for rounds
			$('.CombatInfo').append('<br />' + '<b>Round ' + num + ': </b><br />');

			player.health = player.health - enemy.weapon.damage;
			
			let enemyDamageToPlayer = enemy.playerName + ' attacks ' + player.playerName + ' for ' + enemy.weapon.damage + 'hp. ' + player.playerName + `'s` + ' health is now ' + player.health + '.<br />';
			$('.CombatInfo').append(enemyDamageToPlayer);

			if ( player.health <= 0 ) {
				let playerLost = `${player.playerName} has lost.` + ' ' + `Enemy ${enemy.playerName} has won.` + '</b>';
				$('.WinOrLose').append(playerLost);
				break;
			}

			enemy.health = enemy.health - player.weapon.damage;
			
			let playerDamageToEnemy = player.playerName + ' attacks ' + enemy.playerName + ' for ' + player.weapon.damage + 'hp. ' + enemy.playerName + `'s` + ' health is now ' + enemy.health + '.<br />';
			$('.CombatInfo').append(playerDamageToEnemy);

			if ( enemy.health <= 0 ) {
				let enemyLost = `Enemy ${enemy.playerName} has lost.` + ' ' + `${player.playerName} has won.` + '</b>';
				$('.WinOrLose').append(enemyLost);
				break;
			}

			num++;

		} // end loop
	} // end if
	
};

module.exports = StartCombat;
