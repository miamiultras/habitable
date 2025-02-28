import TopBar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import ResourceBar from "./components/ResourceBar";

export default function GameLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="fixed inset-0 flex">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <TopBar />
                <main className="flex-1 overflow-y-auto pb-16 lg:pb-0">
                    {children}
                </main>
                <ResourceBar />
            </div>
        </div>
    );
}