import Link from "next/link";
import { useRouter } from "next/router";
const Home = () => {
  const router = useRouter();
  const handleClick = () => {
    console.log("Order Placed");
    // router.push("/product");
    router.replace("/product");
  };
  return (
    // <>
    //   <h1> Home Page </h1>
    //   <Link href="/blog">
    //     <a>Blog</a>
    //   </Link>
    //   <Link href="/product">
    //     <a>Products</a>
    //   </Link>
    //   <button onClick={handleClick}>Place Holder</button>
    // </>
    <>
      <h1> Pre rendering </h1>
      <Link href="/users">
        <a>Users</a>
      </Link>
      <Link href="/posts">
        <a>Posts</a>
      </Link>
    </>
  );
};
export default Home;
