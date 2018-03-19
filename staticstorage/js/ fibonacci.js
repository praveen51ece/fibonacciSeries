
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

function GetFibonacciResult(nterms){
    var nterms = nterms
    console.log(nterms)
	var formData = new FormData();
    formData.append("nterms", nterms);

    // alert(sami)

    $.ajax({
        url: "/",
        type: 'POST',
        data: formData,
        async: true,
        cache: false,
        contentType: false,
        processData: false,
        success: function(return_data) {
        console.log(return_data)
        $("#result").text(return_data);
	    // alert(return_data)
        }

	});
}
