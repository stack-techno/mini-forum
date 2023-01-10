
const form = document.querySelector("form");
const inputName = document.querySelector("form > #name");
const inputPhoto = document.querySelector("form > #photo");
const inputPost = document.querySelector("form > #post");
console.log(form,inputName,inputPhoto,inputPost);
var time = new Date();

console.log(time.toLocaleString());

const listPost = document.querySelector("#listPost")

// loading form
form.addEventListener("submit", e => {
    e.preventDefault();
    const valueInputName = inputName.value;
    const valueInputPhoto = inputPhoto.value;
    const valueInputPost = inputPost.value;
    
    inputName.value = '';
    inputPhoto.value = '';
    inputPost.value = '';

    addPost(valueInputName,valueInputPhoto,valueInputPost);
    displayPost();
})

// photo loading


// Table of posts
const posts = [
    {
        nom: "texte",
        photo: "images/images.jpeg",
        postText:"lorem fsdsff fsfsf fsfs",
        //date : Date.now()
    },
    {
        nom: "texte",
        photo: "images/images.jpeg",
        postText:"lorem fsdsff fsfsf fsfs",
        //date : Date.now()
    },
];

// show the post
const displayPost = ()=>{
    const postsNode = posts.map((post,index) => {
        return createPostElement(post,index)
    })
    listPost.innerHTML = '';
    listPost.append(... postsNode);
    

}
// create a post
const createPostElement = (post,index) =>{
    const div = document.createElement('div');
    // div avec la classe onePost

    div.innerHTML = `
    <div class="onePost">
        <div id="head">
            <img src="images/images.jpeg" >
            <h3>${post.nom}</h3>
            <p>${time.toLocaleString()}</p>
        </div>
        <div id="content">
            <p>${post.postText}</p>
            </div>
    </div>
    
    `
    return div;
}

// add a post
const addPost = (nom,photo,postText) =>{

    posts.push({
        nom,
        photo,
        postText,
    })

}

displayPost();


