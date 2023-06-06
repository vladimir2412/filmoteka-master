import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from './components/Loader/Loader.tsx';

const Home = lazy(() => import('./pages/Home'));
const Error = lazy(() => import('./pages/Error'));
const SignUp = lazy(() => import('./pages/SignUp/SignUp'));
const Watchlist = lazy(() => import('./pages/Watchlist/Watchlist.tsx'));
const Categories = lazy(() => import('./pages/CategoriesPage/Categories.tsx'));
const MovieCardDetails = lazy(() => import('./pages/MovieDetails/MovieCardDetails.tsx'));

const AppLoader = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={
					<Suspense fallback={<Loader />}>
						<Home />
					</Suspense>
				}
			/>
			<Route
				path="/sign-up/"
				element={
					<Suspense fallback={<Loader />}>
						<SignUp />
					</Suspense>
				}
			/>
			<Route
				path="/watchlist/"
				element={
					<Suspense fallback={<Loader />}>
						<Watchlist />
					</Suspense>
				}
			/>
			<Route
				path="/categories/"
				element={
					<Suspense fallback={<Loader />}>
						<Categories />
					</Suspense>
				}
			/>
			<Route
				path="/:id/"
				element={
					<Suspense fallback={<Loader />}>
						<MovieCardDetails />
					</Suspense>
				}
			/>
			<Route
				path="*"
				element={
					<Suspense fallback={<Loader />}>
						<Error />
					</Suspense>
				}
			/>
		</Routes>
	);
};

export default AppLoader;
