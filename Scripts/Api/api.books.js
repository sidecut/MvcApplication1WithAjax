var booksApi = function () { }

booksApi.prototype.getAuthors = function (options) {
    // create new object with default success & error functions
    var config = $.extend({
        success: function () { },
        error: function () { }
    }, options);

    // call our ajaxApi with the path
    $.apiCall({
        url: '/Api/Books/GetAuthors',
        success: function (result) { config.success(result); }
    });
}

booksApi.prototype.getBooksByAuthor = function (options, author) {
    // create new object with default success & error functions
    var config = $.extend({
        success: function () { },
        error: function () { }
    }, options);

    $.apiCall({
        url: encodeURI('/Api/Books/GetBooksForAuthor/'),
        type: 'POST',
        data: { author: author },
        success: function (result) { config.success(result); },
        error: function (result) { config.error(result); }
    });
}
