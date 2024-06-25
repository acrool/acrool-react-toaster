# Acrool React Toaster

<a href="https://acrool-react-toaster.pages.dev/" title="Acrool React Toaster - This is a toast message function for React development notifications">
    <img src="https://acrool-react-toaster.pages.dev/og.webp" alt="Acrool React Toaster Logo"/>
</a>

<p align="center">
    This is a toast message function for React development notifications
</p>

<div align="center">

[![NPM](https://img.shields.io/npm/v/@acrool/react-toaster.svg?style=for-the-badge)](https://www.npmjs.com/package/@acrool/react-toaster)
[![npm](https://img.shields.io/bundlejs/size/@acrool/react-toaster?style=for-the-badge)](https://github.com/acrool/@acrool/react-toaster/blob/main/LICENSE)
[![npm](https://img.shields.io/npm/l/@acrool/react-toaster?style=for-the-badge)](https://github.com/acrool/react-toaster/blob/main/LICENSE)

[![npm downloads](https://img.shields.io/npm/dm/@acrool/react-toaster.svg?style=for-the-badge)](https://www.npmjs.com/package/@acrool/react-toaster)
[![npm](https://img.shields.io/npm/dt/@acrool/react-toaster.svg?style=for-the-badge)](https://www.npmjs.com/package/@acrool/react-toaster)

</div>



## Install

```bash
yarn add @acrool/react-toaster
```

## Usage

add in your index.tsx
```tst
import "@acrool/react-toaster/dist/index.css";
```

add in your App.tsx

```tsx
import {ToasterPortal} from "@acrool/react-toaster";

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
import {EStatus, toast} from '@acrool/react-toaster';

const Example = () => {
    return (
        <div>
            <button type="button" onClick={() => toast({message: 'useToaster message'})}>
                useToaster message
            </button>
        </div>
    );
};
```

- toast
- toast.success
- toast.info
- toast.warning
- toast.error


## License

MIT © [imagine10255](https://github.com/imagine10255)
