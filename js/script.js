// BONUS 1 (dommage par clique)
let clickdamage = 1
let bonus_clickdamage = 2

// BONUS 2 (dommage par seconde)
let damage_seconde = 0
let bonus_damage_seconde = 2

// BONUS 3 CHANCE DE CRITIQUE
let luck = 5000
let chance_critique = 0

	//FONCTION RANDOM CHIFFRE ALEATOIRE
	function getRandomInt(max) {
	  return Math.floor(Math.random() * Math.floor(max));
	}


$(document).ready(function(){

	// BONUS POUR DEGATS PAR CLIQUE
	$("body").on("click","#bonus_clique",function(){

		clickdamage = clickdamage + bonus_clickdamage
		$("#click_damage").text("Click Damage : "+clickdamage+"")
		$("#click_profil").text("Click Damage : "+clickdamage+"")
	});

	// BONUS POUR DEGATS PAR SECONDES (IDLE)
	$("body").on("click","#auto_damage",function(){

		damage_seconde = damage_seconde + bonus_damage_seconde
		$("#damage_seconde").text("Dégâts par seconde : "+damage_seconde+"")
		$("#damage_profil").text("Dégâts par seconde : "+damage_seconde+"")
	});
	// BONUS DE CHANCE CRITIQUE
	$("body").on("click","#luck",function(){

		if(luck >= 2500)
		{
			luck = luck - 100
			chance_critique = 100 / luck
			$("#chance_critique").text("Chance de critique : "+parseInt(chance_critique * 100)+"%")
			console.log(chance_critique)
			console.log(luck)

		}
		else if(luck < 2500 && luck >= 500)
		{
			luck = luck - 50
			chance_critique = 100 / luck
			$("#chance_critique").text("Chance de critique: "+parseInt(chance_critique * 100)+"%")
			console.log(chance_critique)
			console.log(luck)
		}
		else if(luck < 500)
		{
			luck = luck - 10
			chance_critique = 100 / luck
			$("#chance_critique").text("Chance de critique : "+parseInt(chance_critique * 100)+"%")
			console.log(chance_critique)
			console.log(luck)
		}
		else
		{
			$("#luck").remove()
		}
		
		if(getRandomInt(luck) <= 50 )
		{
			// INFLIGER COUP CRITIQUE = clickdamage *X (X à définir)
		}
	});
});







