import axios from 'axios';

export interface UserRequestParams {
    count: number;
}

export interface User {
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
    name: {
        first: string;
        last: string;
        title: string;
    };
}

export const getUsers = async ({count = 10}: UserRequestParams): Promise<User[]> => {
    try {
        const response = await axios.get(`https://randomuser.me/api?results=${count}&inc=picture,name,login`);

        return response.data?.results ?? [];
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
};
