// import Link from "next/link";

// const Blog = () => {
//     return (
//         <>
//         <Link href="/">home</Link>
//         <h1>Blog</h1>
//         <h2><Link href="product/1">Blog1</Link></h2>
//         <h2><Link href="product/2">Blog2</Link></h2>
//         <h2><Link href="product/3">Blog3</Link></h2>
//         </>
//       );
     
// }

// export default Blog


import Blog from '@/Components/blog/Blog'
import React from 'react'

const page = () => {
  return (
    <div>
      <Blog />
    </div>
  )
}

export default page