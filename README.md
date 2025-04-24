# Acrool React Toaster

<a href="https://acrool-react-toaster.pages.dev/" title="Acrool React Toaster - This is a toast message function for React development notifications">
    <img src="https://raw.githubusercontent.com/acrool/acrool-react-toaster/main/example/public/og.webp" alt="Acrool React Toaster Logo"/>
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


`^3.2.0 support react >=18.0.0 <20.0.0`


## Features

- Supports 5 status colors: default, success, info, warning, danger
- Support show limit
- Support show position: top, bottom, left, center, right
- Call via global method
- Configurable disappearance delay seconds
- Plug and unplug using `@acrool/react-portal` and `framer-motion`

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
import {ToasterPortal, themeMap} from "@acrool/react-toaster";
import CustomCheckIcon from '../../../assets/custom_check.svg?react';


const App = () => {
    return (
        <div>
            <BaseUsed/>
            <ToasterPortal
                defaultTimeout={3000}
                limit={6}
                position={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                themeMap={{
                    ...themeMap,
                    success: {
                        ...themeMap.success,
                        icon: CustomCheckIcon,
                    }
                }}
            />
        </div>
    );
};
```

then in your page
```tsx
import {toast} from '@acrool/react-toaster';

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
- toast.danger


There is also a example that you can play with it:

[![Play react-editext-example](https://raw.githubusercontent.com/acrool/acrool-react-toaster/main/play-in-example-button.svg)](https://acrool-react-toaster.pages.dev)


## License

MIT © [Acrool](https://github.com/acrool) & [Imagine](https://github.com/imagine10255)
