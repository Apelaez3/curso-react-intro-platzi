import './TodoItem.css'

function TodoItem(props){
    return(
      <li>
        <span>v {props.completed}</span>
        <p>{props.text}</p>
        <span>X</span>
      </li>
    );
  }

  export {TodoItem};