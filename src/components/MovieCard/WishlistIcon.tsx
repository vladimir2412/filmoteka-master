const WishlistIcon = ({ isExist }) => {
	return (
		<div className="w-full h-full bg-neutral-950/70 rounded-full flex justify-center items-center hover:cursor-pointer">
			{isExist ? (
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="p-[2px]"
				>
					<path
						d="M19 21L12 18L5 21V5C5 3.9 5.9 3 7 3H14C13.3922 3.81163 13.0455 4.78879 13.0057 5.80197C12.9659 6.81514 13.235 7.81648 13.7773 8.67326C14.3195 9.53003 15.1094 10.2018 16.0421 10.5994C16.9748 10.9971 18.0064 11.1019 19 10.9V21ZM17.83 9L15 6.17L16.41 4.76L17.82 6.17L21.36 2.63L22.77 4.04L17.83 9Z"
						fill="#BBBABA"
					/>
				</svg>
			) : (
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="p-[2px]"
				>
					<path
						d="M21 7H19V9H17V7H15V5H17V3H19V5H21V7ZM19 21L12 18L5 21V5C5 3.9 5.9 3 7 3H14C13.3922 3.81162 13.0455 4.78879 13.0057 5.80196C12.9659 6.81514 13.235 7.81648 13.7773 8.67325C14.3195 9.53003 15.1094 10.2018 16.0421 10.5994C16.9748 10.9971 18.0064 11.1019 19 10.9V21Z"
						fill="#fbbf24"
					/>
				</svg>
			)}
		</div>
	);
};

export default WishlistIcon;
