

export class ApiClient {

    public static async Get<T>(url: string): Promise<T> {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(response.statusText)
        }
        return await (response.json() as Promise<T>)
    }

}