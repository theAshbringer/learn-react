import React, { useRef, useState } from "react";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Description" },
    { id: 2, title: "Javascript 2", body: "Description" },
    { id: 3, title: "Javascript 3", body: "Description" },
  ]);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addNewPost = (evt) => {
    evt.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      body,
    };
    setPosts([...posts, newPost]);
    setTitle("");
    setBody("");
  };

  return (
    <div className="App">
      <form>
        {/** Управляемый компонент */}
        <MyInput
          value={title}
          onChange={(evt) => setTitle(evt.target.value)}
          type="text"
          placeholder="Название поста"
        />
        {/* * Неуправляемый (неконтроллируемый) компонент
        <MyInput ref={bodyInputRef} type="text" placeholder="Описание поста" /> */}
        <MyInput
          value={body}
          onChange={(evt) => setBody(evt.target.value)}
          type="text"
          placeholder="Описание поста"
        />
        <MyButton onClick={addNewPost}>Создать</MyButton>
      </form>
      <PostList posts={posts} title="Посты про JS" />
    </div>
  );
}

export default App;
