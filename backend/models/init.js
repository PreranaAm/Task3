const bookss = [
  {
    "title": "Atomic Habits",
    "img": "https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg",
    "author": "James Clear",
    "genre": ["Self-help", "Non-Fiction"],
    "publicationyear": "2018"
  },
  {
    "title": "Deep Work",
    "img": "https://images-na.ssl-images-amazon.com/images/I/71g2ednj0JL.jpg",
    "author": "Cal Newport",
    "genre": ["Self-help", "Technology"],
    "publicationyear": "2016"
  },
  {
    "title": "The Lean Startup",
    "img": "https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg",
    "author": "Eric Ries",
    "genre": ["Business", "Technology"],
    "publicationyear": "2011"
  },
  {
    "title": "The Power of Now",
    "img": "https://images-na.ssl-images-amazon.com/images/I/71sBtM3Yi5L.jpg",
    "author": "Eckhart Tolle",
    "genre": ["Self-help", "Non-Fiction"],
    "publicationyear": "2004"
  },
  {
    "title": "Thinking, Fast and Slow",
    "img": "https://images-na.ssl-images-amazon.com/images/I/81vpsIs58WL.jpg",
    "author": "Daniel Kahneman",
    "genre": ["Business", "Non-Fiction"],
    "publicationyear": "2011"
  },
  {
    "title": "The 5 AM Club",
    "img": "https://images-na.ssl-images-amazon.com/images/I/71zytzrg6lL.jpg",
    "author": "Robin Sharma",
    "genre": ["Self-help", "Business"],
    "publicationyear": "2018"
  },
  {
    "title": "Dune",
    "img": "https://covers.openlibrary.org/b/isbn/9780441172719-L.jpg",
    "author": "Frank Herbert",
    "genre": ["Fiction", "Technology"],
    "publicationyear": "1994"
  },
  {
    "title": "Educated",
    "img": "https://images-na.ssl-images-amazon.com/images/I/81WojUxbbFL.jpg",
    "author": "Tara Westover",
    "genre": ["Non-Fiction"],
    "publicationyear": "2018"
  },
  {
    "title": "To Kill a Mockingbird",
    "img": "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg",
    "author": "Harper Lee",
    "genre": ["Fiction"],
    "publicationyear": "1960"
  },
  {
    "title": "Rich Dad Poor Dad",
    "img": "https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL.jpg",
    "author": "Robert T. Kiyosaki",
    "genre": ["Business", "Self-help"],
    "publicationyear": "2000"
  },
  {
    "title": "The Subtle Art of Not Giving a F*ck",
    "img": "https://images-na.ssl-images-amazon.com/images/I/71QKQ9mwV7L.jpg",
    "author": "Mark Manson",
    "genre": ["Self-help"],
    "publicationyear": "2016"
  },
  {
    "title": "Start With Why",
    "img": "https://covers.openlibrary.org/b/isbn/9781591842804-L.jpg",
    "author": "Simon Sinek",
    "genre": ["Business", "Self-help"],
    "publicationyear": "2009"
  },
  {
    "title": "1984",
    "img": "https://images-na.ssl-images-amazon.com/images/I/71kxa1-0mfL.jpg",
    "author": "George Orwell",
    "genre": ["Fiction"],
    "publicationyear": "1949"
  },
  {
    "title": "Sapiens",
    "img": "https://images-na.ssl-images-amazon.com/images/I/713jIoMO3UL.jpg",
    "author": "Yuval Noah Harari",
    "genre": ["Non-Fiction", "Technology"],
    "publicationyear": "2011"
  },
  {
    "title": "The Psychology of Money",
    "img": "https://images-na.ssl-images-amazon.com/images/I/71g2ednj0JL._AC_UL600_SR600,400_.jpg",
    "author": "Morgan Housel",
    "genre": ["Business", "Non-Fiction"],
    "publicationyear": "2020"
  },
  {
    "title": "The Intelligent Investor",
    "img": "https://covers.openlibrary.org/b/isbn/9780060555665-M.jpg",
    "author": "Benjamin Graham",
    "genre": ["Business"],
    "publicationyear": "1949"
  },
  {
    "title": "Hooked",
    "img": "https://images-na.ssl-images-amazon.com/images/I/81aA7hEEykL.jpg",
    "author": "Nir Eyal",
    "genre": ["Technology", "Business"],
    "publicationyear": "2014"
  },
  {
    "title": "Zero to One",
    "img": "https://images-na.ssl-images-amazon.com/images/I/71m-MxdJ2WL.jpg",
    "author": "Peter Thiel",
    "genre": ["Technology", "Business"],
    "publicationyear": "2014"
  },
  {
    "title": "The Four",
    "img": "https://images-na.ssl-images-amazon.com/images/I/71xBLRBYOiL.jpg",
    "author": "Scott Galloway",
    "genre": ["Business", "Technology"],
    "publicationyear": "2017"
  },
  {
    "title": "Make Time",
    "img": "https://covers.openlibrary.org/b/isbn/9780525572428-L.jpg",
    "author": "Jake Knapp",
    "genre": ["Self-help", "Technology"],
    "publicationyear": "2018"
  },
  {
    "title": "Ikigai",
    "img": "https://images-na.ssl-images-amazon.com/images/I/81QpkIctqPL.jpg",
    "author": "Héctor García",
    "genre": ["Self-help"],
    "publicationyear": "2016"
  },
  {
    "title": "Rework",
    "img": "https://images-na.ssl-images-amazon.com/images/I/81WcnNQ-TBL.jpg",
    "author": "Jason Fried",
    "genre": ["Business"],
    "publicationyear": "2010"
  },
  {
    "title": "Tools of Titans",
    "img": "https://images-na.ssl-images-amazon.com/images/I/81l3rZK4lnL.jpg",
    "author": "Tim Ferriss",
    "genre": ["Business", "Self-help"],
    "publicationyear": "2016"
  },
  {
    "title": "Crushing It!",
    "img": "https://covers.openlibrary.org/b/isbn/9780062674678-L.jpg",
    "author": "Gary Vaynerchuk",
    "genre": ["Business"],
    "publicationyear": "2018"
  },
  {
    "title": "Grit",
    "img": "https://covers.openlibrary.org/b/isbn/9781501111112-L.jpg",
    "author": "Angela Duckworth",
    "genre": ["Self-help", "Non-Fiction"],
    "publicationyear": "2016"
  }
];

module.exports = bookss;
