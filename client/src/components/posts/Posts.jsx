// import Post from "../post/Post";
// import "./posts.scss";

// const Posts = () => {
//   //TEMPORARY
//   // const posts = [
//   //   {
//   //     id: 1,
//   //     name: "Momo Station",
//   //     userId: 1,
//   //     profilePic:
//   //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEhKf-zzIbEnWoDINehtsPGhWby3nf30R7lRg72GWkVYg2GEXkdNuAAN5sxtgC8ME6lcA&usqp=CAU",
//   //     desc: "We're on the lookout for an employee to join us !!! Your responsibilities will include preparing fillings, folding momos with precision, and ensuring each plate that leaves the kitchen is a masterpiece.#MomoStationHiring",
//   //     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKkwWJms8Veb98f9-Q-YedyyivQutIdIkmhLjLemGPSVbb8qh1WPDShAGT9PFpnasBjWs&usqp=CAU",
//   //   },
//   //   {
//   //     id: 2,
//   //     name: "Madhuram Sandwich",
//   //     userId: 2,
//   //     profilePic:
//   //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxl4rU-XKrDlwzVCCKiJYDis467LwQKcgO5A&usqp=CAU",
//   //     desc: "Join our team at Madhuram! Be a part of creating delicious sandwiches and delivering joy to our customers.We have urgent need of any supplier.",
//   //     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB8ya-Y8LYNblA_umSebfdsceuRKQpLbbnwh2Pqc1dX429BcSvYg2Iaq3H-3m4KElThZk&usqp=CAU",
//   //   },
//   // ];

//   return <div className="posts">
//     {posts.map(post=>(
//       <Post post={post} key={post.id}/>
//     ))}
//   </div>;
// };

// export default Posts;
import Post from "../post/Post";
import "./posts.scss";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

const Posts = ({userId}) => {
  const { isLoading, error, data } = useQuery(["posts"], () =>
    makeRequest.get("/posts?userId="+userId).then((res) => {
      return res.data;
    }) 
  );

  return (
    <div className="posts">
      {error
        ? "Something went wrong!"
        : isLoading
        ? "loading"
        : data.map((post) => <Post post={post} key={post.id} />)}
    </div>
  );
};

export default Posts;
