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
          alt="Picture of the author"
        />
        <div className="flex flex-col my-auto gap-6">
          <h1 className="text-8xl font-bold text-[#699528]">Hi!</h1>
          <h1 className="text-4xl">I'm David, a student majoring<br/> in Informatics at ITB.</h1>
          <div className="flex gap-3">
            <div className="opacity-50 hover:opacity-100 transition-opacity duration-300">
              <a href="https://github.com/koinen">
                <Image
                  src="/github.png"
                  width={20}
                  height={20}
                  alt="github"
                />
              </a>
            </div>
            <div className="opacity-50 hover:opacity-100 transition-opacity duration-300">
              <a href="https://www.instagram.com/david.lodianto/">
                <Image
                  src="/ig.png"
                  width={20}
                  height={20}
                  alt="instagram"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}