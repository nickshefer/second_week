import { MdCancel } from 'react-icons/md';
import {
	Controller,
	FieldValues,
	SubmitHandler,
	useForm
} from 'react-hook-form';
import { FormObj } from '../types/formTypes';
import { Field } from './Field';
import Button from './UI/button/Button';

export default function Form(props: {
	form: FormObj;
	removeForm: (id: number) => void;
}) {
	const { id, form_name, form_description, form_fields, form_buttons } =
		props.form;

	const { control, handleSubmit } = useForm({ mode: 'all' });

	const onSubmit: SubmitHandler<FieldValues> = data => console.log(data);

	return (
		<form className='form' onSubmit={handleSubmit(onSubmit)}>
			<h1 className='form_title'>{form_name}</h1>
			{form_description && <p className='form_desc'>{form_description}</p>}
			<div className='form_fields'>
				{form_fields.map(fieldObj => (
					<Controller
						key={fieldObj.id}
						control={control}
						name={fieldObj.id}
						defaultValue={fieldObj.type == 'color' ? '#d9d9d9' : ''}
						rules={{
							required: fieldObj.required,
							maxLength: fieldObj.maxlength,
							minLength: fieldObj.minlength,
							pattern: fieldObj.pattern
								? new RegExp(fieldObj.pattern)
								: undefined
						}}
						render={({ field, fieldState }) => (
							<Field
								{...field}
								id={`${id}_${fieldObj.id}`}
								type={fieldObj.type}
								label={fieldObj.label}
								formats={fieldObj.formats}
								options={fieldObj.options}
								multiple={fieldObj.multiple}
								placeholder={fieldObj.placeholder}
								aria-invalid={fieldState.error}
							/>
						)}
					/>
				))}
			</div>
			<div className='form_buttons'>
				{form_buttons.map(btn => (
					<Button key={btn.name} btn={btn} />
				))}
			</div>
			<MdCancel
				onClick={() => props.removeForm(id)}
				className='form_delete'
				size={40}
			/>
		</form>
	);
}
