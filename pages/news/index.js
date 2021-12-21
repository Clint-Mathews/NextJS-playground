const NewsArticleList = ({ article }) => {
  return (
    <>
      <h1>NewsArticleList</h1>;
      {article.map((data) => {
        return (
          <div key={data.id}>
            <h2>
              {data.id} {data.title} {data.category} {data.description}
            </h2>
          </div>
        );
      })}
    </>
  );
};
export default NewsArticleList;
export async function getServerSideProps() {
  console.log("Pre rendering the news");
  const response = await fetch("http://localhost:4000/news");
  const data = await response.json();
  return {
    props: {
      article: data,
    },
  };
}
