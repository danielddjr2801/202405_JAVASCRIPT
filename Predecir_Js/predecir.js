const info = {

    personal: {

        nombre: 'Carlos',
        apellido: 'Vega',

        detalles: {

            edad: 30,
            ocupacion: 'Ingeniero'
        }
    }

};

const {personal: {detalles: {edad, salario}}} = info;

console.log(edad);
console.log(salario);


{

const objetoA = {a: 1, b: 2, c: 3};

const objetoB = {b: 4, c: 5, d: 6};

const resultado = { ...objetoA, ...objetoB};

console.log(resultado);
}


function verificar() {

    if (true) {

        const a = 2;
        let b = 3;
        var c = 4;
    }

    console.log(c);
    console.log(a);
    console.log(b);

    //solamente la variable c es definida ya que las otras no se ejecutan por el tipo de variable.
}

verificar();

{

    const datos = Object.freeze({nombre: 'Luis', edad: 29});

    datos.edad = 30;

    console.log(datos);
}

const original = [1, 2, 3];

const nuevo = original.concat(4);

console.log(original);
console.log(nuevo);

{

    const frutas = ['manzana', 'naranja', 'pera', 'mango'];

    const [primera, segunda] = frutas;

    const [, , tercera] = frutas;

    console.log(primera);
    console.log(segunda);
    console.log(tercera);

}

for (let i = 0; i < 3; i++) {

    for (let i = 0; i < 2; i++){

        console.log(i);

    }

}

{

    // para no sobrescribir el valor de "b" se puede agregar un simbolo o algo a "b" de objeto2, como por ejemplo.s

const objeto1 = { a: 1, b: 2 };

    const objeto2 = { b2: 3, c: 4 };

    const combinado = { ...objeto1, ...objeto2 };

    console.log(combinado);
}

{
const numeros1 = [1, 2, 3];

    const numeros2 = [3, 4, 5];

    const combinados = [...numeros1, ...numeros2];

    console.log(combinados);

}

function demostracion() {

    var nombre = 'Ana';

    let edad = 25;

    if (true) {

        var nombre = 'Luis';

        let edad = 30;

    }

    console.log(nombre);

    console.log(edad);

}

demostracion();