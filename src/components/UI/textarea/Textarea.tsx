import { IField } from '@//types/formTypes';
import { forwardRef } from 'react';

export const Textarea = forwardRef<HTMLTextAreaElement, IField>(
	(props, ref) => {
		const { id, label, ...rest } = props;
		return (
			<div className='input_wrapper'>
				<textarea rows={4} id={id} {...rest} ref={ref} className='input' />
				<label className='input_label' htmlFor={id}>
					{label}
				</label>
			</div>
		);
	}
);
