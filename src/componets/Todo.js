import {useState} from 'react';
import BackDrop from './BackDrop';
import Model from './Model';

function Todo(props){

  const [modelIsOpen, setModelIsOpen] = useState(false);

  function deleteHandler(){
    setModelIsOpen(true);
  }

  function closeModelHandler(){
    setModelIsOpen(false);
  }

  function comfirmHandler(){
    setModelIsOpen(false);
  }

  function cancelHandler(){
    setModelIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="card_operation">
        <button className="btn" onClick={deleteHandler}>Delete</button>
      </div>
      {modelIsOpen && <BackDrop onCancal={closeModelHandler} />}
      {modelIsOpen && <Model onComfirm={comfirmHandler} onCancel={cancelHandler}/>}
    </div>
  );
}

export default Todo;