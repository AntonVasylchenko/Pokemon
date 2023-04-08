import React, { useEffect, useState } from 'react'
import Card from './Card'
import Pokeinfo from './Pokeinfo'
import axios from "axios"

const Main = () => {
    const [pokeData, setPokeData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/?limit=6&offset=0");
    const [nextUrl, setNextUrl] = useState();
    const [prevUrl, setPrevtUrl] = useState();
    const [pokeDex, setPokeDex] = useState();

    const pokeFun = async () => {
        setLoading(true);
        const res = await axios.get(url);
        setNextUrl(res.data.next)
        setPrevtUrl(res.data.previous)
        getPokemon(res.data.results)
        setLoading(false);
    }

    const getPokemon = async (res) => {
        res.map(async el => {
            const result = await axios.get(el.url)
            setPokeData(state => {

                state = [...state, result.data];
                state.sort((a, b) => a.id - b.id)
                return state;
            })
        })
    }

    useEffect(() => {
        pokeFun();
    }, [url])
    return (
        <div className='container'>
            <div className="left-content">
                <Card pokeData={pokeData} loading={loading} infoPokemon={poxe => setPokeDex(poxe)} />
                <div className='btn-group'>
                    {
                        prevUrl ? <button onClick={() => { setPokeData([]); setUrl(prevUrl) }}>Prev</button> : <button disabled >Prev</button>
                    }
                    {
                        nextUrl ? <button onClick={() => { setPokeData([]); setUrl(nextUrl) }}>Next</button> : <button disabled >Next</button>
                    }
                </div>
            </div>
            <div className="right-content">
                <Pokeinfo pokeDex={pokeDex} />
            </div>
        </div>
    )
}

export default Main