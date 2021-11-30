import styles from './Description.module.scss';
import { fullStringFormat } from '../../../../utils/stringFormat';
import Details from '../../../../common/Details/Details';

const Description = ({description}) => {
    return (
        <div className={styles.description}>
            <Details>
                {description ? fullStringFormat(description) : null}
            </Details>
        </div>
    );
}

export default Description;