export type Emote =
{
    name: string;
    urls: {url:string; size:string;}[];

}

export type EmoteDictionary = {
    [name: string]: {
        urls: {url:string; size:string;}[];

    };
};