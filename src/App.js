/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import PostService from './API/PostService';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyLoader from './components/UI/loader/MyLoader';
import MyModal from './components/UI/modal/MyModal';
import useFetching from './hooks/useFetching';
import usePagination from './hooks/usePagination';
import { usePosts } from './hooks/usePosts';
import './styles/App.css';
import getPagesCount from './utils/pages';

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const pagesArray = usePagination(totalPages);

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
    <div className="App">
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
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title="Посты про JS"
        />
      )}
      <div className="page">
        {pagesArray.map((p) => (
          <span
            // onClick={() => setPage(p)}
            onClick={() => changePage(p)}
            className={
              page === p ? 'page__number page__number_active' : 'page__number'
            }
          >
            {p}
          </span>
        ))}
      </div>
    </div>
  );
}

export default App;
