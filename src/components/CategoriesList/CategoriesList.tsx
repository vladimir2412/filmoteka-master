import { Swiper, SwiperSlide } from 'swiper/react';
import { useGetCategoryQuery } from '../../store/api/movie.api';
import CategoriesCard from './CategoriesCard';
import 'swiper/css';
import { IGenre } from '../../types/types';
import { imgSrc } from './data';
const CategoriesList = () => {
	const { data } = useGetCategoryQuery(null);
	const genres = data?.genres.filter((genre: IGenre) => genre.name !== 'TV Movie');
	return (
		<div className="bg-neutral-950 py-12 mt-14 relative">
			<div className="flex justify-center flex-wrap ">
				<span className="text-white font-bold mb-6 text-3xl">Categories</span>
			</div>
			<Swiper
				grabCursor={true}
				centeredSlides={true}
				loop={true}
				spaceBetween={20}
				slidesPerView={6}
				className="select-none mx-12"
			>
				{genres?.map((genre: IGenre, index: number) => {
					return (
						<SwiperSlide key={genre.id}>
							<CategoriesCard genre={genre} imgSrc={imgSrc[index]} />
						</SwiperSlide>
					);
				})}
				<div className="absolute rounded-lg top-0 right-0 w-[100px] h-full z-10">
					<div className="w-full h-full bg-gradient-to-r from-neutral-950/[0%] to-neutral-950/[100%]"></div>
					;
				</div>
				<div className="absolute rounded-lg top-0 left-0 w-[100px] h-full z-10">
					<div className="w-full h-full bg-gradient-to-r from-neutral-950/[100%] to-neutral-950/[0%]"></div>
					;
				</div>
			</Swiper>
		</div>
	);
};

export default CategoriesList;
