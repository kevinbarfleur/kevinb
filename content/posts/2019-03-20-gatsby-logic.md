---
template: post
title: Gatsby Logic
slug: /posts/Gatsby Logic
draft: false
date: 2019-03-20T15:32:19.830Z
description: >-
  Fast in every way that matters.

  Gatsby is a free and open source framework based on React that helps
  developers build blazing fast websites and apps
category: WEB
tags:
  - JAVASCRIPT
---
![](/media/architecture-gatsby.webp)

There are four main ways to get started with Gatsby:

Tutorial: The tutorial is written to be as accessible as possible to people without much web development experience.
Quick start: The quick start is intended for intermediate to advanced developers who prefer to dig straight in.

Recipes: A happy medium between the tutorial and the quick start, find some quick answers for how to accomplish some specific, common tasks with Gatsby.
Choose your own adventure and peruse the various sections of the Gatsby docs:
Guides: Dive deeper into different topics around building with Gatsby, like sourcing data, deployment, and more.

Ecosystem: Check out libraries for Gatsby starters and plugins, as well as external community resources.
API Reference: Learn more about Gatsby APIs and configuration.
Releases & Migration: Find release notes and guides for migration between major versions.

Conceptual Guide: Read high-level overviews of the Gatsby approach.
Behind the Scenes: Dig into how Gatsby works under the hood.
Advanced Tutorials: Learn about topics that are too large for a doc and warrant a tutorial.
Visit the Contributing section to find guides on the Gatsby community, code of conduct, and how to get started contributing to Gatsby.

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
