// Operadores
// Ejercicio N.1

var 
number1 = 7;
number2 = 8;

if (number1 && number2) {
    resultado = (number1 * number2 / 2);
    console.log(resultado);

}

// Ejercicio N.2

number3 = 4;
number4 = 5;

if (number3 && number4) {
    respuesta = (number3 + number4);
    console.log(respuesta);

}

// Ejercicio N.3

number5 = 10;

if (number5) {
    solution= (number5 ** 2);
    console.log(solution);

}

// Ejercicio N.4

euro = 4
dolar= 1.09
if (euro && dolar ) {
    conversion = (euro * dolar);
    console.log(conversion);

}

// Ejercicio N.5 

side = 20;
if (side) {
    area = (side * side);
    perimetro = (side + side + side + side);
    console.log(area);
    console.log(perimetro);

}


//CONDICIONALES


    
    //Punto #7
    
    function esBisiesto(agnio) {
        return ((agnio % 4 == 0 && agnio % 100 !=0) || (agnio % 100 == 0 && agnio % 400 == 0));
    }

    function validarAgnios(start, end) {
        let agnios = [];

        for (let agnio = start; agnio <= end; agnio++){
            agnios.push(agnio);
        }
        
        return agnios.filter(esBisiesto);
    }

    let resultado = validarAgnios(1900, 2024);
    console.log(resultado);
    console.log(resultado.length);



    
//CICLOS


//Punto #1


let b = parseInt(prompt('Ingresar Número: '));
let a = 1;


while (a <= b){


    if (a % 3 == 0){
        document.write(a + ",");
    }
    a = a + 1;
}






//Punto #2


function numerosImpares() {


    for (let i = 1; 1 <- 100; 1 +- 2 ){
        console.log(i);
    }    
}


numerosImpares();


