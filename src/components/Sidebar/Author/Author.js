import React from 'react'
import { withPrefix, Link } from 'gatsby'
import styles from './Author.module.scss'

// const Author = ({ author, isIndex }) => (
const Author = ({ author }) => (
  <div className={styles['author']}>
    <Link to="/">
      <img
        src={withPrefix(author.photo)}
        className={styles['author__photo']}
        width="75"
        height="75"
        alt={author.name}
      />
    </Link>

    {/* { isIndex ? (
      <h1 className={styles['author__title']}>
        <Link className={styles['author__title-link']} to="/">{author.name}</Link>
      </h1>
    ) : (
      <h2 className={styles['author__title']}>
        <Link className={styles['author__title-link']} to="/">{author.name}</Link>
      </h2>
    )} */}
    <p className={styles['author__subtitle']}>{author.bio}</p>
    <a href="https://www.youtube.com/channel/UCmtN3y7NEwAipeA-4YTiySQ?view_as=subscriber">
      youtube/kevinb
    </a>
  </div>
)

export default Author
