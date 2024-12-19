import { query, QueryCtx } from "@/convex/_generated/server";

export const getAllUsers = query({
  args: {},
  handler: async (ctx: QueryCtx) => {
    console.log("getAllUsers");
    return await ctx.db.query("users").collect();
  },
});
