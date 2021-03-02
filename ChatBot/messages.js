const profile = "https://github.com/osamaKhan99"
const prompts = [
    ["hi", "hey", "hello", "good morning", "good afternoon"],
    ["Assalam o Alaikum", "Salam", "Asalamoalaikum"],
    ["how are you","how are you javabot", "how is life", "how are things"],
    ["what are you doing", "what is going on", "what is up"],
    ["how old are you"],
    ["who are you", "are you human", "are you bot", "are you human or bot"],
    ["who created you", "who made you"],
    [
      "your name please",
      "your name",
      "may i know your name",
      "what is your name",
      "what call yourself"
    ],
    ["i love you"],
    ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
    ["bad", "bored", "tired"],
    ["help me", "tell me story", "tell me joke"],
    ["ah","ahh", "yes", "ok", "okay", "nice"],
    ["bye", "good bye", "goodbye", "see you later"],
    ["what should i eat today"],
    ["bro"],
    ["what", "why", "how", "where", "when"],
    ["no","not sure","maybe","no thanks"],
    [""],
    ["haha","ha","lol","hehe","funny","joke"],
    ["thanks","thank you", "you saved my day"]
  ]
  
  // Possible responses, in corresponding order
  
  const replies = [
    ["Hello!", "Hi!", "Hey!", "Hi there!","Howdy"],
    ["Walaekum Assalam"]
    [
      "Fine... how are you?",
      "Pretty well, how are you?",
      "Fantastic, how are you?"
    ],
    [
      "Nothing much",
      "About to go to sleep",
      "Can you guess?",
      "I don't know actually"
    ],
    ["I am infinite"],
    ["I am just a bot", "I am a bot. What are you?"],
    [`Osama Waseem made me ${profile}`],
    ["JavaBot"],
    ["I love you too", "Me too"],
    ["Have you ever felt bad?", "Glad to hear it"],
    ["Why?", "Why? You shouldn't!", "Try watching TV",],
    ["What about?", "Once upon a time Mark, volunteered to help Cherie, a young runner at a local Special Olympics. Cherie was happy and enthusiastic. Mark encouraged her, kept her calm, and helped her know when it was time to line up for her race. When the starting pistol sounded, she took off like a lightning bolt, leaving her fellow racers behind. As she neared the finish line, she stopped, turned around and motioned for the other runners to hurry. She waited for them so they could all cross the finish line together"],
    ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
    ["Bye", "Goodbye", "See you later"],
    ["Pizza", "Biryani", "Whatever you want"],
    ["Bro!"],
    ["Great question"],
    ["That's ok","I understand","What do you want to talk about?"],
    ["Please say something :("],
    ["Haha!","Good one!"],
    ["pleasure is all mine", "you are welcome", "no problem", "anytime"]
  ]
  
  // Random for any other user input
  
  const alternative = [
    "Same",
    "Go on...",
    "Bro...",
    "Try again",
    "I'm listening...",
    "I don't understand :/"
  ]
  
  
  const coronavirus = ["Please stay home", "Wear a mask", "Fortunately, I don't have COVID", "These are uncertain times", "Follow SOPs in Public Area"]