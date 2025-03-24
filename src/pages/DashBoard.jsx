import React, { useEffect } from 'react'
import { axiosInstance } from '../utils/ApiCalls'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import CardContainer from '../components/common/CardContainer'
import { discoverMovies } from '../actions/discoverMovies-action'
import { genreBasedMovies } from '../actions/genreMovies-action'
import { popularMovies } from '../actions/popularMovies-action'
import Banner from '../components/partials/Banner'

const DashBoard = () => {
  const apiKey = import.meta.env.VITE_API_KEY
  const dispatch = useDispatch();
  const allMovies = useSelector(state=>state.discoverMoviesReducer)
  const actionMoviesList = useSelector(state=>state.genreMoviesReducer)
  const popularMoviesList = useSelector(state=>state.popularMoviesReducer)
  const  fetchMovies = async () => {
    try{
      const movies = await axiosInstance.get(`/discover/movie?api_key=${apiKey}`)
      dispatch(discoverMovies(movies.data.results))
    } catch (e) {
      toast(e.message||"something went wrong")
    }
  }
  const actionMovies = async () => {
    try{
      const actionMovies = await axiosInstance.get(`discover/movie?api_key=${apiKey}&with_genres=28`)
      dispatch(genreBasedMovies(actionMovies.data.results))
    } catch (e) {
      toast(e.message||"Something went wrong")
    }
  }
  const popularMoviesFetching = async()=>{
    try{
      const animatedMovies = await axiosInstance.get(`discover/movie?api_key=${apiKey}&with_genres=16`)
      dispatch(popularMovies(animatedMovies.data.results))
    } catch (e) {
      toast(e.message||"Something went wrong")
    }
  }
  useEffect(()=>{
    fetchMovies(),
    actionMovies(),
    popularMoviesFetching()
  },[])
  return (
    <>
      <Banner src={"`https://image.tmdb.org/t/p/w500/7yUlZn4gT4k2Ww2QAPL7ZpIUo77.jpg"}  text1={"Unlimited Movies, TV shows"} text2={"And More"} />
      <CardContainer title={"Discover movies"} desc={"Watch new movies"} cardData={allMovies}/>
      <CardContainer title={"Action Movies"} desc={"Want some action in your life"} cardData={actionMoviesList} />
      <CardContainer title={"Animated Movies"} desc={"Want some animated movies"} cardData={popularMoviesList} />
    </>
  )
}

export default DashBoard