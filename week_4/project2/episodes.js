
document.getElementById("epi").addEventListener("onclick", function(){

    const getEpisodes= ()=> {
        axios.get("https://rickandmortyapi.com/api/episode")
        .then (res => {
            renderGetEpisodes (res.data)
        })
        .catch (err => console.log (err))
    }
    
    const renderGetEpisodes= (data => {
        const episodeContainer = document.getElementById("episodes")
    
        for (let i=0; i<data.length; i++){
            let episode = document.createElement("h1")
            episode.textContent = data[i].name
            episodeContainer.appendChild(character)
        }
    })
})
    
