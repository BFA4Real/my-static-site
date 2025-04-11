const buttons = document.querySelectorAll('.tab-button');
const contents = document.querySelectorAll('.tab-content');

// Tab switching logic
buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active'));
    contents.forEach(content => content.classList.remove('active'));
    button.classList.add('active');
    const tabId = button.getAttribute('data-tab');
    document.getElementById(tabId).classList.add('active');
    currentIndex = [...buttons].indexOf(button);
  });
});

// Auto-switch tabs every 8s
let currentIndex = 0;
const totalTabs = buttons.length;
setInterval(() => {
  buttons.forEach(btn => btn.classList.remove('active'));
  contents.forEach(content => content.classList.remove('active'));
  buttons[currentIndex].classList.add('active');
  contents[currentIndex].classList.add('active');
  currentIndex = (currentIndex + 1) % totalTabs;
}, 8000);

// Dark mode toggle
const toggle = document.getElementById('dark-toggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// News
fetch('https://saurav.tech/NewsAPI/top-headlines/category/business/us.json')
  .then(res => res.json())
  .then(data => {
    const headlines = data.articles.map(article => article.title).join(' • ');
    const ticker = document.getElementById('news-ticker');
    ticker.innerHTML = `<span>${headlines}</span>`;
  })
  .catch(err => {
    document.getElementById('news-ticker').textContent = 'Failed to load news.';
    console.error('News fetch error:', err);
  });


