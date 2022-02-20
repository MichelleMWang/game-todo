
function loadCommissionsDOM(quest){ //calls createCommissionsDOM to load all commissions in quest to DOM 
    const comms = quest.commissions; 
    comms.forEach(comm => {
        createCommissionsDOM(comm, quest); 
    })
}

const commUl = document.getElementById('commissions-ul'); 
const addCommButton = document.getElementById('add-commissions-button'); 

function createCommissionsDOM(commission, quest){ //creates commission in DOM, adds event listener to img 
    const commli = document.createElement('li'); 
    commli.classList.add('commissions-item'); 
    const commDiv = document.createElement('div'); 
    commDiv.classList.add('commissions-item-left'); 

    const commImg = document.createElement('img'); 
    commImg.classList.add('commission-img'); 
    commImg.src = './assets/Icon-Commission.png'; 
    checkOffCommissionButton(commImg); 

    const infoDiv = document.createElement('div');
    infoDiv.classList.add('comm-info-div'); 
    const commTitle = document.createElement('h3'); 
    commTitle.classList.add('commissions-title'); 
    commTitle.textContent = commission.name; 

    const questTag = document.createElement('h4'); 
    questTag.classList.add('commission-quest-tag'); 
    questTag.textContent = quest.name; 

    //add subtag with quest 
    //can use this to find quest when deleting comms from daily
    
    commDiv.appendChild(commImg); 
    infoDiv.appendChild(commTitle); 
    infoDiv.appendChild(questTag); 
    commDiv.appendChild(infoDiv); 

    commli.appendChild(commDiv); 
    commUl.insertBefore(commli, addCommButton);  
}
//Check off Commission 
function checkOffCommissionButton(icon) {
    icon.addEventListener('click', (e) => {
       // console.log('in event listener')
        const infoDiv = icon.nextElementSibling; 
        //console.log(infoDiv); 
        const titleDiv = infoDiv.querySelector('.commissions-title'); 
        const commName = titleDiv.textContent; 
        const questDiv = infoDiv.querySelector('.commission-quest-tag'); 
        const questName = questDiv.textContent; 
       // console.log(`${commName} ${questName}`);
       // console.log(_quests); 
        //const commQuest = _quests.find(quest => quest.name == questName); 
        const commQuest = JSON.parse(localStorage.getItem(`${questName}`)); 
       // console.log(commQuest); 
        const arr = commQuest.commissions; 
        const index = arr.findIndex(i => i.name === commName); 
        arr.splice(index, 1); 

        //console.log("index: " + index);
        const li = e.target.closest('.commissions-item'); 
        li.remove(); 

        //local storage remove comm from quest 
        localStorage.setItem(`${commQuest.name}`, JSON.stringify(commQuest));
    }); 
}

function removeCommissions(){ //from dom 
    const commissionsLi = document.querySelectorAll('.commissions-item'); 
    commissionsLi.forEach(commission => commission.remove()); 
}


export {loadCommissionsDOM, removeCommissions, createCommissionsDOM}