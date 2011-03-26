// The comments are mine, attempting to understand this.
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
            error: function () { }
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
                //Okay, so this last bit is kindof a problem. Your nice, sharable api should not be referencing something
                //  on the master page. So you could pass it all the way down. But that means you have to have this defined
                //  lots of places. Or you could create another js object to wrap this. There are several ways to do this and
                //  how you do it is up to you.
            }
        });
    }
})(jQuery);
