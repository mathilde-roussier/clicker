class User{

    constructor() {
        this.point = 0;
        this.degat = 1;
        this.degatDPS = 1;
        this.pnt = 1;
    }

    setPoint(pnt) {
        this.point = this.point + pnt;
        return this.point;
    }

    getDegat() {
        return this.degat;
    }

    getDegatDPS() {
        return this.degatDPS;
    }

    getPnt() {
        return this.pnt;
    }
}