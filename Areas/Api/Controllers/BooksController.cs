using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MvcApplication1WithAjax.Code;

namespace MvcApplication1WithAjax.Areas.Api.Controllers
{
    public class BooksController : Controller
    {
        private readonly IBookRepository _bookRepository;

        public BooksController()
        {
            _bookRepository = new BookRepository();
        }
        public ActionResult GetAuthors()
        {
            List<string> authors = _bookRepository.GetAuthors();
            return Json(authors, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult GetBooksForAuthor(string author)
        {
            List<Book> books = _bookRepository.GetBooksByAuthor(author);
            return Json(books);
        }
    }
}
