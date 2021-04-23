import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className="mt-2">
                Currently working as...
                <br />
            </section>
            <section className="">
                CV
                <br />
            </section>
        </Layout>
    );
}
