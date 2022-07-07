import { GetAllPosts } from '../services/Posts.service';

describe('That it should load all posts from API', () => {
    it('should fetch all post from API', async () => {
        const getAll = await GetAllPosts('posts');
        expect(getAll.length).toBeGreaterThan(50)
    })
})
