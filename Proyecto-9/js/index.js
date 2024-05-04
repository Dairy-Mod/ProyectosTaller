for(let x = 0; x<5; x++){
    if(x==2)
        continue;
    console.log(x) 
}


let a = 10;
a = a + 10;
a += 10;

let x = 10;
x**= 5; //Potencia 5 de 10
console.log(x);

//Tipo fecha

const fecha = new Date("2024-05-03");
console.log(fecha);

function myFunction(p1=3, p2=4) {
    return p1 * p2;
}

console.log(myFunction());
console.log(myFunction(5, 6));
console.log(myFunction(5));
comsole.log(myFunction);

let otraFuncion = (a, b) =  a * b

console.log(otraFuncion(5, 6))

console.log(funcionNormal)

function funcionNormal(a, b) {
    return a * b;
}

//función autoejectuable
//función anónima
(function(){
    console.log('Está es una función anónima autoejecutable');
})();

//función anónima flecha autoejecutable
(() => console.log('Está es una función anónima autoejecutable'))();


let alumno = {
    nombre : 'Juan',
    apellido : 'Perez',
    edad : 20,
    carrera : 'Ing. Sistemas',

    nombreCompleto :() => {
        return this.nombre + ' ' + this.apellido;
    }

}

console.log(alumno.nombreCompleto());