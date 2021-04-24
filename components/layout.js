import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const name = "Luis Kolb";
const greetings = ["Hey there!", "What's up?", "Hello there!", "( ^_^)／", "(≧▽≦)", "👋"];
export const siteTitle = "Luis Kolb | Hey there!";

export default function Layout({ children, home }) {
    return (
        <div className="bg-gray-700">
            <div className="max-w-7xl min-w-min ml-auto mr-auto grid grid-cols-4 w-full">
                <Head>
                    <link rel="icon" href="/favicon.ico" />
                    <meta name="description" content="Luis Kolb" />
                    <meta property="og:image" content={`https://og-image.vercel.app/${encodeURI(siteTitle)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`} />
                    <meta name="og:title" content={siteTitle} />
                    <meta name="twitter:card" content="summary_large_image" />
                </Head>

                <header className="flex flex-col col-span-4 lg:col-span-1 lg:h-screen sticky items-start mx-auto p-8 lg:p-16 space-y-8 bg-gray-700">

                    <div className="flex flex-row items-center lg:flex-col lg:space-y-4 space-x-4 lg:space-x-0">
                        <Image priority src="/images/bossman.jpg" className="rounded-full" height={144} width={144} alt={name} />
                        <div className="text-center text-white text-md w-full">
                            <div className="text-3xl mb-2 text-red-400">Luis Kolb</div>
                            {greetings[Math.floor(Math.random() * greetings.length)]}
                        </div>
                    </div>

                    <section className="flex flex-row content-center justify-between w-full">
                        <a href="https://github.com/LuisKolb/" className="">
                            <img src="/github.svg" className="h-8 w-8"></img>
                        </a>
                        <a href="https://www.linkedin.com/in/luis-kolb/" className="">
                            <img src="/linkedin.svg" className="h-8 w-8"></img>
                        </a>
                        <a href="mailto:kolb.luis@gmail.com" className="">
                            <img src="/email.svg" className="h-8 w-8"></img>
                        </a>
                    </section>

                    {!home && (
                        <div className="absolute bottom-8 text-blue-400">
                            <Link href="/">
                                <a>← Back to home</a>
                            </Link>
                        </div>
                    )}

                </header>
                <main className="lg:max-w-2xl col-span-4 lg:col-span-3 flex flex-col p-8 lg:mr-24 text-white bg-gray-500">{children}</main>
            </div>
        </div>
    );
}
