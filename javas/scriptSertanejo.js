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
    document.getElementById("imgMusica").style.backgroundImage = "url(/capas/sertanejo/capa-sertanejo.jpg)"
}

function next () {
    musicaTocando = (musicaTocando + 1)
    document.getElementById("tempoMusica").value = 0
    intervalo = window.setInterval (a1, 1000)

    if (musicaTocando == 1) {
        music = new Audio ('/musics/sertanejo/evidencias.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "Chitãozinho e Xororó - Evindências"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/sertanejo/evidencias.png)"
        pauseAndPlay.innerHTML = "pause"
    }

    if (musicaTocando == 2) {
        music.pause()
        music = new Audio ('/musics/sertanejo/fronteira.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "Ana Castela ft. Gustavo Mioto - Fronteiras"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/sertanejo/fronteira.jpg)"
        pauseAndPlay.innerHTML = "pause"
    }
 
    if (musicaTocando == 3) {
        music.pause()
        music = new Audio ('/musics/sertanejo/barulho-do-foguete.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "Zé Neto e Cristiano - Barulho do Foguete"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/sertanejo/barulho-do-foguete.jpg)"
        pauseAndPlay.innerHTML = "pause"
    }
    
    if (musicaTocando == 4) {
        music.pause()
        music = new Audio ('/musics/sertanejo/canudinho.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "Gusttavo Lima - Canudinho"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/sertanejo/canudinho.jpg)"
        pauseAndPlay.innerHTML = "pause"
    }
    
    if (musicaTocando == 5) {
        music.pause()
        music = new Audio ('/musics/sertanejo/leao.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "Marília Mendonça - Leão"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/sertanejo/leao.jpg)"
        pauseAndPlay.innerHTML = "pause"
    }
    
    if (musicaTocando == 6) {
        music.pause()
        music = new Audio ('/musics/sertanejo/oi-balde.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "Zé Neto e Cristiano - Oi Balde"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/sertanejo/oi-balde.jpg)"
        pauseAndPlay.innerHTML = "pause"
    }
    
    if (musicaTocando == 7) {
        music.pause()
        music = new Audio ('/musics/sertanejo/namorando-ou-nao.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "Clayton & Romário ft. Luan Santana - Namorando ou Não"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/sertanejo/namorando-ou-nao.jpg)"
        pauseAndPlay.innerHTML = "pause"
    }
    
    if (musicaTocando == 8) {
        music.pause()
        music = new Audio ('/musics/sertanejo/devia-ser-proibido.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "Henrique e Juliano - Devia Ser Proibido"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/sertanejo/devia-ser-proibido.jpg)"
        pauseAndPlay.innerHTML = "pause"
    }
    
    if (musicaTocando == 9) {
        music.pause()
        music = new Audio ('/musics/sertanejo/nao-vitalicio.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "Matheus & Kauan ft. Mari Fernandez - Não Vitalício"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/sertanejo/nao-vitalicio.jpg)"
        pauseAndPlay.innerHTML = "pause"
    }
    
    if (musicaTocando == 10) {
        music.pause()
        music = new Audio ('/musics/sertanejo/dois-fugitivos.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "Simone Mendes - Dois Fugitivos"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/sertanejo/dois-fugitivos.png)"
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
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/sertanejo/capa-sertanejo.jpg)"
        document.getElementById("tempoMusica").value = 0
        document.getElementById("nomeMusica").innerHTML = "" 
        pauseAndPlay.innerHTML = "pause"
    }

    if (musicaTocando == 1) {
        music.pause()
        music = new Audio ('/musics/sertanejo/evidencias.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "Chitãozinho e Xororó - Evindências"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/sertanejo/evidencias.png)"
        pauseAndPlay.innerHTML = "pause"
    }

    if (musicaTocando == 2) {
        music.pause()
        music = new Audio ('/musics/sertanejo/fronteira.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "Ana Castela ft. Gustavo Mioto - Fronteiras"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/sertanejo/fronteira.jpg)"
        pauseAndPlay.innerHTML = "pause"
    }
 
    if (musicaTocando == 3) {
        music.pause()
        music = new Audio ('/musics/sertanejo/barulho-do-foguete.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "Zé Neto e Cristiano - Barulho do Foguete"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/sertanejo/barulho-do-foguete.jpg)"
        pauseAndPlay.innerHTML = "pause"
    }
    
    if (musicaTocando == 4) {
        music.pause()
        music = new Audio ('/musics/sertanejo/canudinho.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "Gusttavo Lima - Canudinho"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/sertanejo/canudinho.jpg)"
        pauseAndPlay.innerHTML = "pause"
    }
    
    if (musicaTocando == 5) {
        music.pause()
        music = new Audio ('/musics/sertanejo/leao.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "Marília Mendonça - Leão"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/sertanejo/leao.jpg)"
        pauseAndPlay.innerHTML = "pause"
    }
    
    if (musicaTocando == 6) {
        music.pause()
        music = new Audio ('/musics/sertanejo/oi-balde.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "Zé Neto e Cristiano - Oi Balde"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/sertanejo/oi-balde.jpg)"
        pauseAndPlay.innerHTML = "pause"
    }
    
    if (musicaTocando == 7) {
        music.pause()
        music = new Audio ('/musics/sertanejo/namorando-ou-nao.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "Clayton & Romário ft. Luan Santana - Namorando ou Não"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/sertanejo/namorando-ou-nao.jpg)"
        pauseAndPlay.innerHTML = "pause"
    }
    
    if (musicaTocando == 8) {
        music.pause()
        music = new Audio ('/musics/sertanejo/devia-ser-proibido.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "Henrique e Juliano - Devia Ser Proibido"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/sertanejo/devia-ser-proibido.jpg)"
        pauseAndPlay.innerHTML = "pause"
    }
    
    if (musicaTocando == 9) {
        music.pause()
        music = new Audio ('/musics/sertanejo/nao-vitalicio.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "Matheus & Kauan ft. Mari Fernandez - Não Vitalício"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/sertanejo/nao-vitalicio.jpg)"
        pauseAndPlay.innerHTML = "pause"
    }
    
    if (musicaTocando == 10) {
        music.pause()
        music = new Audio ('/musics/sertanejo/dois-fugitivos.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "Simone Mendes - Dois Fugitivos"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/sertanejo/dois-fugitivos.png)"
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