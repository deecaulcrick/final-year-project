import Link from "next/link";
import { MoveRight } from "lucide-react";
import { getSnippetMetaData } from "@/lib/mdx";

function SnippetTable() {
    const postMetaData = getSnippetMetaData();

    return (
        <div className="mt-20">

            <div className=" grid md:grid-cols-2 gap-6">
                {postMetaData.map((post) => (
                    <div key={post.slug} className="rounded-sm p-10 mb-6 border border-zinc-200 dark:border-zinc-800">
                        <h2 className="font-heading font-light text-3xl tracking-tighter mb-4  text-theme-dark-green dark:text-theme-blue">
                            <Link href={`/notes/${post.slug}`} className="post-card-title">
                                {post.title}
                            </Link>
                        </h2>
                        <p className="font-body mb-6">{post.description}</p>
                        <Link href={`/notes/${post.slug}`} className="font-bold">
                            <MoveRight strokeWidth={1} size={24} className="inline-block" />
                        </Link>
                        {/* <p className="post-date">{post.date}</p> */}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SnippetTable;