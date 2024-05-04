import { IField } from '@//types/formTypes';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import clsx from 'clsx';
import { forwardRef, useState } from 'react';
import { FieldProps } from '../../Field';

export const FileUpload = forwardRef<HTMLInputElement, FieldProps>(
	(props, ref) => {
		const {
			label,
			formats,
			onChange,
			type,
			multiple,
			max_size,
			max_count,
			value,
			...rest
		} = props;
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
				onChange(e.dataTransfer.files);
			}
		};

		const getFileList = (fileList: FileList | null | undefined) => {
			if (!fileList) return;
			const files: File[] = [];
			for (let i = 0; i < fileList.length; i++) {
				const file: File | null = fileList.item(i);
				files.push(file as File);
			}
			return files;
		};

		const clickDelete = (fileName: string) => {
			const fileList = new DataTransfer();
			const newFiles = getFileList(value).filter(
				(file: File) => file.name != fileName
			);
			newFiles.forEach(file => fileList.items.add(file));
			onChange(fileList);
		};

		return (
			<>
				<label
					className={clsx('upload', dragActive && 'upload_drag')}
					htmlFor='file'
				>
					<div className='upload_title'>{label}</div>
					<div className={'upload_text'}>
						<span className='text-primary'>Select file</span> or{' '}
						<span className='text-primary'>drop in box</span>
					</div>

					<input
						ref={ref}
						{...rest}
						value={value?.fileName}
						accept={formats}
						className='upload_input'
						multiple={multiple}
						type={type}
						onChange={e => onChange(e.target.files)}
						onDragOver={handleDrag}
						onDragEnter={handleDrag}
						onDragLeave={handleLeave}
						onDrop={handleDrop}
					/>
				</label>
				{value &&
					getFileList(value)?.map((file: File) => (
						<div key={file.name} className='upload-item'>
							<span className='upload-item_name'>{file.name}</span>
							<span className='upload-item_size'>{`${(file.size / 1000).toFixed(
								2
							)} КБ`}</span>
							<div
								className='upload-item_delete'
								onClick={() => clickDelete(file.name)}
							>
								<RiDeleteBin2Fill size={20} />
							</div>
						</div>
					))}
			</>
		);
	}
);
