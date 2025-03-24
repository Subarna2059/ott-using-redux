export function movieByIdReducer(state=[], action)
{
    switch(action.type)
    {
        case("moviebyid"):
            return action.payload
        default:
            return state
    }
}