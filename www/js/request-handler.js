(function () {

  function init(){
    $('#submitButton').click(submitButtonHandler);
  }

  function submitButtonHandler (evt) {
     var demoForm = document.getElementById('demoRequestForm');

      //prevent form submission
      evt.preventDefault();
      evt.stopPropagation();

      $("div.progressbar_bg").show();


      //make the AJAX call
      $.ajax({
        url: '/contact',
        type: 'POST',
        data: {
          userName: demoForm.userName.value,
          userEmail: demoForm.userEmail.value
        },
        success: postSuccessHandler,
		error:postErrorHandler
      });
  }

  function postSuccessHandler (jsonData) {
  
    var demoForm = document.getElementById('demoRequestForm');
    demoForm.userName.value='';
	demoForm.userEmail.value='';
    $("div.progressbar_bg").hide();
  };
  
  function postErrorHandler(response)
  {
	  
	$("div.progressbar_bg").hide();
  }

//init on document ready
$(function()
{
	init();
});

})();