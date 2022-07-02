$(function(){
    $("form").submit(function(event){
        event.preventDefault();
        $.ajax({
            url: "https://formspree.io/f/mzboqknj",
            method: "post",
            data: {
                nome: $("#nome").val(),
                email: $("#email").val(),
                telefone: $("#telefone").val(),
                assunto: $("#assunto").val(),
                mensagem: $("#mensagem").val(),
            },
            datatype: "json"
        })
            $("#nome").val("");
            $("#email").val("");
            $("#telefone").val("");
            $("#assunto").val("");
            $("#mensagem").val("");
            alert("Email Enviado Com sucesso!"); 
    })
});

const myCarouselElement = document.querySelector('#mainSlide');
const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 500,
})