
// HTML містить розмітку форми. Напиши скрипт, який буде зберігати значення полів у локальне сховище, коли користувач щось друкує.
// Виконуй це завдання у файлах 03-feedback.html і 03-feedback.js. Розбий його на декілька підзавдань:

// 1. Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message,
// у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".
// 2.Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми.
//  В іншому випадку поля повинні бути порожніми.
// 3. Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email,
// message та їхніми поточними значеннями.
// 4. Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд.
// Для цього додай до проекту і використовуй бібліотеку lodash.throttle.

import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('[name="email"]'),
  textarea: document.querySelector('[name="message"]'),
};

const STORAGE_KEY = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

const onInputForm = e => {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

refs.form.addEventListener('input', throttle(onInputForm, 500));

const onResetPage = () => {
  let currentData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (currentData) {
    refs.input.value = currentData.email;
    refs.textarea.value = currentData.message;

    formData.email = currentData.email;
    formData.message = currentData.message;
  }
};

onResetPage();

const onSubmitForm = e => {
  e.preventDefault();

  if (refs.input.value === '' || refs.textarea.value === '') {
    alert('Please fill in all the fields!');
    return
  }
  localStorage.removeItem(STORAGE_KEY);
  e.currentTarget.reset();
  formData.email = '';
  formData.message = '';
  console.log(formData);
};

refs.form.addEventListener('submit', onSubmitForm);