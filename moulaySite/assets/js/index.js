
/////////////////////////////////

window.scrollTo(0, 0);
var slideIndex = 1;
// showDivs(slideIndex);

function plusDivs(element, n) {
    showDivs(slideIndex += n, n);
}

function showDivs(n, t) {
    var i;
    var x = document.getElementsByClassName("beeSlides");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    if (t > 0) {
        x[slideIndex - 1].classList.remove("beeslide-move-left");
        x[slideIndex - 1].classList.add("beeslide-move-right");


    } else {
        x[slideIndex - 1].classList.remove("beeslide-move-right");
        x[slideIndex - 1].classList.add("beeslide-move-left");
    }
    x[slideIndex - 1].style.display = "block";
}

function introEnd() {
    $('#introDiv').animate({
        opacity: 0,
    }, 2200, function () {
        $('.intro-container').addClass('d-none');
        // $(this).addClass('d-none');

    });

    $('#logo-div').animate({
        height: '124px',
        top: '62px',
        // width: '150px',
    }, 2500,"linear", function () {
            // $('.intro-container').addClass('d-none');
        // $('#logo-div').hide();
        //$('#navbar-logo').show();
        $('#nav-bar').removeClass('hidden-bar');
    });

    // $('#nav-bar').animate({
    //     opacity: 1,
    // }, 2500, function () {
    //     //  $('#logo-div').hide();
    //     // $('#navbar-logo').show();
    // });

    $('#slider').animate({
        opacity: 1,
    }, 3000, function () {
        // Animation complete.
        showSlides();
        $(this).css('z-index', '2');
        $('#content-div').removeClass('d-none');
        $('#navbar-logo').show();
        $('#logo-div').hide();
        $('#top-title').animate({
            opacity: 1,
            bottom: '0px',
        },1000,function(){
            $('#title-line').show().animate({ width:'550px',},500,function(){
                $('#lower-title').show().animate({ opacity:1,top: '20px'},1500);
            })    
        });
        // showSlides();
    });
    window.onscroll = function(e) {
        
        if ($(document).scrollTop()>550) {
            $('#nav-bar').addClass('hidden-logo');
            if (this.oldScroll > this.scrollY) {
                $('#nav-bar').removeClass('hidden-bar');
        }else{
            $('#nav-bar').addClass('hidden-bar');
        }
        } else{
            $('#nav-bar').removeClass('hidden-logo');
        }
        
        this.oldScroll = this.scrollY;
    };
    function animateTitle(){
        $('#lower-title').animate({ opacity:0,top: '100px'},500);
        $('#title-line').animate({ width:'0px',},500,function(){$('#title-line').hide();})
        $('#top-title').animate({opacity: 0, bottom: '100px',},500, function(){
            $('#top-title').animate({
                opacity: 1,
                bottom: '0px',
            },1000,function(){
                $('#title-line').show().animate({ width:'550px',},500,function(){
                    $('#lower-title').animate({ opacity:1,top: '20px'},1500);
                })    
            });
        });
        
    }
    let slidePos = 0;

function showSlides() {
    if (slidePos!=0) {
        animateTitle();    
    }
    
    let i;
    let slides = document.getElementsByClassName("beeSlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slidePos++;
    if (slidePos > slides.length) { slidePos = 1 }
    console.log(slides[slidePos - 1]);
    slides[slidePos - 1].style.display = "block";
    setTimeout(showSlides, 10000);
}

};
/////////////////////////////////////////////////////////////////////////ON READY////////////////////////////////////////////////
$(document).ready(function () {
    
    
    $(document).on('change', '#roomCount', function () {
        $(this).val(chechInput(this));
        const nbElements = $('.chamber-type').length;
        const count = $(this).val();
        for (let index = 1; index <= count; index++) {
            let tmpIndex = "#chamberType"+index;
            if (!$(tmpIndex).length) {
                var element = '<div class="form-group mb-3 chamber-type" id="chamberType'+index+'"><span class="bp-form-label">Type de chambre '+index+'</span><select class="form-input"><option value="1">Simple</option><option value="2">Suite</option></select></div>';
            $('#chamber-type-div').append(element);
            }
        }
        if (count<nbElements) {
            for (let index = parseInt(count)+1; index <= nbElements; index++) {
            let tmpIndex = "#chamberType"+index;
            if ($(tmpIndex).length) {
                $(tmpIndex).remove();
            }
        }}
    });

    $(document).on('click', '.increment-input', function () {
        const max = $(this).prev('input').attr('max');
        let i = $(this).prev('input').val();
        if (max!=undefined) {
            if (parseInt(i)<parseInt(max)) {
                i++;
            $(this).prev('input').val(i).trigger('change');   
        }
        }else{
            i++;
            $(this).prev('input').val(i).trigger('change');   
        }
        
    });
    $(document).on('click', '.decrement-input', function () {
        const min = $(this).next('input').attr('min');
        let i = $(this).next('input').val();
        if (parseInt(i)>parseInt(min)) {
            i--;
            $(this).next('input').val(i).trigger('change');
        }
        
    });

    $(document).on('change','.input-number',function(){
        const min = $(this).attr('min');
        const max = $(this).attr('max');
        const val = $(this).val();
        if (parseInt(val)<min) {
            $(this).val(min);
        }
        if (parseInt(val)>max) {
            $(this).val(max);
        }
    });
    function chechInput(element) {
        const min = $(element).attr('min');
        const max = $(element).attr('max');
        const val = $(element).val();
        if (parseInt(val)<min) {
            return min;
        }
        if (parseInt(val)>max) {
            return max;
        }
        return val;
    }

    $("#modal").iziModal({
        background: 'null',
        transitionIn: 'fadeIn',
        transitionOut: 'fadeOut',
        radius: 0,
    });

    $(document).on('click', '.trigger', function (event) {
        event.preventDefault();
        $('#modal').iziModal('setWidth', '1000px');
        $('#modal').iziModal('setZindex', 99999);
        // $('#modal').iziModal('open', { zindex: 99999 });
        $('#modal').iziModal('open');
    });
    $(document).on('click', '#closeReservation', function () {
        $('#modal').iziModal('close');
    })

    $("#modal2").iziModal({
        background: 'null',
        transitionIn: 'fadeIn',
        transitionOut: 'fadeOut',
        radius: 0,
    });

    $(document).on('click', '.btn-devis', function (event) {
        event.preventDefault();
        $('#modal').iziModal('close');
        $('#modal2').iziModal('setWidth', '1000px');
        $('#modal2').iziModal('setZindex', 99999);
        // $('#modal').iziModal('open', { zindex: 99999 });
        $('#modal2').iziModal('open');
    });

    $("#modal3").iziModal({
        background: 'null',
        transitionIn: 'fadeIn',
        transitionOut: 'fadeOut',
        radius: 0,
    });

    $(document).on('click', '.btn-confirm-devis', function (event) {
        event.preventDefault();
        $('#modal2').iziModal('close');
        $('#modal3').iziModal('setWidth', '1000px');
        $('#modal3').iziModal('setZindex', 99999);
        // $('#modal').iziModal('open', { zindex: 99999 });
        $('#modal3').iziModal('open');
    });

    ////////////////////////SUBMIT RESERVATION FORM//////////////////////////////
    //add click listner
    $(document).on('click','#closeReservation',function(){
        //define url
        const url = '/reservation/submit';
        //get data from form by id
        let form = $('#reservation-form')[0];
        //create formdata with reservation inputs
        const data = new FormData(form);
        $.ajax({
            type: "GET",
            url: url,
            data: data,
            success: function (result) {// In case of request success
                if (result['status'] == 'success') {
                } else {
                }
            },
            error: function (e) {// In case of request failure
                console.log(e);
            }
        });
    });
///////////////////////////////////////////////////////////////    
});
//AUTOMATIC SLIDE SHOW


