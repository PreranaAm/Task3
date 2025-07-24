// import { useEffect, useState } from "react";
// import axios from "axios";
// import Table from "./components/Table";
// import Sort from "./components/Sort";
// import Genre from "./components/Genre";
// import Pagination from "./components/Pagination";
// import Search from "./components/Search";
// import "./App.css";

// // Direct API call to your backend
// const base_url = "http://localhost:8080/api";

// function App() {
// 	const [obj, setObj] = useState({});
// 	const [sort, setSort] = useState({ sort: "title", order: "desc" });
// 	const [filterGenre, setFilterGenre] = useState([]);
// 	const [page, setPage] = useState(1);
// 	const [search, setSearch] = useState("");

// 	useEffect(() => {
// 		const getAllBooks = async () => {
// 			try {
// 				const url = `${base_url}?page=${page}&sort=${sort.sort},${sort.order}&genre=${filterGenre.join(",")}&search=${search}`;
// 				const { data } = await axios.get(url);
// 				setObj(data);
// 			} catch (err) {
// 				console.error("Error fetching data:", err);
// 			}
// 		};

// 		getAllBooks();
// 	}, [sort, filterGenre, page, search]);

// 	return (
// 		<div className="wrapper">
// 			<div className="container">
// 				<div className="head">
// 					<h1>The Books API</h1>
// 					<Search setSearch={setSearch} />
// 				</div>
// 				<div className="body">
// 					<div className="table_container">
// 						<Table books={obj.books || []} />
// 						<Pagination
// 							page={page}
// 							limit={obj.limit || 0}
// 							total={obj.total || 0}
// 							setPage={setPage}
// 						/>
// 					</div>
// 					<div className="filter_container">
// 						<Sort sort={sort} setSort={setSort} />
// 						<Genre
// 							filterGenre={filterGenre}
// 							genres={obj.genres || []}
// 							setFilterGenre={setFilterGenre}
// 						/>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// export default App;
import { useEffect, useState } from "react";
import axios from "axios";
import Table from "./components/Table";
import Sort from "./components/Sort";
import Genre from "./components/Genre";
import Pagination from "./components/Pagination";
import Search from "./components/Search";
import "./App.css";

// Direct API call to your backend
const base_url = "https://task3-1-g1nz.onrender.com";

function App() {
	const [obj, setObj] = useState({});
	const [sort, setSort] = useState({ sort: "title", order: "desc" });
	const [filterGenre, setFilterGenre] = useState([]);
	const [page, setPage] = useState(1);
	const [search, setSearch] = useState("");
	const [limit, setLimit] = useState(4); // ✅ NEW: Books per page

	useEffect(() => {
		const getAllBooks = async () => {
			try {
				const url = `${base_url}/api?page=${page}&limit=${limit}&sort=${sort.sort},${sort.order}&genre=${filterGenre.join(",")}&search=${search}`;
				const { data } = await axios.get(url);
				setObj(data);
			} catch (err) {
				console.error("Error fetching data:", err);
			}
		};

		getAllBooks();
	}, [sort, filterGenre, page, search, limit]);

	return (
		<div className="wrapper">
			<div className="container">
				<div className="head">
					<h1>The Books API</h1>
					<Search setSearch={setSearch} />

					{/* ✅ NEW: Limit Dropdown */}
					
				</div>

				<div className="body">
					<div className="table_container">
						<Table books={obj.books || []} />
						<Pagination 
							page={page}
							limit={obj.limit || 0}
							total={obj.total || 0}
							setPage={setPage}
						/>
					</div>
					<div className="limit-dropdown" style={{ marginTop: "10px" }}>
						<label htmlFor="limit" style={{ marginRight: "8px" }}>
							Books per page:
						</label>
						<select
							id="limit"
							value={limit}
							onChange={(e) => {
								setLimit(parseInt(e.target.value));
								setPage(1); // reset to first page when limit changes
							}}
						>
							<option value={2}>2</option>
							<option value={4}>4</option>
							<option value={6}>6</option>
							<option value={10}>10</option>
						</select>
					</div>
					<div className="filter_container">
						<Sort sort={sort} setSort={setSort} />
						<Genre
							filterGenre={filterGenre}
							genres={obj.genres || []}
							setFilterGenre={setFilterGenre}
						/>
					</div>
					
				</div>
				
			</div>
		</div>
	);
}

export default App;
