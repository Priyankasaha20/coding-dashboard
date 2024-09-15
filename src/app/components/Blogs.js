"use client"
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

const blogPosts = [
  {
    title: "Beginner's Guide To App Development",
    image: "/images/mobile-app.png?height=200&width=200",
  },
  {
    title: "8 Things I Bought For My Home Office Setup",
    image: "/images/home-office.png?height=200&width=200",
  },
  {
    title: "Creating Your First AI Chatbot Using Python: A Step-by-Step Guide",
    image: "/images/ai-chatbot.png?height=200&width=200",
  },
  {
    title: "Web Developers share their Daily Routines for Maximum Productivity",
    image: "/images/daily-routine.png?height=200&width=200",
  },
];

const BlogCard = ({ post }) => (
  <Card className="w-72 flex-shrink-0 overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl rounded-xl mx-2">
    <div className="relative h-40 overflow-hidden">
      <img 
        src={post.image} 
        alt={post.title} 
        className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
      />
    </div>
    <CardHeader className="py-3">
      <CardTitle className="text-base font-semibold line-clamp-2">{post.title}</CardTitle>
    </CardHeader>
    <CardContent className="pb-4">
      <button className="bg-button-bg hover:bg-button-hover text-white font-bold py-1.5 px-3 rounded-full transition-colors duration-300 text-sm">
        Read More
      </button>
    </CardContent>
  </Card>
);

export default function BlogsPage() {
  return (
    <div className="bg-primary-bg text-gray-800 overflow-hidden">
      <main className="container mx-auto py-20">
        <h2 className="mb-6 text-4xl font-heading text-center py-5">LATEST ARTICLES</h2>
        <div className="relative">
          <div className="flex overflow-hidden">
            <div className="flex animate-scroll">
              {blogPosts.map((post, index) => (
                <BlogCard key={index} post={post} />
              ))}
              {blogPosts.map((post, index) => (
                <BlogCard key={`duplicate-${index}`} post={post} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 70s linear infinite;
        }
      `}</style>
    </div>
  );
}