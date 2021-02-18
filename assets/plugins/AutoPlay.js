function AutoPlay(){
}

AutoPlay.prototype.run = function (player){
    this.player = player
    player.mute()
    player.play()
}

export default AutoPlay