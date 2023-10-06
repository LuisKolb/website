import Head from "next/head";
import Layout from "../components/layout";
import Image from "next/image";

function Home() {

    const name = "Luis Kolb";
    const greeting = "Hey there! 👋"
    const subtGreeting = "👇 contact me here 👇"
    const siteTitle = "luiskolb.at | 👋"

    return (
        <Layout home name={name} greeting={greeting} subtGreeting={subtGreeting}>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            {/* Welcome Section */}
            <section className="rounded-md p-4 mx-auto mb-4 bg-gradient-to-r to-red-500 from-indigo-500">Welcome to my corner of the internet! I'm Luis, 26 years old, and currently working on my Master's degree in Data Science. Feel free to reach out at the links below my picture 🙂 I'd love to hear from you!</section>

            {/* Current Projects */}
            <section className="text-lg pb-4 space-y-2">
                <div className="flex flex-row">
                    <div className="text-2xl">Current Projects</div>
                    <div className="bg-red-400 rounded-full flex-grow h-1 my-auto ml-6"></div>
                </div>
                <div className="ml-4">
                    &#62;
                    <span className=" text-red-400 ml-2">*NEW*</span>
                    <a href="https://charcut.vercel.app/" className="ml-2 text-blue-300" target="_blank" rel="noopener noreferrer">
                        CharCut online
                    </a> - easily compare translations, for example <span className="underline">machine-translated text</span> vs. <span className="underline">human-translated text</span>! More info on the site.
                </div>
                <div className="ml-4">
                    &#62;
                    <img src="/icons/vuejs.svg" className="inline h-5 w-5 ml-2" alt="vuejs"></img> + 🔥 + 🌬
                    <a href="https://social-app-ddf21.web.app/" className="mx-2 text-blue-300" target="_blank" rel="noopener noreferrer">
                        Webapp with live chat, a kanban board
                    </a>
                    and 
                    <a href="https://social-app-ddf21.web.app/oracle" className="mx-2 text-blue-300" target="_blank" rel="noopener noreferrer">
                        <span className="inline italic">The Oracle</span>
                    </a>
                </div>
                <div className="ml-4">&#62; Studying for my Master's Degree in Data Science @ TU Vienna</div>
                <div className="ml-4">
                    &#62; IT-Department @
                    <a href="https://www.austriatech.at/" className="mx-2 text-blue-300" target="_blank" rel="noopener noreferrer">
                        AustriaTech
                    </a>
                </div>
                {/*todo: replace link*/}
                <div className="ml-4">
                    &#62; Interested in Data Science? Check out the Jupyter extension I developed for my
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
                    <div className="text-2xl">Some Stuff I Know</div>
                    <div className="bg-red-400 rounded-full flex-grow h-1 my-auto ml-6"></div>
                </div>

                <div className="ml-4">&#62; Machine Learning &amp; AI</div>
                <div className="ml-4">&#62; Stats and Visualization in R and Python</div>
                <div className="ml-4">&#62; Full Stack Webdev - e.g. Next.js/React, Vue, Angular, Symfony, Django, Spring</div>
                <div className="ml-4">&#62; Backend-as-a-Service, GCP &amp; Google Firebase</div>
                <div className="ml-4">&#62; Mobile Development on Android</div>
                <div className="ml-4">&#62; Several other languages like Java, SQL, MATLAB</div>
                <div className="ml-4">&#62; Fluent in German and English, some Italian</div>
                <div className="ml-4">&#62; Experience assisting clients and co-workers</div>
                <div className="ml-4">&#62; Great team player!</div>
            </section>

            {/* Other Random Stuff Blog soon? */}
            <section className="text-lg pt-4 space-y-2">
                <div className="flex flex-row">
                    <div className="text-2xl">Other Cool Stuff</div>
                    <div className="bg-red-400 rounded-full flex-grow h-1 my-auto ml-6"></div>
                </div>

                <div className="ml-4">
                    &#62; I beat Factorio: Space Exploration! ⚙️
                    <Image src="/images/factorio-se-victory.png" width={1121} height={955} layout="responsive" className=" rounded-md" />
                </div>

                <div className="ml-4">&#62; (╯°□°)╯︵ ┻━┻</div>
                <div className="ml-4">&#62; ...</div>
                <div className="ml-4">&#62; ┬─┬ノ( º _ ºノ)</div>
                <div className="ml-4">&#62; Just the Spaceship ending though... I'll get to the Gate ending someday, I'm sure.</div>
            </section>
        </Layout>
    );
}

export default Home
