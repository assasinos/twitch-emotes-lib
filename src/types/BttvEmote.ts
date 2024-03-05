export type BttvEmote =
 {
    id: string;
    code: string;
    imageType: string;
    animated: boolean;
    userId: string;
    modifier :boolean;
    width: number | null ;
    height: number | null;
  };


  export type BttvUser = {
    id :string;
    bots : any[];
    avatar :string;
    channelEmotes : BttvEmote[];
    sharedEmotes : BttvEmote[];
    
  }