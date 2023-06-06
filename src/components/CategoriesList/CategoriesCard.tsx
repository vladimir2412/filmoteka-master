import { IGenre } from '../../types/types';
interface IProps {
	genre: IGenre;
	imgSrc: string;
}
const CategoriesCard = ({ genre, imgSrc }: IProps) => {
	return (
		<div className="relative rounded-lg overflow-hidden w-[230px] h-[130px]">
			<div
				className="absolute inset-0 bg-cover bg-center"
				style={{ backgroundImage: `url(${imgSrc})` }}
			>
				<div className="relative z-10 bg-genre-cards-overlay bg-cover flex items-center justify-center w-full h-full">
					<span className="text-white font-bold text-xl mb-2">{genre.name}</span>
				</div>
			</div>
		</div>
	);
};

export default CategoriesCard;
