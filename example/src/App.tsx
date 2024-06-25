import {EStatus, toast, ToasterPortal} from '@acrool/react-toaster';
import Github from './assets/github.svg?react';

import './App.css';
import Example from './views/Example';



function App() {


    const renderHeader = () => {

        const repositoryUrl = 'https://github.com/acrool/acrool-react-toaster';
        const name = 'Acrool React Toaster';

        return <>
            <a href={repositoryUrl} target="_blank" rel="noopener noreferrer">
                <Github width={40} height={40}/>
            </a>

            <div className="banner-wrapper">
                <img src="/logo.svg" alt={name}/>
                <h1>{name}</h1>
            </div>
        </>;
    };


    return (
        <div className="App">
            {renderHeader()}


            <Example/>

            <ToasterPortal defaultTimeout={5000}/>
            
        </div>
    );

}

export default App;
