import {ToasterPortal} from '@acrool/react-toaster';

import './App.css';
import Example from './views/Example';
import Banner from './components/Banner';



function App() {
    return (
        <div className="App">
            <Banner/>
            <Example/>

            <ToasterPortal defaultTimeout={5000}/>
            
        </div>
    );

}

export default App;
