import { useGetCategoryQuery } from '../../store/api/movie.api';
const Categories = () => {
	const { data } = useGetCategoryQuery(null);
	const genres = data?.genres.filter((genre) => genre.name !== 'TV Movie');
	return (
		<div className="-right-64 top-12 p-5 bg-white w-[510px] grid grid-cols-2 grid-rows-9 gap-x-40 gap-y-5 absolute">
			{genres?.map((genre) => {
				return (
					<p className="text-black" key={genre.id}>
						{genre.name}
					</p>
				);
			})}
			<svg
				className="-top-2 right-1/2 absolute"
				width="16"
				height="8"
				viewBox="0 0 16 8"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M2.41421 8L13.5858 8C14.4767 8 14.9229 6.92286 14.2929 6.29289L8.70711 0.707106C8.31658 0.316582 7.68342 0.316582 7.29289 0.707106L1.70711 6.29289C1.07714 6.92286 1.52331 8 2.41421 8Z"
					fill="white"
				/>
			</svg>
		</div>
	);
};

export default Categories;
