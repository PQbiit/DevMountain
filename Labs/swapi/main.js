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

residentsBtn.addEventListener('click', () =>{
    setTableHeaders();
    axios.get('https://swapi.dev/api/planets/?search=Alderaan').then((res)=>{
        const alderaanResidents = res.data.results[0].residents;
        for (let i = 0; i < alderaanResidents.length; i++) {
            let residentNameEN = "";
            let residentNameWOK = "";
            
            axios.get(alderaanResidents[i]).then((resENG) => {
                residentNameEN = resENG.data.name;
                axios.get(`${alderaanResidents[i]}?format=wookiee`).then((resWOK) => {
                    residentNameWOK = resWOK.data.whrascwo;
                    setResidentsTable(residentNameEN,residentNameWOK);
                }).catch(e =>{
                    console.log(e);
                });
            }).catch(e =>{
                console.log(e);
            });
        }
    }).catch(e => {
        console.log(e)
    });
});