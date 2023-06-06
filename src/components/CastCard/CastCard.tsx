import { IActor } from '../../types/types';
import Loader from '../Loader/Loader';
interface ICastCardProps {
	actor: IActor;
	isLoading: boolean;
}
const CastCard = ({ actor, isLoading }: ICastCardProps) => {
	const imgURL = actor.profile_path
		? `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${actor.profile_path}`
		: 'https://via.placeholder.com/135x135';
	return (
		<div>
			{isLoading ? (
				<div className="flex justify-center items-center h-screen">
					<Loader />
				</div>
			) : (
				<>
					<img
						src={imgURL}
						alt={actor.name}
						className="rounded-full object-cover object-top w-[135px] h-[135px]"
					/>
					<div>
						<p className="font-bold">{actor.name}</p>
						<p className="font-light">{actor.character}</p>
					</div>
				</>
			)}
		</div>
	);
};

export default CastCard;
