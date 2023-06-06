import { useForm, SubmitHandler } from 'react-hook-form';
import { ISignUpForm } from './signUp.interface';

const SignUp: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<ISignUpForm>({
		mode: 'onChange',
	});
	const onSubmit: SubmitHandler<ISignUpForm> = (data) => {
		console.log(data);
		reset();
	};
	return (
		<div className="h-screen bg-background-texture bg-cover bg-no-repeat bg-center">
			<div className="h-screen bg-background-ovetlay bg-cover bg-no-repeat bg-center flex flex-col items-center">
				<div className="p-8 text-center">
					<p className="text-white">Logo</p>
					<p className="text-white text-6xl font-semibold">Sign Up</p>
				</div>
				<div className="w-4/12">
					<form className="py-14 px-5 bg-zinc-950/90" onSubmit={handleSubmit(onSubmit)}>
						<p className="text-white text-3xl font-semibold text-center">Set up your account</p>
						<div className="mt-6">
							<label>
								<span className=" text-white">Create username</span>
							</label>
							<input
								type="text"
								className="mt-1 px-3 py-2 bg-white border focus:outline-none focus:border-yellow-300 focus:ring-yellow-300 block w-full sm:text-sm focus:ring-1"
								{...register('username', {
									required: 'Username is required',
									pattern: {
										value: /^[a-zA-Z0-9_-]{4,50}$/,
										message: `Your username must be at least 4 characters and not contain special characters ( !"#$*...)`,
									},
								})}
							/>
							{errors?.username && (
								<span className="mt-2 text-red-500 text-sm">{errors.username.message}</span>
							)}
						</div>
						<div className="mt-5">
							<label>
								<span className=" text-white">Email</span>
							</label>
							<input
								type="email"
								className="mt-1 px-3 py-2 bg-white border focus:outline-none focus:border-yellow-300 focus:ring-yellow-300 block w-full sm:text-sm focus:ring-1"
								{...register('email', {
									required: 'Email is required',
									pattern: {
										value: /^[\w]+@[a-z]{2,}\.[a-z]{2,3}$/i,
										message: 'Please provide a valid email address!',
									},
								})}
							/>
							{errors?.email && (
								<span className="mt-2 text-red-500 text-sm">{errors.email.message}</span>
							)}
						</div>
						<div className="mt-5">
							<label>
								<span className="text-white">Create password</span>
							</label>
							<input
								type="password"
								className="mt-1 px-3 py-2 bg-white border focus:outline-none focus:border-yellow-300 focus:ring-yellow-300 block w-full sm:text-sm focus:ring-1"
								{...register('password', {
									required: 'Password is required',
									pattern: {
										value: /^\S{6,}$/,
										message: 'Your password must have at least 6 symbols! ',
									},
								})}
							/>
							{errors?.password && (
								<span className="mt-2 text-red-500 text-sm">{errors.password.message}</span>
							)}
						</div>
						<button
							type="submit"
							className="mt-10 rounded-md bg-yellow-500 px-3.5 py-2.5 text-base font-semibold shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 w-full"
						>
							Sign up
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
