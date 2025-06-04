"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MakerWix = void 0;
const node_path_1 = __importDefault(require("node:path"));
const maker_base_1 = require("@electron-forge/maker-base");
const chalk_1 = __importDefault(require("chalk"));
const creator_1 = require("electron-wix-msi/lib/creator");
const log_symbols_1 = __importDefault(require("log-symbols"));
const semver_1 = __importDefault(require("semver"));
const author_name_1 = __importDefault(require("./util/author-name"));
class MakerWix extends maker_base_1.MakerBase {
    constructor() {
        super(...arguments);
        this.name = 'wix';
        this.defaultPlatforms = ['win32'];
    }
    isSupportedOnCurrentPlatform() {
        return process.platform === 'win32';
    }
    async make({ dir, makeDir, targetArch, packageJSON, appName }) {
        const outPath = node_path_1.default.resolve(makeDir, `wix/${targetArch}`);
        await this.ensureDirectory(outPath);
        const { version } = packageJSON;
        const parsed = semver_1.default.parse(version);
        if ((Array.isArray(parsed?.prerelease) && parsed.prerelease.length > 0) || (Array.isArray(parsed?.build) && parsed.build.length > 0)) {
            console.warn(log_symbols_1.default.warning, chalk_1.default.yellow('WARNING: MSI packages follow Windows version format "major.minor.build.revision".\n' +
                `The provided semantic version "${version}" will be transformed to Windows version format. Prerelease component will not be retained.`));
        }
        const creator = new creator_1.MSICreator({
            description: packageJSON.description,
            name: appName,
            version,
            manufacturer: (0, author_name_1.default)(packageJSON.author),
            exe: `${appName}.exe`,
            ...this.config,
            appDirectory: dir,
            outputDirectory: outPath,
        });
        if (this.config.beforeCreate) {
            await Promise.resolve(this.config.beforeCreate(creator));
        }
        if (this.config.afterPreCreate) {
            await creator.preCreate();
            await Promise.resolve(this.config.afterPreCreate(creator));
        }
        const binaries = await creator.create();
        if (this.config.afterCreate) {
            await Promise.resolve(this.config.afterCreate(binaries));
        }
        const compile = await creator.compile();
        if (this.config.afterCompile) {
            await Promise.resolve(this.config.afterCompile(compile));
        }
        return [compile.msiFile];
    }
}
exports.default = MakerWix;
exports.MakerWix = MakerWix;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFrZXJXaXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvTWFrZXJXaXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsMERBQTZCO0FBRTdCLDJEQUFxRTtBQUVyRSxrREFBMEI7QUFDMUIsMERBQTZFO0FBQzdFLDhEQUFxQztBQUNyQyxvREFBNEI7QUFHNUIscUVBQW1EO0FBRW5ELE1BQXFCLFFBQVMsU0FBUSxzQkFBeUI7SUFBL0Q7O1FBQ0UsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUViLHFCQUFnQixHQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBbURoRCxDQUFDO0lBakRDLDRCQUE0QjtRQUMxQixPQUFPLE9BQU8sQ0FBQyxRQUFRLEtBQUssT0FBTyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBZ0I7UUFDekUsTUFBTSxPQUFPLEdBQUcsbUJBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sVUFBVSxFQUFFLENBQUMsQ0FBQztRQUMzRCxNQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFcEMsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLFdBQVcsQ0FBQztRQUNoQyxNQUFNLE1BQU0sR0FBRyxnQkFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ3JJLE9BQU8sQ0FBQyxJQUFJLENBQ1YscUJBQVUsQ0FBQyxPQUFPLEVBQ2xCLGVBQUssQ0FBQyxNQUFNLENBQ1YscUZBQXFGO2dCQUNuRixrQ0FBa0MsT0FBTyw2RkFBNkYsQ0FDekksQ0FDRixDQUFDO1FBQ0osQ0FBQztRQUVELE1BQU0sT0FBTyxHQUFHLElBQUksb0JBQVUsQ0FBQztZQUM3QixXQUFXLEVBQUUsV0FBVyxDQUFDLFdBQVc7WUFDcEMsSUFBSSxFQUFFLE9BQU87WUFDYixPQUFPO1lBQ1AsWUFBWSxFQUFFLElBQUEscUJBQWlCLEVBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztZQUNuRCxHQUFHLEVBQUUsR0FBRyxPQUFPLE1BQU07WUFDckIsR0FBRyxJQUFJLENBQUMsTUFBTTtZQUNkLFlBQVksRUFBRSxHQUFHO1lBQ2pCLGVBQWUsRUFBRSxPQUFPO1NBQ3pCLENBQUMsQ0FBQztRQUVILElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUM3QixNQUFNLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUMzRCxDQUFDO1FBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQy9CLE1BQU0sT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQzFCLE1BQU0sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzdELENBQUM7UUFDRCxNQUFNLFFBQVEsR0FBRyxNQUFNLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN4QyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDNUIsTUFBTSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDM0QsQ0FBQztRQUNELE1BQU0sT0FBTyxHQUFHLE1BQU0sT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3hDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUM3QixNQUFNLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUMzRCxDQUFDO1FBRUQsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzQixDQUFDO0NBQ0Y7QUF0REQsMkJBc0RDO0FBRVEsNEJBQVEifQ==