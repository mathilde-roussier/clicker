class Monstre {

    #life;
    #newLife;
    #mort;
    #nb_mort;

    constructor(vie) {
        this.#life = vie;
        this.#newLife = this.#life;
        this.#mort = 10;
        this.#nb_mort = 0;
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

    setDpsNewLife(life_actuel, degatdps) {
        this.#newLife = life_actuel * 1 - degatdps;
    }

    getMort() {
        return this.#mort;
    }

    setnb_mort() {
        this.#nb_mort = this.#nb_mort + 1;
    }
    getnb_mort() {
        return this.#nb_mort;
    }
}