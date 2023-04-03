# bear-react-toaster

> Toaster library based for Reactjs


[![NPM](https://img.shields.io/npm/v/bear-react-toaster.svg)](https://www.npmjs.com/package/bear-react-toaster)
[![npm](https://img.shields.io/npm/dm/bear-react-toaster.svg)](https://www.npmjs.com/package/bear-react-toaster)

## Install

```bash
yarn add bear-react-toaster
```

## Usage

add in your index.tsx
```tst
import "bear-react-toaster/dist/index.css";

```

add in your App.tsx

```tsx
import {ToasterPortal} from "bear-react-toaster";

const App = () => {
    return (
        <div>
            <BaseUsed/>
            <ToasterPortal timeout={3000}/>
        </div>
    );
};
```

then in your page
```tsx
import {EStatus, toast} from 'bear-react-toaster';


const BaseUsed = () => {

    return (
        <div>
            <button type="button" onClick={() => toast({message: 'useToaster message'})}>
                useToaster message
            </button>

            <button type="button" onClick={() => toast({status: EStatus.success, message: 'useToaster success + message'})}>
                useToaster status + message
            </button>


            <button type="button" onClick={() => toast.success({message: 'useToaster --- toaster.success'})}>
                useToaster --- toaster.success
            </button>


            <button type="button" onClick={() => toast({status: EStatus.warning, message: 'useToaster warning + message'})}>
                useToaster warning + message
            </button>
            
            <button type="button" color="danger" onClick={() => toast({status: EStatus.error, message: 'useToaster error + message'})}>
                useToaster error + message
            </button>

            <button type="button" color="danger" onClick={() => toast.error({message: 'useToaster --- toaster.error'})}>
                useToaster --- toaster.error
            </button>


            <button type="button" color="info" onClick={() => toast({status: EStatus.info, message: 'useToaster info + message'})}>
                useToaster info + message
            </button>


            <button type="button" onClick={() => toast({status: EStatus.success, message: 'window.toaster status + message'})}>
                window.toaster status + message
            </button>


        </div>
    );

};
```


There is also a codesandbox template that you can fork and play with it:

[![Edit react-editext-template](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/rkexls)

[Component and setup docs](./docs/component.md)


## License

MIT © [imagine10255](https://github.com/imagine10255)
