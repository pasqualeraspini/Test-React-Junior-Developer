import { useEffect } from 'react';

export const useFetching = action => {
    useEffect(() => {
        action();
     }, [action])
}