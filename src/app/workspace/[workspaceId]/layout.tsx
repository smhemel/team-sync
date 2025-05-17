"use client";

import { Sidebar } from "./sidebar";
import { Toolbar } from "./toolbar";
import { Loader } from "lucide-react";

interface WorkspaceIdLayoutProps {
  children: React.ReactNode;
};

const WorkspaceIdLayout = ({ children }: WorkspaceIdLayoutProps) => {

  return (
    <div className="h-full">
      <Toolbar />
      <div className="flex h-[calc(100vh-40px)]">
        <Sidebar />
      </div>
    </div>
  );
};

export default WorkspaceIdLayout;
