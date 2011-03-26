using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MvcApplication1WithAjax.Code
{
    public class BookRepository : IBookRepository
    {
        static readonly List<Book> Books = new List<Book>();

        static BookRepository()
        {
            Books.Add(new Book {Author = "Fred Smith", Subject = "Cooking", Title = "Peanut Butter"});
            Books.Add(new Book {Author = "Fred Smith", Subject = "Skiing", Title = "Brandywine Adventures"});
            Books.Add(new Book {Author = "Norma Jones", Subject = "Skiing", Title = "Lake Tahoe"});
            Books.Add(new Book {Author = "Norma Jones", Subject = "Travel", Title = "Paris a Cinq Cents Euros Par Jour"});
            Books.Add(new Book {Author = "Kent Smith", Subject = "Music", Title = "CBGB's: A Personal Memoir"});
            Books.Add(new Book
                          {
                              Author = "Kent Smith",
                              Subject = "Cooking",
                              Title = "Making Meals With Ingredients Found From Dumpster Diving"
                          });
        }

        public List<string> GetAuthors()
        {
            return Books.Select(r => r.Author).Distinct().ToList();
        }

        public List<Book> GetBooksByAuthor(string author)
        {
            return Books.Where(r => r.Author == author).ToList();
        }
    }
}