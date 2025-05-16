import { authTables } from "@convex-dev/auth/server";
import { defineSchema } from "convex/server";

const schema = defineSchema({
    ...authTables, // It will add some auth tables to our schema automatically
    
});

export default schema;