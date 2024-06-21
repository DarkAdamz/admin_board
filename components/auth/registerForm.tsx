"use client";
import * as Z from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "../ui/card";
import {Input} from "@/components/ui/input";

import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";

//FORM SCHEMA
const formSchema = Z.object({
    name: Z.string().min(1, {
        message: "Please Enter your name",
    }),
    email: Z.string().min(1, {
        message: "Please enter a valid email",
    }),
    password: Z.string().min(1, {
        message: "Password is required",
    }),
    confirmPassword: Z.string().min(1, {
        message: "Re-enter your password.",
    }),
});

const RegisterForm = () => {
    const router = useRouter();
    const form = useForm<Z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    });

    const handleSubmit = (data: Z.infer<typeof formSchema>) => {
        router.push("/");
    };

    {
        return (
            <Card>
                <CardHeader>
                    <CardTitle>Register</CardTitle>
                    <CardDescription>Create an account with us</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                            {/* name */}
                            <FormField
                                control={form.control}
                                name="name"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel className="uppercase text-xs font-bold text-bold text-zinc-500 dark:text-white">
                                            Name
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white"
                                                placeholder="Enter Name"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* email */}
                            <FormField
                                control={form.control}
                                name="email"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel className="uppercase text-xs font-bold text-bold text-zinc-500 dark:text-white">
                                            Email
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white"
                                                placeholder="Enter Email"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* PASSWORD */}
                            <FormField
                                control={form.control}
                                name="password"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel className="uppercase text-xs font-bold text-bold text-zinc-500 dark:text-white">
                                            Password
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                type="password"
                                                className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white"
                                                placeholder="Enter password"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Confirm password */}
                            <FormField
                                control={form.control}
                                name="confirmPassword"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel className="uppercase text-xs font-bold text-bold text-zinc-500 dark:text-white">
                                            Confirm Password
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                type="password"
                                                className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white"
                                                placeholder="Enter confirmPassword"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button>Submit</Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        );
    }
};

export default RegisterForm;
