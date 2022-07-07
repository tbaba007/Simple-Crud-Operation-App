import { AddPost } from '../services/Posts.service';
import { IPosts } from '../components/Posts/AddPost'
describe('add post', () => {
    it('should add a new post to the api', async () => {
        const data: IPosts={
            body: 'test',
            title:'this is just a test'
        }
        const addPost=await AddPost({
            path: 'posts',
            payLoad:data
        })
        expect(addPost.id).toBeGreaterThan(0)
    })
})