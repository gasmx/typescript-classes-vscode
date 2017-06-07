var user = new User("Gabriel", "Angelus");
document.body.innerHTML = user.hello();

enum Color {Red, Green, Blue};
var c: Color = Color.Green;
console.log("Index de Green em Color: " + c);

/* ===================================== */
var sam = new Snake("Sammy the Python");
var tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(30);

/* ===================================== */
var p = new Person();
p.password = "123456"; // Mostra um erro no get accessor da classe

/* ===================================== */
SystemAlert.alert("Olá");
SystemAlert.warm("Aqui vai uma mensagem sugestiva.");
SystemAlert.alert("Houve algum erro.");