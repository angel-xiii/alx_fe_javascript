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
function createAddQuoteForm() {
  const formContainer = document.getElementById("formContainer");
  if (!formContainer) return;

  const form = document.createElement("form");

  const textInput = document.createElement("input");
  textInput.type = "text";
  textInput.id = "newQuoteText";
  textInput.placeholder = "Enter a new quote";
  textInput.required = true;

  const categoryInput = document.createElement("input");
  categoryInput.type = "text";
  categoryInput.id = "newQuoteCategory";
  categoryInput.placeholder = "Enter quote category";
  categoryInput.required = true;

  const addButton = document.createElement("button");
  addButton.type = "button";
  addButton.textContent = "Add Quote";
  addButton.addEventListener("click", addQuote);

  form.appendChild(textInput);
  form.appendChild(categoryInput);
  form.appendChild(addButton);

  formContainer.appendChild(form);
}

window.onload = () => {
    showRandomQuote();

    const newQuoteButton = document.getElementById("newQuoteButton");
    if (newQuoteButton) {
        newQuoteButton.addEventListener("click", showRandomQuote);
    }   
    createAddQuoteForm();
};
