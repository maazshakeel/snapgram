import { Models } from "appwrite";
import { Link } from "react-router-dom";

import { Button } from "../ui/button";

type GridUsersListProps = {
  creators: Models.Document | any;
};

const GridUsersList = ({ creators }: GridUsersListProps) => {
  return (
    <ul className="grid-container">
      {creators?.documents.map((creator: Models.Document) => (
        <Link
          key={creator.$id}
          to={`/profile/${creator.$id}`}
          className="px-5 py-10 border-[#1F1F22] border-2 rounded-[20px] flex flex-col items-center gap-5 justify-center">
          <img
            className="h-14 w-14 rounded-full"
            alt="profile"
            src={creator.imageUrl || "/assets/icons/profile-placeholder.svg"}
          />
          <p className="body-bold">{creator.name}</p>
          <Button
            onClick={(e) => {
              e.preventDefault();
              alert("hel");
            }}
            className="bg-primary-500 py-5">
            Follow
          </Button>
        </Link>
      ))}
    </ul>
  );
};

export default GridUsersList;
