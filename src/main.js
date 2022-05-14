import './output.css';

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
  d.getElementById('quote').textContent = '';
  d.getElementById('author').textContent = '';
  d.querySelector('.typed-cursor')?.remove();
  const $author = d.getElementById('author');
  $author.textContent = `- ${data.author}`;
  var typed = new Typed('#quote', {
    strings: [`"${data.content}"`],
    typeSpeed: 20,
  });
  d.querySelector('span').classList.add(
    'text-[#00FA7A]',
    'text-2xl',
    'sm:text-5xl',
    'font-fira',
    'font-extralight'
  );
};
d.addEventListener('DOMContentLoaded', loadDayQuote);
d.addEventListener('click', async (e) => {
  if (e.target.matches('#retry')) loadDayQuote();
});
