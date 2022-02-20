import { loadCommissionsDOM, removeCommissions } from "./commission-DOM";
import quests from "./quest"; 

function addQuestToNav(name, quest){
    const navItems = document.getElementById('nav-items'); 

    const newQuest = document.createElement('li'); 
    newQuest.classList.add('quest-item'); 
    const newQuestLink = document.createElement('a'); 
    newQuestLink.classList.add('quest-item-a'); 
    newQuestLink.textContent = name; 
    newQuestLink.addEventListener('click', () => {
        loadQuest(quest); 
        quests.changeCurrentQuest(quest);  
    })
    newQuest.appendChild(newQuestLink); 
    navItems.appendChild(newQuest); 
}

function loadQuest(quest){ //in dom 
    removeCommissions(); 
    if (quest.commissions.length !== 0) loadCommissionsDOM(quest); 
}

export {addQuestToNav, loadQuest}