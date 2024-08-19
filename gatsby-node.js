const path = require("path")
const slash = require("slash")

exports.createPages = async ({graphql, actions: { createPage }, reporter}) => {

	const result = await graphql(
	   `{
	      allContentfulBlogPostEl {
	   		edges {
	     			node {
	     				id,
	     				slug,
	         	}
	   		}
	  		}
	  		allContentfulBlogNavigationEl {
            edges {
               node {
               	id,
               	slug,
               	content
               }
            }
         }
         allContentfulColumnsEl(sort: {fields: order}) {
            edges {
              	node {
              		id,
                	title,
                	backgroundImg {
                	   title,
                	   url
                	},
                	type,
                	order
              }
            }
         }
	  	}`
	)

  	if (result.errors) {
  	  reporter.panicOnBuild(`Error while running GraphQL query.`)
  	  console.log("Error found -> ", result.errors)
  	  return
  	}

  	const blogPostTemplate = path.resolve(`./src/templates/BlogPost/index.js`);
  	const blogPostsListTemplate = path.resolve(`./src/templates/BlogPostsList/index.js`);
  	const fancyBlogPostsListTemplate = path.resolve(`./src/templates/FancyBlogPostsList/index.js`);


	result.data.allContentfulBlogPostEl.edges.forEach(({ node }) => {
	   createPage({
	   	path: `/blog/${node.slug}`,
	   	component: slash(blogPostTemplate),
	   	key: node.id,
	   	context: {
	   	  pagePath: node.slug,
	   	},
	   })
	})

	result.data.allContentfulBlogNavigationEl.edges.forEach(({ node }) => {
	   createPage({
	   	path: `/blog/${node.slug}`,
	   	component: slash(blogPostsListTemplate),
	   	key: node.id,
	   	context: {
	   	  pageContent: node.content,
	   	},
	   })
	})

	result.data.allContentfulColumnsEl.edges.forEach(({ node }) => {
	   createPage({
	   	path: `/${node.type}`,
	   	component: slash(fancyBlogPostsListTemplate),
	   	key: node.id,
	   	context: {
	   	  pageContent: node.type,
	   	  backgroundImg: node.backgroundImg,
	   	  title: node.title,
	   	  order: node.order,
	   	},
	   })
	})
}