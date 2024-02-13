// const output = document.querySelector("#output");
// const button = document.querySelector("#set-alarm");

// function setAlarm() {
//   setTimeout(() => {
//     output.textContent = "Wake up!";
//   }, 1000);
// }

// button.addEventListener("click", setAlarm);

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('foo');
//     }, 300);
//   });
  
//   promise1.then((value) => {
//     console.log(value);
//     // Expected output: "foo"
//   });
  
//   console.log(promise1);
//   // Expected output: [object Promise]
//   this one is irrelevant, but I wanted to review before going to the alarm with a promise.

// below is the alarm with it implemented 
// function alarm(person, delay) {
//     return new Promise((resolve, reject) => {
//       if (delay < 0) {
//         throw new Error("Alarm delay must not be negative");
//       }
//       setTimeout(() => {
//         resolve(`Wake up, ${person}!`);
//       }, delay);
//     });
//   }
//   in there we checked too see if delay was negative and threw an error if it was. The alarm will go off after the delay and awaken person

// const name = document.querySelector("#name");
// const delay = document.querySelector("#delay");
// const button = document.querySelector("#set-alarm");
// const output = document.querySelector("#output");

// function alarm(person, delay) {
//   return new Promise((resolve, reject) => {
//     if (delay < 0) {
//       throw new Error("Alarm delay must not be negative");
//     }
//     setTimeout(() => {
//       resolve(`Wake up, ${person}!`);
//     }, delay);
//   });
// }

// button.addEventListener("click", () => {
//   alarm(name.value, delay.value)
//     .then((message) => (output.textContent = message))
//     .catch((error) => (output.textContent = `Couldn't set alarm: ${error}`));
// });


// const name = document.querySelector("#name");
// const delay = document.querySelector("#delay");
// const button = document.querySelector("#set-alarm");
// const output = document.querySelector("#output");

// function alarm(person, delay) {
//   return new Promise((resolve, reject) => {
//     if (delay < 0) {
//       throw new Error("Alarm delay must not be negative");
//     }
//     setTimeout(() => {
//       resolve(`Wake up, ${person}!`);
//     }, delay);
//   });
// }

// button.addEventListener("click", async () => {
//   try {
//     const message = await alarm(name.value, delay.value);
//     output.textContent = message;
//   } catch (error) {
//     output.textContent = `Couldn't set alarm: ${error}`;
//   }
// });

