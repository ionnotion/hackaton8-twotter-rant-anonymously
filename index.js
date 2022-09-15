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



let profilePictureArr = ["hackaton8/profile_picture_comp/1.jpg","hackaton8/profile_picture_comp/2.jpg","hackaton8/profile_picture_comp/3.jpg","hackaton8/profile_picture_comp/4.jpg","hackaton8/profile_picture_comp/5.jpg"] //url profile picture user
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

let displayNameInputElement = document.getElementById(`display-name-input`)

const submitDisplayNameButton = document.getElementById("signIn")

const submitFeedButton = document.getElementById('submit-twot') // elemen button untuk submit feed

const deleteTwotButton = document.getElementById(`delete-twot`)

let twotCounter = 0

// console.log(submitDisplayNameButton)
// console.log(document)
submitDisplayNameButton.addEventListener('click', function () {
    
    console.log(`terdengar!`)
    let displayNameCheck = displayNameInputElement.value
    if (displayNameCheck.length < 4 && displayNameCheck.length > 15) {
        return alert('Masukkan display name dengan 4-15 alphabet')
    }
    if (displayNameCheck === '') {
        return alert('Silahkan masukkan nama yang ingin ditampilkan')
    }

    if (!(/^[a-zA-Z]+$/.test(displayNameCheck))) {
        return alert('Display name tidak boleh berisi angka atau symbol')
    }

    location.href = "index.html"  // pindah ke page selanjutnya?
    userDisplayNameElement = displayNameCheck
    userSessionIdElement = sessionId
    userProfilePictureElement = profilePicture
})

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

deleteTwotButton.addEventListener('click', function () {
        
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