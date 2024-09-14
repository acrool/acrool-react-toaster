import type { Preview } from "@storybook/react";
import '@acrool/react-toaster/dist/index.css';
import '@acrool/react-grid/dist/index.css';
import '@acrool/react-table/dist/index.css';
import '@acrool/react-table/dist/themes/game.css';
import {GridThemeProvider} from "@acrool/react-grid";
import React from "react";
import {ToasterPortal} from '@acrool/react-toaster';


const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
      (Story) => (
          <GridThemeProvider>
            <Story />

              <ToasterPortal defaultTimeout={3000}/>

          </GridThemeProvider>
      ),
  ],
};

export default preview;
