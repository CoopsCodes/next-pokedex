import Link from "next/link";
import Layout from "../../components/Layout";

//! => '/pokemon' POKEMON LANDING PAGE

export default function Pokemon({ pokemon }) {
	return (
		<div>
			<Layout title="Pokemon">
				<h1 className="text-4xl mb-8 text-center">Pokedex</h1>
				<ul className="flex flex-wrap">
					{pokemon.map((p, i) => (
						<li key={i}>
							<Link href={`/pokemon?id=${i + 1}`}>
								<a className="flex flex-col items-center border p-4 border-gray my-2 w-48 h-48 capitalize text-xl bg-gray-200 rounded-md">
									<div>
										<span className="mr-2 font-bold">
											{i + 1}.
										</span>
										{p.name}
									</div>

									<img
										className="w-20 h-20 mr-3"
										src={p.image}
										alt={`Pokemon: ${p.name}`}
									/>
								</a>
							</Link>
						</li>
					))}
				</ul>
			</Layout>
		</div>
	);
}

export async function getStaticProps(context) {
	try {
		const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
		const { results } = await res.json();
		// console.log(results);
		const pokemon = results.map((result, index) => {
			const paddedIndex = ("00" + (index + 1)).slice(-3);
			const image = `https:assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`;
			return {
				...result,
				image,
			};
		});
		return {
			props: { pokemon },
		};
	} catch (error) {
		console.log("Fetch error", error);
	}
}

// <Link href="/">
// 	<a>home</a>
// </Link>

//
