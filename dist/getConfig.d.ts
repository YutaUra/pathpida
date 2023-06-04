export type Config = ({
    type: 'nextjs';
    input: string | undefined;
    appDir?: {
        input: string;
    };
} | {
    type: 'nuxtjs';
    input: string;
    appDir?: undefined;
}) & {
    staticDir: string | undefined;
    output: string;
    ignorePath: string | undefined;
    trailingSlash?: boolean;
    basepath?: string;
    pageExtensions?: string[];
};
declare const _default: (enableStatic: boolean, output: string | undefined, igPath: string | undefined, dir?: string) => Promise<Config>;
export default _default;
//# sourceMappingURL=getConfig.d.ts.map