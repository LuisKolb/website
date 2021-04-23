import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const name = "Luis Kolb";
export const siteTitle = "Luis Kolb | Hey there!";

export default function Layout({ children, home }) {
    return (
        <div className="grid grid-cols-4 w-screen bg-gray-500">
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Luis Kolb" />
                <meta property="og:image" content={`https://og-image.vercel.app/${encodeURI(siteTitle)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`} />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className="col-span-1 h-screen sticky flex flex-col items-start mx-auto pt-2 space-y-2">
                <Image priority src="/images/bossman.jpg" className="rounded-full" height={144} width={144} alt={name} />
                <h1 className="text-center text-white text-xl w-full">{name}</h1>
                <section className="flex flex-row content-center justify-between w-full">
                    <a href="https://github.com/LuisKolb/" className="">
                        <img src="/github.svg" className="h-12 w-12"></img>
                    </a>
                    <a href="https://www.linkedin.com/in/luis-kolb/" className="">
                        <img src="/linkedin.svg" className="h-12 w-12"></img>
                    </a>
                </section>
                {home && (
                    <div className="absolute bottom-2">
                        <Link href="/">
                            <a>← Back to home</a>
                        </Link>
                    </div>
                )}
            </header>
            <main className="container col-span-3 flex flex-col space-y-2 text-yellow-100">{children}</main>
        </div>
    );
}
