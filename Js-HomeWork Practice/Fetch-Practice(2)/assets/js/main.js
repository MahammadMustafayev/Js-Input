let tr = document.getElementById("tr");


fetch('https://restcountries.com/v3.1/subregion/asia')
    .then(res => res.json())
    .then(data => {
        console.log(data);
         data.forEach(ele => {
                  tr.innerHTML =
              `<th scope="row">${ele.name.common}</th>
     <td>${ele.capital}</td>
     <td>${Object.values.currencies.name}</td>
     <td>${ele.subregion}</td>
     <td>${ele.population}</td>
     <td>${ele.timezones}</td>
     <td><img src="${ele.flags.innerText}" ></td>`
         });
    })