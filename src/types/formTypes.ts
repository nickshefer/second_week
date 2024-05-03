export enum FieldTypes {
	TEXT = 'text',
	EMAIL = 'email',
	PASSWORD = 'password',
	SELECT = 'select',
	CHECKBOX = 'checkbox',
	COLOR = 'color',
	FILE = 'file',
	TEXTAREA = 'textarea'
}

export type FieldType =
	| 'text'
	| 'email'
	| 'password'
	| 'select'
	| 'color'
	| 'file'
	| 'checkbox'
	| 'textarea'
	| 'tel';

export interface IField {
	id: string;
	type: FieldType;
	label: string;
	required?: boolean;
	placeholder?: string;
	maxlength?: number;
	minlength?: number;
	pattern?: string;
	options?: string[];
	multiple?: boolean;
	mask?: string;
	formats?: string;
	max_size?: number;
	max_count?: number;
}

export interface IButton {
	name: string;
	type: 'reset' | 'button' | 'submit';
}

export type FormObj = {
	id: number;
	form_name: string;
	form_description?: string;
	form_fields: IField[];
	form_buttons: IButton[];
};
