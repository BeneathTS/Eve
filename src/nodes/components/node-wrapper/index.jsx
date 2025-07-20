import {clsx} from 'clsx'

import styles from './node-wrapper.module.css'

export const NodeWrapper = ({
    children,
    className,
    ...rest
}) => {
    return (
        <div className={clsx(styles.wrapper, className)} {...rest}>
            {children}
        </div>
    )
}
