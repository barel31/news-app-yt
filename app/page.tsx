import { categories } from '../constants';
import fetchNews from '../lib/fetchNews';
import NewsList from './NewsList';
import placeholder from '../placeholder.json';

async function Homepage() {
	// fetch the news data
	const news: NewsResponse =
		placeholder || (await fetchNews(categories.join(',')));

	return (
		<div>
			<NewsList news={news} />
		</div>
	);
}

export default Homepage;
