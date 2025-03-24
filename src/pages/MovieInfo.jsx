import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Banner from '../components/partials/Banner';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { movieById } from '../actions/movieById-action';
import { axiosInstance } from '../utils/ApiCalls';
import Loader from '../components/common/Loader';
import { movieCasting } from '../actions/movieCasting-action';
import Card from '../components/common/Card';
import CrauselContainer from '../components/common/CrauselContainer';

const MovieInfo = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const apiKey = import.meta.env.VITE_API_KEY
    const dispatch = useDispatch()
    const movieInfo = useSelector(state => state.movieByIdReducer)
    const castingInfo = useSelector(state=>state.movieCastingReducer)
    const getInfo = async () => {
        const movieByIdInfo = await axiosInstance.get(`/movie/${id}?api_key=${apiKey}`)
        dispatch(movieById(movieByIdInfo.data));
    }
    const getCastList = async() => {
        const castList = await axiosInstance.get(`movie/${id}/credits?api_key=${apiKey}`)
        dispatch(movieCasting(castList.data))
    }
    useEffect(() => {
        getInfo(),
        getCastList()
    }, [])
    return (
        <>
            <div className='relative'>
            <div className='absolute left-0 right-0 flex  justify-center h-[100%] items-center' style={{zIndex:1}}>
                    <div className='w-[15vw]'>
                        <img className='object-cover  h-[40vh]' src={`https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`} alt="" />
                        </div>
                    <div className='w-[35vw] '>
                        <div className='text-2xl font-bold pr-3'>{movieInfo.original_title}</div>
                        <div className='flex items-center'>
                        <div className='pr-3'>{movieInfo.release_date}</div>
                        {
                            movieInfo != "" ? movieInfo.genres.map((items,index)=>{
                                return (items.name+",")
                            }): <Loader />
                        }
                        </div>
                        <div>
                        <div className='text-2xl font-semibold pt-10'>
                            OverView
                        </div>
                        <div>
                        <button onClick={()=>window.open("https://www.youtube.com/watch?v=6YnryDjEGr8")} class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                            Watch Now 
                        </button>
                        </div>
                        <div>
                        {movieInfo.overview}
                        </div>
                        </div>
                        {movieInfo.duration}
                        <div className='flex justify-between pt-10'>
                            <div>
                            <div>Director</div>
                            <div> </div>
                            </div>
                            <div>
                            <div>Screenplay</div>
                            <div></div>
                            </div>
                        </div>
                    </div>
                </div>
                    <Banner src={`${movieInfo.backdrop_path}`} />
            </div>
            <div className='flex  justify-center w-[100%] mt-10 font-semibold text-2xl'>
            <div className='w-[80%]'>
            <h2>Top Billed Cast</h2>
            </div>
            </div>
            <CrauselContainer>
                {
                    castingInfo?.cast?.length > 0  ?castingInfo.cast.map((items,index)=>{
                        return (
                            <div className='pr-10'> 
                                <Card  imgSrc={items.profile_path} cardData={items.name}/>
                                </div>
                        )
                    }):<div></div>
                }
            </CrauselContainer>
        </>
    )
}

export default MovieInfo