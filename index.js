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

let sessionId = generateSessionId()                                                 // session-id
let displayName = sessionStorage.getItem("displayName")
let userName = displayName                       // display-name
let profilePicture = profilePictureArr[getRndInteger(0,profilePictureArr.length-1)] // profile-picture

function updateUserData() {
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
    // sessionStorage.removeItem("displayName");
    sessionStorage.setItem("sessionId", sessionId)
}

updateUserData()

let feedBox = document.getElementById("feed-box")
console.log(feedBox)
let selectTopicCheckbox = document.getElementById("topic-checkbox") // checkbox untuk menampilkan TWOT yang relevan

let twotTextInputElement = document.getElementById("twotTextArea")

const submitFeedButton = document.getElementById("submit-twot") // elemen button untuk submit feed
const deleteTwotButton = document.getElementById("delete-twot")
console.log(twotTextInputElement)
let twotCounter = 1

submitFeedButton.addEventListener('click', function () {
    if (!twotTextInputElement.value) {
        return alert('Silahkan masukkan keluhanmu')
    }
     // radio untuk memilih topic TWOT
    let topicSelectorGaming = document.getElementById("gaming").checked
    let topicSelectorSport = document.getElementById("sport").checked
    let topicSelectorMusicMovies = document.getElementById("musik__and__movie").checked
    
    let twotTopic = 0
    let textInput = twotTextInputElement.value

    console.log(topicSelectorGaming,topicSelectorSport,topicSelectorMusicMovies)
    
    if(topicSelectorGaming) twotTopic = "gaming"
    if(topicSelectorSport) twotTopic = "sport"
    if(topicSelectorMusicMovies) twotTopic = "musicnmovies"

    console.log(twotTopic)
    
    if(!twotTopic) {
        return alert(`Silahkan pilih topik keluhan`)
    }


    let twotInput = twotTextInputElement.value
    
    let feedList = document.getElementById('feed-list') // elemen yang akan menampilkan feed-feed
    let divTwot = document.createElement('div') // how to add class to an element
    divTwot.classList.add(`Twot${twotCounter}`)
    divTwot.innerHTML = `
          <div class="flex p-4 pb-0">
          <img id="" class="profile-picture h-9 w-9 rounded-full "
          src="${profilePicture}" alt="" />
          <div class="xl:flex flex-col ml-2">
          <h4 id="" class="display-name text-gray-800 dark:text-white font-bold text-sm">${userName}</h4>
          <p id="" class="session-id text-gray-400 text-sm">${sessionId}</p>
          </div>
          </p>
          </div>
          <!-- PROFIL-->
          
          <!-- CARD TWEET-->
          <div id="twot${twotCounter}" class="pl-8 xl:pl-16">
          <p id="twot0" class="w-auto font-medium text-gray-800 dark:text-white">
          ${textInput} #${twotTopic}
          </p>
          <button id="delete-twot" href="" class="font-bold bg-red-600  text-white rounded-full mt-6 px-6  flex items-center hover:bg-red-900">
          Delete
          </button>
          </div>
          <!-- CARD TWEET END-->`

    console.log(divTwot)
          
    feedList.prepend(divTwot) 
    twotCounter++
})

deleteTwotButton.addEventListener('click', function () {

    console.log('click!')
    if (confirm("Delete WOT?")) {
        let text = `deleted WOT`
        deleteTwotButton.parentNode.childNodes[1].innerText = text
        deleteTwotButton.parentNode.childNodes[1].style.fontStyle = "italic";
        deleteTwotButton.parentNode.childNodes[1].style.fontWeight = "100";
        deleteTwotButton.remove()
    }
})