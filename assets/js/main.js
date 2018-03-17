"use strict";
jQuery(document).ready(function ($) {

    //for Preloader

    $(window).load(function () {
        $("#loading").fadeOut(500);
    });


    /*---------------------------------------------*
     * Mobile menu
     ---------------------------------------------*/
    $('#navbar-menu').find('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top - 80)
                }, 1000);
                if ($('.navbar-toggle').css('display') != 'none') {
                    $(this).parents('.container').find(".navbar-toggle").trigger("click");
                }
                return false;
            }
        }
    });



    /*---------------------------------------------*
     * WOW
     ---------------------------------------------*/

    var wow = new WOW({
        mobile: false // trigger animations on mobile devices (default is true)
    });
    wow.init();

    // magnificPopup

    $('.popup-img').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $('.video-link').magnificPopup({
        type: 'iframe'
    });



    // slick slider active Home Page Tow
    $(".hello_slid").slick({
        dots: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: "<i class='icon icon-chevron-left nextprevleft'></i>",
        nextArrow: "<i class='icon icon-chevron-right nextprevright'></i>",
        autoplay: true,
        autoplaySpeed: 2000
    });



    $(".business_items").slick({
        dots: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: "<i class='icon icon-chevron-left nextprevleft'></i>",
        nextArrow: "<i class='icon icon-chevron-right nextprevright'></i>",
        autoplay: true,
        autoplaySpeed: 2000
    });




    //---------------------------------------------
    // Scroll Up 
    //---------------------------------------------

    $('.scrollup').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });
    //End

});

$(document).ready(function () {
    $('#contact_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            first_name: {
                validators: {
                    stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Bạn chưa nhập tên'
                    }
                }
            },
            telephone: {
                validators: {
                    notEmpty: {
                        message: 'Bạn chưa nhập số di động'
                    }
                }
            },
            email: {
                validators: {
                    emailAddress: {
                        message: 'E-mail sai định dạng'
                    }
                }
            },
            from: {
                validators: {
                    notEmpty: {
                        message: 'Hãy nhập điểm xuất phát'
                    }
                }
            },
            to: {
                validators: {
                    notEmpty: {
                        message: 'Hãy nhập đến đến của hành trình'
                    }
                }
            },
            start: {
                validators: {

                    notEmpty: {
                        message: 'Hãy nhập thời gian'
                    }
                }
            },
            date: {
                validators: {
                    notEmpty: {
                        message: 'Hãy nhập thời gian'
                    }
                }
            },
            // state: {
            //     validators: {
            //         notEmpty: {
            //             message: 'Bạn chưa chọn xe'
            //         }
            //     }
            // },
            // zip: {
            //     validators: {
            //         notEmpty: {
            //             message: 'Please supply your zip code'
            //         },
            //         zipCode: {
            //             country: 'US',
            //             message: 'Please supply a vaild zip code'
            //         }
            //     }
            // },
            // comment: {
            //     validators: {
            //         stringLength: {
            //             min: 10,
            //             max: 200,
            //             message: 'Please enter at least 10 characters and no more than 200'
            //         },
            //         notEmpty: {
            //             message: 'Please supply a description of your project'
            //         }
            //     }
            // }
        }
    })
        .on('success.form.bv', function (e) {
            var $form = $(e.target);
            var bv = $form.data('bootstrapValidator');

            $.post($form.attr('action'), $form.serialize())
                .success(function (msg) {
                    // great success
                })
                .fail(function (xhr, status, error) {
                    bv.updateStatus('email', 'INVALID', 'callback');
                })
            // $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
            // $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            // e.preventDefault();

            // Get the form instance
            // var $form = $(e.target);

            // Get the BootstrapValidator instance
            // var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            // $.post(
            //     $form.attr('action'),
            //     $form.serialize(),
            //     function (result) {
            //         console.log(result);
            //     },
            //     'json'
            // );
        });
});
$(document).ready(function () {
    $("#contact_form").ajaxSubmit({ url: 'mail_handler.php', type: 'post' })
});

$(document).ready(function () {
    var date_input = $('input[name="date"]'); //our date input has the name "date"
    var container = $('.bootstrap-iso form').length > 0 ? $('.bootstrap-iso form').parent() : "body";
    date_input.datepicker({
        format: 'dd/mm/yyyy',
        container: container,
        todayHighlight: true,
        autoclose: true,
        orientation: "bottom auto",
    })
})
$(document).ready(function () {
    var date_start = $('input[name="start"]'); //our date input has the name "date"
    var container_start = $('.bootstrap-iso form').length > 0 ? $('.bootstrap-iso form').parent() : "body";
    date_start.datepicker({
        format: 'dd/mm/yyyy',
        container: container_start,
        todayHighlight: true,
        autoclose: true,
        orientation: "bottom auto",
    })
})




