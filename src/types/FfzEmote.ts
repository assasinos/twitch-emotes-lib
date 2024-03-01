export type FfzRoom = {
    room: any; // Not used

    sets: {
      [key: string]: FfzSet; // Indexed type for any string key
    };
  }
  

export type FfzSet ={

  id : string;
  _type : number;
  icon : string | null;
  title : string;
  css : string | null;
  emoticons : FfzEmote[];
  users : any[] | null; // Not used
}
export type FfzEmote = {
    id: number;
    name: string;
    height: number;
    width: number;
    public: boolean;
    hidden: boolean;
    modifier: boolean;
    modifier_flags: number;
    offset: string | null;
    margins: string | null;
    css: string | null;
    owner: { /* ... */ } | null;
    artist: { /* ... */ } | null;
    urls: { /* ... */ } | null;
    animated: { /* ... */ } | null;
    mask: { /* ... */ } | null;
    mask_animated: { /* ... */ } | null;
    status: number;
    usage_count: number;
    created_at: string; // Assuming a string representation of a date-time
    last_updated: string | null;
  }


export type FfzSetResponse ={
  set : FfzSet;
}