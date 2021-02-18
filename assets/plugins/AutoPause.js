class AutoPause{

    constructor(){
        this.threshold = 0.25
        //cuando se llame la funcion handleintersection el this sera igual a el objeto autopause
        this.handleIntersection = this.handleIntersection.bind(this)
        //nuevamente debo enmascar el objeto this dentro de cada funcion
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this)    
    }

    run(player){
        this.player = player
        
        //recibe la funcion que debe ejecutar y el parametro de corte en pantalla, osea la funcion
        // se ejecutara cuando exista solo un 25% del elemento en pantalla

        //requiero que handleintersection tenga bindeado el this o si no, el this sera del objeto
        //intersectionObserver
        const observer = new IntersectionObserver(this.handleIntersection,{
            threshold: this.threshold
        })

        //asigno el observador al objeto "htmlElement" que debe observar
        observer.observe(this.player.media)


        document.addEventListener('visibilitychange',this.handleVisibilityChange)
    }

    // la funcion callback que ejecuta el observer me pasara unos parametros 
    handleIntersection(entries){
        const entry = entries[0]

        if (entry.intersectionRatio > 0.25){
            this.player.play()
        }else{
            this.player.pause()
        }
    }

    handleVisibilityChange(){

        const isVisible = document.visibilityState  === 'visible'


        isVisible ? this.player.play() : this.player.pause()

    }
}


export default AutoPause