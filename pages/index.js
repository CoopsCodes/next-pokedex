import Head from "next/head";
import Link from "next/link";

export default function Home() {
	return (
		<div>
			<Head>
				<title>POKEDEX</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<div>
					<Link href="./pokemon">
						<a>Pokemon</a>
					</Link>
					<h1>Hello main page</h1>
				</div>
			</main>
		</div>
	);
}
