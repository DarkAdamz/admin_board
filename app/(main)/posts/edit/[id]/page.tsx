"use client";
import BackButton from "@/components/BackButton";
import * as Z from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import posts from "@/data/posts";
import {useToast} from "@/components/ui/use-toast";

//FORM SCHEMA
const formSchema = Z.object({
    title: Z.string().min(1, {
        message: "Title is required",
    }),
    body: Z.string().min(1, {
        message: "Body is required",
    }),
    author: Z.string().min(1, {
        message: "Author is required",
    }),
    date: Z.string().min(1, {
        message: "Date is required ",
    }),
});

interface PostEditPageProps {
    params: {
        id: string;
    };
}

const PostEditPage = ({params}: PostEditPageProps) => {
    const post = posts.find((post) => post.id === params.id);
    const form = useForm<Z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: post?.title || "",
            body: post?.body || "",
            author: post?.author || "",
            date: post?.date || "",
        },
    });

    const handleSubmit = (data: Z.infer<typeof formSchema>) => {
        toast({
            title: "Post has been updated successfully",
            description: `Updated by ${post?.author} by ${post?.date}`,
        });
    };
    const {toast} = useToast();

    {
        return (
            <div>
                <BackButton link="/posts" text="Go Back" />
                <h3 className="text-2xl mb-4">Edit Post</h3>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
                        {/* FOR TITLE */}
                        <FormField
                            control={form.control}
                            name="title"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel className="uppercase text-xs font-bold text-bold text-zinc-500 dark:text-white">
                                        Title
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white"
                                            placeholder="Enter Title"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {/* FOR THE BODY  */}
                        <FormField
                            control={form.control}
                            name="body"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel className="uppercase text-xs font-bold text-bold text-zinc-500 dark:text-white">
                                        Body
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white"
                                            placeholder="Enter Body"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {/* FOR AUTHOR */}
                        <FormField
                            control={form.control}
                            name="author"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel className="uppercase text-xs font-bold text-bold text-zinc-500 dark:text-white">
                                        Author
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white"
                                            placeholder="Enter Author"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {/* FOR DATE */}
                        <FormField
                            control={form.control}
                            name="date"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel className="uppercase text-xs font-bold text-bold text-zinc-500 dark:text-white">
                                        Date
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white"
                                            placeholder="Enter Date"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button className="w-full dark:bg-slate-800 dark:text-white">Update Post</Button>
                        <p className="text-sm text-slate-500 text-bold text-center">
                            The platform does not have a backend.
                        </p>
                    </form>
                </Form>
            </div>
        );
    }
};

export default PostEditPage;
