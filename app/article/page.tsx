'use client';

import { notFound } from 'next/navigation';
import LiveTimestamp from '../LiveTimestamp';
import { useSearchParams } from 'next/navigation';

type Props = {
	searchParams?: Article;
};

function ArticlePage({ searchParams }: Props) {
	const data = useSearchParams();
	const article: Article = {
		author: data.get('author'),
		category: data.get('category')!,
		country: data.get('country')!,
		description: data.get('description')!,
		image: data.get('image'),
		language: data.get('language')!,
		published_at: data.get('published_at')!,
		source: data.get('source')!,
		title: data.get('title')!,
		url: data.get('url')!,
	};

	// if (
	// 	(searchParams && Object.entries(searchParams).length === 0) ||
	// 	!searchParams
	// ) {
	// 	console.log('article not found');
	// 	console.log({ searchParams });

	// 	return notFound();
	// }

	// const article: Article = searchParams;
	console.log(article.published_at);

	return (
		<article>
			<section className="flex flex-col lg:flex-row pb-24 px-0 lg:px-10">
				{article.image && (
					<img
						className="h-50 max-w-md mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-md"
						src={article.image}
						alt={article.title}
					/>
				)}

				<div className="px-10">
					<h1 className="headerTitle px-0 no-underline pb-2">
						{article.title}
					</h1>

					<div className="flex divide-x-2 space-x-4">
						<h2 className="font-bold">
							By: {article.author || 'unknown'}
						</h2>
						<h2 className="font-bold pl-4">
							Source: {article.source || 'unknown'}
						</h2>
						<LiveTimestamp
							classes="pl-4"
							time={article.published_at}
						/>
					</div>

					<p className="pt-4">{article.description}</p>
				</div>
			</section>
		</article>
	);
}

export default ArticlePage;
