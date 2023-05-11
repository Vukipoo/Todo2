import tabAllContent from "./tabAll"
import tabTodayContent from "./tabToday"
import tabWeekContent from "./tabWeek"
import tabImportantContent from "./tabImportant"
import tabCompletedContent from "./tabCompleted"


const createTabs = () => {
    const main = document.querySelector('.main')

    const tabs = document.createElement('div')
    tabs.classList.add('tabs')

    const tabAll = document.createElement('div')
    tabAll.classList.add('tab')
    tabAll.setAttribute('id', 'tabAll')
    tabAll.innerHTML = '<h1><span class="material-symbols-outlined">edit_calendar</span>All</h1>'
    tabs.appendChild(tabAll)

    const tabToday = document.createElement('div')
    tabToday.classList.add('tab')
    tabAll.setAttribute('id', 'tabToday')
    tabToday.innerHTML = '<h1><span class="material-symbols-outlined">edit_calendar</span>Today</h1>'
    tabs.appendChild(tabToday)


    const tabWeek = document.createElement('div')
    tabWeek.classList.add('tab')
    tabAll.setAttribute('id', 'tabWeek')
    tabWeek.innerHTML = '<h1><span class="material-symbols-outlined">edit_calendar</span>Week</h1>'
    tabs.appendChild(tabWeek)


    const tabImportant = document.createElement('div')
    tabImportant.classList.add('tab')
    tabAll.setAttribute('id', 'tabImportant')
    tabImportant.innerHTML = '<h1><span class="material-symbols-outlined">edit_calendar</span>Important</h1>'
    tabs.appendChild(tabImportant)


    const tabCompleted = document.createElement('div')
    tabCompleted.classList.add('tab')
    tabAll.setAttribute('id', 'tabCompleted')
    tabCompleted.innerHTML = '<h1><span class="material-symbols-outlined">edit_calendar</span>Completed</h1>'
    tabs.appendChild(tabCompleted)

    tabAll.addEventListener('click', () => {
        clearContent()
        tabAllContent()
    })
    tabToday.addEventListener('click', () => {
        clearContent()
        tabTodayContent()
    })
    tabWeek.addEventListener('click', () => {
        clearContent()
        tabWeekContent()

    })
    tabImportant.addEventListener('click', () => {
        clearContent()
        tabImportantContent()

    })
    tabCompleted.addEventListener('click', () => {
        clearContent()
        tabCompletedContent()

    })




    main.appendChild(tabs)

}

    function clearContent() {
        const main = document.querySelector('.main')
        const contentElements = document.querySelectorAll('.tabAllContent, .tabTodayContent, .tabWeekContent, .tabImportantContent, .tabCompletedContent')

        contentElements.forEach(element => {
            if(element){
                main.removeChild(element)
            }
        })
    }

export default createTabs