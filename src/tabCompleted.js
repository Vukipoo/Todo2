


const tabCompletedContent =() =>  {


    const main = document.querySelector('.main')
    const tabCompletedContent = document.createElement('div')
    tabCompletedContent.classList.add('tabCompletedContent')

    const title = document.createElement('div')
    title.classList.add('completed-title')
    title.innerHTML = '<h1><span class="material-symbols-outlined">edit_note</span>Completed</h1>'
    tabCompletedContent.appendChild(title)

    const tasks = document.createElement('div')
    tasks.classList.add('completed-tasks')
    tasks.innerHTML = '<h2>Tasks</h2>'
    tabCompletedContent.appendChild(tasks)

    main.appendChild(tabCompletedContent)


}

export default tabCompletedContent