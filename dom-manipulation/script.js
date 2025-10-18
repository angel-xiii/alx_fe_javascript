let quotes = [
    { text: "The best way to get started is to quit talking and begin doing.", category: "Motivation" },
    { text: "It's not whether you get knocked down, it's whether you get up.", category: "Resilience" },
    { text: "Don't let yesterday take up too much of today.", category: "Inspiration" }
];
function showRandomQuote() { 
    const randomIndex = Math.floor(Math.random() * quotes.length); 
    const { text, category } = quotes[randomIndex];

    const quoteContainer = document.getElementById("quoteContainer");
    quoteContainer.innerHTML = `<p>"${text}"</p>
    <span>- ${category}</span>`;
}

window.onload = () => {
    showRandomQuote();

    const newQuoteButton = document.getElementById("newQuoteButton");
    if (newQuoteButton) {
        newQuoteButton.addEventListener("click", showRandomQuote);
    }   
};
