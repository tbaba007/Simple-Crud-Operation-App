import { DeletePosts } from '../services/Posts.service';
describe('delete post', () => {
    it('should delete a post by id from API', async () => {
        
        const deletePost=await DeletePosts({
            path: 'posts',
            id:1
        })
        expect(JSON.stringify(deletePost)).toEqual(JSON.stringify({}))
    })
})