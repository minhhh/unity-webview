'use strict';

var URLParse = require('url-parse');
require ('jquery');

$(document).ready(function() {
    $('a').click(function(e) {
        e.preventDefault();
        var href = $(this).attr('href');
        var url = new URLParse(href);

        if (url.protocol == 'unity:') {
            e.preventDefault();
            Unity.call (href.substr(url.protocol.length + 2));
        }
    });
})

