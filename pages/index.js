import Head from "next/head";
import Layout from "../components/layout";
import { useEffect, useState } from 'react'


export default function Home() {

    const name = "Luis Kolb";
    const greetings = ["Hey there!", "What's up?", "Hello there!", "( ^_^)๏ผ", "(โงโฝโฆ)"];

    const [greeting, setGreeting] = useState('๐')
    const [siteTitle, setSiteTitle] = useState(name + ' | ' + greeting)
    useEffect(() => setGreeting(greetings[Math.floor(Math.random() * greetings.length)]))

    return (
        <Layout home name={name} greeting={greeting}>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            {/* Welcome Section */}
            <section className="rounded-md p-4 mx-auto mb-4 bg-gray-600">Welcome to my corner of the internet! I'm 24 years old, and currently working on my Master's degree in Data Science. Feel free to reach out at the links below my picture ๐</section>

            {/* Current Projects */}
            <section className="text-lg pb-4 space-y-2">
                <div className="flex flex-row">
                    <div className="text-2xl">Current Projects</div>
                    <div className="bg-red-400 rounded-full flex-grow h-1 my-auto ml-6"></div>
                </div>
                <div className="ml-4">
                    &#62;
                    <img src="/icons/vuejs.svg" className="inline h-5 w-5 ml-2" alt="vuejs"></img> + ๐ฅ + ๐ฌ
                    <a href="https://social-app-ddf21.web.app/" className="mx-2 text-blue-300" target="_blank" rel="noopener noreferrer">
                        Webapp with live chat, kanban and <div className="inline italic">The Oracle</div>
                    </a>
                    (currently undergoing maintenance)
                </div>
                <div className="ml-4">
                    &#62; 1st Level Support @
                    <a href="https://www.austriatech.at/" className="mx-2 text-blue-300" target="_blank" rel="noopener noreferrer">
                        Austriatech
                    </a>
                </div>
                <div className="ml-4">&#62; Studying for my Master's Degree in Data Science @ TU Vienna</div>
                {/*todo: replace link*/}
                <div className="ml-4">
                    &#62; Interested in Data Science? Check out my
                    <a href="https://github.com/LuisKolb/sideline" className="ml-2 text-blue-300" target="_blank" rel="noopener noreferrer">
                        Bachelor's Thesis
                    </a>
                    !
                </div>
            </section>

            {/* CV Section */}
            <section className="text-lg pt-4 space-y-2">
                <div className="flex flex-row">
                    <div className="text-2xl">Ye Tales Of Olde</div>
                    <div className="bg-red-400 rounded-full flex-grow h-1 my-auto ml-6"></div>
                </div>

                <div className="ml-4">&#62; BSc Medical Computer Science from TU Vienna</div>
                <div className="ml-4">
                    &#62; Both front desk and back office experience @
                    <a href="http://www.traveldoc.at/" className="mx-2 text-blue-300" target="_blank" rel="noopener noreferrer">
                        traveldoc
                    </a>
                </div>
                <div className="ml-4">&#62; Civil Service @ Austrian Red Cross - IT Department</div>
                <div className="ml-4">&#62; High School Diploma from Wiedner Gymnasium GRG4</div>
                <div className="ml-4">
                    &#62;
                    <a href="/CV_Luis_Kolb.pdf" className="ml-2 text-red-300" target="_blank" rel="noopener noreferrer">
                        Download my CV (in german)
                    </a>
                </div>
            </section>

            {/* Skills Section */}
            <section className="text-lg pt-4 space-y-2">
                <div className="flex flex-row">
                    <div className="text-2xl">Things I Know</div>
                    <div className="bg-red-400 rounded-full flex-grow h-1 my-auto ml-6"></div>
                </div>

                <div className="ml-4">&#62; Machine Learning &amp; AI</div>
                <div className="ml-4">&#62; Stats and Visualization in R and Python</div>
                <div className="ml-4">&#62; Full Stack Webdev - Next.js, Vue, Angular, Symfony, Django, Spring</div>
                <div className="ml-4">&#62; Google Firebase, a Backend-as-a-Service</div>
                <div className="ml-4">&#62; Mobile Development on Android</div>
                <div className="ml-4">&#62; Several other languages like Java, SQL, MATLAB</div>
                <div className="ml-4">&#62; Fluent in German and English, some Italian</div>
                <div className="ml-4">&#62; Experience assisting clients and co-workers</div>
                <div className="ml-4">&#62; Great team player!</div>
            </section>

            {/* Other Random Stuff Blog soon? */}
            {/* 
            <section className="text-lg pt-4 space-y-2">
                <div className="flex flex-row">
                    <div className="text-2xl">Blog Posts</div>
                    <div className="bg-red-400 rounded-full flex-grow h-1 my-auto ml-6"></div>
                </div>

                <div className="ml-4">&#62; (โฏยฐโกยฐ)โฏ๏ธต โปโโป</div>
                <div className="ml-4">&#62; ...</div>
                <div className="ml-4">&#62; โฌโโฌใ( ยบ _ ยบใ)</div>
                <div className="ml-4">&#62; ๐ฅ๐๐</div>
            </section>
            */}
        </Layout>
    );
}
