import axios from 'axios';

/**
 * fetch all champions on the API
 * @return {Promise<[{id:String,name:string,key:String,title:String,icon:String}]>}
 */
export function fetchAllChampions(){
    return axios.get('/api/champions').then(x=>x.data);
}

/**
 * fetch a champion by ID on the API
 * @return {Promise<{id:String,key:String,name:String,title:String,tags:[String],stats:{hp:Number,hpperlevel:Number,mp:Number,mpperlevel:Number,movespeed:Number,armor:Number,armorperlevel:Number,spellblock:Number,spellblockperlevel:Number,attackrange:Number,hpregen:Number,hpregenperlevel:Number,mpregen:Number,mpregenperlevel:Number,crit:Number,critperlevel:Number,attackdamage:Number,attackdamageperlevel:Number,attackspeedoffset:Number,attackspeedperlevel:Number},icon:String,sprite:{url:String,x:Number,y:Number},description:String}>}
 */
export function fetchChampion(id){
    return axios.get('/api/champions/'+id).then(x=>x.data);
}