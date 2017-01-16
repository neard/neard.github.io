var actionCards = {

  init : function() {
    if ($('.card-section').length <= 0) {
      return;
    }

    $('.cards-section .item-inner').matchHeight();
  }
};