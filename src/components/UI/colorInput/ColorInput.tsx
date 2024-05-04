import { IField } from '@//types/formTypes';
import clsx from 'clsx';
import { forwardRef, useEffect, useRef, useState } from 'react';
import { FieldProps } from '../../Field';

export const ColorInput = forwardRef<HTMLInputElement, FieldProps>(
	(props, ref) => {
		const { id, label, type, options, value, onChange, ...rest } = props;
		const [active, setActive] = useState(false);

		const colorRef = useRef<HTMLDivElement>(null);

		const clickColor = (color: string) => {
			setActive(false);
			onChange(color);
		};

		useEffect(() => {
			const onClick = (e: MouseEvent) => {
				const { target } = e;
				if (target instanceof Node && !colorRef.current?.contains(target))
					active && setActive(false);
			};
			window.addEventListener('click', onClick);
			return () => window.removeEventListener('click', onClick);
		}, []);

		return (
			<div className='color_wrapper' id={id} ref={colorRef}>
				<div className='color' onClick={() => setActive(!active)}>
					<div style={{ background: value }} className='color_current'></div>
					<div className={clsx('color_arrow', active && 'color_active')}></div>
				</div>
				<div onClick={() => setActive(true)} className='color_label'>
					{label}
				</div>
				<div className={clsx('color_options', active && 'color-active')}>
					{options?.map((item: string) => (
						<div
							key={item}
							style={{ background: item }}
							onClick={() => clickColor(item)}
							className='color_item'
						></div>
					))}
				</div>
			</div>

			// <div className='color_wrapper'>
			// 	<input id={id} type={type} className='color' {...rest} ref={ref} />
			// 	<label htmlFor={id} className='color_label'>
			// 		{label}
			// 	</label>
			// </div>
		);
	}
);
