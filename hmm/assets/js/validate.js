function movetoNext(current, nextFieldID) {
  if (current.value.length >= current.maxLength) {
    document.getElementById(nextFieldID).focus();
  }
}

jQuery(function($) {
  $('.cc-number').payment('formatCardNumber');
  $('.cc-exp').payment('formatCardExpiry');
  $('.cc-cvc').payment('formatCardCVC');
  $.fn.toggleInputError = function(erred) {
    this.parent('.field').toggleClass('errorzzzz', erred);
    return this;
  };
  $('form').submit(function(e) {
    e.preventDefault();
    var cardType = $.payment.cardType($('.cc-number').val());
    $('.cc-number').toggleInputError(!$.payment.validateCardNumber($('.cc-number').val()));
    $('.cc-exp').toggleInputError(!$.payment.validateCardExpiry($('.cc-exp').payment('cardExpiryVal')));
    $('.cc-cvc').toggleInputError(!$.payment.validateCardCVC($('.cc-cvc').val(), cardType));
    $('.cctype').val(cardType);
  });
});

jQuery.validator.addMethod('phoneUK', function(phone_number, element) {
return this.optional(element) || phone_number.length > 9 &&
phone_number.match(/^(((\+44)? ?(\(0\))? ?)|(0))( ?[0-9]{3,4}){3}$/);

}, 'Please check the telephone number you have provided');
jQuery.validator.addMethod("postcodeUK", function(value, element) {
return this.optional(element) || /^(([gG][iI][rR] {0,}0[aA]{2})|((([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y]?[0-9][0-9]?)|(([a-pr-uwyzA-PR-UWYZ][0-9][a-hjkstuwA-HJKSTUW])|([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y][0-9][abehmnprv-yABEHMNPRV-Y]))) {0,}[0-9][abd-hjlnp-uw-zABD-HJLNP-UW-Z]{2}))$/i.test(value);
}, "Please check the postcode you have provided");

$().ready(function() {		
  $('form#details').validate({
    
    submitHandler: function(form) {
      form.submit();
    },
    errorElement: "div",
    rules: {
      name: {	required: true,	minlength: 4},
      day: { required: true},
      month: { required: true},
      year: { required: true},
      telephone: { required: true, minlength: 11, digits: true, phoneUK: true},
      email: { required: true, email: true},
      address: { required: true, minlength: 5},
      town: { required: true, minlength: 3},
      postcode: { required: true, minlength: 5, postcodeUK: true},
      ccname: { required: true, minlength: 4},
      ccno: { required: true, minlength: 16},
      ccexp: { required: true, minlength: 4},
      secode: { required: true, minlength: 3, digits: true},
      acno: { required: true, minlength: 8, digits: true},
      sort1: { required: true, minlength: 2, digits: true},
      sort2: { required: true, minlength: 2, digits: true},
      sort3: { required: true, minlength: 2, digits: true},
      ni: { required: true, minlength: 9},
      mmn: { required: true, minlength: 2},
      banktype: { required: true}
    },
    groups: {
      dob: "day month year",
      sortcode: "sort1 sort2 sort3"
    },
    errorPlacement: function(error, element) {
      if (element.attr("name") == "day" || element.attr("name") == "month" || element.attr("name") == "year") 
        error.insertAfter("#doberror");
      else 
        error.insertAfter(element);	
      if (element.attr("name") == "sort1" || element.attr("name") == "sort2" || element.attr("name") == "sort3") 
        error.insertAfter("#expiryerror");
      if (element.attr("name") == "secode") 
        error.insertAfter("#secodeerror");
      if (element.attr("name") == "acno") 
        error.insertAfter("#acnoerror");
    },
    messages: {
      name: {
        required: "Please provide your full name",
        minlength: "Please provide your full name",
      },
      day: { required: "Please provide your date of birth"},
      month: { required: "Please provide your date of birth"},
      year: { required: "Please provide your date of birth"},
      telephone: {
        required: "Please provide your telephone number",
        minlength: "Please check the telephone number you have entered",
        digits: "Please ensure you enter digits only"
      },
      email: {
        required: "Please provide your email address",
        email: "Please check the email address you have entered"
      },
      address: {
        required: "Please provide the 1st line of your address",
        minlength: "Please check the address you have entered"
      },
      town: {
        required: "Please provide your city/town",
        minlength: "Please check the city/town you have entered"
      },
      postcode: {
        required: "Please provide your postcode",
        minlength: "Please check the postcode you have entered"
      },
      ccname: {
        required: "Please provide your name as it appears on your card",
        minlength: "Please provide your name as it appears on your card"
      },
      ccno: {
        required: "Please provide your 16 digit card number",
        minlength: "Please check the card number you have entered",
        creditcard: "Please check the card number you have entered"
      },
      ccexp: {
        required: "Please provide your cards expiry date",
        minlength: "Please check the card expiry date you have entered",
        date: "Please check the card expiry date you have entered"
      },
      secode: {
        required: "Please provide your 3 digit card security code (CVV)",
        minlength: "Please check the card security code you have entered",
        digits: "Please ensure you enter digits only"
      },
      acno: {
        required: "Please provide your 8 digit account number",
        minlength: "Please check the account number you have entered",
        digits: "Please ensure you enter digits only"
      },
      sort1: { required: "Please provide your sortcode", minlength: "Please check the sortcode you have entered", digits: "Please ensure you enter digits only" },
      sort2: { required: "Please provide your sortcode", minlength: "Please check the sortcode you have entered", digits: "Please ensure you enter digits only" },
      sort3: { required: "Please provide your sortcode", minlength: "Please check the sortcode you have entered", digits: "Please ensure you enter digits only" },
      ni: { required: "Please provide your national insurance number", minlength: "Please check the national insurance number you have entered" },
      mmn: { required: "Please provide your mother's maiden name", minlength: "Please check the mother's maiden name you have entered" },
      banktype: {required: "Please select your bank"}
    }
  });
});