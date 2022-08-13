var Quotes=[
    "<p>Be yourself ; everyone else is already taken.</p><h2>Oscar Wilde</h2>",
    "<p>I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best</p><h2>Marilyn Monroe</h2>",
    "<p>Two things are infinite : the universe and human stupidity ; and I'm not sure about the universe.</p><h2>Albert Einstein</h2>",
    "<p>So many books, so little time.</p><h2> Frank Zappa</h2>",
]
function newQuote()
{
    
    var randomNumber=Math.floor(Math.random()*(Quotes.length))
    document.getElementById("display").innerHTML=Quotes[randomNumber]
}