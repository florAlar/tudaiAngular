export interface Movie {
    id: number;
    title: string;
    overview: string;
    year: number;
    poster: string;
    isFavorite: boolean; 
    isNew?: boolean; 
    url: string;
}