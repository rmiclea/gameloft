
// Terms&Conditions Pop Up

$(function () {
  $('#demo').popup();
});

// Facebook JavaScript SDK - Log In


// Submit and checkbox functionalities

$(function() {
    $('#agree').click(function() {
        if ($(this).prop('checked') === true) {
            $('.submit-mask').addClass('inactive');
            $('.terms-text').removeClass('active');
        } else {
            $('.submit-mask').removeClass('inactive');
        }
    });
});

$(function() {
    $('.submit-mask').on('click', function() {
        if ($('#agree').prop('checked') === false) {
          $('.terms-text').addClass('active');
        } else {
          $('.terms-text').removeClass('active');
        }
    });
});

// Terms popup functionality

$(function() {
    $('.demo_agree').on("click", function () {
    $('#demo').popup('hide');
    $('#agree').attr('checked', 'checked');
    $('.submit-mask').addClass('inactive');
    $('.terms-text').removeClass('active');
    });
});


// Product Gallery



// Product Quantity

$(".ddd").on("click", function () {

var $button = $(this);
var oldValue = $button.closest('.sp-quantity').find("input.quntity-input").val();

if ($button.text() == "+") {
    var newVal = parseFloat(oldValue) + 1;
} else {
// Don't allow decrementing below zero
if (oldValue > 1) {
    var newVal = parseFloat(oldValue) - 1;
} else {
    newVal = 1;
}
}

$button.closest('.sp-quantity').find("input.quntity-input").val(newVal);

});


// Related Products functionalities
