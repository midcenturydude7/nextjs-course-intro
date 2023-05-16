"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

import Header from "../components/Header";

const Contact = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Contact Page</h1>
      <div>
        <Link href="/">Home Page</Link>
        <div>
          <Link href={`/blog/asdfadfd`}>Post</Link>
        </div>
        <div>
          <button onClick={() => router.push("/")}>Click Me!</button>
        </div>
      </div>
      <Header />
    </div>
  );
};

export default Contact;
