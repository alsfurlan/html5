/* 
 * 
 * @author Anderson Luís Furlan
 */

$(document).ready(function() {
    /* 
     * Criação de navegação por seções
     */
    var imgPrevSection = 'img/prev_section.png';
    var imgLogoHTML5Small = 'img/logo_html5_small.png';
    var imgNextSection = 'img/next_section.png';

    createMenu();
    createPagination();
    createTitlesMarker();
    aElementsAside();
    createEffectScrollTo();
    resizeElements();

    $(window).resize(function() {
        resizeElements();
    });

    function createMenu() {
        $("body > header, body > section, body > aside").each(function(index) {
            // Atribui id 
            $(this).attr("id", "screen" + index);
            // Cria menu 
            $("body > nav > ul").append(
                    $("<li><a href='#screen" + index + "'>" + $(this).find("h1").eq(0).text() + "</a></li>")
                    );
        });
    }

    function createEffectScrollTo() {
        /* Efeito de rolagem */
        $("a").click(function() {
            $.scrollTo($(this).attr("href"), 1500);
        });
    }

    function createPagination() {
        $("body > header").find("a").attr("href", "#screen1");

        $("[id^='screen']").each(function(index) {
            // Cria navegação para seção anterior
            if (index !== 0) {
                var navElementPrevSection = $("<nav class='prevSection'></nav>");
                var pElementPrevSection = $("<p></p>");
                var imgElementPrevSection = "<img alt='Seção anterior' title='Seção anterior' src='" + imgPrevSection + "' />";
                var aElementPrevSection = $("<a href='#screen" + (index - 1) + "'>" + imgElementPrevSection + "</a>");

                pElementPrevSection.append(aElementPrevSection);
                navElementPrevSection.append(pElementPrevSection);
                $(this).prepend(navElementPrevSection);

                if (index + 1 !== $("[id^='screen']").size()) {
                    var navElementNextSection = $("<nav class='nextSection'></nav>");
                    var pElementNextSection = $("<p></p>");
                    var imgElementNextSection = "<img alt='Próxima seção' title='Próxima seção' src='" + imgNextSection + "' />";
                    var aElementNextSection = $("<a href='#screen" + (index + 1) + "'>" + imgElementNextSection + "</a>");

                    pElementNextSection.append(aElementNextSection);
                    navElementNextSection.append(pElementNextSection);
                    $(this).prepend(navElementNextSection);
                }
            }
        });

    }

    function createTitlesMarker() {
        $("body > section, body > aside").each(function(index) {
            // Cria marcador HTML5 para títulos
            $(this).find("h1").prepend($("<img src='" + imgLogoHTML5Small + "' alt='HTML5' title='HTML5' />"));
        });
    }

    function resizeElements() {
        var windowHeight = $(window).height();
        var windowWidth = $(window).width();
        $("body > header").height(windowHeight);
        $("body > section, body aside, body > section > nav, body > section > article").css("min-height", windowHeight + "px");
        $("body > section > nav > p, body > aside > nav > p").css("margin-top", windowHeight / 2 + "px");
        $("body > header img").height(windowHeight * 0.6);
        $("body > header > h1").eq(1).css("fontSize", windowHeight * 0.07 + "px");
    }

    function aElementsAside() {
        var aElement = $("body > aside").find("ul > li > a");
        aElement.each(function() {
            var text = $(this).text();
            $(this).attr("alt", text)
                    .attr("target", "_blank")
                    .prepend($("<img src='" + imgNextSection + "' alt='" + text + "' title='" + text + "' />"));
        });


    }
});



