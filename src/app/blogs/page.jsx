import React from 'react';



const page = () => {

    const blogs= [
        {
          "slug": "ai-based-recommendations",
          "title": "AI-Based Recommendations",
          "description": "Implement an AI system to suggest services based on user preferences and history."
        },
        {
          "slug": "user-ratings-and-reviews",
          "title": "User Ratings and Reviews",
          "description": "Allow users to rate and review service providers to ensure quality and build trust."
        },
        {
          "slug": "enhanced-search-functionality",
          "title": "Enhanced Search Functionality",
          "description": "Improve search filters to help users find specific services more quickly."
        },
        {
          "slug": "mobile-app",
          "title": "Mobile App",
          "description": "Develop a mobile application to provide users with on-the-go access to services."
        },
        {
          "slug": "loyalty-program",
          "title": "Loyalty Program",
          "description": "Introduce a loyalty program to reward repeat customers and encourage ongoing use of the platform."
        }
      ]
      
    return (
        <div className=" p-24">
        {
            blogs.map(blog=> <div className='border-2 p-14' key={blog.slug}>
                <h1><span className='font-medium'>Title:</span> {blog.title}</h1>
                <p><span className='font-medium'> Description:</span> {blog.description}</p>
                <button className='bg-red-500 p-3'>View details</button>
            </div>)
        }
        </div>
    );
};

export default page;