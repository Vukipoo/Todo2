



const tabTodayContent = () => {
    const main = document.querySelector('.main')
    const tabTodayContent = document.createElement('div')
    tabTodayContent.classList.add('tabTodayContent')

    const title = document.createElement('div')
    title.classList.add('today-title')
    title.innerHTML = '<h1><span class="material-symbols-outlined">edit_note</span>Today</h1>'
    tabTodayContent.appendChild(title)

    const tasks = document.createElement('div')
    tasks.classList.add('today-tasks')
    tasks.innerHTML = '<h2>Tasks</h2>'
    tabTodayContent.appendChild(tasks)

    main.appendChild(tabTodayContent)
}

export default tabTodayContent