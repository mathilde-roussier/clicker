$(document).ready(function () {

    var nam = 'monstre';
    const monstre = new Monstre("20");
    const user = new User();

    $('#monster_life').attr("max", monstre.getLife()).attr("value", monstre.getLife());

    $('#monstre').html(nam);

    dps(user, monstre);

    $('#monstre').click(function () {
        monstre.attaque(user.getDegat());
        $('#monster_life').attr("value", monstre.getNewLife());
        if (monstre.getNewLife() <= 0) {
            $('#monster_life').attr("value", monstre.getLife());
            monstre.MajNewLife();
            $('#point').html(user.setPoint(monstre.getMort()));
        }
        $('#point').html(user.setPoint(user.getPnt()));
    })

    setInterval(function () { dps(user, monstre); }, 500);

})

function dps(user, monstre) {
    var life_actuel = $('#monster_life').attr('value');
    if (life_actuel <= 0) {
        life_actuel = monstre.getLife(); 
        $('#point').html(user.setPoint(monstre.getMort()));
    }
    monstre.setDpsNewLife(life_actuel, user.getDegatDPS());
    $('#monster_life').attr('value', monstre.getNewLife());
}