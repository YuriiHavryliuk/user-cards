import {FC} from 'react';
import styles from './styles.module.scss';

interface UserCardProps {
    avatarUrl: string;
    fullName: string;
    className: string;
}

export const UserCard: FC<UserCardProps> = (props) => {
    const {avatarUrl, fullName, className} = props;

    return (
        <div className={`${styles.card} ${className}`} style={{backgroundImage: `url(${avatarUrl})`}}>
            <p className={styles.fullName}>{fullName}</p>
        </div>
    );
};
