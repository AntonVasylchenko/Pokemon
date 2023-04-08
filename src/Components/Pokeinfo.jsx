import React from 'react'

const Pokeinfo = ({ pokeDex }) => {
    return (
        <>
            {
                !pokeDex ? <h1>Secect Pokemon</h1> : <div>
                    <h1>{pokeDex.name}</h1>
                    <img src={pokeDex.sprites.front_default} alt={pokeDex.name} />
                    <div className="abilities">
                        {pokeDex.abilities.map((skill, index) => {
                            return <div key={index} className="group">
                                <h2>{skill.ability.name}</h2>
                            </div>
                        })}

                    </div>
                    <div className="base-stat">
                        {pokeDex.stats.map((stat, index) => {
                            return <h3 key={index}>{stat.stat.name}: {stat.base_stat}</h3>
                        })}

                    </div>
                </div>
            }
        </>
    )
}

export default Pokeinfo