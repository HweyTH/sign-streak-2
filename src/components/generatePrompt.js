const samples = [
    "I need to write several sentences for testing", 
    "But I don't know what to write", 
    "So here is a couple random sentences for you to type", 
    "Remember, this is just a test, so don't worry about making mistakes",
    "I'm not sure what to write next, so this is a random sentence",
];

export default function generatePrompt() {
    return samples[Math.floor(Math.random()*samples.length)];
}