var nome = "Beto";
var idade = 42;
var mandouEmail = true;
var nomes = ["Roberto", "Ricardo", "Raphael"];
var idades = [12, 22, 39];
var obj = { x: 0 };
function imprimirCoordenadas(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
imprimirCoordenadas({ x: 3, y: 7 });
