import * as service from './rate-service.mock'

service.findAll()
    .then(rates => {
        let html = ''
        rates.forEach( rate => html += `
            <tr>
                <td>${rate.name}</td>
                <td>${rate.years}</td>
                <td>${rate.rate}%</td>
            </tr>`)
        document.getElementById("rates").innerHTML = html
    })
    .catch(e => console.log(e))

// fetch(url)
//     .then(response => response.json())
//     .then(rates => {
//       let html = ''
//       rates.forEach(rate => html += `
//         <tr>
//             <td>${rate.name}</td>
//             <td>${rate.years}</td>
//             <td>${rate.rate}%</td>
//         </tr>`)
//       document.getElementById("rates").innerHTML = html
//     })
//     .catch(e => console.log(e))