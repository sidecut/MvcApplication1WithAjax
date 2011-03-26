var booksApi = function () { }

booksApi.prototype.getAuthors = function (success) {
    $.ajax({
        url: '/Api/Books/GetAuthors',
        type: 'GET',
        success: success
    });
}

booksApi.prototype.getBooksByAuthor = function (author) {
    $.ajax({
        url: '/Api/Books/GetBooksForAuthor',
        type: 'POST',
        data: { author: author },
        success: function (result) {
            $('#bookTableBody').empty();
            $('#bookTemplate').tmpl(result).appendTo('#bookTableBody');
        }
    });
}
