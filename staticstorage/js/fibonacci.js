function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

function Validate(){
	var nterms = $("#terms").val()
	if( nterms == ""){
		$('#error-message').html("<html><font color='red'>Please Enter Number!</font></html>").fadeOut(3000)
	}
	else{
		GetFibonacciResult(nterms);
	}
}

function GetFibonacciResult(){
    var nterms = $("#terms").val()
    var formData = new FormData(); 
    formData.append("nterms", nterms);
    $.ajax({
        url: "/",
        type: 'POST',
        data: formData,
        async: false,
        cache: false,
        contentType: false,
        processData: false,
        success: function(return_data) {
        console.log(return_data)
        $("#result").text(return_data.fibonacci_data)
        $("#time_taken").text(return_data.time_taken)
        $("#time_div").css('display','block')
        }
    });
}
$("#terms").on('change',function(){
    var nterms = $("#terms").val()
    if(nterms == ""){
       $("#time_div").css('display','none')

    }
});
