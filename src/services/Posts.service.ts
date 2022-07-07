import { DELETE, Get, GetById, PUT, Post } from '../api/httpRequest';
import { IPosts } from '../components/Posts/AddPost';

export const GetPostById = ({ path, id }: { path: string, id: number }):Promise<IPosts> => {
    return GetById({
        id: id,
        path:path
    })
}

export const AddPost = ({path,payLoad}:{path:string,payLoad:IPosts}):Promise<{id:number}> => {
    return Post({
        path: path,
        payLoad:payLoad
    })
}

export const GetAllPosts = (path:string):Promise<IPosts[]> => {
    return Get(path)
}

export const UpdatePosts = ({path,payLoad,id}:{path:string,payLoad:IPosts,id:number}):Promise<IPosts> => {
    return PUT({
        id: id,
        path: path,
        payLoad:payLoad
    })
}

export const DeletePosts = ({id,path }:{id:number,path:string}):Promise<{}> => {
    return DELETE(
        {
            id: id,
            path:path
        }
    )
}