 import prisma from "@/lib/db";
import Link from "next/link";
 
 export default async function PostsPage() {
    const posts=await prisma.post.findMany();
    
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center">
      <h1 className="text-3xl font-semibold">All Posts ({posts.length})</h1>

      <ul className="border-t border-b border-black/10 py-5 leading-8">
      {
        posts.map((post)=>{
          return(
            <li key={post.id}>
            <Link href={`/Posts/${post.slug}`} className="text-primary underline">
              {post.title}
            </Link>
          </li>
          )
        })
      }
      </ul>
    </div>
  );
}