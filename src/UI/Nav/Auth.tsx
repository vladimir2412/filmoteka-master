import { Link } from 'react-router-dom';
const Auth = () => {
	return (
		<div className="flex justify-end  space-x-6 w-1/5">
			<div className="rounded-md border-slate-200 bg-white px-3 py-2 text-sm font-semibold  text-gray-900 border">
				Sign In
			</div>
			<Link to="/sign-up/">
				<div className="rounded-md bg-yellow-500 hover:bg-yellow-400 text-sm font-semibold px-3 py-2">
					Sign Up
				</div>
			</Link>
		</div>
	);
};

export default Auth;
