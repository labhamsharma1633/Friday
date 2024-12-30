//  speech recognition setup

// Get the "Start" and "Stop" buttons from the page
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const speakBtn=document.querySelector("#speak");  // Find the button with id="speak"








const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// window.SpeechRecognition is the standard name for the speech recognition feature (like the official spell).
// window.webkitSpeechRecognition is a different version, mostly used in older browsers (like a backup spell).



const recognition=new SpeechRecognition();

// const recognition = new SpeechRecognition(); is like giving your web page the ability to hear you! Everything else makes it listen, react, and show you what it heard.

recognition.onstart=function(){
    
    console.log("vractive");
};
// When the microphone starts listening, it prints "VR Active" to the console.

recognition.onend=function(event){
    
    console.log("vr deactive");      //When the microphone stops listening, it prints "VR Deactive" to the console.
};

//recognition.continuous=true;     // Keep listening for speech even after pauses

startBtn.addEventListener("click",()=>{
    recognition.start();    // Start listening when the "Start" button is clicked
});
stopBtn.addEventListener("click",()=>{
    recognition.stop();     
    // Stop listening when the "Stop" button is clicked
    
});

// Function to make the browser speak the given message out loud


function readOut(message){  // Create a new SpeechSynthesisUtterance object to hold the speech details
    const speech=new SpeechSynthesisUtterance();
    // how we get different voices;
    const allVoices=speechSynthesis.getVoices();

    speech.text=message; // Set the message (text) that will be spoken
    speech.voice=allVoices[30];    // Sets the speech synthesis voice to the 31st voice in the 'allVoices' array.
    speech.volume=1;     // Set the volume of the speech (1 is the loudest)
    
    window.speechSynthesis.speak(speech);   // Use the browser's speech synthesis to speak the message
    console.log("speaking out");      // Log to the console that the speech is happening

    
}

speakBtn.addEventListener("click",()=>{
    readOut("hello my dear entusiastic devs on our planet");

// This code sets up an event listener on the 'speakBtn' button. 
// When the button is clicked, it triggers the 'readOut' function, 
// passing a specific string as an argument to be processed, 
// which could involve reading the string aloud or another action defined in the 'readOut' function.

})


