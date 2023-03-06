import classes from './Author.module.sass'

const PostAuthor = () => {
    return (
        <div className={classes.author}>
            <img
              className={classes.author__logo}
              src="https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=620&quality=45&dpr=2&s=none"
              alt="cat"
            />
            <p className={classes.author__name}>Nataly Z.</p>
            <p className={classes.author__date}>27.10.22</p>
        </div>
    )
}

export default PostAuthor