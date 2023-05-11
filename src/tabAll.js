

    const tabAllContent = () => {
        const main = document.querySelector('.main')
        const tabAllContent = document.createElement('div')
        tabAllContent.classList.add('tabAllContent')

        const title = document.createElement('div')
        title.classList.add('all-title')
        title.innerHTML = '<h1><span class="material-symbols-outlined">edit_note</span>All</h1>'
        tabAllContent.appendChild(title)

        const tasks = document.createElement('div')
        tasks.classList.add('all-tasks')
        tasks.innerHTML = '<h2>Tasks</h2>'
        tabAllContent.appendChild(tasks)

        main.appendChild(tabAllContent)
    }

    export default tabAllContent