import { Emote } from "../../types/Emote";
import { ApiClient } from "../Api/ApiClient";




export async function GetBTTVEmotes(userId: string) : Promise<Emote[]>
{

    if (userId === undefined){
        return [];
    }



    return (await GetEmotes(userId));
}



async function GetEmotes(userId:string) : Promise<Emote[]>{

    const globalEmotes = await GetGlobalEmotes();


    const userEmotes = await GetUserEmotes(userId);


    const emotes : Emote[] = [...globalEmotes, ...userEmotes].map((emote) => 
    {
        return {
            name: emote.code,
            urls: [ 
                {url:`https://cdn.betterttv.net/emote/${emote.id}/1x`, size:'1x'}, 
                {url:`https://cdn.betterttv.net/emote/${emote.id}/2x`, size:'2x'},
                {url:`https://cdn.betterttv.net/emote/${emote.id}/4x`, size:'4x'}
                ]
        }
    });

    return emotes;
    
    
}


async function GetGlobalEmotes() : Promise<BttvEmote[]> {

    return (await ApiClient.Get<BttvEmote[]>("https://api.betterttv.net/3/cached/emotes/global"));
    
}


async function GetUserEmotes(userId:string) : Promise<BttvEmote[]> {

    const userData : BttvUser = await ApiClient.Get<BttvUser>(`https://api.betterttv.net/3/cached/users/twitch/${userId}`);
    

    return [...userData.channelEmotes, ...userData.sharedEmotes ];
}
