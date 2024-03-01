import { Emote } from "../../types/Emote";
import { GetFFZEmotes } from "../FFZ/Index";

export class EmoteClient {
  private profileName: string;

  constructor(profileName: string) {
    this.profileName = profileName;
  }

  public async GetEmoteList(): Promise<Emote[]>
    {
        const emotes: Emote[] =[];


        //Get FFZ emotes
        const ffzEmotes : Emote[] =  await GetFFZEmotes(this.profileName);

        emotes.push(...ffzEmotes);

        return emotes;
    }
}


