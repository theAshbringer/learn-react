import React, {useEffect, useState} from 'react'
import MyButton from "../components/UI/button/MyButton";
import MyModal from "../components/UI/modal/MyModal";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyLoader from "../components/UI/loader/MyLoader";
import PostList from "../components/PostList";
import MyPagination from "../components/UI/pagination/MyPagination";
import {usePosts} from "../hooks/usePosts";
import useFetching from "../hooks/useFetching";
import PostService from "../API/PostService";
import getPagesCount from "../utils/pages";

function Posts() {

  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const [fetchPosts, isPostsLoading, postError] = useFetching(
      // eslint-disable-next-line no-shadow
      async (limit, page) => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPagesCount(totalCount, limit));
      },
  );

  useEffect(() => {
    fetchPosts(limit, page);
  }, []);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((item) => item.id !== post.id));
  };

  const changePage = (p) => {
    setPage(p);
    fetchPosts(limit, p);
  };
  return (
    <div>
      <MyButton style={{ margin: '30px 0' }} onClick={() => setModal(true)}>
        Создать пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ marginBottom: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError && <h1>Произошла ошибка: {postError}</h1>}
      {isPostsLoading ? (
          <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '50px',
              }}
          >
            <MyLoader />
          </div>
      ) : (
          <div>
            <PostList
                remove={removePost}
                posts={sortedAndSearchedPosts}
                title="Посты про JS"
            />
            <MyPagination
                totalPages={totalPages}
                page={page}
                changePage={changePage}
            />
          </div>
      )}
    </div>
  )
}

export default Posts