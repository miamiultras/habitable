"use client";
import { useState } from "react";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function TopBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();

    const handleLogout = () => {
        router.push('/');
    };

    return (
        <header className="bg-gray-800/95 px-4 py-3 flex items-center justify-between border-b border-purple-500/20">
            <Link href="/game" className="font-pixel text-sm text-purple-300 hover:text-purple-400">
                HABITABLE
            </Link>

            <div className="flex items-center gap-4">
                <div className="hidden lg:flex items-center gap-4">
                    <Link 
                        href="/profile" 
                        className="font-pixel text-xs text-purple-300 hover:text-purple-400"
                    >
                        MY ACCOUNT
                    </Link>
                    <button 
                        onClick={handleLogout}
                        className="font-pixel text-xs text-purple-300 hover:text-purple-400"
                    >
                        LOGOUT
                    </button>
                </div>
                <button 
                    className="lg:hidden font-pixel text-xs text-purple-300 hover:text-purple-400"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    MENU
                </button>
            </div>

            {isMenuOpen && (
                <div className="lg:hidden fixed top-12 right-4 bg-gray-800 border border-purple-500/20 rounded shadow-lg z-50">
                    <div className="flex flex-col p-2">
                        <Link 
                            href="/profile"
                            className="font-pixel text-xs text-purple-300 hover:text-purple-400 p-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            MY ACCOUNT
                        </Link>
                        <button 
                            onClick={() => {
                                setIsMenuOpen(false);
                                handleLogout();
                            }}
                            className="font-pixel text-xs text-purple-300 hover:text-purple-400 p-2 text-left"
                        >
                            LOGOUT
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}