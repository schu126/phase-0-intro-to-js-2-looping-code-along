// Function to create thank you cards
function writeCards(names, eventName) {
  // Create an empty array to hold the messages
  let thankYouMessages = [];

  // Iterate through the input array
  for (let i = 0; i < names.length; i++) {
    // Build the 'thank you' message for each name using string interpolation
    let message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;

    // Add the message to the new array
    thankYouMessages.push(message);
  }

  // Return the new array of thank you messages
  return thankYouMessages;
}

// Example usage:
const namesArray = ['Alice', 'Bob', 'Charlie'];
const event = 'Birthday';

const thankYouCards = writeCards(namesArray, event);
console.log(thankYouCards);

function countDown(startingNumber) {
  // Check if the input is a positive integer
  if (typeof startingNumber !== 'number' || startingNumber < 0 || !Number.isInteger(startingNumber)) {
    console.log("Please provide a positive integer as input.");
    return;
  }

  // Use a while loop to count down from the startingNumber to 0
  while (startingNumber >= 0) {
    console.log(startingNumber);
    startingNumber--;
  }
}

// Example: countDown(10);
