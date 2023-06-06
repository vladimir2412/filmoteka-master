import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import RecommendationCard from './RecommendationCard';
import { IRecommendation } from '../../types/types';

interface IRecsProp {
	recommendations: {
		results: IRecommendation[];
	};
	isLoading: boolean;
}

const RecommendationsList = ({ recommendations, isLoading }: IRecsProp) => {
	return (
		<div className="mt-3">
			<Swiper
				className="select-none"
				modules={[Navigation]}
				spaceBetween={30}
				slidesPerView={7}
				slidesPerGroup={7}
				navigation
			>
				{recommendations?.results.map((recs) => {
					return (
						<SwiperSlide key={recs.id}>
							<RecommendationCard recs={recs} isLoading={isLoading} />
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
};

export default RecommendationsList;
