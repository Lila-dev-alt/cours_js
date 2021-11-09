let x = setInterval(function() {
    let digitDays = document.getElementById('days');
    let digitHours = document.getElementById('hours');
    let digitMinutes = document.getElementById('minutes');
    let digitSeconds = document.getElementById('seconds');
    let digitMiliseconds = document.getElementById('millis');
    // let dateOfFutur = new Date('2021-12-25');
    let dateOfFutur = new Date('2021-12-25');
    let today = new Date();
    //conversions in miliseconds 
    const seconds = 1000;
    const minutes = 60 * seconds;
    const hours = 60 * minutes;
    const days = 24 * hours;



    let time = dateOfFutur - today;

    if (time < 0) {
        const div = document.createElement('div');
        document.body.append(div);
        div.textContent = "Merry Christmas 🎅";
        div.classList.add("message");
        div.style.opacity = "1";
        digitDays.textContent = 0;
        digitHours.textContent = 0;
        digitMinutes.textContent = 0;
        digitSeconds.textContent = 0;
        digitMiliseconds.textContent = 0;
        clearInterval(x);
    } else {

        let resultDays = Math.floor(time / days);
        let daysInMs = time - (resultDays * days);

        let resultHours = Math.floor(daysInMs / hours);
        let hoursInMs = daysInMs - (resultHours * hours);

        let resultMinutes = Math.floor(hoursInMs / minutes);
        let minutesInMs = hoursInMs - (resultMinutes * minutes);

        let resultSeconds = Math.floor(minutesInMs / seconds);
        let remainMs = minutesInMs - (resultSeconds * seconds);


        digitDays.textContent = resultDays;
        digitHours.textContent = resultHours;
        digitMinutes.textContent = resultMinutes;
        digitSeconds.textContent = resultSeconds;
        digitMiliseconds.textContent = remainMs;

    }

}, 1);