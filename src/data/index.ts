import { nextjsRules } from "./rules/nextjs";
import { swiftuiRules } from "./rules/swift";
import { laravelRules } from "./rules/laravel";
import { railsRules } from "./rules/rails";
import { fastapiRules } from "./rules/fastapi";
import { djangoRules } from "./rules/django";

export const rules = [
  ...nextjsRules,
  ...swiftuiRules,
  ...laravelRules,
  ...railsRules,
  ...fastapiRules,
  ...djangoRules,
];
