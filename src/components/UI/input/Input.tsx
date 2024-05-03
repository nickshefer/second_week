import { forwardRef } from 'react';
import { FieldProps } from '../../Field';

export const Input = forwardRef<HTMLInputElement, FieldProps>((props, ref) => {
	const { id, label, type, ...rest } = props;
	return (
		<div className='input_wrapper'>
			<input type={type} id={id} ref={ref} className={'input'} {...rest} />
			<label className='input_label' htmlFor={id}>
				{label}
			</label>
		</div>
	);
});
