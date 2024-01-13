const showtime = document.querySelector("#showtime")

let [hours,minutes,seconds] = [0,0,0]
let timer = null;

function calcTime() {
    seconds++;
    if(seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes ==60) {
            minutes = 0;
            hours++;
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes: minutes;
    let s = seconds < 10 ? "0" + seconds: seconds;
    showtime.innerHTML = h + ":" + m + ":" + s;
}

function start () {
    if(timer !== null) {
        clearInterval(timer);
    }

    timer = setInterval(calcTime,1000)
}

function stop() {
    clearInterval(timer)
}

function reset() {
    clearInterval(timer)
    hours = 0
    seconds = 0
    minutes = 0
    showtime.innerHTML = "00:00:00";
}


