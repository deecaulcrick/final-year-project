import Link from "next/link";
import { getPostMetaData } from "@/lib/mdx";
import { MoveRight } from 'lucide-react'

function PostList() {
    const postMetaData = getPostMetaData();
    const length = postMetaData.length;

    return (
        <div className="p-6 md:p-10">
            <h2 className="tracking-tighter text-4xl md:text-6xl font-medium text-heading-text-color">The Dissertation<sup className="text-theme-lime text-2xl">({length})</sup></h2>
            <div className="grid md:grid-cols-6 gap-10 mt-20">
                <div className="col-span-1 md:col-span-2">
                    <h3 className=" font-mono text-base uppercase tracking-tighter border-b-1 border-b-section-label text-section-label">/Info</h3>
                </div>

                <div className="md:col-span-4">
                    <h3 className="font-mono text-base uppercase tracking-tighter border-b-1 border-b-section-label text-section-label">/Chapters</h3>

                    {postMetaData.map((post) => (
                        <div key={post.slug} className=" border-b border-section-label py-6 gap-12">
                            <div className="md:col-span-4">
                                <h2 className="font-heading font-medium text-3xl tracking-tighter mb-4 text-heading-text-color ">
                                    <Link href={`/chapters/${post.slug}`} className="post-card-title">
                                        {post.title}
                                    </Link>
                                </h2>
                                <p className=" text-section-label font-mono uppercase text-xs">Last updated: {post.date}</p>
                            </div>
                            <div className="md:col-span-6">
                                <p className="font-body text-body-text-color mt-6 text-lg tracking-tight">{post.excerpt}</p>
                            </div>
                            <div className="md:col-span-2 flex md:justify-center items-center">
                                <Link href={`/chapters/${post.slug}`} className="font-bold">
                                    <MoveRight strokeWidth={1} size={24} className="inline-block" />
                                </Link>
                            </div>

                            {/* <p className="post-date">{post.date}</p> */}
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default PostList;