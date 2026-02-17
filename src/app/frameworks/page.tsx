import { Suspense } from "react";
import FrameworksClient from "./FrameworksClient";

export const dynamic = "force-dynamic";

export default function FrameworksPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#070A10]" />}>
      <FrameworksClient />
    </Suspense>
  );
}
