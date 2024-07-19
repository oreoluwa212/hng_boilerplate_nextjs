import * as React from "react";
import { blogCard1, blogCard2, blogCard3, blogCard4, blogCard5, blogCard6 } from "../../assets/utils";
import BlogCard from "~/components/layouts/BlogCards";
import HeroSection from "~/components/layouts/HeroSection";

const Home = () => {
   const blogPosts = [
      {
         title: 'The Power of Networking: How to Build Meaningful Connections',
         date: 'Jul 12, 2024',
         readTime: '5',
         category: 'Business',
         image: blogCard1,
      },
      {
         title: 'The Global Impact of Climate Change: A Look at the Evidence',
         date: 'Jul 12, 2024',
         readTime: '5',
         category: 'World News',
         image: blogCard2,
      },
      {
         title: '5 Easy and Delicious Recipes for Busy Weeknights',
         date: 'Jul 12, 2024',
         readTime: '5',
         category: 'Food',
         image: blogCard3,
      },
      {
         title: '5 Simple Habits to Improve Your Mental Wellbeing',
         date: 'Jul 12, 2024',
         readTime: '5',
         category: 'Lifestyle',
         image: blogCard4,
      },
      {
         title: 'The Ultimate Guide to Dressing Stylishly with Fewer Clothes',
         date: 'Jul 12, 2024',
         readTime: '5',
         category: 'Fashion',
         image: blogCard5,
      },
      {
         title: 'The Future of Travel: What Will the World Look Like in 2030?',
         date: 'Jul 12, 2024',
         readTime: '5',
         category: 'World News',
         image: blogCard6,
      },
   ];

   return (
      <div className="">
         <HeroSection />
         <div className="flex flex-col container">
            <h1 className="text-3xl font-bold text-[#525252] mb-6 mt-12">Recent Blog Posts</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 container">
               {blogPosts.map((post, index) => (
                  <BlogCard
                     key={index}
                     title={post.title}
                     date={post.date}
                     readTime={post.readTime}
                     category={post.category}
                     image={post.image}
                  />
               ))}
            </div>
         </div>
         <div className="flex justify-center my-10">
            <button className="bg-[#F97316] text-white px-4 text-sm font-medium py-3 rounded-[2px]">Show More Articles</button>
         </div>
      </div>
   );
};

export default Home;
