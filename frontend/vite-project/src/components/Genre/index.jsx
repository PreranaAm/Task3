import styles from "./style.module.css";

const Genre = ({ genres, filterGenre, setFilterGenre }) => {
	// Handles checkbox toggle
	const onChange = ({ currentTarget: input }) => {
		if (input.checked) {
			const updated = [...filterGenre, input.value];
			setFilterGenre(updated);
		} else {
			const updated = filterGenre.filter((val) => val !== input.value);
			setFilterGenre(updated);
		}
	};

	return (
		<div className={styles.container}>
			<h1 className={styles.heading}>Filter By Genre</h1>
			<div className={styles.genre_container}>
				{genres?.length > 0 ? (
					genres.map((genre) => (
						<div className={styles.genre} key={genre}>
							<input
								className={styles.genre_input}
								type="checkbox"
								value={genre}
								onChange={onChange}
								checked={filterGenre.includes(genre)}
							/>
							<p className={styles.genre_label}>{genre}</p>
						</div>
					))
				) : (
					<p>No genres available</p>
				)}
			</div>
		</div>
	);
};

export default Genre;
