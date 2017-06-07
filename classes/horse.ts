class Horse extends Animal {
    name: string;
    
    constructor(theName: string) {
        super(theName);
    }

    move(meters: number = 45) {
        console.log('Galopando...');
        super.move(meters);
    }
}