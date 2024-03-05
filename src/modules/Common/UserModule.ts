import { ApiClient } from "../Api/ApiClient.js";

export async function fetchUserId(profileName: string) : Promise<string | undefined>
{
    return (await ApiClient.Get<any>(`https://api.frankerfacez.com/v1/_user/${profileName}`)).user.twitch_id;
}