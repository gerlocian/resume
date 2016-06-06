(function () {
    'use strict';

    $(document).ready(function () {

        function openMenu() {
            var $sections = $('#sections');
            var $links = $('#sections .collection');

            $sections
                .addClass('open');

            $links.fadeIn();
        }

        function closeMenu() {
            var $sections = $('#sections');
            var $links = $('#sections .collection');

            $links.fadeOut();

            $sections
                .removeClass('open');
        }

        $('#action-button').on('click', function () {
            var $this = $(this);

            if ($this.is('.action')) {
                $this.removeClass('action');
                closeMenu();
            } else {
                $this.addClass('action');
                openMenu();
            }
        });

        $('#sections .collection-item').on('click', function () {
            $('#action-button').removeClass('action')
            closeMenu();
        });

    });

}());
