/* =========================================================
   EXPLORA O MUNDO DOS DINOSSAUROS
   SCRIPT.JS
   ========================================================= */


/* =========================================================
   1. MODO ESCURO
   ========================================================= */

const botaoDarkMode = document.getElementById("darkMode");

if (botaoDarkMode) {

    botaoDarkMode.addEventListener("click", function () {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {

            botaoDarkMode.textContent = "☀️";

            localStorage.setItem("modo", "escuro");

        } else {

            botaoDarkMode.textContent = "🌙";

            localStorage.setItem("modo", "claro");

        }

    });

}


/* =========================================================
   2. CARREGAR MODO SALVO
   ========================================================= */

const modoSalvo = localStorage.getItem("modo");

if (modoSalvo === "escuro") {

    document.body.classList.add("dark");

    if (botaoDarkMode) {
        botaoDarkMode.textContent = "☀️";
    }

}


/* =========================================================
   3. PESQUISA DE DINOSSAUROS
   ========================================================= */

const campoPesquisa = document.getElementById("campoPesquisa");

const cards = document.querySelectorAll(".card");

if (campoPesquisa) {

    campoPesquisa.addEventListener("input", function () {

        const pesquisa = campoPesquisa.value
            .toLowerCase()
            .trim();

        cards.forEach(function (card) {

            const texto = card.textContent.toLowerCase();

            if (texto.includes(pesquisa)) {

                card.classList.remove("oculto");

            } else {

                card.classList.add("oculto");

            }

        });

    });

}


/* =========================================================
   4. BOTÃO VOLTAR AO TOPO
   ========================================================= */

const botaoTopo = document.getElementById("topo");

window.addEventListener("scroll", function () {

    if (!botaoTopo) {
        return;
    }

    if (window.scrollY > 400) {

        botaoTopo.classList.add("mostrar");

    } else {

        botaoTopo.classList.remove("mostrar");

    }

});


if (botaoTopo) {

    botaoTopo.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* =========================================================
   5. BOTÕES "SAIBA MAIS"
   ========================================================= */

const botoesSaibaMais = document.querySelectorAll(".card button");

botoesSaibaMais.forEach(function (botao) {

    botao.addEventListener("click", function () {

        const card = botao.closest(".card");

        if (!card) {
            return;
        }

        const nome = card.querySelector("h3");

        const descricao = card.querySelector("p");

        if (!nome || !descricao) {
            return;
        }

        alert(
            nome.textContent +
            "\n\n" +
            descricao.textContent
        );

    });

});


/* =========================================================
   6. FORMULÁRIO DE CONTATO
   ========================================================= */

const formulario = document.querySelector("form");

if (formulario) {

    formulario.addEventListener("submit", function (event) {

        event.preventDefault();

        const nome = formulario.querySelector(
            'input[type="text"]'
        );

        const email = formulario.querySelector(
            'input[type="email"]'
        );

        const mensagem = formulario.querySelector(
            "textarea"
        );

        if (!nome || !email || !mensagem) {
            return;
        }

        if (
            nome.value.trim() === "" ||
            email.value.trim() === "" ||
            mensagem.value.trim() === ""
        ) {

            alert(
                "Por favor, preencha todos os campos."
            );

            return;
        }

        alert(
            "Mensagem enviada com sucesso!\n\n" +
            "Obrigado pelo contato, " +
            nome.value +
            "!"
        );

        formulario.reset();

    });

}


/* =========================================================
   7. ANIMAÇÃO DOS CARDS AO ENTRAREM NA TELA
   ========================================================= */

const elementosAnimados = document.querySelectorAll(
    ".card, .lista > div, .numeros div"
);

const observador = new IntersectionObserver(

    function (entradas) {

        entradas.forEach(function (entrada) {

            if (entrada.isIntersecting) {

                entrada.target.style.opacity = "1";

                entrada.target.style.transform =
                    "translateY(0)";

                observador.unobserve(
                    entrada.target
                );

            }

        });

    },

    {
        threshold: 0.15
    }

);


elementosAnimados.forEach(function (elemento) {

    elemento.style.opacity = "0";

    elemento.style.transform =
        "translateY(30px)";

    elemento.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    observador.observe(elemento);

});


/* =========================================================
   8. EFEITO DE DESTAQUE NOS CARDS
   ========================================================= */

cards.forEach(function (card) {

    card.addEventListener("mouseenter", function () {

        cards.forEach(function (outroCard) {

            if (outroCard !== card) {

                outroCard.style.opacity = "0.75";

            }

        });

    });

    card.addEventListener("mouseleave", function () {

        cards.forEach(function (outroCard) {

            outroCard.style.opacity = "1";

        });

    });

});


/* =========================================================
   9. NAVEGAÇÃO SUAVE
   ========================================================= */

const linksMenu = document.querySelectorAll(
    'nav a[href^="#"]'
);

linksMenu.forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const destino = link.getAttribute("href");

        const secao = document.querySelector(destino);

        if (secao) {

            secao.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* =========================================================
   10. EFEITO NO HEADER DURANTE O SCROLL
   ========================================================= */

const header = document.querySelector("header");

window.addEventListener("scroll", function () {

    if (!header) {
        return;
    }

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 5px 20px rgba(0, 0, 0, 0.30)";

    } else {

        header.style.boxShadow =
            "0 3px 15px rgba(0, 0, 0, 0.20)";

    }

});


/* =========================================================
   11. CONTADOR DAS ESTATÍSTICAS
   ========================================================= */

const numeros = document.querySelectorAll(
    ".numeros h3"
);

const observadorNumeros = new IntersectionObserver(

    function (entradas) {

        entradas.forEach(function (entrada) {

            if (entrada.isIntersecting) {

                entrada.target.style.transform =
                    "scale(1.1)";

                setTimeout(function () {

                    entrada.target.style.transform =
                        "scale(1)";

                }, 400);

                observadorNumeros.unobserve(
                    entrada.target
                );

            }

        });

    },

    {
        threshold: 0.5
    }

);


numeros.forEach(function (numero) {

    numero.style.transition =
        "transform 0.4s ease";

    observadorNumeros.observe(numero);

});


/* =========================================================
   12. MENSAGEM DE BOAS-VINDAS
   ========================================================= */

console.log(
    "🦖 Bem-vindo ao Explora o Mundo dos Dinossauros!"
);

console.log(
    "Site carregado com sucesso."
);


/* =========================================================
   13. VERIFICAÇÃO DOS ELEMENTOS
   ========================================================= */

console.log(
    "Cards encontrados:",
    cards.length
);

console.log(
    "Links encontrados:",
    linksMenu.length
);


/* =========================================================
   14. DATA DO RODAPÉ
   ========================================================= */

const anoAtual = new Date().getFullYear();

const textosRodape = document.querySelectorAll(
    "footer p"
);

textosRodape.forEach(function (texto) {

    if (texto.textContent.includes("2026")) {

        texto.textContent =
            "© " +
            anoAtual +
            " - Explora o Mundo dos Dinossauros";

    }

});


/* =========================================================
   FIM DO SCRIPT
   ========================================================= */

