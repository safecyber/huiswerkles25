$(document).ready(function() {

    
    $("header, main, footer").hide().fadeIn(2000);

    
    $(".image-container img, .grid-image-container img").hover(
        function() {
            $(this).css({
                "transform": "scale(1.1)",
                "transition": "transform 0.5s ease"
            });
            $(this).css("box-shadow", "0px 8px 15px rgba(0, 0, 0, 0.3)");
        },
        function() {
            $(this).css("transform", "scale(1)");
            $(this).css("box-shadow", "0px 4px 6px rgba(0, 0, 0, 0.1)");
        }
    );

    
    $("nav a").click(function(event) {
        event.preventDefault();
        const target = $(this).attr("href");
        window.location.href = target;
    });
});