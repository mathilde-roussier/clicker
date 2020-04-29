class User {


    #point;
    #degat;
    #DPS;
    #monnaie;

    constructor() {
        this.#point = 0;
        this.#degat = 1;
        this.#DPS = 0;
        this.#monnaie = 1;
    }

    setPoint(pnt) {
        this.#point = this.#point + pnt;
        return this.#point;
    }

    setMonnaie(bonus_monnaie) {
        this.#monnaie = this.#monnaie + bonus_monnaie;
    }

    setDegat(bonus_degat) {
        this.#degat = this.#degat + bonus_degat;
    }

    setDPS(bonus_DPS) {
        this.#DPS = this.#DPS + bonus_DPS;
    }

    getDegat() {
        return this.#degat;
    }

    getDPS() {
        return this.#DPS;
    }

    getMonnaie() {
        return this.#monnaie;
    }
}