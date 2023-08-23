document.addEventListener('DOMContentLoaded', () =>{
    const list = document.querySelector('#movie-list ul');

    //deleting items
    list.addEventListener('click', (e) =>{
        if(e.target.className === 'delete'){
            const li = e.target.parentElement;
            li.parentNode.removeChild(li);
        }
    })

    //adding new items 
    const movieBtn = document.getElementById('movie-btn')
    const inputField = document.getElementById('movie-input')

    movieBtn.addEventListener('click', (e) =>{
        e.preventDefault();
        if(inputField.value === ""){
            alert('This field cannot be empty!')
        }else{
            //creating element
        const li = document.createElement('LI')
        const text = document.createElement('SPAN')
        const deleteTxt = document.createElement('SPAN')
        // Adding classess
        text.className = 'text';
        deleteTxt.classList = 'delete';
        //Adding text content
        text.textContent = inputField.value;
        deleteTxt.textContent = 'delete';
        //Appending element
        li.appendChild(text)
        li.appendChild(deleteTxt);
        list.appendChild(li);
        }
        inputField.value = '';
    })
})