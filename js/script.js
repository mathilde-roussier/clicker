//localStorage.clear();
console.log(localStorage);

click = JSON.parse(localStorage.getItem('clicker'));
monstre = JSON.parse(localStorage.getItem('monstre'));
boutique = JSON.parse(localStorage.getItem('boutique'));

if (click !== null && monstre !== null && boutique !== null) {
	var user = new User(click['point'], click['degat'], click['dps'], click['monnaie']);
	var monstre = new Monstre(monstre['vie'], monstre['nb_mort']);
	var boutique = new Boutique(boutique['niv_clique'],boutique['prix_clique']);
}
else {
	var user = new User();
	var monstre = new Monstre();
	var boutique = new Boutique();
}

// MIONTANT MONAIE
let monnaie = user.getPoint()
let monnaie_depensee = 0

// BONUS 1 (dommage par clique)
let clickdamage = user.getDegat()
let bonus_clickdamage = 2
let niv_bonus_clique = boutique.getNiv_clique();
let prix_bonus_clique = boutique.getPrix_clique();

// BONUS 2 (dommage par seconde)
let damage_seconde = user.getDPS()
let bonus_damage_seconde = 2
let niv_auto_damage = boutique.getNiv_auto_damage();
let prix_bonus_damage = boutique.getPrix_damage();

// BONUS 3 CHANCE DE CRITIQUE
let degat_critique = 0
let luck = 100
let chance_critique = 0
let niv_luck = boutique.getNiv_luck();
let prix_bonus_luck = boutique.getPrix_luck();

// BONUS 4 GAIN DE SOUS
let sous = user.getMonnaie()
let niv_sous = boutique.getNiv_sous();
let prix_bonus_sous = boutique.getPrix_sous();

// ETAT DU BOUTON SI DISPO ACHAT
etat_des_sous_disponible()

function etat_des_sous_disponible() {
	$(document).ready(function () {

		if (monnaie - prix_bonus_clique < 0) {
			$("#bonus_clique").text("Pas disponible")
		}
		else {
			$("#bonus_clique").text("Acheter")
		}

		if (monnaie - prix_bonus_sous < 0) {
			$("#sous").text("Pas disponible")
		}
		else {
			$("#sous").text("Acheter")
		}

		if (monnaie - prix_bonus_damage < 0) {
			$("#auto_damage").text("Pas disponible")
		}
		else {
			$("#auto_damage").text("Acheter")
		}

		if (monnaie - prix_bonus_luck < 0) {
			$("#luck").text("Pas disponible")
		}
		else {
			$("#luck").text("Acheter")
		}
	});
}

//FONCTION RANDOM CHIFFRE ALEATOIRE
function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

function bonus_clique() {
	user.soustractionPoint(prix_bonus_clique)
	user.setDegat(clickdamage)
	boutique.set
	monnaie_depensee = monnaie_depensee + prix_bonus_clique
	monnaie = monnaie - prix_bonus_clique

	clickdamage = clickdamage + bonus_clickdamage

	niv_bonus_clique = niv_bonus_clique + 1
	prix_bonus_clique = prix_bonus_clique + prix_bonus_clique
	$("#click_damage").text("Dégâts par clique : " + clickdamage)
	$("#click_profil").text("Dégâts par clique : " + clickdamage)
	$("#niv_bonus_clique").text("Niv." + niv_bonus_clique)
	$("#prix_bonus_clique").text(prix_bonus_clique)
	$("#sous_utilise").text("Monnaie dépensée :" + monnaie_depensee)
	$('#montant').html(monnaie);
	var boutique_donnees = { niv_clique: boutique.getNiv_clique(), prix_clique: boutique.getPrix_clique() };
	localStorage.setItem('boutique', JSON.stringify(boutique_donnees));
	console.log(localStorage);
}

function auto_damage() {
	user.soustractionPoint(prix_bonus_damage)
	user.setDPS(damage_seconde)

	monnaie_depensee = monnaie_depensee + prix_bonus_damage
	monnaie = monnaie - prix_bonus_damage
	damage_seconde = damage_seconde + bonus_damage_seconde
	niv_auto_damage = niv_auto_damage + 1
	prix_bonus_damage = prix_bonus_damage + prix_bonus_damage
	$("#damage_seconde").text("Dégâts par seconde : " + damage_seconde)
	$("#damage_profil").text("Dégâts par seconde : " + damage_seconde)
	$("#niv_auto_damage").text("Niv. " + niv_auto_damage)
	$("#prix_bonus_auto_damage").text(prix_bonus_damage)
	$("#sous_utilise").text("Monnaie dépensée :" + monnaie_depensee)
	$('#montant').html(monnaie);
}

function bonus_sous() {
	user.soustractionPoint(prix_bonus_sous)
	user.setMonnaie(sous)

	monnaie_depensee = monnaie_depensee + prix_bonus_sous
	monnaie = monnaie - prix_bonus_sous
	sous = sous + sous
	niv_sous = niv_sous + 1
	prix_bonus_sous = prix_bonus_sous + prix_bonus_sous
	$("#gain_de_sous").text("Gain de sous : " + sous)
	$("#niv_sous").text("Niv. " + niv_sous)
	$("#prix_bonus_sous").text(prix_bonus_sous)
	$("#sous_utilise").text("Monnaie dépensée :" + monnaie_depensee)
	$('#montant').html(monnaie);

}

function bonus_luck() {
	user.soustractionPoint(prix_bonus_luck)

	monnaie_depensee = monnaie_depensee + prix_bonus_luck
	monnaie = monnaie - prix_bonus_luck
	if (luck > 5) {
		luck = luck - 5
		chance_critique = 1 / luck
		niv_luck = niv_luck + 1
		prix_bonus_luck = prix_bonus_luck + prix_bonus_luck
		$("#chance_critique").text("Dégâts critiques : " + parseInt(chance_critique * 100) + "%")
		$("#niv_luck").text("Niv. " + niv_luck + "")
		$("#prix_bonus_luck").text(prix_bonus_luck)
	}
	else if (luck === 5) {
		luck = luck - 3
		chance_critique = 1 / luck
		niv_luck = niv_luck + 1
		prix_bonus_luck = prix_bonus_luck + prix_bonus_luck
		$("#chance_critique").text("Dégâts critiques : " + parseInt(chance_critique * 100) + "%")
		$("#niv_luck").text("Niv. " + niv_luck + "")
		$("#prix_bonus_luck").text(prix_bonus_luck)
		$("#luck").remove()
		$("#max_niv_luck").after("<div id='niveau_max'><p>Max</p></div>")
	}

	$("#sous_utilise").text("Monnaie dépensée :" + monnaie_depensee)
	$('#montant').html(monnaie);
}


$(document).ready(function () {

	$("#montant").html(monnaie)
	$("#prix_bonus_luck").html(prix_bonus_luck)
	$("#niv_bonus_clique").text("Niv." + niv_bonus_clique)
	$("#prix_bonus_clique").text(prix_bonus_clique)

	// BONUS POUR DEGATS PAR CLIQUE
	$("body").on("click", "#bonus_clique", function () {
		etat_des_sous_disponible()
		if (monnaie - prix_bonus_clique >= 0) {
			bonus_clique()
		}
	});

	// BONUS POUR DEGATS PAR SECONDES (IDLE)
	$("body").on("click", "#auto_damage", function () {
		etat_des_sous_disponible()
		if (monnaie - prix_bonus_damage >= 0) {
			auto_damage()
		}
	});
	// BONUS DE CHANCE CRITIQUE
	$("body").on("click", "#luck", function () {
		etat_des_sous_disponible()
		if (monnaie - prix_bonus_luck >= 0) {
			bonus_luck()
		}
	});
	// BONUS GAIN DE SOUS
	$("body").on("click", "#sous", function () {
		etat_des_sous_disponible()
		if (monnaie - prix_bonus_sous >= 0) {
			bonus_sous()
		}
	});


	var nam = 'monstre';
	$('#monster_life').attr("max", monstre.getLife()).attr("value", monstre.getNewLife());

	$('#monstre').html(nam);

	dps(user, monstre);

	$('#monstre').click(function () {
		degat_critique = clickdamage
		if (getRandomInt(luck) === 1) {
			console.log('yep');
			degat_critique = clickdamage * 4
		}
		etat_des_sous_disponible()
		monstre.attaque(degat_critique);
		$('#monster_life').attr("value", monstre.getNewLife());
		monnaie = user.setPoint(sous);
		$('#montant').html(monnaie);
		if (monstre.getNewLife() <= 0) {
			$('#monster_life').attr("value", monstre.getLife());
			monstre.MajNewLife();
			monnaie = user.setPoint(monstre.getMort());
			$('#montant').html(monnaie);
			monstre.setnb_mort();
			if (monstre.getnb_mort() % 10 == 0) {
				monstre.MajLife(2);
				monstre.MajNewLife();
				$('#monster_life').attr("max", monstre.getLife()).attr("value", monstre.getLife());
			}
		}
		var user_donnees = { point: monnaie, degat: clickdamage, dps: damage_seconde, monnaie: sous };
		var monstre_donnees = { vie: monstre.getLife(), nb_mort: monstre.getnb_mort() };
		localStorage.setItem('clicker', JSON.stringify(user_donnees));
		localStorage.setItem('monstre', JSON.stringify(monstre_donnees));
		console.log(localStorage);
	})

	setInterval(function () { dps(user, monstre); }, 1000);
});



function dps(user, monstre) {
	var life_actuel = $('#monster_life').attr('value');
	if (life_actuel <= 0) {
		life_actuel = monstre.getLife();
		monstre.setnb_mort();
		monnaie = user.setPoint(monstre.getMort());
		$('#montant').html(monnaie);
		if (monstre.getnb_mort() % 10 == 0) {
			monstre.MajLife(2);
			life_actuel = monstre.MajNewLife();
			$('#monster_life').attr("max", monstre.getLife()).attr("value", monstre.getLife());
		}
	}
	monstre.setDpsNewLife(life_actuel, damage_seconde);
	var user_donnees = { point: monnaie, degat: clickdamage, dps: damage_seconde, monnaie: sous };
	var monstre_donnees = { vie: monstre.getLife(), nb_mort: monstre.getnb_mort() };
	localStorage.setItem('clicker', JSON.stringify(user_donnees));
	localStorage.setItem('monstre', JSON.stringify(monstre_donnees));
	$('#monster_life').attr('value', monstre.getNewLife());
}