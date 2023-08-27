$(document).ready(function () {
$(document).on('click','.delete-reservation',function(){
    const reservationCode = this.dataset.reservationCode;
    const uri = "";
    const dataObject ={resevation_code: reservationCode};
    $.ajax({
        url: uri,
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        data: JSON.stringify(dataObject),
        success: function (response) {
            // const responseData = response.json();
            // const responseObject = JSON.parse(JSON.stringify(responseData));
            // formElement.innerHTML = responseObject.message;
        }
    });
})
});