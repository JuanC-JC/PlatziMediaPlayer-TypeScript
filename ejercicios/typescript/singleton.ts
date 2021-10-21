class Singleton{

    //static no necesita una instnacia para ser llamado
    private static instance:Singleton


    //el constructor es privado por ende no puede ser llamado por fuera
    //la unica manera de instanciar algo es por getInstance y solo sera una vez,
    //ya que luego devolvera la misma instancia...
    private constructor(){
        //inicializacion de lo que necesito
    }

    //static es un metodo que no necesita instacia para ser llamado
    static getInstance(){
        //se añade la propiedad a la misma clase
        if (!Singleton.instance){
            Singleton.instance = new Singleton()
        }

        return Singleton.instance
    }
}


 
export default Singleton



//en este caso no debo instanciar con new singleton, el propio
//getInstance la instancia por mi
const a = Singleton.getInstance()
const b = Singleton.getInstance()


console.log(a==b);