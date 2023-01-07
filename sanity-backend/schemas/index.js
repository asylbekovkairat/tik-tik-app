// import createSchema from "part:@sanity/base/schema-creator";
// import schemaTypes from "@sanity";
import user from "./user"
import post from "./post";
import comments from "./comments";
import postedBy from "./postedBy";

// export default createSchema({
//     name: "default",
//     types: schemaTypes.concat([
//         user, post, comments, postedBy,
//     ])
// })

export const schemaTypes = [user, post, comments, postedBy]
