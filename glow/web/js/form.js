// Input Lock
$('textarea').blur(function () {
    $('#hire textarea').each(function () {
        $this = $(this);
        if (this.value != '') {
            $this.addClass('focused');
            $('textarea + label + span').css({
                'opacity': 1
            });
        } else {
            $this.removeClass('focused');
            $('textarea + label + span').css({
                'opacity': 0
            });
        }
    });
});

$('#hire .field:first-child input').blur(function () {
    $('#hire .field:first-child input').each(function () {
        $this = $(this);
        if (this.value != '') {
            $this.addClass('focused');
            $('.field:first-child input + label + span').css({
                'opacity': 1
            });
        } else {
            $this.removeClass('focused');
            $('.field:first-child input + label + span').css({
                'opacity': 0
            });
        }
    });
});

$('#hire .field:nth-child(2) input').blur(function () {
    $('#hire .field:nth-child(2) input').each(function () {
        $this = $(this);
        if (this.value != '') {
            $this.addClass('focused');
            $('.field:nth-child(2) input + label + span').css({
                'opacity': 1
            });
        } else {
            $this.removeClass('focused');
            $('.field:nth-child(2) input + label + span').css({
                'opacity': 0
            });
        }
    });
});
var btnAbrir4 = document.getElementById('btnabrir4'),
    formoverlay = document.getElementById('form-overlay'),
    formbody= document.getElementById('form-body'),
    btnCerrar4 = document.getElementById('btn-cerrar4');

btnAbrir4.addEventListener('click', function () {
    formoverlay.classList.add('active');
    formbody.classList.add('active');
})

btnCerrar4.addEventListener('click', function () {
    formoverlay.classList.remove('active');
    formbody.classList.remove('active');
})