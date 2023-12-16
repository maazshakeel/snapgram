import GridUsersList from "@/components/shared/GridUsersList";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetTopCreators } from "@/lib/react-query/queriesAndMutations";

const AllUsers = () => {
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
    <div className="users-container">
      <div className="users-inner_container">
        <h2 className="h3-bold md:h2-bold w-full">All Users</h2>
        <GridUsersList creators={creators} />
      </div>
    </div>
  );
};

export default AllUsers;
