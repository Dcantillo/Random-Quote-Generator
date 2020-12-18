$( document ).ready(function() {
    


let quote  = ['Be yourself; everyone else is already taken.-Oscar Wilde', 'Two things are infinite: the universe and human stupidity; and Im not sure about the universe.-Albert Einstein', 'So many books, so little time. -Frank Zappa', 'Be who you are and say what you feel, because those who mind dont matter, and those who matter dont mind. -Bernard M. Baruch', 'A room without books is like a body without a soul. -Marcus Tullius Cicero' , 'In three words I can sum up everything Ive learned about life: it goes on. - Robert Frost' , ' The only thing we have to fear is fear itself. - Frankiln D. Roosevelt'];

console.log(quote); 

$('.quote').click(function() { 
   
    var random = Math.floor(Math.random('.quote') * quote.length); 
    $('.quote-recommend').text(quote[random]); 

});
});
