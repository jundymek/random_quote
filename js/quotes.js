var quotes = [
    ["Be yourself; everyone else is already taken.", "Oscar Wilde"],
    ["Two things are infinite: the universe and human stupidity; \
        and I'm not sure about the universe.", "Albert Einstein"],
    ["I've missed more than 9000 shots in my career. I've lost almost 300 \
        games. 26 times, I've been trusted to take the game winning shot and \
        missed. I've failed over and over and over again in my life. And that \
        is why I succeed.", "Michael Jordan"],
    ["Be the change that you wish to see in the world.", "Mahatma Gandhi"],
    ["If you tell the truth, you don't have to remember anything.", "Mark Twain"]
]

$(document).ready(function() {
    randomQuote();
});

function randomQuote() {
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: 'http://quotes.stormconsultancy.co.uk/random.json',
        success: function(data) {
            var quote = data.quote;
            var author = data.author;
            $("#quote").text(quote);
            $(".author").text(author);
        }
    });
}

//     var random = Math.floor(Math.random() * quotes.length);
//     $("#quote").text(x);
//     $(".author").text(y);
// });

// function randomQuote() {
//     var t = ($("#quote").text());
//     var random = Math.floor(Math.random() * quotes.length);
//     // console.log(random)
//     while (t == quotes[random][0]) {
//         random = Math.floor(Math.random() * quotes.length);
//     }
//     $("#quote").text(quotes[random][0]);
//     $(".author").text(quotes[random][1]);
// }

function tweet() {
    var textToTweet = $("#quote").text() + ' -' + $(".author").text();
    var twtLink = 'http://twitter.com/home?status=' + encodeURIComponent(textToTweet);
    window.open(twtLink, '_blank');
}