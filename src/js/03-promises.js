
const delayInput = document.querySelector(".delay");
const stepInput = document.querySelector(".step");
const amountInput = document.querySelector(".amount");
const form = document.querySelector(".form");


function createPromise(position, delay) {

  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }

  });
}


form.addEventListener("submit", evt => {
  evt.preventDefault();

  let delay = Number(delayInput.value);
  let timerId = null;
  let position = 0;
  
  timerId = setInterval(() => {
    delay += Number(stepInput.value);
    position += 1;

    if(position === 1){
      delay = Number(delayInput.value);
    }

    if(Number(amountInput.value) === position){
      clearInterval(timerId);
    }
    
    if(Number(amountInput.value) > 0){
      createPromise(position, delay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    }
    
  }, stepInput.value);

})

