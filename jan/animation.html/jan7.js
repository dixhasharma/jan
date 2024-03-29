
// // event loop---------->
// console.log("begins")
// setTimeout(()=>{
//   console.log("begins 2")
//   Promise.resolve().then(()=>{
//     console.log("promise 1")
//   })
// },0)

// new Promise(function(resolve,reject){
//   console.log("promise 2")
//   setTimeout(()=>{
//     console.log("setTimeout 2")
//     resolve("resolve 1")
//   },0)
// }).then(()=>{
//   console.log("dot then 1")
//   setTimeout(()=>{
//     console.log("setTimeout 3")
//   },0)
// })

let countdownInterval;

function parseDuration() {
  const days = parseInt(document.getElementById('days').value, 10) || 0;
  const hours = parseInt(document.getElementById('hours').value, 10) || 0;
  const minutes = parseInt(document.getElementById('minutes').value, 10) || 0;
  const seconds = parseInt(document.getElementById('seconds').value, 10) || 0;

  return (days * 24 * 60 * 60) + (hours * 60 * 60) + (minutes * 60) + seconds;
}

function updateCountdownDisplay(timer) {
  const days = Math.floor(timer / (60 * 60 * 24));
  const hours = Math.floor((timer % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((timer % (60 * 60)) / 60);
  const seconds = timer % 60;

  document.getElementById('countdown').innerHTML =`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

function startCountdown() {
  const seconds = parseDuration();

  let timer = seconds;

  function updateCountdown() {
    updateCountdownDisplay(timer);

    if (timer === 0) {
      clearInterval(countdownInterval);
      alert('Countdown complete!');
    } else {
      timer--;
    }
  }

  updateCountdown(); // Initial display

  countdownInterval = setInterval(updateCountdown, 1000); // Update every second
}

function stopCountdown() {
  clearInterval(countdownInterval);
  alert('Countdown stopped!');
  
  // Reset the countdown display and clear the user input
  document.getElementById('countdown').innerHTML = '';
  document.getElementById('days').value = '';
  document.getElementById('hours').value = '';
  document.getElementById('minutes').value = '';
  document.getElementById('seconds').value = '';
}