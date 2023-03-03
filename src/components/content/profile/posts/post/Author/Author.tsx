import classes from './Author.module.sass'

const PostAuthor = () => {
    return (
        <div className={classes.author}>
            <img className={classes.author__logo} src="https://gamerwall.pro/uploads/posts/2022-06/1655668285_2-gamerwall-pro-p-koti-na-more-priroda-krasivo-foto-3.jpg" alt="cat" />
            <p className={classes.author__name}>Nataly Z.</p>
            <p className={classes.author__date}>27.10.22</p>
        </div>
    )
}

export default PostAuthor