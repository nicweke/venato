"use client";

import { useUser } from "@clerk/nextjs";

export const WelcomeMsg = () => {
  const { user, isLoaded } = useUser();

  return (
    <div className="space-y-2 mb-4">
      <h2 className="text-2xl lg:text-4xl font-bold text-white">
        Welcome Back{isLoaded ? ", " : ""}👋
        {user?.firstName}
      </h2>
      <p className="text-sm lg:text-base text-[#ffffff]">
        Your radio management and tracking platform
      </p>
    </div>
  );
};
