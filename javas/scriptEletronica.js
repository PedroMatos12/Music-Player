//identificar a música que está tocando:
musicaTocando = (0)

//variável que vai conter as músicas
var music;

//pausar ou despausar
var pausePlay = 0
var pauseAndPlay = document.getElementById("play")

//slidebar do controle de tempo:
document.getElementById("tempoMusica").value = 0

//fazer a musica avançar com a slidebar
function time () {
    var controle = document.getElementById("tempoMusica").valueAsNumber
    var multiplicador = music.duration / 100
    music.currentTime = controle * multiplicador
}

//botões de avançar, retroceder e pausar/despausar a música:
if (musicaTocando == 0 ) {
    document.getElementById("imgMusica").style.backgroundImage = "url(/capas/eletronica/capa-eletronica.jpg)"
}

function next () {
    musicaTocando = (musicaTocando + 1)
    document.getElementById("tempoMusica").value = 0
    intervalo = window.setInterval (a1, 1000)

    if (musicaTocando == 1) {
        music = new Audio ('/musics/eletronica/party.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "Alok & Vintage Culture - Party On My Own"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/eletronica/party.jpg)"
        pauseAndPlay.innerHTML = "pause"
    }

    if (musicaTocando == 2) {
        music.pause()
        music = new Audio ('/musics/eletronica/infinity.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "Guru Josh Project - Infinity"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/eletronica/infinity.jpg)"
        pauseAndPlay.innerHTML = "pause"
    }
 
    if (musicaTocando == 3) {
        music.pause()
        music = new Audio ('/musics/eletronica/titanium.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "David Guetta ft. Sia - Titanium"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/eletronica/titanium.jpg)"
        pauseAndPlay.innerHTML = "pause"
    }
    
    if (musicaTocando == 4) {
        music.pause()
        music = new Audio ('/musics/eletronica/wake.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "Avicii - Wake Me Up "
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/eletronica/wake.jpg)"
        pauseAndPlay.innerHTML = "pause"
    }
    
    if (musicaTocando == 5) {
        music.pause()
        music = new Audio ('/musics/eletronica/hear.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "Alok, Bruno Martini feat. Zeeba - Hear Me Now"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/eletronica/hear.jpg)"
        pauseAndPlay.innerHTML = "pause"
    }
    
    if (musicaTocando == 6) {
        music.pause()
        music = new Audio ('/musics/eletronica/fell.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "Calvin Harris - Feel So Close"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/eletronica/fell.jpg)"
        pauseAndPlay.innerHTML = "pause"
    }
    
    if (musicaTocando == 7) {
        music.pause()
        music = new Audio ('/musics/eletronica/safe.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "Capital Cities - Safe And Sound"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/eletronica/safe.jpg)"
        pauseAndPlay.innerHTML = "pause"
    }
    
    if (musicaTocando == 8) {
        music.pause()
        music = new Audio ('/musics/eletronica/happier.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "Marshmello ft. Bastille - Happier"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/eletronica/happier.jpg)"
        pauseAndPlay.innerHTML = "pause"
    }
    
    if (musicaTocando == 9) {
        music.pause()
        music = new Audio ('/musics/eletronica/first.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "Skrillex - First Of The Year "
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/eletronica/first.jpg)"
        pauseAndPlay.innerHTML = "pause"
    }
    
    if (musicaTocando == 10) {
        music.pause()
        music = new Audio ('/musics/eletronica/love.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "SHOUSE - Love Tonight"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/eletronica/love.jpg)"
        pauseAndPlay.innerHTML = "pause"
    }

    if (musicaTocando > 10) {
        musicaTocando = 10
    }
    music.currentTime = 0
}

function before () {
    musicaTocando = (musicaTocando - 1)
    document.getElementById("tempoMusica").value = 0
    var intervalo = window.setInterval (a1, 1000)

    if (musicaTocando < 0) {
        musicaTocando = 0
    }

    if (musicaTocando == 0) {
        music.pause()
        music = 0
        clearInterval(intervalo)
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/eletronica/capa-eletronica.jpg)"
        document.getElementById("tempoMusica").value = 0
        document.getElementById("nomeMusica").innerHTML = "" 
        pauseAndPlay.innerHTML = "pause"
    }


    if (musicaTocando == 1) {
        music.pause()
        music = new Audio ('/musics/eletronica/party.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "Alok & Vintage Culture - Party On My Own"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/eletronica/party.jpg)"
        pauseAndPlay.innerHTML = "pause"
    }

    if (musicaTocando == 2) {
        music.pause()
        music = new Audio ('/musics/eletronica/infinity.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "Guru Josh Project - Infinity"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/eletronica/infinity.jpg)"
        pauseAndPlay.innerHTML = "pause"
    }
 
    if (musicaTocando == 3) {
        music.pause()
        music = new Audio ('/musics/eletronica/titanium.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "David Guetta ft. Sia - Titanium"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/eletronica/titanium.jpg)"
        pauseAndPlay.innerHTML = "pause"
    }
    
    if (musicaTocando == 4) {
        music.pause()
        music = new Audio ('/musics/eletronica/wake.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "Avicii - Wake Me Up "
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/eletronica/wake.jpg)"
        pauseAndPlay.innerHTML = "pause"
    }
    
    if (musicaTocando == 5) {
        music.pause()
        music = new Audio ('/musics/eletronica/hear.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "Alok, Bruno Martini feat. Zeeba - Hear Me Now"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/eletronica/hear.jpg)"
        pauseAndPlay.innerHTML = "pause"
    }
    
    if (musicaTocando == 6) {
        music.pause()
        music = new Audio ('/musics/eletronica/fell.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "Calvin Harris - Feel So Close"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/eletronica/fell.jpg)"
        pauseAndPlay.innerHTML = "pause"
    }
    
    if (musicaTocando == 7) {
        music.pause()
        music = new Audio ('/musics/eletronica/safe.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "Capital Cities - Safe And Sound"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/eletronica/safe.jpg)"
        pauseAndPlay.innerHTML = "pause"
    }
    
    if (musicaTocando == 8) {
        music.pause()
        music = new Audio ('/musics/eletronica/happier.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "Marshmello ft. Bastille - Happier"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/eletronica/happier.jpg)"
        pauseAndPlay.innerHTML = "pause"
    }
    
    if (musicaTocando == 9) {
        music.pause()
        music = new Audio ('/musics/eletronica/first.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "Skrillex - First Of The Year "
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/eletronica/first.jpg)"
        pauseAndPlay.innerHTML = "pause"
    }
    
    if (musicaTocando == 10) {
        music.pause()
        music = new Audio ('/musics/eletronica/love.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "SHOUSE - Love Tonight"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/eletronica/love.jpg)"
        pauseAndPlay.innerHTML = "pause"
    }

    music.currentTime = 0
}

function pause () {
    if (pausePlay > 1) {
        pausePlay = 0
    }
    switch (pausePlay) {
        case 0: music.pause()
                pauseAndPlay.innerHTML = "play_arrow"
        break

        case 1: music.play()
                pauseAndPlay.innerHTML = "pause"
        break
    }
    pausePlay = (pausePlay + 1)
}

//acontece a cada segundo:
function a1 () {  
    //escreve no parágrafo de id "tempoEDuracao" o tempo decorrido da música e a duração dela.
    tempo = Math.trunc(music.currentTime)
    duracao = Math.trunc(music.duration)
    document.getElementById("tempoEDuracao").innerHTML = (tempo + "/" + duracao + " s")

    //autoplay
    if (tempo == duracao) {
        window.setTimeout(next, 0)
    }

    //apagar tempo decorrido e a duração da música
    if (musicaTocando == 0) {
    document.getElementById("tempoEDuracao").innerHTML = ""
    }

    //fazer a slidebar acompanhar o tempo da música 
    const currentPercentage = (music.currentTime * 100 )/music.duration
    document.getElementById("tempoMusica").value = currentPercentage
} 