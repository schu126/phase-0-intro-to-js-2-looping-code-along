function writeCards (names, eventName) {
  let thankYouMessage = [];
  
  for (let i = 0; i < names.length; i++) {
    let message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
    
    thankYouMessage.push(message);
  }
  
  return thankYouMessage;
}

function countDown (number) {
    while (number > 0) {
      console.log(number);
      number -=1;
    }
    console.log(number);
}