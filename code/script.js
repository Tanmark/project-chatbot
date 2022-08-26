// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const nameForm = document.getElementById('name-form')
const nameInput = document.getElementById('name-input')
const inputWrapper = document.getElementById('input-wrapper')
const submit = document.getElementsByClassName('send-btn')


// If you need any global variables that you can use across different functions, declare them here:


// Declare your functions after this comment

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
}

// Starts here
const greeting = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hello and welcome to your personal Pep bot! What's your name? 🌞", 'bot');
  // Just to check it out, change 'bot' to 'user' here 👆
}


//FRÅN TECHNIGOS SIDA // Store the value in a variable so we can access it after we 
	// clear it from the input
const handleNameInput = (event) => {
  event.preventDefault()
  let userName = nameInput.value
  showMessage(userName, 'user')
  //nameInput.value = ''
  setTimeout(() => howAreYou(userName), 1000);
}

//Eventlistener
/*nameForm.addEventListener('submit', handleNameInput);*/

//Question 2
const howAreYou = () => {
  showMessage(`Nice to meet you, ${nameInput.value}! How are you feeling today?`, 'bot')
  inputWrapper.innerHTML=`
  <button id="happyBtn">Happy! 😀</button>
  <button id="sadBtn">Sad 😢</button>
  <button id="hungryBtn">Hungry 🍔</button>`
}

    document.getElementById('happyBtn').addEventListener('click', () => {
     showMessage('happy', 'user')
     inputWrapper.innerHTML = ''
     setTimeout(() => askForHelp('happy'), 1000)
    })
  
    document.getElementById('sadBtn').addEventListener('click', () => {
     showMessage('sad', 'user')
     inputWrapper.innerHTML = ''
     setTimeout(() => askForHelp('sad'), 1000)
    })

    document.getElementById('hungryBtn').addEventListener('click', () => {
     showMessage('hungry', 'user')
     inputWrapper.innerHTML = ''
     setTimeout(() => askForHelp('hungry'), 1000)
    })
    

    //Question 3 do we need to keep "information" can we change it?
  const askForHelp = (information) => {
      showMessage(`Ok`, 'bot')
  
  if (information === "happy") {
    showMessage(`Text happy`, 'bot')
    setTimeout(() => askForMore('zinc'), 2000)
    

  } else if (information === "sad") {
    showMessage(`Text sad`, 'bot')
    setTimeout(() => askForMore('protein'), 2000)

  } else {
    showMessage(`Text hungry`, 'bot')
    setTimeout(() => askForMore('vitaminD'), 2000)
  }
}











/*In the starter code, the first event is asking for the user's name. 
The starter code asks the first question from the bot, and we've got the 
input field in the page ready for the user to type their name. 
So the first task is to listen to the form being submitted, 
(by clicking send or hitting the enter key), and to react to it.

**We want to:**

1. Listen for the form submit event
2. When the form is submitted, post the value from the text input as a message from the user
3. Progress the app to the next question.*/ 





// Set up your eventlisteners here

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000);
nameForm.addEventListener('submit', handleNameInput);



/*Hej vad heter du
Hur mår du idag?
 - Glad, Ledsen, Hungrig

*Glad
  - Vad roligt! Visste du att... (fakta om glädje)
  - Vill du ha ett till fakta?
 
*Ledsen
  - Länk till klipp på YouTube
  - Länk till annat klipp

*Hungrig
 - Oj! Här är din närmsta matbutik...
 - Väldigt hungrig? Här är närmsta restaurang...


Tack för ditt besök - hoppas vi kunde hjälpa till! Välommen åter.
 
*/