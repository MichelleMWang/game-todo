//import {getQuest, removeCommissions} from './quest.js';
import { loadCommissionsDOM, removeCommissions } from "./commission-DOM";

function loadDailyDOM(){
    removeCommissions(); 
    for (let i = 0; i < localStorage.length; i++){
        //loadCommissionsDOM(_quests[i]); 
        loadCommissionsDOM(JSON.parse(localStorage.getItem(localStorage.key(i)))); 
    }
}
export {loadDailyDOM}; 