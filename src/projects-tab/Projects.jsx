// React Imports
import { useState } from 'react';

// Library Imports
import * as Ariakit from '@ariakit/react';

// Internal Imports
import '../common/CardDisplay.jsx';
import CardDisplay from '../common/CardDisplay.jsx';
import radials_2023 from '../assets/2023_Radials.jpeg';
import households_2023 from '../assets/2023_HouseholdConditions.jpeg';
import bachelor_2022 from '../assets/2022_Bachelor.jpeg';
import access_2021 from '../assets/2021_FoodAccess.jpeg';
import wordclouds_2020 from '../assets/2020_Wordclouds.jpeg';

const projectData = [
    {
        'id': 0,
        'featured': false,
        'year': 2024,
        'title': 'Portfolio Site',
        'imgPath': radials_2023,
        'caption': 'More details here!!!',
    },
    {
        'id': 1,
        'year': 2023,
        'featured': true,
        'title': 'Food Allergens in Human Milk',
        'imgPath': radials_2023,
        'caption': 'More details here!!!',
    },
    {
        'id': 2,
        'year': 2023,
        'featured': true,
        'title': 'Conditions Affecting Remote Learning',
        'imgPath': households_2023,
        'caption': 'More details here!!!',
    },
    {
        'id': 3,
        'year': 2022,
        'featured': false,
        'title': 'Grocery Inflation & SNAP',
        'imgPath': radials_2023,
        'caption': 'More details here!!!',
    },
    {
        'id': 4,
        'year': 2022,
        'featured': false,
        'title': '\'The Bachelor\' Exploratory Data Analysis',
        'imgPath': bachelor_2022,
        'caption': 'More details here!!!',
    },
    {
        'id': 5,
        'featured': true,
        'year': 2021,
        'title': 'Poverty & Food Access for US Children',
        'imgPath': access_2021,
        'caption': 'More details here!!!',
    },
    {
        'id': 6,
        'year': 2020,
        'featured': true,
        'title': 'Social Media Storytelling on the AT',
        'imgPath': wordclouds_2020,
        'caption': 'More details here!!!',
    },
]

function Projects() {
    const [open, setOpen] = useState(false);
    const [dialogHeader, setDialogHeader] = useState('Default Header');
    const [dialogContent, setDialogContent] = useState('Default content - if you\'re reading this then something went wrong with the dialog!');

    function onCardClick(projectID) {
        setDialogHeader(projectData[projectID].title);
        setOpen(true);
    }

    return (
        <div className="tab-wrapper">
            <p>Hi there! I am the Projects tab 😊</p>
            <CardDisplay contentArray={ projectData } clickHandler={ onCardClick }/>
            <Ariakit.Dialog
                backdrop={false}
                open={open}
                onClose={() => setOpen(false)}
                className="dialog"
                render={(props) => (
                    <div className="backdrop" hidden={!open}>
                        <div {...props} />
                    </div>
                )}
            >
                <div className="header">
                    <Ariakit.DialogHeading className="heading">{ dialogHeader }</Ariakit.DialogHeading>
                    <Ariakit.DialogDismiss className="button secondary">Close</Ariakit.DialogDismiss>
                </div>
                <p>{ dialogContent }</p>
            </Ariakit.Dialog>
        </div>
    );
  }
  
  export default Projects;