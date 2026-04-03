import fs from "fs";
import path from "path";
import BlogPost from "@/components/BlogPost";
import matter from "gray-matter";
import { getPostMetaData } from "@/lib/mdx";
import TableOfContents from "@/components/TableOfContents";
import { MoveLeft } from "lucide-react";
import Link from 'next/link'


const getPostContent = (slug: string) => {
    const folder = path.join(process.cwd(), "src/content/chapters/");
    const file = path.join(folder, `${slug}.mdx`);
    const content = fs.readFileSync(file, "utf-8");
    const matterResult = matter(content);
    return matterResult;
};

export const generateStaticParams = async () => {
    const posts = getPostMetaData();
    return posts.map((post) => ({ slug: post.slug }));
};



interface SinglePostProps {
    params: Promise<{
        slug: string;
    }>;
}



const singlePost = async (props: SinglePostProps) => {
    const { slug } = await props.params;
    const postContent = getPostContent(slug);

    return (
        <div className=" max-w-full">
            <div className="max-w-full mt-20 p-6 md:p-10 ">
                <h1 className="h1 font-heading text-heading-text-color tracking-tighter text-9xl">{postContent.data.title}</h1>
                <p className="mt-20 text-lg font-mono text-section-label">{postContent.data.subheading}</p>


            </div>
            <div className="max-w-full p-6 md:p-10 md:grid md:grid-cols-6 gap-10 mt-20">
                <div className="md:col-span-2 flex flex-col w-full">
                    <h3 className=" font-mono text-base uppercase tracking-tighter border-b-1 border-b-section-label text-section-label ">/ Table of contents</h3>
                    <div className="mt-4">
                        <TableOfContents content={postContent.content} className="" />
                    </div>
                </div>

                <div className="md:col-span-4">
                    <h3 className="font-mono text-base uppercase tracking-tighter border-b-1 border-b-section-label text-section-label">/ Content</h3>
                    <div className="mt-4 lg:w-[80%]">
                        <BlogPost content={postContent.content} />
                    </div>
                </div>
            </div>

        </div>

    );
};

export default singlePost;