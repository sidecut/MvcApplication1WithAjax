var booksApi = function () { }

booksApi.prototype.getAuthors = function () {
    $.ajax({
        url: '/Api/Books/GetAuthors',
        type: 'GET',
        success: function (result) {
            for (var i = 0; i < result.length; i++) {
                var option = new Option(result[i], result[i]);
                $('#authors').append(option);
            }
        }
    });
}
