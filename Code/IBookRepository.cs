using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace MvcApplication1WithAjax.Code
{
    public interface IBookRepository
    {
        List<string> GetAuthors();
        List<Book> GetBooksByAuthor(string author);
    }
}
