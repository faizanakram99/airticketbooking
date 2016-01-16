$(document).ready(function(){
    $("#flights" ).tabs();
    $(".boolReturn").hide();
    $('input[type="radio"]').click(function() {
       if($(this).attr('value') == 'yes') {
            $('.boolReturn').show();
       }

       else {
            $('.boolReturn').hide();
       }
   });

    $('.mobile-nav').click(function(){
       $('.main-nav ul').slideToggle();
    });
    $("#journey-date").datepicker();
    $("#return-date").datepicker();
    $("#journey-date-intr").datepicker();
    $("#return-date-intr").datepicker();
    $(".ui-datepicker").css('font-size', 11);



});
