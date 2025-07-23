const router = require("express").Router();
const Book = require("../models/book");

router.get("/api", async (req, res) => {
  try {
    const page = parseInt(req.query.page) - 1 || 0;
    const limit = parseInt(req.query.limit) || 4;
    const search = req.query.search || "";
    let sort = req.query.sort || "title";
    let genre = req.query.genre || "All";

    const genreOptions = [
      "Fiction",
      "Non-Fiction",
      "Self-help",
      "Business",
      "Technology"
    ];

    genre === "All"
      ? (genre = [...genreOptions])
      : (genre = req.query.genre.split(","));

    req.query.sort ? (sort = req.query.sort.split(",")) : (sort = [sort]);

    let sortBy = {};
    if (sort[1]) {
      sortBy[sort[0]] = sort[1];
    } else {
      sortBy[sort[0]] = "asc";
    }

    const books = await Book.find({
      title: { $regex: search, $options: "i" },
      genre: { $in: [...genre] }
    })
      .sort(sortBy)
      .skip(page * limit)
      .limit(limit);

    const total = await Book.countDocuments({
      genre: { $in: [...genre] },
      title: { $regex: search, $options: "i" }
    });

    const response = {
      error: false,
      total,
      page: page + 1,
      limit,
      genres: genreOptions,
      books
    };
console.log(response)
    res.status(200).json(response); // use .json instead of .send (recommended for objects)
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: true, message: "Internal Server Error" });
  }
});
module.exports=router
