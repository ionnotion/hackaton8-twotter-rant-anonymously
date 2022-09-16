const node = document.getElementById("tweet")
const clone = node.cloneNode(true);
document.getElementById("tweet2").appendChild(clone);

const node2 = document.getElementById("tweet")
const clone2 = node2.cloneNode(true);
document.getElementById("tweet3").appendChild(clone2);

let profilePictureArr = ["./profile_picture_comp/1.jpg","./profile_picture_comp/2.jpg","./profile_picture_comp/3.jpg","./profile_picture_comp/4.jpg","./profile_picture_comp/5.jpg"]
let tweetsArr = ["Saya tidak suka bermain paaji mobile", "Kenapa tim merah kalah terus!!!", "Film kapten tisubasa tidak masuk akal", "Game PA ini benerbener pay2win","Harga game dari EB selalu mahal", "Ini tim gak jelas pelatihnya", "Gamenya ada bug terus kayak masih beta, developernya gak niat ini", "lagunya bikin kuping sakit", "filmnya kelamaan, alurnya juga gak bagus","Masa iya tim profesional stadionnya kayak kandang", 'Nama doang ada jordannya, padahal gak bisa main basket']
let usersArr = ["Makrusus", "Pesa", "Fethir", "Onad", "kiki", "jenud", "pakjul", "akhirudin", "wali", "andreak", "tidar"]
let tempArr =[]

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// function shuffle(array) {
//     var i = array.length,
//         j = 0,
//         temp;

//     while (i--) {

//         j = Math.floor(Math.random() * (i+1));

//         // swap randomly chosen element with current element
//         temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;

//     }
//     return array[0]

// }


let image = document.getElementsByClassName("foto")
for (let i = 0; i < image.length; i++) {
    let profilePicture = profilePictureArr[getRndInteger(0,profilePictureArr.length-1)]
    if (!(tempArr.includes(profilePicture))) {
        image[i].src = profilePicture
        tempArr.push(profilePicture)
    } else{
        i--
    }
}

let twit = document.getElementsByClassName("twit")
for (let i = 0; i < twit.length; i++) {
    // let twits = shuffle(tweetsArr)
    let twits = tweetsArr[getRndInteger(0,tweetsArr.length-1)]
    if (!(tempArr.includes(twits))) {
        twit[i].innerText = twits
        tempArr.push(twits)
    } else{
        i--
    }
}

let nama = document.getElementsByClassName("nama")
for (let i = 0; i < nama.length; i++) {
    let namas = usersArr[getRndInteger(0,usersArr.length-1)]
    if (!(tempArr.includes(namas))) {
        nama[i].innerText = namas
        tempArr.push(namas)
    } else{
        i--
    }
}

let sessionId = document.getElementsByClassName("RNG")
for (let i = 0; i < sessionId.length; i++) {
    let strNum = ''
    let output = ''
    while (strNum.length < 9){
        let number = Math.floor(Math.random()*10)
        strNum+= number.toString();
    }
    output = `#${strNum}`
    sessionId[i].innerText = output
}