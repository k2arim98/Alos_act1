var unirest = require('unirest')

	// question 2
function name_starts_with(Countries, ltr) {
return Countries.filter(Countries => Countries.name[0] == ltr)
}

var req = unirest('GET', 'http://localhost:3000/Countries')
req.headers({
    "cache-control": "no-cache" // question 3: "response" peut ètre stocké dans le cache si validé par le serveur, mème si "response" est non-cacheable 
})
req.end((res) {
    if (res.error) throw new Error(res.error)

    // question 1
    var first_10_Countries = res.body.slice(0, 10)
    console.log(first_10_Countries)
    
    //Appel fonction de la question 2
    console.log("STATES THAT START WITH THE LETTER M ARE:\n")
    console.log(name_starts_with(res.body, "M"))
})
