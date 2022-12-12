// конфигурация чат-бота
const configChatbot = {};
// CSS-селектор кнопки, посредством которой будем вызывать окно диалога с чат-ботом
configChatbot.btn = '.chatbot__btn';
// ключ для хранения отпечатка браузера
configChatbot.key = 'fingerprint';
// реплики чат-бота
configChatbot.replicas = {
    bot: {
      0: { content: 'Привет! Я Инфинити - бот поддержки сайта', human: [0, 1, 2] },
      1: { content: 'Что Вас интересует?', human: [3, 4, 5, 6] },
      2: { content: 'Наша задача в доступной форме рассказать про популярные программные обеспечения для вашего сайта', human: [4, 5, 6] },
      3: { content: 'Мы предлагаем информацию с официальных источников, а также вы можете написать нам в соц. сетях либо в качестве формы на почту', human: [3, 5, 6] },
      4: { content: '<a href="https://fermi114.github.io/TesPO/contacts.html">Ссылка</a>', human: [4, 3, 6]},
      5: {content: '<a href="https://fermi114.github.io/TesPO/test.html">Ссылка</a>', human:[4, 5, 3]}
      /* ... */
    },
    human: {
      0: { content: 'Привет! Я рад с тобой познакомиться', bot: 1 },
      1: { content: 'Салют!', bot: 1 },
      2: { content: 'Приветик, Инфинити!', bot: 1 },
      3: { content: 'Задача проекта', bot: 2},
      4: { content: 'Услуги', bot: 3 },
      5: { content: 'Обратная связь', bot: 4 },
      6: { content: 'Cсылка на опрос', bot: 5 },
      /* ... */
    }
  }
// корневой элемент
configChatbot.root = SimpleChatbot.createTemplate();
// URL chatbot.php
configChatbot.url = '/chatbot/chatbot.php';
// создание SimpleChatbot
let chatbot = new SimpleChatbot(configChatbot);
// при клике по кнопке configChatbot.btn
document.querySelector(configChatbot.btn).onclick = function (e) {
  this.classList.add('d-none');
  const $tooltip = this.querySelector('.chatbot__tooltip');
  if ($tooltip) {
    $tooltip.classList.add('d-none');
  }
  configChatbot.root.classList.toggle('chatbot_hidden');
  chatbot.init();
};
// добавление ключа для хранения отпечатка браузера в LocalStorage
let fingerprint = localStorage.getItem(configChatbot.key);
if (!fingerprint) {
  Fingerprint2.get(function (components) {
    fingerprint = Fingerprint2.x64hash128(components.map(function (pair) {
      return pair.value
    }).join(), 31)
    localStorage.setItem(configChatbot.key, fingerprint)
  });
}
