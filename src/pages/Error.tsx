import { Link } from 'react-router-dom';

const Error: React.FC = () => {
	return (
		<div className="h-screen bg-background-texture bg-cover bg-no-repeat bg-center">
			<div className="h-screen bg-background-ovetlay bg-cover bg-no-repeat bg-center">
				<div className="flex justify-center items-center h-full">
					<div className="px-10 py-5 bg-zinc-950/90 max-w-lx text-center">
						<p className="text-4xl text-white">We're sorry</p>
						<p className="mb-9 text-white ">but the page you were looking for can't be found.</p>
						<p className="text-red-500 text-7xl">404 ERROR</p>
						<img src="https://i.imgur.com/mvfHi9h.png" alt="Not found" className="" />
						<div className="pt-5 flex items-center justify-center ">
							<Link to="/">
								<div className="rounded-md bg-yellow-500 px-3.5 py-2.5 text-base font-semibold shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
									<span aria-hidden="true">&larr;</span> Go back home
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Error;
