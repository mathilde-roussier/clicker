$(document).ready(function () {

    var nam = 'monstre';
    const user = new User();
    const monstre = new Monstre("10");

    $('#monster_life').attr("max", monstre.getLife()).attr("value", monstre.getLife());

    $('#monstre').html(nam);

    dps(user, monstre);

    $('#monstre').click(function () {
        monstre.attaque(user.getDegat());
        $('#monster_life').attr("value", monstre.getNewLife());
        $('#point').html(user.setPoint(user.getPnt()));
        if (monstre.getNewLife() <= 0) {
            $('#monster_life').attr("value", monstre.getLife());
            monstre.MajNewLife();
            $('#point').html(user.setPoint(monstre.getMort()));
            monstre.setnb_mort();
            if (monstre.getnb_mort() % 10 == 0) {
                monstre.MajLife(2);
                monstre.MajNewLife();
                $('#monster_life').attr("max", monstre.getLife()).attr("value", monstre.getLife());
            }
        }
    })

    setInterval(function () { dps(user, monstre); }, 1000);

})

function dps(user, monstre) {
    var life_actuel = $('#monster_life').attr('value');
    if (life_actuel <= 0) {
        life_actuel = monstre.getLife();
        $('#point').html(user.setPoint(monstre.getMort()));
        monstre.setnb_mort();
        if (monstre.getnb_mort() % 10 == 0) {
            monstre.MajLife(2);
            life_actuel = monstre.MajNewLife();
            $('#monster_life').attr("max", monstre.getLife()).attr("value", monstre.getLife());
        }
    }
    monstre.setDpsNewLife(life_actuel, user.getDegatDPS());
    $('#monster_life').attr('value', monstre.getNewLife());
}