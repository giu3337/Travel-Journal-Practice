const Card = (props) => {
  

  return (
    <div className="flex max-w-2xl min-w-min">
     
          <img 
            src={props.imageUrl} 
            alt={props.title} 
            className="w-36 h-30 mr-5 rounded-sm object-fit"
            />
            
           

        <div className="pt-3">
          <div className="flex gap-1 justify-start items-center">
              <img 
                src="/locationIcon.png" 
                alt={props.location} 
                className="h-3 w-2"
                />
              <span className="mr-2 text-sm tracking-widest	text-[#2B283A]">{props.location}</span>
              <a href={props.googleMapsUrl} className="border-b border-[#918E9B] text-[#918E9B] text-xs">View on Google Maps</a>
          </div>

          <h1 className="font-bold text-3xl pt-1 ">{props.title}</h1>

          <div className="pt-4 font-bold text-xs">
            <span>{props.startDate}</span> &middot;  <span>{props.endDate}</span>
          </div>

          <p className="text-[#2B283A] text-sm font-light pt-2 pr-30 text-overflow: overflow-wrap  ellipsis pb-5">
            {props.description}
          </p>
        </div>

    </div>
  )
}

export default Card