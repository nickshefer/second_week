import { makeAutoObservable } from 'mobx';

export interface IField {
	type: string;
	label: string;
	required?: boolean;
	placeholder?: string;
}

export interface IButton {
	name: string;
	type: string;
}

export interface IDataForm {
	form_name: string;
	form_fields: IField[];
	form_buttons: IButton[];
}

class DataForm {
	public form: IDataForm | null = null;

	constructor() {
		this.form = null;
		makeAutoObservable(this);
	}

	addForm = (form: IDataForm) => {
		this.form = form;
	};
	resetForm = () => {
		this.form = null;
	};
}

const dataForm = new DataForm();
export default dataForm;
