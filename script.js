document.addEventListener("DOMContentLoaded", function () {
    const quoteButton = document.getElementById("quoteButton");
    const quoteDisplay = document.getElementById("quoteDisplay");

    quoteButton.addEventListener("click", function () {
        getQuote();
    });

    function getQuote() {
        fetch("quotes.json")
            .then(response => response.json())
            .then(data => {
                const randomIndex = Math.floor(Math.random() * data.quotes.length);
                const randomQuote = data.quotes[randomIndex];
                quoteDisplay.textContent = randomQuote;
            })
            .catch(error => {
                console.error("Error fetching quotes:", error);
            });
    }
});
