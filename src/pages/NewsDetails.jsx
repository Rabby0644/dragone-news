import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightNav from "../components/layout-component/RightNav";

const NewsDetails = () => {
  const data = useLoaderData();

  const news = data.data[0];
  // console.log(news);

  return (
    <div>
      <header>
        <Header></Header>
      </header>

      <main className="w-11/12 mx-auto grid lg:grid-cols-12 gap-5">
        <section className="col-span-9">
          <h2 className="font-semibold">Dragon news</h2>
          <div className="card bg-base-100  shadow-xl">
  <figure>
    <img
      src={news?.image_url}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{news.title}</h2>
    <p>{news?.details}</p>
    <div className="card-actions justify-end">
      <Link to={`/category/${news.category_id}`} className="btn btn-primary">Back To Home</Link>
    </div>
  </div>
</div>
        </section>

        <aside className="col-span-3">
          <RightNav></RightNav>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
