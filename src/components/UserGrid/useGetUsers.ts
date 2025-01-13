import {useState, useEffect} from 'react';
import {useQuery} from '@tanstack/react-query';
import {getUsers, User} from "../../services/api/getUsers";
import {getRandomNumber} from '../../helpers/utils/getRandomNumber'
import {getRandomIndexes} from '../../helpers/utils/getRandomIndexes'

export const useGetUsers = (count: number) => {
    const [currentUsers, setCurrentUsers] = useState<User[] | []>([]);

    const {data: users, isLoading, isError} = useQuery({
        queryKey: ['users'],
        refetchInterval: 3000,
        refetchOnWindowFocus: false,
        queryFn: () => getUsers({count}),
    });

    useEffect(() => {
        if (!currentUsers.length && users) {
            setCurrentUsers(users);
            return;
        }
        if (users) {
            const updatedUsers = [...currentUsers];
            const replaceCount = getRandomNumber(1, 10);
            const randomIndexes = getRandomIndexes(count, replaceCount);

            randomIndexes.forEach((index, i) => {
                updatedUsers[index] = users[i % users.length];
            });

            setCurrentUsers(updatedUsers);
        }
    }, [users]);

    return { users: currentUsers, isLoading, isError };
};
