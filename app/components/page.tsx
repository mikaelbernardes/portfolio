import { IoWarningOutline } from 'react-icons/io5';

export default function Components() {

	return (
		<main className='h-[66vh] xl:h-[79vh] w-full flex flex-col items-center justify-center'>
			<IoWarningOutline 
				className="text-yellow-400 text-[200px]"
			/>
			<p className='text-T100'>Page under construction!</p>
		</main>
	);
}