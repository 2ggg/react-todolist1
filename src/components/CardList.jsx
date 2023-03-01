import Button from "./Buttons";

const CardList = ({item, deleteHandler, doneHandler}) => {
  let result  = item.done ? '취소' : '완료';

  const defaultValue = (content) => {
    if (content === '') content = '내용이 없습니다.';
    return content;
  }

  return(
    <div className="card-box">
      <div>
        <h4>{defaultValue(item.title)}</h4>
        <span>{defaultValue(item.content)}</span>
      </div>
      <div className="buttons">
        <Button handlerFunc={doneHandler} style={'done-btn'}>
          {result}
        </Button>
        <Button handlerFunc={deleteHandler} style={'delete-btn'}>
          삭제
        </Button>
      </div>
    </div>
  );
};



export default CardList;