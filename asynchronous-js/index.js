const loadJoke = async () => {
    try{
        const chuckJoke = await fetch('https://api.chucknorris.io/jokes/random', {
            headers: {
                Accept: "application/json"
            }
    });
        const jokeData = await chuckJoke.json();
        document.getElementById('joke').innerHTML = jokeData.value;
    } catch(error) {
        console.log(error)
    }
};

document.getElementById('getJokeButton').addEventListener('click', loadJoke);
