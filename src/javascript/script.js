$(document).ready(function() {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop+ section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        })

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.dish', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#testimonial_chef', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    })

    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 1000,
        distance: '20%'
    })
});

$(document).ready(function() {
    $('#btnFerramentas').click(function() {
        // Define o posicionamento da caixa de ferramentas
        var btnPosition = $('#btnFerramentas').offset();
        var topPosition = btnPosition.top + $('#btnFerramentas').outerHeight();
        var leftPosition = btnPosition.left + $('#btnFerramentas').outerWidth();
        
        // Cria a caixa de ferramentas
        var toolbox = $('<div id="toolbox"></div>').css({
            'top': topPosition,
            'left': leftPosition
        });
        
        // Adiciona links para as seções de ferramentas na caixa de ferramentas
        toolbox.append('<a href="#menu">Ferramentas de Gerenciamento de Projetos</a>');
        toolbox.append('<a href="#menu2">Ferramentas de Testes de Software</a>');
        toolbox.append('<a href="#menu3">Outras Ferramentas</a>');
        
        // Adiciona a caixa de ferramentas à página
        $('body').append(toolbox);
        
        // Fecha a caixa de ferramentas quando clicar fora dela
        $(document).click(function(event) {
            if (!$(event.target).closest('#toolbox, #btnFerramentas').length) {
                $('#toolbox').remove();
            }
        });
        
        // Impede que o clique no botão de ferramentas propague para o documento
        return false;
    });

});