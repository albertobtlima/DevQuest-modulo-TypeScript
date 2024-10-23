let nome: string = "Beto";

let idade: number = 42;

let mandouEmail: boolean = true;

let nomes: string[] = ["Roberto", "Ricardo", "Raphael"];
let idades: Array<number> = [12, 22, 39];

let obj: any = { x: 0 };

function imprimirCoordenadas(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
imprimirCoordenadas({ x: 3, y: 7 });
