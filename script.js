
    document.addEventListener("DOMContentLoaded", () => {
        const typingElement = document.querySelector(".typing-animation");
        const text = "Desenvolvedor Front-End";
        let index = 0;

        function type() {
            if (index < text.length) {
                typingElement.textContent += text.charAt(index);
                index++;
                setTimeout(type, 100); // Velocidade de digitação (em ms)
            }
        }

        type();
    });
    AOS.init({
        duration: 1000, // Duração da animação em milissegundos
        once: true, // Executa a animação apenas uma vez
        offset: 120, // Distância do topo para iniciar a animação
    });
 