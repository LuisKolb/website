import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            {/* Welcome Section */}
            <section className="rounded-md p-4 mx-auto mb-4 bg-gray-600">Welcome to my Site! Feel free to contact me with any questions 🙂</section>

            {/* Current Projects */}
            <section className="text-lg pb-4 space-y-2">
                <div className="flex flex-row">
                    <div className="text-2xl">Current Projects</div>
                    <div className="bg-red-400 rounded-full flex-grow h-1 my-auto ml-6"></div>
                </div>
                <div className="ml-4">
                    &#62;
                    <img src="/icons/vuejs.svg" className="inline h-5 w-5 ml-2" alt="vuejs"></img> + 🔥 + 🌬
                    <a href="https://social-app-ddf21.web.app/" className="mx-2 text-blue-300" target="_blank" rel="noopener noreferrer">
                        Webapp with live chat, kanban and <div className="inline italic">The Oracle </div>
                    </a>
                </div>
                <div className="ml-4">
                    &#62; 1st Level Support @
                    <a href="https://www.austriatech.at/" className="mx-2 text-blue-300" target="_blank" rel="noopener noreferrer">
                        Austriatech
                    </a>
                </div>
                <div className="ml-4">&#62; Studying Medical Computer Science @ TU Vienna</div>
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

                <div className="ml-4">&#62; Bsc. Medical Computer Science from TU Vienna</div>
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

                <div className="ml-4">&#62; Webdev - Next.js, Vue, Angular, Symfony, Django, Spring</div>
                <div className="ml-4">&#62; Mobile Development on Android</div>
                <div className="ml-4">&#62; Fluent in german and english, some italian</div>
                <div className="ml-4">&#62; Experience assisting customers and co-workers</div>
                <div className="ml-4">&#62; Great team player</div>
            </section>

            {/* Other Random Stuff */}
            <section className="text-lg pt-4 space-y-2">
                <div className="flex flex-row">
                    <div className="text-2xl">Blog Posts</div>
                    <div className="bg-red-400 rounded-full flex-grow h-1 my-auto ml-6"></div>
                </div>

                <div className="ml-4">&#62; (╯°□°)╯︵ ┻━┻</div>
                <div className="ml-4">&#62; ...</div>
                <div className="ml-4">&#62; ┬─┬ノ( º _ ºノ)</div>
                <div className="ml-4">&#62; 😥👉👈</div>
            </section>
        </Layout>
    );
}
