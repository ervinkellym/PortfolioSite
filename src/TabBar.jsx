// Library Imports
import * as Ariakit from '@ariakit/react';

// Internal Imports
import './TabBar-style.css';
import Projects from './projects-tab/Projects.jsx';
import Home from './home-tab/Home.jsx';
import Contact from './contact-tab/Contact.jsx';
import kellymills from './assets/kellymills.png';

function TabBar() {
    const defaultSelectedId = "default-selected-tab";
    return (
        <div className="wrapper">
        <Ariakit.TabProvider defaultSelectedId={ defaultSelectedId }>
            <Ariakit.TabList className="tab-list" aria-label="Navigation Tabs">
                <Ariakit.Tab className="tab">projects</Ariakit.Tab>
                <Ariakit.Tab className={ "tab home-tab" } id={ defaultSelectedId }>
                    <img className="tab-img" src={ kellymills } alt="Kelly Mills - Home Tab"></img>
                </Ariakit.Tab>
                <Ariakit.Tab className="tab">contact</Ariakit.Tab>
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
        <footer className="footer">Kelly Mills, 2024</footer>
        </div>
    );
  }
  
  export default TabBar;