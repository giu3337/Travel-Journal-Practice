import Card from "./Card"



const CardSection = ({data}) => {
  
  const renderCards = data.map( card => {
    return <Card
     title={card.title}
     location={card.location}
     googleMapsUrl={card.googleMapsUrl}
     startDate={card.startDate}
     endDate={card.endDate}
     description={card.description}
     imageUrl={card.imageUrl}
     key={card.title}
    />
  })
  

  return (
    <section className="px-8 pt-12 flex flex-col gap-10">
        {renderCards}
    </section>
  )
}

export default CardSection