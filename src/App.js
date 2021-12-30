import react, {useState, useEffect} from 'react'
import axios from 'axios'

// Components
import {Memes} from './components/Memes'
import {Pagination} from './components/Pagination'

// Styles
import './App.css';

export default function App() {
    const [memes, setMemes] = useState([])
    const [loading, setLoading] = useState(false)
    const [memesPerPage, setMemesPerPage] = useState(10)
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        (async () => {
            const MEMES_URL = 'https://api.imgflip.com/get_memes'
            try {
                const {data} = await axios.get(MEMES_URL)
                setMemes(data.data.memes)
                setLoading(false)
            } catch (err) {
                 throw new Error(`Unhandled request, ${err}`)
            }
        })()
    }, [])

    let indexOfLastMeme = memesPerPage * currentPage
    let indexOfFirstMeme = indexOfLastMeme - memesPerPage
    let currentMemes = memes.slice(indexOfFirstMeme, indexOfLastMeme)

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    return (
        <>
            <Memes memes={currentMemes} loading={loading} />
            <Pagination memesPerPage={memesPerPage} totalMemes={memes.length} paginate={paginate} />
        </>
    )
}
