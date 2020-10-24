

const clientID = " 414ba09fc16a493995d4ca415360f6d8";

//userSearchQuery, see Components/src/SearchBar/Searchbar.js
const queryString = `https://api.spotify.com/v1/search?q=${userSearchQuery}&type=track&limit=${1}`;

const Spotify = {
    search() {
         fetch(queryString, {
             'Authorization' : 'Bearer' + clientID
         })
        .then((response) => {
            return response.json()
        })
        .then((jsonResponse) => {
            if(jsonResponse["tracks"]) {
                return ({
                    track: jsonResponse["tracks"]["items"][0]["name"],
                    album: jsonResponse["tracks"]["items"][0]["album"]["name"],
                    artist:jsonResponse["tracks"]["items"][0]["artists"][0]["name"]
                 })
            }
        }
        )
    }
}