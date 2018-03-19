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

    // var date_start = $('input[name="startDate"]'); //our date input has the name "date"
    // var container_start = $('.bootstrap-iso form').length > 0 ? $('.bootstrap-iso form').parent() : "body";
    // date_start.datepicker({
    //     format: 'dd/mm/yyyy',
    //     container: container_start,
    //     todayHighlight: true,
    //     autoclose: true,
    //     orientation: "bottom auto",
    // })


    // var date_end = $('input[name="endDate"]'); //our date input has the name "date"
    // var container = $('.bootstrap-iso form').length > 0 ? $('.bootstrap-iso form').parent() : "body";
    // date_end.datepicker({
    //     format: 'dd/mm/yyyy',
    //     container: container,
    //     todayHighlight: true,
    //     autoclose: true,
    //     orientation: "bottom auto",
    // })

    $('#startDatePicker')
        .datepicker({
            format: 'dd/mm/yyyy',
            todayHighlight: true,
            orientation: "bottom auto",
        })
        .on('changeDate', function (e) {
            // Revalidate the start date field
            $('#contact_form').formValidation('revalidateField', 'startDate');
        });

    $('#endDatePicker')
        .datepicker({
            format: 'dd/mm/yyyy',
            todayHighlight: true,
            orientation: "bottom auto",
        })
        .on('changeDate', function (e) {
            $('#contact_form').formValidation('revalidateField', 'endDate');
        });
    // $("#contact_form").ajaxSubmit({ url: 'mail_handler.php', type: 'post' })

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
            startDate: {
                validators: {
                    notEmpty: {
                        message: 'Hãy nhập thời gian'
                    },
                    date: {
                        format: 'DD/MM/YYYY',
                        max: 'endDate',
                        message: 'The start date is not a valid'
                    }
                }
            },
            endDate: {
                validators: {
                    notEmpty: {
                        message: 'Hãy nhập thời gian'
                    },
                    date: {
                        format: 'DD/MM/YYYY',
                        max: 'startDate',
                        message: 'The start date is not a valid'
                    }
                }
            },
        }
    }).on('success.field.fv', function (e, data) {
        if (data.field === 'startDate' && !data.fv.isValidField('endDate')) {
            // We need to revalidate the end date
            data.fv.revalidateField('endDate');
        }

        if (data.field === 'endDate' && !data.fv.isValidField('startDate')) {
            // We need to revalidate the start date
            data.fv.revalidateField('startDate');
        }
    }).on('success.form.bv', function (e) {
        var $form = $(e.target);
        // var bv = $form.data('bootstrapValidator');
        var saveData = $.ajax({
            type: 'POST',
            url: "mail_handler.php",
            data: $form.serialize(),
            dataType: "text",
            success: function (resultData) {
                $('#success_message').slideDown({ opacity: "show" }, "slow");
            },
            error: function (resultData) {
                alert("Save Failed");
            }
        });
    });

});
