const quotes = [
    {
        quote: "I'm no liar, but Sometimes the truth don't sound like the truth.",
        author: "-Good News-",
    },
    {
        quote: "My regrets look just like texts I shouldn't send and I got neighbors, they're more like strangers",
        author: "-Come Back to Earth-",
    },
    {
        quote: "Some people say they want to live forever. That's way too long, I'll just get through today.",
        author: "-Complicated-",
    },
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "-Swimming-",
    },
    {
        quote: "Fore I start to think about the future First, can I please get through a day?",
        author: "-Complicated-",
    },
    {
        quote: "Instead of always tryin' to figure everything out and all I do is say sorry. Half the time I don't even know what I'm sayin' it about",
        author: "-Good News-",
    },
    {
        quote: "Everybody's gotta live and everybody's gonna die. Everybody just wanna have a good, good time.",
        author: "-EveryBody-",
    },
    {
        quote: "Hate love, heartbreak will have you bankrupt. Too many days in a daze, better wake up.",
        author: "-Woods-",
    },
    {
        quote: "And all I ever needed was somebody with some reason who can keep me sane.",
        author: "-Hand me Downs-",
    },
    {
        quote: "You remind me. Shit, I need to stay in line. You damn well are a great design. You, despite bein' an only child, Say you need more of a family 'round. Let's turn these genes into hand me downs.",
        author: "-Hand me Downs",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;