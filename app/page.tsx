import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  return (
    <main className="">
      <div className="flex flex-col lg:flex-row items-center bg-[#2B2929] dark:bg-slate-800">
        <div className="p-10 flex flex-col bg-[#2B2929] dark:bg-slate-800 text-white space-y-5">
        <h1 className="text-5xl font-bold">
        Welcome to Dropbox.<br />
        <br/>
        Sorting everything for you and your business needs. All in oneplace
        </h1>
        <p className="pb-20">
          Enhance your personal storage with Dropbox, offering a simple and 
          efficient way to upload , organize, and access files from anywhere,
          Securely store important documents and media, and experience 
          the convineince of easy file management and sharing in one centralized solution.
        </p>
        <Link href="/dashboard" className="flex bg-blue-500 p-5 w-fit cursor-pointer">
        Try it for free
        <ArrowRight className="ml-10"/>
        </Link>
        </div>
          <div className="bg-[#1E1919] dark:bg-slate-800 h-full p-10">
            <video autoPlay loop muted className="rounded-lg ">
              <source 
              src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/overview/lp-header-graphite200-1920x1080.mp4"
              type="video/mp4"
              />
              Your browser does not support the video tag. 
            </video>
          </div>
      </div>
     
      <p className="text-center font-bold text-xl pt-5">Disclaimer</p>
      <p className="text-center font-light p-2">
        This project is made only for information and educational purposes only. We 
        don't own or affiliate with Dropbox or/and any of its subsidaries in any form.
        Copyright disclaimer under section 107 of the Copyright Act 1976, allowance is 
        made for "fair use" of this project for exploring and practice purposes.
      </p>
    </main>
  );
}