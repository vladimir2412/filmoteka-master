const Video = () => {
	return (
		<>
			<video
				className="pl-96 left-0 top-0 object-cover"
				src="https://website-static.plex.tv/videos/movies_and_tv_hero_background.mp4"
				autoPlay
				loop
				muted
			/>
			<div className="absolute opacity-95 inset-0 left-[348px] bg-gradient-to-r from-neutral-950 to-transparent"></div>
		</>
	);
};

export default Video;
