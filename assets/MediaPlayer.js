export default function MediaPlayer (config){
    this.media = config.el
    this.plugins = config.plugins || []
    this.playStateByUser = true
    this._initPlugins()
}

MediaPlayer.prototype.play = function(){
    this.playStateByUser ? this.media.play() : ''
}

MediaPlayer.prototype.pause = function(){
    this.playStateByUser ? this.media.pause() : ''
}

MediaPlayer.prototype.mute = function(){
    this.media.muted = true
}

MediaPlayer.prototype.unmute = function(){
    this.media.muted = false
}

MediaPlayer.prototype.togglePlay = function(){
    if(this.media.paused){
        this.playStateByUser = true    // asigno primero el true para poder utilizar la funcion play
        this.play() 
    }else{
        this.pause()
        this.playStateByUser = false    // pauso primero el video y luego asigno false para desahbilitar la funcion play
    }
}

MediaPlayer.prototype.toggleMute = function(){
    this.media.muted ? this.media.muted = false : this.media.muted = true
}


MediaPlayer.prototype._initPlugins = function(){

    // a todos los plugin les paso el objeto this que es el mediaplayer
    this.plugins.forEach(plugin=>{
        plugin.run(this)
    })
}
