import { useState } from 'react';
import dataForm from '../../store/dataFormStore';

export const FileUpload = () => {
	const [file, setFile] = useState<File | null>(null);
	const [dragActive, setDragActive] = useState<boolean>(false);

	const changeFile: React.ChangeEventHandler<HTMLInputElement> = e => {
		if (!e.target.files) return;
		setFile(e.target.files[0]);
		const jsonFile = e.target.files[0];
		const reader = new FileReader();
		reader.readAsText(jsonFile);
		reader.onload = () => {
			dataForm.addForm(JSON.parse(reader.result as string));
		};
	};

	const handleDrag: React.DragEventHandler<HTMLInputElement> = e => {
		e.preventDefault();
		console.log(e.dataTransfer.files);
		setDragActive(true);
	};

	const handleLeave: React.DragEventHandler<HTMLInputElement> = e => {
		e.preventDefault();
		setDragActive(false);
	};

	const handleDrop: React.DragEventHandler<HTMLInputElement> = e => {
		e.preventDefault();
		setDragActive(false);
		if (e.dataTransfer.files && e.dataTransfer.files[0])
			setFile(e.dataTransfer.files[0]);
	};

	const handleReset: React.MouseEventHandler<HTMLButtonElement> = e => {
		e.preventDefault();
		setFile(null);
	};

	return (
		<form className='upload'>
			<label
				className={`upload_label ${dragActive || file ? 'drag-active' : ''}`}
				htmlFor='file'
			>
				<div className='upload_title'>
					<span className='text-primary'>Select a file</span> or drag in form
				</div>
				<div className='upload_text'>
					{file
						? file.name
						: 'JSON files up to 10 MB in size are available for download'}
				</div>
				<input
					onChange={e => changeFile(e)}
					onDragOver={handleDrag}
					onDragEnter={handleDrag}
					onDragLeave={handleLeave}
					onDrop={handleDrop}
					className='upload_input'
					type='file'
					accept='.json'
					id='file'
				/>
			</label>
			<button onClick={handleReset} type='reset'>
				reset
			</button>
		</form>
	);
};
