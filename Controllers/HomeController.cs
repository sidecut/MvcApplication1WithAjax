using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MvcApplication1WithAjax.Code;

namespace MvcApplication1WithAjax.Controllers
{
    public class HomeController : Controller
    {
        private readonly IBookRepository _bookRepository;

        public HomeController()
        {
            _bookRepository = new BookRepository();
        }

        public ActionResult Index()
        {
            ViewBag.Message = "Welcome to ASP.NET MVC!";

            return View();
        }

        public ActionResult About()
        {
            return View();
        }

        public ActionResult Books()
        {
            return View();
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
