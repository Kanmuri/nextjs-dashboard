import DashboardSkeleton from "@/app/ui/skeletons";

function Loading() {
    return <DashboardSkeleton />;
}

//I was getting a "The default export is not a React Component" error
//when I had "export default function Loading()" as all one statement
//Splitting it up like this fixed that error
export default Loading;
