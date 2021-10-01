const residentsBtn = document.querySelector('#residents');
const residentsTable = document.querySelector('#residents-table');

function setTableHeaders(){
    const headerRow = document.createElement('tr');
    const engTitle = document.createElement('th');
    const wokTtitle = document.createElement('th');

    engTitle.textContent = "English";
    wokTtitle.textContent = "Shyriiwook (Wookiee)";
    headerRow.appendChild(engTitle);
    headerRow.appendChild(wokTtitle);
    residentsTable.appendChild(headerRow);
}

function setResidentsTable(nameEN,nameWOK){
    const entryRow = document.createElement('tr');
    const engName = document.createElement('td');
    const wokName = document.createElement('td');
    engName.textContent = nameEN;
    wokName.textContent = nameWOK;
    entryRow.appendChild(engName);
    entryRow.appendChild(wokName);
    residentsTable.append(entryRow);
}

function getResidentsENG(resident){
    return axios.get(resident);
}

function getResidentsWOK(resident){
    return axios.get(`${resident}?format=wookiee`);
}

residentsBtn.addEventListener('click', () =>{
    setTableHeaders();    
    axios.get('https://swapi.dev/api/planets/?search=Alderaan').then((res)=>{
        const alderaanResidents = res.data.results[0].residents;
        for (let i = 0; i < alderaanResidents.length; i++) {
            const resident = alderaanResidents[i];
            axios.all([getResidentsENG(resident),getResidentsWOK(resident)]).then(results =>{
                let engName = results[0].data.name;
                let wokName = results[1].data.whrascwo;
                setResidentsTable(engName,wokName);
            });
        }
    }).catch(e => {
        console.log(e)
    });
});