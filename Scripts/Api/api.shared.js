﻿// The comments are mine, attempting to understand this.
// The (function ($) {xxxx})(jQuery) defines a function with $ as a formal parameter, then calls it, passing in jQuery.
// Therefore it adds an "apiCall" function to jQuery, no?

// The apiCall function calls $.extend(), which takes two parameters: the dictionary of defaults,
// and mashes the options parameter into it.  Therefore, where options defines something, it gets used,
// but where it does not, the default is used.  Clever!

// Then apiCall just calls jQuery.ajax with our data structure and our success and error parameters.

(function ($) {
    $.apiCall = function (options) {
        // default values for options
        var config = $.extend({
            type: 'GET',
            data: {},
            contentType: 'application/x-www-form-urlencoded',
            success: function () { },
            errror: function () { }
        }, options);

        $.ajax({
            type: config.type,
            url: config.url,
            contentType: config.contentType,
            data: config.data,
            success: function (result) {
                config.success(result);
            },
            error: function (result) {
                config.error(result);
                $('#errorDisplay').show().html('<p>' + result.responseText + '</p>');
            }
        });
    }
})(jQuery);
