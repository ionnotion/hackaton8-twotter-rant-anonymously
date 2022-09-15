function generateSessionId() { //RNG untuk session ID
    let strNum = ''
    let output = ''
    
    while (strNum.length < 9){ //output 9 digit untuk digunakan
        let number = Math.floor(Math.random()*10)
        strNum+= number.toString();
        }
    output = `#${strNum}`
    return output

}

function getRndInteger(min, max) { //random untuk profile picture user
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let profilePictureArr = ["","","","",""] //url profile picture user
                                                                                    // 3 data user, classnya: 
let sessionId = generateSessionId()                                                 // session-id
let displayName                                                                     // display-name
let profilePicture = profilePictureArr[getRndInteger(0,profilePictureArr.length-1)] // profile-picture


let userSessionIdElement = document.getElementById('session-id')
let userDisplayNameElement = document.getElementById('display-name')
let userProfilePictureElement = document.getElementById('profile-picture')

let feedBox = document.getElementById('feed-box')
let topicSelectorRadio = document.getElementById('topic-selector') // radio untuk memilih topic TWOT
let selectTopicCheckbox = document.getElementById(`topic-checkbox`) // checkbox untuk menampilkan TWOT yang relevan
const submitDisplayNameButton = document.getElementById('submit-display-name')
const submitFeedButton = document.getElementById('submit-feed') // elemen button untuk submit feed
// const deleteTwotButton = document.q

let twotCounter = 0

submitFeedButton.addEventListener('click', function () {
    if (!feedBox.value) {
        return alert('Silahkan masukkan keluhanmu')
    }
    
    let feedList = document.getElementById('feed-list') // elemen yang akan menampilkan feed-feed
    let divTwot = document.createElement('div') // how to add class to an element
    divTwot.classList.add(`twot${twotCounter}`)
    twotCounter++
    divTwot.innerHTML = ""

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
        return alert('Display name tidak boleh berisi angka atau symbol')
    }

    userSessionIdElement = sessionId
    userDisplayNameElement = displayNameCheck
    userProfilePictureElement = profilePicture
    window.location.href = "main.html"  // pindah ke page selanjutnya?
})