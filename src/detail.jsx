import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  console.log(id);
  const getDetail = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();
    console.log(json);
    setMovie(json.data.movie);
  };
  useEffect(() => {
    getDetail();
  }, []);
  console.log("movie :", movie);
  return (
    <>
      <h1>detail</h1>
    </>
  );
}

export default Detail;
