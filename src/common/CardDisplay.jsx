// Library Imports
import * as Ariakit from '@ariakit/react';

// Internal Imports
import './CardDisplay-style.css';
import Card from './Card.jsx';

function CardDisplay({ contentArray = [] }) {

    return (
        <ul className="card-ul">
            { contentArray.map(function(cardContent) {
                return (
                    <li className="card-li" key={ cardContent.id }>
                        <Card
                            title={ cardContent.title }
                            imgPath={ cardContent.imgPath }
                            caption={ cardContent.caption }
                        />
                    </li>
                )
            }) }
        </ul>
    );
  }
  
  export default CardDisplay;