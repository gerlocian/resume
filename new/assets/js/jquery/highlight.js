(function () {
    'use strict';

    $(document).ready(function () {

        $('.filter').find('input').on('keyup', function () {
            var $this = $(this);
            $this.closest('section').find('.content').unhighlight();
            $this.closest('section').find('.content').highlight($this.val());
        });

    });

}());
