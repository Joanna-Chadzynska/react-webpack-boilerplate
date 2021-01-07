import { useCallback, useEffect, useRef, useState } from 'react';

const useOnClickOutside = () => {
    const ref = useRef(null);
    const [isOpen, setIsOpen] = useState(true);
    const escapeListener = useCallback((e) => {
        if (e.key === 'Escape') {
            setIsOpen(false);
        }
    }, []);

    const clickListener = useCallback(
        (e) => {
            if (!ref.current.contains(e.target)) {
                setIsOpen(false);
            } else {
                setIsOpen(true);
            }
        },
        [ref.current],
    );

    useEffect(() => {
        document.addEventListener('click', clickListener);
        document.addEventListener('keyup', escapeListener);
        return () => {
            document.removeEventListener('click', clickListener);
            document.removeEventListener('keyup', escapeListener);
        };
    }, []);
    return { isOpen, ref };
};

export default useOnClickOutside;
