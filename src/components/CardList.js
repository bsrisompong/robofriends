import React from 'react'
import Card from './Card'

export const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map(item => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  )
}

export default CardList
