import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <div className="flex justify-center gap-1">
        <Image 
          src="/Illustration9.png"
          width={440}
          height={100}
          alt="illustration i did"
          className="lg:hidden"
        />
        <Image 
          src="/Illustration13.png"
          width={550}
          height={100}
          alt="illustration i did"
          className="hidden lg:block"
        />
        <div className="flex flex-col my-auto gap-6">
          <h1 className="text-4xl lg:text-8xl font-bold text-[#699528] lg:text-[#dd8988]">Hi!</h1>
          <h1 className="text-lg lg:text-4xl">I'm David, a student majoring<br/> in Informatics at ITB.</h1>
          <div className="flex gap-3">
            <a href="https://github.com/koinen" className="opacity-50 hover:opacity-100 transition-opacity duration-300">
              <Image
                src="/github.png"
                width={20}
                height={20}
                alt="github"
              />
            </a>
            <a href="https://www.instagram.com/david.lodianto/" className="opacity-50 hover:opacity-100 transition-opacity duration-300">
              <Image
                src="/ig.png"
                width={20}
                height={20}
                alt="instagram"
              />
            </a>
            <a href="www.linkedin.com/in/david-bakti-lodianto/" className="opacity-50 hover:opacity-100 transition-opacity duration-300">
              <Image
                src="/linkedin.png"
                width={20}
                height={20}
                alt="LinkedIn"
              />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}