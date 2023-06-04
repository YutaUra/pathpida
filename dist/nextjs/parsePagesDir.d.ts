export type Slugs = string[];
export declare const createMethods: (indent: string, importName: string | undefined, slugs: Slugs, pathname: string) => string;
export declare const parsePagesDir: (input: string, output: string, ignorePath: string | undefined, pageExtensions: string[] | undefined, appDirQueryLength: number) => {
    imports: string[];
    text: string;
};
//# sourceMappingURL=parsePagesDir.d.ts.map