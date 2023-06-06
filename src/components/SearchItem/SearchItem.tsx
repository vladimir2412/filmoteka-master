const SearchItem = ({ item }) => {
	const imgUrl = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${item.poster_path}`;
	const releaseYear = item.release_date.slice(0, 4);
	return (
		<div className="hover:bg-gray-300 flex py-3 px-5 w-full">
			<img src={imgUrl} alt={item.title} className="w-[70px] rounded-md" />
			<div className="flex flex-col m-3">
				<p>{item.title}</p>
				<p className="text-stone-500">{releaseYear}</p>
			</div>
		</div>
	);
};

export default SearchItem;
