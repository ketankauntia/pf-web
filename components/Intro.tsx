// import { Button } from '@/lib/Button';
import { getPersonalData } from '@/lib/data';
import { PersonalData } from '@/types/portfolio';
import Image from 'next/image';

export default function Intro() {
  const personalData: PersonalData = getPersonalData();
  const { intro } = personalData;

  return (
    <section className="intro-section my-10 mx-auto flex justify-between mt-14">
      <div className="left-section p-2">
        <h1 className="text-4xl font-bold mb-1 mt-4">{intro.name}</h1>
        <p className="text-xl text-gray-600 mb-4">{intro.tagline}</p>
        <p className="text-md mb-1">{intro.description}</p>
        {/* <div className="btn-options flex gap-2 mt-3">
            <Button type="secondary" href="mailto:ketan.kauntia@gmail.com">Contact</Button>
            <Button type="primary" href="/resume.pdf">Resume</Button>
        </div> */}
      </div>
      <div className="right-section p-2">
        <Image src="/pf-img.jpg" alt="Buri Buri Zaimon" className="rounded-full" width={180} height={180} />
      </div>
    </section>
  );
}