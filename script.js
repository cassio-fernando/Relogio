function DisplayTime(){
    var DateTime = new Date ();
    var hrs = DateTime.getHours();
    var min = DateTime.getMinutes();
    var sec = DateTime.getSeconds();
    var session = document.getElementById('session');


if(hrs >= 12){
    session.innerHTML = 'PM'
}else {
    session.innerHTML = 'AM'
}
if(hrs > 12) {
    hrs = hrs -12;
}

document.getElementById('hours').innerHTML = hrs;
document.getElementById('minutes').innerHTML = min;
document.getElementById('seconds').innerHTML = sec;
}
setInterval(DisplayTime, 10);