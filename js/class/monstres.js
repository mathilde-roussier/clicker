class  Monstre {

    constructor(vie) {
        this.life = vie;
        this.newLife = this.life;
        this.mort = 10;
    }

    getLife() {
        return this.life;
    }

    attaque(degat) {
        this.newLife = this.newLife - degat;
    }

    getNewLife() {
        return this.newLife;
    }

    MajNewLife() {
        this.newLife = this.getLife();
        return this.newLife;
    }

    setDpsNewLife(life_actuel,degatdps) {
        this.newLife = life_actuel * 1 - degatdps;
    }

    getMort() {
        return this.mort;
    }
}