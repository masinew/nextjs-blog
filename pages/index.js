import Link from 'next/link'
import Head from 'next/head'
import Layout, { siteTitle } from '../src/components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostData } from "../lib/posts"
import Date from '../src/components/date'


export async function getStaticProps() {
    const allPostsData = getSortedPostData()
    return {
        props: {
            allPostsData
        }
    }
}

export default function Home({ allPostsData }) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <Link href={"/posts/first-post"}>
                <a>First Post Page</a>
            </Link>
            <section className={utilStyles.headingMd}>
                <p>[Your Self Introduction]</p>
                <p>
                    (This is a sample website - you’ll be building a site like this on{' '}
                    <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
                </p>
            </section>

            { /* Blog posts */}
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {
                        allPostsData.map(({ id, date, title }) => (
                            <li className={utilStyles.listItem} key={id}>
                                <Link href={`/posts/${id}`}>
                                    <a>{title}</a>
                                </Link>
                                <br />
                                <small className={utilStyles.lightText}>
                                    <Date dateString={date} />
                                </small>
                            </li>
                        ))
                    }
                </ul>
            </section>
        </Layout>
    )
}
