import { useState } from 'react';
import { EmoFire, EmoDone } from 'components/emoticon';
import Header from 'components/Header';
import CardList from 'components/CardList';
import logo from 'logo.svg';
import 'styles/reset.css';
import 'styles/App.css';

function App() {
  //list
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: "리액트 공부하기",
      content: "리액트 기초 공부",
      done: false,
    },
    {
      id: 2,
      title: "TIL 정리",
      content: "TIL 쓰기",
      done: false,
    }
  ]);

  //제목 useState
  const [title, setTitle] = useState('');

  //내용 useState
  const [content, setContent] = useState('');

  //삭제
  const deleteHandler = (item) => {
    console.log('삭제할 id:', item.id);
    //하는 중
    const doingList = todoList.filter((el) => el.id !== item.id);
    setTodoList(doingList);
    alert(`${item.id}번을 삭제했습니다.`)
  }

  //한 거
  const doneHandler = (id, todoList) => {
    const list = todoList.map((el) => {
      if(el.id === id) el.done = el.done ? false:true;
      return el;
    });
    /*
    const list = todoList.map((el) => {
    if (el.id === id) {
    return {
    ...el, done : !el.done
    }
    } else {
    return el;
    }
    })
    */
    setTodoList(list);
  }

  return (
    <div className="wrap">
      <div className='container'>
        {/* 헤더, 내용 추가버튼 */}
        <Header 
          todoList={todoList}
          setTodoList={setTodoList}
          title={title}
          setTitle={setTitle}
          content={content}
          setContent={setContent}
        />
        {/*여기까지는 잘 작동함*/}

        <div className='todo-list'>
          <h3>하는 중...<EmoFire/></h3>
          <div className='card-list'>
          {//하는 중인 리스트
            todoList.filter((item) => item.done === false)
                    .map((item) => {
              return(
                <CardList
                  key={item.id}
                  item={item}
                  deleteHandler={() => deleteHandler(item)}
                  doneHandler={() => doneHandler(item.id, todoList)}
                />
              )
            })
          }
          </div>
        </div>

        <div className='todo-list'>
          <h3>해냈다...!<EmoDone/></h3>
          <div className='card-list'>
          {//끝난 리스트
            todoList.filter((item) => item.done === true)
                    .map((item) => {
              return(
                <CardList
                  key={item.id}
                  item={item}
                  deleteHandler={() => deleteHandler(item)}
                  doneHandler={() => doneHandler(item.id, todoList)}
                />
              )
            })
          }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;