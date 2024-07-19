import * as React from "react";
import Image, { StaticImageData } from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../ui/card";

interface BlogCardProps {
   title: string;
   date: string;
   readTime: string;
   category: string;
   image: StaticImageData;
   description: string;
}

const categoryColors: { [key: string]: string } = {
   Business: "#F97316",
   "World News": "#EAB308",
   Food: "#6DC347",
   Lifestyle: "#7F0682",
   Fashion: "#6DC347",
};

const BlogCard: React.FC<BlogCardProps> = ({ title, date, readTime, category, image, description }) => {
   const categoryColor = categoryColors[category] || "#F97316";

   return (
      <Card>
         <div className="relative">
            <Image
               src={image}
               height={288}
               width={512}
               style={{ objectFit: "contain" }}
               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
               className="object-cover rounded-t-lg"
               alt={title}
            />
            <span
               className={`absolute top-4 left-4 text-white text-xs px-4 py-1 rounded-full capitalize font-semibold tracking-wide`}
               style={{ backgroundColor: categoryColor }}
            >
               {category}
            </span>
         </div>
         <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
         </CardHeader>
         <CardContent>
            <div className="flex text-[#0A0A0A] items-center justify-between text-sm text-muted-foreground">
               <span>{date}</span>
               <span>{readTime} mins read</span>
            </div>
         </CardContent>
      </Card>
   );
};

export default BlogCard;
