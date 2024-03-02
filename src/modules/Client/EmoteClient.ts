import { Emote } from "../../types/Emote";
import { Get7TvEmotes } from "../7TV/7tv";
import { GetBTTVEmotes } from "../BTTV/BetterTwitchTv";
import { fetchUserId } from "../Common/UserModule";
import { GetFFZEmotes } from "../FFZ/FrankerFaceZ";

export class EmoteClient {
  private profileName: string;

  constructor(profileName: string) {
    this.profileName = profileName;
  }

  public async GetAllEmotes(): Promise<Emote[]>
    {

      //Get user id
      const userid : string = await fetchUserId(this.profileName);


        //Get FFZ emotes
        const ffzEmotes : Emote[] =  await GetFFZEmotes(userid);

        const bttvEmotes : Emote[] =  await GetBTTVEmotes(userid);

        const sevenTvEmotes : Emote[] = await Get7TvEmotes(userid);

        return [...ffzEmotes,...bttvEmotes, ...sevenTvEmotes];
    }


}


