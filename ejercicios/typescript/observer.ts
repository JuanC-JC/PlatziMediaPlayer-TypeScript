
//intarface del subject --> osea objeto a observar

//subscribe: (observer:Observer)=> void -> el void es para indicar que la funcion no retorna
interface Subject{
    subscribe: (observer:Observer)=> void
    unsuscribe: (Observer:Observer) => void
}


interface Observer{
    update: (data: any) => void
}

class BitcoinPrice implements Subject{

    observers: Array<Observer> = []

    //este es el objeto que estamos observando
    constructor (){
        const element:HTMLInputElement = document.querySelector('#value')
        element.addEventListener('input',()=>{
            this.notify(element.value)
        })
    }

    subscribe (observer:Observer){
        this.observers.push(observer)
    }

    unsuscribe(observer:Observer){
        const index = this.observers.findIndex(obs =>{
            return obs === observer
        })


        this.observers.splice(index,1)
    }


    notify(data: any){
         this.observers.forEach(observer => observer.update(data))
    }
}


//elementos observadores
class priceDisplay implements Observer{

    //elemento observador el 'precio'
    private element: HTMLElement

    constructor(){
        this.element= document.querySelector('#price')
    }
    update(data:any){
        this.element.textContent = data
    }
}


//observado
const value = new BitcoinPrice()

//observador
const display = new priceDisplay() 



value.subscribe(display)
// value.unsuscribe(display)
