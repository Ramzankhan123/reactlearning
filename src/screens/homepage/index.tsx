import { useEffect } from "react";
import AlbumList from "../../component/album-list";
import { Carousel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../../store/actions/todo";
import { useAlbumsListing } from "../../hooks/useAlbumsListing";
import { gql, useMutation, useQuery } from "@apollo/client";

const GET_USER_QUERY = gql`
  query GetUserQuery {
    users {
      name
      username
      id
    }
  }
`;

const ADD_USER_MUTATION = gql`
  mutation AddUser($user: UserInput) {
    addUser(user: $user) {
      id
    }
  }
`;

const HomepageScreen = () => {
  const dispatch = useDispatch();
  const { data: topAlbums } = useAlbumsListing("top-albums");
  const { data: latestAlbums } = useAlbumsListing("latest-albums");

  const { data } = useQuery<{ users: any[] }>(GET_USER_QUERY);
  const [addUser, { data: mutationData }] = useMutation(ADD_USER_MUTATION, {
    variables: {
      user: {
        email: "1@example.com",
        name: "1@example.com",
        phone: "1@example.com",
        username: "1@example.com",
        website: "1@example.com",
      },
    },
  });


  useEffect(() => {
    addUser();
    dispatch(fetchTodos());
  }, []);

  const todos = useSelector((state: any) => {
    return state?.todos?.todos;
  });

  console.log("====>>>>>>", todos,mutationData);

  return (
    <>
      <section className="mb-12">
        <Carousel>
          <Carousel.Item>
            <img
              src="https://via.placeholder.com/1200x400"
              alt="Banner"
              className="rounded w-full"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://via.placeholder.com/1200x400"
              alt="Banner"
              className="rounded w-full"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://via.placeholder.com/1200x400"
              alt="Banner"
              className="rounded w-full"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        {/* <img
          src="https://via.placeholder.com/1200x400"
          alt="Banner"
          className="rounded w-full"
        /> */}
      </section>
      <ul>
        {data &&
          data?.users &&
          data?.users.length > 0 &&
          data?.users.map((user: any) => {
            return (
              <li key={user.id}>
                {user.name}, {user.username}
              </li>
            );
          })}
      </ul>
      <AlbumList list={topAlbums} title="Top Albums" />
      <AlbumList list={latestAlbums} title="Latest Albums" />
    </>
  );
};

export default HomepageScreen;
