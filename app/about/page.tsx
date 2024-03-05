import Link from 'next/link';
import { useGetYearsOfExperience } from '../_hooks/useGetYearsOfExperience';

export default function Aboute() {

	const { yearsOfExperience } = useGetYearsOfExperience();

	return (
		<>
			<main className="px-4 flex flex-col w-full h-fit text-xs md:text-sm 2xl:text-lg font-light text-T100 gap-5">
				<h1 className='text-P100 font-bold text-md md:text-3xl mt-10'>About me</h1>
				<p>Welcome to my digital space! I'm <span className="text-P100 font-semibold">Mikael Bernardes</span>, a tech enthusiast and dedicated frontend web developer. Here, I share insights into my professional journey and the passions that drive me.</p>
				<div className="flex w-fit h-fit gap-4 max-xl:flex-col items-center">
					<div className='border border-P100 w-full h-52 md:w-full md:h-[530px] xl:h-[560px] 2xl:h-[720px] bg-perfil bg-cover bg-center'>
						
					</div>
					<div className="flex flex-col gap-5 w-full md:w-full">
						<p >Beyond code, I'm passionate about music and literature. During breaks, you'll find me playing the guitar or immersed in a good book. These activities nourish my creativity and bring a unique perspective to my work.</p>
						<p>With {yearsOfExperience} of experience in frontend web development, I've delved into challenging projects that have allowed me to enhance my skills in <span className="text-P100 font-semibold">JavaScript/Typescript</span>. I've collaborated in agile teams, participating from conception to the implementation of innovative solutions.</p>
						<p>Embarking on a relentless journey of self-improvement, I've cultivated my skills through distinguished educational ventures. I proudly hold certifications in <span className="text-P100 font-semibold">Frontend Development from Alura, renowned as the premier software development school in Brazil</span>. The accolades don't stop there—I've further honed my expertise with a Frontend Web certification from DevemDobro, an exclusive institution devoted solely to frontend mastery, complete with mentorship and guidance from seasoned developers. <br /><br /> These immersive experiences have fortified my foundation in Frontend Development, amplifying my proficiency in <span className="text-P100 font-semibold">Javascript/Typescript</span>. But it doesn't end there; I've delved into a spectrum of libraries and frameworks, mastering the artistry of <span className="text-P100 font-semibold">ReactJS, ReactNative, NodeJS and NextJS</span>.<br /></p>
					</div>
				</div>
				<p>My educational journey isn't just a collection of certificates; it's a testament to my commitment to excellence. By studying under the best, I've not only acquired knowledge but have cultivated a mindset of innovation and precision. The mentorship from DevemDobro, coupled with the breadth of technologies I've embraced, positions me as a dynamic developer ready to tackle challenges head-on.<br /><br />In the dynamic world of software development, I am not just a product of education; I am a craftsman of code, sculpted by the finest institutions, armed with the skills to architect seamless digital experiences. I don't just bring knowledge to the table; I bring a commitment to excellence and an unwavering passion for pushing the boundaries of what's possible. As you explore my profile, know that you're not just considering a developer; you're engaging with a relentless pursuer of excellence—a developer who has not only learned from the best but is poised to redefine the standard for the best.</p>
				<div className="border-P100 border w-full h-48 md:h-56 2xl:h-80"></div>
				<p>Currently, I am based in MG/Brasil, ready for collaborations and innovative projects.</p>
				<p>Let's connect? I'm available for opportunities, partnerships, or just to exchange ideas. Feel free to find me on social media or send an email to <Link href="mailto:bernardesmikael@outlook.com" className="text-P100 cursor-pointer hover:decoration-slice hover:underline transition-all duration-700 hover:decoration-P100">bernardesmikael@outlook.com</Link>. <br /><br />I hope this visual and textual representation captures the essence of who I am as a frontend web developer. Feel free to explore more or get in touch. I'm looking forward to connecting with you!</p>
			</main>
		</>
	);
}