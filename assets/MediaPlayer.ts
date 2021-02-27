
class MediaPlayer {

    media: HTMLMediaElement //HTMLMediaElement <video>
    playStateByUser: boolean
    plugins: Array<any>


    constructor(config) {
        this.media = config.element                  
        this.plugins = config.plugins || []
        this.playStateByUser = true
        this.initPlugins()        //when the mediaplayer is create the plugins start in automatic

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