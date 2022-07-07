import { GetPostById } from '../services/Posts.service';
describe('display post by id', () => {
    it('should add a get post by id', async () => {
        const postById=GetPostById({
            id: 11,
            path:'posts'
      })
       
        expect((await postById).body).toBeDefined()
    })
})