import Image from "next/image";
import { ReactLenis } from "lenis/react";

export default function Home() {
  return (
    <>

    <ReactLenis root/>

      <nav>
        <p>Static House</p>
        <p>Menu</p>
      </nav>

      <section className="intro">
        <div className="section-bg">
          <img src="/img_1.avif" alt="" />
        </div>

        <h1 className="">
          Framed in tungsten and shadows, every shot holds its own deliberate
          tension.
        </h1>
      </section>
    </>
  ); 
}
