let addButton = document.getElementById("add");
let mainContainer = document.getElementById("list");
let inputF = document.getElementById("fillList");

addButton.addEventListener("click", function(){
    var paragraph = document.createElement('p');
    paragraph.innerText = inputF.value;
    mainContainer.appendChild(paragraph);
    inputF.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = ' line-through';
    })
    paragraph.addEventListener('dblclick', function(){
       mainContainer.removeChild(paragraph);        
    })
})




