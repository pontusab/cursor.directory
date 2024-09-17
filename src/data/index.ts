import { elixirRules } from "@/data/rules/elixir";
import { angularRules } from "./rules/angular";
import { astroRules } from "./rules/astro";
import { cRules } from "./rules/c";
import { dataAnalystRules } from "./rules/data-analyst";
import { deepLearningRules } from "./rules/deep-learning";
import { djangoRules } from "./rules/django";
import { dotnetRules } from "./rules/dotnet";
import { expoReactNativeRules } from "./rules/expo";
import { fastapiRules } from "./rules/fastapi";
import { fastifyRules } from "./rules/fastify";
import { flaskRules } from "./rules/flask";
import { flutterRules } from "./rules/flutter";
import { gatsbyRules } from "./rules/gastby";
import { goRules } from "./rules/go";
import { htmlAndCssRules } from "./rules/htmlandcss";
import { ionicRules } from "./rules/ionic";
import { javaRules } from "./rules/java";
import { juliaRules } from "./rules/julia";
import { laravelRules } from "./rules/laravel";
import { metaPromptRules } from "./rules/meta-prompt";
import { nestjsRules } from "./rules/nestjs";
import { nextjsRules } from "./rules/nextjs";
import { nuxtJsRules } from "./rules/nuxtjs";
import { pixiJsRules } from "./rules/pixijs";
import { pythonRules } from "./rules/python";
import { railsRules } from "./rules/rails";
import { reactNativeRules } from "./rules/react-native";
import { rustRules } from "./rules/rust";
import { solanaRules } from "./rules/solana";
import { solidityRules } from "./rules/solidity";
import { svelteRules } from "./rules/svelte";
import { svelteKitRules } from "./rules/sveltekit";
import { swiftuiRules } from "./rules/swift";
import { tauriRules } from "./rules/tauri";
import { uiuxRules } from "./rules/uiux-design";
import { unityCSharpRules } from "./rules/unity-c-sharp";
import { vueTsRules } from "./rules/vue";
import { webDevelopmentRules } from "./rules/web-development";
import { monorepoTamagui } from "./rules/monorepo-tamagui";
import { convexRules } from "./rules/convex";
import { remixRules } from "./rules/remix";


export const rules = [
  ...convexRules,
  ...astroRules,
  ...nextjsRules,
  ...swiftuiRules,
  ...laravelRules,
  ...railsRules,
  ...fastapiRules,
  ...flaskRules,
  ...djangoRules,
  ...cRules,
  ...vueTsRules,
  ...metaPromptRules,
  ...expoReactNativeRules,
  ...reactNativeRules,
  ...javaRules,
  ...juliaRules,
  ...dataAnalystRules,
  ...goRules,
  ...pythonRules,
  ...elixirRules,
  ...deepLearningRules,
  ...tauriRules,
  ...nestjsRules,
  ...unityCSharpRules,
  ...flutterRules,
  ...angularRules,
  ...dotnetRules,
  ...rustRules,
  ...svelteKitRules,
  ...gatsbyRules,
  ...solidityRules,
  ...webDevelopmentRules,
  ...solanaRules,
  ...svelteRules,
  ...htmlAndCssRules,
  ...nuxtJsRules,
  ...uiuxRules,
  ...ionicRules,
  ...fastifyRules,
  ...pixiJsRules,
  ...monorepoTamagui,
  ...remixRules
];

export function getSections() {
  const categories = Array.from(new Set(rules.flatMap((rule) => rule.tags)));

  return categories
    .map((tag) => ({
      tag,
      rules: rules.filter((rule) => rule?.tags?.includes(tag)),
    }))
    .sort((a, b) => b.rules.length - a.rules.length);
}

export function getRuleBySlug(slug: string) {
  return rules.find((rule) => rule.slug === slug);
}
