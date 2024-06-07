'use client'

import { usePathname } from 'next/navigation';
import { MutableRefObject, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

export const ScrollNavigator = () => {
    const links = [
        { position: 0, path: '/' },
        { position: 1, path: '/skills' },
        { position: 2, path: '/projects' },
        { position: 3, path: '/skills/courses' },
        { position: 4, path: '/examples' },
        { position: 5, path: '/contact' },
    ];
    
    const router = useRouter();
    const pathname = usePathname();

    const findSectionPosition = (pathname: string | null) => {
        const link = links.find(link => link.path === pathname);
        return link ? link.position : 0; // Jeśli link nie został znaleziony, zwróć 0
    };

    

// Użyj typu NodeJS.Timeout dla moveTimeoutRef
const moveTimeoutRef: MutableRefObject<NodeJS.Timeout | null> = useRef(null);

    function moveToSection(direction: number) {
        // Anuluj poprzednie opóźnienie, jeśli istnieje
        if (moveTimeoutRef.current) {
            clearTimeout(moveTimeoutRef.current);
        }

        // Ustaw opóźnienie na 100ms (0.1 sekundy)
        moveTimeoutRef.current = setTimeout(() => {
            const currentSectionPosition = findSectionPosition(pathname);
            const newPosition = currentSectionPosition + direction;
            const maxPosition = links.length - 1;

            // Ustawienie nowej pozycji na ostatnią sekcję, jeśli nowa pozycja wykracza poza granice
            const newSectionPosition = Math.max(0, Math.min(newPosition, maxPosition));

            // Przejście do nowej sekcji
            const link = links.find(link => link.position === newSectionPosition);
            if (link) {
                router.push(link.path);
            }
        }, 100); // 100 milisekund (0.1 sekundy)
    }

    useEffect(() => {
        const handleWheelScroll = (event: any) => {
            if (event.deltaY > 0) {
                // Przewinięcie w dół
                moveToSection(1);
            } else if (event.deltaY < 0) {
                // Przewinięcie w górę
                moveToSection(-1);
            }
        };

        // Dodanie nasłuchiwania zdarzeń kiedy komponent jest zamontowany
        window.addEventListener('wheel', handleWheelScroll);
        
        // Clean up the event listener when the component unmounts
        return () => {
          window.removeEventListener('wheel', handleWheelScroll);
          // Anulowanie poprzedniego timeoutu
          if (moveTimeoutRef.current) {
              clearTimeout(moveTimeoutRef.current);
          }
        };
    }, [pathname]);

    return null;
};

export default ScrollNavigator;
