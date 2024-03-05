import { Emote } from "../../types/Emote";
import { FfzEmote, FfzRoom, FfzSet, FfzSetResponse } from "../../types/FfzEmote";
import { ApiClient } from "../Api/ApiClient";


export async function GetFFZEmotes(userId: string) : Promise<Emote[]>
{

    if (userId === undefined){
        return [];
    }


    const emotesSet : FfzEmote[] = await GetEmotes(userId);


    //Map each emote from emotesSet to emote
    const emotes : Emote[] = emotesSet.map((emote: FfzEmote) => 
    {
        return {
            name: emote.name,
            url: [`https://cdn.frankerfacez.com/emoticon/${emote.id}/1`,`https://cdn.frankerfacez.com/emoticon/${emote.id}/2`,`https://cdn.frankerfacez.com/emoticon/${emote.id}/4`] // There is also `https://cdn.frankerfacez.com/emote/${emote.id}/size` endpoint
        }
    });

    return emotes;

}






const GlobalEmoteSetId : number = 3;

async function GetEmotes(userId: string) : Promise<FfzEmote[]>
{

    //Get User Emotes
    const room : FfzRoom = await ApiClient.Get<FfzRoom>(`https://api.frankerfacez.com/v1/room/id/${userId}`);

    const privateSet :FfzSet = room.sets[Object.keys(room.sets)[0]] as FfzSet;




    //Get Global Emotes
    const globalSet : FfzSetResponse = await ApiClient.Get<FfzSetResponse>(`https://api.frankerfacez.com/v1/set/${GlobalEmoteSetId}`);

    return [... privateSet.emoticons, ... globalSet.set.emoticons];

}

