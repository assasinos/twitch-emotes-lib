import { Emote } from "../../types/Emote";
import { FfzEmote, FfzRoom, FfzSet } from "../../types/FfzEmote";
import { ApiClient } from "../Api/ApiClient";


export async function GetFFZEmotes(profileName: string) : Promise<Emote[]>
{
    const userId : string | undefined  = await fetchUserId(profileName);

    if (userId === undefined){
        return [];
    }

    const emotesSet : FfzEmote[] = await GetEmotes(userId);


    //Map each emote from emotesSet to emote
    const emotes : Emote[] = emotesSet.map((emote: FfzEmote) => 
    {
        return {
            name: emote.name,
            url: `https://cdn.frankerfacez.com/emoticon/${emote.id}/1` // There is also `https://cdn.frankerfacez.com/emote/${emote.id}/1` endpoint
        }
    });

    return emotes;

}


async function GetEmotes(userId: string) : Promise<FfzEmote[]>
{

    const res : FfzRoom = await ApiClient.Get<FfzRoom>(`https://api.frankerfacez.com/v1/room/id/${userId}`);

    const set :FfzSet = res.sets[Object.keys(res.sets)[0]] as FfzSet;


    return set.emoticons ;

}

async function fetchUserId(profileName: string) : Promise<string | undefined>
{
    return (await ApiClient.Get<any>(`https://api.frankerfacez.com/v1/_user/${profileName}`)).user.twitch_id;
}