
/////////////////////////////////
//disableScroll();
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
        $('#navbar-logo').hide();
        $('.intro-container').addClass('d-none');
        // $(this).addClass('d-none');

    });

    $('#logo-div').animate({
        height: '90px',
        top: '45px',
        // width: '150px',
    }, 2500, "linear", function () {
        // $('.intro-container').addClass('d-none');
        // $('#logo-div').hide();
        //$('#navbar-logo').show();
        $('#reservation-button-video').hide();
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
        }, 1000, function () {
            $('#title-line').show().animate({ width: '550px', }, 500, function () {
                $('#lower-title').show().animate({ opacity: 1, top: '50px' }, 1500);
                enableScroll();
            })
        });
        // showSlides();
    });
    window.onscroll = function (e) {
        console.log($(document).scrollTop());
        if ($(document).scrollTop() > 550) {
            $('#nav-bar').addClass('hidden-logo');
            if (this.oldScroll > this.scrollY) {
                $('#nav-bar').removeClass('hidden-bar');
            } else {
                $('#nav-bar').addClass('hidden-bar');
            }
        } else {
            $('#nav-bar').removeClass('hidden-logo');
        }
        this.oldScroll = this.scrollY;
    };
    function animateTitle() {
        $('#lower-title').animate({ opacity: 0, top: '100px' }, 500);
        $('#title-line').animate({ width: '0px', }, 500, function () { $('#title-line').hide(); })
        $('#top-title').animate({ opacity: 0, bottom: '100px', }, 500, function () {
            $('#top-title').animate({
                opacity: 1,
                bottom: '0px',
            }, 1000, function () {
                $('#title-line').show().animate({ width: '550px', }, 500, function () {
                    $('#lower-title').animate({ opacity: 1, top: '20px' }, 1500);
                })
            });
        });

    }
    let slidePos = 0;

    function showSlides() {
        if (slidePos != 0) {
            animateTitle();
        }

        let i;
        let slides = document.getElementsByClassName("beeSlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slidePos++;
        if (slidePos > slides.length) { slidePos = 1 }
        // console.log(slides[slidePos - 1]);
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
            let tmpIndex = "#chamberType" + index;
            if (!$(tmpIndex).length) {
                var element = '<div class="form-group mb-3 chamber-type" id="chamberType' + index + '"><span class="bp-form-label">Type de chambre ' + index + '</span><select class="form-input"><option value="1">Simple</option><option value="2">Suite</option></select></div>';
                $('#chamber-type-div').append(element);
            }
        }
        if (count < nbElements) {
            for (let index = parseInt(count) + 1; index <= nbElements; index++) {
                let tmpIndex = "#chamberType" + index;
                if ($(tmpIndex).length) {
                    $(tmpIndex).remove();
                }
            }
        }
    });

    $(document).on('click', '.increment-input', function () {
        const max = $(this).prev('input').attr('max');
        let i = $(this).prev('input').val();
        if (max != undefined) {
            if (parseInt(i) < parseInt(max)) {
                i++;
                $(this).prev('input').val(i).trigger('change');
            }
        } else {
            i++;
            $(this).prev('input').val(i).trigger('change');
        }

    });
    $(document).on('click', '.decrement-input', function () {
        const min = $(this).next('input').attr('min');
        let i = $(this).next('input').val();
        if (parseInt(i) > parseInt(min)) {
            i--;
            $(this).next('input').val(i).trigger('change');
        }

    });

    $(document).on('change', '.input-number', function () {
        const min = $(this).attr('min');
        const max = $(this).attr('max');
        const val = $(this).val();
        if (parseInt(val) < min) {
            $(this).val(min);
        }
        if (parseInt(val) > max) {
            $(this).val(max);
        }
    });
    function chechInput(element) {
        const min = $(element).attr('min');
        const max = $(element).attr('max');
        const val = $(element).val();
        if (parseInt(val) < min) {
            return min;
        }
        if (parseInt(val) > max) {
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
        document.getElementById("reservation-form").reset();
        $('#modal3').iziModal('setWidth', '1000px');
        $('#modal3').iziModal('setZindex', 99999);
        // $('#modal').iziModal('open', { zindex: 99999 });
        $('#modal3').iziModal('open');
    });
    $(document).on('click', '#closeReservation', function () {
        $('#modal3').iziModal('close');
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
    $("#modal4").iziModal({
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
    $(document).on('click', '#submitReservation', function () {
        const chechInInput = document.getElementById("checkInDate");
        const checkInErrorSpan = chechInInput.nextElementSibling;
        const chechOutInput = document.getElementById("checkOutDate");
        const checkOutErrorSpan = chechOutInput.nextElementSibling;
        let c1 = false;
        let c2 = false;
        if (!chechInInput.validity.valid) {
            checkInErrorSpan.style.display = "initial";
            c1 = false;
            // return;
        } else {
            checkInErrorSpan.style.display = "none";
            c1 = true;
        }
        if (!chechOutInput.validity.valid) {
            checkOutErrorSpan.style.display = "initial";
            c2 = false;
            // return;
        } else {
            checkOutErrorSpan.style.display = "none";
            c2 = true;
        }
        if (!(c1 && c2)) {
            return;
        }
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
    $(document).on('click', '#addUserDocument', function () {
        const element = $('#userDocument').clone();
        $(element).find("input").val("");
        $(element).find('.removeDocument').removeClass('d-none');
        $(element).appendTo($('#userDocumentDiv'));
        // $('#userDocument').clone().appendTo($('#userDocumentDiv')).find("input").val("").find('.removeDocument').removeClass('d-none');
    });

    $(document).on('click', '.removeDocument', function () {
        if ($('.userDocument').length > 1) {
            $(this).parent().parent().parent().remove();
        }
    });

    $(document).on('click', '#submitForm2', function () {
        //validate inputs in form
        var c1 = false;
        var c2 = false;
        var c3 = false;
        var c4 = false;
        const clientFirstNameInput = document.getElementById("clientFirstName");
        const clientLastNameInput = document.getElementById("clientLastName");
        const clientEmailInput = document.getElementById("clientEmail");
        const clientPhoneInput = document.getElementById("clientPhoneNumber");
        if (!clientFirstNameInput.validity.valid) {
            c1 = false;
            clientFirstNameInput.nextElementSibling.style.display = "initial";
        } else {
            c1 = true;
            clientFirstNameInput.nextElementSibling.style.display = "none";
        }

        if (!clientLastNameInput.validity.valid) {
            c2 = false;
            clientLastNameInput.nextElementSibling.style.display = "initial";
        } else {
            c2 = true;
            clientLastNameInput.nextElementSibling.style.display = "none";
        }

        if (!clientEmailInput.validity.valid) {
            c3 = false;
            clientEmailInput.nextElementSibling.style.display = "initial";
        } else {
            c3 = true;
            clientEmailInput.nextElementSibling.style.display = "none";
        }

        if (!clientPhoneInput.validity.valid) {
            c4 = false;
            clientPhoneInput.nextElementSibling.style.display = "initial";
        } else {
            c4 = true;
            clientPhoneInput.nextElementSibling.style.display = "none";
        }
        if (!(c1 && c2 && (c3 || c4))) {
            return;
        }
        clientEmailInput.nextElementSibling.style.display = "none";
        clientPhoneInput.nextElementSibling.style.display = "none";
        //////////////////////////////////////////////////////////////////////////////////////////////
        const formElement = document.getElementById('form2');
        const data = new FormData(formElement);
        const dataArray = [...data.entries()];

        const dataObject = {};

        for (let pair of dataArray) {
            let key = pair[0];
            let value = pair[1];

            if (key == 'roomClasses') {
                if (!dataObject[key]) {
                    dataObject[key] = [];
                }

                dataObject[key].push(value);
            }
            else {
                dataObject[key] = value;
            }
        }

        const uri = 'createReservation';
        $.ajax({
            url: uri,
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            data: JSON.stringify(dataObject),
            success: function (response) {
                const responseData = response.json();
                const responseObject = JSON.parse(JSON.stringify(responseData));
                formElement.innerHTML = responseObject.message;
            }
        });
    });

    function generatePDF() {
        const page = document.getElementById('pdfBody');
        var opt = {
            margin: 4,
            filename: 'devis_final.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 1 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' }
        };
        // Choose the element that our invoice is rendered in.
        html2pdf().set(opt).from(page).save();
    };
    $(document).on('click', '.generatePdf', function () {
        generatePDF();
    });

});
//AUTOMATIC SLIDE SHOW

function disableScroll() {
    // Get the current page scroll position
    scrollTop =
        window.scrollY || document.documentElement.scrollTop;
    scrollLeft =
        window.scrollX || document.documentElement.scrollLeft,

        // if any scroll is attempted,
        // set this to the previous value
        window.onscroll = function () {
            window.scrollTo(scrollLeft, scrollTop);
        };
}

function enableScroll() {
    window.onscroll = function () { };
}


/*var $grid = $('.grid-masonry').masonry({
    // options
    itemSelector: '.grid-masonry-item',
  });

  $grid.imagesLoaded().progress( function() {
    $grid.masonry('layout');
  });
*/
/*$('#containerRosaliss').imagesLoaded( function() {
    $('.grid-masonry').masonry({
        itemSelector: '.grid-masonry-item'
    });
}); */

/*$('#containerRosaliss').imagesLoaded().done(
    $('.grid-masonry').masonry({
        itemSelector: '.grid-masonry-item'
    }));*/

/*Promise.all(Array.from(document.images).filter(img => !img.complete).map(img => new Promise(resolve => { img.onload = img.onerror = resolve; }))).then(() => { var elem = document.querySelector('.grid'); var msnry = new Masonry( '.grid-masonry', { itemSelector: '.grid-masonry-item', }) });*/


//SET TODAY DATE AS MIN TO INPUT/////////////////////////////////////////////////////////////////
var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();
//FORMAT THE DATE
if (dd < 10) {
    dd = '0' + dd;
}
if (mm < 10) {
    mm = '0' + mm;
}
today = yyyy + '-' + mm + '-' + dd;
document.getElementById("checkInDate").setAttribute("min", today);
dd = tomorrow.getDate();
mm = tomorrow.getMonth() + 1; //January is 0!
yyyy = tomorrow.getFullYear();
//FORMAT THE DATE
if (dd < 10) {
    dd = '0' + dd;
}
if (mm < 10) {
    mm = '0' + mm;
}
tomorrow = yyyy + '-' + mm + '-' + dd;
document.getElementById("checkOutDate").setAttribute("min", tomorrow);
/////////////////////////////////////////////////////////////////////////////////////////////////
// validating date input
function verifDate(element) {
    var value = element.value;
    // User date
    const inputDate = new Date(value);
    // Current date
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    // Compare the user date with the current date
    if (inputDate < currentDate) {
        element.style.backgroundColor = "rgb(241 154 158)";
        // document.getElementById("submitResrvation").disabled = true;
    } else {
        element.style.backgroundColor = "rgb(154 241 167)";
        // document.getElementById("submitResrvation").disabled = false;
    }
}
function verifDateCheckout(element) {
    var value = element.value;
    var firstValue = document.getElementById("checkInDate");
    // User date
    const inputDate = new Date(value);
    // First date
    const firstDate = new Date();
    // Compare the user date with the current date
    if (inputDate <= firstDate) {
        element.style.backgroundColor = "rgb(241 154 158)";
        // document.getElementById("submitResrvation").disabled = true;
    } else {
        element.style.backgroundColor = "rgb(154 241 167)";
        // document.getElementById("submitResrvation").disabled = false;
    }
}
// const clientPhoneNumber = document.getElementById("clientPhoneNumber");
// console.log(clientPhoneNumber);
// clientPhoneNumber.addEventListener("input", (event) => {
//     console.log("yes");
//   if (clientPhoneNumber.validity.typeMismatch) {
//     clientPhoneNumber.setCustomValidity("I am expecting an clientPhoneNumber address!");
//   } else {
//     clientPhoneNumber.setCustomValidity("");
//   }
// });
function resetReservationForm() {
    // const chechInInput = document.getElementById("checkInDate");
    const checkInErrorSpan = document.getElementById("checkInDate").nextElementSibling;
    // const chechOutInput = document.getElementById("checkOutDate");
    const checkOutErrorSpan = document.getElementById("checkOutDate").nextElementSibling;
    checkInErrorSpan.style.display = "none";
    checkOutErrorSpan.style.display = "none";
}