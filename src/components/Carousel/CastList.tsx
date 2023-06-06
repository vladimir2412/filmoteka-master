import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CastCard from '../CastCard/CastCard';
import { IActor } from '../../types/types';
interface ICastListProps {
	actors: {
		cast: IActor[];
	};
	isLoading: boolean;
}
const CastList = ({ actors, isLoading }: ICastListProps) => {
	return (
		<div className="mt-3">
			<Swiper className="select-none" grabCursor={true} slidesPerView={5}>
				{actors?.cast.map((actor) => {
					return (
						<SwiperSlide key={actor.id}>
							<CastCard actor={actor} isLoading={isLoading} />
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
};

export default CastList;
