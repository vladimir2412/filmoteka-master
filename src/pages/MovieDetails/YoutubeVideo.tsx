import Loader from '../../components/Loader/Loader';

const YoutubeVideo = ({ trailers, isLoading }) => {
	const firstTrailer = trailers?.results?.find((t) => t.type === 'Trailer');
	const videoId = firstTrailer?.key || trailers?.results?.[0]?.key || 'VIDEO_ID';
	const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
	console.log(trailers);
	console.log(videoId);
	return (
		<>
			{isLoading ? (
				<div className="flex justify-center items-center h-screen">
					<Loader />
				</div>
			) : (
				<iframe
					width="882"
					height="500"
					src={videoUrl}
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
					className="m-auto"
				/>
			)}
		</>
	);
};

export default YoutubeVideo;
