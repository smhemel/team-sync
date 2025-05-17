"use client";

import { useRouter } from "next/navigation";
import { useWorkspaceId } from "@/hooks/use-workspace-id";
import { useGetWorkspace } from "@/features/workspaces/api/use-get-workspace";

const WorkspaceIdPage = () => {
    const router = useRouter();
    const workspaceId = useWorkspaceId();

    const { data: workspace, isLoading: workspaceLoading } = useGetWorkspace({ id: workspaceId });

    return (
        <div>
            ID: {workspaceId}
        </div>
    );
}

export default WorkspaceIdPage;