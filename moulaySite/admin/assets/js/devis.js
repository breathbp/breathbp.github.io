$(document).ready(function () {
    $(document).on('click', '.addLigne', function () {
        calculate();
        const number = $('.invoice-items').length
        for (let index = 1; index <= number + 1; index++) {
            const rowId = '#item_' + index;
            if (!$(rowId).length) {
                let line = '<tr class="invoice-items" id="item_' + index + '">'
                line += '<td><a href="">' + index + '</a></td>'
                line += '<td><textarea class="w-100" ></textarea></td>'
                line += '<td><input class="w-100 lineInput" type="text"></td>'
                line += '<td><input class="w-100 lineInput" type="text" name="quantity[]" value="0"></td>'
                line += '<td><input class="w-100 lineInput" type="text" name="unitedPrice[]" value="0"></td>'
                line += '<td><input class="w-100 lineInput" type="text" name="discount[]" value="0"></td>'
                line += '<td><input class="w-100 lineInput" type="text" name="priceAfterDiscount[]" value="0"></td>'
                line += '<td><input class="w-100 lineInput sTotal" type="text" name="sTotal[]" value="0"></td>'
                line += '<td class="d-flex" style="gap: 5px;">'
                // line += '<button class="btn btn-sm btn-primary addLigne" title="Ajouter une ligne">+</button>'
                line += '<button class="btn btn-danger deleteLigne" title="Supprimer cette ligne">Supprimer</button>'
                line += '</td></tr>'
                $('#devisTableBody').append(line);
            }

        }
    });
    $(document).on('click', '.deleteLigne', function () {
        $(this).parent().parent().remove();
        calculate();
    });

    function calculate(){
        let sum = 0;
        $('.sTotal').each(function(index, element){
            sum+= parseInt($(element).val());
        });
        $('#mst').html(sum + ' DA');
        const totalDiscount = $("#totalDiscount").val();
        const totalAfterDiscount = parseFloat(sum) - parseFloat(totalDiscount);
        $('#totalAfterDiscount').html(totalAfterDiscount + ' DA');
        const mTva = parseFloat($("#tva").val()) * totalAfterDiscount /100;
        $("#mTva").html(mTva + ' DA');
        const mTtc = mTva + totalAfterDiscount;
        $("#mTtc").html(mTtc + ' DA');

    };
    $(document).on('keyup change',".lineInput",function(){
        calculateLine($(this).parent().parent());
    });
    $(document).on('keyup change',"#totalDiscount",function(){
    calculate();
    });
    $(document).on('keyup change',"#tva",function(){
        calculate();
        });
    function calculateLine(element){
        const qte = $(element).find("input[name='quantity[]'").val();
        const pu = $(element).find(("input[name='unitedPrice[]'")).val();
        const remise = $(element).find(("input[name='discount[]'")).val();
        const priceAfterDiscount = parseFloat(pu) - parseFloat(remise);
        const sTotal = priceAfterDiscount * parseFloat(qte);
        $(element).find("input[name='priceAfterDiscount[]'").val(priceAfterDiscount);
        $(element).find("input[name='sTotal[]'").val(sTotal);
        calculate()
        // const pu = $(this).find();
    }
    $(document).on('click','.submitForm',function(){
        const formElement = document.getElementById('tableForm');

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
});