import path from "path";
import {
  MongoIdImplementation,
  MongooseMongoIdInterface,
} from "./Implementation";
import { Text } from "@ocopjs/fields";

const pkgDir = path.dirname(
  require.resolve("@ocopjs/fields-mongoid/package.json"),
);

export const MongoId = {
  type: "MongoId",
  implementation: MongoIdImplementation,
  views: {
    Controller: path.join(pkgDir, "dist/views/Controller"),
    Field: Text.views.Field,
    Filter: path.join(pkgDir, "dist/views/Filter"),
  },
  adapters: {
    mongoose: MongooseMongoIdInterface,
  },
  primaryKeyDefaults: {
    mongoose: {
      getConfig: () => ({ type: MongoId }),
    },
  },
};
