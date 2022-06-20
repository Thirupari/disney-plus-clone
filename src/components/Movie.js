import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import db from "../firebase";


const Movie = (props) => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDetailData(doc.data());
        } else {
          console.log("no such document in firebase 🔥");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [id]);

  return (
    <Container>
      <span>{detailData.title}</span>
      <video controls autoPlay={false} loop={true} playsInline={true}>
          <source src={detailData.trailerMov} type="video/mp4" />
        </video>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  min-height: calc(100vh-250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  align-items:center;
  padding: 0 calc(3.5vw + 5px);

  video{
    width:100%;
    height:90%;
    position:fixed;
  }
`;

export default Movie;
