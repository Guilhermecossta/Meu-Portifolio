document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log(`Nome: ${name}, Email: ${email}, Mensagem: ${message}`);

    // alert('Mensagem enviada com sucesso! Entrarei em contato em breve.');
    // contactForm.reset();
});

window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(44, 62, 80, 0.9)';
    } else {
        header.style.backgroundColor = '#2c3e50';
    }
});

window.addEventListener("scroll", function () {
    var header = document.getElementById("header");
    if (window.scrollY > 50) {
        header.classList.add("header-scroll");
    } else {
        header.classList.remove("header-scroll");
    }
});
window.addEventListener('scroll', function () {
    const header = document.getElementById('header');
    const scrollPosition = window.scrollY;

    // Adiciona classe 'scrolled' quando rolar mais de 100px
    if (scrollPosition > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

window.addEventListener('scroll', function () {
    // Calcula o progresso do scroll
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollProgress = (scrollTop / scrollHeight) * 100;

    // Atualiza a largura da barra de progresso
    document.getElementById('progress-bar').style.width = scrollProgress + '%';
});

const opcoes = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    locale: 'pt-BR' // Formato em português
};

const dataExtenso = new Date().toLocaleDateString('pt-BR', opcoes);
document.getElementById('data-atual').textContent = dataExtenso;