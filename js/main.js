var arrLang = {
    'en': {
        'about': 'About Us',
        'portfolio': 'Portfolio',
        'contacts': 'Contacts',
        'info': 'Info',
        'login1': 'Login',
        'username1':'Username',
        'password1':'Password',
        'rememberme1':'Remember me',
        'forgotpass1':'Forgot password?',
        'notacc1':'Dont have account?',
        'reg1':'Register',
        'callback1':'Support'
    },
    'ru': {
        'about': 'О нас',
        'portfolio': 'Портфолио',
        'contacts': 'Контакты',
        'info': 'Инфо',
        'login1': 'Вход',
        'username1':'Имя пользователя',
        'password1':'Пароль',
        'rememberme1':'Запомнить меня',
        'forgotpass1':'Забыли пароль?',
        'notacc1':'Нет аккаунта?',
        'reg1':'Зарегестрируйся',
        'callback1':'Поддержка'
    }
}

$('.translate').click(function() {
    var lang = $(this).attr('id');

    $('.lang').each(function(index, item) {
        $(this).text(arrLang[lang][$(this).attr('key')]);

        if ($(this).is("input") || $(this).is("textarea")) {
            $(this).attr('placeholder', arrLang[lang][$(this).attr('key')]);
        }
    });
});

document.getElementById('regauth').addEventListener('submit', function(e) {
    e.preventDefault();

    var user = document.getElementById('user').value;
    var password = document.getElementById('password').value;

    // Асинхронная проверка
    setTimeout(function() {
        if (user === 'admin' && password === 'admin') {
            new Toast({
                title: false,
                text: 'Вы успешно вошли в аккаунт',
                theme: 'success',
                autohide: true,
                interval: 3000
            });
            window.location.href = './mainpage.html';
        } else {
            new Toast({
                title: false,
                text: 'Неверные данные!',
                theme: 'danger',
                autohide: true,
                interval: 3000
            });
        }
    }, 500);
});

function dropdown() {
    document.getElementById("Dropdown").classList.toggle("show");
    var Dropdownbutton = document.querySelector('.dropbtn');
    if(Dropdownbutton.style.listStyleType.includes('disclosure-closed')) {
        Dropdownbutton.style.listStyleType = 'disclosure-open';
    }
    else Dropdownbutton.style.listStyleType = 'disclosure-closed';
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                document.querySelector('.dropbtn').style.listStyleType = 'disclosure-closed';
                openDropdown.classList.remove('show');
            }
        }
    }
}

