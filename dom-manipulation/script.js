let quotes = [
    { text: "The best way to get started is to quit talking and begin doing.", category: "Motivation" },
    { text: "It's not whether you get knocked down, it's whether you get up.", category: "Resilience" },
    { text: "Don't let yesterday take up too much of today.", category: "Inspiration" }
];
function loadQuotesFromLocalStorage() {
    const storedQuotes = localStorage.getItem("quotes");  
    if (storedQuotes) {
        quotes = JSON.parse(storedQuotes);
    }   
}

function saveQuotesToLocalStorage() {
    localStorage.setItem("quotes", JSON.stringify(quotes));
}

function showRandomQuote() { 
    const randomIndex = Math.floor(Math.random() * quotes.length); 
    const { text, category } = quotes[randomIndex];

    const quoteContainer = document.getElementById("quoteContainer");
    quoteContainer.innerHTML = `<p>"${text}"</p>
    <span>- ${category}</span>`;
}

function populateCategories() {
  const categorySelect = document.getElementById("categoryFilter");
  if (!categorySelect) return;
  
function addQuote() {
  const textInput = document.getElementById("newQuoteText");
  const categoryInput = document.getElementById("newQuoteCategory");

  const newText = textInput.value.trim();
  const newCategory = categoryInput.value.trim();

  if (!newText || !newCategory) {
    alert("Please enter both a quote and a category!");
    return;
  }

  const newQuote = { text: newText, category: newCategory };
  quotes.push(newQuote);
  saveQuotesToLocalStorage();
  notifyUser("New quote added successfully!");
  textInput.value = "";
  categoryInput.value = "";

  postQuoteToServer(newQuote);
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
async function fetchQuotesFromServer() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
    const serverData = await response.json();

    const serverQuotes = serverData.map(item => ({
      text: item.title,
      category: "Server"
    }));
    resolveConflicts(serverQuotes);

    notifyUser("✅ Quotes synced with server!");
  } catch (error) {
    console.error("❌ Error fetching quotes from server:", error);
    notifyUser("⚠️ Failed to sync with server.");
  }
}

    async function postQuoteToServer(quote) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(quote)
    });
 
function syncQuotes() {
  fetchQuotesFromServer();
  setInterval(fetchQuotesFromServer, 10000);
}
window.onload = () => {
  loadQuotesFromLocalStorage();
  createAddQuoteForm();
  showRandomQuote();
  syncQuotes();

    const newQuoteButton = document.getElementById("newQuoteButton");
    if (newQuoteButton) {
        newQuoteButton.addEventListener("click", showRandomQuote);
    }   
    createAddQuoteForm();
};
