
document.getElementById("epi").addEventListener("click", function(){
    const getEpisodes= ()=> {
        axios.get("https://rickandmortyapi.com/api/episode")
        .then (res => {
            renderGetEpisodes (res.data.results)
        })
        .catch (err => console.log (err))
    }
    getEpisodes()

    const renderGetEpisodes= (data => {
        const episodeContainer = document.getElementById("episodes")
    
        for (let i=0; i<data.length; i++){
            let episode = document.createElement("h1")
            episode.textContent = data[i].name
            episodeContainer.appendChild(episode)
        }
    })
})
    
