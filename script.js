function loading() {

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('photo')
    var date = new Date()
    var hour = date.getHours()
    msg.innerHTML= `It's ${hour} hours now!`

    if (hour >= 0 && hour < 12){
        img.src = 'imgs/photomorning.png'
        document.body.style.background = '#BED4DF'
    } 
    else if (hour >= 12 && hour < 18){
        img.src = 'imgs/photoafternoon.png'
        document.body.style.background = '#BB2800'
    } 
    else {
        img.src= 'imgs/photonight.png'
        document.body.style.background = '#09171A'
    }

}

