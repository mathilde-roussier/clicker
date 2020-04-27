// BONUS 1 (dommage par clique)
let clickdamage = 1
let bonus_clickdamage = 2
let niv_bonus_clique = 1
let prix_bonus_clique = 5
// BONUS 2 (dommage par seconde)
let damage_seconde = 0
let bonus_damage_seconde = 2
let niv_auto_damage = 1
let prix_bonus_damage = 50

// BONUS 3 CHANCE DE CRITIQUE
let luck = 100
let chance_critique = 0
let niv_luck = 1
let prix_bonus_luck = 1000


//FONCTION RANDOM CHIFFRE ALEATOIRE
function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}



function bonus_clique()
{
	clickdamage = clickdamage + bonus_clickdamage
	niv_bonus_clique = niv_bonus_clique +1
	prix_bonus_clique = prix_bonus_clique + prix_bonus_clique
	$("#click_damage").text("Dégâts par clique : "+clickdamage)
	$("#click_profil").text("Dégâts par clique : "+clickdamage)
	$("#niv_bonus_clique").text("Niv."+niv_bonus_clique)
	console.log(prix_bonus_clique)
	$("#prix_bonus_clique").text(prix_bonus_clique)
}

function auto_damage()
{
	damage_seconde = damage_seconde + bonus_damage_seconde
	niv_auto_damage = niv_auto_damage + 1
	prix_bonus_damage = prix_bonus_damage + prix_bonus_damage
	$("#damage_seconde").text("Dégâts par seconde : "+damage_seconde)
	$("#damage_profil").text("Dégâts par seconde : "+damage_seconde)
	$("#niv_auto_damage").text("Niv. "+niv_auto_damage)
	$("#prix_bonus_auto_damage").text(prix_bonus_damage)

}

function bonus_luck()
{
	if(luck > 3)
	{
		luck = luck - (luck / 2)
		chance_critique = 1 / luck
		niv_luck = niv_luck + 1
		prix_bonus_luck = prix_bonus_luck + prix_bonus_luck
		$("#chance_critique").text("Dégâts critiques : "+parseInt(chance_critique * 100)+"%")
		$("#niv_luck").text("Niv. "+niv_luck+"")
		$("#prix_bonus_luck").text(prix_bonus_luck)
		
		console.log(parseInt(chance_critique * 100))
	}
	else if(luck < 3 && luck != 1)
	{	
		luck = 1
		niv_luck = niv_luck + 1
		$("#chance_critique").text("Dégâts critiques : 100%")
		$("#niv_luck").text("Niv. "+niv_luck+"")
		$("#luck").remove()
		$("#max_niv_luck").after("<div id='niveau_max'><p>Max</p></div>")
	}
	
	if(getRandomInt(luck) === 1 )
	{
			// INFLIGER COUP CRITIQUE = clickdamage *X (X à définir)
	}
}

function bonus_money()
{


}




$(document).ready(function(){

	// BONUS POUR DEGATS PAR CLIQUE
	$("body").on("click","#bonus_clique",function(){

		bonus_clique()
	});

	// BONUS POUR DEGATS PAR SECONDES (IDLE)
	$("body").on("click","#auto_damage",function(){

		auto_damage()
	});
	// BONUS DE CHANCE CRITIQUE
	$("body").on("click","#luck",function(){
		
		bonus_luck()
	});
	// BONUS SOUS
	$("body").on("click","#money",function(){
		
		bonus_money()
	});
});




