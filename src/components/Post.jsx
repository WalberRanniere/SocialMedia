import styles from './Post.module.css'

export function Post() {
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/walberRanniere.png" alt="" />
                    <div className={styles.authorInfo} >
                        <strong>Walber Ranniere</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title='11 de Maio às 09:00' dateTime="2024-05-11 08:00">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉 {'   '}<a href="#">jane.design/doctorcare</a> </p>
                <p> 
                    <a href=""> #novoprojeto </a> {' '}
                    <a href="">#nlw</a>{' '}
                    <a href="">#rocketseat</a>{' '}
                </p>
            </div>

        </article>
    )
}