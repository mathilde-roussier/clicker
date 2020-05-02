// localStorage.clear();
var monstre = new Monstre("30");
click = JSON.parse(localStorage.getItem('clicker'));
monstre = JSON.parse(localStorage.getItem('monstre'));
bonus_general = JSON.parse(localStorage.getItem('clicker_bonus'));

function stockage_boutique() {

	var bonus = {
		niveau_clique: niv_bonus_clique, prix_clique: prix_bonus_clique,
		niveau_sous: niv_sous, prix_sous: prix_bonus_sous,
		niveau_dps: niv_auto_damage, prix_dps: prix_bonus_damage,
		niveau_critique: niv_luck, prix_critique: prix_bonus_luck, monnaie_utilisee: monnaie_depensee
	};
	localStorage.setItem('clicker_bonus', JSON.stringify(bonus));
}

function stockage_user() {

	var user_donnees = { point: monnaie, degat: clickdamage, dps: damage_seconde, monnaie: sous };
	localStorage.setItem('clicker', JSON.stringify(user_donnees));

}

function stockage_monstre() {

	var monstre_donnees = { vie: monstre.getLife(), nb_mort: monstre.getnb_mort(), image: nom_image };
	localStorage.setItem('monstre', JSON.stringify(monstre_donnees));

}

if (click !== null && monstre !== null) {

	var nom_image = monstre['image']
	var user = new User(click['point'], click['degat'], click['dps'], click['monnaie']);
	var monstre = new Monstre(monstre['vie'], monstre['nb_mort']);
}
else {
	var user = new User();
	var monstre = new Monstre();
	var nom_image = 0
}

if (bonus_general !== null) {

	niv_bonus_clique = bonus_general['niveau_clique']
	prix_bonus_clique = bonus_general['prix_clique']

	niv_sous = bonus_general['niveau_sous']
	prix_bonus_sous = bonus_general['prix_sous']

	niv_luck = bonus_general['niveau_critique']
	prix_bonus_luck = bonus_general['prix_critique']

	niv_auto_damage = bonus_general['niveau_dps']
	prix_bonus_damage = bonus_general['prix_dps']

	monnaie_depensee = bonus_general['monnaie_utilisee']
}
else {

	var niv_bonus_clique = 1
	var prix_bonus_clique = 5

	var niv_sous = 1
	var prix_bonus_sous = 25

	var niv_luck = 1
	var prix_bonus_luck = 100

	var niv_auto_damage = 1
	var prix_bonus_damage = 50

	var monnaie_depensee = 0
}

// MIONTANT MONAIE
let monnaie = user.getPoint()


// BONUS 1 (dommage par clique)
let clickdamage = user.getDegat()
let bonus_clickdamage = 2


// BONUS 2 (dommage par seconde)
let damage_seconde = user.getDPS()
let bonus_damage_seconde = 2


// BONUS 3 CHANCE DE CRITIQUE
let degat_critique = 0
let luck = 100
let chance_critique = 0

// BONUS 4 GAIN DE SOUS
let sous = user.getMonnaie()

// NOMBRE DE MONSTRE
let nb_monstre = 25

// ETAT DU BOUTON SI DISPO ACHAT
etat_des_sous_disponible()

function etat_des_sous_disponible() {
	$(document).ready(function () {

		$("#prix_bonus_clique").html(prix_bonus_clique)
		if (monnaie - prix_bonus_clique < 0) {
			$("#bonus_clique").text("Pas disponible")
		}
		else {
			$("#bonus_clique").text("Acheter")
		}

		$("#prix_bonus_sous").html(prix_bonus_sous)
		if (monnaie - prix_bonus_sous < 0) {
			$("#sous").text("Pas disponible")
		}
		else {
			$("#sous").text("Acheter")
		}

		$("#prix_bonus_auto_damage").html(prix_bonus_damage)
		if (monnaie - prix_bonus_damage < 0) {
			$("#auto_damage").text("Pas disponible")
		}
		else {
			$("#auto_damage").text("Acheter")
		}

		$("#prix_bonus_luck").html(prix_bonus_luck)
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
	$('#montant').html(monnaie)

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


	$("#vie_monstre").text(monstre.getNewLife())
	$("#montant").html(monnaie)
	$("#niv_bonus_clique").text("Niv." + niv_bonus_clique)
	$("#niv_auto_damage").text("Niv." + niv_auto_damage)
	$("#niv_sous").text("Niv." + niv_sous)
	$("#niv_luck").text("Niv." + niv_luck)
	$("#click_damage").text("Dégâts par clique : " + clickdamage)
	$("#click_profil").text("Dégâts par clique : " + clickdamage)
	$("#damage_seconde").text("Dégâts par seconde : " + damage_seconde)
	$("#damage_profil").text("Dégâts par seconde : " + damage_seconde)
	$("#sous_utilise").text("Monnaie dépensée :" + monnaie_depensee)
	$("#gain_de_sous").text("Gain de sous : " + sous)
	$("#chance_critique").text("Dégâts critiques : " + parseInt(chance_critique * 100) + "%")




	if (monstre !== null) {

		$("#image").remove()
		$("#image_monstre").append("<img id='image' class='" + nom_image + "' src='img/" + nom_image + ".png'>")
	}
	else {
		$("#image").remove()
		$("#image_monstre").append("<img id='image' class='" + nom_image + "' src='img/" + nom_image + ".png'>")
		stockage_monstre()


	}
	// REJOUER
	$("body").on("click", "#replay", function () {

		localStorage.clear();
		user = new User();
		clickdamage = user.getDegat()
		monnaie = user.getPoint()
		damage_seconde = user.getDPS()
		sous = user.getMonnaie()
		monstre = new Monstre("30")
		$('#monster_life').attr("max", monstre.getLife()).attr("value", monstre.getLife());
		$('#monster_life').attr("value", monstre.getLife());

		monnaie_depensee = 0
		niv_bonus_clique = 1
		prix_bonus_clique = 5
		niv_sous = 1
		prix_bonus_sous = 25
		niv_luck = 1
		prix_bonus_luck = 100
		niv_auto_damage = 1
		prix_bonus_damage = 50
		nom_image = 0

		$("#vie_monstre").text(monstre.getNewLife())

		$('#monster_life').attr("value", monstre.getLife())
		$("#montant").html(monnaie)
		$("#image").remove()
		$("#image_monstre").append("<img id='image' class='" + nom_image + "' src='img/" + nom_image + ".png'>")

		$("#vie_monstre").text(monstre.getNewLife())
		$("#montant").html(monnaie)
		$("#niv_bonus_clique").text("Niv.1")
		$("#niv_auto_damage").text("Niv1.")
		$("#niv_sous").text("Niv1.")
		$("#niv_luck").text("Niv1.")
		$("#click_damage").text("Dégâts par clique : 1")
		$("#click_profil").text("Dégâts par clique : 1")
		$("#damage_seconde").text("Dégâts par seconde : 0")
		$("#damage_profil").text("Dégâts par seconde : 0")
		$("#sous_utilise").text("Monnaie dépensée : 0")
		$("#gain_de_sous").text("Gain de sous : 1")
		$("#chance_critique").text("Dégâts critiques : 0%")
		$("#prix_bonus_luck").text(prix_bonus_luck)
		$("#prix_bonus_auto_damage").text(prix_bonus_damage)
		$("#prix_bonus_sous").text(prix_bonus_sous)
		$("#prix_bonus_clique").text(prix_bonus_clique)
		etat_des_sous_disponible()

	});
	// BONUS POUR DEGATS PAR CLIQUE
	$("body").on("click", "#bonus_clique", function () {
		etat_des_sous_disponible()
		if (monnaie - prix_bonus_clique >= 0) {

			bonus_clique()
			stockage_boutique()
			stockage_user()
		}
	});

	// BONUS POUR DEGATS PAR SECONDES (IDLE)
	$("body").on("click", "#auto_damage", function () {
		etat_des_sous_disponible()
		if (monnaie - prix_bonus_damage >= 0) {

			auto_damage()
			stockage_boutique()
			stockage_user()
		}
	});
	// BONUS DE CHANCE CRITIQUE
	$("body").on("click", "#luck", function () {
		etat_des_sous_disponible()
		if (monnaie - prix_bonus_luck >= 0) {

			bonus_luck()
			stockage_boutique()
			stockage_user()
		}
	});
	// BONUS GAIN DE SOUS
	$("body").on("click", "#sous", function () {
		etat_des_sous_disponible()
		if (monnaie - prix_bonus_sous >= 0) {

			bonus_sous()
			stockage_boutique()
			stockage_user()
		}
	});


	var nam = 'monstre';
	$('#monster_life').attr("max", monstre.getLife()).attr("value", monstre.getNewLife());

	$('#niveau').text('Lvl.'+monstre.getNiveau());
	$('#monstre').html(nam);

	dps(user, monstre);

	$("body").on("click", "#image", function () {

		
		degat_critique = clickdamage
		if (getRandomInt(luck) === 1) {
			degat_critique = clickdamage * 4	
			$("#fly-in").remove()
			$("#vie_monstre").after("<div id='fly-in'></div")
			$("#fly-in").append("<div>Critique !</div>")
		}

		etat_des_sous_disponible()
		monstre.attaque(degat_critique);
		$('#monster_life').attr("value", monstre.getNewLife());
		monnaie = user.setPoint(sous);
		$('#montant').html(monnaie);
		if (monstre.getNewLife() <= 0) {

			nom_image = getRandomInt(nb_monstre)
			let id = document.getElementById('image')
			while (id.className == nom_image) {
				nom_image = getRandomInt(nb_monstre)
			}

			$("#image").remove()
			$("#image_monstre").append("<img id='image' class='" + nom_image + "' src='img/" + nom_image + ".png'>")
			$('#monster_life').attr("value", monstre.getLife());
			monstre.MajNewLife();
			monnaie = user.setPoint(monstre.getMort());
			$('#montant').html(monnaie);
			monstre.setnb_mort();
			if (monstre.getnb_mort() % 10 == 0) {
				monstre.MajLife(2);
				monstre.MajNewLife();
				$('#monster_life').attr("max", monstre.getLife()).attr("value", monstre.getLife());
				monstre.setNiveau()
				$('#niveau').text('Lvl.'+monstre.getNiveau())
			}
		}
		$("#vie_monstre").text(monstre.getNewLife())

		stockage_user()
		stockage_monstre()
	})

	setInterval(function () { dps(user, monstre); }, 1000);
});



function dps(user, monstre) {
	var life_actuel = $('#monster_life').attr('value');
	if (life_actuel <= 0) {
		nom_image = getRandomInt(nb_monstre)
		let id = document.getElementById('image')
		while (id.className == nom_image) {
			nom_image = getRandomInt(nb_monstre)
		}

		$("#image").remove()
		$("#image_monstre").append("<img id='image' class='" + nom_image + "' src='img/" + nom_image + ".png'>")

		life_actuel = monstre.getLife();
		monstre.setnb_mort();
		monnaie = user.setPoint(monstre.getMort());
		$('#montant').html(monnaie);
		if (monstre.getnb_mort() % 10 == 0) {
			monstre.MajLife(2);
			life_actuel = monstre.MajNewLife();
			$('#monster_life').attr("max", monstre.getLife()).attr("value", monstre.getLife());
			monstre.setNiveau()
			$('#niveau').text('Lvl.'+monstre.getNiveau())
		}
	}
	monstre.setDpsNewLife(life_actuel, damage_seconde);
	stockage_user()
	stockage_monstre()
	$('#monster_life').attr('value', monstre.getNewLife());
	if (monstre.getNewLife() <= 0) {
		$("#vie_monstre").text(0)
	}
	else {
		$("#vie_monstre").text(monstre.getNewLife())
	}


}

