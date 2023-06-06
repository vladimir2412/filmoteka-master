export interface IMovieCard {
	id: number;
	title: string;
	media_type: string;
	release_date: string;
	poster_path: string;
	overview: string;
	genre_ids: number[];
	original_language: string;
	original_title: string;
	popularity: number;
	adult: boolean;
	backdrop_path: string;
	vote_count: number;
	vote_average: number;
	video: boolean;
}
export interface IGenre {
	id: number;
	name: string;
}
export interface ICard {
	id: number;
	title: string;
	media_type: string;
	release_date: string;
	poster_path: string;
	overview: string;
	genre_ids: number[];
	original_language: string;
	original_title: string;
	popularity: number;
	adult: boolean;
	backdrop_path: string;
	vote_count: number;
	vote_average: number;
	video: boolean;
}
export interface IActor {
	adult: boolean;
	cast_id: number;
	character: string;
	credit_id: string;
	gender: number;
	id: number;
	known_for_department: string;
	name: string;
	order: number;
	original_name: string;
	popularity: number;
	profile_path: string;
}

export interface IRecommendation {
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	media_type: string;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}
