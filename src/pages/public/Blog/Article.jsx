const Article = ({ article, setArticleNum }) => {
  return (
    <div id={article.section} className="w-[95%]">
      <h5 className="mb-6 pt-9 text-3xl font-bold">{article.heading}</h5>
      <p className="text-xl font-light">{article.content}</p>
    </div>
  );
};

export default Article;
