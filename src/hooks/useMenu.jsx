import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useMenu = () => {
    const axiosPublic = useAxiosPublic();

    const { data: menu = [], refetch } = useQuery({
        queryKey: ['menu'],
        queryFn: async() => {
            const res = await axiosPublic.get('/dishes');
            return res.data;
        }
    })

    return [ menu, refetch ];
};

export default useMenu;