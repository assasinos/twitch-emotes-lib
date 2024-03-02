

export type ConnectionResponse = {
    id : string;
    platform : string;
    username : string;
    display_name : string;
    Linked_at :number;
    emote_capacity :number;
    emote_set_id :string | null;
    emote_set : SevenTvEmoteSet;
};


export type SevenTvEmoteSet ={

    id : string;
    name : string;
    flags :number;
    tags :any[];
    immutable : boolean;
    privileged : boolean;
    emotes : SevenTvEmote[];
};

export type SevenTvEmote =
{
    id : string
    name : string
    flags : number
    timestamp : number
    actor_id : string | null;
    data :any;
};