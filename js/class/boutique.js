class Boutique {

    #niv_bonus_clique;
    #prix_bonus_clique;
    #niv_sous;
    #prix_bonus_damage;
    #niv_auto_damage;
    #prix_bonus_luck;
    #niv_luck;
    #prix_bonus_sous;

    constructor(niv_clique = 1, niv_sous = 1, niv_autodamage = 1, niv_luck = 1,prix_clique = 5,prix_damage = 50,prix_luck = 100,prix_sous = 25) {
        this.#niv_bonus_clique = niv_clique;
        this.#niv_sous = niv_sous;
        this.#niv_auto_damage = niv_autodamage;
        this.#niv_luck = niv_luck;
        this.#prix_bonus_clique = prix_clique;
        this.#prix_bonus_damage = prix_damage;
        this.#prix_bonus_luck = prix_luck;
        this.#prix_bonus_sous = prix_sous;
    }

    getNiv_clique() {
        return this.#niv_bonus_clique;
    }

    getNiv_sous() {
        return this.#niv_sous;
    }

    getNiv_auto_damage() {
        return this.#niv_auto_damage;
    }

    getNiv_luck() {
        return this.#niv_luck;
    }

    setNiv_clique() {
        this.#niv_bonus_clique = this.#niv_bonus_clique;
    }

    setNiv_sous() {
        return this.#niv_sous;
    }

    setNiv_auto_damage() {
        return this.#niv_auto_damage;
    }

    setNiv_luck() {
        return this.#niv_luck;
    }

    setPrix_clique(prix) {
        this.#prix_bonus_clique = this.#prix_bonus_clique + prix;
    }

    getPrix_clique() {
        return this.#prix_bonus_clique;
    }

    getPrix_sous() {
        return this.#prix_bonus_sous;
    }

    getPrix_damage() {
        return this.#prix_bonus_damage;
    }

    getPrix_luck() {
        return this.#prix_bonus_luck;
    }

}