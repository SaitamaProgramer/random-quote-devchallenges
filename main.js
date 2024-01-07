const autor = document.querySelector('.name');
const frase = document.querySelector('.phrase');
const btnPhrase = document.querySelector('.btn-phrase');
const btnLink = document.querySelector('.btn-link');

const frasesInspiradoras = [
    { autor: "Unknown", frase: "Dream big, work hard, stay focused." },
    { autor: "Theodore Roosevelt", frase: "Believe you can and you're halfway there." },
    { autor: "Steve Jobs", frase: "The only way to do great work is to love what you do." },
    { autor: "Winston S. Churchill", frase: "Success is not final, failure is not fatal: It is the courage to continue that counts." },
    { autor: "Albert Einstein", frase: "In the middle of difficulty lies opportunity." },
    { autor: "Steve Jobs", frase: "Your time is limited, don't waste it living someone else's life." },
    { autor: "Franklin D. Roosevelt", frase: "The only limit to our realization of tomorrow will be our doubts of today." },
    { autor: "C.S. Lewis", frase: "You are never too old to set another goal or to dream a new dream." },
    { autor: "Eleanor Roosevelt", frase: "The future belongs to those who believe in the beauty of their dreams." },
    { autor: "Ralph Waldo Emerson", frase: "The only person you are destined to become is the person you decide to be." }
  ];


btnPhrase.addEventListener("click", function() {
  const random = Math.floor(Math.random() * frasesInspiradoras.length);
  const phraseRandom = frasesInspiradoras[random];
  autor.innerHTML = phraseRandom.autor;
  frase.innerHTML =`"${phraseRandom.frase}"`;
  console.log(phraseRandom.autor, phraseRandom.frase.toString());
});





