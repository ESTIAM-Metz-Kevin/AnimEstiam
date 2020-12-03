/**
 * @todo Point d'entrée pour faire vos exercices...
 */
window.onload = init

function init() {

    var searchContainer = document.querySelector("#search_form")
    var searchInput = searchContainer.querySelector("input")
    var dropdownMenu = searchContainer.querySelector(".dropdown-menu")

    axios
        .get("https://api.jikan.moe/v3/search/anime?q=Fate/Zero")
        .then(function (response) {
            var results = response.data.results

            for (let index = 0; index < results.length; index++) {
                const animeData = results[index]

                var link = document.createElement("a")
                link.classList.add("dropdown-item")
                link.innerHTML = animeData.title
                link.addEventListener("click", function(event) {
                    console.log("J'ai cliqué sur le lien", event)
                })

                dropdownMenu.appendChild(link)
            }
        })
        .catch(function (error) {

        })

    // var anime = new Anime({
    //     id: 1,
    //     title: "mon titre"
    // })

    // var list = new CardList(document.querySelector(".row"))
    // list.addAnime(anime)


    // function addAnime(anime) {
        
    // }

    // const cardElement = new CardElement(document.querySelector(".row"), document.querySelector("#anime-card"))

    // cardElement.addAnime({
    //     id: 1,
    //     title: "Mon titre d'anime"
    // })

    // var cardTemplate = document.querySelector("#anime-card")
    // var row = document.querySelector(".row")

    // row.appendChild(document.importNode(cardTemplate.content, true))

    // var searchContainer = document.querySelector("#search_form")
    // var searchInput = searchContainer.querySelector("input")
    // var dropdownMenu = searchContainer.querySelector(".dropdown-menu")
    // var link = document.createElement("a")

    // link.setAttribute("href", "https://google.com")
    // link.classList.add("dropdown-item")
    // link.innerHTML = "Mon anime"

    // dropdownMenu.appendChild(link)
}