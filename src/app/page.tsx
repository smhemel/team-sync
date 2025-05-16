import { AuthScreen } from "@/features/auth/components/auth-screen";

export default function Home() {
  return (
    <div className="h-full flex items-center justify-center bg-[#5C3B58]">
      <div className="md:h-auto md:w-[420px]">
        <AuthScreen />
      </div>
    </div>
  );
}
