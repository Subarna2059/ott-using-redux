export function popularMoviesReducer(state=[],action)
{

    switch(action.type){
        case("popularMovies"):
            return action.payload
        default:
            return state
    }
}