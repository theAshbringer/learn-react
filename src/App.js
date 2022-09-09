import React, { useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MySelect from "./components/UI/select/MySelect";
import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "ааа", body: "яяя" },
    { id: 2, title: "ббб 2", body: "ппп" },
    { id: 3, title: "ввв 3", body: "ааа" },
  ]);
  const [selectedSort, setSelectedSort] = useState("");

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((item) => item.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts(
      [...posts].sort((a, b) => {
        return a[sort].localeCompare(b[sort]);
      })
    );
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ marginBottom: "15px 0" }} />
      <div>
        <MySelect
          defaultValue={"Сортировка"}
          options={[
            { value: "title", name: "По названию" },
            { value: "body", name: "По описанию" },
          ]}
          value={selectedSort}
          onChange={sortPosts}
        />
      </div>
      {posts.length ? (
        <PostList remove={removePost} posts={posts} title="Посты про JS" />
      ) : (
        <h1 style={{ textAlign: "center" }}>Посты не найдены!</h1>
      )}
    </div>
  );
}

export default App;
