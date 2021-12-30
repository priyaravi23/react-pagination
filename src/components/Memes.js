export const Memes = ({memes, loading}) => {
    if (loading) {
        return <h3>Loading</h3>
    }

    return (
        <>
            <h1>Memes</h1>
            {memes.map(meme => (
                <div key={meme.id} className="meme-parent">
                    <div>{meme.name}</div>
                    <div><img src={meme.url} className="meme-img" alt={meme.name} /></div>
                </div>
            ))}
        </>
    )
}