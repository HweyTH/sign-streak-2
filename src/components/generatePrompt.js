const samples = [
    "I need to write several sentences for testing", 
    "But I don't know what to write", 
    "So here is a couple random sentences for you to type", 
    "Remember, this is just a test, so don't worry about making mistakes",
    "I'm not sure what to write next, so this is a random sentence",
    "As the sun set behind the mountains, the sky was painted with hues of orange and pink, casting a warm glow over the quiet town. People hurried home, eager to share stories of their day with loved ones, while the gentle breeze carried the scent of blooming flowers through the air.",
    "Technology has advanced rapidly over the past decade, transforming the way we communicate, work, and live. From smartphones to artificial intelligence, these innovations have created new opportunities and challenges, shaping the future in ways we are only beginning to understand.",
    "On a rainy afternoon, there is nothing better than curling up with a good book and a cup of tea. The sound of raindrops tapping against the window creates a soothing rhythm, making it easy to lose yourself in the pages of an exciting story.",
    "Learning to type quickly and accurately takes time and practice, but the effort is well worth it. With each session, your fingers become more familiar with the keyboard, and your confidence grows as you watch your progress improve."
];

export default function generatePrompt() {
    return samples[Math.floor(Math.random()*samples.length)];
}