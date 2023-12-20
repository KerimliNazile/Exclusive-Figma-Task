import React from 'react'
import Card from '../Card'

const TodayFetch = () => {

    const [data, setdata] = useState(second)
fetch("products")
  return (
    <>
        {data.map((x) => (
            <div key={x.id}>
             <Card image={x.image} title={x.name} price={x.price} discount={x.no-price} raiting={x.raiting}/>
            </div>
           
          ))}
    </>
  )
}

export default TodayFetch
