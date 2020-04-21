$(function () {

    $("input,email").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function ($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function ($form, event) {
            // event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            // var name = $("input#name").val();
            // var email = $("input,#email").val();
            // var message = $("textarea#message").val();
            // var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            // if (firstName.indexOf(' ') >= 0) {
            // firstName = name.split(' ').slice(0, -1).join(' ');
            // }
            // console.log(email);
            // console.log({_vbset});

            // let _vbtData = [];
            // _vbtData.push(['_account', 'VBT-04638-2152']);
            // _vbtData.push(['_domain', 'https://practicewithpros.app']);
            // _vbtData.push(['__vbvar__', ['_listID', '22193']]);
            // _vbtData.push(['__vbvar__', ['_email', 'email']]);

            // let _vbtSrc = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'www.vbt.io/tracker?_account=' + _vbset[0][1] + '&_domain=' + _vbset[1][1];
            // let _vbtSrc = 'https%3A%2F%2Fwww.vbt.io%2Ftracker%3F_account%3DVBT-04638-2152%26_domain%3D%27https%3A%2F%2Fpracticewithpros.app%27'
            // console.log(_vbtSrc);
/*
            $.ajax({

                url: _vbtSrc,
                // url: "static/home/mail/contact_me.php",
                type: "POST",
                data: {
                    _email: email,
                    [_vbtData[2][0]]: _vbtData[2][1]
                    // name: name,
                    // email: email,
                    // message: message
                },
                cache: false,
                success: function () {
                    // Success message
                    alert("YAYAY");
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>Your message has been sent. </strong>");
                    $('#success > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
                error: function () {
                    // Fail message
                    // alert("NONONO");
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    // $('#success > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!");
                    $('#success > .alert-danger').append("<strong>Sorry, it seems that my mail server is not responding. Please try again later!");
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $('#contactForm').trigger("reset");
                    alert("NONONO");
                },
            })
*/            
        },
        filter: function () {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function (e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function () {
    $('#success').html('');
});
