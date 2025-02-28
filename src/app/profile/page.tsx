import Image from 'next/image';
import Link from 'next/link';

const mockUserData = {
    username: "Commander_X",
    email: "commander@space.com",
    joinDate: "2024-01-15",
    coloniesCount: 4,
    totalBuildings: 12,
    rank: "Space Admiral",
    avatar: "/images/astronaut.webp"
};

export default function ProfilePage() {
    return (
        <div className="min-h-screen bg-gray-900 text-white p-4">
            <div className="max-w-2xl mx-auto">
                <Link 
                    href="/game" 
                    className="inline-block mb-6 font-pixel text-xs text-purple-300 hover:text-purple-400"
                >
                    ← BACK TO GAME
                </Link>
                
                <div className="space-y-6">
                    <div className="flex items-start gap-6 bg-gray-800/50 p-6 rounded-lg border border-purple-500/20">
                        <div className="relative w-32 h-32">
                            <Image
                                src={mockUserData.avatar}
                                alt="Profile Avatar"
                                fill
                                className="object-cover rounded-lg border-2 border-purple-500/50"
                            />
                        </div>
                        <div className="flex-1">
                            <h1 className="font-pixel text-xl text-purple-300 mb-2">{mockUserData.username}</h1>
                            <div className="space-y-1 font-pixel text-xs">
                                <p className="text-gray-400">RANK: <span className="text-purple-300">{mockUserData.rank}</span></p>
                                <p className="text-gray-400">COLONIES: <span className="text-purple-300">{mockUserData.coloniesCount}</span></p>
                                <p className="text-gray-400">BUILDINGS: <span className="text-purple-300">{mockUserData.totalBuildings}</span></p>
                                <p className="text-gray-400">JOINED: <span className="text-purple-300">{mockUserData.joinDate}</span></p>
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="bg-gray-800/50 p-6 rounded-lg border border-purple-500/20">
                            <h2 className="font-pixel text-sm text-purple-300 mb-4">ACCOUNT SETTINGS</h2>
                            <form className="space-y-4">
                                <div>
                                    <label className="block font-pixel text-xs text-gray-400 mb-1">EMAIL</label>
                                    <input 
                                        type="email" 
                                        defaultValue={mockUserData.email}
                                        className="w-full bg-gray-900/50 border border-purple-500/20 rounded px-3 py-2 font-pixel text-sm"
                                    />
                                </div>
                                <button className="w-full bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 font-pixel text-xs py-2 rounded">
                                    UPDATE EMAIL
                                </button>
                            </form>
                        </div>

                        <div className="bg-gray-800/50 p-6 rounded-lg border border-purple-500/20">
                            <h2 className="font-pixel text-sm text-purple-300 mb-4">CHANGE PASSWORD</h2>
                            <form className="space-y-4">
                                <div>
                                    <label className="block font-pixel text-xs text-gray-400 mb-1">CURRENT PASSWORD</label>
                                    <input 
                                        type="password" 
                                        className="w-full bg-gray-900/50 border border-purple-500/20 rounded px-3 py-2 font-pixel text-xs"
                                    />
                                </div>
                                <div>
                                    <label className="block font-pixel text-xs text-gray-400 mb-1">NEW PASSWORD</label>
                                    <input 
                                        type="password" 
                                        className="w-full bg-gray-900/50 border border-purple-500/20 rounded px-3 py-2 font-pixel text-xs"
                                    />
                                </div>
                                <button className="w-full bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 font-pixel text-xs py-2 rounded">
                                    UPDATE PASSWORD
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
