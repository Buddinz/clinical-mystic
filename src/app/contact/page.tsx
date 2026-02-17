"use client";

import { useState } from "react";
import Link from "next/link";
import { Container, Divider, Section, Stack } from "@/components/layout";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main>
      <Section>
        <Container>
          <Stack>
            <p className="text-xs uppercase tracking-[0.28em] text-muted">Contact</p>
            <h1 className="text-4xl sm:text-5xl">Make contact</h1>
            <p className="measure text-base text-muted sm:text-lg">
              Quiet contact only. No pitches. No noise. A short, clear note is enough.
            </p>
            <div className="measure">
              {submitted ? (
                <div className="rounded-lg border border-soft bg-surface p-6 text-sm text-muted">
                  Message received. A reply will arrive if a response is warranted.
                </div>
              ) : (
                <form
                  className="flex flex-col gap-4"
                  onSubmit={(event) => {
                    event.preventDefault();
                    setSubmitted(true);
                  }}
                >
                  <label className="flex flex-col gap-2 text-sm text-muted">
                    Name
                    <input
                      type="text"
                      required
                      className="rounded-md border border-soft px-4 py-3 text-sm text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-sm text-muted">
                    Email
                    <input
                      type="email"
                      required
                      className="rounded-md border border-soft px-4 py-3 text-sm text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-sm text-muted">
                    Message
                    <textarea
                      rows={4}
                      required
                      className="rounded-md border border-soft px-4 py-3 text-sm text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    />
                  </label>
                  <button
                    type="submit"
                    className="w-fit rounded-md bg-ink px-5 py-3 text-sm font-medium text-white transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    Send
                  </button>
                </form>
              )}
            </div>
            <div className="text-sm text-muted">
              Or email directly: <Link className="underline" href="mailto:contact@clinicalmystic.com">contact@clinicalmystic.com</Link>
            </div>
          </Stack>
        </Container>
      </Section>
      <Divider />
    </main>
  );
}
