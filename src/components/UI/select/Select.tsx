import { IField } from '@//types/formTypes';
import { forwardRef } from 'react';

export const Select = forwardRef<HTMLSelectElement, IField>((props, ref) => {
	const { id, label, options, ...rest } = props;

	return (
		<div className='select_wrapper'>
			<select id={id} className='select' {...rest} ref={ref}>
				<option value=''></option>
				{options?.map(option => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</select>
			<label className='select_label' htmlFor={id}>
				{label}
			</label>
		</div>
	);
});
