import styles from './EmbedVideo.module.scss';

const EmbedVideo = ({title, id}) => {
    return (
        <iframe
            className={styles.video}
            src={`https://www.youtube.com/embed/${id}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={title}
        />
    );
}

export default EmbedVideo