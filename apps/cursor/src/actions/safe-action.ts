import {
  DEFAULT_SERVER_ERROR_MESSAGE,
  createSafeActionClient,
} from "next-safe-action";

export const actionClient = createSafeActionClient({
  handleServerError(e: unknown) {
    if (e instanceof Error) {
      return e.message;
    }

    return DEFAULT_SERVER_ERROR_MESSAGE;
  },
});
