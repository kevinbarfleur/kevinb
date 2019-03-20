---
title: React Component
date: '2019-15-19T22:40:32.169Z'
template: 'post'
draft: false
slug: '/posts/react-component/'
category: 'React'
tags:
  - 'Design'
  - 'Web Development'
description: 'PrismJS ships with a number of themes (previewable on the PrismJS website) that you can easily include in your Gatsby site, or you can build your own by copying and modifying an example (which is what we’ve done for gatsbyjs.org)'
---

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.

![Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi.](/media/image-2.jpg)

_Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi._

Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus

```javascript
import React from 'react'
import { Link } from 'gatsby'
import Author from './Author'
import Comments from './Comments'
import Content from './Content'
import Meta from './Meta'
import Tags from './Tags'
import styles from './Post.module.scss'

const Post = ({ post }) => {
  const { tags, title, date } = post.frontmatter

  const { html } = post
  const { tagSlugs } = post.fields

  return (
    <div className={styles['post']}>
      <Link className={styles['post__home-button']} to="/">
        All Articles
      </Link>

      <div className={styles['post__content']}>
        <Content body={html} title={title} />
      </div>

      <div className={styles['post__footer']}>
        <Meta date={date} />
        <Tags tags={tags} tagSlugs={tagSlugs} />
        <Author />
      </div>

      <div className={styles['post__comments']}>
        <Comments
          postSlug={post.fields.slug}
          postTitle={post.frontmatter.title}
        />
      </div>
    </div>
  )
}

export default Post
```
