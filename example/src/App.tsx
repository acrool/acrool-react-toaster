import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import {EStatus, toast, ToasterPortal} from '@acrool/react-toaster';

import './App.css';
import './bootstrap-base.min.css';
import '@acrool/react-toaster/dist/index.css';



function App() {


    return (
        <div className="App">
            <div>
                <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://reactjs.org" target="_blank" rel="noreferrer">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>
                Acrool React Toaster
                <button type="button" onClick={() => console.log('click')}>Button</button>
            </h1>
            <div className="card">
                <button color="success" onClick={() => toast({message: 'useToaster message'})}>
                    useToaster message
                </button>

                <button color="success" onClick={() => toast({status: EStatus.success, message: 'useToaster success + message'})}>
                    useToaster status + message
                </button>


                <button color="success" onClick={() => toast.success({message: 'useToaster --- toaster.success'})}>
                    useToaster --- toaster.success
                </button>


                <button color="success" onClick={() => toast({status: EStatus.warning, message: 'useToaster warning + message'})}>
                    useToaster warning + message
                </button>
                <button color="danger" onClick={() => toast({status: EStatus.error, message: 'useToaster error + message'})}>
                    useToaster error + message
                </button>


                <button color="danger" onClick={() => toast.error({message: 'useToaster --- toaster.error'})}>
                    useToaster --- toaster.error
                </button>


                <button color="info" onClick={() => toast({status: EStatus.info, message: 'useToaster info + message'})}>
                    useToaster info + message
                </button>


                <button color="success" onClick={() => toast({status: EStatus.success, message: 'window.toaster status + message'})}>
                    window.toaster status + message
                </button>



                <p>
          Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
        Click on the Vite and React logos to learn more
            </p>

            <ToasterPortal defaultTimeout={999999}/>
        </div>
    );
}

export default App;
