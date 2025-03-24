const Card = ({imgSrc,onClick, cardData}) => {
    return (
        <>
        <div className="w-[10vw] h-[24vh] shadow-2xl ">
            <div className="mr-10 h-[full]">
            <img
             className=" rounded-t-lg h-[100%]   w-[9vw] bg-yellow-500 mr-4 object-cover "  
             src={`https://image.tmdb.org/t/p/w500/${imgSrc}`} 
             alt=""
             onClick={onClick} />
             </div>
            {
                cardData != "" ? <div className="mr-10 pt-2 h-[12vh] bg-white rounded-b-lg"> <h5 className=" text-xl  text-black ">{cardData}</h5></div>:<></>
            }
        </div>

        </>
    )
}

export default Card