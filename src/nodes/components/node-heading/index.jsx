import styles from './node-heading.module.css'

export const NodeHeading = ({
    id,
    onClick
}) => {
    return (
        <div className={styles.nodeHeading}>
            <p>
                {id}
            </p>

            <button onClick={onClick} className={styles.addButton}>{'+'}</button>
        </div>
    )
}
