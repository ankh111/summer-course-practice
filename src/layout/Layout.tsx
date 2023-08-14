import { PropsWithChildren } from "react";

export default function Layout({
  children
}: PropsWithChildren) {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto items-center p-8">
        {children}
      </div>
    </div>
  );
}