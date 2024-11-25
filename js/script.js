//Index bullets
$(document).ready(function () {
    const images = $(".article-header img");
    const bullets = $(".bullet");
    let currentIndex = 0;
    const totalImages = images.length;

    function showImage(index) {
        images.hide(); // Oculta todas as imagens
        images.eq(index).fadeIn(); // Exibe a imagem selecionada
        bullets.removeClass("active"); // Remove a classe ativa de todos os bullets
        bullets.eq(index).addClass("active"); // Ativa o bullet correspondente
        currentIndex = index; // Atualiza o índice atual
    }

    showImage(currentIndex);

    // Timer para o carrossel automático
    setInterval(function () {
        const nextIndex = (currentIndex + 1) % totalImages; // (0 + 1) % 3 = 1, (1+1) % 3 = 2, e (2=1) % 3 = 0. Index de 0 até 2 (total 3 imagens)
        showImage(nextIndex);
    }, 3000);
    
    // Evento de clique nos bullets
    bullets.click(function () {
        const index = $(this).data("index"); // Obtém o índice do bullet clicado
        showImage(index); // Exibe a imagem correspondente
    });
});

//Fade in e fade out classes

$(document).ready(function() {
    // Função que verifica se um elemento está visível na tela
    function isInViewport(element) {
        var rect = element[0].getBoundingClientRect();
        return rect.top >= 0 && rect.left >= 0 && rect.bottom <= $(window).height() && rect.right <= $(window).width();
    }

    // Selecione todos os parágrafos com a classe 'fade-in'
    var fadeElements = $('.classes-article-content p');

    // Verifica a visibilidade ao carregar a página e ao rolar
    $(window).on('load scroll', function() {
        fadeElements.each(function() {
            var element = $(this);
            if (isInViewport(element)) {
                // Adiciona a classe 'visible' para fade-in
                element.addClass('visible');
            } else {
                // Remove a classe 'visible' para fade-out
                element.removeClass('visible');
            }
        });
    });
});


