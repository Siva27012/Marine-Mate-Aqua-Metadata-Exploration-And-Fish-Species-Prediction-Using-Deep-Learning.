let chatbotVisible = false;

function toggleChatbot() {
    const chatbotPopup = document.getElementById('chatbotPopup');
    if (chatbotPopup.style.display === 'block') {
        chatbotPopup.style.display = 'none';
    } else {
        chatbotPopup.style.display = 'block';
    }}
function showChatbot() {
        const chatbotPopup = document.getElementById('chatbotPopup');
        if (window.scrollY > 100) {
            chatbotPopup.classList.add('show-chatbot');
        } else {
            chatbotPopup.classList.remove('show-chatbot');
        }
    }


const userMessage = [
        ["hi", "hey", "hello"],
        ["sure", "yes", "no"],
        ["are you genious", "are you nerd", "are you intelligent"],
        ["i hate you", "i dont like you"],
        ["how are you", "how is life", "how are things", "how are you doing"],
        ["how is corona", "how is covid 19", "how is covid19 situation"],
        ["what are you doing", "what is going on", "what is up"],
        ["how old are you"],
        ["who are you", "are you human", "are you bot", "are you human or bot"],
        ["who created you", "who made you", "who is your creator"],
      
        [
          "your name please",
          "your name",
          "may i know your name",
          "what is your name",
          "what call yourself"
        ],
        ["i love you"],
        ["happy", "good", "fun", "wonderful", "fantastic", "cool", "very good"],
        ["bad", "bored", "tired"],
        ["help me", "tell me story", "tell me joke"],
        ["ah", "ok", "okay", "nice", "welcome"],
        ["thanks", "thank you"],
        ["what should i eat today"],
        ["bro"],
        ["what", "why", "how", "where", "when"],
        ["corona", "covid19", "coronavirus"],
        ["you are funny"],
        ["i dont know"],
        ["boring"],
        ["im tired"],
        // Fish Prediction Section
    ["information about fish prediction", "about fish prediction"],
    ["accuracy","fish prediction accuracy"],
    //endangere species
    ["endangered species","about endangered species"],
    ["how to access endangered species","where is endangered species"],
    ["endangered species list","tamilNadu endangered species"],

    // Maps Section
    ["maps", "maps on your website"],
    ["What types of maps are available on your site?"],

    // Weather Section
    ["guide to weather","weather now"],
    ["weather", "weather on your website"],
    ["weather in your website", "weather section on your website."],
    ["How often is the weather data updated?"],
    //port qes
    ["ports","about ports","about ports section"],
    // General Questions
    ["topics does your website cover", "overview of your website"],
    ["How to access sections"],
    ["sections","section","list of sections"]
        ];
const botReply = [
        ["Hello!", "Hi!", "Hey!", "Hi there!"],
        ["Okay"],
        ["Yes I am! "],
        ["I'm sorry about that. But I like you dude."],
        [
          "Fine... how are you?",
          "Pretty well, how are you?",
          "Fantastic, how are you?"
        ],
        ["Getting better. There?", "Somewhat okay!", "Yeah fine. Better stay home!"],
      
        [
          "Nothing much",
          "About to go to sleep",
          "Can you guess?",
          "I don't know actually"
        ],
        ["I am always young."],
        ["I am just a bot", "I am a bot. What are you?"],
        ["Sivabala","nithish"],
        ["I am nameless", "I don't have a name"],
        ["I love you too", "Me too"],
        ["Have you ever felt bad?", "Glad to hear it"],
        ["Why?", "Why? You shouldn't!", "Try watching TV", "Chat with me."],
        ["What about?", "Once upon a time..."],
        ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
        ["You're welcome"],
        ["Briyani", "Burger", "Sushi", "Pizza"],
        ["Dude!"],
        ["Yes?"],
        ["Please stay home"],
        ["Glad to hear it"],
        ["Say something interesting"],
        ["Sorry for that. Let's chat!"],
        ["Take some rest, Dude!"],
        // Fish Prediction Section Replies
    ["Our fish prediction section provides forecasts based on oceanographic data and predictive models."],
    ["The accuracy of fish prediction is: approxmately 90%"],
    //endangered species
    ["Our website provides a list of endangered species.","Information about endangered species in Tamil Nadu is available in our website"],
    ["first click 'endangered species' on navigation bar , in that page list of endangered species is availabale"],
    ["sorry , i can't able give all the species list, go to endangered species section"],

    // Maps Section Replies
    ["Yes, we offer a variety of ocean maps including major ports, minor ports, sea borders and sea routes "],
    ["You can find maps depicting ocean currents, bathymetry, and marine biodiversity on our website."],

    // Weather Section Replies
    ["first click 'Weather' on navigation bar \n  after the page was opened scroll down there will be some section ,enter cordinates or place name finally get weather report!! "],
    ["we provide information on ocean weather conditions, including temperature, currents, and wind patterns."],
    ["Our website provides information on ocean weather conditions, including temperature, currents, and wind patterns."],
    ["Weather data on our website is updated regularly, usually on a daily basis."],
    //ports
    ["This section gives information about major ports ,minor ports and news of the ports."],
    // General Questions Replies
    ["Our website covers various topics related to oceanography, including fish prediction, maps,ports,enadangered species, important species and weather information."],
    ["You can navigate through different sections of our website using the menu bar or navigation links provided."],
    ["The sections in this website are -Endangered species\n -Important species, -Maps, -Ports, -Fish prediction"]

        ];
      
const alternative = [
        "Same here, dude.",
        "That's cool! Go on...",
        "Dude...",
        "Ask something else...",
        "Hey, I'm listening..."
        ];
      
const synth = window.speechSynthesis;
      
function voiceControl(string) {
        let u = new SpeechSynthesisUtterance(string);
        u.text = string;
        u.lang = "en-aus";
        u.volume = 1;
        u.rate = 1;
        u.pitch = 1;
        synth.speak(u);
        }
      
function sendMessage() {
            const inputField = document.getElementById("input");
            let input = inputField.value.trim();
            input != "" && output(input);
            inputField.value = "";
            }
document.addEventListener("DOMContentLoaded", () => {
        const inputField = document.getElementById("input");
        inputField.addEventListener("keydown", function (e) {
          if (e.code === "Enter") {
            let input = inputField.value.trim();
            input != "" && output(input);
            inputField.value = "";
          }
        });
        });
      
function output(input) {
        let product;
      
        let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
      
        text = text
          .replace(/[\W_]/g, " ")
          .replace(/ a /g, " ")
          .replace(/i feel /g, "")
          .replace(/whats/g, "what is")
          .replace(/please /g, "")
          .replace(/ please/g, "")
          .trim();
      
        let comparedText = compare(userMessage, botReply, text);
      
        product = comparedText
          ? comparedText
          : alternative[Math.floor(Math.random() * alternative.length)];
        addChat(input, product);
        }
      
function compare(triggerArray, replyArray, string) {
        let item;
        for (let x = 0; x < triggerArray.length; x++) {
          for (let y = 0; y < replyArray.length; y++) {
            if (triggerArray[x][y] == string) {
              items = replyArray[x];
              item = items[Math.floor(Math.random() * items.length)];
            }
          }
        }
        //containMessageCheck(string);
        if (item) return item;
        else return containMessageCheck(string);
        }
      
function containMessageCheck(string) {
        let expectedReply = [
          [
            "Good Bye, dude",
            "Bye, See you!",
            "Dude, Bye. Take care of your health in this situation."
          ],
          ["Good Night, dude", "Have a sound sleep", "Sweet dreams"],
          ["Have a pleasant evening!", "Good evening too", "Evening!"],
          ["Good morning, Have a great day!", "Morning, dude!"],
          ["Good Afternoon", "Noon, dude!", "Afternoon, dude!"]
        ];
        let expectedMessage = [
          ["bye", "tc", "take care"],
          ["night", "good night"],
          ["evening", "good evening"],
          ["morning", "good morning"],
          ["noon"]
        ];
        let item;
        for (let x = 0; x < expectedMessage.length; x++) {
          if (expectedMessage[x].includes(string)) {
            items = expectedReply[x];
            item = items[Math.floor(Math.random() * items.length)];
          }
        }
        return item;
        }
function addChat(input, product) {
        const mainDiv = document.getElementById("message-section");
        let userDiv = document.createElement("div");
        userDiv.id = "user";
        userDiv.classList.add("message");
        userDiv.innerHTML = `<span id="user-response">${input}</span>`;
        mainDiv.appendChild(userDiv);
      
        let botDiv = document.createElement("div");
        botDiv.id = "bot";
        botDiv.classList.add("message");
        botDiv.innerHTML = `<span id="bot-response">${product}</span>`;
        mainDiv.appendChild(botDiv);
        var scroll = document.getElementById("message-section");
        scroll.scrollTop = scroll.scrollHeight;
        voiceControl(product);
        }