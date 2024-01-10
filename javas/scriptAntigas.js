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
    document.getElementById("imgMusica").style.backgroundImage = "url(/capas/antigas/capa-antigas.png)"
}

function next () {
    musicaTocando = (musicaTocando + 1)
    document.getElementById("tempoMusica").value = 0
    intervalo = window.setInterval (a1, 1000)

    if (musicaTocando == 1) {
        music = new Audio ('/musics/antigas/deixe.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "Acústico 1Kilo - Deixe-me Ir"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/antigas/deixe.png)"
        pauseAndPlay.innerHTML = "pause"
    }

    if (musicaTocando == 2) {
        music.pause()
        music = new Audio ('/musics/antigas/exagerado.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "Cazuza - Exagerado"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/antigas/exagerado.jpg)"
        pauseAndPlay.innerHTML = "pause"
    }
 
    if (musicaTocando == 3) {
        music.pause()
        music = new Audio ('/musics/antigas/tempo.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "Legião Urbana - Tempo Perdido "
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/antigas/tempo.png)"
        pauseAndPlay.innerHTML = "pause"
    }
    
    if (musicaTocando == 4) {
        music.pause()
        music = new Audio ('/musics/antigas/tiro.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "Elis Regina & Adoniran Barbosa - Tiro ao Álvaro"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/antigas/tiro.png)"
        pauseAndPlay.innerHTML = "pause"
    }
    
    if (musicaTocando == 5) {
        music.pause()
        music = new Audio ('/musics/antigas/cabeca.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "Alcione - Você me Vira a Cabeça "
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/antigas/cabeca.jpg)"
        pauseAndPlay.innerHTML = "pause"
    }
    
    if (musicaTocando == 6) {
        music.pause()
        music = new Audio ('/musics/antigas/cheia.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "Raça Negra - Cheia de Manias"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/antigas/cheia.jpg)"
        pauseAndPlay.innerHTML = "pause"
    }
    
    if (musicaTocando == 7) {
        music.pause()
        music = new Audio ('/musics/antigas/vagalumes.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "Pollo ft.Ivo Mozart - Vagalumes"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/antigas/vagalumes.png)"
        pauseAndPlay.innerHTML = "pause"
    }
    
    if (musicaTocando == 8) {
        music.pause()
        music = new Audio ('/musics/antigas/cedo.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "NX Zero - Cedo ou Tarde"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/antigas/cedo.jpg)"
        pauseAndPlay.innerHTML = "pause"
    }
    
    if (musicaTocando == 9) {
        music.pause()
        music = new Audio ('/musics/antigas/estupido.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "Celly Campello - Estúpido Cupido"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/antigas/estupido.jpg)"
        pauseAndPlay.innerHTML = "pause"
    }
    
    if (musicaTocando == 10) {
        music.pause()
        music = new Audio ('/musics/antigas/vacilao.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "Perlla - Tremendo Vacilão"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/antigas/vacilao.jpg)"
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
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/antigas/capa-antigas.jpg)"
        document.getElementById("tempoMusica").value = 0
        document.getElementById("nomeMusica").innerHTML = "" 
        pauseAndPlay.innerHTML = "pause"
    }


    if (musicaTocando == 1) {
        music.pause()
        music = new Audio ('/musics/antigas/deixe.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "Acústico 1Kilo - Deixe-me Ir"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/antigas/deixe.jfif)"
        pauseAndPlay.innerHTML = "pause"
    }

    if (musicaTocando == 2) {
        music.pause()
        music = new Audio ('/musics/antigas/exagerado.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "Cazuza - Exagerado"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/antigas/exagerado.jpg)"
        pauseAndPlay.innerHTML = "pause"
    }
 
    if (musicaTocando == 3) {
        music.pause()
        music = new Audio ('/musics/antigas/tempo.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "Legião Urbana - Tempo Perdido "
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/antigas/tempo.jpg)"
        pauseAndPlay.innerHTML = "pause"
    }
    
    if (musicaTocando == 4) {
        music.pause()
        music = new Audio ('/musics/antigas/tiro.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "Elis Regina & Adoniran Barbosa - Tiro ao Álvaro"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/antigas/tiro.png)"
        pauseAndPlay.innerHTML = "pause"
    }
    
    if (musicaTocando == 5) {
        music.pause()
        music = new Audio ('/musics/antigas/cabeca.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "Alcione - Você me Vira a Cabeça "
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/antigas/cabeca.jpeg)"
        pauseAndPlay.innerHTML = "pause"
    }
    
    if (musicaTocando == 6) {
        music.pause()
        music = new Audio ('/musics/antigas/cheia.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "Raça Negra - Cheia de Manias"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/antigas/cheia.jpg)"
        pauseAndPlay.innerHTML = "pause"
    }
    
    if (musicaTocando == 7) {
        music.pause()
        music = new Audio ('/musics/antigas/vagalumes.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "Pollo ft.Ivo Mozart - Vagalumes"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/antigas/vagalumes.jpg)"
        pauseAndPlay.innerHTML = "pause"
    }
    
    if (musicaTocando == 8) {
        music.pause()
        music = new Audio ('/musics/antigas/cedo.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "NX Zero - Cedo ou Tarde"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/antigas/cedo.jpg)"
        pauseAndPlay.innerHTML = "pause"
    }
    
    if (musicaTocando == 9) {
        music.pause()
        music = new Audio ('/musics/antigas/estupido.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "Celly Campello - Estúpido Cupido"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/antigas/estupido.jpg)"
        pauseAndPlay.innerHTML = "pause"
    }
    
    if (musicaTocando == 10) {
        music.pause()
        music = new Audio ('/musics/antigas/vacilao.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "Perlla - Tremendo Vacilão"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/antigas/dois-fugitivos.png)"
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