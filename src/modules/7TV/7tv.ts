import { ConnectionResponse, SevenTvEmote } from "../../types/7TvEmotes.js";
import { Emote } from "../../types/Emote.js";
import { ApiClient } from "../Api/ApiClient.js";






export async function Get7TvEmotes(userId: string) : Promise<Emote[]>
{

    if (userId === undefined){
        return [];
    }

    const emotes : SevenTvEmote[]  = await GetEmotes(userId)



    return emotes.map((emote: SevenTvEmote) => 
    {
        return {
            name: emote.name,
            urls: [
                {url:`https://cdn.7tv.app/emote/${emote.id}/1x.webp`, size: "1x"},
                {url:`https://cdn.7tv.app/emote/${emote.id}/2x.webp`, size: "2x"},
                {url:`https://cdn.7tv.app/emote/${emote.id}/4x.webp`, size: "4x"}
            ]
        }
    });
}


async function GetEmotes(userId:string) : Promise<SevenTvEmote[]>
{
    //retrive channel emotes
    const emotes : ConnectionResponse = await ApiClient.Get<ConnectionResponse>(`https://7tv.io/v3/users/twitch/${userId}`);



    return emotes.emote_set.emotes;
} 
