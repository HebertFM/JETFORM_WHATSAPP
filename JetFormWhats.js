<script>
jQuery(document).ready(function(){

jQuery("input[name='text']").hide();

    jQuery(".jet-form-builder__submit").click(function(){
        var nome = jQuery("input[name='_nome']").val();
        var email = jQuery("input[name='_email']").val();
        var whats = jQuery("input[name='_whats']").val();
        var servico= jQuery("input[name='_servicos']").val();
        var data= jQuery("input[name='_data']").val();
       
        var mensagem = `Novo Agendamento de:  ${nome},  E-mail: ${email}, Whatsapp: ${whats}, Especialidade: ${servico}, Data: ${data}`;
        jQuery("input[name='text']").val(mensagem);
    });
});

</script> 
