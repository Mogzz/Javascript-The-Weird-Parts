var morgan = G$("Morgan", "Parry");



//change the output of h1 on submit
$('input[type=submit]').on("click", function() {
  var morgan = G$("Morgan", "Parry");
  //select the value from option
  var lang = $('#lang').val();
  //use our jQuery method to set the HTML 
  morgan.setLang(lang).HTMLGreeting('#greeting');
})