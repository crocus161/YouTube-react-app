import styles from './EmbedVideo.module.scss';

const EmbedVideo = ({title, id}) => {
    return (
        <iframe
            title={title}
            allowFullScreen
            frameBorder="0"
            className={styles.video}
            src={`https://www.youtube.com/embed/${id}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
    );
}

export default EmbedVideo