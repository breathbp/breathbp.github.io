$(document).ready(function () {
$(document).on('click','.deleteReservation',function(){
    const reservationCode = this.dataset.reservationCode;
    $('#deleteReservationCode').val(reservationCode);
    $('#deleteModal').modal('show');
});
$(document).on('click','#positiveButton',function(){
    const reservation_code = $('#deleteReservationCode').val();
    const uri = '';
    const dataObject = {resrvationCode : reservation_code};
    $.post({
        url : uri,
        data: JSON.stringify(dataObject),
        headers: {
            'Content-Type': 'application/json'
        },
        success: function(response){
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
    const target = this.dataset.bsTarget;
    $(target).modal('hide');
});

//////SEND MESSAGE////////////////////
// OPEN MODAL///////////////
$(document).on('click','.sendMessage',function(){
    const reservationCode = this.dataset.reservationCode;
    $('#sendMsgReservationCode').val(reservationCode);
    $('#sendMsgModal').modal('show');
});

});