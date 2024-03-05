import { Emote, EmoteDictionary } from "../../types/Emote.js";
import { Get7TvEmotes } from "../7TV/7tv.js";
import { GetBTTVEmotes } from "../BTTV/BetterTwitchTv.js";
import { fetchUserId } from "../Common/UserModule.js";
import { GetFFZEmotes } from "../FFZ/FrankerFaceZ.js";

export class EmoteClient {
  private profileName: string;

  constructor(profileName: string) {
    this.profileName = profileName;
  }

  public async GetAllEmotesList(): Promise<Emote[]>
    {

      //Get user id
      const userid : string = await fetchUserId(this.profileName);


        //Get FFZ emotes
        const ffzEmotes : Emote[] =  await GetFFZEmotes(userid);

        const bttvEmotes : Emote[] =  await GetBTTVEmotes(userid);

        const sevenTvEmotes : Emote[] = await Get7TvEmotes(userid);

        return [...ffzEmotes,...bttvEmotes, ...sevenTvEmotes];
    }

    public async GetAllEmotesDictionary(): Promise<EmoteDictionary>
    {

      //Get user id
      const userid : string = await fetchUserId(this.profileName);


        //Get FFZ emotes
        const ffzEmotes : Emote[] =  await GetFFZEmotes(userid);

        const bttvEmotes : Emote[] =  await GetBTTVEmotes(userid);

        const sevenTvEmotes : Emote[] = await Get7TvEmotes(userid);

        let emotes : Emote[] = [...ffzEmotes,...bttvEmotes, ...sevenTvEmotes];


        let dictionary : EmoteDictionary = Object.fromEntries(emotes.map(emote => [emote.name, {urls: emote.urls}]));

        return dictionary;
    }


}


