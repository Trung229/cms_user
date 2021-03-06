import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Button from '@mui/material/Button';
import Head from 'next/Head';
import Image from 'next/Image';
import Script from 'next/script';

// export async function getServerSideProps(context) {
//     const data = await fetch('https://jsonplaceholder.typicode.com/users/1');
//     console.log(await data.json());
//     return {
//         props: {}, // will be passed to the page component as props
//     }
// }
export default function HomePage() {
    return (
        <>
            <Head>
                <title>First page</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
            </Head>
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="afterInteractive"
                onLoad={() =>
                    console.log(`script loaded correctly, window.FB has been populated`)
                }
            />
            <div className={styles.containerPage}>
                <Link href="/HomePage/">
                    <Button>Click me</Button>
                </Link>
            </div>
            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={styles.logo}>
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    </span>
                </a>
            </footer>
        </>
    )
}