//definicion de un objeto de cualquier tipo 
let muted :boolean = true


let personas:string[] = [];
personas.push('juan')
personas.push('isabela')
personas.push('ohter')


let otherPeople: Array<number | string> = [];
otherPeople.push(1)
otherPeople.push('juan')

// estructura de datos tipo enum 

enum Color2{
    red,
    green,
    orange,
    blue,
}

enum Color{
    red = 'red',
    blue = 'blue',
    orange = 'orange',
    green = 'green'
}


//en este caso soblo se puede seleccionar un tipo especifico del mismo --> Color.blue = 2
//cada nombre en el objeto enum tiene asignada una enumeracion
let favoriteColor: Color = Color.blue


//para que utilizarlo como un objeto normal color2.blue = 'blue'
let favoriteColor2: Color2 = Color2.blue


//any --> declaramos un objeto que puede ser cualquier tipo y luego podemos definir en especifico de que era.
let comodin: any = 'Joker';
comodin = {type: 'Wildcard'}


//declaracion de funciones -> ts ya sabria que si sumo dos numeros retorno numeros
//sin embargo puedo ser explicito en la salida de la funcion

function add(a:number, b:number):number{
    return a + b;

}


//funcion que retorna una funcion despues del : expreso (name) => type
function createAdder(a:number): (number) => number {
    return function (b:number){
        return b  + a;
    }
}

// const addFour = createAdder(4)


//en ts los parametros son obligatorios, si falta un parametro debo indicar que es opcional con param?
//tambien puedo colocar un valor por omision del param, seria param:type = value
function fullName(firstName: string, lastName:string = ''): string{
    return `${firstName} ${lastName}`
}


// const richard = fullName('Richard','Kaufman')
// const richard2 = fullName('Richard')

//interfaces --> nos permiten declarar la forma que debe tener un objeto, ayuda para autocompletar
//y gestion de errores

//la interfaz se vuelve un type asi que los params pueden decir param:nameInterface
// si coloco le nombre de property como opcional debe ser prop?: type
//las funciones que quiero que tenga cuando se instancie el obj deben ir aca


interface Rectangulo{
    width: number
    heigth: number
    color?: Color
    toString?: Function
}

//match error si no cumplo con los params definidos en la interfaz del type(Rectangulo)
let rect: Rectangulo = {
    width:4,
    heigth:5,
    color: Color.blue,
    toString: function (){
        return this.color ? `Un rectangulo ${this.color}` : 'Un rectangulo'
    }
}



function calcArea(r:Rectangulo):number{
    return r.heigth * r.width
}


