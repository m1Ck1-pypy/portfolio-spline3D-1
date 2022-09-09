import Spline from '@splinetool/react-spline';
import { useState } from 'react';
import { IoMenu, IoLogoGithub } from 'react-icons/io5';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import Photo from './images/25f415a70d5b2ec73eecc3f8d7bef601.jpg';
import { Experience, Projects, Connect } from './data';

import { AnimatePresence, motion } from 'framer-motion';

function App() {
    const [isActive, setIsActive] = useState(false);

    return (
        <AnimatePresence initial={false}>
            <div className="flex w-screen min-h-screen flex-col items-center justify-center relative bg-primary pb-20">

                {/* Navigation Bar */}
                <nav className="w-full px-6 z-50 fixed inset-x-0 top-2 flex justify-center items-center">
                    <div className="w-full md:w-880 bg-navBar p-4 rounded-2xl flex items-center">
                        <p className="text-lg text-slate-200 font-medium">Maya Kozar</p>

                        <div className="hidden md:flex items-center gap-6 ml-6 flex-1">
                            <a href="#home" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-200 ease-in-out">Home</a>
                            <a href="#about" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-200 ease-in-out">About</a>
                            <a href="#projects" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-200 ease-in-out">Projects</a>
                            <a href="#contact" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-200 ease-in-out">Contact</a>
                            <a href="#" className="ml-auto text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-200 ease-in-out">Download</a>
                        </div>

                        <motion.div
                            whileTap={{ scale: .5 }}
                            transition={{ type: 'spring' }}
                            className="block md:hidden ml-auto cursor-pointer"
                            onClick={() => setIsActive(!isActive)}>
                            <IoMenu className="text-2xl text-textBase" />
                        </motion.div>

                        {isActive && (
                            <motion.div
                                initial={{ opacity: 0, scale: .5 }}
                                animate={{ opacity: 1, scale: 1.1 }}
                                exit={{ opacity: 0, scale: .5 }}
                                transition={{ type: 'spring', delay: '0.1s' }}
                                className="p-4 w-275 bg-navBar rounded-lg fixed top-24 right-16 flex flex-col items-center justify-evenly gap-6"
                            >
                                <a href="#home" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-200 ease-in-out"
                                    onClick={() => setIsActive(false)}>Home</a>
                                <a href="#about" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-200 ease-in-out"
                                    onClick={() => setIsActive(false)}>About</a>
                                <a href="#projects" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-200 ease-in-out"
                                    onClick={() => setIsActive(false)}>Projects</a>
                                <a href="#contact" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-200 ease-in-out"
                                    onClick={() => setIsActive(false)}>Contact</a>
                                <motion.a
                                    whileTap={{ scale: .8 }}
                                    href="#"
                                    className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-200 ease-in-out"
                                    onClick={() => setIsActive(false)}>Download
                                </motion.a>
                            </motion.div>
                        )}
                    </div>
                </nav>


                <div className="relative" id="home" style={{ width: "1500px", height: "1000px" }}>
                    <Spline scene="https://prod.spline.design/M2JfYJd4NyyuE3TL/scene.splinecode" style={{ width: "100%", height: "100%" }} />
                    <div className="absolute bottom-10 w-full items-center justify-center flex">
                        <div className="shadow-md p-4 flex items-center justify-center bg-zinc-900 rounded-3xl">
                            <p className="text-textBase">Press and drag to orbit</p>
                        </div>
                    </div>
                </div>

                {/* Main section */}
                <main className="w-[80%] mt-5 ">

                    {/* About section */}
                    <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-24" id="about">

                        {/* image box */}
                        <div className="w-full h-420 flex items-center justify-center">
                            <div className="w-275 h-340 bg-emerald-200 rounded-md relative">
                                <img src={Photo} className="w-full h-full absolute -right-4 top-4 object-cover rounded-lg shadow-lg" alt="" />
                            </div>
                        </div>

                        {/* content box */}
                        <div className="w-full h-420 flex flex-col justify-center items-center">
                            <p className="text-lg text-textBase text-center">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            </p>

                            <motion.button
                                whileTap={{ scale: .9 }}
                                className="w-full md:w-auto relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white hover:shadow-lg hover:shadow-teal-500/50 hover:dark:shadow-lg hover:dark:shadow-teal-800/80 outline-0">
                                <span className="w-full md:w-auto relative px-5 py-2.5 transition-all ease-in-out duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Download</span>
                            </motion.button>
                        </div>

                    </section>

                    {/* TimeLine section */}
                    <section className="w-full flex items-center justify-center">
                        <VerticalTimeline>
                            {
                                Experience && Experience.map(elem => (
                                    <VerticalTimelineElement
                                        key={elem.id}
                                        className="vertical-timeline-element--work"
                                        contentStyle={{ background: 'rgb(21, 24, 31)', color: '#888' }}
                                        contentArrowStyle={{ borderRight: '7px solid  rgb(21, 24, 31)' }}
                                        date={elem.data}
                                        iconStyle={{ background: 'rgb(21, 24, 31)', color: '#888' }}
                                        icon={elem.srcIcon}
                                    >
                                        <h3 className="vertical-timeline-element-title">{elem.title}</h3>
                                        <h4 className="vertical-timeline-element-subtitle">{elem.location}</h4>
                                        <p>
                                            {elem.description}
                                        </p>
                                    </VerticalTimelineElement>
                                ))
                            }
                        </VerticalTimeline>
                    </section>


                    {/* Projects Section */}
                    <section className=" w-full flex flex-wrap items-center my-24 justify-evenly gap-6" id="projects">
                        {Projects && Projects.map(elem => (
                            <div key={elem.id} className="border border-zinc-800 rounded-md p-2 min-w-[350px] md:max-w-[350px] hover:border-zinc-600 duration-100 ease-in-out">
                                <p className="text-mg text-textBase font-medium uppercase">
                                    {elem.name}
                                </p>
                                <img src={elem.imageSrc} className="w-full h-full object-cover rounded-md my-4" alt="" />

                                <div className="flex flex-1 items-center justify-between">
                                    <p className="text-lg text-gray-300">
                                        Technologies <span className="block text-sm text-gray-500">{elem.techs}</span>
                                    </p>

                                    <a href={elem.github}>
                                        <motion.div whileTap={{ scale: .8 }}>
                                            <IoLogoGithub className="text-textBase text-3xl cursor-pointer hover:text-gray-200" />
                                        </motion.div>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </section>

                    {/* Contect Section */}
                    <section id="contact" className="flex flex-col items-center justify-center w-full my-24">
                        <p className="text-3xl text-gray-400 capitalize">Follow Me On</p>

                        <div className="flex item-center justify-center w-full my-4 flex-wrap gap-4" >
                            {Connect && Connect.map(elem => (
                                <motion.a
                                    whileTap={{ scale: .8 }}
                                    key={elem.id}
                                    href={elem.link}
                                    className="flex items-center justify-center gap-3 w-full md:w-auto px-3 md:px-8 py-5 border border-zinc-800 rounded-2xl hover:border-zinc-600 duration-100 ease-in-out cursor-pointer"
                                >
                                    {elem.iconSrc}
                                    <p className="text-lg text-textBase">{elem.name}</p>
                                </motion.a>

                            ))}
                        </div>

                    </section>
                </main>
            </div>
        </AnimatePresence>
    );
}

export default App;



