import { IField } from '@//types/formTypes';
import { forwardRef } from 'react';

export const Checkbox = forwardRef<HTMLInputElement, IField>((props, ref) => {
	const { id, label, type, ...rest } = props;

	return (
		<div className='checkbox_wrapper'>
			<input id={id} type={type} className='checkbox' {...rest} ref={ref} />
			<label className='checkbox_label' htmlFor={id}>
				{label}
			</label>
		</div>
	);
});
