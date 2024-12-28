/** @type {import('next').NextConfig} */
const { DefinePlugin } = require("webpack");

module.exports = {
  reactStrictMode: true,
  transpilePackages: [
    "@gluestack-ui/nativewind-utils",
    "@gluestack-ui/button",
    "@gluestack-ui/overlay",
    "@gluestack-ui/toast",
    "@gluestack-ui/utils",
    "@react-native/assets-registry",
    "react-native-svg",
    "nativewind",
    "react-native-css-interop",
    "react-native-web",
    "@yuvrajhere/rn-ui-lib"
  ],
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "react-native$": "react-native-web",
      "@react-native/assets-registry/registry": "react-native-web/dist/modules/AssetRegistry",
      "@react-native/assets-registry": "react-native-web/dist/modules/AssetRegistry",
      "@react-native/assets": "react-native-web/dist/modules/AssetRegistry",
    };
    config.resolve.alias["@unitools/router"] = "@unitools/router-next";
    config.resolve.alias["@unitools/image"] = "@unitools/image-next";
    config.resolve.alias["@unitools/link"] = "@unitools/link-next";
    config.resolve.extensions = [
      ".web.js",
      ".web.jsx",
      ".web.ts",
      ".web.tsx",
      ...config.resolve.extensions,
    ];

    config.plugins.push(
      new DefinePlugin({
        __DEV__: JSON.stringify(process.env.NODE_ENV !== "production"),
      })
    );

    return config;
  },
  typescript: { ignoreBuildErrors: true },
};
