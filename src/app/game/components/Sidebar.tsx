import Image from 'next/image';
import { resourceImages } from '~/lib/mockData';

export default function Sidebar() {
    return (
        <div className="hidden lg:flex flex-col w-64 bg-gray-800/50 border-r border-purple-500/20">
            <div className="p-4 border-b border-purple-500/20">
                <div className="space-y-4">
                    <div className="flex items-center gap-3 font-pixel text-xs">
                        <Image src={resourceImages.crystal} alt="Crystal" width={32} height={32} />
                        <div>
                            <div className="text-purple-300">CRYSTAL</div>
                            <div>1000</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 font-pixel text-xs">
                        <Image src={resourceImages.metal} alt="Metal" width={32} height={32} />
                        <div>
                            <div className="text-purple-300">METAL</div>
                            <div>500</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 font-pixel text-xs">
                        <Image src={resourceImages.energy} alt="Energy" width={32} height={32} />
                        <div>
                            <div className="text-purple-300">ENERGY</div>
                            <div>200</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}