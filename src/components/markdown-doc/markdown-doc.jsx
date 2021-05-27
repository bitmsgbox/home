import React from 'react'
import 'github-markdown-css'
import './markdown-doc.scss'

export default function MarkdownDoc(props) {
  const post = props.post
  return (
    <div className="markdown-body">
      <div>
        <h1 className="title">{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </div>
  )
}