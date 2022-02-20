import { createCommissionsDOM } from "./commission-DOM";
import { loadDailyDOM } from "./daily-commissions-DOM";
import { addQuestToNav } from "./quest-DOM";

const quests = (() => { 
    const addQuestBut = document.getElementById('add-quest-button'); 
    const navItems = document.getElementById('nav-items'); 

    //start of quests 
    let _quests = [
        {
           name: 'Daily Commissions', 
           commissions: []
        }, 
    ]; 
    let _currentQuest = _quests[0];  

    function getQuests() {
        return _quests; 
    }
    function getCurrentQuest() {
        return _currentQuest; 
    }
    function getQuest(index){
        return _quests[index]; 
    }

    function setStyles() {
        if (localStorage.length == 0){
            localStorage.setItem('Daily Commissions', JSON.stringify(_quests[0])); 
        } else {
        //loop through all quests/commissions and load them on to page 
            for (let i = 1; i < localStorage.length; i++){
                let questStor = localStorage.getItem(localStorage.key(i));
                let quest = JSON.parse(questStor);  
                console.log(quest.name);
                addQuestToNav(quest.name, quest); 
            }
            loadDailyCommissions(); 
        }
    }

    function changeCurrentQuest(quest){
        for (const a of document.querySelectorAll('.quest-item-a')){
            if (a.textContent.includes(_currentQuest.name)){
                a.classList.remove('current-quest'); 
            } 
        };
        _currentQuest = quest; 
        for (const a of document.querySelectorAll('.quest-item-a')){
            if (a.textContent.includes(_currentQuest.name)){
                a.classList.add('current-quest'); 
            } 
        };
    }

    addQuestBut.addEventListener('click', () => {
        const input = document.createElement('input');
        input.type = 'text'; 
        input.classList.add('input-textbox'); 
        navItems.appendChild(input); 

        const submitBut = document.createElement('button'); 
        submitBut.textContent = 'Add'; 
        submitBut.addEventListener('click', () => {
            const name = input.value;
            input.remove(); 
            submitBut.remove(); 
            
            const newQuest = createQuest(name)
            addQuestToNav(name, newQuest); 
        })
        navItems.appendChild(submitBut); 
    }); 

    function createQuest(name) {
        const newQuest = {
            name: name, 
            commissions: []
        }; 
        _quests.push(newQuest); 
        //local storage
        /*new to edit: creating quest, editing quest, removing quest */
        /* the name of the quest, then same name to edit on other function*/
        localStorage.setItem(`${newQuest.name}`, JSON.stringify(newQuest)); 
        console.log('in createQuest. local storage: ' + localStorage); 
        return newQuest;  
    }


    //Commissions
    const commUl = document.getElementById('commissions-ul'); 
    const addCommButton = document.getElementById('add-commissions-button'); 

    addCommButton.addEventListener('click', () => {
        const inputDiv = document.createElement('div'); 
        inputDiv.classList.add('input-div'); 

        const input = document.createElement('input');
        input.type = 'text'; 
        input.classList.add('input-textbox'); 
        inputDiv.appendChild(input); 

        const submitBut = document.createElement('button'); 
        submitBut.textContent = 'Add';
        submitBut.addEventListener('click', () => {
            const commName = input.value; 
            //input.remove(); 
            //submitBut.remove();
            inputDiv.remove(); 
            let newComm = createCommission(commName, _currentQuest); 
            createCommissionsDOM(newComm, _currentQuest); 
        }) 
        inputDiv.appendChild(submitBut); 
        commUl.appendChild(inputDiv); 
    })
    function createCommission(name, quest){ //adds commission to _quest
        let comms = quest.commissions; 
        //console.log(comms); 
        const newComm = {name: name}; 
        //console.log(newComm); 
        comms.push(newComm); 

        //local storage: editing quests 
        localStorage.setItem(`${quest.name}`, JSON.stringify(quest)); 
        return newComm; 
    }

    //Daily Commissions Tab 
    const dailyCommTab = document.getElementById('daily-commissions'); 
    dailyCommTab.addEventListener('click', () => {
        loadDailyCommissions(); 
    }); 
    function loadDailyCommissions() { 
        changeCurrentQuest(_quests[0]); 
        loadDailyDOM(); 
    }

    return{
        createQuest,   
        createCommission, 
        setStyles, 
        getCurrentQuest, 
        getQuests, 
        getQuest, 
        changeCurrentQuest
    }
    
})(); 

export default quests; 