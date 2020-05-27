$(document).ready(() => {
    let counter = 1;
    $('#button-back').addClass('hidden');
    $('#form-' + counter).addClass('viewed');

    $('#button-next').click(() => {
        $('#form-' + counter).removeClass('viewed')
        counter++
        if (counter > 1 ){
        $('#button-back').removeClass('hidden');
    }
        console.log(counter)
        $('#form-' + counter).addClass('viewed')
        
    })

    $('#button-back').click(() => {
        $('#form-' + counter).removeClass('viewed')
        counter--
        if (counter == 1){
                $('#button-back').addClass('hidden');
            }
        $('#form-' + counter).addClass('viewed')
        console.log(counter)
    })

    $("#firstNameInput").change(() => {
        console.log("changed")
        let firstNameStr = $("#firstNameInput").val;
        if (firstNameStr == "thingy"){
        }

    })
});
