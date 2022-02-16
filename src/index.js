import quests from './quest.js';
console.log(localStorage.length); 
for (let i = 0; i < localStorage.length; i++){
    console.log(JSON.stringify(localStorage.getItem(localStorage.key(i)))); 
}

quests.setStyles(); 

