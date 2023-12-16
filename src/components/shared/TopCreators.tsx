import { Models } from "appwrite";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

type TopCreatorsProps = {
  creator: Models.Document;
};

const TopCreators = ({ creator }: TopCreatorsProps) => {
  return (
    <Link
      to={`/profile/${creator.$id}`}
      className="px-2 py-5 border-[#1F1F22] border-2 rounded-[20px] flex flex-col items-center gap-5 justify-center">
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
  );
};

export default TopCreators;
