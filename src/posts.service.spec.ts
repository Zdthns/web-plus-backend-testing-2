import { Post, PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;
  const post: Omit<Post, 'id' | 'date'> = {
    text: 'Mocked post',
  };

  beforeEach(async () => {
    postsService = new PostsService();
    postsService.create({ text: 'Some pre-existing post' });

  });

  it('should add a new post', () => {

    expect(postsService.find("1")).toEqual({
      id: expect.any(String),
      date: expect.any(String),
      text: 'Some pre-existing post'
    });

  });
  //должен быть найден пост
  it('should find a post', () => {
    expect(postsService.find("1")).toMatchObject(
      {
        id: "1",
        date: expect.any(String),
        text: 'Some pre-existing post'
      }
    );
  });
});