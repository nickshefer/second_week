import { IButton } from '@//types/formTypes';
import clsx from 'clsx';

export default function Button(props: { btn: IButton }) {
	return (
		<button
			className={clsx(
				'button',
				props.btn.type === 'submit' ? 'button_primary' : 'button_secondary'
			)}
			type={props.btn.type}
		>
			{props.btn.name}
		</button>
	);
}
