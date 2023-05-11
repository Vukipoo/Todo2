

    const tabWeekContent =() =>  {


        const main = document.querySelector('.main')
        const tabWeekContent = document.createElement('div')
        tabWeekContent.classList.add('tabWeekContent')
    
        const title = document.createElement('div')
        title.classList.add('week-title')
        title.innerHTML = '<h1><span class="material-symbols-outlined">edit_note</span>Week</h1>'
        tabWeekContent.appendChild(title)
    
        const tasks = document.createElement('div')
        tasks.classList.add('week-tasks')
        tasks.innerHTML = '<h2>Tasks</h2>'
        tabWeekContent.appendChild(tasks)
    
        main.appendChild(tabWeekContent)


    }

    export default tabWeekContent