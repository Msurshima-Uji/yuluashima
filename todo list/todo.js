inputList = document.getElementById('todo')[0]
btnAdd = document.getElementById('add')

taskList = []
btnAdd.addEventListener("click", ()=> {
  
    if(todo.value.trim() != 0){

        localItems = JSON.parse(localStorage.getItem('localItem'))
        if(localItems === null){
        taskList = []
        }else{
        taskList = localItems
        }
        taskInfo = {name: todo.value, status: "pending"}
        taskList.push(taskInfo)
        localStorage.setItem('localItem', JSON.stringify(taskList))
    }else{
    alert("Which one are you? Sushi or Ighodalo?, don't do that, you gotta write something 😇🤝");
    }
    todo.value = ""

    showlist()
})

function showlist(){
    outPut = ""
    taskListShow = document.querySelector('.todoList')
    localItems = JSON.parse(localStorage.getItem('localItem'))
    if(localItems === null){
        taskList = []
    }else{
        taskList = localItems
    }
    

    taskList.forEach((data, index) => {
        //let isCompleted = taskList.status == "completed" ? "checked" : ""
        outPut += `
        <div class="todoListItem">
            <label for="${index}">
                    <input autocomplete="on" type="checkbox" onclick="updateStatus(this)" id="${index}">
                    <p id="pText">${data.name}</p>
            </label>            
                    <button id="close" onclick="deleteItem(${index})">X</button>
        </div>            
        ` 
    }); 
    taskListShow.innerHTML = outPut

}
showlist()

function deleteItem(index){
    localItems = JSON.parse(localStorage.getItem('localItem'))
    taskList.splice(index,1)
    localStorage.setItem('localItem', JSON.stringify(taskList))
    showlist()
}


function updateStatus(selectedTask){
    let taskName = selectedTask.parentElement.lastElementChild
    if(selectedTask.checked){
        taskName.classList.add("checked")
    }else{
        taskName.classList.remove("checked")
    }
   
}








/* function checkBox(){
    checking

    window.addEventListener('load', function(){
        checking = JSON.parse(localStorage['CHecking'] || '{}')

        for(i in checking){
            el = document.querySelector('input[name"' + i + '"]')
            if (el) el.checked = true
        }

        cb = document.getElementsByClassName('saveState')

        for(i = 0; i<cb.length; i++){
            cb[i].addEventListener('click', function(evt){
                if (this.checked){
                    checking[this.name] = true
                }
                else if (checking[this.name]){
                    delete checking[this.name]
                }

                localStorage.CHecking = JSON.stringify(checking)
            })
        }



    })
}

// Add a "checked" symbol when clicking on a list item
/*function checkItem(){
    
    taskListShow = document.querySelector('.todoList')
    taskListShow.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'P') {
           ev.target.classList.toggle('checked');
        }
    }, false);
    
    showlist()

}


/*
<label for="1">
    <input type="checkbox" id="1">
    <p>Renew membership</p>
</label>
*/


