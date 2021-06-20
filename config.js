import * as __SNOWPACK_ENV__ from './_snowpack/env.js';

export const sha = __SNOWPACK_ENV__.SNOWPACK_PUBLIC_GIT_SHA || "arandomsha";
export const title = __SNOWPACK_ENV__.SNOWPACK_PUBLIC_TITLE || "SVG Fun";
export const basename = __SNOWPACK_ENV__.SNOWPACK_PUBLIC_URL;
export const ghUrl = "https://github.com/johnb8005/svg_ts";
export const github = {sha: `${ghUrl}/commit/${sha}`, url: ghUrl};
