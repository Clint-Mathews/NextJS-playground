const NewsBasedOnCategory = ({ article, category }) => {
  return (
    <>
      <h1>News of category : {category}</h1>;
      {article.map((data) => {
        return (
          <div key={data.id}>
            <h2>
              {data.id} {data.title} {data.category} {data.description}
            </h2>
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default NewsBasedOnCategory;

export async function getServerSideProps(context) {
  const { params, req, res, query } = context;
  console.log("Pre rendering the news for category" + params.category);
  //Get query data
  console.log(query);
  //Get and set cookie
  console.log(req.headers.cookie);
  res.setHeader("Set-Cookie", ["name=Clint"]);
  const response = await fetch(
    `http://localhost:4000/news?category=${params.category}`
  );
  const data = await response.json();
  return {
    props: {
      article: data,
      category: params.category,
    },
  };
}
