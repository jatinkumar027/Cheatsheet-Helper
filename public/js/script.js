window.onload = ()=>{
    searchInput.value = '';
    }

const codeSnippet = document.getElementsByClassName('codeSnippet');
const h3Tags = document.getElementsByTagName('h3');
const content = document.getElementsByClassName('content');

searchInput.addEventListener('keyup',()=>{
    let inputValue = searchInput.value;
    for (i = 0; i < h3Tags.length; i++) {
        if (!h3Tags[i].innerHTML.toLowerCase().includes(inputValue.toLowerCase())) {
            codeSnippet[i].style.display="none";

        }
        else {
            codeSnippet[i].style.display='';                
        }
    }

// left space for removing the h3 tags such as html css javascript if no items are there in the dom
})