const quests = (() => { 
    const addQuestBut = document.getElementById('add-quest-button'); 
    const navItems = document.getElementById('nav-items'); 

    let _quests = {}; 
    addQuestBut.addEventListener('click', () => {
        const input = document.createElement('input');
        input.type = 'text'; 
        navItems.appendChild(input); 

    }); 
    function createQuest() {

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