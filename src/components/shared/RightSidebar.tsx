import { useLocation } from "react-router-dom";
import TopCreators from "./TopCreators";
import { useGetTopCreators } from "@/lib/react-query/queriesAndMutations";
import { Models } from "appwrite";
import { Skeleton } from "../ui/skeleton";

const RightSidebar = () => {
  const { pathname } = useLocation();
  if (pathname !== "/") return null;

  const { data: creators, isPending: isCreatorsLoading } = useGetTopCreators();

  if (isCreatorsLoading) {
    return (
      <div className="rightsidebar custom-scrollbar">
        <div className="w-full flex items-start mb-10">
          <Skeleton className="w-1/2 py-3 bg-slate-600" />
        </div>

        <div className="grid xl:grid-cols-2 lg:grid-cols-1 gap-4">
          {Array.from({ length: 7 }, (_, index) => (
            <Skeleton key={index} className="h-40 w-52 bg-slate-500"></Skeleton>
          ))}
        </div>
      </div>
    );
  }

  return (
    <nav className="rightsidebar custom-scrollbar">
      <h2 className="h3-bold md:h2-bold w-full mb-10">Top Creators</h2>
      <div className="grid xl:grid-cols-2 lg:grid-cols-1 gap-4">
        {creators?.documents.map((creator: Models.Document) => (
          <TopCreators key={creator.$id} creator={creator} />
        ))}
      </div>
    </nav>
  );
};

export default RightSidebar;
