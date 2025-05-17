import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";

export const useGetWorkspaces = () => {
    const data = useQuery((api as any).workspaces.get);
    const isLoading = data === undefined;

    return { data, isLoading };
};
