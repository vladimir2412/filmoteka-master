interface IFormat {
	month: 'short';
	day: 'numeric';
	year: 'numeric';
}
export function formatDate(dateStr: string): string {
	const date = new Date(dateStr);
	const options: IFormat = { month: 'short', day: 'numeric', year: 'numeric' };
	const month = date.toLocaleString('en-US', options).split(' ')[0];
	const day = date.getDate();
	const year = date.getFullYear();

	return `${month} ${day}, ${year}`;
}
export function formatTime(runtime: number): string {
	const hours = Math.floor(runtime / 60);
	const minutes = runtime % 60;

	return `${hours}h ${minutes}m`;
}

export function roundedVote(rating: number): string {
	const votes = rating.toFixed(1);

	return `${votes}`;
}
