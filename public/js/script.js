var server_address = 'localhost';
var server_port = '3000';

function openModal(id, backdrop) {
  if (backdrop == undefined) {
    backdrop = false;
  }
  $('#' + id + '.modal').fadeIn(250);
  $('body').off('click', '#' + id + '.modal');
  $('body').off('click', '#' + id + '.modal > .modal-container');
  $('body').on('click', '#' + id + '.modal', function() {
    if (backdrop) {
      closeModal(id);
    }
  });
  $('body').on('click', '#' + id + '.modal > .modal-container', function(e) {
    e.stopPropagation();
  });
}

function closeModal(id) {
  $('#' + id + '.modal').fadeOut(250);
}

function setModalContent(id, headerContent, bodyContent) {
  $('#' + id + '.modal > .modal-container > .modal-header').html(headerContent);
  $('#' + id + '.modal > .modal-container > .modal-body').html(bodyContent);
}

function onDataButtonClick(dataButton, func) {
  $('[data-button="' + dataButton + '"]').click(func);
}
var urlParams;
(window.onpopstate = function() {
  var match,
    pl = /\+/g,
    search = /([^&=]+)=?([^&]*)/g,
    decode = function(s) {
      return decodeURIComponent(s.replace(pl, " "));
    },
    query = window.location.search.substring(1);
  urlParams = {};
  while (match = search.exec(query)) urlParams[decode(match[1])] = decode(match[2]);
})();