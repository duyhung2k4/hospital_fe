import App from './App.tsx'
import store from './redux/store.ts'
import themeOverride from './themes/overrideTheme.ts'

import { createRoot } from 'react-dom/client'
import { MantineProvider } from '@mantine/core'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from '@mantine/notifications';
import '@mantine/notifications/styles.css';
import '@mantine/core/styles.css';

import './index.css'



createRoot(document.getElementById('root')!).render(
  <MantineProvider theme={themeOverride}>
    <ModalsProvider>
      <Provider store={store}>
        <BrowserRouter>
          <App />
          <Notifications />
        </BrowserRouter>
      </Provider>
    </ModalsProvider>
  </MantineProvider>
)
