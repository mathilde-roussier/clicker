// MIONTANT MONAIE
let monnaie = 500
let monnaie_depensee = 0

// BONUS 1 (dommage par clique)
let clickdamage = 1
let bonus_clickdamage = 2
let niv_bonus_clique = 1
let prix_bonus_clique = 5
let achat_bonus_click = 0

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

// BONUS 4 GAIN DE SOUS
let sous = 1
let niv_sous = 1
let prix_bonus_sous = 25


// ETAT DU BOUTON SI DISPO ACHAT
etat_bonus_clique()
etat_bonus_damage_seconde()
etat_bonus_luck()
etat_bonus_sous()

function etat_bonus_clique(){
	$(document).ready(function(){
		if(monnaie - prix_bonus_clique < 0)
		{
			$("#bonus_clique").text("Pas disponible")
		}
	});
}

function etat_bonus_sous(){
	$(document).ready(function(){
		if(monnaie - prix_bonus_sous < 0)
		{
			$("#sous").text("Pas disponible")
		}
	});
}

function etat_bonus_damage_seconde(){
	$(document).ready(function(){
		if(monnaie - prix_bonus_damage < 0)
		{
			$("#auto_damage").text("Pas disponible")
		}
	});
}

function etat_bonus_luck(){
	$(document).ready(function(){
		if(monnaie - prix_bonus_luck < 0)
		{
			$("#luck").text("Pas disponible")
		}
	});
}



//FONCTION RANDOM CHIFFRE ALEATOIRE
function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

function montant_monnaie(){

	$("#montant").text(monnaie)

}


function bonus_clique()
{
	monnaie_depensee = monnaie_depensee + prix_bonus_clique
	monnaie=monnaie-prix_bonus_clique
	clickdamage = clickdamage + bonus_clickdamage
	niv_bonus_clique = niv_bonus_clique +1
	prix_bonus_clique = prix_bonus_clique + prix_bonus_clique
	$("#click_damage").text("Dégâts par clique : "+clickdamage)
	$("#click_profil").text("Dégâts par clique : "+clickdamage)
	$("#niv_bonus_clique").text("Niv."+niv_bonus_clique)
	$("#prix_bonus_clique").text(prix_bonus_clique)
	$("#sous_utilise").text("Monnaie dépensée :"+monnaie_depensee)
	montant_monnaie()
}

function auto_damage()
{
	monnaie_depensee = monnaie_depensee + prix_bonus_damage
	monnaie=monnaie-prix_bonus_damage
	damage_seconde = damage_seconde + bonus_damage_seconde
	niv_auto_damage = niv_auto_damage + 1
	prix_bonus_damage = prix_bonus_damage + prix_bonus_damage
	$("#damage_seconde").text("Dégâts par seconde : "+damage_seconde)
	$("#damage_profil").text("Dégâts par seconde : "+damage_seconde)
	$("#niv_auto_damage").text("Niv. "+niv_auto_damage)
	$("#prix_bonus_auto_damage").text(prix_bonus_damage)
	$("#sous_utilise").text("Monnaie dépensée :"+monnaie_depensee)
	montant_monnaie()
}

function bonus_sous()
{
	monnaie_depensee = monnaie_depensee + prix_bonus_sous
	monnaie=monnaie-prix_bonus_sous
	sous = sous + sous
	niv_sous = niv_sous + 1
	prix_bonus_sous = prix_bonus_sous + prix_bonus_sous
	$("#gain_de_sous").text("Gain de sous : "+sous)
	$("#niv_sous").text("Niv. "+niv_sous)
	$("#prix_bonus_sous").text(prix_bonus_sous)
	$("#sous_utilise").text("Monnaie dépensée :"+monnaie_depensee)
	montant_monnaie()
}

function bonus_luck()
{
	monnaie_depensee = monnaie_depensee + prix_bonus_luck
	monnaie=monnaie-prix_bonus_luck
	if(luck > 3)
	{
		luck = luck - (luck / 2)
		chance_critique = 1 / luck
		niv_luck = niv_luck + 1
		prix_bonus_luck = prix_bonus_luck + prix_bonus_luck
		$("#chance_critique").text("Dégâts critiques : "+parseInt(chance_critique * 100)+"%")
		$("#niv_luck").text("Niv. "+niv_luck+"")
		$("#prix_bonus_luck").text(prix_bonus_luck)
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
	$("#sous_utilise").text("Monnaie dépensée :"+monnaie_depensee)
	montant_monnaie()
}


$(document).ready(function(){

	
	montant_monnaie()
	// BONUS POUR DEGATS PAR CLIQUE
	$("body").on("click","#bonus_clique",function(){
		etat_bonus_clique()
		if(monnaie-prix_bonus_clique >= 0)
		{
			bonus_clique()
		}	
	});

	// BONUS POUR DEGATS PAR SECONDES (IDLE)
	$("body").on("click","#auto_damage",function(){
		etat_bonus_damage_seconde()
		if(monnaie-prix_bonus_damage >= 0)
		{
			auto_damage()
		}
	});
	// BONUS DE CHANCE CRITIQUE
	$("body").on("click","#luck",function(){		
		etat_bonus_luck()
		if(monnaie-prix_bonus_luck >= 0)
		{
			bonus_luck()
		}
	});
	// BONUS GAIN DE SOUS
	$("body").on("click","#sous",function(){		
		etat_bonus_sous()
		if(monnaie-prix_bonus_sous >= 0)
		{
			bonus_sous()
		}
	});
});




