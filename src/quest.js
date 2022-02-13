const quests = (() => { 
    const addQuestBut = document.getElementById('add-quest-button'); 
    const navItems = document.getElementById('nav-items'); 

    let _quests = [
        {
            name: 'Daily Commissions', 
            commissions: []
        }, 
    ]; 
    let _currentQuest = _quests[0];  

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
        return newQuest;  
    }
    function addQuestToNav(name, quest){
        const newQuest = document.createElement('li'); 
        newQuest.classList.add('quest-item'); 
        const newQuestLink = document.createElement('a'); 
        newQuestLink.classList.add('quest-item-a'); 
        newQuestLink.textContent = name; 
        newQuestLink.addEventListener('click', () => {
            loadQuest(quest); 
            changeCurrentQuest(quest);  
        })
        newQuest.appendChild(newQuestLink); 
        navItems.appendChild(newQuest); 
    }
    function loadQuest(quest){
        removeCommissions(); 
        if (quest.commissions.length !== 0) loadCommissionsDOM(quest); 
    }
    function removeCommissions(){
        const commissionsLi = document.querySelectorAll('.commissions-item'); 
        commissionsLi.forEach(commission => commission.remove()); 
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
            createCommissionsDOM(newComm, _currentQuest); 
        }) 
        commUl.appendChild(submitBut); 
    })
    function createCommission(name, quest){ //adds commission to _quest
        let comms = quest.commissions; 
        //console.log(comms); 
        const newComm = {name: name}; 
        //console.log(newComm); 
        comms.push(newComm); 
        return newComm; 
    }
    function loadCommissionsDOM(quest){ //calls createCommissionsDOM to load all commissions in quest to DOM 
        const comms = quest.commissions; 
        comms.forEach(comm => {
            createCommissionsDOM(comm, quest); 
        })
    }
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
            const infoDiv = icon.nextElementSibling; 
            //console.log(infoDiv); 
            const titleDiv = infoDiv.querySelector('.commissions-title'); 
            const commName = titleDiv.textContent; 
            const questDiv = infoDiv.querySelector('.commission-quest-tag'); 
            const questName = questDiv.textContent; 
            //console.log(`${commName} ${questName}`);
            const commQuest = _quests.find(quest => quest.name == questName);  
            const arr = commQuest.commissions; 
            const index = arr.findIndex(i => i.name === commName); 
            arr.splice(index, 1); 

            //console.log("index: " + index);
            const li = e.target.closest('.commissions-item'); 
            li.remove(); 
        }); 
    }

    //Daily Commissions Tab 
    const dailyCommTab = document.getElementById('daily-commissions'); 
    dailyCommTab.addEventListener('click', () => {
        removeCommissions(); 
        changeCurrentQuest(_quests[0]); 
        for (let i = 0; i < _quests.length; i++){
            loadCommissionsDOM(_quests[i]); 
        }
    }); 

    return{
        createQuest,  
        addQuestToNav, 
        createCommission, 
        loadQuest
    }
    
})(); 

export default quests; 