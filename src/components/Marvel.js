import styled from "styled-components";
import { Link } from "react-router-dom";
import ImgSlider from "./ImgSlider";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommends from "./Recommends";
import Trending from "./Trending";
import Viewers from "./Viewers";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { selectMarvel, selectOriginal, setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";

const Marvel = (props) => {
  const movies = useSelector(selectMarvel);
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let marvel = [];

  

  useEffect(() => {
    console.log("hello");
    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        switch (doc.data().type) {
          case "marvel":
            marvel = [...marvel, { id: doc.id, ...doc.data() }];
            break;
        }
      });

      dispatch(
        setMovies({
          marvel: marvel,
        })
      );
    });
  }, [userName]);

  return (
    <Container>
       <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/y2mate.com - MCU intro with SpiderMan 90s theme is EPIC_1080p (1).mp4" type="video/mp4" />
        </video>
      <h1>MARVEL</h1>
      <Content>
        {movies &&
          movies.map((movie, key) => (
            <Wrap key={key}>
              {movie.id}
              <Link to={`/detail/` + movie.id}>
                <img src={movie.cardImg} alt={movie.title} />
              </Link>
            </Wrap>
          ))}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 25px 26px;
  video{
    width:100%;
    z-index:-1;
    margin-bottom:-260px;
    mask-image:linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))

  }
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

export default Marvel;
