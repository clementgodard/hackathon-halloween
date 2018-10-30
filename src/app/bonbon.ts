export class Bonbon {
    private nom: string;
    private img: string;

    constructor(nom: string, img: string) {
        this.nom = nom;
        this.img = img;
    }

    public getNom() {
        return this.nom;
    }

    public getImg() {
        return this.img;
    }
}
