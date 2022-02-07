const quests = (() => { 
    const addQuestBut = document.getElementById('add-quest-button'); 
    const navItems = document.getElementById('nav-items'); 

    let _quests = []; 
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
            createQuest(name); 
            addQuestToNav(name); 
        })
        
        navItems.appendChild(submitBut); 
    }); 
    function createQuest(name) {
        const newQuest = {name: name}; 
        _quests.push(newQuest);  
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

    //func to create commission 
        //creates commission object with commission name & commission subtasks 
        //func to create commission subtask 
    //func w parameter of comm to add to DOM 
    //func w parameter subcomm to add to DOM 
    return{
            
    }
    
})(); 
export default quests; 