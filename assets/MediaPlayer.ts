
class MediaPlayer {

    media: HTMLMediaElement //HTMLMediaElement <video>
    private playStateByUser: boolean
    private plugins: Array<any>
    container: HTMLDivElement


    constructor(config) {
        this.media = config.element                  
        this.plugins = config.plugins || []
        this.playStateByUser = true
        this.initPlayer()
        this.initPlugins()        //when the mediaplayer is create the plugins start in automatic

    }


    initPlayer(){
        this.container = document.createElement('div')
        this.container.style.position = 'relative'

        //insertar al lado del video
        this.media.parentNode.insertBefore(this.container,this.media)

        //luego movemos al video dentro del contenedor que acabamos de crear
        this.container.appendChild(this.media)
    }

    play() {
        this.playStateByUser ? this.media.play() : ''
    }

    pause() {
        this.playStateByUser ? this.media.pause() : ''
    }

    mute() {
        this.media.muted = true
    }

    unmute() {
        this.media.muted = false
    }

    togglePlay() {
        if (this.media.paused) {
            this.playStateByUser = true // asigno primero el true para poder utilizar la funcion play
            this.play()
        } else {
            this.pause()
            this.playStateByUser = false // pauso primero el video y luego asigno false para desahbilitar la funcion play
        }
    }

    toggleMute() {
        this.media.muted ? this.media.muted = false : this.media.muted = true
    }
    private initPlugins() {
        // a todos los plugin les paso el objeto this que es el mediaplayer
        this.plugins.forEach(plugin => {
            plugin.run(this)
        })
    }
}





export default MediaPlayer