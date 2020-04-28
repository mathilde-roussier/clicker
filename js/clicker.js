$(document).ready(function () {

    var nam = 'monstre';
    var monstre = new Monstre("20");
    var moi = new User();

    $('#monster_life').attr("max", monstre.getLife()).attr("value", monstre.getLife());

    $('#monstre').html(nam);

    $('#monstre').click(function () {
        monstre.attaque();
        $('#monster_life').attr("value", monstre.getNewLife());
        if (monstre.getNewLife() <= 0) {
            $('#monster_life').attr("value", monstre.getLife());
            monstre.setNewLife();
            $('#point').html(moi.setPoint());
        }
    })

})