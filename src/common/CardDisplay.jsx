// Library Imports
import * as Ariakit from '@ariakit/react';

// Internal Imports
import './CardDisplay-style.css';
import Card from './Card.jsx';

function CardDisplay({ contentArray = [] }) {

    return (
        <div className="card-display-wrapper">
            <ul className="cards-wrapper">
                { contentArray.map(function(cardContent) {
                    return (
                        <li key={ cardContent.id }>
                            <Card
                                title={ cardContent.title }
                                imgPath={ cardContent.imgPath }
                                caption={ cardContent.caption }
                            />
                        </li>
                    )
                }) }
            </ul>
        </div>
    );
  }
  
  export default CardDisplay;