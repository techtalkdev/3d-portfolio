import Globe from "react-globe.gl"
import Button from "../components/Button"
import { useState } from "react"

const About = () => {
    const [hasCopied, setHasCopied] = useState(false); 
    const handleCopy = () => {
        navigator.clipboard.writeText('binarybardcode@gmail.com'); 

        setHasCopied(true); 

        setTimeout(() => {
            setHasCopied(false); 
        }, 2000)

    } 

  return (
    <section className="c-space my-20" id="about">
        <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">Hi, I&apos;m Mike</p>
                            <p className="grid-subtext">
                            I am a junior developer with a passion for creating end-to-end web applications. Proficient in both front-end and back-end technologies, I enjoy tackling diverse coding challenges and continuously expanding my skills across the entire development stack. Eager to learn and contribute to innovative projects, I strive to write clean, efficient code and collaborate effectively with cross-functional teams.
                            </p> 
                        </div>
                </div>
            </div>
            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain"/> 

                    <div>
                        <p className="grid-headtext">Tech Stack</p>
                        <p className="grid-subtext">
                        I specialize in a modern JavaScript-based tech stack, focusing on TypeScript for enhanced development. My expertise includes React for dynamic UIs, Next.js for optimized web applications, and Node.js for efficient backend solutions. This stack enables me to create robust, full-stack applications with seamless frontend-backend integration.
                        </p> 
                    </div>
                </div>
            </div>
            <div className="cols-span-1 xl:row-span-4">
                <div className="grid-container">
                    <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                        <Globe
                            height={326}
                            width={326}
                            backgroundColor="rgba(0,0,0,0)"
                            backgroundImageOpacity={0.5} 
                            showAtmosphere
                            showGraticules
                            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                         /> 
                    </div> 
                    <div>
                        <p className="grid-headtext">I work remotely across most timezones.</p>
                        <p className="grid-subtext">I&apos;m based in Cape Town - South Africa, with remote work available.</p>
                        <Button name="Contact Me" isBeam containerClass="w-full mt-10" />  
                    </div>
                </div>
            </div>
            <div className="xl:col-span-2 xl:row-span-3">
                <div className="grid-container"> 
                    <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
                    <div>
                        <p className="grid-headtext">My passion for coding</p>
                        <p className="grid-subtext">
                        As a tech enthusiast, I find my purpose in the ever-evolving world of technology. Coding and problem-solving are not just tasks for me; they&apos;re passions that drive my daily life. I&apos;m constantly seeking opportunities to learn and grow in my tech career, always eager to improve my skills. My love for technology extends beyond my professional life, as I create tech-related content and host the Techtalk podcast. I&apos;m an active member of the tech community, regularly attending meetups, events, and hackathons to stay connected and inspired. For me, technology isn&apos;t just a career — it&apos;s a way of life that fuels my curiosity and creativity.
                        </p>
                    </div>
                </div>
            </div>
            <div className="xl:col-span-1 xl:row-span-2">
                <div className="grid-container">
                    <img src="/assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top" /> 
                    <div className="space-y-2">
                        <p className="grid-subtext text-center">Contact Me</p>
                        <div className="copy-container" onClick={handleCopy}>
                            <img src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"} alt="copy" />
                            <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">binarybardcode@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
} 

export default About 