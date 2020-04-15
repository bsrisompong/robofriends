import React from 'react'

const Card = ({ name, username, email, ...rest }) => {
  const { id } = rest
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="robots" src={`http://robohash.org/${id}`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default Card
