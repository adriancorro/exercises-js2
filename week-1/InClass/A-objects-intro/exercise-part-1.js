/*

Think of 5 different real world "things" that you 
can describe with a JavaScript object

Assign each of them to a separate variable


For example:
var car = {
    brand: "Seat",
    model: "Arona",
    color: "white",
    horsepower: 115,
    doors: 5
};

*/


// Habitacion
const camaMatrimonial = {
    dimensiones: {
        largo: 2,
        ancho: 2
    },
    marca: 'Michellin'
}
const habitacionUno = {
    dimension: {
        mts2: 2,
        largo: 2,
        ancho: 1,
        altura: 3
    },
    cama: camaMatrimonial
}
const habitacionDos = {
    dimension: {
        mts2: 6,
        largo: 3,
        ancho: 2,
        altura: 5
    },
    cama: camaMatrimonial
}
console.log(habitacionUno)
console.log(habitacionDos)

// Planeta
const planeta = {
    nombre: 'Venus',
    posicion: 2,
    gravedad: 8.87,
    getRotacion: function() {
        return `${this.nombre} esta rotando a ${this.contanteDeRotacion}`
    },
    contanteDeRotacion: 35.0214,
    temporadasDelAnyo: ['verano', 'invierno', 'otoño', 'primavera'],
    population: 1000,
    setPopulation: function(nuevoValor) {
        if (typeof nuevoValor !== 'number') {
            return new Error(`nuevoValor no es de tipo numerico`)
        }
        this.population = nuevoValor
    }
}

console.log(planeta.getRotacion())
console.log(planeta.temporadasDelAnyo)
console.log(planeta.population)
planeta.setPopulation(2000)
console.log(planeta.population)
planeta.population = 3000
console.log(planeta.population)
const resultado = planeta.setPopulation('a')
console.log(planeta.population)
console.log(resultado)

// Libro
const libro = {
    nombre: 'Mil leguas de viaje submarino',
    autor: 'Julio Verne',
    ISBN: '9780307747938',
    // array
    nombreDeCapitulos: ['Capitulo 1', 'Capitulo 2', 'Capitulo 3'],
    // objeto literal
    formato: {
        digital: ['ebook', 'pdf', 'mobi', 'web'],
        fisico: ['tapa dura', 'tapa blanda'],
        audiolibro: true
    },
    // array de objetos literal
    edicion: [
        {
            lugarDePublicacion: 'alemania',
            description: 'Edicion limitada alemana de cuando vivia JV',
            editorial: 'ED GMBH Aleman',
            ejemplares: 12345
        },
        {
            lugarDePublicacion: 'italiana',
            description: 'Edicion limitada italiana de cuando vivia JV',
            editorial: 'ED Italia',
            ejemplares: 123123
        },
        {
            lugarDePublicacion: 'castellano',
            description: 'Edicion limitada española de cuando vivia JV',
            editorial: 'ED Espanya',
            ejemplares: 323232
        },
    ]
}

// Ferreteria
const ferreteria0 = {
    nombre: 'Migracode Ferretreria',
    direccion: 'Pase al gue 405, 67174, Barcelona ES',
    ubicacion: {
        calle: 'Paseo al gue',
        numero: 405,
        codigoPostal: 67174,
        ciudad: `Barcelona`,
        pais: 'ES'
    }
}
const ferreteria1 = {
    nombre: 'Migracode Ferretreria',
    direccion: 'Gran via de les corts 506, 67175, Barcelona ES',
    ubicacion: {
        calle: 'Gran via de les corts',
        numero: 506,
        codigoPostal: 67175,
        ciudad: `Barcelona`,
        pais: 'ES'
    }
}
const ferreteria2 = {
    nombre: 'Migracode Ferretreria',
    direccion: 'Potzdammer platz 5500, Berlin DE',
    ubicacion: {
        calle: 'Potzdammer platz',
        numero: 5500,
        codigoPostal: 0,
        ciudad: `Berlin`,
        pais: 'DE'
    }
}
const ferreterias = [ferreteria0, ferreteria1, ferreteria2]
const resultado2 = ferreterias.filter(ferreteria => {
    console.log(ferreteria.ubicacion.pais)
    console.log(ferreteria.direccion)
    return ferreteria.ubicacion.pais === 'ES'
})
console.log(resultado2)

// Medicamentos
const diazepan = {
    formatos: [25, 60, 100],
    principioActivo: 'diazepan',
    laboratorios: [{
        nombre: 'pfizer',
        paisDeOrigen: 'DE'
    }, {
        nombre: 'moderna',
        paisDeOrigen: 'VE'
    }]
}

const lorazepam = {
    formatos: [5, 6, 7],
    principioActivo: 'hu',
    laboratorios: [{
        nombre: 'bayer',
        paisDeOrigen: 'VE'
    }, {
        nombre: 'hula',
        paisDeOrigen: 'VE'
    }]
}



const medicamentosF = [diazepan,lorazepam ]
const result = medicamentosF.filter( a => { // con map tambien va 
    return  a.laboratorios.filter(  b => { 
        if (b.paisDeOrigen ===  'VE'){console.log(b); } 
        })})


