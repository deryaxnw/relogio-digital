function carregar(){
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    let minutes = data.getMinutes()

    msg.innerHTML = `agora são exatamente ${hora} horas e ${minutes} minutos. `
    if (hora >= 0 && hora < 12) {
        //BOM DIA 
        img.src = './imagens/manha.png' 
         document.body.style.background = '#D4953E'
    } else if (hora >= 12 && hora < 18){
        // boa tarde
        img.src = './imagens/tarde.png'
        document.body.style.background = '#F4B25C'
    } else {
        //Boa noite
        img.src = './imagens/noite.png'
        document.body.style.background = '#001A25'
    }


}

const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const relogio = setInterval(function time(){
    let dateToday = new Date()
    let hr = dateToday.getHours()
    let min = dateToday.getMinutes()
    let s = dateToday.getSeconds()

    if (hr < 10 ) hr = '0' + hr;
    if (min < 10 ) min = '0' + min;
    if (s < 10 ) s = '0' + s;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
})
