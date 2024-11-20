// Library Imports
import { Button } from "@ariakit/react";

// Internal Imports
import './Card-style.css';

function Card(props) {
    const {
        clickHandler = () => { alert("Card click handler fired") },
        id = -1,
    } = props;

    return (
        <Button className="card-wrapper hop-up-on-hover" onClick={ () => { clickHandler(id) } }>
            <h3>{ props.title }</h3>
            <img src={ props.imgPath } alt={ props.imgPath }></img>
            <p>{ props.caption }</p>
        </Button>
    );
  }
  
  export default Card;