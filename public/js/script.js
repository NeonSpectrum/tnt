var server_address = 'localhost';
var server_port = '3000';

function openModal(id, backdrop) {
    if(backdrop == undefined) {
        backdrop = false;
    }

    $('#' + id + '.modal').fadeIn(250);

    $('body').off('click', '#' + id + '.modal');
    
    $('body').off('click', '#' + id + '.modal > .modal-container');

    $('body').on('click', '#' + id + '.modal', function() {
        if(backdrop) {
            closeModal(id);
        }
    });

    $('body').on('click', '#' + id + '.modal > .modal-container', function(e) {
        e.stopPropagation();
    });
}

function closeModal(id, callback) {
    $('#' + id + '.modal').fadeOut(250, function () {
        callback();
    }); 
}

function setModalContent(id, headerContent, bodyContent) {
    $('#' + id + '.modal > .modal-container > .modal-header').html(headerContent);
    $('#' + id + '.modal > .modal-container > .modal-body').html(bodyContent);
}

function onDataButtonClick(dataButton, func) {
    $('[data-button="' + dataButton + '"]').click(func);
}