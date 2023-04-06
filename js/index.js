let countDownDate = new Date("Apr 19, 2023 14:45:60").getTime();

let loop = setInterval(function () {
  let now = new Date().getTime();
  let timeLeft = countDownDate - now;

  let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = `<span><h2>${days}</h2> <p>Days</p></span>`
  document.getElementById("hours").innerHTML = `<span><h2>${hours}</h2> <p>Hours</p></span>`
  document.getElementById("minutes").innerHTML =`<span><h2>${minutes}</h2> <p>Minutes</p></span>`
  document.getElementById("seconds").innerHTML = `<span><h2>${seconds}</h2> <p>Seconds</p></span>`
}, 1000);
