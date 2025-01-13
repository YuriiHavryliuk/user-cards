import {UserCard} from '../UserCard';
import {useGetUsers} from './useGetUsers';
import styles from './styles.module.scss';

export const UsersGrid = () => {
    const {users, isLoading, isError} = useGetUsers(10);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Server error</div>;
    }

    return (
        <div className={styles.grid}>
            {users.map((user, index) => (
                <UserCard
                    key={`${user.name.first} ${user.name.last}-${index}`}
                    className={`${styles[`card-${index + 1}`]}`}
                    avatarUrl={user.picture.large}
                    fullName={`${user.name.first} ${user.name.last}`}
                />
            ))}
        </div>
    );
};
