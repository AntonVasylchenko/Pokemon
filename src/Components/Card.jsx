import React from 'react'

const Card = ({ pokeData, loading, infoPokemon }) => {
    return (
        <>
            {
                loading ? <h1>Loading...</h1> :
                    pokeData.map(item => {
                        return <div key={item.id} className='card' onClick={() => infoPokemon(item)}>
                            <h2>{item.id}</h2>
                            <img src={item.sprites.front_default} alt={item.name} />
                            <h2>{item.name}</h2>
                        </div>
                    })
            }
        </>
    )
}

export default Card