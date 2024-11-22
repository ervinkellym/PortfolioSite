// React Imports
import { useState } from 'react';

// Library Imports
import * as Ariakit from '@ariakit/react';

// Internal Imports
import './Projects.css';
import '../common/CardDisplay.jsx';
import CardDisplay from '../common/CardDisplay.jsx';
import radials_2023 from '../assets/2023_Radials.jpeg';
import households_2023 from '../assets/2023_HouseholdConditions.jpeg';
import access_2021 from '../assets/2021_FoodAccess.jpeg';
import wordclouds_2020 from '../assets/2020_Wordclouds.jpeg';

const projectData = [
    {
        'id': 0,
        'year': 2023,
        'title': 'Food Allergens in Human Milk',
        'images': [
            {'src': radials_2023, 'alt': 'Alt Text'},
        ],
        'caption': 'More details here!!!',
        'additionalDetails': [],
        'links': [
            {
                'text': 'Project Site',
                'address': 'https://ervinkellym.github.io/AllergensInHumanMilk/',
            },
            {
                'text': 'Code Repository',
                'address': 'https://github.com/ervinkellym/AllergensInHumanMilk',
            },
        ],
    },
    {
        'id': 1,
        'year': 2023,
        'title': 'Conditions Affecting Remote Learning',
        'images': [
            {'src': households_2023, 'alt': 'Alt Text'},
        ],
        'caption': 'More details here!!!',
        'additionalDetails': [
            {
                'type': 'text',
                'text': 'TODO: summary here',
            },
            {
                'type': 'expand',
                'collapsedText': 'Project Inspiration & Goal',
                'expandedText': 'I live in an extremely under-resourced school district in rural Appalachia. In college, I volunteered at the local Head Start center and was struck by how much of a difference early educational intervention can make for children with varying disadvantages who are struggling to keep up with their peers. I wanted to expand that line of thinking into K-12 schools and create a piece that can draw attention to those who need it most. In a “scrollytelling”/visual essay format, I wanted locate and draw attention to school districts that likely have the most students who have fallen behind and are struggling educationally.',
            },
        ],
        'links': [
            {
                'text': 'Project Site',
                'address': 'https://ervinkellym.github.io/RemoteLearningConditions/',
            },
            {
                'text': 'Code Repository',
                'address': 'https://github.com/ervinkellym/RemoteLearningConditions',
            }
        ],
    },
    {
        'id': 2,
        'year': 2021,
        'title': 'Poverty & Food Access for US Children',
        'images': [
            {'src': access_2021, 'alt': 'Alt Text'},
        ],
        'caption': 'D3, Observable, ...TODO',
        'additionalDetails': [
            {
                'type': 'text',
                'text': 'TODO: summary here',
            },
        ],
        'links': [
            {
                'text': 'Observable Notebook',
                'address': 'https://observablehq.com/d/a72c3d7cfd3b710e',
            },
        ],
    },
    {
        'id': 3,
        'year': 2024,
        'title': 'Portfolio Site',
        'images': [
            {'src': radials_2023, 'alt': 'Alt Text'},
        ],
        'imgPath': radials_2023,
        'caption': 'More details here!!!',
        'additionalDetails': [
            {
                'type': 'expand',
                'collapsedText': 'Collapsed text',
                'expandedText': 'Expanded text',
            },
        ],
        'links': [
            {
                'text': 'Project Site',
                'address': 'https://ervinkellym.github.io/PortfolioSite/',
            },
            {
                'text': 'Code Repository',
                'address': 'https://github.com/ervinkellym/PortfolioSite',
            },
        ],
    },
    {
        'id': 4,
        'year': 2022,
        'title': 'Grocery Inflation & SNAP',
        'images': [
            {'src': radials_2023, 'alt': 'Alt Text'},
        ],
        'caption': 'More details here!!!',
        'additionalDetails': [],
        'links': [
            {
                'text': 'Project Site',
                'address': 'https://ervinkellym.github.io/GroceryInflationD3/',
            },
            {
                'text': 'Code Repository',
                'address': 'https://github.com/ervinkellym/GroceryInflationD3',
            },
        ],
    },
    {
        'id': 5,
        'year': 2020,
        'title': 'Social Media Storytelling on the AT',
        'images': [
            {'src': wordclouds_2020, 'alt': 'Alt Text'},
        ],
        'caption': 'More details here!!!',
        'additionalDetails': [
            {
                'type': 'text',
                'text': 'TODO: summary here',
            },
        ],
        'links': [
            {
                'text': 'Project Site',
                'address': 'https://ervinkellym.github.io/AT-Capstone/Home.html',
            },
            {
                'text': 'Project Article',
                'address': 'https://icat.vt.edu/events/2020/05/icat-c-i-day-2020/social-media-storytelling-on-the-appalachian-trail.html',
            },
            {
                'text': 'Code Repository',
                'address': 'https://github.com/ervinkellym/AT-Capstone',
            }
        ],
    },
] 

function Projects() {
    const [open, setOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState({});
    const [dialogHeader, setDialogHeader] = useState('Default Header');
    const [dialogContent, setDialogContent] = useState([]);

    function onCardClick(projectID) {
        setSelectedProject(projectData[projectID]);
        setDialogHeader(projectData[projectID].title);
        setDialogContent(projectData[projectID].additionalDetails);
        setOpen(true);
    }

    return (
        <div className="tab-wrapper">
            <p>A selection of my personal and school projects. Click on a project to learn more!</p>
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
                    <Ariakit.DialogDismiss className="button secondary hop-up-on-hover">Close</Ariakit.DialogDismiss>
                </div>
                <div className="image-rail">
                    { 'images' in selectedProject && selectedProject.images.map(function(img) {
                        return ( <img src={ img.src } alt={ img.alt }></img> );
                    }) }
                </div>
                { dialogContent.map(function(contentItem) {
                    switch(contentItem.type) {
                        case 'text':
                            return ( <p>{ contentItem.text }</p> );
                            break;
                        case 'expand':
                            return ( 
                                <details>
                                    <summary>{ contentItem.collapsedText }</summary>
                                    <p>{ contentItem.expandedText }</p>
                                </details>
                            );
                            break;
                        default:
                            return ( <></> );
                    }
                })
                }
                <div className="link-rail">
                    { 'links' in selectedProject && selectedProject.links.map(function(link) {
                        return (<a className="link hop-up-on-hover" target="_blank" rel="noopener noreferrer" href={ link.address }>{ link.text }</a>);
                    }) }
                </div>
            </Ariakit.Dialog>
        </div>
    );
  }
  
  export default Projects;