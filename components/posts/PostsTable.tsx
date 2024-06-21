import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableCaption} from "../ui/table";
import Link from "next/link";
import {Post} from "@/types/posts";
import posts from "@/data/posts";

interface PostTableProps {
    limit?: number;
    title?: string;
}

const PostsTable = ({limit, title}: PostTableProps) => {
    //TO SORT POST
    const sortedPost: Post[] = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    //TO FILTER THE POST
    const filteredPost = limit ? sortedPost.slice(0, limit) : sortedPost;

    return (
        <div className="mt-10 md:w-full">
            <h3 className="text-2xl mb-4 font-semibold">{title ? title : "Post"}</h3>
            <Table>
                <TableCaption>A list of recent Post</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead className="hidden md:table-cell">Author</TableHead>
                        <TableHead className="hidden md:table-cell text-right">Date</TableHead>
                        <TableHead>View</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filteredPost.map((post) => (
                        <TableRow key={post.id}>
                            <TableCell>{post.title}</TableCell>
                            <TableCell className="hidden md:table-cell">{post.author}</TableCell>
                            <TableCell className="hidden md:table-cell text-right">{post.date}</TableCell>
                            <TableCell>
                                <Link href={`/posts/edit/${post.id}`}>
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded text-xs">
                                        Edit
                                    </button>
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default PostsTable;
