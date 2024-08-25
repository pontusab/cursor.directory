import { cRules } from "./rules/c";
import { djangoRules } from "./rules/django";
import { fastapiRules } from "./rules/fastapi";
import { laravelRules } from "./rules/laravel";
import { nextjsRules } from "./rules/nextjs";
import { railsRules } from "./rules/rails";
import { swiftuiRules } from "./rules/swift";

export const rules = [
  ...nextjsRules,
  ...swiftuiRules,
  ...laravelRules,
  ...railsRules,
  ...fastapiRules,
  ...djangoRules,
  ...cRules,
];
