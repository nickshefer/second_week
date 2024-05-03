import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import 'normalize.css';
import './styles/index.scss';
import FormsStore from './store/dataFormStore.ts';

export type StoreContext = {
	store: FormsStore;
};

export const Context = createContext<StoreContext | undefined>(undefined);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Context.Provider value={{ store: new FormsStore() }}>
			<App />
		</Context.Provider>
	</React.StrictMode>
);
