const bars = document.querySelectorAll(".bar");

const dataObjectsAsList = Array()
const data3 = Array()


function renderBar(item, sum) {
    bars.forEach(bar => {
        if (bar.parentElement.classList.contains(item[0])) {
            let height = item[1] / sum * 100
            bar.style.height = `calc(${height}% * 2.5)`;
        }
    });
}

function colorToday(today) {
    bars.forEach(bar => {
        if (bar.parentElement.classList.contains(today)) {
            bar.style.background = 'hsl(186, 34%, 60%)';
        }
    });
}


function arrayFilter(entries, day) {
    return entries.filter(entery => entery == day).join('')
}


function fetchResponse() {
    fetch('data.json')
        .then(response => {
            return response.json()
        })
        .then(data => {

            /* Summation - calculate the total amount */
            let sum = 0
            data.forEach(dat => sum += dat.amount)
                /* End of Summation*/

            let jsonDays = []
            let jsonAmount = []
            data.forEach(dat => {
                    jsonDays.push(dat.day)
                    jsonAmount.push(dat.amount)
                })
                // console.log(jsonDays, jsonAmount)

            /* Go through each item and render the bar chart */
            data.forEach(dat => {
                    renderBar([dat.day, dat.amount], sum)
                })
                /* End of bar renderer */

            /* Add hover effect eventlistener */
            bars.forEach(bar => {
                    bar.addEventListener('mouseenter', () => {
                        jsonDays.forEach((dar, idx) => {
                            if (bar.parentElement.classList.contains(dar)) {
                                bar.previousElementSibling.textContent = `$${jsonAmount[idx]}`
                                bar.previousElementSibling.style.display = 'block'
                            }
                        })
                    })
                    bar.addEventListener('mouseout', () => {
                        jsonDays.forEach((dar, idx) => {
                            if (bar.parentElement.classList.contains(dar)) {
                                // bar.previousElementSibling.textContent = jsonAmount[idx]
                                bar.previousElementSibling.style.display = 'none'
                            }
                        })
                    })
                })
                /* End of envent Listener */
            const now = new Date()
            let dayIndex = now.getDay()
            colorToday(jsonDays[dayIndex - 1])
        })
}

fetchResponse()