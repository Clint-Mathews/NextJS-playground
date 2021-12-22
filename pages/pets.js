import Image from "next/image";
import img from "../public/4.jpg";
const Pets = () => {
  return (
    <>
      <h1>Pets Page</h1>
      <Image
        src={img}
        placeholder="blur"
        alt="image"
        width={420}
        height={400}
      />
      {["1", "2", "3", "4", "5"].map((item) => {
        return (
          <div key={item}>
            <Image
              src={`/${item}.jpg`}
              blurDataURL={`/${item}.jpg`}
              alt="image"
              width={420}
              height={400}
            />
          </div>
        );
      })}
    </>
  );
};

export default Pets;
