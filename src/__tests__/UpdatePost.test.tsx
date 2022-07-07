import { UpdatePosts } from '../services/Posts.service';
import { IPosts } from '../components/Posts/AddPost'
describe('update post', () => {
    it('should update a post by id from API', async () => {
        const data: IPosts = {
            body: 'This is just to update',
            title:'This is for test'
        }
        const updatePost=await UpdatePosts({
            path: 'posts',
            id: 1,
            payLoad:data
        })
        expect(updatePost.id).toEqual(1)
    })
})