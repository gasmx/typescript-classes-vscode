class Animal {
    name: string;
    
    constructor(theName: string) {
        this.name = theName;
    }

    move(meters: number = 0) {
        console.log(this.name + ' se moveu ' + meters + ' metros.');
    }
}