class Person {
    private _password: string;

    get password(): string {
        return this._password;
    }

    set password(p: string) {
        if (p != '123456')
            this._password = p;
        else
            console.log("Ei, a senha não pode ser: 123456");
    }
}