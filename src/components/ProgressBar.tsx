'use client';
 import { useScrollProgress } from "@/app/hooks/UseScrollProgress";

 export const sections = [
    { position: 0.1, path: '/about' },
    { position: 0.1, path: '/' },
    { position: 2, path: '/skills' },
    { position: 3, path: '/projects' },
    { position: 4, path: '/skills/courses' },
    { position: 5, path: '/examples' },
    { position: 5.9, path: '/contact' },
];

const ProgressBar = () => {
  const progress = useScrollProgress(); // Call the custom hook here
    
  return (
    <div className="flex items-center gap-x-3 whitespace-nowrap">
    <div className="flex-grow h-2 min-w-[10rem] bg-gray-700 rounded-full overflow-hidden dark:bg-neutral-700 relative">
      <div className="flex flex-col h-2 justify-center rounded-full overflow-hidden bg-gradient-to-r from-gray-200 to-blue-200 text-xs whitespace-nowrap transition duration-500 dark:bg-blue-500" style={{ width: `${progress}%` }}>
        
      </div>
    </div>
  </div>
  
  
     );
};

export default ProgressBar;