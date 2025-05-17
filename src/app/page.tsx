"use client";

import { useEffect, useMemo } from "react";
import { Loader } from "lucide-react";
import { UserButton } from "@/features/auth/components/user-button";
import { useGetWorkspaces } from "@/features/workspaces/api/use-get-workspaces";

export default function Home() {
  const { data, isLoading } = useGetWorkspaces();

  const workspaceId = useMemo(() => data?.[0]?._id, [data]);

  useEffect(() => {
    if (isLoading) return;

    if (workspaceId) {
      console.log("Redirecting to workspace:", workspaceId);
    } else if (!open) {
      console.log('Open creation modal');
    }
  }, [workspaceId, isLoading]);

  return (
    <div className="h-full flex items-center justify-center">
      {/* <Loader className="size-6 animate-spin text-muted-foreground" /> */}
      <UserButton />
    </div>
  );
}
