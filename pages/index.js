import Link from "next/link";

//! => '/' HOME LANDING PAGE

export default function Home() {
	return (
		<div>
			<main>
				<div>
					<Link href="./pokemon">
						<a>follow me to the Pokemon</a>
					</Link>
					<h1>Hello,</h1>
					<h2>Welcome to the landing page.</h2>
					<p>
						Here will be all the pretty stuff that'll take you to
						the other options
					</p>
				</div>
			</main>
		</div>
	);
}
