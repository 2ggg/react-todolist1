import { useState } from "react";
import Button from "./Buttons";

const Header = ({todoList, setTodoList, title, setTitle, content, setContent,}) => {
  //input 통한 제목 변경
  const titleChangeHandler = (event) => {     
    setTitle(event.target.value);
  };

  //input 통한 내용 변경
  const contentChangeHandler = (event) => {   
    setContent(event.target.value);
  };

  //list 추가
  const addListHandler = () => {
    let newList = {
      id: (todoList[todoList.length-1].id+1),
      title: title,
      content: content,
      done: false,
    };
    setTodoList([...todoList, newList]);
    setTitle("");
    setContent("");
  };

  return(
    <header>
      <div>
        <span>My Todo List</span>
        <span>React</span>
      </div>
      <div>
        <span>
          <span>
            제목
            <input
              value={title}
              onChange={titleChangeHandler}
            />
          </span>
          <span>
            내용
            <input 
              value={content}
              onChange={contentChangeHandler}
            />
          </span>
        </span>
        
        {/* 추가하기 버튼 */}
        <Button 
          handlerFunc={addListHandler}
          style={'add-btn'}
        >
          추가하기
        </Button>
      </div>
    </header>
  );
};

export default Header;