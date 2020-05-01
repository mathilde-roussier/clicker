class User {


    #point;
    #degat;
    #DPS;
    #monnaie;

    constructor(point = 0, degat = 1, DPS = 0, monnaie = 1) {
        this.#point = point;
        this.#degat = degat;
        this.#DPS = DPS;
        this.#monnaie = monnaie;
    }

    setPoint(pnt) {
        this.#point = this.#point + pnt;
        return this.#point;
    }

    getPoint() {

        return this.#point;
    }
    soustractionPoint(depense) {

        this.#point = this.#point - depense
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