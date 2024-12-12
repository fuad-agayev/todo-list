const newTodoTask = document.querySelector("#new_todo_task");
const new_input_task = document.querySelector("#new_input_task");
const generatedTasks = document.querySelector("#generated_tasks");
const addBtnTasks = document.querySelector("#new_task_button");
const popupTask = document.querySelector("#popup_task");
const exitBtn = document.querySelector("#exit_btn");
const noBtn = document.querySelector("#no_btn");
const okBtn = document.querySelector("#ok_btn");
const popupTaskConfirm = document.querySelector("#popup_tasks_confirm");
const popupTaskSuccessfull = document.querySelector("#popup_tasks_successfull");

exitBtn.addEventListener("click", () => {
      popupTask.style.display = "none";
})

addBtnTasks.addEventListener("click", ()=> {
            const input_value = new_input_task.value.trim();
  
  if(input_value === ""){
            popupTask.style.display = "block";
            return
  } 

    const create_div_elem = document.createElement("div");
            create_div_elem.classList.add("all-tasks", "flex", "justify-between", "items-center", "gap-[5px]", "mt-[20px]", "w-[600px]", "h-[50px]", "border-2", "bg-zinc-200", "border-4", "rounded")
    
    const create_div_content_elem = document.createElement("div");
          create_div_content_elem.classList.add("content");

    create_div_elem.appendChild(create_div_content_elem);

    const create_input_elem = document.createElement("input");
          create_input_elem.classList.add("input-todo",  "w-[400px]", "bg-zinc-200", "round",  "h-[45px]", "outline-none", "border-none");
          create_input_elem.type = "text"
          create_input_elem.value = input_value;
          create_input_elem.setAttribute("readonly", "readonly");

    create_div_content_elem.appendChild(create_input_elem);

    const create_div_action_elem = document.createElement("div");
          create_div_action_elem.classList.add("actions", "flex", "justify-between", "items-center", "gap-[10px]", "text-red-500");

  
    const create_edit_elem = document.createElement("button");
          create_edit_elem.classList.add("edit", "text-lg", "font-bold", "text-neutral-700");
          create_edit_elem.innerHTML = "Edit"

    const create_delete_elem = document.createElement("button");
          create_delete_elem.classList.add("delete", "text-lg", "font-bold", "text-red-500");
          create_delete_elem.innerHTML = "Delete"

    create_div_action_elem.appendChild(create_edit_elem);
    create_div_action_elem.appendChild(create_delete_elem);

    create_div_elem.appendChild(create_div_action_elem);
    generatedTasks.appendChild(create_div_elem);

    new_input_task.value = "";


    create_edit_elem.addEventListener("click", () => {
      if (create_edit_elem.innerText.toLowerCase() == "edit") {
         create_input_elem.removeAttribute("readonly");
         create_input_elem.classList.add("text-violet-500");
         create_input_elem.focus();
         create_edit_elem.innerText = "Save"
      } else {
         create_input_elem.setAttribute("readonly", "readonly");
         create_edit_elem.innerText = "Edit";
         create_input_elem.classList.remove("text-violet-500")
      }
    })

    create_delete_elem.addEventListener("click", ()=> {
         popupTaskConfirm.style.display = "block"

         noBtn.addEventListener("click", ()=> {
            popupTaskConfirm.style.display = "none"
         })

         okBtn.addEventListener("click", () => {
            const ok = true
            if(ok){
            popupTaskConfirm.style.display = "none"
            generatedTasks.removeChild(create_div_elem)
            popupTaskSuccessfull.style.opacity = "1"
            if(popupTaskSuccessfull.style.opacity=== "1"){
                 setTimeout(() => {
                          popupTaskSuccessfull.style.opacity = "0"
                 }, 2000)
            }
            }
         
         })

})

})

