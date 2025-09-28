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

  if (scrolled && !wasScrolled) {
    header.classList.add('scrolled');

    if (!dropping) {
      dropping = true;
      header.style.transform = 'translateY(-24px)';  
      requestAnimationFrame(() => {
        header.style.transform = 'translateY(0)';      
        setTimeout(() => { dropping = false; }, 400);
      });
    }

    wasScrolled = true;
    return;
  }

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

    if (item.classList.contains("active")) {
      icon.textContent = "–";
    } else {
      icon.textContent = "+";
    }
  });
});

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