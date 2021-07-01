const NEXT_EVENT_YEAR = 2022;
const NEXT_EVENT_MONTH = 0;
const NEXT_EVENT_DAY = 25;
const NEXT_EVENT_HOUR = 13;

const NEXT_EVENT_DATE = new Date(NEXT_EVENT_YEAR, NEXT_EVENT_MONTH, NEXT_EVENT_DAY, NEXT_EVENT_HOUR, 0, 0, 0);


function getTimeLeft() {
    let timeLeft = new Date(NEXT_EVENT_DATE - new Date());
    let days = Math.floor(timeLeft / (24 * 60 * 60 * 1000));
    timeLeft %= (24 * 60 * 60 * 1000);

    let hours = Math.floor(timeLeft / (60 * 60 * 1000));
    timeLeft %= (60 * 60 * 1000);

    let minutes = Math.floor(timeLeft / (60 * 1000));
    timeLeft %= (60 * 1000);

    let seconds = Math.floor(timeLeft / 1000);

    // return [days, hours, minutes, seconds];
    return { "days": days, "hours": hours, "minutes": minutes, "seconds": seconds };

}

let x = getTimeLeft();
// console.log(x[0]);
// console.log(x[1]);
// console.log(x[2]);
// console.log(x[3]);

console.log(x.days);
console.log(x.hours);
console.log(x.minutes);
console.log(x.seconds);