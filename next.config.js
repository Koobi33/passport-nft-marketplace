module.exports = {
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    config.experiments = {
      syncWebAssembly: true,
      asyncWebAssembly: true,
      layers: true,
    };

    // generate wasm module in ".next/server" for ssr & ssg
    if (isServer) {
      config.output.webassemblyModuleFilename =
        "./../static/wasm/[modulehash].wasm";
    } else {
      config.output.webassemblyModuleFilename = "static/wasm/[modulehash].wasm";
    }

    config.optimization.moduleIds = "named";

    return config;
  },
};
