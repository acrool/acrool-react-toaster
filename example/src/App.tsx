import {ToasterPortal} from '@acrool/react-toaster';

import './App.css';
import Example from './views/Example';
import Banner from './components/Banner';
import {GridThemeProvider} from '@acrool/react-grid';



function App() {
    return (
        <GridThemeProvider>
            <div className="App">
                <Banner/>
                <Example/>

                <ToasterPortal defaultTimeout={3000}/>

            </div>
        </GridThemeProvider>
    );

}

export default App;
