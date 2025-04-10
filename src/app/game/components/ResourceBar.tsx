import Image from 'next/image';
import { resourceImages } from '~/lib/mockData';

export default function ResourceBar() {
    return (
        <div className="flex justify-around items-center lg:hidden bg-gray-800/95 border-t border-purple-500/20  p-2">
            <div className="flex items-center gap-2 font-pixel text-xs">
                <Image src={resourceImages.crystal} alt="Crystal" width={16} height={16} />
                <div>
                    <div className="text-purple-300">CRYSTAL</div>
                    <div>1000</div>
                </div>
            </div>
            <div className="flex items-center gap-2 font-pixel text-xs">
                <Image src={resourceImages.metal} alt="Metal" width={16} height={16} />
                <div>
                    <div className="text-purple-300">METAL</div>
                    <div>500</div>
                </div>
            </div>
            <div className="flex items-center gap-2 font-pixel text-xs">
                <Image src={resourceImages.energy} alt="Energy" width={16} height={16} />
                <div>
                    <div className="text-purple-300">ENERGY</div>
                    <div>200</div>
                </div>
            </div>
        </div>
    );
}