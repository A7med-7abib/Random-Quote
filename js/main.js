let lastIndex = -1;

function quotegenerator() {
    var quotes = [
        {
            quote: "“It is better to be hated for what you are than to be loved for what you are not.”",
            person: "― Andre Gide, Autumn Leaves"
        },
        {
            quote: "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
            person: "― Ralph Waldo Emerson"
        },
        {
            quote: "“Without music, life would be a mistake.”",
            person: "― Friedrich Nietzsche, Twilight of the Idols"
        },
        {
            quote: "“We accept the love we think we deserve.”",
            person: "“We accept the love we think we deserve.”"
        },
       
        {
            quote: "“If you tell the truth, you don't have to remember anything.”",
            person: "― Mark Twain"
        },
        {
            quote: "“You only live once, but if you do it right, once is enough.”",
            person: "― Mae West"
        },
    ];

    let randomIndex;


    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastIndex);

    lastIndex = randomIndex;

    var randomQuote = quotes[randomIndex].quote;
    var randomPerson = quotes[randomIndex].person;

    document.getElementById("quoteoutput").innerText = randomQuote;
    document.getElementById("name").innerText = randomPerson;
}