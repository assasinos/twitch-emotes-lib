import { ConnectionResponse, SevenTvEmote } from "../../types/7TvEmotes";
import { Emote } from "../../types/Emote";
import { ApiClient } from "../Api/ApiClient";






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
            url: `https://cdn.7tv.app/emote/${emote.id}/1x.avif` // Maybe add other format if avif isn't supported
        }
    });
}


async function GetEmotes(userId:string) : Promise<SevenTvEmote[]>
{
    //retrive channel emotes
    const emotes : ConnectionResponse = await ApiClient.Get<ConnectionResponse>(`https://7tv.io/v3/users/twitch/${userId}`);



    return emotes.emote_set.emotes;
} 
