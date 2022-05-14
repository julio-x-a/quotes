const d = document;

const loadDayQuote = async () => {
  try {
    let res = await fetch('https://api.quotable.io/random');
    if (!res.ok) return new Error(res.statusText);
    let data = await res.json();
    renderQuote(data);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

const renderQuote = (data) => {
  const $quote = d.getElementById('quote');
  const $author = d.getElementById('author');
  // $quote.textContent = `"${data.content}"`;
  $author.textContent = data.author;
  var typed = new Typed('#quote', {
    strings: [data.content],
    typeSpeed: 20,
  });
};
d.addEventListener('DOMContentLoaded', loadDayQuote);
