import { PropsWithChildren } from "react";

export default function Layout({
  children
}: PropsWithChildren) {
  return (
    <div className="bg-gray-50 py-8">
      <div className="container mx-auto items-center">
        {children}
      </div>
    </div>
  );
}