// Library Imports
import * as Ariakit from '@ariakit/react';

// Internal Imports
import './Projects-style.css';
import '../common/CardDisplay.jsx';
import CardDisplay from '../common/CardDisplay.jsx';

const projectData = [
    {
        'title': 'Title 1',
        'imgPath': '../assets/react.svg',
        'bottomText': 'More details here!!!',
    },
    {
        'title': 'Title 2',
        'imgPath': '../assets/react.svg',
        'bottomText': 'More details here!!!',
    },
    {
        'title': 'Title 3',
        'imgPath': '../assets/react.svg',
        'bottomText': 'More details here!!!',
    },
    {
        'title': 'Title 4',
        'imgPath': '../assets/react.svg',
        'bottomText': 'More details here!!!',
    },
]

function Projects() {
    return (
        <div className="wrapper">
        Hi there! I am a Projects component 😊
        <CardDisplay />
        </div>
    );
  }
  
  export default Projects;