// Code your solutions in this file

function countDown(number) {
    for (let x = number; x >= 0; x--) {
      console.log(x);
    }
  }

  countDown(10);

  function writeCards(names, event) {
    let messages = [];
    for (let x = 0; x < names.length; x++) {
      messages.push(`Thank you, ${names[x]}, for the wonderful ${event} gift!`);
    }
    return messages;
  }

  let names = ['Eric', 'Terrence', 'Steve'];
let event = 'birthday';

let messages = writeCards(names, event);

console.log(messages);

  