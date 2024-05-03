import { forwardRef } from 'react';
import { FieldTypes, IField } from '../types/formTypes';
import { Checkbox } from './UI/checkbox/Checkbox';
import { ColorInput } from './UI/colorInput/ColorInput';
import { Input } from './UI/input/Input';
import { Select } from './UI/select/Select';
import { Textarea } from './UI/textarea/Textarea';
import { FileUpload } from './UI/fileUpload/FileUpload';
import { ControllerRenderProps } from 'react-hook-form';

export type FieldProps = ControllerRenderProps & IField;

export const Field = forwardRef<
	HTMLInputElement & HTMLTextAreaElement & HTMLSelectElement,
	FieldProps
>((props, ref) => {
	switch (props.type) {
		case FieldTypes.TEXT:
			return <Input {...props} ref={ref} />;
		case FieldTypes.EMAIL:
			return <Input {...props} ref={ref} />;
		case FieldTypes.PASSWORD:
			return <Input {...props} />;
		case FieldTypes.TEXTAREA:
			return <Textarea {...props} />;
		case FieldTypes.SELECT:
			return <Select {...props} ref={ref} />;
		case FieldTypes.COLOR:
			return <ColorInput {...props} ref={ref} />;
		case FieldTypes.CHECKBOX:
			return <Checkbox {...props} ref={ref} />;
		case FieldTypes.FILE:
			return <FileUpload {...props} ref={ref} />;
		default:
			break;
	}
});
