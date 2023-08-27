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
                line += '<td><input class="w-100 lineInput" type="text" name="priceBeforeDiscount[]" value="0"></td>'
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
        $('#mst').html(sum + ' DA')
    };
    $(document).on('keyup change',".lineInput",function(){
        console.log('input');
        calculateLine($(this).parent().parent());
    })
    function calculateLine(element){
        const qte = $(element).find("input[name='quantity[]'").val();
        const pu = $(element).find(("input[name='unitedPrice[]'")).val();
        const remise = $(element).find(("input[name='discount[]'")).val();
        const priceBeforeDiscount = parseFloat(qte) * parseFloat(pu);
        const sTotal = priceBeforeDiscount - parseFloat(remise);
        $(element).find("input[name='priceBeforeDiscount[]'").val(priceBeforeDiscount);
        $(element).find("input[name='sTotal[]'").val(sTotal);
        calculate()
        // const pu = $(this).find();
    }
});