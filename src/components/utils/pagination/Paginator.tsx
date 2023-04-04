import classes from "./Paginator.module.sass";
import React, {useState} from "react";


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
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i)
  }

  const portionSize: number = 10
  const portionCount: number = Math.ceil(pageCount / portionSize)
  const [portionNumber, setPortionNumber] = useState(1)
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
  let rightPortionPageNumber = portionNumber * portionSize

  return (
    <>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "3px"}}>
        {portionNumber > 1 &&
          <button
            className={classes.backNextButton}
            onClick={() => setPortionNumber(portionNumber - 1)}
          >
            back
          </button>
        }
        {pages
          .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
          .map(p =>
              <span
                key={p}
                className={classes.page + ' ' + (currentPage === p ? classes.selectedPage : '')}
                onClick={(e) => onPageChanged(p)}
              >
        {p}
          </span>
          )}
        {portionCount > portionNumber &&
          <button
            className={classes.backNextButton}
            onClick={() => setPortionNumber(portionNumber + 1)}
          >
            next
          </button>
        }
      </div>
    </>
  )
}