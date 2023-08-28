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
});
$(document).on('click','.deleteReservation',function(){
    const reservationCode = this.dataset.reservationCode;
    $('#deleteReservationCode').val(reservationCode);
    $('#deleteModal').modal('show');
});
$(document).on('click','#positiveButton',function(){
    const reservation_code = $('#deleteReservationCode').val();
    const uri = '';
    const data = {resrvationCode : reservation_code};
    $.post({
        url : uri,
        data: data,
        headers: {
            'Content-Type': 'application/json'
        },
        success: function(){
            //traitement
            // $('#deleteModal').modal('hide');
        },
        error: function(){
            // $('#deleteModal').modal('hide');
        }
    });
    $('#deleteModal').modal('hide');
    
});
$(document).on('click','.close-modal',function(){
    $('#deleteModal').modal('hide');
});

});