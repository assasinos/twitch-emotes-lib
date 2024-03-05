export type Emote =
{
    name: string;
    url: string[];

}

export type EmoteDictionary = {
    [name: string]: {
        url: string[];
    };
};