
$(function() {
    var enviar_correo = $('#enviarCorreo');
    var mensaje= $('.alert-success');
    var h3 = $('h3');
    var card_title =$('.card-title');

    enviar_correo.click(function(){
        
        mensaje.fadeIn('slow');
        mensaje.fadeOut(2000);
        
    });
            
    h3.on("dblclick", function(){

        if (!$(this).hasClass('red')){

            $(this).addClass('red')

        }else{
            $(this).removeClass('red')
        } 


    });
   
    card_title.click(function(){
        $('.card-text').slideToggle('slow');
    });

    //toltip//
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
});