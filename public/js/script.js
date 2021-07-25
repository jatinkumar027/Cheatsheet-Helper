window.onload = ()=>{
    searchInput.value = '';
    }

const content = document.getElementsByClassName('content');
const category = document.getElementsByClassName('category');
const codeBlocks = document.getElementsByClassName('codeBlocks');

searchInput.addEventListener('keyup',()=>{

    let inputValue = (searchInput.value).toLowerCase().trim();
    let searchFound = false;

    for(i=0; i<category.length; i++){

        headerVisible = false;
        let codeSnippet = codeBlocks[i].getElementsByClassName('codeSnippet');
        for(j=0; j<codeSnippet.length; j++){

            let h3Tag = codeSnippet[j].getElementsByTagName('h3')[0];
            if(!h3Tag.innerHTML.toLowerCase().includes(inputValue)){
                codeSnippet[j].style.display = 'none';
            }
            else{
                headerVisible = true;
                searchFound = true;
                codeSnippet[j].style.display = '';
            }
        }
        if(headerVisible){
            category[i].style.display = '';
        }
        else{
            category[i].style.display = 'none';
        }
    }

if(!searchFound){
    alert('No Search found');
}

})