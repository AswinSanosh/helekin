import Image from "next/image";
export default function Loading() {
    return (
        <div className="flex items-center justify-center h-screen bg-[#030303]">
        <div className="animate-spin h-12 w-12">
            <Image width={15} height={15} src="/svg/loading.svg" alt="Loading"/>
        </div>
        </div>
        
    );
    }