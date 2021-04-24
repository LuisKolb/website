import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            {/* Current Projects */}
            <section className="text-lg pb-4 space-y-2">
                <div className="flex flex-row">
                    <div className="text-2xl">Current Projects</div>
                    <div className="bg-red-400 rounded-full flex-grow h-1 my-auto ml-6"></div>
                </div>
                <div className="ml-4">
                    &#62; 
                    <img src="/vuejs.svg" className="inline h-5 w-5 ml-2" alt="vuejs"></img> + 🔥 + 🌬
                    <a href="https://social-app-ddf21.web.app/" className="mx-2 text-blue-300">
                        Webapp with live chat, kanban and <div className="inline italic">The Oracle </div>
                    </a>
                </div>
                <div className="ml-4">
                    &#62; 1st Level Support @
                    <a href="https://www.austriatech.at/" className="mx-2 text-blue-300">
                        Austriatech
                    </a>
                </div>
                <div className="ml-4">&#62; Studying Medical Computer Science @ TU Vienna</div>
                <div className="ml-4">
                    &#62; Interested in Data Science? Check out my
                    <a href="#" className="ml-2 text-blue-300">
                        Bachelor's Thesis
                    </a>
                    !
                </div>
            </section>

            {/* CV Section */}
            <section className="text-lg pt-4 space-y-2">
                <div className="flex flex-row">
                    <div className="text-2xl">Ye Tales of Olde</div>
                    <div className="bg-red-400 rounded-full flex-grow h-1 my-auto ml-6"></div>
                </div>

                <div className="ml-4">&#62; Bsc. Medical Computer Science from TU Vienna</div>
                <div className="ml-4">&#62; Civil Service @ Austrian Red Cross - IT Department</div>
                <div className="ml-4">&#62; High School Diploma from Wiedner Gymnasium GRG4</div>
                <div className="ml-4">
                    &#62; 
                    <a href="#" className="ml-2 text-red-300">
                        Download this as a PDF
                    </a>
                </div>
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
