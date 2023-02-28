import classes from './Author.module.sass'

const PostAuthor = () => {
    return (
        <div className={classes.author}>
            <img className={classes.author__logo} src="" alt="cat" />
            <p className={classes.author__name}>Nataly Z.</p>
            <p className={classes.author__date}>27.10.22</p>
        </div>
    )
}

export default PostAuthor