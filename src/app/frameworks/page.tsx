"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { frameworks } from "@/data/frameworks";
import { Suspense } from "react";
import FrameworksClient from "./FrameworksClient";

export default function FrameworksPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#070A10]" />}>
      <FrameworksClient />
    </Suspense>
  );
}
  const router = useRouter();
