const d = document;

const loadDayQuote = async () => {
  try {
    let res = await fetch('https://api.quotable.io/random');
    if (!res.ok) return new Error(res.statusText);
    let quote = await res.json();
    console.log(quote);
  } catch (err) {
    console.log(err);
  }
};

const renderQuote = () => {
  const $quote = d.getElementById('quote');
  const $author = d.getElementById('author');
};
d.addEventListener('DOMContentLoaded', loadDayQuote);
