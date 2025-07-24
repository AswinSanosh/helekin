import Image from "next/image";
export default function Loading() {
    return (
        <div className="flex items-center justify-center h-screen bg-black">
        <div className="animate-spin">
            <Image width={60} height={60} src="/svg/loading.svg" alt="Loading" className="h-full w-full" />
        </div>
        </div>
        
    );
    }