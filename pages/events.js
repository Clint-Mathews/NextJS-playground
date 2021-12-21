import { useState } from "react";
import { useRouter } from "next/router";

const Events = ({ eventListData }) => {
  const router = useRouter();
  const [eventList, setEventList] = useState(eventListData);
  const fetchSportsEvents = async () => {
    const respose = await fetch("http://localhost:4000/events?category=Sports");
    const data = await respose.json();
    setEventList(data);
    router.push("/events?category=Sports", undefined, { shallow: true });
  };
  return (
    <div>
      <h1>Events List </h1>
      <buttom onClick={fetchSportsEvents}>Filter</buttom>
      {eventList.map((data) => {
        return (
          <>
            <h2 key={data.id}>
              {data.id} - {data.title} - {data.category} - {data.date}
            </h2>
            <p>{data.description}</p>
            <hr />
          </>
        );
      })}
    </div>
  );
};
export default Events;
export async function getServerSideProps(context) {
  const { query } = context;
  const { category } = query;
  const queryString = category ? "category=Sports" : "";
  const respose = await fetch(`http://localhost:4000/events?${queryString}`);
  const data = await respose.json();
  return {
    props: {
      eventListData: data,
    },
  };
}
