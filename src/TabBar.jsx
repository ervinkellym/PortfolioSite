// Library Imports
import * as Ariakit from '@ariakit/react';

// Internal Imports
import './TabBar-style.css';
import Projects from './projects-tab/Projects.jsx';
import Home from './home-tab/Home.jsx';
import Contact from './contact-tab/Contact.jsx';

function TabBar() {
    const defaultSelectedId = "default-selected-tab";
    return (
        <div className="wrapper">
        <Ariakit.TabProvider defaultSelectedId={ defaultSelectedId }>
            <Ariakit.TabList className="tab-list" aria-label="Navigation Tabs">
                <Ariakit.Tab className="tab">Projects</Ariakit.Tab>
                <Ariakit.Tab className="tab" id={ defaultSelectedId }>Home/About</Ariakit.Tab>
                <Ariakit.Tab className="tab">Contact</Ariakit.Tab>
            </Ariakit.TabList>
            <div className="panels">
            <Ariakit.TabPanel>
                <Projects />
            </Ariakit.TabPanel>
            <Ariakit.TabPanel tabId={ defaultSelectedId }>
                <Home />
            </Ariakit.TabPanel>
            <Ariakit.TabPanel>
                <Contact />
            </Ariakit.TabPanel>
            </div>
        </Ariakit.TabProvider>
        </div>
    );
  }
  
  export default TabBar;