// Хедер: плавный "дроп" при ПЕРВОМ переходе в состояние scrolled
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 30) {
    header.classList.add('show');
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
    header.classList.remove('show');
  }
});


function applyHeaderState() {
  const scrolled = window.scrollY > 30;

  // при входе в scrolled запускаем эффект "опускания"
  if (scrolled && !wasScrolled) {
    header.classList.add('scrolled');

    // один раз проигрываем "дроп": из -24px к 0
    if (!dropping) {
      dropping = true;
      header.style.transform = 'translateY(-24px)';     // стартовая позиция
      requestAnimationFrame(() => {
        header.style.transform = 'translateY(0)';       // плавный въезд вниз
        // после окончания анимации сбросим флаг
        setTimeout(() => { dropping = false; }, 400);
      });
    }

    wasScrolled = true;
    return;
  }

  // при выходе из scrolled возвращаем прозрачный режим без рывков
  if (!scrolled && wasScrolled) {
    header.classList.remove('scrolled');
    header.style.transform = 'translateY(0)';
    wasScrolled = false;
  }
}
document.querySelectorAll(".faq-question").forEach(button => {
  button.addEventListener("click", () => {
    const item = button.parentElement;
    const icon = button.querySelector(".faq-icon");

    item.classList.toggle("active");

    // Меняем + ↔ –
    if (item.classList.contains("active")) {
      icon.textContent = "–";
    } else {
      icon.textContent = "+";
    }
  });
});

// Кнопка в Hero (Подробнее → скролл к "Наши преимущества")
document.querySelector('.more-btn').addEventListener('click', function() {
  document.querySelector('.features').scrollIntoView({
    behavior: 'smooth'
  });
});

document.querySelector('.demo-btn').addEventListener('click', function() {
  document.querySelector('.atlas').scrollIntoView({
    behavior: 'smooth'
  });
});


window.addEventListener('scroll', applyHeaderState);
window.addEventListener('load', applyHeaderState);