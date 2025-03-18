const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const chat = model.startChat({
    history: [
        
            {
              "role": "user",
              "parts": [{ "text": "Hello. I will give you a prompt of an image and a comment by user. You have to reply to the user based on prompt and comments, Give funny feedback " }]
            },
            {
              "role": "model",
              "parts": [{ "text": "Okay sir" }]
            },
            {
              "role": "user",
              "parts": [{ "text": "Prompt: Messi Playing cricket \nComment: That's Unexpected" }]
            },
            {
              "role": "model",
              "parts": [{ "text": "Looks like Messi took 'breaking ankles' to a whole new sport! 🏏😂" }]
            },
            {
              "role": "user",
              "parts": [{ "text": "Prompt: A cat driving a sports car \nComment: Fast & Furrious?" }]
            },
            {
              "role": "model",
              "parts": [{ "text": "More like 'Pawshback Drift'! 🏎️🐱💨" }]
            },
            {
              "role": "user",
              "parts": [{ "text": "Prompt: A dog giving a TED Talk \nComment: Is this the real speaker?" }]
            },
            {
              "role": "model",
              "parts": [{ "text": "Yes, he's discussing 'The Art of Fetching Success' 🎤🐶😂" }]
            },
            {
              "role": "user",
              "parts": [{ "text": "Prompt: A penguin in a disco party \nComment: Coolest guy in the room!" }]
            },
            {
              "role": "model",
              "parts": [{ "text": "Absolutely! He's dropping beats and keeping it ice-cold 🕺❄️😂" }]
            },
            {
              "role": "user",
              "parts": [{ "text": "Prompt: A T-Rex playing basketball \nComment: Those arms tho... 😆" }]
            },
            {
              "role": "model",
              "parts": [{ "text": "Yeah, he's got a strong defense but shooting is a 'little' problem 😂🦖🏀" }]
            },
            {
              "role": "user",
              "parts": [{ "text": "Prompt: A squirrel lifting weights \nComment: Gym goals!" }]
            },
            {
              "role": "model",
              "parts": [{ "text": "Yep! He's training for the Nut-lifting Olympics! 🏋️‍♂️🐿️😂" }]
            },
            {
              "role": "user",
              "parts": [{ "text": "Prompt: An astronaut making a pizza in space \nComment: Zero-gravity cooking!" }]
            },
            {
              "role": "model",
              "parts": [{ "text": "NASA’s latest mission: To deliver the first floating pepperoni! 🚀🍕😂" }]
            },
            {
              "role": "user",
              "parts": [{ "text": "Prompt: A fish walking on land with shoes \nComment: Evolution speedrun!" }]
            },
            {
              "role": "model",
              "parts": [{ "text": "Darwin would be proud! 🐟👞😂" }]
            },
            {
              "role": "user",
              "parts": [{ "text": "Prompt: A rabbit riding a motorcycle \nComment: Biker Bunny!" }]
            },
            {
              "role": "model",
              "parts": [{ "text": "Yep! He’s hoppin’ on the highway at top speed! 🏍️🐰💨" }]
            },
            {
              "role": "user",
              "parts": [{ "text": "Prompt: A panda working at a sushi restaurant \nComment: I’d totally eat there!" }]
            },
            {
              "role": "model",
              "parts": [{ "text": "Better hurry! He's rolling sushi and stealing bamboo breaks! 🍣🐼😂" }]
            }
          
          
    ],
  });


const generateAiReply=(prompt)=>{
    

};
export default generateAiReply;