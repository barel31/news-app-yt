export default function sortNewsByImage(news: NewsResponse) {
	if (!news?.data) return;
	
	const newsWithImage = news.data.filter((item) => item.image);
	const newsWithoutImage = news.data.filter((item) => !item.image);

	const sortedNewsResponse = {
		pagination: news.pagination,
		data: [...newsWithImage, ...newsWithoutImage],
	};

	return sortedNewsResponse;
}
