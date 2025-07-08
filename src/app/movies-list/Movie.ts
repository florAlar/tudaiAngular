export interface Movie {
    id: number;
    title: string;
    genre: string;    
    poster: string;
    isFavorite: boolean; 
    isNew?: boolean; 
    url: string;
}