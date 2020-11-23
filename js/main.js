$(function () {
    new WOW().init();
    document.getElementById("year").innerHTML = new Date().getFullYear();

    compter();
})



function compter() {
    $('.count').each(function () {
        var $this = $(this);
        jQuery({
            Counter: 0
        }).animate({
            Counter: $this.text()
        }, {
            duration: 1000,
            easing: 'swing',
            step: function () {
                $this.text(Math.ceil(this.Counter));
            }
        });
    });
}
