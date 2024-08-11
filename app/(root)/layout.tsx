import LeftSidebar from "@/components/leftSidebar";
import RightSidebar from "@/components/rightSidebar";
import Image from "next/image";


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>

            <main className="relative flex ">
                <LeftSidebar />
                <section className="
                min-h-screen flex flex-1 px-4 sm:p-12">
                    <div className="mx-auto flex w-full max-w-5xl
                    flex-col max-sm:px-4">
                        <div className="flex h-16 items-center justify-between md:hidden">
                            <Image src={"/icons/logo.svg"} width={30} height={30} alt="logo" />
                            Mobile Nav
                        </div>
                        <div>
                            
                            {children}

                        </div>
                    </div>
                </section>
                <RightSidebar />
            </main>
        </div>
    );
}
