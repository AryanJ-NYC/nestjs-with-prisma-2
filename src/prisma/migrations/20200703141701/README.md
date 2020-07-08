# Migration `20200703141701`

This migration has been generated at 7/3/2020, 2:17:01 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;

CREATE TABLE "quaint"."Movie" (
"director" TEXT NOT NULL  ,"id" INTEGER NOT NULL  PRIMARY KEY AUTOINCREMENT,"movieName" TEXT NOT NULL  ,"yearReleased" INTEGER NOT NULL  )

PRAGMA "quaint".foreign_key_check;

PRAGMA foreign_keys=ON;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200703141701
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,18 @@
+// This is your Prisma schema file,
+// learn more about it in the docs: https://pris.ly/d/prisma-schema
+
+datasource db {
+  provider = "sqlite"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model Movie {
+  id           Int    @default(autoincrement()) @id
+  director     String
+  movieName    String
+  yearReleased Int
+}
```


