// Library Imports
import * as Ariakit from '@ariakit/react';

// Internal Imports
import './CardDisplay-style.css';
import Card from './Card.jsx';

function CardDisplay(props) {
    const { 
        contentArray = [],
        clickHandler = () => { alert("CardDisplay click handler fired") },
    } = props;

    return (
        <ul className="card-ul">
            { contentArray.map(function(cardContent) {
                return (
                    <li className="card-li" key={ cardContent.id }>
                        <Card
                            id={ cardContent.id }
                            title={ cardContent.title }
                            imgPath={ cardContent.imgPath }
                            caption={ cardContent.caption }
                            clickHandler={ clickHandler }
                        />
                    </li>
                )
            }) }
        </ul>
    );
  }
  
  export default CardDisplay;