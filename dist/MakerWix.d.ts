import { MakerBase, MakerOptions } from '@electron-forge/maker-base';
import { ForgePlatform } from '@electron-forge/shared-types';
import { MSICreatorOptions } from 'electron-wix-msi/lib/creator';
import { MakerWixConfig } from './Config';
export default class MakerWix extends MakerBase<MakerWixConfig> {
    name: string;
    defaultPlatforms: ForgePlatform[];
    isSupportedOnCurrentPlatform(): boolean;
    make({ dir, makeDir, targetArch, packageJSON, appName }: MakerOptions): Promise<string[]>;
}
export { MakerWix, MakerWixConfig, MSICreatorOptions };
//# sourceMappingURL=MakerWix.d.ts.map