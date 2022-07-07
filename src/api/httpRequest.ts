import { IPosts } from '../components/Posts/AddPost';
import {handleJsonResponse } from './httpResponse';
const apiURL = process.env.REACT_APP_API_BASEURL;

export const Get = async(path:string):Promise<IPosts[]> => {
    const response = await fetch(`${apiURL}/${path}`)
    .then(handleJsonResponse)
    .then((response) => {
      return response;
    });
  return response as unknown as IPosts[] ;
}

export const GetById = async ({path,id}:{path:string,id:number} ) => {
    const response = await fetch(`${apiURL}/${path}/${id}`)
    .then(handleJsonResponse)
    .then((response) => {
      return response;
    });
  return response as unknown as IPosts;
}

export const Post = async ({path,payLoad}:{path:string,payLoad:any}) => {
    const response = await fetch(`${apiURL}/${path}`, {
        method: "POST",
        body: JSON.stringify(payLoad)
    }).then(handleJsonResponse)
        .then((response) => {
        return response
        })
    return response as unknown as {id:number};
}
export const PUT = async ({path,payLoad,id}:{path:string,payLoad:any,id:number}) => {
    const response = await fetch(`${apiURL}/${path}/${id}`, {
        method: "PUT",
        body: JSON.stringify(payLoad)
    }).then(handleJsonResponse)
        .then((response) => {
        return response
        })
    return response as unknown as IPosts;
}
export const DELETE = async ({ id, path }:{id:number,path:string }) => {
    const response = await fetch(`${apiURL}/${path}/${id}`, {
        method: "DELETE",
    }).then(handleJsonResponse)
        .then((response) => {
        return response
        })
    return response as unknown as {};
}