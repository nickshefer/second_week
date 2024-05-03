import { makeAutoObservable } from 'mobx';
import { FormObj } from '../types/formTypes';

export default class FormsStore {
	constructor() {
		makeAutoObservable(this);
	}

	public forms: FormObj[] = [];

	addForm = (form: FormObj) => {
		this.forms.push(form);
	};
	removeForm = (id: number) => {
		this.forms = this.forms.filter(form => form.id != id);
	};
	resetForms = () => {
		this.forms = [];
	};
}
