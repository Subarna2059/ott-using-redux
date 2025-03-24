export function movieCastingReducer(state={},action)
{
    switch(action.type)
    {
        case("movieCasting"):
            return action.payload
        default:
            return state
    }
}