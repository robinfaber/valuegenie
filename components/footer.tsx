import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  DribbbleIcon,
  GithubIcon,
  TwitchIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";

const footerLinks = [
  {
    title: "Features",
    href: "#features",
  },
  {
    title: "Pricing",
    href: "#pricing",
  },
  {
    title: "FAQ",
    href: "#faq",
  },
  {
    title: "Testimonials",
    href: "#testimonials",
  },
  {
    title: "Privacy",
    href: "#privacy",
  },
];

const Footer = () => {
  return (
    <footer className="relative z-10 -mt-32 text-white">
      <div className="max-w-screen-xl mx-auto">
        <Separator className="border-blue-500/20" />
        <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
          {/* Copyright */}
          <span className="text-blue-200 text-center sm:text-start">
            &copy; {new Date().getFullYear()} ValuationGenie. All rights reserved.
          </span>

          <div className="flex items-center gap-5 text-blue-200">
            <Link href="#" target="_blank" className="hover:text-white">
              <TwitterIcon className="h-5 w-5" />
            </Link>
            <Link href="#" target="_blank" className="hover:text-white">
              <DribbbleIcon className="h-5 w-5" />
            </Link>
            <Link href="#" target="_blank" className="hover:text-white">
              <TwitchIcon className="h-5 w-5" />
            </Link>
            <Link href="#" target="_blank" className="hover:text-white">
              <GithubIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
