const Rating = ({ vote }) => {
	const roundedVote = vote.toFixed(1);
	return (
		<div className="w-full h-full bg-neutral-950/70 rounded-lg flex justify-center items-center px-[5px]">
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
					fill="#ECC94B"
				/>
			</svg>
			<div className="text-white font-semibold">{roundedVote}</div>
		</div>
	);
};

export default Rating;
