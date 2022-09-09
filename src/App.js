/* eslint-disable react/jsx-filename-extension */
import React, { useMemo, useState } from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MyInput from './components/UI/input/MyInput';
import MySelect from './components/UI/select/MySelect';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'ааа', body: 'яяя' },
    { id: 2, title: 'ббб 2', body: 'ппп' },
    { id: 3, title: 'ввв 3', body: 'ааа' },
  ]);
  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const sortedPosts = useMemo(() => {
    if (selectedSort) {
      return [...posts].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort]),
      );
    }
    return posts;
  }, [selectedSort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    if (searchQuery) {
      return sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }
    return sortedPosts;
  }, [searchQuery, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((item) => item.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ marginBottom: '15px 0' }} />
      <div>
        <MyInput
          value={searchQuery}
          onChange={(evt) => setSearchQuery(evt.target.value)}
          placeholder="Поиск"
        />
        <MySelect
          defaultValue="Сортировка"
          options={[
            { value: 'title', name: 'По названию' },
            { value: 'body', name: 'По описанию' },
          ]}
          value={selectedSort}
          onChange={sortPosts}
        />
      </div>
      {sortedAndSearchedPosts.length ? (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title="Посты про JS"
        />
      ) : (
        <h1 style={{ textAlign: 'center' }}>Посты не найдены!</h1>
      )}
    </div>
  );
}

export default App;
