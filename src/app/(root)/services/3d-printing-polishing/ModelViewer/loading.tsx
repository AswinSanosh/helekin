import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-full bg-[#030303]">
      <div className="animate-spin">
        <Image
          width={170} // reduced from 60
          height={170}
          src="/images/loading.png"
          alt="Loading"
        />
      </div>
    </div>
  );
}
