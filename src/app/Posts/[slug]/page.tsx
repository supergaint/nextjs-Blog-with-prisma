import prisma from "@/lib/db";

export default async function PostsPage({ params }) {
  const post = await prisma.post.findUnique({
    where: {
      slug: params.slug,
    },
    
  });
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center py-10 px-10">
      <h1 className="text-3xl font-semibold px-10">{post?.title}</h1>
      <p>{post?.content}</p>
    </div>
  );
}
