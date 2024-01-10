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
    document.getElementById("imgMusica").style.backgroundImage = "url(/capas/top10/capatop10.jpg)"
}

function next () {
    musicaTocando = (musicaTocando + 1)
    document.getElementById("tempoMusica").value = 0
    intervalo = window.setInterval (a1, 0)

    if (musicaTocando == 1) {
        music = new Audio ('/musics/top10/top1.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "1) The Weeknd – Blinding Lights"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/top10/top1.png)"
        pauseAndPlay.innerHTML = "pause"
    }

    if (musicaTocando == 2) {
        music.pause()
        music = new Audio ('/musics/top10/top2.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "2) Ed Sheeran – Shape of you"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/top10/top2.png)"
        pauseAndPlay.innerHTML = "pause"
    }
 
    if (musicaTocando == 3) {
        music.pause()
        music = new Audio ('/musics/top10/top3.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "3) Lewis Capaldi – Someone you Loved"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/top10/top3.png)"
        pauseAndPlay.innerHTML = "pause"
    }
    
    if (musicaTocando == 4) {
        music.pause()
        music = new Audio ('/musics/top10/top4.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "4) Post Malone & Swae Lee – Sunflower"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/top10/top4.jpg)"
        pauseAndPlay.innerHTML = "pause"
    }
    
    if (musicaTocando == 5) {
        music.pause()
        music = new Audio ('/musics/top10/top5.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "5) Bruno Mars - The Lazy Song"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/top10/top5.jpg)"
        pauseAndPlay.innerHTML = "pause"
    }
    
    if (musicaTocando == 6) {
        music.pause()
        music = new Audio ('/musics/top10/top6.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "6) Drake feat. Wizkid, Kyla – One Dance"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/top10/top6.jpeg)"
        pauseAndPlay.innerHTML = "pause"
    }
    
    if (musicaTocando == 7) {
        music.pause()
        music = new Audio ('/musics/top10/top7.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "7) Post Malone feat. 21 savage – Rockstar"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/top10/top7.jpg)"
        pauseAndPlay.innerHTML = "pause"
    }
    
    if (musicaTocando == 8) {
        music.pause()
        music = new Audio ('/musics/top10/top8.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "8) The Kid Laroi & Justin Bieber – Stay"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/top10/top8.jpg)"
        pauseAndPlay.innerHTML = "pause"
    }
    
    if (musicaTocando == 9) {
        music.pause()
        music = new Audio ('/musics/top10/top9.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "9) The Weeknd feat. Daft Punk – Starboy"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/top10/top9.jpg)"
        pauseAndPlay.innerHTML = "pause"
    }
    
    if (musicaTocando == 10) {
        music.pause()
        music = new Audio ('/musics/top10/top10.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "10) As It Was – Harry Styles"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/top10/top10.png)"
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
    var intervalo = window.setInterval (a1, 0)

    if (musicaTocando < 0) {
        musicaTocando = 0
    }

    if (musicaTocando == 0) {
        music.pause()
        music = 0
        clearInterval(intervalo)
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/top10/capatop10.jpg)"
        document.getElementById("tempoMusica").value = 0
        document.getElementById("nomeMusica").innerHTML = "" 
        pauseAndPlay.innerHTML = "pause"
    }

    if (musicaTocando == 1) {
        music.pause()
        music = new Audio ('/musics/top10/top1.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "1) The Weeknd – Blinding Lights"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/top10/top1.png)"
        pauseAndPlay.innerHTML = "pause"
    }

    if (musicaTocando == 2) {
        music.pause()
        music = new Audio ('/musics/top10/top2.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "2) Ed Sheeran – Shape of you"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/top10/top2.png)"
        pauseAndPlay.innerHTML = "pause"
    }
 
    if (musicaTocando == 3) {
        music.pause()
        music = new Audio ('/musics/top10/top3.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "3) Lewis Capaldi – Someone you Loved"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/top10/top3.png)"
        pauseAndPlay.innerHTML = "pause"
    }
    
    if (musicaTocando == 4) {
        music.pause()
        music = new Audio ('/musics/top10/top4.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "4) Post Malone & Swae Lee – Sunflower"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/top10/top4.jpg)"
        pauseAndPlay.innerHTML = "pause"
    }
    
    if (musicaTocando == 5) {
        music.pause()
        music = new Audio ('/musics/top10/top5.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "5) Bruno Mars - The Lazy Song"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/top10/top5.jpg)"
        pauseAndPlay.innerHTML = "pause"
    }
    
    if (musicaTocando == 6) {
        music.pause()
        music = new Audio ('/musics/top10/top6.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "6) Drake feat. Wizkid, Kyla – One Dance"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/top10/top6.jpeg)"
        pauseAndPlay.innerHTML = "pause"
    }
    
    if (musicaTocando == 7) {
        music.pause()
        music = new Audio ('/musics/top10/top7.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "7) Post Malone feat. 21 savage – Rockstar"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/top10/top7.jpg)"
        pauseAndPlay.innerHTML = "pause"
    }
    
    if (musicaTocando == 8) {
        music.pause()
        music = new Audio ('/musics/top10/top8.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "8) The Kid Laroi & Justin Bieber – Stay"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/top10/top8.jpg)"
        pauseAndPlay.innerHTML = "pause"
    }
    
    if (musicaTocando == 9) {
        music.pause()
        music = new Audio ('/musics/top10/top9.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "9) The Weeknd feat. Daft Punk – Starboy"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/top10/top9.jpg)"
        pauseAndPlay.innerHTML = "pause"
    }
    
    if (musicaTocando == 10) {
        music.pause()
        music = new Audio ('/musics/top10/top10.mp3')
        music.play()
        document.getElementById("nomeMusica").innerHTML = "10) As It Was – Harry Styles"
        document.getElementById("imgMusica").style.backgroundImage = "url(/capas/top10/top10.png)"
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