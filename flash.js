module.exports = function() {
    return {
        display: function(session) {
            var flash_status = session.flash_status;
            var flash_message = session.flash_message;

            session.flash_status = undefined;
            session.flash_message = undefined;

            if(flash_status !== undefined) {
                if(flash_status === 'Success') {
                    return '<div class="alert alert-success">' + flash_message + '</div>';
                } else if(flash_status === 'Failed') {
                    return '<div class="alert alert-danger">' + flash_message + '</div>';
                }
            }
        }
    };
}