$(document).ready(() => {
    let counter = 1;
    $('#form-' + counter).addClass('viewed');

    $('#button-next').click(() => {
        $('#form-' + counter).removeClass('viewed')
        counter++,
        console.log(counter)
        $('#form-' + counter).addClass('viewed')
    })

    $('#button-back').click(() => {
        $('#form-' + counter).removeClass('viewed')
        counter--,

        $('#form-' + counter).addClass('viewed')
        console.log(counter)
        
    })
});