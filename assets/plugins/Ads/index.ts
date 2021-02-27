import MediaPlayer from '../../MediaPlayer'
import {Ads, Ad } from './Ads'

class AdsPlugin{

    private player:MediaPlayer
    private media: HTMLMediaElement
    private ads: Ads
    private currentAd: Ad
    adsContainer: HTMLDivElement

    constructor (){
        this.ads = Ads.getInstance() 
        //el que llama el evento es media, por eso debo sobre-escribir el this con bind
        this.handleTimeUpdate = this.handleTimeUpdate.bind(this)
        this.adsContainer = document.createElement('div')
    }

    run(player:MediaPlayer){

        this.player = player

        //agrego un contenedor para el ads

        this.player.container.appendChild(this.adsContainer)

        this.media = this.player.media

        //evento cada que el tiempo del video se actualiza osea cada x tiempo
        this.media.addEventListener('timeupdate',this.handleTimeUpdate)
    }


    private handleTimeUpdate(){
        const currentTime = Math.floor(this.media.currentTime);

        //cada 30 segundos renderiza un nuevo ad
        if(currentTime % 30 === 0 ){
            this.renderAd()
        }
    }


    private renderAd(){

        console.log(new Date());
        //si existe un currentad no pedir otro
        if(this.currentAd){
            return
        }
        const ad = this.ads.getAd()
        this.currentAd = ad

        this.adsContainer.innerHTML = ` 
                                        <div class="ads">
                                            <a  class="ads__link" href="${this.currentAd.url}" target="_blank">
                                            <img class="ads__img" src="${this.currentAd.imageUrl}" />
                                            <div class="ads__info">
                                                <h5 class="ads__title">${this.currentAd.title}</h5>
                                                <p class="ads__body">${this.currentAd.body}</p>
                                            </div>
                                            </a>
                                        </div>`


        //cada 10 segs elimino el ad recurrente                      
        setTimeout(() => {
            this.currentAd = null
            this.adsContainer.innerHTML = ''
        }, 10000);
    }


}


export default AdsPlugin