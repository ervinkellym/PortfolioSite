// React Imports
import { useState } from 'react';

// Library Imports
import * as Ariakit from '@ariakit/react';

// Internal Imports
import './Projects.css';
import '../common/CardDisplay.jsx';
import CardDisplay from '../common/CardDisplay.jsx';
import portfolio_2024 from '../assets/2024_Portfolio.jpeg';
import radials_2023 from '../assets/2023_Radials.jpeg';
import allergies1_2023 from '../assets/2023_Allergies1.jpeg';
import allergies2_2023 from '../assets/2023_Allergies2.jpeg';
import households_2023 from '../assets/2023_HouseholdConditions.jpeg';
import households2_2023 from '../assets/2023_HouseholdConditions2.jpeg';
import groceryMap_2022 from '../assets/2022_GroceriesMap.jpeg';
import groceryLine_2022 from '../assets/2022_GroceriesLine.jpeg';
import access_2021 from '../assets/2021_FoodAccess.jpeg';
import wordclouds_2020 from '../assets/2020_Wordclouds.jpeg';
import insta_2020 from '../assets/2020_Instagram.jpeg';
import instaCloud_2020 from '../assets/2020_InstaWordcloud.jpeg';

const projectData = [
    {
        'id': 0,
        'year': 2023,
        'title': 'Food Allergens in Human Milk',
        'shortDescription': 'A single-page web application with information about symptoms of infant food allergies, how long after ingestion food proteins remain in human milk, and allergy outgrowth and food reintroduction',
        'images': [
            {'src': allergies2_2023, 'alt': 'Alt Text'},
            {'src': radials_2023, 'alt': 'Alt Text'},
            {'src': allergies1_2023, 'alt': 'Alt Text'},
        ],
        'caption': 'Svelte, Vite, ECharts, HTML/CSS/JS',
        'additionalDetails': [
            {
                'type': 'text',
                'text': 'This was my Data Analytics & Visualization Master\'s capstone project. Inspired by the challenges faced by parents of children with food allergies and the limited information available to those feeding their children human milk, I strove to create an informational toolbox on food protein transfer in human milk.',
            },
            {
                'type': 'text',
                'text': 'I hope you take the time to browse the linked resources below as I explain my data, design, and development process in-depth.',
            },
            {
                'type': 'expand',
                'collapsedText': 'Technologies Used...',
                'expandedText': 'Vite, Svelte, Svelte Material UI, Node.js, Apache ECharts, HTML, CSS, JavaScript, GitHub Pages',
            },
        ],
        'links': [
            {
                'text': 'Project Site',
                'address': 'https://ervinkellym.github.io/AllergensInHumanMilk/',
            },
            // {
            //     'text': 'Code Repository',
            //     'address': 'https://github.com/ervinkellym/AllergensInHumanMilk',
            // },
            {
                'text': 'Presentation Video',
                'address': 'https://drive.google.com/file/d/13ztRVsubHWC2HuKLFd_pAdh-FJ9fAnZR/view?usp=sharing',
            },
            {
                'text': 'About this Project',
                'address': 'https://drive.google.com/file/d/1z-7jYu2cMKV_q7p1emOxPcE7_UKT1OUs/view?usp=sharing',
            }
        ],
    },
    {
        'id': 1,
        'year': 2023,
        'title': 'Conditions Affecting Remote Learning',
        'shortDescription': 'A "scrolly-telling" data story about household conditions that may affect remote K-12 learning such as linguistic isolation, crowded conditions, and access to a computer and broadband internet.',
        'images': [
            {'src': households_2023, 'alt': 'Alt Text'},
            {'src': households2_2023, 'alt': 'Alt Text'},
        ],
        'caption': 'Scrollama, D3, Python, HTML/CSS/JS',
        'additionalDetails': [
            {
                'type': 'text',
                'text': 'I live in an under-resourced school district in rural Appalachia. In college, I volunteered at the local Head Start center and was struck by how much of a difference early educational intervention can make for children with disadvantages who are struggling to keep up with their peers. In a “scrollytelling”/visual essay format, I wanted locate and draw attention to school districts that likely have the most students who have fallen behind and are struggling educationally.',
            },
            {
                'type': 'expand',
                'collapsedText': 'Technologies Used...',
                'expandedText': 'Scrollama.js, D3.js, HTML, CSS, JavaScript, Python, Jupyter & Observable Notebooks, Canva',
            },
        ],
        'links': [
            {
                'text': 'Project Site',
                'address': 'https://ervinkellym.github.io/RemoteLearningConditions/',
            },
            {
                'text': 'About this Project',
                'address': 'https://ervinkellym.github.io/RemoteLearningConditions/about.html',
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
        'shortDescription': 'An interactive bivariate choropleth visualization depecting poverty rates and percentages of children who are are affected by low food access with accompanying analysis.',
        'images': [
            {'src': access_2021, 'alt': 'Alt Text'},
        ],
        'caption': 'Python, Jupyter & Observable (D3) Notebooks',
        'additionalDetails': [
            {
                'type': 'expand',
                'collapsedText': 'Technologies Used...',
                'expandedText': 'Python, Jupyter Notebook, Observable (D3) Notebook',
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
        'shortDescription': 'A website to showcase my work and a little bit of my personality - take a look around!',
        'images': [
            {'src': portfolio_2024, 'alt': 'Alt Text'},
        ],
        'caption': 'React, Vite, Ariakit, HTML/CSS/JS',
        'additionalDetails': [
            {
                'type': 'expand',
                'collapsedText': 'Technologies Used...',
                'expandedText': 'React, Ariakit, Vite, Node.js, HTML, CSS, JavaScript, GitHub Pages',
            },
        ],
        'links': [
            {
                'text': 'Code Repository',
                'address': 'https://github.com/ervinkellym/PortfolioSite',
            },
        ],
    },
    {
        'id': 4,
        'year': 2022,
        'title': 'Grocery Inflation & SNAP Benefits',
        'shortDescription': 'A data visualization piece looking at the Consumer Price Index by grocery type and the utilization of SNAP benefits.',
        'images': [
            {'src': groceryMap_2022, 'alt': 'Alt Text'},
            {'src': groceryLine_2022, 'alt': 'Alt Text'},
        ],
        'caption': 'HTML/CSS/JS, Mapbox, Observable (D3), Python',
        'additionalDetails': [
            {
                'type': 'expand',
                'collapsedText': 'Technologies Used...',
                'expandedText': 'HTML, CSS, JavaScript, Mapbox, Python, Jupyter Notebook, Observable (D3) Notebook',
            },
        ],
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
        'shortDescription': 'A visual storytelling tool (a dynamic linked wordcloud) to aggregate conversations on social media about the Appalachian Trail and drill down to individual stories.',
        'images': [
            {'src': wordclouds_2020, 'alt': 'Alt Text'},
            {'src': instaCloud_2020, 'alt': 'Alt Text'},
            {'src': insta_2020, 'alt': 'Alt Text'},
        ],
        'caption': 'HTML/CSS/JS, Python, amCharts',
        'additionalDetails': [
            {
                'type': 'text',
                'text': 'This was my undergraduate capstone project and a part of the Virginia Tech Center for Human Computer Interaction\'s Technology on the Trail initiative.',
            },
            {
                'type': 'expand',
                'collapsedText': 'Technologies Used...',
                'expandedText': 'HTML, CSS, JavaScript, Python, amCharts',
            },
        ],
        'links': [
            {
                'text': 'Project Site',
                'address': 'https://ervinkellym.github.io/AT-Capstone/Home.html',
            },
            {
                'text': 'Article & Presentation',
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
                    <Ariakit.DialogHeading className="heading">{ dialogHeader + ', ' + selectedProject.year }</Ariakit.DialogHeading>
                    <Ariakit.DialogDismiss className="button secondary hop-up-on-hover">Close</Ariakit.DialogDismiss>
                </div>
                <p className="short-description">{ selectedProject.shortDescription }</p>
                <div className="image-rail">
                    { 'images' in selectedProject && selectedProject.images.map(function(img) {
                        return ( <img className="image-rail-image" src={ img.src } alt={ img.alt }></img> );
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