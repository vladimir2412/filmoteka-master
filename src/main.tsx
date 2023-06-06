import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './store/store.ts';
import { Provider } from 'react-redux';
import AppLoader from './AppLoader.tsx';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<AppLoader />
			</Provider>
		</BrowserRouter>
	</React.StrictMode>,
);
