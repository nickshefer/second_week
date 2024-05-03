import clsx from 'clsx';
import { useContext, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Context, StoreContext } from '../main';

export const JsonUpload = observer(() => {
	const store = useContext<StoreContext | undefined>(Context)?.store;
	const [dragActive, setDragActive] = useState<boolean>(false);

	const handleDrag: React.DragEventHandler<HTMLInputElement> = e => {
		e.preventDefault();
		setDragActive(true);
	};

	const handleLeave: React.DragEventHandler<HTMLInputElement> = e => {
		e.preventDefault();
		setDragActive(false);
	};

	const handleDrop: React.DragEventHandler<HTMLInputElement> = e => {
		e.preventDefault();
		setDragActive(false);
		if (e.dataTransfer.files && e.dataTransfer.files[0]) {
			readAndSetFile(e.dataTransfer.files[0]);
		}
	};
	const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
		if (e.target.files && e.target.files[0]) {
			readAndSetFile(e.target.files[0]);
		}
	};

	const readAndSetFile = (file: File) => {
		const reader = new FileReader();

		reader.readAsText(file);
		reader.onload = () => {
			const obj = JSON.parse(reader.result as string);
			store?.addForm({ ...obj, id: Date.now() * Math.random() });
		};
	};

	return (
		<label
			className={clsx('upload', 'json_upload', dragActive && 'upload_drag')}
			htmlFor='json'
		>
			<div className={'upload_text'}>
				<span className='text-primary'>Select file</span> or{' '}
				<span className='text-primary'>drop in box</span>
			</div>
			<input
				className='upload_input'
				type='file'
				id='json'
				accept='.json'
				onChange={handleChange}
				onDragOver={handleDrag}
				onDragEnter={handleDrag}
				onDragLeave={handleLeave}
				onDrop={handleDrop}
			/>
		</label>
	);
});
