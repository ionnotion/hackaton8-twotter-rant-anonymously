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

let sessionId = generateSessionId()
let displayName
let feedBox = document.getElementById('feed-box')
let topicSelector = document.getElementById('topic-selector') // radio untuk memilih topic TWOT
let twotCounter = 0
const submitDisplayNameButton = document.getElementById('submit-display-name')
const submitFeedButton = document.getElementById('submit-feed') // elemen button untuk submit feed
// const deleteTwotButton = document.q

submitFeedButton.addEventListener('click', function () {
    if (!feedBox.value) {
        return alert('Silahkan masukkan keluhanmu')
    }
    
    let feedList = document.getElementById('feed-list') // elemen yang akan menampilkan feed-feed
    let divTwot = document.createElement('div') // how to add class to an element
    divTwot.classList.add(`Twot${twotCounter}`)
    twotCounter++
    /* rangkai elemen twot (session ID, DisplayName, ProfilePicture, TWOT)
    
    
    */
    feedList.append(divTwot)
    alert(`Jawaban ${answer}`)
})

submitDisplayNameButton.addEventListener('click', function () {
    let displayNameCheck = submitDisplayNameButton.value
    if (displayNameCheck === '') {
        return alert('Silahkan masukkan nama yang ingin ditampilkan')
    }
    
    if (displayNameCheck.length < 4 && displayNameCheck.length > 15) {
        return alert('Masukkan display name dengan 4-15 alphabet')
    }
    if (!(/^[a-zA-Z]+$/.test(displayNameCheck))) {
        return 'Display name tidak boleh berisi angka atau symbol'
    }
                                        // 
    window.location.href = "main.html"  // pindah ke page selanjutnya?
})