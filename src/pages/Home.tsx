import CategoriesList from '../components/CategoriesList/CategoriesList';
import HeroSection from '../components/HeroSection/HeroSection';
import Navbar from '../components/NavbarMain/Navbar';
import TopRatedMovieList from '../components/TopRatedList/TopRatedMovieList';
import TrendyMovieList from '../components/TrendingList/TrendyMovieList';
import UpcomingMovieList from '../components/UpcomingList/UpcomingMovieList';

const Home = () => {
	return (
		<>
			<Navbar />
			<HeroSection />
			<TrendyMovieList />
			<TopRatedMovieList />
			<CategoriesList />
			<UpcomingMovieList />
		</>
	);
};

export default Home;
