import { elixirRules } from "@/data/rules/elixir";
import { ALRules } from "./rules/al";
import { androidRules } from "./rules/android";
import { angularRules } from "./rules/angular";
import { angularIonicFirebaseFirestoreRules } from "./rules/angular-ionic-firebase-firestore";
import { astroRules } from "./rules/astro";
import { autohotkeyRules } from "./rules/autohotkey";
import { blazorRules } from "./rules/blazor";
import { bootstrapRules } from "./rules/bootstrap";
import { cRules } from "./rules/c";
import { chromeExtensionRules } from "./rules/chrome-extension";
import { convexRules } from "./rules/convex";
import { cosmwasmRules } from "./rules/cosmwasm";
import { cppRules } from "./rules/cpp";
import { dataAnalystRules } from "./rules/data-analyst";
import { deepLearningRules } from "./rules/deep-learning";
import { devopsRules } from "./rules/devops-backend";
import { djangoRules } from "./rules/django";
import { dotnetRules } from "./rules/dotnet";
import { expoReactNativeRules } from "./rules/expo";
import { fastapiRules } from "./rules/fastapi";
import { fastifyRules } from "./rules/fastify";
import { flaskRules } from "./rules/flask";
import { flutterRules } from "./rules/flutter";
import { frontEndRules } from "./rules/front-end";
import { gatsbyRules } from "./rules/gastby";
import { ghostTailwindcssRules } from "./rules/ghost-tailwindcss";
import { globalRules } from "./rules/global";
import { goRules } from "./rules/go";
import { htmlAndCssRules } from "./rules/htmlandcss";
import { htmxRules } from "./rules/htmx";
import { ionicRules } from "./rules/ionic";
import { javaRules } from "./rules/java";
import { jaxRules } from "./rules/jax";
import { juliaRules } from "./rules/julia";
import { laravelRules } from "./rules/laravel";
import { luaRules } from "./rules/lua";
import { metaPromptRules } from "./rules/meta-prompt";
import { monorepoTamagui } from "./rules/monorepo-tamagui";
import { nestjsRules } from "./rules/nestjs";
import { nextjsRules } from "./rules/nextjs";
import { nuxtJsRules } from "./rules/nuxtjs";
import { onchainkitRules } from "./rules/onchainkit";
import { pixiJsRules } from "./rules/pixijs";
import { pythonRules } from "./rules/python";
import { railsRules } from "./rules/rails";
import { reactNativeRules } from "./rules/react-native";
import { remixRules } from "./rules/remix";
import { robocorpRules } from "./rules/robocorp";
import { rustRules } from "./rules/rust";
import { salesforceRules } from "./rules/salesforce";
import { solanaRules } from "./rules/solana";
import { solidityRules } from "./rules/solidity";
import { svelteRules } from "./rules/svelte";
import { svelteKitRules } from "./rules/sveltekit";
import { swiftuiRules } from "./rules/swift";
import { tauriRules } from "./rules/tauri";
import { technicalTutorialsRules } from "./rules/technical-tutorials";
import { terraformRules } from "./rules/terraform";
import { typescriptRules } from "./rules/typescript";
import { uiuxRules } from "./rules/uiux-design";
import { unityCSharpRules } from "./rules/unity-c-sharp";
import { vivadoRules } from "./rules/vivado";
import { vueTsRules } from "./rules/vue";
import { webDevelopmentRules } from "./rules/web-development";
import { webScrapingRules } from "./rules/web-scraping";
import { wordpressRules } from "./rules/wordpress";
import { wordpressWoocommerce } from "./rules/wordpress-woocommerce";
import { servicenowRules } from "./rules/servicenow";

export interface Rule {
  title: string;
  slug: string;
  tags: string[];
  libs: string[];
  content: string;
  author?: {
    name: string;
    url: string | null;
    avatar: string | null;
  };
}

export const rules: Rule[] = [
  ...ALRules,
  ...androidRules,
  ...angularRules,
  ...astroRules,
  ...autohotkeyRules,
  ...blazorRules,
  ...cosmwasmRules,
  ...bootstrapRules,
  ...chromeExtensionRules,
  ...convexRules,
  ...cppRules,
  ...cRules,
  ...dataAnalystRules,
  ...deepLearningRules,
  ...devopsRules,
  ...djangoRules,
  ...dotnetRules,
  ...elixirRules,
  ...expoReactNativeRules,
  ...fastapiRules,
  ...fastifyRules,
  ...flaskRules,
  ...flutterRules,
  ...frontEndRules,
  ...gatsbyRules,
  ...ghostTailwindcssRules,
  ...globalRules,
  ...goRules,
  ...htmlAndCssRules,
  ...htmxRules,
  ...ionicRules,
  ...angularIonicFirebaseFirestoreRules,
  ...javaRules,
  ...jaxRules,
  ...juliaRules,
  ...laravelRules,
  ...luaRules,
  ...metaPromptRules,
  ...monorepoTamagui,
  ...nestjsRules,
  ...nextjsRules,
  ...nuxtJsRules,
  ...onchainkitRules,
  ...pixiJsRules,
  ...pythonRules,
  ...railsRules,
  ...reactNativeRules,
  ...remixRules,
  ...robocorpRules,
  ...rustRules,
  ...salesforceRules,
  ...solanaRules,
  ...solidityRules,
  ...svelteRules,
  ...svelteKitRules,
  ...swiftuiRules,
  ...tauriRules,
  ...technicalTutorialsRules,
  ...terraformRules,
  ...uiuxRules,
  ...unityCSharpRules,
  ...vivadoRules,
  ...vueTsRules,
  ...webDevelopmentRules,
  ...webScrapingRules,
  ...wordpressRules,
  ...wordpressWoocommerce,
  ...typescriptRules,
  ...servicenowRules
].map(
  (rule): Rule => ({
    ...rule,
    libs: rule.libs || [],
  }),
);

export function getSections() {
  const categories = Array.from(new Set(rules.flatMap((rule) => rule.tags)));

  return categories
    .map((tag) => ({
      tag,
      rules: rules.filter((rule) => rule.tags.includes(tag)),
    }))
    .sort((a, b) => b.rules.length - a.rules.length);
}

export function getRuleBySlug(slug: string) {
  return rules.find((rule) => rule.slug === slug);
}