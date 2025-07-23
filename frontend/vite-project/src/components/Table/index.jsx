import styles from "./style.module.css";

const Table = ({ books }) => {
	return (
		<div className={styles.container}>
			<div className={styles.heading}>
				<p className={styles.title_tab}>Title</p>
				<p className={styles.genre_tab}>Genre</p>
				<p className={styles.author_tab}>Author</p>
				<p className={styles.year_tab}>Year</p>
			</div>

			{books.map((book) => (
				<div className={styles.book} key={book._id}>
					<div className={styles.title_container}>
						
						<img src={book.img} alt="book" className={styles.book_img} />
						<p className={styles.book_title}>{book.title}</p>
					</div>

					<div className={styles.genre_container}>
						{book.genre.map((g, index) => (
							<p key={index} className={styles.book_genre}>
								{g}
								{index !== book.genre.length - 1 && "/"}
							</p>
						))}
					</div>

					<p className={styles.book_author}>{book.author}</p>
					<p className={styles.book_year}>{book.publicationyear}</p>
				</div>
			))}
		</div>
	);
};

export default Table;
