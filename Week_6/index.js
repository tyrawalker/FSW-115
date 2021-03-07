axios.get("https://rickandmortyapi.com/api/episode")
    .then(response =>{
        const episode = response.data.results
        console.log(response.data)
    })

    .catch(error => console.log(error))


    