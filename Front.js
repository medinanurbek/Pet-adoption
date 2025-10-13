document.getElementById('adoptForm').addEventListener('submit', function(event) {
  event.preventDefault(); 

  let isValid = true;
  let errorMessage = "";

  const nameField = document.getElementById('name');
  const emailField = document.getElementById('email');
  const petField = document.getElementById('pet');
  const messageField = document.getElementById('message');

  document.getElementById('error-message').innerHTML = "";

  // Reset field styles
  nameField.style.border = emailField.style.border = petField.style.border = messageField.style.border = '';

  if (!nameField.value.trim()) {
    isValid = false;
    errorMessage += "Name is required.<br>";
    nameField.style.border = '2px solid red';  // Highlight the error field
  }

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailField.value.match(emailPattern)) {
    isValid = false;
    errorMessage += "Please enter a valid email address.<br>";
    emailField.style.border = '2px solid red';  // Highlight the error field
  }

  if (!petField.value) {
    isValid = false;
    errorMessage += "Please select a pet to adopt.<br>";
    petField.style.border = '2px solid red';  // Highlight the error field
  }

  if (!messageField.value.trim()) {
    isValid = false;
    errorMessage += "Message is required.<br>";
    messageField.style.border = '2px solid red';  // Highlight the error field
  }

  if (!isValid) {
    document.getElementById('error-message').innerHTML = errorMessage;
  } else {
    alert("Form submitted successfully!");
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', function () {
      const content = header.nextElementSibling;

      // Toggle the display of the content
      if (content.style.display === 'block') {
        content.style.display = 'none';
      } else {
        content.style.display = 'block';
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Получаем элементы
  const openPopupBtn = document.getElementById('openPopupBtn');
  const closePopupBtn = document.getElementById('closePopupBtn');
  const popupForm = document.getElementById('popupForm');

  // Открытие попапа при клике на кнопку
  openPopupBtn.addEventListener('click', function () {
    popupForm.style.display = 'flex'; // Показываем попап
  });

  // Закрытие попапа при клике на кнопку закрытия
  closePopupBtn.addEventListener('click', function () {
    popupForm.style.display = 'none'; // Скрываем попап
  });

  // Закрытие попапа, если пользователь кликнул за пределы попапа
  window.addEventListener('click', function (event) {
    if (event.target === popupForm) {
      popupForm.style.display = 'none'; // Скрыть попап
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const dateTimeBlock = document.getElementById('dateTimeBlock');

  function updateDateTime() {
    const now = new Date();  // Получаем текущую дату и время

    // Опции для форматирования даты
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true  // Использование 12-часового формата
    };

    // Форматируем дату и время
    const formatted = now.toLocaleString('en-US', options);

    // Обновляем содержимое блока с датой и временем
    dateTimeBlock.textContent = formatted;
  }

  // Обновляем дату и время сразу после загрузки страницы
  updateDateTime();

  // Обновляем дату и время каждую секунду
  setInterval(updateDateTime, 1000);
});


