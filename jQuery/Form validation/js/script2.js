$(function() {
  let form = $('#form');
  enableFastFeedBack(form);

  //variables to be validated
  form.submit(function(e) {
    let name = $('#name').val();
    let message = $('#message').val();
    let checked = $('#checkbox').is(':checked');

    validateNameField(name, e);
    validateMessage(message, e);
    validateCheckBox(checked, e);
  });

  //Fast feedback
  function enableFastFeedBack(x) {
    let nameInput = x.find('#name');
    let messageInput = x.find('#message');
    let checkBoxInput = x.find('#checkbox');

    nameInput.blur(function(e) {
      let name = $(this).val();
      validateNameField(name, e);

      if (!isValidName(name)) {
        $(this).css({
          'box-shadow': '0 0 10px #911',
          border: '1px solid #600'
        });
      } else {
        $(this).css({
          'box-shadow': '0 0 10px #191',
          border: '1px solid #060'
        });
      }
    });

    messageInput.blur(function(e) {
      let message = $(this).val();
      validateMessage(message, e);

      if (!isValidMessage(message)) {
        $(this).css({
          'box-shadow': '0 0 10px #911',
          border: '1px solid #600'
        });
      } else {
        $(this).css({
          'box-shadow': '0 0 10px #191',
          border: '1px solid #060'
        });
      }
    });

    checkBoxInput.change(function(e) {
      let isChecked = $(this).is(':checked');
      validateCheckBox(isChecked, e);

      if (!isChecked) {
        $(this)
          .add("label[for='cb']")
          .css({
            'box-shadow': '0 0 10px #911',
            border: '1px solid #600'
          });
      } else {
        $(this)
          .add("label[for='cb']")
          .css({
            'box-shadow': '0 0 10px #191',
            border: '1px solid #060'
          });
      }
    });
  }

  //conditional functions
  function isValidName(name) {
    return name.length >= 2;
  }

  function isValidMessage(message) {
    return message.trim() != '';
  }

  //validation functions
  function validateNameField(name, e) {
    if (!isValidName(name)) {
      //why not use if(name.length <=2)
      $('#name-feedback').text('Please enter at least two characters.');
      e.preventDefault();
    } else {
      $('#name-feedback').text('');
    }
  }

  function validateMessage(message, e) {
    if (!isValidMessage(message)) {
      $('#message-feedback').text('Please enter a message.');
      e.preventDefault();
    } else {
      $('#message-feedback').text('');
    }
  }

  function validateCheckBox(isChecked, e) {
    if (!isChecked) {
      $('#checkbox-feedback').text('Please agree to this.');
      e.preventDefault();
    } else {
      $('#checkbox-feedback').text('');
    }
  }
});
