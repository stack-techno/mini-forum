
const form = document.querySelector("form");
const inputName = document.querySelector("form > #name");
const inputPhoto = document.querySelector("form > #photo");
const inputPost = document.querySelector("form > #post");
const divParagraphe = document.querySelectorAll(".paragrapheRouge");
//console.log(divparagraphe);
var time = new Date();

console.log(time.toLocaleString());

const listPost = document.querySelector("#listPost")

// loading form
form.addEventListener("submit", e => {
    e.preventDefault();
    const valueInputName = inputName.value;
    const valueInputPhoto = inputPhoto.value;
    const valueInputPost = inputPost.value;
    if (valueInputName === "" && valueInputPost === "") {

        divParagraphe.forEach(function (pText) {
            pText.textContent = "Veuillez remplir le champs";
            pText.classList.add("paragrapheRougeP");
        });


    } else {
        inputName.value = '';
        inputPhoto.value = '';
        inputPost.value = '';

        divParagraphe.forEach(function (pText) {
            pText.textContent = " ";
            pText.classList.remove("paragrapheRougeP");
        });

        addPost(valueInputName, valueInputPhoto, valueInputPost);
        displayPost();
    }


})

// photo loading


// Table of posts
const posts = [
    {
        nom: "texte",
        photo: "images/images.jpeg",
        postText: "lorem fsdsff fsfsf fsfs",
        //date : Date.now()
    },

];

// show the post
const displayPost = () => {
    const postsNode = posts.map((post, index) => {
        return createPostElement(post, index)
    })
    listPost.innerHTML = '';
    listPost.append(...postsNode);


}
// create a post
const createPostElement = (post, index) => {
    const div = document.createElement('div');
    //const idListPost = document.createAttribute("id");
    //idListPost.value = "listPost";

    const divOnePost = document.createElement('div');
    const onePostClass = document.createAttribute("class");
    onePostClass.value = "onePost";

    divOnePost.setAttributeNode(onePostClass);

    const divHead = document.createElement('div');
    const idDivHead = document.createAttribute("id");
    idDivHead.value = "head";

    divHead.setAttributeNode(idDivHead);

    const img = document.createElement("img")
    const imgSrc = document.createAttribute("src");

    img.setAttributeNode(imgSrc)

    imgSrc.value = "images/images.jpeg";
    const h3 = document.createElement("h3");
    const h3Text = document.createTextNode("${post.nom}");//erreur
    //const h3Text = document.createTextNode("nom");//erreur
    const pHead = document.createElement('p');
    const pHeadText = document.createTextNode("1/19/2023");

    const divContent = document.createElement('div');
    const idContent = document.createAttribute("id");
    idContent.value = "content";

    divContent.setAttributeNode(idContent);

    const pContent = document.createElement('p');
    const pContentText = document.createTextNode("salutdd")
    //pContent.nodeValue = "gdgdgdgd"; // arevoir 

    div.appendChild(divOnePost);
    divOnePost.append(divHead, divContent);
    divHead.append(img, h3, pHead);
    h3.appendChild(h3Text);
    pHead.appendChild(pHeadText);
    divContent.appendChild(pContentText);


    // div avec la classe onePost

    /*div.innerHTML = `
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
    
    `*/
    return div;
}

// add a post
const addPost = (nom, photo, postText) => {

    posts.push({
        nom,
        photo,
        postText,
    })

}

displayPost();


