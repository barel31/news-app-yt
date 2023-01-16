'use client';

import { useRouter } from 'next/navigation';
import queryString from 'query-string';

type Props = {
	article: Article;
};

function ArticleReadMoreBtn({ article }: Props) {
	const router = useRouter();

	const handleClick = () => {
		const query = queryString.stringify(article);
		const url = `/article?${query}`;
		// console.log(url);
		router.push(url);
	};

	return (
		<button
			className="bg-orange-400 h-10 rounded-b-lg dark:text-gray-900 hover:bg-orange-500"
			onClick={handleClick}>
			Read More
		</button>
	);
}

export default ArticleReadMoreBtn;
