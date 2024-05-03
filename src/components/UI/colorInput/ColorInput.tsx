import { IField } from '@//types/formTypes';
import clsx from 'clsx';
import { forwardRef, useEffect, useRef, useState } from 'react';

export const ColorInput = forwardRef<HTMLInputElement, IField>((props, ref) => {
	const { id, label, type, options, value, onChange, ...rest } = props;
	const [active, setActive] = useState(false);
	const colorRef = useRef(null);
	const clickColor = (color: string) => {
		setActive(false);
		onChange(color);
	};

	useEffect(() => {
		const onClick: React.MouseEventHandler<HTMLDivElement> = e => {
			if (colorRef.current?.contains(e.target)) return;
			setActive(false);
		};
		document.addEventListener('click', onClick);
		return () => document.removeEventListener('click', onClick);
	}, []);
	return (
		<div className='color_wrapper' ref={colorRef}>
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
});
