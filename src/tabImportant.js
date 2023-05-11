


const tabImportantContent =() =>  {


    const main = document.querySelector('.main')
    const tabImportantContent = document.createElement('div')
    tabImportantContent.classList.add('tabImportantContent')

    const title = document.createElement('div')
    title.classList.add('important-title')
    title.innerHTML = '<h1><span class="material-symbols-outlined">edit_note</span>Important</h1>'
    tabImportantContent.appendChild(title)

    const tasks = document.createElement('div')
    tasks.classList.add('important-tasks')
    tasks.innerHTML = '<h2>Tasks</h2>'
    tabImportantContent.appendChild(tasks)

    main.appendChild(tabImportantContent)


}

export default tabImportantContent