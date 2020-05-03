class Monstre {

    #life;
    #newLife;
    #mort;
    #nb_mort;
    #niveau;

    constructor(vie = 30,nb_mort = 0,niveau = 1) {
        this.#life = vie;
        this.#newLife = this.#life;
        this.#mort = 10;
        this.#nb_mort = 0;
        this.#nb_mort = nb_mort;
        this.#niveau = niveau;
    }

    getLife() {
        return this.#life;
    }

    attaque(degat) {
        this.#newLife = this.#newLife - degat;
    }

    getNewLife() {
        return this.#newLife;
    }
    MajNewLife() {
        this.#newLife = this.#life;
        return this.#newLife;
    }

    MajLife(X) {
        this.#life = this.#life * X;
    }

    setDpsNewLife(life_actuel, dps) {
        this.#newLife = life_actuel * 1 - dps;
    }

    getMort() {
        return this.#mort;
    }

    setnb_mort() {
        this.#nb_mort = this.#nb_mort + 1;
    }

    resetnb_mort() {
        this.#nb_mort = this.#nb_mort - this.#nb_mort;
    }

    getnb_mort() {
        return this.#nb_mort;
    }

    getNiveau() {
        return this.#niveau;
    }
    setNiveau() {
       this.#niveau = this.#niveau + 1;
       // return this.#niveau
    }
}