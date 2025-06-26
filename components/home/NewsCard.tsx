/**
 * A component that renders a news card with a category, title, and excerpt.
 *
 * @param {INewsCardProps} article - The news article to render.
 * @returns {ReactElement} A JSX element representing the news card.
 */
const NewsCard = ({ article }: { article: INewsCardProps }) => {
  return (
    <div
      key={article.id}
      className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
    >
      <p className="text-sm font-semibold text-black mb-1">
        {article.category}
      </p>
      <h3 className="text-xl font-bold text-gray-800">{article.title}</h3>
      <p className="text-gray-600 mt-2">{article.excerpt}</p>
    </div>
  );
};

export default NewsCard;
