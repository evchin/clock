

function startTime() {
    var time = new Date()
    var year = time.getFullYear()
    var day = time.getDate()

    var secRatio = time.getSeconds() / 60
    var minRatio = (secRatio + time.getMinutes()) / 60
    var hrRatio = (minRatio + time.getHours()) / 12

    const hourHand = document.querySelector('[data-hour-hand]')
    const minuteHand = document.querySelector('[data-minute-hand]')
    const secondHand = document.querySelector('[data-second-hand]')

    setRotation(secondHand, secRatio)
    setRotation(minuteHand, minRatio)
    setRotation(hourHand, hrRatio)

    var t = setTimeout(startTime, 100);
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}