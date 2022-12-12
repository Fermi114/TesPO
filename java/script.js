$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    
    $('header__menu').click(function(event){
        var elemid = document.getElementById("brow")

        function handleButtonClick() {
            elemid.scrollIntoView({block: "top", behavior: "smooth"})
    
        }
    });
});
