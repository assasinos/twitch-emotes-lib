import { Emote } from "../../types/Emote";
import { GetBTTVEmotes } from "../BTTV/BetterTwitchTv";
import { fetchUserId } from "../Common/UserModule";
import { GetFFZEmotes } from "../FFZ/FrankerFaceZ";

export class EmoteClient {
  private profileName: string;

  constructor(profileName: string) {
    this.profileName = profileName;
  }

  public async GetEmoteList(): Promise<Emote[]>
    {

      //Get user id
      const userid : string = await fetchUserId(this.profileName);




        //Get FFZ emotes
        const ffzEmotes : Emote[] =  await GetFFZEmotes(userid);

        const bttvEmotes : Emote[] =  await GetBTTVEmotes(userid);



        return [...ffzEmotes,...bttvEmotes];
    }
}


