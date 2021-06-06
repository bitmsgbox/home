import React from 'react'
import 'github-markdown-css'
import './markdown-doc.scss'
import SEO from '../seo'

export default function MarkdownDoc(props) {
  const post = props.post
  return (
    <div className="markdown-body">
      <SEO title={post.frontmatter.title} />
      <div>
        <h1 className="title">{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </div>
  )
}