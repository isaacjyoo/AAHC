
const translations = {
  ko: {
    'Ann Arbor Hope Church': '앤아버 소망교회',
    'Worship Schedule': '예배 시간',
    'Upcoming Events & News': '행사 및 소식',
    'Photo Gallery': '사진첩',
    'Contact Us': '문의하기'
  },
  en: {
    'Ann Arbor Hope Church': 'Ann Arbor Hope Church',
    'Worship Schedule': 'Worship Schedule',
    'Upcoming Events & News': 'Upcoming Events & News',
    'Photo Gallery': 'Photo Gallery',
    'Contact Us': 'Contact Us'
  }
};

function setLanguage(lang) {
  document.querySelector('header h1').textContent = translations[lang]['Ann Arbor Hope Church'];
  document.querySelector('#services h2').textContent = translations[lang]['Worship Schedule'];
  document.querySelector('#events h2').textContent = translations[lang]['Upcoming Events & News'];
  document.querySelector('#gallery h2').textContent = translations[lang]['Photo Gallery'];
  document.querySelector('#contact h2').textContent = translations[lang]['Contact Us'];
}
