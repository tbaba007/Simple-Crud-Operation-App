
interface IResponse{
    json: () => void,
    ok: boolean,
    statusText:any
}

export const handleJsonResponse = (response: IResponse) => {
    if (!response.ok)
    {
    return Promise.reject(response.statusText)
    }
    return Promise.resolve(response.json())
}