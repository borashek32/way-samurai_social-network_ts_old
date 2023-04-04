import classes from "./../../content/profile/posts/Posts.module.sass";
import React from "react";


type PaginatorType = {
  currentPage: number
  onPageChanged: (p: number) => void
  totalUsersCount: number
  pageSize: number
  maxPageCount: number
}

export const Paginator: React.FC<PaginatorType> = ({
                                                     currentPage,
                                                     onPageChanged,
                                                     totalUsersCount,
                                                     pageSize,
                                                     maxPageCount
                                                   }) => {

  let pageCount: number = Math.ceil(totalUsersCount / pageSize)
  let pages: number[] = []
  for (let i = 1; i <= maxPageCount; i++) {
    pages.push(i)
  }

  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "3px"}}>
      {pages.map(p =>
        <span
          key={p}
          className={classes.page + ' ' + (currentPage === p ? classes.selectedPage : '')}
          onClick={(e) => onPageChanged(p)}
        >
          {p}
        </span>
      )}
    </div>
  )
}