export function discoverMoviesReducer (state=[],action)
{
    switch(action.type) {
        case("discoverMovies"):
            return action.payload
        default:
            return state
    }
}