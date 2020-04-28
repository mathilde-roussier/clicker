class  Monstre {

    constructor(vie) {
        this.life = vie;
        this.newLife = this.life;
    }

    getLife() {
        return this.life;
    }

    attaque() {
        this.newLife = this.newLife - 1;
    }

    getNewLife() {
        return this.newLife;
    }

    setNewLife() {
        this.newLife = this.getLife();
        return this.newLife;
    }

    setDpsNewLife(life_actuel) {
        this.new_life = life_actuel * 1 - 0.25;
    }
}