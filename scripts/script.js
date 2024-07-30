let countdownDate = new Date("Aug 30, 2024 18:00:00").getTime()
let x = setInterval(() => {
    let now = new Date().getTime()
    let distance = countdownDate - now

    let days = Math.floor(distance / (1000 * 60 * 60 * 24))
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((distance % (1000 * 60)) / 1000)

    document.querySelector("#dia").innerHTML = days
    document.querySelector("#horas").innerHTML = hours
    document.querySelector("#minutos").innerHTML = minutes
    document.querySelector("#segundos").innerHTML = seconds
}, 1000)