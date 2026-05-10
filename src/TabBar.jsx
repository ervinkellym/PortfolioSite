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
            <header>
                <nav aria-label:"Main Navigation">
                    <Ariakit.TabList className="tab-list">
                        <Ariakit.Tab className="tab">Projects</Ariakit.Tab>
                        <Ariakit.Tab className={ "tab home-tab" } id={ defaultSelectedId }>Kelly Mills</Ariakit.Tab>
                        <Ariakit.Tab className="tab">Contact</Ariakit.Tab>
                    </Ariakit.TabList>
                </nav>
            </header>
            <main>
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
            </main>
        </Ariakit.TabProvider>
        <footer className="footer">
            Kelly Mills, { new Date().getFullYear() }
        </footer>
        </div>
    );
  }
  
  export default TabBar;
