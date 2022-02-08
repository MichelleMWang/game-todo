const quests = (() => { 
    const addQuestBut = document.getElementById('add-quest-button'); 
    const navItems = document.getElementById('nav-items'); 

    let _quests = [
        {name: 'Schoolwork', 
        commissions: [{
            name: 'Finish Physics Wks'
        }]}
    ]; 
    let _currentQuest = _quests.find(quest => {
        return quest.name = 'Schoolwork'; 
    }); //CHANGE LATER TO INDEX.JS 
    console.log(_currentQuest);  

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
            addQuestToNav(name); 
            const newQuest = createQuest(name)
            loadQuest(newQuest);
            _currentQuest = newQuest; //CHANGE LATER TO INDEX.JS
        })
        navItems.appendChild(submitBut); 
    }); 

    function createQuest(name) {
        const newQuest = {
            name: name, 
            commissions: []
        }; 
        _quests.push(newQuest); 
        return newQuest;  
    }
    function addQuestToNav(name){
        const newQuest = document.createElement('li'); 
        newQuest.classList.add('quest-item'); 
        const newQuestLink = document.createElement('a'); 
        newQuestLink.classList.add('quest-item-a'); 
        newQuestLink.textContent = name; 
        newQuest.appendChild(newQuestLink); 
        navItems.appendChild(newQuest); 
    }
    function loadQuest(quest){
        const commissionsLi = document.querySelectorAll('.commissions-item'); 
        commissionsLi.forEach(commission => commission.remove()); 
        
        if (quest.commissions.length !== 0) loadCommissionsDOM(quest); 

    }


    //Commissions
    const commUl = document.getElementById('commissions-ul'); 
    const addCommButton = document.getElementById('add-commissions-button'); 

    addCommButton.addEventListener('click', () => {
        const input = document.createElement('input');
        input.type = 'text'; 
        input.classList.add('input-textbox'); 
        commUl.appendChild(input); 

        const submitBut = document.createElement('button'); 
        submitBut.textContent = 'Add';
        submitBut.addEventListener('click', () => {
            const commName = input.value; 
            input.remove(); 
            submitBut.remove(); 
            let newComm = createCommission(commName, _currentQuest); 
            createCommissionsDOM(newComm); 
        }) 
        commUl.appendChild(submitBut); 
    })
    function createCommission(name, quest){
        let comms = quest.commissions; 
        console.log(comms); 
        const newComm = {name: name}; 
        console.log(newComm); 
        comms.push(newComm); 
        return newComm; 
    }
    function loadCommissionsDOM(quest){
        const comms = quest.commissions; 
        comms.forEach(comm => {
            createCommissionsDOM(comm); 
        })
    }
    function createCommissionsDOM(commission){
        const commli = document.createElement('li'); 
        commli.classList.add('commissions-item'); 
        const commDiv = document.createElement('div'); 
        commDiv.classList.add('commissions-item-left'); 

        const commImg = document.createElement('img'); 
        commImg.classList.add('commission-img'); 
        commImg.src = './assets/Icon-Commission.png'; 
        const commTitle = document.createElement('h3'); 
        commTitle.classList.add('commissions-title'); 
        commTitle.textContent = commission.name; 
        commDiv.appendChild(commImg); 
        commDiv.appendChild(commTitle); 

        commli.appendChild(commDiv); 
        commUl.appendChild(commli); 
    }

    function getQuests() {
        return _quests; 
    }
    return{
         getQuests   
    }
    
})(); 

export default quests; 