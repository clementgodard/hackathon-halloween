export class Bonbon {
    private nom: string;
    private img: string;
    private nombre: number;

    constructor(nom: string, img: string, nombre: number = 1) {
        this.nom = nom;
        this.img = img;
        this.nombre = nombre;
    }

    public getNom() {
        return this.nom;
    }

    public getImg() {
        return this.img;
    }

    public getNombre() {
        return this.nombre;
    }

    public nombrePlus() {
        this.nombre++;
    }

    public resetNombre() {
        this.nombre = 1;
    }
}
