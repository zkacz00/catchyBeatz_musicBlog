import React from 'react';
import { Link } from "gatsby";

const BlogNavigationEl = ({ title, content, navigationLink, slug }: Record<string, any>) => (
   <Link to={`/blog/${slug}`} content={content} style={{ textDecoration: 'none', color: 'white' }}>
      {title}
   </Link>
);

export default BlogNavigationEl;