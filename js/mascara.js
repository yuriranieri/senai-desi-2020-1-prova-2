$(document).ready(function()
{
	$('.mascaraData').mask('99/99/9999');
	$('.mascaraCep').mask('99999-999');
    $('.mascaraCpf').mask('999.999.999-99');

    $('.validaData').change(function()
    {
		var value_data = $(this).val();
    if(value_data.length < 10) 
    {
      alert('Informe a data de nascimento corretamente');
      $("#nascimento").focus();
		}
    });
    $('.validaCpf').change(function()
    {
		var value_cpf = $(this).val();
    if(value_cpf.length < 14) 
    {
      alert('Informe o CPF corretamente');
      $("#cpf").focus();
		}
    });
    $('.validaCep').change(function()
    {
		var value_cep = $(this).val();
    if(value_cep.length < 9) 
    {
      alert('Informe o CEP corretamente');
      $("#cep").focus();
    }
    });
    $('.mascaraDinheiroReal').priceFormat({
		prefix: 'R$ ',
		centsSeparator: ',',
		thousandsSeparator: '.'
	});
});