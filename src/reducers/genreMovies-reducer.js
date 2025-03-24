export function genreMoviesReducer(state=[],action) 
{
    switch(action.type){
        case("genreBasedMovies"):
            return action.payload
        default:
            return state
    }
}