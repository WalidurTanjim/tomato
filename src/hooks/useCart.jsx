import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';
import useAuth from './useAuth';

const useCart = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();

    const { data: cart = [], refetch } = useQuery({
        queryKey: ['cart'],
        queryFn: async() => {
            const res = await axiosPublic.get(`/carts?email=${user.email}`);
            return res.data;
        }
    })

    return [ cart, refetch ];
};

export default useCart;