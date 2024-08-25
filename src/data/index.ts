import { astroRules } from "./rules/astro";
import { cRules } from "./rules/c";
import { djangoRules } from "./rules/django";
import { fastapiRules } from "./rules/fastapi";
import { flaskRules } from "./rules/flask";
import { laravelRules } from "./rules/laravel";
import { nextjsRules } from "./rules/nextjs";
import { railsRules } from "./rules/rails";
import { swiftuiRules } from "./rules/swift";
import { vueTsRules } from "./rules/vue";

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
