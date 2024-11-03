let btn = document.getElementById('start')
let buttonn = document.getElementById('stop')
let x
let value = false
let reset = document.getElementById('reset')


function start() {
    x = setInterval(watch, 10)
    btn.innerText = "Stop"
    value = true
}

function stop_btn() {
    clearInterval(x)
    btn.innerText = "Start"
    value = false
}

btn.addEventListener('click', function (e) {
    if (value) {
        stop_btn()
    }
    else {
        start()
    }
})

reset.addEventListener('click', function (e) {
    let milisecond = 0
    let second = 0
    let minute = 0
    let hour = 0

    document.getElementById('milisec').textContent = "00"
    document.getElementById('sec').textContent = "00"
    document.getElementById('min').textContent = "00"
    document.getElementById('hr').textContent = "00"
})

let save = document.getElementById('save')
let details = {}


save.addEventListener('click', function(e){
    let arr = []
    let n = prompt("Name")

    details[n] = h + " " + m  + " " + s + " " + mm + " "
    
    document.getElementById('list').innerHTML += `${n + details[n]} <br>`
    
})


let milisecond = 0
let second = 0
let minute = 0
let hour = 0


let mm = 0
let s = 0
let m = 0
let h = 0

function check(v) {
    if (v < 10) {
        v = "0" + v
    }
    return v
}

function watch() {
    milisecond++;

    mm = check(milisecond)
    s = check(second)
    m = check(minute)
    h = check(hour)

    if (milisecond === 99) {
        milisecond = 0
        second++;
    }

    else if (second == 60) {
        second = 0
        minute++;
    }

    else if (minute == 60) {
        minute = 0
        hour++;
    }

    document.getElementById('milisec').textContent = mm
    document.getElementById('sec').textContent = s
    document.getElementById('min').textContent = m
    document.getElementById('hr').textContent = h
}
