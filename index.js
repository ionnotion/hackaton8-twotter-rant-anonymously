function generateSessionId() { //RNG untuk session ID
    let strNum = ''
    let output = ''
    
        while (strNum.length < 9){
            let number = Math.floor(Math.random()*10)
            strNum+= number.toString();
        }
    output = `#${strNum}`
    return output
}

function getRndInteger(min, max) { //random untuk profile picture user
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let profilePictureArr = ["./profile_picture_comp/1.jpg","./profile_picture_comp/2.jpg","./profile_picture_comp/3.jpg","./profile_picture_comp/4.jpg","./profile_picture_comp/5.jpg"] //url profile picture user

function updateUserData() {
    let sessionId = generateSessionId()                                                 // session-id
    let displayName = sessionStorage.getItem("displayName")                             // display-name
    let profilePicture = profilePictureArr[getRndInteger(0,profilePictureArr.length-1)] // profile-picture
    
    let userSessionIdElement = document.getElementsByClassName('session-id')
    let userDisplayNameElement = document.getElementsByClassName('display-name')
    let userProfilePictureElement = document.getElementsByClassName('profile-picture')

    for(let i=0; i<userSessionIdElement.length;i++) {
        userSessionIdElement[i].innerText = sessionId
    }

    for(let i=0;i<userDisplayNameElement.length;i++) {
        userDisplayNameElement[i].innerText = displayName
    }

    for(let i=0;i<userProfilePictureElement.length;i++) {
        userProfilePictureElement[i].src = profilePicture
    }

    sessionStorage.removeItem("displayName");
    sessionStorage.setItem("sessionId", sessionId)
}

updateUserData()

let feedBox = document.getElementById("feed-box")
let topicSelectorRadio = document.getElementById("topic-selector") // radio untuk memilih topic TWOT
let selectTopicCheckbox = document.getElementById("topic-checkbox") // checkbox untuk menampilkan TWOT yang relevan

const submitFeedButton = document.getElementById("submit-twot") // elemen button untuk submit feed
const deleteTwotButton = document.getElementById("delete-twot")
console.log(deleteTwotButton.parentNode)
let twotCounter = 0

// submitFeedButton.addEventListener('click', function () {
//     if (!feedBox.value) {
//         return alert('Silahkan masukkan keluhanmu')
//     }
    
//     let feedList = document.getElementById('feed-list') // elemen yang akan menampilkan feed-feed
//     let divTwot = document.createElement('div') // how to add class to an element
//     divTwot.classList.add(`Twot${twotCounter}`)
//     twotCounter++
//     /* rangkai elemen twot (session ID, DisplayName, ProfilePicture, TWOT)
    
    
//     */
//     feedList.append(divTwot)
// })

deleteTwotButton.addEventListener('click', function () {

    console.log('click!')
    if (confirm("Delete WOT?")) {
        let text = `deleted WOT`
        deleteTwotButton.parentNode.childNodes[1].innerText = text
        deleteTwotButton.parentNode.childNodes[1].style.fontStyle = "italic";
        deleteTwotButton.remove()
    }
})