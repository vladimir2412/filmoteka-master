import { IGenre } from '../../../types/types';
interface IGenresProps {
	data: {
		genres: IGenre[];
	};
}
const Genres = ({ data: { genres } }: IGenresProps) => {
	return (
		<div className="flex flex-row space-x-4">
			{genres.map((genre) => {
				return (
					<p className="border text-center rounded-full p-2 bg-zinc-500/70" key={genre.id}>
						{genre.name}
					</p>
				);
			})}
		</div>
	);
};

export default Genres;
