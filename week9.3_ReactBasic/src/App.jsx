import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "./App.css";
import { PostComponent } from "./PostComponent";

function App() {
  const [posts, setPosts] = useState([]);

  const addPost = () => {
    console.log("uuid", uuidv4());
    setPosts([
      ...posts,
      {
        name: "Vasistav",
        subtitle: "anurag secons class",
        time: "1 min ago",
        image:
          "https://i.pinimg.com/originals/72/e7/41/72e741dd0d152ae55cb5e046b1eba9d5.jpg",
        description: "i am anurag learning rust and full stack development",
      },
    ]);
  };

  //here we are getting post from arrays(posts) and putting attribute to PostComponent
  const postComp = posts.map((post) => (
    <div key={uuidv4()}>
       {" "}
      <PostComponent
        name={post.name}
        subtitle={post.subtitle}
        time={post.time}
        image={post.image}
        description={post.description}
      />
    </div>
  ));

  // const posts=[
  //   {
  //     name:"Anurag",
  //     subtitle:"anurag secons class",
  //     time:"1 min ago",
  //     image:"https://i.pinimg.com/originals/72/e7/41/72e741dd0d152ae55cb5e046b1eba9d5.jpg",
  //     description:"i am anurag learning rust and full stack development"
  //   },
  //   {
  //     name:"Ashutosh",
  //     subtitle:"anurag secons class",
  //     time:"1 min ago",
  //     image:"https://i.pinimg.com/originals/72/e7/41/72e741dd0d152ae55cb5e046b1eba9d5.jpg",
  //     description:"i am anurag learning rust and full stack development"
  //   },
  //   {
  //     name:"Vasistava",
  //     subtitle:"anurag secons class",
  //     time:"1 min ago",
  //     image:"https://i.pinimg.com/originals/72/e7/41/72e741dd0d152ae55cb5e046b1eba9d5.jpg",
  //     description:"i am anurag learning rust and full stack development"
  //   }
  // ]

  return (
    <>
    {/* use Effect */}
      <div className="bg-red-300 flex justify-start items-start flex-col w-screen h-screen">
        <button
          type="button"
          onClick={addPost}
          className="bg-green-300 fixed rounded-full p-2 ml-5"
        >
          {" "}
          add Post {posts.length}{" "}
        </button>
        <div className="w-full flex justify-center items-center flex-col">
          {postComp}

          {posts.map((post) => (
            <div key={uuidv4()}>
              <PostComponent
                name={post.name}
                subtitle={post.subtitle}
                time={post.time}
                image={post.image}
                description={post.description}
              />
            </div>
          ))}
        </div>
      </div>


    </>
  );
}

export default App;
