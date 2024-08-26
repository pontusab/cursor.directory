import { astroRules } from "./rules/astro";
import { cRules } from "./rules/c";
import { djangoRules } from "./rules/django";
import { fastapiRules } from "./rules/fastapi";
import { dataAnalystRules } from "./rules/data-analyst";
import { flaskRules } from "./rules/flask";
import { laravelRules } from "./rules/laravel";
import { nextjsRules } from "./rules/nextjs";
import { railsRules } from "./rules/rails";
import { swiftuiRules } from "./rules/swift";
import { vueTsRules } from "./rules/vue";
import { metaPromptRules } from "./rules/meta-prompt";
import { expoReactNativeRules } from "./rules/expo";
import { pythonRules } from "./rules/python";
import { reactNativeRules } from "./rules/react-native";
import { juliaRules } from "./rules/julia";

export const rules = [
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
  ...astroRules,
  ...metaPromptRules,
  ...expoReactNativeRules,
  ...reactNativeRules,
  ...juliaRules,
  ...dataAnalystRules,
];

export function getSections() {
  const categories = Array.from(new Set(rules.flatMap((rule) => rule.tags)));

  return categories
    .map((tag) => ({
      tag,
      rules: rules.filter((rule) => rule.tags.includes(tag)),
    }))
    .sort((a, b) => b.rules.length - a.rules.length);
}
