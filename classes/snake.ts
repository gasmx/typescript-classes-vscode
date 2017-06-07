class Snake extends Animal {
    name: string;
    
    constructor(theName: string) {
        super(theName);
    }

    move(meters: number = 5) {
        console.log('Arrastando...');
        super.move(meters);
    }
}