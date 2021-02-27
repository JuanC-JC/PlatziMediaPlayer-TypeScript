import MediaPlayer from './MediaPlayer'
import AutoPlay from './plugins/AutoPlay'
import AutoPause from './plugins/AutoPause'
import Ads from './plugins/Ads/index'

const video = document.querySelector('video')

let player = new MediaPlayer({
    element:video, 
    plugins:[new AutoPlay(),new AutoPause(),new Ads()]
})

const playButton:HTMLElement = document.querySelector('#playButton')
playButton.onclick = ()=>{player.togglePlay()}

const muteButton:HTMLElement = document.querySelector('#muteButton')
muteButton.onclick = ()=>{player.toggleMute()}


//lo desactive por que no se como funciona bien y da errores

// if('serviceWorker' in navigator){
//     navigator.serviceWorker.register('/sw.js').catch(err =>{
//         console.log(err)
//     })

// } 