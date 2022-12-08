import classes from './Footer.module.sass';

export const Footer = () => {
    const date = new Date;
    const year = date.getFullYear();

    return (
        <footer className={classes.footer}>
            © All rights reserved {year}
        </footer>
    );
}