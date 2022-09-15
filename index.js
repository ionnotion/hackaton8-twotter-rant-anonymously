//RNG untuk session ID

function generateSessionId() {
    let strNum = ''
    let output = ''
    
        while (strNum.length < 9){
            let number = Math.floor(Math.random()*10)
            strNum+= number.toString();
        }
    output = `#${strNum}`
    return output
}
const submitFeedButton = document.getElementById('submit-feed') // elemen button untuk submit feed

let sessionId = generateSessionId()
let displayName = document.getElementById('displayname').value
    
let feedBox = document.getElementById('feed-box')
let topicSelector = document.getElementById('topic-selector')

submitFeedButton.addEventListener('click', function () {

    let answer = '';
    
    if (!feedBox.value) {
        return alert('Silahkan masukkan keluhanmu')
    }
    
    let feedList = document.getElementById('feed-list') // elemen yang akan menampilkan feed-feed
    let divTwot = document.createElement('div') // how to add class to an element
    /* rangkai elemen twot (session ID, DisplayName, ProfilePicture, Twot)
    
    
    */
    feedList.append(divTwot)
    alert(`Jawaban ${answer}`)
})

