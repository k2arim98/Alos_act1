var unirest = require('unirest')
// question 2
function name_starts_with(Countries, ltr) {
    return Countries.filter(Countries => Countries.name[0] == letter)
}
var req = unirest('GET', 'http://localhost:3000/Countries').headers({
    // question 3: "response" peut ètre stocké dans le cache si validé par le serveur, mème si "response" est non-cacheable	
    "cache-control": "no-cache" }).then((res) => {
    if (res.error) throw new Error(res.error)

    // question 1
    var FIRST_10_STATES = res.body.slice(0, 10)
    console.log("FIRST 10 STATES:\n")
    console.log(FIRST_10_STATES)

    // question 2 SUITE
    console.log("STATES THAT START WITH THE LETTER M:\n")
    console.log(name_starts_with(res.body, "M"))
}) 
