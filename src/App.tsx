import { observer } from 'mobx-react-lite';
import Form from './components/Form';
import { JsonUpload } from './components/JsonUpload';
import { FormObj } from './types/formTypes';
import { useContext } from 'react';
import { Context, StoreContext } from './main';

export const App = observer(() => {
	const store = useContext<StoreContext | undefined>(Context)?.store;

	const removeForm = (id: number) => {
		store?.removeForm(id);
	};

	return (
		<div className='App'>
			<div className='container'>
				<JsonUpload />
				{store?.forms &&
					store.forms.map((form: FormObj) => (
						<Form key={form.id} form={form} removeForm={removeForm} />
					))}
			</div>
		</div>
	);
});
