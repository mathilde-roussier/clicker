$(document).ready(function () {

    $('#monstre').html('monstre1');

    let point = 0;
    let life = 20;

    $('#monstre').click(function () {
        point = point + 1;
        life = life - 1;
        $('#point').html(point);
        if (life <= 0) {
            $('#monstre').html('dead');
        }
    })

})
