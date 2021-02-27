import MediaPlayer from '../MediaPlayer'

class AutoPlay {
    constructor() {} 
    
    //mute the media and play 
    run(player:MediaPlayer) {
        player.mute()
        player.play()

    }
}


export default AutoPlay