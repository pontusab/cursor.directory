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
import { flaskRules } from "./rules/flask";
import { flutterRules } from "./rules/flutter";
import { frontEndRules } from "./rules/front-end";
import { gatsbyRules } from "./rules/gastby";
import { goRules } from "./rules/go";
import { htmlAndCssRules } from "./rules/htmlandcss";
import { javaRules } from "./rules/java";
import { juliaRules } from "./rules/julia";
import { laravelRules } from "./rules/laravel";
import { metaPromptRules } from "./rules/meta-prompt";
import { nestjsRules } from "./rules/nestjs";
import { nextjsRules } from "./rules/nextjs";
import { nuxtJsRules } from "./rules/nuxtjs";
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
import { unityCSharpRules } from "./rules/unity-c-sharp";
import { vueTsRules } from "./rules/vue";
import { webDevelopmentRules } from "./rules/web-development";
import { uiuxRules } from "./rules/uiux-design";
import { ionicRules } from "./rules/ionic";
import { fastifyRules } from "./rules/fastify";
import { pixiJsRules } from "./rules/pixijs";
import { technicalTutorialsRules } from "./rules/technical-tutorials";
import { monorepoTamagui } from "./rules/monorepo-tamagui";
import { convexRules } from "./rules/convex";
import { remixRules } from "./rules/remix";
import { salesforceRules } from "./rules/salesforce";
import { wordpressRules } from "./rules/wordpress";
import { wordpressWoocommerce } from "./rules/wordpress-woocommerce";
import { blazorRules } from "./rules/blazor";
import { htmxRules } from "./rules/htmx";
import { bootstrapRules } from "./rules/bootstrap";
import { jaxRules } from "./rules/jax";

interface Rule {
  title: string;
  slug: string;
  tags: string[];
  libs: string[];
  content: string;
  author: Author;
}

interface Author {
  name: string;
  url: string;
  avatar: string;
}

export const rules: Rule[] = [
  ...convexRules,
  ...jaxRules,
  ...astroRules,
  ...nextjsRules,
  ...swiftuiRules,
  ...laravelRules,
  ...railsRules,
  ...fastapiRules,
  ...flaskRules,
  ...frontEndRules,
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
  ...technicalTutorialsRules,
  ...monorepoTamagui,
  ...remixRules,
  ...salesforceRules,
  ...wordpressRules,
  ...wordpressWoocommerce,
  ...htmxRules,
  ...bootstrapRules,
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
