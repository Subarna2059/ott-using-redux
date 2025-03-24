import { combineReducers } from "redux";
import { discoverMoviesReducer } from "./reducers/discoverMovies-reducer";
import { genreMoviesReducer } from "./reducers/genreMovies-reducer";
import { popularMoviesReducer } from "./reducers/popularMovies-reducer";
import { movieByIdReducer } from "./reducers/movieById-reducer";
import { movieCastingReducer } from "./reducers/movieCasting-reducer";

export const rootReducer = combineReducers({discoverMoviesReducer,genreMoviesReducer,popularMoviesReducer, movieByIdReducer, movieCastingReducer});