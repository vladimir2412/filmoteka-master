import { useState, useRef } from 'react';
import { useGetSearchQuery } from '../../store/api/movie.api';
import SearchResult from '../SearchResult/SearchResult';
const Searchbox = () => {
	const inputRef = useRef<HTMLInputElement>(null);
	const [inputValue, setInputValue] = useState('');

	const { data } = useGetSearchQuery(inputValue);
	const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (inputRef.current) inputRef.current.value = event.target.value;
		setTimeout(() => {
			setInputValue(event.target.value);
		}, 700);
	};
	const clearInput = () => {
		setInputValue('');
		if (inputRef.current) inputRef.current.value = '';
	};
	return (
		<>
			<label
				className={`flex items-center space-x-4 bg-white w-2/4 py-1 pl-10 relative ${
					inputValue ? 'rounded-t-xl' : 'rounded-full'
				}`}
				onChange={handleInput}
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="shrink-0"
				>
					<g clipPath="url(#clip0_75_4)">
						<path
							d="M23.4291 20.5981L18.7841 15.9531C20.1984 13.836 20.7747 11.2684 20.4008 8.74995C20.0269 6.23146 18.7296 3.94208 16.7613 2.32712C14.7929 0.712167 12.2942 -0.112888 9.75116 0.0124421C7.20816 0.137772 4.80268 1.20453 3.00264 3.0052C1.2026 4.80588 0.136695 7.21173 0.0122642 9.75478C-0.112167 12.2978 0.713771 14.7963 2.32942 16.7641C3.94507 18.7319 6.23491 20.0284 8.75354 20.4014C11.2722 20.7744 13.8395 20.1972 15.9561 18.7821L20.6011 23.4261C20.9793 23.795 21.4868 24.0015 22.0151 24.0015C22.5435 24.0015 23.0509 23.795 23.4291 23.4261C23.8041 23.051 24.0147 22.5424 24.0147 22.0121C24.0147 21.4818 23.8041 20.9732 23.4291 20.5981ZM10.2651 3.0121C11.699 3.0121 13.1007 3.43731 14.293 4.23395C15.4853 5.03059 16.4145 6.16288 16.9632 7.48765C17.512 8.81241 17.6556 10.2701 17.3758 11.6765C17.0961 13.0829 16.4056 14.3747 15.3916 15.3886C14.3777 16.4026 13.0859 17.0931 11.6795 17.3728C10.2732 17.6525 8.81543 17.509 7.49066 16.9602C6.1659 16.4115 5.0336 15.4822 4.23696 14.29C3.44032 13.0977 3.01512 11.696 3.01512 10.2621C3.01724 8.33993 3.78175 6.4971 5.14093 5.13792C6.50011 3.77874 8.34295 3.01422 10.2651 3.0121Z"
							fill="black"
						/>
					</g>
					<defs>
						<clipPath id="clip0_75_4">
							<rect width="24" height="24" fill="white" />
						</clipPath>
					</defs>
				</svg>
				<input
					ref={inputRef}
					className={`placeholder:text-neutral-500 placeholder:text-sm placeholder:capitalize block focus:outline-none w-3/4`}
					placeholder="Find Movies..."
					type="text"
					name="search"
					onChange={handleInput}
				/>
				{data?.results.length > 0 && <SearchResult data={data} handleClear={clearInput} />}
			</label>
		</>
	);
};

export default Searchbox;
