import quests from './quest.js';
 
const defaultQuest = quests.createQuest('Schoolwork'); 
quests.createCommission('Finish Physics Worksheet', defaultQuest);
quests.addQuestToNav('Schoolwork', defaultQuest); 
quests.loadQuest(defaultQuest); 
