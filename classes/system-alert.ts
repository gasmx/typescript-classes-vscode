class SystemAlert {
    static alert(message: string): void {
        console.log("Alerta: " + message);
    }

    static warm(message: string): void {
        console.log("Atenção: " + message);
    }

    static error(message: string): void {
        console.log("Erro: " + message);
    }
}