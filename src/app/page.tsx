import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-semibold">Welcome To My Blog</h1>

      <Link href="/Posts" className="underline">
        View all posts
      </Link>
    </main>
  );
}
