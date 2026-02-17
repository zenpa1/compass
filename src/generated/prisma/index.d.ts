
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model assignment
 * 
 */
export type assignment = $Result.DefaultSelection<Prisma.$assignmentPayload>
/**
 * Model project
 * 
 */
export type project = $Result.DefaultSelection<Prisma.$projectPayload>
/**
 * Model tag
 * 
 */
export type tag = $Result.DefaultSelection<Prisma.$tagPayload>
/**
 * Model task
 * 
 */
export type task = $Result.DefaultSelection<Prisma.$taskPayload>
/**
 * Model tasktag
 * 
 */
export type tasktag = $Result.DefaultSelection<Prisma.$tasktagPayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model userprofile
 * 
 */
export type userprofile = $Result.DefaultSelection<Prisma.$userprofilePayload>
/**
 * Model work
 * 
 */
export type work = $Result.DefaultSelection<Prisma.$workPayload>
/**
 * Model workapplication
 * 
 */
export type workapplication = $Result.DefaultSelection<Prisma.$workapplicationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const userprofile_primary_role: {
  PHOTO: 'PHOTO',
  VIDEO: 'VIDEO',
  EDITOR: 'EDITOR',
  ASSISTANT: 'ASSISTANT',
  ANY: 'ANY'
};

export type userprofile_primary_role = (typeof userprofile_primary_role)[keyof typeof userprofile_primary_role]


export const userprofile_secondary_role: {
  PHOTO: 'PHOTO',
  VIDEO: 'VIDEO',
  EDITOR: 'EDITOR',
  ASSISTANT: 'ASSISTANT',
  ANY: 'ANY'
};

export type userprofile_secondary_role = (typeof userprofile_secondary_role)[keyof typeof userprofile_secondary_role]


export const work_role_category: {
  PHOTO: 'PHOTO',
  VIDEO: 'VIDEO',
  EDITOR: 'EDITOR',
  ASSISTANT: 'ASSISTANT',
  ANY: 'ANY'
};

export type work_role_category = (typeof work_role_category)[keyof typeof work_role_category]


export const workapplication_application_status: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type workapplication_application_status = (typeof workapplication_application_status)[keyof typeof workapplication_application_status]


export const assignment_assignment_status: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED'
};

export type assignment_assignment_status = (typeof assignment_assignment_status)[keyof typeof assignment_assignment_status]


export const user_user_type: {
  OWNER: 'OWNER',
  EMPLOYEE: 'EMPLOYEE'
};

export type user_user_type = (typeof user_user_type)[keyof typeof user_user_type]


export const project_project_status: {
  ACTIVE: 'ACTIVE',
  ARCHIVED: 'ARCHIVED'
};

export type project_project_status = (typeof project_project_status)[keyof typeof project_project_status]


export const work_work_status: {
  PENDING: 'PENDING',
  OPEN: 'OPEN',
  ASSIGNED: 'ASSIGNED',
  REVIEW: 'REVIEW',
  COMPLETED: 'COMPLETED'
};

export type work_work_status = (typeof work_work_status)[keyof typeof work_work_status]

}

export type userprofile_primary_role = $Enums.userprofile_primary_role

export const userprofile_primary_role: typeof $Enums.userprofile_primary_role

export type userprofile_secondary_role = $Enums.userprofile_secondary_role

export const userprofile_secondary_role: typeof $Enums.userprofile_secondary_role

export type work_role_category = $Enums.work_role_category

export const work_role_category: typeof $Enums.work_role_category

export type workapplication_application_status = $Enums.workapplication_application_status

export const workapplication_application_status: typeof $Enums.workapplication_application_status

export type assignment_assignment_status = $Enums.assignment_assignment_status

export const assignment_assignment_status: typeof $Enums.assignment_assignment_status

export type user_user_type = $Enums.user_user_type

export const user_user_type: typeof $Enums.user_user_type

export type project_project_status = $Enums.project_project_status

export const project_project_status: typeof $Enums.project_project_status

export type work_work_status = $Enums.work_work_status

export const work_work_status: typeof $Enums.work_work_status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Assignments
 * const assignments = await prisma.assignment.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Assignments
   * const assignments = await prisma.assignment.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.assignment`: Exposes CRUD operations for the **assignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assignments
    * const assignments = await prisma.assignment.findMany()
    * ```
    */
  get assignment(): Prisma.assignmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.projectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.tagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.taskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tasktag`: Exposes CRUD operations for the **tasktag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasktags
    * const tasktags = await prisma.tasktag.findMany()
    * ```
    */
  get tasktag(): Prisma.tasktagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userprofile`: Exposes CRUD operations for the **userprofile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Userprofiles
    * const userprofiles = await prisma.userprofile.findMany()
    * ```
    */
  get userprofile(): Prisma.userprofileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.work`: Exposes CRUD operations for the **work** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Works
    * const works = await prisma.work.findMany()
    * ```
    */
  get work(): Prisma.workDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workapplication`: Exposes CRUD operations for the **workapplication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workapplications
    * const workapplications = await prisma.workapplication.findMany()
    * ```
    */
  get workapplication(): Prisma.workapplicationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.0
   * Query Engine version: ab56fe763f921d033a6c195e7ddeb3e255bdbb57
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    assignment: 'assignment',
    project: 'project',
    tag: 'tag',
    task: 'task',
    tasktag: 'tasktag',
    user: 'user',
    userprofile: 'userprofile',
    work: 'work',
    workapplication: 'workapplication'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "assignment" | "project" | "tag" | "task" | "tasktag" | "user" | "userprofile" | "work" | "workapplication"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      assignment: {
        payload: Prisma.$assignmentPayload<ExtArgs>
        fields: Prisma.assignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.assignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.assignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assignmentPayload>
          }
          findFirst: {
            args: Prisma.assignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.assignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assignmentPayload>
          }
          findMany: {
            args: Prisma.assignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assignmentPayload>[]
          }
          create: {
            args: Prisma.assignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assignmentPayload>
          }
          createMany: {
            args: Prisma.assignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.assignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assignmentPayload>
          }
          update: {
            args: Prisma.assignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assignmentPayload>
          }
          deleteMany: {
            args: Prisma.assignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.assignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.assignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assignmentPayload>
          }
          aggregate: {
            args: Prisma.AssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssignment>
          }
          groupBy: {
            args: Prisma.assignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.assignmentCountArgs<ExtArgs>
            result: $Utils.Optional<AssignmentCountAggregateOutputType> | number
          }
        }
      }
      project: {
        payload: Prisma.$projectPayload<ExtArgs>
        fields: Prisma.projectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.projectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.projectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          findFirst: {
            args: Prisma.projectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.projectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          findMany: {
            args: Prisma.projectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>[]
          }
          create: {
            args: Prisma.projectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          createMany: {
            args: Prisma.projectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.projectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          update: {
            args: Prisma.projectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          deleteMany: {
            args: Prisma.projectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.projectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.projectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.projectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.projectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      tag: {
        payload: Prisma.$tagPayload<ExtArgs>
        fields: Prisma.tagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagPayload>
          }
          findFirst: {
            args: Prisma.tagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagPayload>
          }
          findMany: {
            args: Prisma.tagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagPayload>[]
          }
          create: {
            args: Prisma.tagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagPayload>
          }
          createMany: {
            args: Prisma.tagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagPayload>
          }
          update: {
            args: Prisma.tagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagPayload>
          }
          deleteMany: {
            args: Prisma.tagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.tagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.tagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      task: {
        payload: Prisma.$taskPayload<ExtArgs>
        fields: Prisma.taskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.taskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.taskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>
          }
          findFirst: {
            args: Prisma.taskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.taskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>
          }
          findMany: {
            args: Prisma.taskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>[]
          }
          create: {
            args: Prisma.taskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>
          }
          createMany: {
            args: Prisma.taskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.taskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>
          }
          update: {
            args: Prisma.taskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>
          }
          deleteMany: {
            args: Prisma.taskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.taskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.taskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.taskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.taskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      tasktag: {
        payload: Prisma.$tasktagPayload<ExtArgs>
        fields: Prisma.tasktagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tasktagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasktagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tasktagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasktagPayload>
          }
          findFirst: {
            args: Prisma.tasktagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasktagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tasktagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasktagPayload>
          }
          findMany: {
            args: Prisma.tasktagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasktagPayload>[]
          }
          create: {
            args: Prisma.tasktagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasktagPayload>
          }
          createMany: {
            args: Prisma.tasktagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tasktagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasktagPayload>
          }
          update: {
            args: Prisma.tasktagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasktagPayload>
          }
          deleteMany: {
            args: Prisma.tasktagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tasktagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tasktagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasktagPayload>
          }
          aggregate: {
            args: Prisma.TasktagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTasktag>
          }
          groupBy: {
            args: Prisma.tasktagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TasktagGroupByOutputType>[]
          }
          count: {
            args: Prisma.tasktagCountArgs<ExtArgs>
            result: $Utils.Optional<TasktagCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      userprofile: {
        payload: Prisma.$userprofilePayload<ExtArgs>
        fields: Prisma.userprofileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userprofileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userprofilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userprofileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userprofilePayload>
          }
          findFirst: {
            args: Prisma.userprofileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userprofilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userprofileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userprofilePayload>
          }
          findMany: {
            args: Prisma.userprofileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userprofilePayload>[]
          }
          create: {
            args: Prisma.userprofileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userprofilePayload>
          }
          createMany: {
            args: Prisma.userprofileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.userprofileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userprofilePayload>
          }
          update: {
            args: Prisma.userprofileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userprofilePayload>
          }
          deleteMany: {
            args: Prisma.userprofileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userprofileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.userprofileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userprofilePayload>
          }
          aggregate: {
            args: Prisma.UserprofileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserprofile>
          }
          groupBy: {
            args: Prisma.userprofileGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserprofileGroupByOutputType>[]
          }
          count: {
            args: Prisma.userprofileCountArgs<ExtArgs>
            result: $Utils.Optional<UserprofileCountAggregateOutputType> | number
          }
        }
      }
      work: {
        payload: Prisma.$workPayload<ExtArgs>
        fields: Prisma.workFieldRefs
        operations: {
          findUnique: {
            args: Prisma.workFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.workFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workPayload>
          }
          findFirst: {
            args: Prisma.workFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.workFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workPayload>
          }
          findMany: {
            args: Prisma.workFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workPayload>[]
          }
          create: {
            args: Prisma.workCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workPayload>
          }
          createMany: {
            args: Prisma.workCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.workDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workPayload>
          }
          update: {
            args: Prisma.workUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workPayload>
          }
          deleteMany: {
            args: Prisma.workDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.workUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.workUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workPayload>
          }
          aggregate: {
            args: Prisma.WorkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWork>
          }
          groupBy: {
            args: Prisma.workGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkGroupByOutputType>[]
          }
          count: {
            args: Prisma.workCountArgs<ExtArgs>
            result: $Utils.Optional<WorkCountAggregateOutputType> | number
          }
        }
      }
      workapplication: {
        payload: Prisma.$workapplicationPayload<ExtArgs>
        fields: Prisma.workapplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.workapplicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workapplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.workapplicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workapplicationPayload>
          }
          findFirst: {
            args: Prisma.workapplicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workapplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.workapplicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workapplicationPayload>
          }
          findMany: {
            args: Prisma.workapplicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workapplicationPayload>[]
          }
          create: {
            args: Prisma.workapplicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workapplicationPayload>
          }
          createMany: {
            args: Prisma.workapplicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.workapplicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workapplicationPayload>
          }
          update: {
            args: Prisma.workapplicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workapplicationPayload>
          }
          deleteMany: {
            args: Prisma.workapplicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.workapplicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.workapplicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workapplicationPayload>
          }
          aggregate: {
            args: Prisma.WorkapplicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkapplication>
          }
          groupBy: {
            args: Prisma.workapplicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkapplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.workapplicationCountArgs<ExtArgs>
            result: $Utils.Optional<WorkapplicationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    assignment?: assignmentOmit
    project?: projectOmit
    tag?: tagOmit
    task?: taskOmit
    tasktag?: tasktagOmit
    user?: userOmit
    userprofile?: userprofileOmit
    work?: workOmit
    workapplication?: workapplicationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    work: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    work?: boolean | ProjectCountOutputTypeCountWorkArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountWorkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    tasktag: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasktag?: boolean | TagCountOutputTypeCountTasktagArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountTasktagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tasktagWhereInput
  }


  /**
   * Count Type TaskCountOutputType
   */

  export type TaskCountOutputType = {
    tasktag: number
  }

  export type TaskCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasktag?: boolean | TaskCountOutputTypeCountTasktagArgs
  }

  // Custom InputTypes
  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCountOutputType
     */
    select?: TaskCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountTasktagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tasktagWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    assignment: number
    task: number
    workapplication: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | UserCountOutputTypeCountAssignmentArgs
    task?: boolean | UserCountOutputTypeCountTaskArgs
    workapplication?: boolean | UserCountOutputTypeCountWorkapplicationArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssignmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: assignmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: taskWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWorkapplicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workapplicationWhereInput
  }


  /**
   * Count Type WorkCountOutputType
   */

  export type WorkCountOutputType = {
    assignment: number
    workapplication: number
  }

  export type WorkCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | WorkCountOutputTypeCountAssignmentArgs
    workapplication?: boolean | WorkCountOutputTypeCountWorkapplicationArgs
  }

  // Custom InputTypes
  /**
   * WorkCountOutputType without action
   */
  export type WorkCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkCountOutputType
     */
    select?: WorkCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkCountOutputType without action
   */
  export type WorkCountOutputTypeCountAssignmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: assignmentWhereInput
  }

  /**
   * WorkCountOutputType without action
   */
  export type WorkCountOutputTypeCountWorkapplicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workapplicationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model assignment
   */

  export type AggregateAssignment = {
    _count: AssignmentCountAggregateOutputType | null
    _avg: AssignmentAvgAggregateOutputType | null
    _sum: AssignmentSumAggregateOutputType | null
    _min: AssignmentMinAggregateOutputType | null
    _max: AssignmentMaxAggregateOutputType | null
  }

  export type AssignmentAvgAggregateOutputType = {
    assignment_id: number | null
    work_id: number | null
    user_id: number | null
  }

  export type AssignmentSumAggregateOutputType = {
    assignment_id: number | null
    work_id: number | null
    user_id: number | null
  }

  export type AssignmentMinAggregateOutputType = {
    assignment_id: number | null
    work_id: number | null
    user_id: number | null
    outsider_name: string | null
    assignment_status: $Enums.assignment_assignment_status | null
    withdrawal_reason: string | null
  }

  export type AssignmentMaxAggregateOutputType = {
    assignment_id: number | null
    work_id: number | null
    user_id: number | null
    outsider_name: string | null
    assignment_status: $Enums.assignment_assignment_status | null
    withdrawal_reason: string | null
  }

  export type AssignmentCountAggregateOutputType = {
    assignment_id: number
    work_id: number
    user_id: number
    outsider_name: number
    assignment_status: number
    withdrawal_reason: number
    _all: number
  }


  export type AssignmentAvgAggregateInputType = {
    assignment_id?: true
    work_id?: true
    user_id?: true
  }

  export type AssignmentSumAggregateInputType = {
    assignment_id?: true
    work_id?: true
    user_id?: true
  }

  export type AssignmentMinAggregateInputType = {
    assignment_id?: true
    work_id?: true
    user_id?: true
    outsider_name?: true
    assignment_status?: true
    withdrawal_reason?: true
  }

  export type AssignmentMaxAggregateInputType = {
    assignment_id?: true
    work_id?: true
    user_id?: true
    outsider_name?: true
    assignment_status?: true
    withdrawal_reason?: true
  }

  export type AssignmentCountAggregateInputType = {
    assignment_id?: true
    work_id?: true
    user_id?: true
    outsider_name?: true
    assignment_status?: true
    withdrawal_reason?: true
    _all?: true
  }

  export type AssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which assignment to aggregate.
     */
    where?: assignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of assignments to fetch.
     */
    orderBy?: assignmentOrderByWithRelationInput | assignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: assignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned assignments
    **/
    _count?: true | AssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssignmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssignmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssignmentMaxAggregateInputType
  }

  export type GetAssignmentAggregateType<T extends AssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssignment[P]>
      : GetScalarType<T[P], AggregateAssignment[P]>
  }




  export type assignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: assignmentWhereInput
    orderBy?: assignmentOrderByWithAggregationInput | assignmentOrderByWithAggregationInput[]
    by: AssignmentScalarFieldEnum[] | AssignmentScalarFieldEnum
    having?: assignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssignmentCountAggregateInputType | true
    _avg?: AssignmentAvgAggregateInputType
    _sum?: AssignmentSumAggregateInputType
    _min?: AssignmentMinAggregateInputType
    _max?: AssignmentMaxAggregateInputType
  }

  export type AssignmentGroupByOutputType = {
    assignment_id: number
    work_id: number
    user_id: number | null
    outsider_name: string | null
    assignment_status: $Enums.assignment_assignment_status
    withdrawal_reason: string | null
    _count: AssignmentCountAggregateOutputType | null
    _avg: AssignmentAvgAggregateOutputType | null
    _sum: AssignmentSumAggregateOutputType | null
    _min: AssignmentMinAggregateOutputType | null
    _max: AssignmentMaxAggregateOutputType | null
  }

  type GetAssignmentGroupByPayload<T extends assignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], AssignmentGroupByOutputType[P]>
        }
      >
    >


  export type assignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    assignment_id?: boolean
    work_id?: boolean
    user_id?: boolean
    outsider_name?: boolean
    assignment_status?: boolean
    withdrawal_reason?: boolean
    user?: boolean | assignment$userArgs<ExtArgs>
    work?: boolean | workDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignment"]>



  export type assignmentSelectScalar = {
    assignment_id?: boolean
    work_id?: boolean
    user_id?: boolean
    outsider_name?: boolean
    assignment_status?: boolean
    withdrawal_reason?: boolean
  }

  export type assignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"assignment_id" | "work_id" | "user_id" | "outsider_name" | "assignment_status" | "withdrawal_reason", ExtArgs["result"]["assignment"]>
  export type assignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | assignment$userArgs<ExtArgs>
    work?: boolean | workDefaultArgs<ExtArgs>
  }

  export type $assignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "assignment"
    objects: {
      user: Prisma.$userPayload<ExtArgs> | null
      work: Prisma.$workPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      assignment_id: number
      work_id: number
      user_id: number | null
      outsider_name: string | null
      assignment_status: $Enums.assignment_assignment_status
      withdrawal_reason: string | null
    }, ExtArgs["result"]["assignment"]>
    composites: {}
  }

  type assignmentGetPayload<S extends boolean | null | undefined | assignmentDefaultArgs> = $Result.GetResult<Prisma.$assignmentPayload, S>

  type assignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<assignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssignmentCountAggregateInputType | true
    }

  export interface assignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['assignment'], meta: { name: 'assignment' } }
    /**
     * Find zero or one Assignment that matches the filter.
     * @param {assignmentFindUniqueArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends assignmentFindUniqueArgs>(args: SelectSubset<T, assignmentFindUniqueArgs<ExtArgs>>): Prisma__assignmentClient<$Result.GetResult<Prisma.$assignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Assignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {assignmentFindUniqueOrThrowArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends assignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, assignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__assignmentClient<$Result.GetResult<Prisma.$assignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assignmentFindFirstArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends assignmentFindFirstArgs>(args?: SelectSubset<T, assignmentFindFirstArgs<ExtArgs>>): Prisma__assignmentClient<$Result.GetResult<Prisma.$assignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assignmentFindFirstOrThrowArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends assignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, assignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__assignmentClient<$Result.GetResult<Prisma.$assignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Assignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assignments
     * const assignments = await prisma.assignment.findMany()
     * 
     * // Get first 10 Assignments
     * const assignments = await prisma.assignment.findMany({ take: 10 })
     * 
     * // Only select the `assignment_id`
     * const assignmentWithAssignment_idOnly = await prisma.assignment.findMany({ select: { assignment_id: true } })
     * 
     */
    findMany<T extends assignmentFindManyArgs>(args?: SelectSubset<T, assignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$assignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Assignment.
     * @param {assignmentCreateArgs} args - Arguments to create a Assignment.
     * @example
     * // Create one Assignment
     * const Assignment = await prisma.assignment.create({
     *   data: {
     *     // ... data to create a Assignment
     *   }
     * })
     * 
     */
    create<T extends assignmentCreateArgs>(args: SelectSubset<T, assignmentCreateArgs<ExtArgs>>): Prisma__assignmentClient<$Result.GetResult<Prisma.$assignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Assignments.
     * @param {assignmentCreateManyArgs} args - Arguments to create many Assignments.
     * @example
     * // Create many Assignments
     * const assignment = await prisma.assignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends assignmentCreateManyArgs>(args?: SelectSubset<T, assignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Assignment.
     * @param {assignmentDeleteArgs} args - Arguments to delete one Assignment.
     * @example
     * // Delete one Assignment
     * const Assignment = await prisma.assignment.delete({
     *   where: {
     *     // ... filter to delete one Assignment
     *   }
     * })
     * 
     */
    delete<T extends assignmentDeleteArgs>(args: SelectSubset<T, assignmentDeleteArgs<ExtArgs>>): Prisma__assignmentClient<$Result.GetResult<Prisma.$assignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Assignment.
     * @param {assignmentUpdateArgs} args - Arguments to update one Assignment.
     * @example
     * // Update one Assignment
     * const assignment = await prisma.assignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends assignmentUpdateArgs>(args: SelectSubset<T, assignmentUpdateArgs<ExtArgs>>): Prisma__assignmentClient<$Result.GetResult<Prisma.$assignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Assignments.
     * @param {assignmentDeleteManyArgs} args - Arguments to filter Assignments to delete.
     * @example
     * // Delete a few Assignments
     * const { count } = await prisma.assignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends assignmentDeleteManyArgs>(args?: SelectSubset<T, assignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assignments
     * const assignment = await prisma.assignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends assignmentUpdateManyArgs>(args: SelectSubset<T, assignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Assignment.
     * @param {assignmentUpsertArgs} args - Arguments to update or create a Assignment.
     * @example
     * // Update or create a Assignment
     * const assignment = await prisma.assignment.upsert({
     *   create: {
     *     // ... data to create a Assignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Assignment we want to update
     *   }
     * })
     */
    upsert<T extends assignmentUpsertArgs>(args: SelectSubset<T, assignmentUpsertArgs<ExtArgs>>): Prisma__assignmentClient<$Result.GetResult<Prisma.$assignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Assignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assignmentCountArgs} args - Arguments to filter Assignments to count.
     * @example
     * // Count the number of Assignments
     * const count = await prisma.assignment.count({
     *   where: {
     *     // ... the filter for the Assignments we want to count
     *   }
     * })
    **/
    count<T extends assignmentCountArgs>(
      args?: Subset<T, assignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Assignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssignmentAggregateArgs>(args: Subset<T, AssignmentAggregateArgs>): Prisma.PrismaPromise<GetAssignmentAggregateType<T>>

    /**
     * Group by Assignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assignmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends assignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: assignmentGroupByArgs['orderBy'] }
        : { orderBy?: assignmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, assignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the assignment model
   */
  readonly fields: assignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for assignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__assignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends assignment$userArgs<ExtArgs> = {}>(args?: Subset<T, assignment$userArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    work<T extends workDefaultArgs<ExtArgs> = {}>(args?: Subset<T, workDefaultArgs<ExtArgs>>): Prisma__workClient<$Result.GetResult<Prisma.$workPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the assignment model
   */
  interface assignmentFieldRefs {
    readonly assignment_id: FieldRef<"assignment", 'Int'>
    readonly work_id: FieldRef<"assignment", 'Int'>
    readonly user_id: FieldRef<"assignment", 'Int'>
    readonly outsider_name: FieldRef<"assignment", 'String'>
    readonly assignment_status: FieldRef<"assignment", 'assignment_assignment_status'>
    readonly withdrawal_reason: FieldRef<"assignment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * assignment findUnique
   */
  export type assignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignment
     */
    select?: assignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assignment
     */
    omit?: assignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assignmentInclude<ExtArgs> | null
    /**
     * Filter, which assignment to fetch.
     */
    where: assignmentWhereUniqueInput
  }

  /**
   * assignment findUniqueOrThrow
   */
  export type assignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignment
     */
    select?: assignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assignment
     */
    omit?: assignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assignmentInclude<ExtArgs> | null
    /**
     * Filter, which assignment to fetch.
     */
    where: assignmentWhereUniqueInput
  }

  /**
   * assignment findFirst
   */
  export type assignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignment
     */
    select?: assignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assignment
     */
    omit?: assignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assignmentInclude<ExtArgs> | null
    /**
     * Filter, which assignment to fetch.
     */
    where?: assignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of assignments to fetch.
     */
    orderBy?: assignmentOrderByWithRelationInput | assignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for assignments.
     */
    cursor?: assignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of assignments.
     */
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * assignment findFirstOrThrow
   */
  export type assignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignment
     */
    select?: assignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assignment
     */
    omit?: assignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assignmentInclude<ExtArgs> | null
    /**
     * Filter, which assignment to fetch.
     */
    where?: assignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of assignments to fetch.
     */
    orderBy?: assignmentOrderByWithRelationInput | assignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for assignments.
     */
    cursor?: assignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of assignments.
     */
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * assignment findMany
   */
  export type assignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignment
     */
    select?: assignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assignment
     */
    omit?: assignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assignmentInclude<ExtArgs> | null
    /**
     * Filter, which assignments to fetch.
     */
    where?: assignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of assignments to fetch.
     */
    orderBy?: assignmentOrderByWithRelationInput | assignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing assignments.
     */
    cursor?: assignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` assignments.
     */
    skip?: number
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * assignment create
   */
  export type assignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignment
     */
    select?: assignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assignment
     */
    omit?: assignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a assignment.
     */
    data: XOR<assignmentCreateInput, assignmentUncheckedCreateInput>
  }

  /**
   * assignment createMany
   */
  export type assignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many assignments.
     */
    data: assignmentCreateManyInput | assignmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * assignment update
   */
  export type assignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignment
     */
    select?: assignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assignment
     */
    omit?: assignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a assignment.
     */
    data: XOR<assignmentUpdateInput, assignmentUncheckedUpdateInput>
    /**
     * Choose, which assignment to update.
     */
    where: assignmentWhereUniqueInput
  }

  /**
   * assignment updateMany
   */
  export type assignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update assignments.
     */
    data: XOR<assignmentUpdateManyMutationInput, assignmentUncheckedUpdateManyInput>
    /**
     * Filter which assignments to update
     */
    where?: assignmentWhereInput
    /**
     * Limit how many assignments to update.
     */
    limit?: number
  }

  /**
   * assignment upsert
   */
  export type assignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignment
     */
    select?: assignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assignment
     */
    omit?: assignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the assignment to update in case it exists.
     */
    where: assignmentWhereUniqueInput
    /**
     * In case the assignment found by the `where` argument doesn't exist, create a new assignment with this data.
     */
    create: XOR<assignmentCreateInput, assignmentUncheckedCreateInput>
    /**
     * In case the assignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<assignmentUpdateInput, assignmentUncheckedUpdateInput>
  }

  /**
   * assignment delete
   */
  export type assignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignment
     */
    select?: assignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assignment
     */
    omit?: assignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assignmentInclude<ExtArgs> | null
    /**
     * Filter which assignment to delete.
     */
    where: assignmentWhereUniqueInput
  }

  /**
   * assignment deleteMany
   */
  export type assignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which assignments to delete
     */
    where?: assignmentWhereInput
    /**
     * Limit how many assignments to delete.
     */
    limit?: number
  }

  /**
   * assignment.user
   */
  export type assignment$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
  }

  /**
   * assignment without action
   */
  export type assignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignment
     */
    select?: assignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assignment
     */
    omit?: assignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assignmentInclude<ExtArgs> | null
  }


  /**
   * Model project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    project_id: number | null
  }

  export type ProjectSumAggregateOutputType = {
    project_id: number | null
  }

  export type ProjectMinAggregateOutputType = {
    project_id: number | null
    project_name: string | null
    client_name: string | null
    project_location: string | null
    project_description: string | null
    project_start_date: Date | null
    project_end_date: Date | null
    project_status: $Enums.project_project_status | null
  }

  export type ProjectMaxAggregateOutputType = {
    project_id: number | null
    project_name: string | null
    client_name: string | null
    project_location: string | null
    project_description: string | null
    project_start_date: Date | null
    project_end_date: Date | null
    project_status: $Enums.project_project_status | null
  }

  export type ProjectCountAggregateOutputType = {
    project_id: number
    project_name: number
    client_name: number
    project_location: number
    project_description: number
    project_start_date: number
    project_end_date: number
    project_status: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    project_id?: true
  }

  export type ProjectSumAggregateInputType = {
    project_id?: true
  }

  export type ProjectMinAggregateInputType = {
    project_id?: true
    project_name?: true
    client_name?: true
    project_location?: true
    project_description?: true
    project_start_date?: true
    project_end_date?: true
    project_status?: true
  }

  export type ProjectMaxAggregateInputType = {
    project_id?: true
    project_name?: true
    client_name?: true
    project_location?: true
    project_description?: true
    project_start_date?: true
    project_end_date?: true
    project_status?: true
  }

  export type ProjectCountAggregateInputType = {
    project_id?: true
    project_name?: true
    client_name?: true
    project_location?: true
    project_description?: true
    project_start_date?: true
    project_end_date?: true
    project_status?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which project to aggregate.
     */
    where?: projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type projectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectWhereInput
    orderBy?: projectOrderByWithAggregationInput | projectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: projectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    project_id: number
    project_name: string
    client_name: string
    project_location: string
    project_description: string
    project_start_date: Date
    project_end_date: Date
    project_status: $Enums.project_project_status
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends projectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type projectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    project_id?: boolean
    project_name?: boolean
    client_name?: boolean
    project_location?: boolean
    project_description?: boolean
    project_start_date?: boolean
    project_end_date?: boolean
    project_status?: boolean
    work?: boolean | project$workArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>



  export type projectSelectScalar = {
    project_id?: boolean
    project_name?: boolean
    client_name?: boolean
    project_location?: boolean
    project_description?: boolean
    project_start_date?: boolean
    project_end_date?: boolean
    project_status?: boolean
  }

  export type projectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"project_id" | "project_name" | "client_name" | "project_location" | "project_description" | "project_start_date" | "project_end_date" | "project_status", ExtArgs["result"]["project"]>
  export type projectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    work?: boolean | project$workArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $projectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "project"
    objects: {
      work: Prisma.$workPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      project_id: number
      project_name: string
      client_name: string
      project_location: string
      project_description: string
      project_start_date: Date
      project_end_date: Date
      project_status: $Enums.project_project_status
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type projectGetPayload<S extends boolean | null | undefined | projectDefaultArgs> = $Result.GetResult<Prisma.$projectPayload, S>

  type projectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<projectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface projectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['project'], meta: { name: 'project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {projectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends projectFindUniqueArgs>(args: SelectSubset<T, projectFindUniqueArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {projectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends projectFindUniqueOrThrowArgs>(args: SelectSubset<T, projectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends projectFindFirstArgs>(args?: SelectSubset<T, projectFindFirstArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends projectFindFirstOrThrowArgs>(args?: SelectSubset<T, projectFindFirstOrThrowArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `project_id`
     * const projectWithProject_idOnly = await prisma.project.findMany({ select: { project_id: true } })
     * 
     */
    findMany<T extends projectFindManyArgs>(args?: SelectSubset<T, projectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {projectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends projectCreateArgs>(args: SelectSubset<T, projectCreateArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {projectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends projectCreateManyArgs>(args?: SelectSubset<T, projectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Project.
     * @param {projectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends projectDeleteArgs>(args: SelectSubset<T, projectDeleteArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {projectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends projectUpdateArgs>(args: SelectSubset<T, projectUpdateArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {projectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends projectDeleteManyArgs>(args?: SelectSubset<T, projectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends projectUpdateManyArgs>(args: SelectSubset<T, projectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Project.
     * @param {projectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends projectUpsertArgs>(args: SelectSubset<T, projectUpsertArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends projectCountArgs>(
      args?: Subset<T, projectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends projectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: projectGroupByArgs['orderBy'] }
        : { orderBy?: projectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, projectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the project model
   */
  readonly fields: projectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__projectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    work<T extends project$workArgs<ExtArgs> = {}>(args?: Subset<T, project$workArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the project model
   */
  interface projectFieldRefs {
    readonly project_id: FieldRef<"project", 'Int'>
    readonly project_name: FieldRef<"project", 'String'>
    readonly client_name: FieldRef<"project", 'String'>
    readonly project_location: FieldRef<"project", 'String'>
    readonly project_description: FieldRef<"project", 'String'>
    readonly project_start_date: FieldRef<"project", 'DateTime'>
    readonly project_end_date: FieldRef<"project", 'DateTime'>
    readonly project_status: FieldRef<"project", 'project_project_status'>
  }
    

  // Custom InputTypes
  /**
   * project findUnique
   */
  export type projectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter, which project to fetch.
     */
    where: projectWhereUniqueInput
  }

  /**
   * project findUniqueOrThrow
   */
  export type projectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter, which project to fetch.
     */
    where: projectWhereUniqueInput
  }

  /**
   * project findFirst
   */
  export type projectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter, which project to fetch.
     */
    where?: projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projects.
     */
    cursor?: projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * project findFirstOrThrow
   */
  export type projectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter, which project to fetch.
     */
    where?: projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projects.
     */
    cursor?: projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * project findMany
   */
  export type projectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where?: projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing projects.
     */
    cursor?: projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * project create
   */
  export type projectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * The data needed to create a project.
     */
    data: XOR<projectCreateInput, projectUncheckedCreateInput>
  }

  /**
   * project createMany
   */
  export type projectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many projects.
     */
    data: projectCreateManyInput | projectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * project update
   */
  export type projectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * The data needed to update a project.
     */
    data: XOR<projectUpdateInput, projectUncheckedUpdateInput>
    /**
     * Choose, which project to update.
     */
    where: projectWhereUniqueInput
  }

  /**
   * project updateMany
   */
  export type projectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update projects.
     */
    data: XOR<projectUpdateManyMutationInput, projectUncheckedUpdateManyInput>
    /**
     * Filter which projects to update
     */
    where?: projectWhereInput
    /**
     * Limit how many projects to update.
     */
    limit?: number
  }

  /**
   * project upsert
   */
  export type projectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * The filter to search for the project to update in case it exists.
     */
    where: projectWhereUniqueInput
    /**
     * In case the project found by the `where` argument doesn't exist, create a new project with this data.
     */
    create: XOR<projectCreateInput, projectUncheckedCreateInput>
    /**
     * In case the project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<projectUpdateInput, projectUncheckedUpdateInput>
  }

  /**
   * project delete
   */
  export type projectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter which project to delete.
     */
    where: projectWhereUniqueInput
  }

  /**
   * project deleteMany
   */
  export type projectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projects to delete
     */
    where?: projectWhereInput
    /**
     * Limit how many projects to delete.
     */
    limit?: number
  }

  /**
   * project.work
   */
  export type project$workArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work
     */
    select?: workSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work
     */
    omit?: workOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workInclude<ExtArgs> | null
    where?: workWhereInput
    orderBy?: workOrderByWithRelationInput | workOrderByWithRelationInput[]
    cursor?: workWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkScalarFieldEnum | WorkScalarFieldEnum[]
  }

  /**
   * project without action
   */
  export type projectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
  }


  /**
   * Model tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagAvgAggregateOutputType = {
    tag_id: number | null
  }

  export type TagSumAggregateOutputType = {
    tag_id: number | null
  }

  export type TagMinAggregateOutputType = {
    tag_id: number | null
    tag_name: string | null
    color_hex: string | null
  }

  export type TagMaxAggregateOutputType = {
    tag_id: number | null
    tag_name: string | null
    color_hex: string | null
  }

  export type TagCountAggregateOutputType = {
    tag_id: number
    tag_name: number
    color_hex: number
    _all: number
  }


  export type TagAvgAggregateInputType = {
    tag_id?: true
  }

  export type TagSumAggregateInputType = {
    tag_id?: true
  }

  export type TagMinAggregateInputType = {
    tag_id?: true
    tag_name?: true
    color_hex?: true
  }

  export type TagMaxAggregateInputType = {
    tag_id?: true
    tag_name?: true
    color_hex?: true
  }

  export type TagCountAggregateInputType = {
    tag_id?: true
    tag_name?: true
    color_hex?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tag to aggregate.
     */
    where?: tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagOrderByWithRelationInput | tagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type tagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tagWhereInput
    orderBy?: tagOrderByWithAggregationInput | tagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: tagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _avg?: TagAvgAggregateInputType
    _sum?: TagSumAggregateInputType
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    tag_id: number
    tag_name: string
    color_hex: string
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends tagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type tagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tag_id?: boolean
    tag_name?: boolean
    color_hex?: boolean
    tasktag?: boolean | tag$tasktagArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>



  export type tagSelectScalar = {
    tag_id?: boolean
    tag_name?: boolean
    color_hex?: boolean
  }

  export type tagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tag_id" | "tag_name" | "color_hex", ExtArgs["result"]["tag"]>
  export type tagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasktag?: boolean | tag$tasktagArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $tagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tag"
    objects: {
      tasktag: Prisma.$tasktagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      tag_id: number
      tag_name: string
      color_hex: string
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type tagGetPayload<S extends boolean | null | undefined | tagDefaultArgs> = $Result.GetResult<Prisma.$tagPayload, S>

  type tagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface tagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tag'], meta: { name: 'tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {tagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tagFindUniqueArgs>(args: SelectSubset<T, tagFindUniqueArgs<ExtArgs>>): Prisma__tagClient<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tagFindUniqueOrThrowArgs>(args: SelectSubset<T, tagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tagClient<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tagFindFirstArgs>(args?: SelectSubset<T, tagFindFirstArgs<ExtArgs>>): Prisma__tagClient<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tagFindFirstOrThrowArgs>(args?: SelectSubset<T, tagFindFirstOrThrowArgs<ExtArgs>>): Prisma__tagClient<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `tag_id`
     * const tagWithTag_idOnly = await prisma.tag.findMany({ select: { tag_id: true } })
     * 
     */
    findMany<T extends tagFindManyArgs>(args?: SelectSubset<T, tagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {tagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends tagCreateArgs>(args: SelectSubset<T, tagCreateArgs<ExtArgs>>): Prisma__tagClient<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {tagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tagCreateManyArgs>(args?: SelectSubset<T, tagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tag.
     * @param {tagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends tagDeleteArgs>(args: SelectSubset<T, tagDeleteArgs<ExtArgs>>): Prisma__tagClient<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {tagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tagUpdateArgs>(args: SelectSubset<T, tagUpdateArgs<ExtArgs>>): Prisma__tagClient<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {tagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tagDeleteManyArgs>(args?: SelectSubset<T, tagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tagUpdateManyArgs>(args: SelectSubset<T, tagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tag.
     * @param {tagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends tagUpsertArgs>(args: SelectSubset<T, tagUpsertArgs<ExtArgs>>): Prisma__tagClient<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends tagCountArgs>(
      args?: Subset<T, tagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tagGroupByArgs['orderBy'] }
        : { orderBy?: tagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tag model
   */
  readonly fields: tagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tasktag<T extends tag$tasktagArgs<ExtArgs> = {}>(args?: Subset<T, tag$tasktagArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tasktagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tag model
   */
  interface tagFieldRefs {
    readonly tag_id: FieldRef<"tag", 'Int'>
    readonly tag_name: FieldRef<"tag", 'String'>
    readonly color_hex: FieldRef<"tag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tag findUnique
   */
  export type tagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tag
     */
    omit?: tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagInclude<ExtArgs> | null
    /**
     * Filter, which tag to fetch.
     */
    where: tagWhereUniqueInput
  }

  /**
   * tag findUniqueOrThrow
   */
  export type tagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tag
     */
    omit?: tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagInclude<ExtArgs> | null
    /**
     * Filter, which tag to fetch.
     */
    where: tagWhereUniqueInput
  }

  /**
   * tag findFirst
   */
  export type tagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tag
     */
    omit?: tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagInclude<ExtArgs> | null
    /**
     * Filter, which tag to fetch.
     */
    where?: tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagOrderByWithRelationInput | tagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tags.
     */
    cursor?: tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * tag findFirstOrThrow
   */
  export type tagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tag
     */
    omit?: tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagInclude<ExtArgs> | null
    /**
     * Filter, which tag to fetch.
     */
    where?: tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagOrderByWithRelationInput | tagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tags.
     */
    cursor?: tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * tag findMany
   */
  export type tagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tag
     */
    omit?: tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where?: tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagOrderByWithRelationInput | tagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tags.
     */
    cursor?: tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * tag create
   */
  export type tagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tag
     */
    omit?: tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagInclude<ExtArgs> | null
    /**
     * The data needed to create a tag.
     */
    data: XOR<tagCreateInput, tagUncheckedCreateInput>
  }

  /**
   * tag createMany
   */
  export type tagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tags.
     */
    data: tagCreateManyInput | tagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tag update
   */
  export type tagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tag
     */
    omit?: tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagInclude<ExtArgs> | null
    /**
     * The data needed to update a tag.
     */
    data: XOR<tagUpdateInput, tagUncheckedUpdateInput>
    /**
     * Choose, which tag to update.
     */
    where: tagWhereUniqueInput
  }

  /**
   * tag updateMany
   */
  export type tagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tags.
     */
    data: XOR<tagUpdateManyMutationInput, tagUncheckedUpdateManyInput>
    /**
     * Filter which tags to update
     */
    where?: tagWhereInput
    /**
     * Limit how many tags to update.
     */
    limit?: number
  }

  /**
   * tag upsert
   */
  export type tagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tag
     */
    omit?: tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagInclude<ExtArgs> | null
    /**
     * The filter to search for the tag to update in case it exists.
     */
    where: tagWhereUniqueInput
    /**
     * In case the tag found by the `where` argument doesn't exist, create a new tag with this data.
     */
    create: XOR<tagCreateInput, tagUncheckedCreateInput>
    /**
     * In case the tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tagUpdateInput, tagUncheckedUpdateInput>
  }

  /**
   * tag delete
   */
  export type tagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tag
     */
    omit?: tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagInclude<ExtArgs> | null
    /**
     * Filter which tag to delete.
     */
    where: tagWhereUniqueInput
  }

  /**
   * tag deleteMany
   */
  export type tagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tags to delete
     */
    where?: tagWhereInput
    /**
     * Limit how many tags to delete.
     */
    limit?: number
  }

  /**
   * tag.tasktag
   */
  export type tag$tasktagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasktag
     */
    select?: tasktagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasktag
     */
    omit?: tasktagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasktagInclude<ExtArgs> | null
    where?: tasktagWhereInput
    orderBy?: tasktagOrderByWithRelationInput | tasktagOrderByWithRelationInput[]
    cursor?: tasktagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TasktagScalarFieldEnum | TasktagScalarFieldEnum[]
  }

  /**
   * tag without action
   */
  export type tagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tag
     */
    omit?: tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagInclude<ExtArgs> | null
  }


  /**
   * Model task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskAvgAggregateOutputType = {
    task_id: number | null
    user_id: number | null
  }

  export type TaskSumAggregateOutputType = {
    task_id: number | null
    user_id: number | null
  }

  export type TaskMinAggregateOutputType = {
    task_id: number | null
    user_id: number | null
    task_title: string | null
    task_desc: string | null
    due_date: Date | null
    is_completed: boolean | null
  }

  export type TaskMaxAggregateOutputType = {
    task_id: number | null
    user_id: number | null
    task_title: string | null
    task_desc: string | null
    due_date: Date | null
    is_completed: boolean | null
  }

  export type TaskCountAggregateOutputType = {
    task_id: number
    user_id: number
    task_title: number
    task_desc: number
    due_date: number
    is_completed: number
    _all: number
  }


  export type TaskAvgAggregateInputType = {
    task_id?: true
    user_id?: true
  }

  export type TaskSumAggregateInputType = {
    task_id?: true
    user_id?: true
  }

  export type TaskMinAggregateInputType = {
    task_id?: true
    user_id?: true
    task_title?: true
    task_desc?: true
    due_date?: true
    is_completed?: true
  }

  export type TaskMaxAggregateInputType = {
    task_id?: true
    user_id?: true
    task_title?: true
    task_desc?: true
    due_date?: true
    is_completed?: true
  }

  export type TaskCountAggregateInputType = {
    task_id?: true
    user_id?: true
    task_title?: true
    task_desc?: true
    due_date?: true
    is_completed?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which task to aggregate.
     */
    where?: taskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: taskOrderByWithRelationInput | taskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: taskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type taskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: taskWhereInput
    orderBy?: taskOrderByWithAggregationInput | taskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: taskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _avg?: TaskAvgAggregateInputType
    _sum?: TaskSumAggregateInputType
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    task_id: number
    user_id: number
    task_title: string
    task_desc: string | null
    due_date: Date | null
    is_completed: boolean
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends taskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type taskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    task_id?: boolean
    user_id?: boolean
    task_title?: boolean
    task_desc?: boolean
    due_date?: boolean
    is_completed?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    tasktag?: boolean | task$tasktagArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>



  export type taskSelectScalar = {
    task_id?: boolean
    user_id?: boolean
    task_title?: boolean
    task_desc?: boolean
    due_date?: boolean
    is_completed?: boolean
  }

  export type taskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"task_id" | "user_id" | "task_title" | "task_desc" | "due_date" | "is_completed", ExtArgs["result"]["task"]>
  export type taskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    tasktag?: boolean | task$tasktagArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $taskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "task"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      tasktag: Prisma.$tasktagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      task_id: number
      user_id: number
      task_title: string
      task_desc: string | null
      due_date: Date | null
      is_completed: boolean
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type taskGetPayload<S extends boolean | null | undefined | taskDefaultArgs> = $Result.GetResult<Prisma.$taskPayload, S>

  type taskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<taskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface taskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['task'], meta: { name: 'task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {taskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends taskFindUniqueArgs>(args: SelectSubset<T, taskFindUniqueArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {taskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends taskFindUniqueOrThrowArgs>(args: SelectSubset<T, taskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends taskFindFirstArgs>(args?: SelectSubset<T, taskFindFirstArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends taskFindFirstOrThrowArgs>(args?: SelectSubset<T, taskFindFirstOrThrowArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `task_id`
     * const taskWithTask_idOnly = await prisma.task.findMany({ select: { task_id: true } })
     * 
     */
    findMany<T extends taskFindManyArgs>(args?: SelectSubset<T, taskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task.
     * @param {taskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends taskCreateArgs>(args: SelectSubset<T, taskCreateArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {taskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends taskCreateManyArgs>(args?: SelectSubset<T, taskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Task.
     * @param {taskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends taskDeleteArgs>(args: SelectSubset<T, taskDeleteArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task.
     * @param {taskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends taskUpdateArgs>(args: SelectSubset<T, taskUpdateArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {taskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends taskDeleteManyArgs>(args?: SelectSubset<T, taskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends taskUpdateManyArgs>(args: SelectSubset<T, taskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Task.
     * @param {taskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends taskUpsertArgs>(args: SelectSubset<T, taskUpsertArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends taskCountArgs>(
      args?: Subset<T, taskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends taskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: taskGroupByArgs['orderBy'] }
        : { orderBy?: taskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, taskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the task model
   */
  readonly fields: taskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__taskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tasktag<T extends task$tasktagArgs<ExtArgs> = {}>(args?: Subset<T, task$tasktagArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tasktagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the task model
   */
  interface taskFieldRefs {
    readonly task_id: FieldRef<"task", 'Int'>
    readonly user_id: FieldRef<"task", 'Int'>
    readonly task_title: FieldRef<"task", 'String'>
    readonly task_desc: FieldRef<"task", 'String'>
    readonly due_date: FieldRef<"task", 'DateTime'>
    readonly is_completed: FieldRef<"task", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * task findUnique
   */
  export type taskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * Filter, which task to fetch.
     */
    where: taskWhereUniqueInput
  }

  /**
   * task findUniqueOrThrow
   */
  export type taskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * Filter, which task to fetch.
     */
    where: taskWhereUniqueInput
  }

  /**
   * task findFirst
   */
  export type taskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * Filter, which task to fetch.
     */
    where?: taskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: taskOrderByWithRelationInput | taskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tasks.
     */
    cursor?: taskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * task findFirstOrThrow
   */
  export type taskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * Filter, which task to fetch.
     */
    where?: taskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: taskOrderByWithRelationInput | taskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tasks.
     */
    cursor?: taskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * task findMany
   */
  export type taskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * Filter, which tasks to fetch.
     */
    where?: taskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: taskOrderByWithRelationInput | taskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tasks.
     */
    cursor?: taskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * task create
   */
  export type taskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * The data needed to create a task.
     */
    data: XOR<taskCreateInput, taskUncheckedCreateInput>
  }

  /**
   * task createMany
   */
  export type taskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tasks.
     */
    data: taskCreateManyInput | taskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * task update
   */
  export type taskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * The data needed to update a task.
     */
    data: XOR<taskUpdateInput, taskUncheckedUpdateInput>
    /**
     * Choose, which task to update.
     */
    where: taskWhereUniqueInput
  }

  /**
   * task updateMany
   */
  export type taskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tasks.
     */
    data: XOR<taskUpdateManyMutationInput, taskUncheckedUpdateManyInput>
    /**
     * Filter which tasks to update
     */
    where?: taskWhereInput
    /**
     * Limit how many tasks to update.
     */
    limit?: number
  }

  /**
   * task upsert
   */
  export type taskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * The filter to search for the task to update in case it exists.
     */
    where: taskWhereUniqueInput
    /**
     * In case the task found by the `where` argument doesn't exist, create a new task with this data.
     */
    create: XOR<taskCreateInput, taskUncheckedCreateInput>
    /**
     * In case the task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<taskUpdateInput, taskUncheckedUpdateInput>
  }

  /**
   * task delete
   */
  export type taskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    /**
     * Filter which task to delete.
     */
    where: taskWhereUniqueInput
  }

  /**
   * task deleteMany
   */
  export type taskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tasks to delete
     */
    where?: taskWhereInput
    /**
     * Limit how many tasks to delete.
     */
    limit?: number
  }

  /**
   * task.tasktag
   */
  export type task$tasktagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasktag
     */
    select?: tasktagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasktag
     */
    omit?: tasktagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasktagInclude<ExtArgs> | null
    where?: tasktagWhereInput
    orderBy?: tasktagOrderByWithRelationInput | tasktagOrderByWithRelationInput[]
    cursor?: tasktagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TasktagScalarFieldEnum | TasktagScalarFieldEnum[]
  }

  /**
   * task without action
   */
  export type taskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
  }


  /**
   * Model tasktag
   */

  export type AggregateTasktag = {
    _count: TasktagCountAggregateOutputType | null
    _avg: TasktagAvgAggregateOutputType | null
    _sum: TasktagSumAggregateOutputType | null
    _min: TasktagMinAggregateOutputType | null
    _max: TasktagMaxAggregateOutputType | null
  }

  export type TasktagAvgAggregateOutputType = {
    task_tag_id: number | null
    task_id: number | null
    tag_id: number | null
  }

  export type TasktagSumAggregateOutputType = {
    task_tag_id: number | null
    task_id: number | null
    tag_id: number | null
  }

  export type TasktagMinAggregateOutputType = {
    task_tag_id: number | null
    task_id: number | null
    tag_id: number | null
  }

  export type TasktagMaxAggregateOutputType = {
    task_tag_id: number | null
    task_id: number | null
    tag_id: number | null
  }

  export type TasktagCountAggregateOutputType = {
    task_tag_id: number
    task_id: number
    tag_id: number
    _all: number
  }


  export type TasktagAvgAggregateInputType = {
    task_tag_id?: true
    task_id?: true
    tag_id?: true
  }

  export type TasktagSumAggregateInputType = {
    task_tag_id?: true
    task_id?: true
    tag_id?: true
  }

  export type TasktagMinAggregateInputType = {
    task_tag_id?: true
    task_id?: true
    tag_id?: true
  }

  export type TasktagMaxAggregateInputType = {
    task_tag_id?: true
    task_id?: true
    tag_id?: true
  }

  export type TasktagCountAggregateInputType = {
    task_tag_id?: true
    task_id?: true
    tag_id?: true
    _all?: true
  }

  export type TasktagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tasktag to aggregate.
     */
    where?: tasktagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasktags to fetch.
     */
    orderBy?: tasktagOrderByWithRelationInput | tasktagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tasktagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasktags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasktags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tasktags
    **/
    _count?: true | TasktagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TasktagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TasktagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TasktagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TasktagMaxAggregateInputType
  }

  export type GetTasktagAggregateType<T extends TasktagAggregateArgs> = {
        [P in keyof T & keyof AggregateTasktag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTasktag[P]>
      : GetScalarType<T[P], AggregateTasktag[P]>
  }




  export type tasktagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tasktagWhereInput
    orderBy?: tasktagOrderByWithAggregationInput | tasktagOrderByWithAggregationInput[]
    by: TasktagScalarFieldEnum[] | TasktagScalarFieldEnum
    having?: tasktagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TasktagCountAggregateInputType | true
    _avg?: TasktagAvgAggregateInputType
    _sum?: TasktagSumAggregateInputType
    _min?: TasktagMinAggregateInputType
    _max?: TasktagMaxAggregateInputType
  }

  export type TasktagGroupByOutputType = {
    task_tag_id: number
    task_id: number
    tag_id: number
    _count: TasktagCountAggregateOutputType | null
    _avg: TasktagAvgAggregateOutputType | null
    _sum: TasktagSumAggregateOutputType | null
    _min: TasktagMinAggregateOutputType | null
    _max: TasktagMaxAggregateOutputType | null
  }

  type GetTasktagGroupByPayload<T extends tasktagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TasktagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TasktagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TasktagGroupByOutputType[P]>
            : GetScalarType<T[P], TasktagGroupByOutputType[P]>
        }
      >
    >


  export type tasktagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    task_tag_id?: boolean
    task_id?: boolean
    tag_id?: boolean
    tag?: boolean | tagDefaultArgs<ExtArgs>
    task?: boolean | taskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tasktag"]>



  export type tasktagSelectScalar = {
    task_tag_id?: boolean
    task_id?: boolean
    tag_id?: boolean
  }

  export type tasktagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"task_tag_id" | "task_id" | "tag_id", ExtArgs["result"]["tasktag"]>
  export type tasktagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tag?: boolean | tagDefaultArgs<ExtArgs>
    task?: boolean | taskDefaultArgs<ExtArgs>
  }

  export type $tasktagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tasktag"
    objects: {
      tag: Prisma.$tagPayload<ExtArgs>
      task: Prisma.$taskPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      task_tag_id: number
      task_id: number
      tag_id: number
    }, ExtArgs["result"]["tasktag"]>
    composites: {}
  }

  type tasktagGetPayload<S extends boolean | null | undefined | tasktagDefaultArgs> = $Result.GetResult<Prisma.$tasktagPayload, S>

  type tasktagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tasktagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TasktagCountAggregateInputType | true
    }

  export interface tasktagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tasktag'], meta: { name: 'tasktag' } }
    /**
     * Find zero or one Tasktag that matches the filter.
     * @param {tasktagFindUniqueArgs} args - Arguments to find a Tasktag
     * @example
     * // Get one Tasktag
     * const tasktag = await prisma.tasktag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tasktagFindUniqueArgs>(args: SelectSubset<T, tasktagFindUniqueArgs<ExtArgs>>): Prisma__tasktagClient<$Result.GetResult<Prisma.$tasktagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tasktag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tasktagFindUniqueOrThrowArgs} args - Arguments to find a Tasktag
     * @example
     * // Get one Tasktag
     * const tasktag = await prisma.tasktag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tasktagFindUniqueOrThrowArgs>(args: SelectSubset<T, tasktagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tasktagClient<$Result.GetResult<Prisma.$tasktagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tasktag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasktagFindFirstArgs} args - Arguments to find a Tasktag
     * @example
     * // Get one Tasktag
     * const tasktag = await prisma.tasktag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tasktagFindFirstArgs>(args?: SelectSubset<T, tasktagFindFirstArgs<ExtArgs>>): Prisma__tasktagClient<$Result.GetResult<Prisma.$tasktagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tasktag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasktagFindFirstOrThrowArgs} args - Arguments to find a Tasktag
     * @example
     * // Get one Tasktag
     * const tasktag = await prisma.tasktag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tasktagFindFirstOrThrowArgs>(args?: SelectSubset<T, tasktagFindFirstOrThrowArgs<ExtArgs>>): Prisma__tasktagClient<$Result.GetResult<Prisma.$tasktagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasktags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasktagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasktags
     * const tasktags = await prisma.tasktag.findMany()
     * 
     * // Get first 10 Tasktags
     * const tasktags = await prisma.tasktag.findMany({ take: 10 })
     * 
     * // Only select the `task_tag_id`
     * const tasktagWithTask_tag_idOnly = await prisma.tasktag.findMany({ select: { task_tag_id: true } })
     * 
     */
    findMany<T extends tasktagFindManyArgs>(args?: SelectSubset<T, tasktagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tasktagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tasktag.
     * @param {tasktagCreateArgs} args - Arguments to create a Tasktag.
     * @example
     * // Create one Tasktag
     * const Tasktag = await prisma.tasktag.create({
     *   data: {
     *     // ... data to create a Tasktag
     *   }
     * })
     * 
     */
    create<T extends tasktagCreateArgs>(args: SelectSubset<T, tasktagCreateArgs<ExtArgs>>): Prisma__tasktagClient<$Result.GetResult<Prisma.$tasktagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasktags.
     * @param {tasktagCreateManyArgs} args - Arguments to create many Tasktags.
     * @example
     * // Create many Tasktags
     * const tasktag = await prisma.tasktag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tasktagCreateManyArgs>(args?: SelectSubset<T, tasktagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tasktag.
     * @param {tasktagDeleteArgs} args - Arguments to delete one Tasktag.
     * @example
     * // Delete one Tasktag
     * const Tasktag = await prisma.tasktag.delete({
     *   where: {
     *     // ... filter to delete one Tasktag
     *   }
     * })
     * 
     */
    delete<T extends tasktagDeleteArgs>(args: SelectSubset<T, tasktagDeleteArgs<ExtArgs>>): Prisma__tasktagClient<$Result.GetResult<Prisma.$tasktagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tasktag.
     * @param {tasktagUpdateArgs} args - Arguments to update one Tasktag.
     * @example
     * // Update one Tasktag
     * const tasktag = await prisma.tasktag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tasktagUpdateArgs>(args: SelectSubset<T, tasktagUpdateArgs<ExtArgs>>): Prisma__tasktagClient<$Result.GetResult<Prisma.$tasktagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasktags.
     * @param {tasktagDeleteManyArgs} args - Arguments to filter Tasktags to delete.
     * @example
     * // Delete a few Tasktags
     * const { count } = await prisma.tasktag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tasktagDeleteManyArgs>(args?: SelectSubset<T, tasktagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasktags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasktagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasktags
     * const tasktag = await prisma.tasktag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tasktagUpdateManyArgs>(args: SelectSubset<T, tasktagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tasktag.
     * @param {tasktagUpsertArgs} args - Arguments to update or create a Tasktag.
     * @example
     * // Update or create a Tasktag
     * const tasktag = await prisma.tasktag.upsert({
     *   create: {
     *     // ... data to create a Tasktag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tasktag we want to update
     *   }
     * })
     */
    upsert<T extends tasktagUpsertArgs>(args: SelectSubset<T, tasktagUpsertArgs<ExtArgs>>): Prisma__tasktagClient<$Result.GetResult<Prisma.$tasktagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasktags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasktagCountArgs} args - Arguments to filter Tasktags to count.
     * @example
     * // Count the number of Tasktags
     * const count = await prisma.tasktag.count({
     *   where: {
     *     // ... the filter for the Tasktags we want to count
     *   }
     * })
    **/
    count<T extends tasktagCountArgs>(
      args?: Subset<T, tasktagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TasktagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tasktag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasktagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TasktagAggregateArgs>(args: Subset<T, TasktagAggregateArgs>): Prisma.PrismaPromise<GetTasktagAggregateType<T>>

    /**
     * Group by Tasktag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasktagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tasktagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tasktagGroupByArgs['orderBy'] }
        : { orderBy?: tasktagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tasktagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTasktagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tasktag model
   */
  readonly fields: tasktagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tasktag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tasktagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tag<T extends tagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tagDefaultArgs<ExtArgs>>): Prisma__tagClient<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    task<T extends taskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, taskDefaultArgs<ExtArgs>>): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tasktag model
   */
  interface tasktagFieldRefs {
    readonly task_tag_id: FieldRef<"tasktag", 'Int'>
    readonly task_id: FieldRef<"tasktag", 'Int'>
    readonly tag_id: FieldRef<"tasktag", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * tasktag findUnique
   */
  export type tasktagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasktag
     */
    select?: tasktagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasktag
     */
    omit?: tasktagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasktagInclude<ExtArgs> | null
    /**
     * Filter, which tasktag to fetch.
     */
    where: tasktagWhereUniqueInput
  }

  /**
   * tasktag findUniqueOrThrow
   */
  export type tasktagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasktag
     */
    select?: tasktagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasktag
     */
    omit?: tasktagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasktagInclude<ExtArgs> | null
    /**
     * Filter, which tasktag to fetch.
     */
    where: tasktagWhereUniqueInput
  }

  /**
   * tasktag findFirst
   */
  export type tasktagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasktag
     */
    select?: tasktagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasktag
     */
    omit?: tasktagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasktagInclude<ExtArgs> | null
    /**
     * Filter, which tasktag to fetch.
     */
    where?: tasktagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasktags to fetch.
     */
    orderBy?: tasktagOrderByWithRelationInput | tasktagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tasktags.
     */
    cursor?: tasktagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasktags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasktags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tasktags.
     */
    distinct?: TasktagScalarFieldEnum | TasktagScalarFieldEnum[]
  }

  /**
   * tasktag findFirstOrThrow
   */
  export type tasktagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasktag
     */
    select?: tasktagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasktag
     */
    omit?: tasktagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasktagInclude<ExtArgs> | null
    /**
     * Filter, which tasktag to fetch.
     */
    where?: tasktagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasktags to fetch.
     */
    orderBy?: tasktagOrderByWithRelationInput | tasktagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tasktags.
     */
    cursor?: tasktagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasktags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasktags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tasktags.
     */
    distinct?: TasktagScalarFieldEnum | TasktagScalarFieldEnum[]
  }

  /**
   * tasktag findMany
   */
  export type tasktagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasktag
     */
    select?: tasktagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasktag
     */
    omit?: tasktagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasktagInclude<ExtArgs> | null
    /**
     * Filter, which tasktags to fetch.
     */
    where?: tasktagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasktags to fetch.
     */
    orderBy?: tasktagOrderByWithRelationInput | tasktagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tasktags.
     */
    cursor?: tasktagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasktags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasktags.
     */
    skip?: number
    distinct?: TasktagScalarFieldEnum | TasktagScalarFieldEnum[]
  }

  /**
   * tasktag create
   */
  export type tasktagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasktag
     */
    select?: tasktagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasktag
     */
    omit?: tasktagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasktagInclude<ExtArgs> | null
    /**
     * The data needed to create a tasktag.
     */
    data: XOR<tasktagCreateInput, tasktagUncheckedCreateInput>
  }

  /**
   * tasktag createMany
   */
  export type tasktagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tasktags.
     */
    data: tasktagCreateManyInput | tasktagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tasktag update
   */
  export type tasktagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasktag
     */
    select?: tasktagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasktag
     */
    omit?: tasktagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasktagInclude<ExtArgs> | null
    /**
     * The data needed to update a tasktag.
     */
    data: XOR<tasktagUpdateInput, tasktagUncheckedUpdateInput>
    /**
     * Choose, which tasktag to update.
     */
    where: tasktagWhereUniqueInput
  }

  /**
   * tasktag updateMany
   */
  export type tasktagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tasktags.
     */
    data: XOR<tasktagUpdateManyMutationInput, tasktagUncheckedUpdateManyInput>
    /**
     * Filter which tasktags to update
     */
    where?: tasktagWhereInput
    /**
     * Limit how many tasktags to update.
     */
    limit?: number
  }

  /**
   * tasktag upsert
   */
  export type tasktagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasktag
     */
    select?: tasktagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasktag
     */
    omit?: tasktagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasktagInclude<ExtArgs> | null
    /**
     * The filter to search for the tasktag to update in case it exists.
     */
    where: tasktagWhereUniqueInput
    /**
     * In case the tasktag found by the `where` argument doesn't exist, create a new tasktag with this data.
     */
    create: XOR<tasktagCreateInput, tasktagUncheckedCreateInput>
    /**
     * In case the tasktag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tasktagUpdateInput, tasktagUncheckedUpdateInput>
  }

  /**
   * tasktag delete
   */
  export type tasktagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasktag
     */
    select?: tasktagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasktag
     */
    omit?: tasktagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasktagInclude<ExtArgs> | null
    /**
     * Filter which tasktag to delete.
     */
    where: tasktagWhereUniqueInput
  }

  /**
   * tasktag deleteMany
   */
  export type tasktagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tasktags to delete
     */
    where?: tasktagWhereInput
    /**
     * Limit how many tasktags to delete.
     */
    limit?: number
  }

  /**
   * tasktag without action
   */
  export type tasktagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasktag
     */
    select?: tasktagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasktag
     */
    omit?: tasktagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasktagInclude<ExtArgs> | null
  }


  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    user_id: number | null
  }

  export type UserSumAggregateOutputType = {
    user_id: number | null
  }

  export type UserMinAggregateOutputType = {
    user_id: number | null
    email: string | null
    google_id: string | null
    full_name: string | null
    avatar_url: string | null
    user_type: $Enums.user_user_type | null
    created_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    user_id: number | null
    email: string | null
    google_id: string | null
    full_name: string | null
    avatar_url: string | null
    user_type: $Enums.user_user_type | null
    created_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    user_id: number
    email: number
    google_id: number
    full_name: number
    avatar_url: number
    user_type: number
    created_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    user_id?: true
  }

  export type UserSumAggregateInputType = {
    user_id?: true
  }

  export type UserMinAggregateInputType = {
    user_id?: true
    email?: true
    google_id?: true
    full_name?: true
    avatar_url?: true
    user_type?: true
    created_at?: true
  }

  export type UserMaxAggregateInputType = {
    user_id?: true
    email?: true
    google_id?: true
    full_name?: true
    avatar_url?: true
    user_type?: true
    created_at?: true
  }

  export type UserCountAggregateInputType = {
    user_id?: true
    email?: true
    google_id?: true
    full_name?: true
    avatar_url?: true
    user_type?: true
    created_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    user_id: number
    email: string
    google_id: string | null
    full_name: string | null
    avatar_url: string | null
    user_type: $Enums.user_user_type
    created_at: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    email?: boolean
    google_id?: boolean
    full_name?: boolean
    avatar_url?: boolean
    user_type?: boolean
    created_at?: boolean
    assignment?: boolean | user$assignmentArgs<ExtArgs>
    task?: boolean | user$taskArgs<ExtArgs>
    userprofile?: boolean | user$userprofileArgs<ExtArgs>
    workapplication?: boolean | user$workapplicationArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type userSelectScalar = {
    user_id?: boolean
    email?: boolean
    google_id?: boolean
    full_name?: boolean
    avatar_url?: boolean
    user_type?: boolean
    created_at?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "email" | "google_id" | "full_name" | "avatar_url" | "user_type" | "created_at", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | user$assignmentArgs<ExtArgs>
    task?: boolean | user$taskArgs<ExtArgs>
    userprofile?: boolean | user$userprofileArgs<ExtArgs>
    workapplication?: boolean | user$workapplicationArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      assignment: Prisma.$assignmentPayload<ExtArgs>[]
      task: Prisma.$taskPayload<ExtArgs>[]
      userprofile: Prisma.$userprofilePayload<ExtArgs> | null
      workapplication: Prisma.$workapplicationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      email: string
      google_id: string | null
      full_name: string | null
      avatar_url: string | null
      user_type: $Enums.user_user_type
      created_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const userWithUser_idOnly = await prisma.user.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assignment<T extends user$assignmentArgs<ExtArgs> = {}>(args?: Subset<T, user$assignmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$assignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    task<T extends user$taskArgs<ExtArgs> = {}>(args?: Subset<T, user$taskArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userprofile<T extends user$userprofileArgs<ExtArgs> = {}>(args?: Subset<T, user$userprofileArgs<ExtArgs>>): Prisma__userprofileClient<$Result.GetResult<Prisma.$userprofilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    workapplication<T extends user$workapplicationArgs<ExtArgs> = {}>(args?: Subset<T, user$workapplicationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workapplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly user_id: FieldRef<"user", 'Int'>
    readonly email: FieldRef<"user", 'String'>
    readonly google_id: FieldRef<"user", 'String'>
    readonly full_name: FieldRef<"user", 'String'>
    readonly avatar_url: FieldRef<"user", 'String'>
    readonly user_type: FieldRef<"user", 'user_user_type'>
    readonly created_at: FieldRef<"user", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.assignment
   */
  export type user$assignmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignment
     */
    select?: assignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assignment
     */
    omit?: assignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assignmentInclude<ExtArgs> | null
    where?: assignmentWhereInput
    orderBy?: assignmentOrderByWithRelationInput | assignmentOrderByWithRelationInput[]
    cursor?: assignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * user.task
   */
  export type user$taskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task
     */
    omit?: taskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taskInclude<ExtArgs> | null
    where?: taskWhereInput
    orderBy?: taskOrderByWithRelationInput | taskOrderByWithRelationInput[]
    cursor?: taskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * user.userprofile
   */
  export type user$userprofileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userprofile
     */
    select?: userprofileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userprofile
     */
    omit?: userprofileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userprofileInclude<ExtArgs> | null
    where?: userprofileWhereInput
  }

  /**
   * user.workapplication
   */
  export type user$workapplicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workapplication
     */
    select?: workapplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workapplication
     */
    omit?: workapplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workapplicationInclude<ExtArgs> | null
    where?: workapplicationWhereInput
    orderBy?: workapplicationOrderByWithRelationInput | workapplicationOrderByWithRelationInput[]
    cursor?: workapplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkapplicationScalarFieldEnum | WorkapplicationScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model userprofile
   */

  export type AggregateUserprofile = {
    _count: UserprofileCountAggregateOutputType | null
    _avg: UserprofileAvgAggregateOutputType | null
    _sum: UserprofileSumAggregateOutputType | null
    _min: UserprofileMinAggregateOutputType | null
    _max: UserprofileMaxAggregateOutputType | null
  }

  export type UserprofileAvgAggregateOutputType = {
    profile_id: number | null
    user_id: number | null
    reliability_score: Decimal | null
  }

  export type UserprofileSumAggregateOutputType = {
    profile_id: number | null
    user_id: number | null
    reliability_score: Decimal | null
  }

  export type UserprofileMinAggregateOutputType = {
    profile_id: number | null
    user_id: number | null
    primary_role: $Enums.userprofile_primary_role | null
    secondary_role: $Enums.userprofile_secondary_role | null
    reliability_score: Decimal | null
    is_setup_complete: boolean | null
  }

  export type UserprofileMaxAggregateOutputType = {
    profile_id: number | null
    user_id: number | null
    primary_role: $Enums.userprofile_primary_role | null
    secondary_role: $Enums.userprofile_secondary_role | null
    reliability_score: Decimal | null
    is_setup_complete: boolean | null
  }

  export type UserprofileCountAggregateOutputType = {
    profile_id: number
    user_id: number
    primary_role: number
    secondary_role: number
    reliability_score: number
    is_setup_complete: number
    _all: number
  }


  export type UserprofileAvgAggregateInputType = {
    profile_id?: true
    user_id?: true
    reliability_score?: true
  }

  export type UserprofileSumAggregateInputType = {
    profile_id?: true
    user_id?: true
    reliability_score?: true
  }

  export type UserprofileMinAggregateInputType = {
    profile_id?: true
    user_id?: true
    primary_role?: true
    secondary_role?: true
    reliability_score?: true
    is_setup_complete?: true
  }

  export type UserprofileMaxAggregateInputType = {
    profile_id?: true
    user_id?: true
    primary_role?: true
    secondary_role?: true
    reliability_score?: true
    is_setup_complete?: true
  }

  export type UserprofileCountAggregateInputType = {
    profile_id?: true
    user_id?: true
    primary_role?: true
    secondary_role?: true
    reliability_score?: true
    is_setup_complete?: true
    _all?: true
  }

  export type UserprofileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which userprofile to aggregate.
     */
    where?: userprofileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userprofiles to fetch.
     */
    orderBy?: userprofileOrderByWithRelationInput | userprofileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userprofileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userprofiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userprofiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned userprofiles
    **/
    _count?: true | UserprofileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserprofileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserprofileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserprofileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserprofileMaxAggregateInputType
  }

  export type GetUserprofileAggregateType<T extends UserprofileAggregateArgs> = {
        [P in keyof T & keyof AggregateUserprofile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserprofile[P]>
      : GetScalarType<T[P], AggregateUserprofile[P]>
  }




  export type userprofileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userprofileWhereInput
    orderBy?: userprofileOrderByWithAggregationInput | userprofileOrderByWithAggregationInput[]
    by: UserprofileScalarFieldEnum[] | UserprofileScalarFieldEnum
    having?: userprofileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserprofileCountAggregateInputType | true
    _avg?: UserprofileAvgAggregateInputType
    _sum?: UserprofileSumAggregateInputType
    _min?: UserprofileMinAggregateInputType
    _max?: UserprofileMaxAggregateInputType
  }

  export type UserprofileGroupByOutputType = {
    profile_id: number
    user_id: number
    primary_role: $Enums.userprofile_primary_role
    secondary_role: $Enums.userprofile_secondary_role | null
    reliability_score: Decimal
    is_setup_complete: boolean
    _count: UserprofileCountAggregateOutputType | null
    _avg: UserprofileAvgAggregateOutputType | null
    _sum: UserprofileSumAggregateOutputType | null
    _min: UserprofileMinAggregateOutputType | null
    _max: UserprofileMaxAggregateOutputType | null
  }

  type GetUserprofileGroupByPayload<T extends userprofileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserprofileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserprofileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserprofileGroupByOutputType[P]>
            : GetScalarType<T[P], UserprofileGroupByOutputType[P]>
        }
      >
    >


  export type userprofileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    profile_id?: boolean
    user_id?: boolean
    primary_role?: boolean
    secondary_role?: boolean
    reliability_score?: boolean
    is_setup_complete?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userprofile"]>



  export type userprofileSelectScalar = {
    profile_id?: boolean
    user_id?: boolean
    primary_role?: boolean
    secondary_role?: boolean
    reliability_score?: boolean
    is_setup_complete?: boolean
  }

  export type userprofileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"profile_id" | "user_id" | "primary_role" | "secondary_role" | "reliability_score" | "is_setup_complete", ExtArgs["result"]["userprofile"]>
  export type userprofileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $userprofilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "userprofile"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      profile_id: number
      user_id: number
      primary_role: $Enums.userprofile_primary_role
      secondary_role: $Enums.userprofile_secondary_role | null
      reliability_score: Prisma.Decimal
      is_setup_complete: boolean
    }, ExtArgs["result"]["userprofile"]>
    composites: {}
  }

  type userprofileGetPayload<S extends boolean | null | undefined | userprofileDefaultArgs> = $Result.GetResult<Prisma.$userprofilePayload, S>

  type userprofileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userprofileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserprofileCountAggregateInputType | true
    }

  export interface userprofileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['userprofile'], meta: { name: 'userprofile' } }
    /**
     * Find zero or one Userprofile that matches the filter.
     * @param {userprofileFindUniqueArgs} args - Arguments to find a Userprofile
     * @example
     * // Get one Userprofile
     * const userprofile = await prisma.userprofile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userprofileFindUniqueArgs>(args: SelectSubset<T, userprofileFindUniqueArgs<ExtArgs>>): Prisma__userprofileClient<$Result.GetResult<Prisma.$userprofilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Userprofile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userprofileFindUniqueOrThrowArgs} args - Arguments to find a Userprofile
     * @example
     * // Get one Userprofile
     * const userprofile = await prisma.userprofile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userprofileFindUniqueOrThrowArgs>(args: SelectSubset<T, userprofileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userprofileClient<$Result.GetResult<Prisma.$userprofilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Userprofile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userprofileFindFirstArgs} args - Arguments to find a Userprofile
     * @example
     * // Get one Userprofile
     * const userprofile = await prisma.userprofile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userprofileFindFirstArgs>(args?: SelectSubset<T, userprofileFindFirstArgs<ExtArgs>>): Prisma__userprofileClient<$Result.GetResult<Prisma.$userprofilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Userprofile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userprofileFindFirstOrThrowArgs} args - Arguments to find a Userprofile
     * @example
     * // Get one Userprofile
     * const userprofile = await prisma.userprofile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userprofileFindFirstOrThrowArgs>(args?: SelectSubset<T, userprofileFindFirstOrThrowArgs<ExtArgs>>): Prisma__userprofileClient<$Result.GetResult<Prisma.$userprofilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Userprofiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userprofileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Userprofiles
     * const userprofiles = await prisma.userprofile.findMany()
     * 
     * // Get first 10 Userprofiles
     * const userprofiles = await prisma.userprofile.findMany({ take: 10 })
     * 
     * // Only select the `profile_id`
     * const userprofileWithProfile_idOnly = await prisma.userprofile.findMany({ select: { profile_id: true } })
     * 
     */
    findMany<T extends userprofileFindManyArgs>(args?: SelectSubset<T, userprofileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userprofilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Userprofile.
     * @param {userprofileCreateArgs} args - Arguments to create a Userprofile.
     * @example
     * // Create one Userprofile
     * const Userprofile = await prisma.userprofile.create({
     *   data: {
     *     // ... data to create a Userprofile
     *   }
     * })
     * 
     */
    create<T extends userprofileCreateArgs>(args: SelectSubset<T, userprofileCreateArgs<ExtArgs>>): Prisma__userprofileClient<$Result.GetResult<Prisma.$userprofilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Userprofiles.
     * @param {userprofileCreateManyArgs} args - Arguments to create many Userprofiles.
     * @example
     * // Create many Userprofiles
     * const userprofile = await prisma.userprofile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userprofileCreateManyArgs>(args?: SelectSubset<T, userprofileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Userprofile.
     * @param {userprofileDeleteArgs} args - Arguments to delete one Userprofile.
     * @example
     * // Delete one Userprofile
     * const Userprofile = await prisma.userprofile.delete({
     *   where: {
     *     // ... filter to delete one Userprofile
     *   }
     * })
     * 
     */
    delete<T extends userprofileDeleteArgs>(args: SelectSubset<T, userprofileDeleteArgs<ExtArgs>>): Prisma__userprofileClient<$Result.GetResult<Prisma.$userprofilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Userprofile.
     * @param {userprofileUpdateArgs} args - Arguments to update one Userprofile.
     * @example
     * // Update one Userprofile
     * const userprofile = await prisma.userprofile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userprofileUpdateArgs>(args: SelectSubset<T, userprofileUpdateArgs<ExtArgs>>): Prisma__userprofileClient<$Result.GetResult<Prisma.$userprofilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Userprofiles.
     * @param {userprofileDeleteManyArgs} args - Arguments to filter Userprofiles to delete.
     * @example
     * // Delete a few Userprofiles
     * const { count } = await prisma.userprofile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userprofileDeleteManyArgs>(args?: SelectSubset<T, userprofileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Userprofiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userprofileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Userprofiles
     * const userprofile = await prisma.userprofile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userprofileUpdateManyArgs>(args: SelectSubset<T, userprofileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Userprofile.
     * @param {userprofileUpsertArgs} args - Arguments to update or create a Userprofile.
     * @example
     * // Update or create a Userprofile
     * const userprofile = await prisma.userprofile.upsert({
     *   create: {
     *     // ... data to create a Userprofile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Userprofile we want to update
     *   }
     * })
     */
    upsert<T extends userprofileUpsertArgs>(args: SelectSubset<T, userprofileUpsertArgs<ExtArgs>>): Prisma__userprofileClient<$Result.GetResult<Prisma.$userprofilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Userprofiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userprofileCountArgs} args - Arguments to filter Userprofiles to count.
     * @example
     * // Count the number of Userprofiles
     * const count = await prisma.userprofile.count({
     *   where: {
     *     // ... the filter for the Userprofiles we want to count
     *   }
     * })
    **/
    count<T extends userprofileCountArgs>(
      args?: Subset<T, userprofileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserprofileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Userprofile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserprofileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserprofileAggregateArgs>(args: Subset<T, UserprofileAggregateArgs>): Prisma.PrismaPromise<GetUserprofileAggregateType<T>>

    /**
     * Group by Userprofile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userprofileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userprofileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userprofileGroupByArgs['orderBy'] }
        : { orderBy?: userprofileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userprofileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserprofileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the userprofile model
   */
  readonly fields: userprofileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for userprofile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userprofileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the userprofile model
   */
  interface userprofileFieldRefs {
    readonly profile_id: FieldRef<"userprofile", 'Int'>
    readonly user_id: FieldRef<"userprofile", 'Int'>
    readonly primary_role: FieldRef<"userprofile", 'userprofile_primary_role'>
    readonly secondary_role: FieldRef<"userprofile", 'userprofile_secondary_role'>
    readonly reliability_score: FieldRef<"userprofile", 'Decimal'>
    readonly is_setup_complete: FieldRef<"userprofile", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * userprofile findUnique
   */
  export type userprofileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userprofile
     */
    select?: userprofileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userprofile
     */
    omit?: userprofileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userprofileInclude<ExtArgs> | null
    /**
     * Filter, which userprofile to fetch.
     */
    where: userprofileWhereUniqueInput
  }

  /**
   * userprofile findUniqueOrThrow
   */
  export type userprofileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userprofile
     */
    select?: userprofileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userprofile
     */
    omit?: userprofileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userprofileInclude<ExtArgs> | null
    /**
     * Filter, which userprofile to fetch.
     */
    where: userprofileWhereUniqueInput
  }

  /**
   * userprofile findFirst
   */
  export type userprofileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userprofile
     */
    select?: userprofileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userprofile
     */
    omit?: userprofileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userprofileInclude<ExtArgs> | null
    /**
     * Filter, which userprofile to fetch.
     */
    where?: userprofileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userprofiles to fetch.
     */
    orderBy?: userprofileOrderByWithRelationInput | userprofileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for userprofiles.
     */
    cursor?: userprofileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userprofiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userprofiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of userprofiles.
     */
    distinct?: UserprofileScalarFieldEnum | UserprofileScalarFieldEnum[]
  }

  /**
   * userprofile findFirstOrThrow
   */
  export type userprofileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userprofile
     */
    select?: userprofileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userprofile
     */
    omit?: userprofileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userprofileInclude<ExtArgs> | null
    /**
     * Filter, which userprofile to fetch.
     */
    where?: userprofileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userprofiles to fetch.
     */
    orderBy?: userprofileOrderByWithRelationInput | userprofileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for userprofiles.
     */
    cursor?: userprofileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userprofiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userprofiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of userprofiles.
     */
    distinct?: UserprofileScalarFieldEnum | UserprofileScalarFieldEnum[]
  }

  /**
   * userprofile findMany
   */
  export type userprofileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userprofile
     */
    select?: userprofileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userprofile
     */
    omit?: userprofileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userprofileInclude<ExtArgs> | null
    /**
     * Filter, which userprofiles to fetch.
     */
    where?: userprofileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userprofiles to fetch.
     */
    orderBy?: userprofileOrderByWithRelationInput | userprofileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing userprofiles.
     */
    cursor?: userprofileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userprofiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userprofiles.
     */
    skip?: number
    distinct?: UserprofileScalarFieldEnum | UserprofileScalarFieldEnum[]
  }

  /**
   * userprofile create
   */
  export type userprofileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userprofile
     */
    select?: userprofileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userprofile
     */
    omit?: userprofileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userprofileInclude<ExtArgs> | null
    /**
     * The data needed to create a userprofile.
     */
    data: XOR<userprofileCreateInput, userprofileUncheckedCreateInput>
  }

  /**
   * userprofile createMany
   */
  export type userprofileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many userprofiles.
     */
    data: userprofileCreateManyInput | userprofileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * userprofile update
   */
  export type userprofileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userprofile
     */
    select?: userprofileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userprofile
     */
    omit?: userprofileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userprofileInclude<ExtArgs> | null
    /**
     * The data needed to update a userprofile.
     */
    data: XOR<userprofileUpdateInput, userprofileUncheckedUpdateInput>
    /**
     * Choose, which userprofile to update.
     */
    where: userprofileWhereUniqueInput
  }

  /**
   * userprofile updateMany
   */
  export type userprofileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update userprofiles.
     */
    data: XOR<userprofileUpdateManyMutationInput, userprofileUncheckedUpdateManyInput>
    /**
     * Filter which userprofiles to update
     */
    where?: userprofileWhereInput
    /**
     * Limit how many userprofiles to update.
     */
    limit?: number
  }

  /**
   * userprofile upsert
   */
  export type userprofileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userprofile
     */
    select?: userprofileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userprofile
     */
    omit?: userprofileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userprofileInclude<ExtArgs> | null
    /**
     * The filter to search for the userprofile to update in case it exists.
     */
    where: userprofileWhereUniqueInput
    /**
     * In case the userprofile found by the `where` argument doesn't exist, create a new userprofile with this data.
     */
    create: XOR<userprofileCreateInput, userprofileUncheckedCreateInput>
    /**
     * In case the userprofile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userprofileUpdateInput, userprofileUncheckedUpdateInput>
  }

  /**
   * userprofile delete
   */
  export type userprofileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userprofile
     */
    select?: userprofileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userprofile
     */
    omit?: userprofileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userprofileInclude<ExtArgs> | null
    /**
     * Filter which userprofile to delete.
     */
    where: userprofileWhereUniqueInput
  }

  /**
   * userprofile deleteMany
   */
  export type userprofileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which userprofiles to delete
     */
    where?: userprofileWhereInput
    /**
     * Limit how many userprofiles to delete.
     */
    limit?: number
  }

  /**
   * userprofile without action
   */
  export type userprofileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userprofile
     */
    select?: userprofileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userprofile
     */
    omit?: userprofileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userprofileInclude<ExtArgs> | null
  }


  /**
   * Model work
   */

  export type AggregateWork = {
    _count: WorkCountAggregateOutputType | null
    _avg: WorkAvgAggregateOutputType | null
    _sum: WorkSumAggregateOutputType | null
    _min: WorkMinAggregateOutputType | null
    _max: WorkMaxAggregateOutputType | null
  }

  export type WorkAvgAggregateOutputType = {
    work_id: number | null
    project_id: number | null
    expected_salary: Decimal | null
  }

  export type WorkSumAggregateOutputType = {
    work_id: number | null
    project_id: number | null
    expected_salary: Decimal | null
  }

  export type WorkMinAggregateOutputType = {
    work_id: number | null
    project_id: number | null
    project_role: string | null
    role_category: $Enums.work_role_category | null
    expected_salary: Decimal | null
    is_open_pool: boolean | null
    work_description: string | null
    work_start_date: Date | null
    work_start_time: Date | null
    work_end_time: Date | null
    work_status: $Enums.work_work_status | null
  }

  export type WorkMaxAggregateOutputType = {
    work_id: number | null
    project_id: number | null
    project_role: string | null
    role_category: $Enums.work_role_category | null
    expected_salary: Decimal | null
    is_open_pool: boolean | null
    work_description: string | null
    work_start_date: Date | null
    work_start_time: Date | null
    work_end_time: Date | null
    work_status: $Enums.work_work_status | null
  }

  export type WorkCountAggregateOutputType = {
    work_id: number
    project_id: number
    project_role: number
    role_category: number
    expected_salary: number
    is_open_pool: number
    work_description: number
    work_start_date: number
    work_start_time: number
    work_end_time: number
    work_status: number
    _all: number
  }


  export type WorkAvgAggregateInputType = {
    work_id?: true
    project_id?: true
    expected_salary?: true
  }

  export type WorkSumAggregateInputType = {
    work_id?: true
    project_id?: true
    expected_salary?: true
  }

  export type WorkMinAggregateInputType = {
    work_id?: true
    project_id?: true
    project_role?: true
    role_category?: true
    expected_salary?: true
    is_open_pool?: true
    work_description?: true
    work_start_date?: true
    work_start_time?: true
    work_end_time?: true
    work_status?: true
  }

  export type WorkMaxAggregateInputType = {
    work_id?: true
    project_id?: true
    project_role?: true
    role_category?: true
    expected_salary?: true
    is_open_pool?: true
    work_description?: true
    work_start_date?: true
    work_start_time?: true
    work_end_time?: true
    work_status?: true
  }

  export type WorkCountAggregateInputType = {
    work_id?: true
    project_id?: true
    project_role?: true
    role_category?: true
    expected_salary?: true
    is_open_pool?: true
    work_description?: true
    work_start_date?: true
    work_start_time?: true
    work_end_time?: true
    work_status?: true
    _all?: true
  }

  export type WorkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which work to aggregate.
     */
    where?: workWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of works to fetch.
     */
    orderBy?: workOrderByWithRelationInput | workOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: workWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` works from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` works.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned works
    **/
    _count?: true | WorkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkMaxAggregateInputType
  }

  export type GetWorkAggregateType<T extends WorkAggregateArgs> = {
        [P in keyof T & keyof AggregateWork]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWork[P]>
      : GetScalarType<T[P], AggregateWork[P]>
  }




  export type workGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workWhereInput
    orderBy?: workOrderByWithAggregationInput | workOrderByWithAggregationInput[]
    by: WorkScalarFieldEnum[] | WorkScalarFieldEnum
    having?: workScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkCountAggregateInputType | true
    _avg?: WorkAvgAggregateInputType
    _sum?: WorkSumAggregateInputType
    _min?: WorkMinAggregateInputType
    _max?: WorkMaxAggregateInputType
  }

  export type WorkGroupByOutputType = {
    work_id: number
    project_id: number
    project_role: string
    role_category: $Enums.work_role_category
    expected_salary: Decimal
    is_open_pool: boolean
    work_description: string
    work_start_date: Date
    work_start_time: Date | null
    work_end_time: Date | null
    work_status: $Enums.work_work_status
    _count: WorkCountAggregateOutputType | null
    _avg: WorkAvgAggregateOutputType | null
    _sum: WorkSumAggregateOutputType | null
    _min: WorkMinAggregateOutputType | null
    _max: WorkMaxAggregateOutputType | null
  }

  type GetWorkGroupByPayload<T extends workGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkGroupByOutputType[P]>
            : GetScalarType<T[P], WorkGroupByOutputType[P]>
        }
      >
    >


  export type workSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    work_id?: boolean
    project_id?: boolean
    project_role?: boolean
    role_category?: boolean
    expected_salary?: boolean
    is_open_pool?: boolean
    work_description?: boolean
    work_start_date?: boolean
    work_start_time?: boolean
    work_end_time?: boolean
    work_status?: boolean
    assignment?: boolean | work$assignmentArgs<ExtArgs>
    project?: boolean | projectDefaultArgs<ExtArgs>
    workapplication?: boolean | work$workapplicationArgs<ExtArgs>
    _count?: boolean | WorkCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["work"]>



  export type workSelectScalar = {
    work_id?: boolean
    project_id?: boolean
    project_role?: boolean
    role_category?: boolean
    expected_salary?: boolean
    is_open_pool?: boolean
    work_description?: boolean
    work_start_date?: boolean
    work_start_time?: boolean
    work_end_time?: boolean
    work_status?: boolean
  }

  export type workOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"work_id" | "project_id" | "project_role" | "role_category" | "expected_salary" | "is_open_pool" | "work_description" | "work_start_date" | "work_start_time" | "work_end_time" | "work_status", ExtArgs["result"]["work"]>
  export type workInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | work$assignmentArgs<ExtArgs>
    project?: boolean | projectDefaultArgs<ExtArgs>
    workapplication?: boolean | work$workapplicationArgs<ExtArgs>
    _count?: boolean | WorkCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $workPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "work"
    objects: {
      assignment: Prisma.$assignmentPayload<ExtArgs>[]
      project: Prisma.$projectPayload<ExtArgs>
      workapplication: Prisma.$workapplicationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      work_id: number
      project_id: number
      project_role: string
      role_category: $Enums.work_role_category
      expected_salary: Prisma.Decimal
      is_open_pool: boolean
      work_description: string
      work_start_date: Date
      work_start_time: Date | null
      work_end_time: Date | null
      work_status: $Enums.work_work_status
    }, ExtArgs["result"]["work"]>
    composites: {}
  }

  type workGetPayload<S extends boolean | null | undefined | workDefaultArgs> = $Result.GetResult<Prisma.$workPayload, S>

  type workCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<workFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkCountAggregateInputType | true
    }

  export interface workDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['work'], meta: { name: 'work' } }
    /**
     * Find zero or one Work that matches the filter.
     * @param {workFindUniqueArgs} args - Arguments to find a Work
     * @example
     * // Get one Work
     * const work = await prisma.work.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends workFindUniqueArgs>(args: SelectSubset<T, workFindUniqueArgs<ExtArgs>>): Prisma__workClient<$Result.GetResult<Prisma.$workPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Work that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {workFindUniqueOrThrowArgs} args - Arguments to find a Work
     * @example
     * // Get one Work
     * const work = await prisma.work.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends workFindUniqueOrThrowArgs>(args: SelectSubset<T, workFindUniqueOrThrowArgs<ExtArgs>>): Prisma__workClient<$Result.GetResult<Prisma.$workPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Work that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workFindFirstArgs} args - Arguments to find a Work
     * @example
     * // Get one Work
     * const work = await prisma.work.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends workFindFirstArgs>(args?: SelectSubset<T, workFindFirstArgs<ExtArgs>>): Prisma__workClient<$Result.GetResult<Prisma.$workPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Work that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workFindFirstOrThrowArgs} args - Arguments to find a Work
     * @example
     * // Get one Work
     * const work = await prisma.work.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends workFindFirstOrThrowArgs>(args?: SelectSubset<T, workFindFirstOrThrowArgs<ExtArgs>>): Prisma__workClient<$Result.GetResult<Prisma.$workPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Works that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Works
     * const works = await prisma.work.findMany()
     * 
     * // Get first 10 Works
     * const works = await prisma.work.findMany({ take: 10 })
     * 
     * // Only select the `work_id`
     * const workWithWork_idOnly = await prisma.work.findMany({ select: { work_id: true } })
     * 
     */
    findMany<T extends workFindManyArgs>(args?: SelectSubset<T, workFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Work.
     * @param {workCreateArgs} args - Arguments to create a Work.
     * @example
     * // Create one Work
     * const Work = await prisma.work.create({
     *   data: {
     *     // ... data to create a Work
     *   }
     * })
     * 
     */
    create<T extends workCreateArgs>(args: SelectSubset<T, workCreateArgs<ExtArgs>>): Prisma__workClient<$Result.GetResult<Prisma.$workPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Works.
     * @param {workCreateManyArgs} args - Arguments to create many Works.
     * @example
     * // Create many Works
     * const work = await prisma.work.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends workCreateManyArgs>(args?: SelectSubset<T, workCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Work.
     * @param {workDeleteArgs} args - Arguments to delete one Work.
     * @example
     * // Delete one Work
     * const Work = await prisma.work.delete({
     *   where: {
     *     // ... filter to delete one Work
     *   }
     * })
     * 
     */
    delete<T extends workDeleteArgs>(args: SelectSubset<T, workDeleteArgs<ExtArgs>>): Prisma__workClient<$Result.GetResult<Prisma.$workPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Work.
     * @param {workUpdateArgs} args - Arguments to update one Work.
     * @example
     * // Update one Work
     * const work = await prisma.work.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends workUpdateArgs>(args: SelectSubset<T, workUpdateArgs<ExtArgs>>): Prisma__workClient<$Result.GetResult<Prisma.$workPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Works.
     * @param {workDeleteManyArgs} args - Arguments to filter Works to delete.
     * @example
     * // Delete a few Works
     * const { count } = await prisma.work.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends workDeleteManyArgs>(args?: SelectSubset<T, workDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Works.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Works
     * const work = await prisma.work.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends workUpdateManyArgs>(args: SelectSubset<T, workUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Work.
     * @param {workUpsertArgs} args - Arguments to update or create a Work.
     * @example
     * // Update or create a Work
     * const work = await prisma.work.upsert({
     *   create: {
     *     // ... data to create a Work
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Work we want to update
     *   }
     * })
     */
    upsert<T extends workUpsertArgs>(args: SelectSubset<T, workUpsertArgs<ExtArgs>>): Prisma__workClient<$Result.GetResult<Prisma.$workPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Works.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workCountArgs} args - Arguments to filter Works to count.
     * @example
     * // Count the number of Works
     * const count = await prisma.work.count({
     *   where: {
     *     // ... the filter for the Works we want to count
     *   }
     * })
    **/
    count<T extends workCountArgs>(
      args?: Subset<T, workCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Work.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkAggregateArgs>(args: Subset<T, WorkAggregateArgs>): Prisma.PrismaPromise<GetWorkAggregateType<T>>

    /**
     * Group by Work.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends workGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: workGroupByArgs['orderBy'] }
        : { orderBy?: workGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, workGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the work model
   */
  readonly fields: workFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for work.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__workClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assignment<T extends work$assignmentArgs<ExtArgs> = {}>(args?: Subset<T, work$assignmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$assignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    project<T extends projectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, projectDefaultArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    workapplication<T extends work$workapplicationArgs<ExtArgs> = {}>(args?: Subset<T, work$workapplicationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workapplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the work model
   */
  interface workFieldRefs {
    readonly work_id: FieldRef<"work", 'Int'>
    readonly project_id: FieldRef<"work", 'Int'>
    readonly project_role: FieldRef<"work", 'String'>
    readonly role_category: FieldRef<"work", 'work_role_category'>
    readonly expected_salary: FieldRef<"work", 'Decimal'>
    readonly is_open_pool: FieldRef<"work", 'Boolean'>
    readonly work_description: FieldRef<"work", 'String'>
    readonly work_start_date: FieldRef<"work", 'DateTime'>
    readonly work_start_time: FieldRef<"work", 'DateTime'>
    readonly work_end_time: FieldRef<"work", 'DateTime'>
    readonly work_status: FieldRef<"work", 'work_work_status'>
  }
    

  // Custom InputTypes
  /**
   * work findUnique
   */
  export type workFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work
     */
    select?: workSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work
     */
    omit?: workOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workInclude<ExtArgs> | null
    /**
     * Filter, which work to fetch.
     */
    where: workWhereUniqueInput
  }

  /**
   * work findUniqueOrThrow
   */
  export type workFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work
     */
    select?: workSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work
     */
    omit?: workOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workInclude<ExtArgs> | null
    /**
     * Filter, which work to fetch.
     */
    where: workWhereUniqueInput
  }

  /**
   * work findFirst
   */
  export type workFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work
     */
    select?: workSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work
     */
    omit?: workOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workInclude<ExtArgs> | null
    /**
     * Filter, which work to fetch.
     */
    where?: workWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of works to fetch.
     */
    orderBy?: workOrderByWithRelationInput | workOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for works.
     */
    cursor?: workWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` works from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` works.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of works.
     */
    distinct?: WorkScalarFieldEnum | WorkScalarFieldEnum[]
  }

  /**
   * work findFirstOrThrow
   */
  export type workFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work
     */
    select?: workSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work
     */
    omit?: workOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workInclude<ExtArgs> | null
    /**
     * Filter, which work to fetch.
     */
    where?: workWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of works to fetch.
     */
    orderBy?: workOrderByWithRelationInput | workOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for works.
     */
    cursor?: workWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` works from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` works.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of works.
     */
    distinct?: WorkScalarFieldEnum | WorkScalarFieldEnum[]
  }

  /**
   * work findMany
   */
  export type workFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work
     */
    select?: workSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work
     */
    omit?: workOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workInclude<ExtArgs> | null
    /**
     * Filter, which works to fetch.
     */
    where?: workWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of works to fetch.
     */
    orderBy?: workOrderByWithRelationInput | workOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing works.
     */
    cursor?: workWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` works from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` works.
     */
    skip?: number
    distinct?: WorkScalarFieldEnum | WorkScalarFieldEnum[]
  }

  /**
   * work create
   */
  export type workCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work
     */
    select?: workSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work
     */
    omit?: workOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workInclude<ExtArgs> | null
    /**
     * The data needed to create a work.
     */
    data: XOR<workCreateInput, workUncheckedCreateInput>
  }

  /**
   * work createMany
   */
  export type workCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many works.
     */
    data: workCreateManyInput | workCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * work update
   */
  export type workUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work
     */
    select?: workSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work
     */
    omit?: workOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workInclude<ExtArgs> | null
    /**
     * The data needed to update a work.
     */
    data: XOR<workUpdateInput, workUncheckedUpdateInput>
    /**
     * Choose, which work to update.
     */
    where: workWhereUniqueInput
  }

  /**
   * work updateMany
   */
  export type workUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update works.
     */
    data: XOR<workUpdateManyMutationInput, workUncheckedUpdateManyInput>
    /**
     * Filter which works to update
     */
    where?: workWhereInput
    /**
     * Limit how many works to update.
     */
    limit?: number
  }

  /**
   * work upsert
   */
  export type workUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work
     */
    select?: workSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work
     */
    omit?: workOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workInclude<ExtArgs> | null
    /**
     * The filter to search for the work to update in case it exists.
     */
    where: workWhereUniqueInput
    /**
     * In case the work found by the `where` argument doesn't exist, create a new work with this data.
     */
    create: XOR<workCreateInput, workUncheckedCreateInput>
    /**
     * In case the work was found with the provided `where` argument, update it with this data.
     */
    update: XOR<workUpdateInput, workUncheckedUpdateInput>
  }

  /**
   * work delete
   */
  export type workDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work
     */
    select?: workSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work
     */
    omit?: workOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workInclude<ExtArgs> | null
    /**
     * Filter which work to delete.
     */
    where: workWhereUniqueInput
  }

  /**
   * work deleteMany
   */
  export type workDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which works to delete
     */
    where?: workWhereInput
    /**
     * Limit how many works to delete.
     */
    limit?: number
  }

  /**
   * work.assignment
   */
  export type work$assignmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignment
     */
    select?: assignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assignment
     */
    omit?: assignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assignmentInclude<ExtArgs> | null
    where?: assignmentWhereInput
    orderBy?: assignmentOrderByWithRelationInput | assignmentOrderByWithRelationInput[]
    cursor?: assignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * work.workapplication
   */
  export type work$workapplicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workapplication
     */
    select?: workapplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workapplication
     */
    omit?: workapplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workapplicationInclude<ExtArgs> | null
    where?: workapplicationWhereInput
    orderBy?: workapplicationOrderByWithRelationInput | workapplicationOrderByWithRelationInput[]
    cursor?: workapplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkapplicationScalarFieldEnum | WorkapplicationScalarFieldEnum[]
  }

  /**
   * work without action
   */
  export type workDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work
     */
    select?: workSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work
     */
    omit?: workOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workInclude<ExtArgs> | null
  }


  /**
   * Model workapplication
   */

  export type AggregateWorkapplication = {
    _count: WorkapplicationCountAggregateOutputType | null
    _avg: WorkapplicationAvgAggregateOutputType | null
    _sum: WorkapplicationSumAggregateOutputType | null
    _min: WorkapplicationMinAggregateOutputType | null
    _max: WorkapplicationMaxAggregateOutputType | null
  }

  export type WorkapplicationAvgAggregateOutputType = {
    application_id: number | null
    work_id: number | null
    user_id: number | null
  }

  export type WorkapplicationSumAggregateOutputType = {
    application_id: number | null
    work_id: number | null
    user_id: number | null
  }

  export type WorkapplicationMinAggregateOutputType = {
    application_id: number | null
    work_id: number | null
    user_id: number | null
    application_status: $Enums.workapplication_application_status | null
  }

  export type WorkapplicationMaxAggregateOutputType = {
    application_id: number | null
    work_id: number | null
    user_id: number | null
    application_status: $Enums.workapplication_application_status | null
  }

  export type WorkapplicationCountAggregateOutputType = {
    application_id: number
    work_id: number
    user_id: number
    application_status: number
    _all: number
  }


  export type WorkapplicationAvgAggregateInputType = {
    application_id?: true
    work_id?: true
    user_id?: true
  }

  export type WorkapplicationSumAggregateInputType = {
    application_id?: true
    work_id?: true
    user_id?: true
  }

  export type WorkapplicationMinAggregateInputType = {
    application_id?: true
    work_id?: true
    user_id?: true
    application_status?: true
  }

  export type WorkapplicationMaxAggregateInputType = {
    application_id?: true
    work_id?: true
    user_id?: true
    application_status?: true
  }

  export type WorkapplicationCountAggregateInputType = {
    application_id?: true
    work_id?: true
    user_id?: true
    application_status?: true
    _all?: true
  }

  export type WorkapplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which workapplication to aggregate.
     */
    where?: workapplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workapplications to fetch.
     */
    orderBy?: workapplicationOrderByWithRelationInput | workapplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: workapplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workapplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workapplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned workapplications
    **/
    _count?: true | WorkapplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkapplicationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkapplicationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkapplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkapplicationMaxAggregateInputType
  }

  export type GetWorkapplicationAggregateType<T extends WorkapplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkapplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkapplication[P]>
      : GetScalarType<T[P], AggregateWorkapplication[P]>
  }




  export type workapplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workapplicationWhereInput
    orderBy?: workapplicationOrderByWithAggregationInput | workapplicationOrderByWithAggregationInput[]
    by: WorkapplicationScalarFieldEnum[] | WorkapplicationScalarFieldEnum
    having?: workapplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkapplicationCountAggregateInputType | true
    _avg?: WorkapplicationAvgAggregateInputType
    _sum?: WorkapplicationSumAggregateInputType
    _min?: WorkapplicationMinAggregateInputType
    _max?: WorkapplicationMaxAggregateInputType
  }

  export type WorkapplicationGroupByOutputType = {
    application_id: number
    work_id: number
    user_id: number
    application_status: $Enums.workapplication_application_status
    _count: WorkapplicationCountAggregateOutputType | null
    _avg: WorkapplicationAvgAggregateOutputType | null
    _sum: WorkapplicationSumAggregateOutputType | null
    _min: WorkapplicationMinAggregateOutputType | null
    _max: WorkapplicationMaxAggregateOutputType | null
  }

  type GetWorkapplicationGroupByPayload<T extends workapplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkapplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkapplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkapplicationGroupByOutputType[P]>
            : GetScalarType<T[P], WorkapplicationGroupByOutputType[P]>
        }
      >
    >


  export type workapplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    application_id?: boolean
    work_id?: boolean
    user_id?: boolean
    application_status?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    work?: boolean | workDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workapplication"]>



  export type workapplicationSelectScalar = {
    application_id?: boolean
    work_id?: boolean
    user_id?: boolean
    application_status?: boolean
  }

  export type workapplicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"application_id" | "work_id" | "user_id" | "application_status", ExtArgs["result"]["workapplication"]>
  export type workapplicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    work?: boolean | workDefaultArgs<ExtArgs>
  }

  export type $workapplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "workapplication"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      work: Prisma.$workPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      application_id: number
      work_id: number
      user_id: number
      application_status: $Enums.workapplication_application_status
    }, ExtArgs["result"]["workapplication"]>
    composites: {}
  }

  type workapplicationGetPayload<S extends boolean | null | undefined | workapplicationDefaultArgs> = $Result.GetResult<Prisma.$workapplicationPayload, S>

  type workapplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<workapplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkapplicationCountAggregateInputType | true
    }

  export interface workapplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['workapplication'], meta: { name: 'workapplication' } }
    /**
     * Find zero or one Workapplication that matches the filter.
     * @param {workapplicationFindUniqueArgs} args - Arguments to find a Workapplication
     * @example
     * // Get one Workapplication
     * const workapplication = await prisma.workapplication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends workapplicationFindUniqueArgs>(args: SelectSubset<T, workapplicationFindUniqueArgs<ExtArgs>>): Prisma__workapplicationClient<$Result.GetResult<Prisma.$workapplicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Workapplication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {workapplicationFindUniqueOrThrowArgs} args - Arguments to find a Workapplication
     * @example
     * // Get one Workapplication
     * const workapplication = await prisma.workapplication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends workapplicationFindUniqueOrThrowArgs>(args: SelectSubset<T, workapplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__workapplicationClient<$Result.GetResult<Prisma.$workapplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workapplication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workapplicationFindFirstArgs} args - Arguments to find a Workapplication
     * @example
     * // Get one Workapplication
     * const workapplication = await prisma.workapplication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends workapplicationFindFirstArgs>(args?: SelectSubset<T, workapplicationFindFirstArgs<ExtArgs>>): Prisma__workapplicationClient<$Result.GetResult<Prisma.$workapplicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workapplication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workapplicationFindFirstOrThrowArgs} args - Arguments to find a Workapplication
     * @example
     * // Get one Workapplication
     * const workapplication = await prisma.workapplication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends workapplicationFindFirstOrThrowArgs>(args?: SelectSubset<T, workapplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__workapplicationClient<$Result.GetResult<Prisma.$workapplicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Workapplications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workapplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workapplications
     * const workapplications = await prisma.workapplication.findMany()
     * 
     * // Get first 10 Workapplications
     * const workapplications = await prisma.workapplication.findMany({ take: 10 })
     * 
     * // Only select the `application_id`
     * const workapplicationWithApplication_idOnly = await prisma.workapplication.findMany({ select: { application_id: true } })
     * 
     */
    findMany<T extends workapplicationFindManyArgs>(args?: SelectSubset<T, workapplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workapplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Workapplication.
     * @param {workapplicationCreateArgs} args - Arguments to create a Workapplication.
     * @example
     * // Create one Workapplication
     * const Workapplication = await prisma.workapplication.create({
     *   data: {
     *     // ... data to create a Workapplication
     *   }
     * })
     * 
     */
    create<T extends workapplicationCreateArgs>(args: SelectSubset<T, workapplicationCreateArgs<ExtArgs>>): Prisma__workapplicationClient<$Result.GetResult<Prisma.$workapplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Workapplications.
     * @param {workapplicationCreateManyArgs} args - Arguments to create many Workapplications.
     * @example
     * // Create many Workapplications
     * const workapplication = await prisma.workapplication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends workapplicationCreateManyArgs>(args?: SelectSubset<T, workapplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Workapplication.
     * @param {workapplicationDeleteArgs} args - Arguments to delete one Workapplication.
     * @example
     * // Delete one Workapplication
     * const Workapplication = await prisma.workapplication.delete({
     *   where: {
     *     // ... filter to delete one Workapplication
     *   }
     * })
     * 
     */
    delete<T extends workapplicationDeleteArgs>(args: SelectSubset<T, workapplicationDeleteArgs<ExtArgs>>): Prisma__workapplicationClient<$Result.GetResult<Prisma.$workapplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Workapplication.
     * @param {workapplicationUpdateArgs} args - Arguments to update one Workapplication.
     * @example
     * // Update one Workapplication
     * const workapplication = await prisma.workapplication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends workapplicationUpdateArgs>(args: SelectSubset<T, workapplicationUpdateArgs<ExtArgs>>): Prisma__workapplicationClient<$Result.GetResult<Prisma.$workapplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Workapplications.
     * @param {workapplicationDeleteManyArgs} args - Arguments to filter Workapplications to delete.
     * @example
     * // Delete a few Workapplications
     * const { count } = await prisma.workapplication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends workapplicationDeleteManyArgs>(args?: SelectSubset<T, workapplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workapplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workapplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workapplications
     * const workapplication = await prisma.workapplication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends workapplicationUpdateManyArgs>(args: SelectSubset<T, workapplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Workapplication.
     * @param {workapplicationUpsertArgs} args - Arguments to update or create a Workapplication.
     * @example
     * // Update or create a Workapplication
     * const workapplication = await prisma.workapplication.upsert({
     *   create: {
     *     // ... data to create a Workapplication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workapplication we want to update
     *   }
     * })
     */
    upsert<T extends workapplicationUpsertArgs>(args: SelectSubset<T, workapplicationUpsertArgs<ExtArgs>>): Prisma__workapplicationClient<$Result.GetResult<Prisma.$workapplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Workapplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workapplicationCountArgs} args - Arguments to filter Workapplications to count.
     * @example
     * // Count the number of Workapplications
     * const count = await prisma.workapplication.count({
     *   where: {
     *     // ... the filter for the Workapplications we want to count
     *   }
     * })
    **/
    count<T extends workapplicationCountArgs>(
      args?: Subset<T, workapplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkapplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workapplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkapplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkapplicationAggregateArgs>(args: Subset<T, WorkapplicationAggregateArgs>): Prisma.PrismaPromise<GetWorkapplicationAggregateType<T>>

    /**
     * Group by Workapplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workapplicationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends workapplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: workapplicationGroupByArgs['orderBy'] }
        : { orderBy?: workapplicationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, workapplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkapplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the workapplication model
   */
  readonly fields: workapplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for workapplication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__workapplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    work<T extends workDefaultArgs<ExtArgs> = {}>(args?: Subset<T, workDefaultArgs<ExtArgs>>): Prisma__workClient<$Result.GetResult<Prisma.$workPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the workapplication model
   */
  interface workapplicationFieldRefs {
    readonly application_id: FieldRef<"workapplication", 'Int'>
    readonly work_id: FieldRef<"workapplication", 'Int'>
    readonly user_id: FieldRef<"workapplication", 'Int'>
    readonly application_status: FieldRef<"workapplication", 'workapplication_application_status'>
  }
    

  // Custom InputTypes
  /**
   * workapplication findUnique
   */
  export type workapplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workapplication
     */
    select?: workapplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workapplication
     */
    omit?: workapplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workapplicationInclude<ExtArgs> | null
    /**
     * Filter, which workapplication to fetch.
     */
    where: workapplicationWhereUniqueInput
  }

  /**
   * workapplication findUniqueOrThrow
   */
  export type workapplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workapplication
     */
    select?: workapplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workapplication
     */
    omit?: workapplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workapplicationInclude<ExtArgs> | null
    /**
     * Filter, which workapplication to fetch.
     */
    where: workapplicationWhereUniqueInput
  }

  /**
   * workapplication findFirst
   */
  export type workapplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workapplication
     */
    select?: workapplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workapplication
     */
    omit?: workapplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workapplicationInclude<ExtArgs> | null
    /**
     * Filter, which workapplication to fetch.
     */
    where?: workapplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workapplications to fetch.
     */
    orderBy?: workapplicationOrderByWithRelationInput | workapplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for workapplications.
     */
    cursor?: workapplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workapplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workapplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workapplications.
     */
    distinct?: WorkapplicationScalarFieldEnum | WorkapplicationScalarFieldEnum[]
  }

  /**
   * workapplication findFirstOrThrow
   */
  export type workapplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workapplication
     */
    select?: workapplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workapplication
     */
    omit?: workapplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workapplicationInclude<ExtArgs> | null
    /**
     * Filter, which workapplication to fetch.
     */
    where?: workapplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workapplications to fetch.
     */
    orderBy?: workapplicationOrderByWithRelationInput | workapplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for workapplications.
     */
    cursor?: workapplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workapplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workapplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workapplications.
     */
    distinct?: WorkapplicationScalarFieldEnum | WorkapplicationScalarFieldEnum[]
  }

  /**
   * workapplication findMany
   */
  export type workapplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workapplication
     */
    select?: workapplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workapplication
     */
    omit?: workapplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workapplicationInclude<ExtArgs> | null
    /**
     * Filter, which workapplications to fetch.
     */
    where?: workapplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workapplications to fetch.
     */
    orderBy?: workapplicationOrderByWithRelationInput | workapplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing workapplications.
     */
    cursor?: workapplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workapplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workapplications.
     */
    skip?: number
    distinct?: WorkapplicationScalarFieldEnum | WorkapplicationScalarFieldEnum[]
  }

  /**
   * workapplication create
   */
  export type workapplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workapplication
     */
    select?: workapplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workapplication
     */
    omit?: workapplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workapplicationInclude<ExtArgs> | null
    /**
     * The data needed to create a workapplication.
     */
    data: XOR<workapplicationCreateInput, workapplicationUncheckedCreateInput>
  }

  /**
   * workapplication createMany
   */
  export type workapplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many workapplications.
     */
    data: workapplicationCreateManyInput | workapplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * workapplication update
   */
  export type workapplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workapplication
     */
    select?: workapplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workapplication
     */
    omit?: workapplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workapplicationInclude<ExtArgs> | null
    /**
     * The data needed to update a workapplication.
     */
    data: XOR<workapplicationUpdateInput, workapplicationUncheckedUpdateInput>
    /**
     * Choose, which workapplication to update.
     */
    where: workapplicationWhereUniqueInput
  }

  /**
   * workapplication updateMany
   */
  export type workapplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update workapplications.
     */
    data: XOR<workapplicationUpdateManyMutationInput, workapplicationUncheckedUpdateManyInput>
    /**
     * Filter which workapplications to update
     */
    where?: workapplicationWhereInput
    /**
     * Limit how many workapplications to update.
     */
    limit?: number
  }

  /**
   * workapplication upsert
   */
  export type workapplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workapplication
     */
    select?: workapplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workapplication
     */
    omit?: workapplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workapplicationInclude<ExtArgs> | null
    /**
     * The filter to search for the workapplication to update in case it exists.
     */
    where: workapplicationWhereUniqueInput
    /**
     * In case the workapplication found by the `where` argument doesn't exist, create a new workapplication with this data.
     */
    create: XOR<workapplicationCreateInput, workapplicationUncheckedCreateInput>
    /**
     * In case the workapplication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<workapplicationUpdateInput, workapplicationUncheckedUpdateInput>
  }

  /**
   * workapplication delete
   */
  export type workapplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workapplication
     */
    select?: workapplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workapplication
     */
    omit?: workapplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workapplicationInclude<ExtArgs> | null
    /**
     * Filter which workapplication to delete.
     */
    where: workapplicationWhereUniqueInput
  }

  /**
   * workapplication deleteMany
   */
  export type workapplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which workapplications to delete
     */
    where?: workapplicationWhereInput
    /**
     * Limit how many workapplications to delete.
     */
    limit?: number
  }

  /**
   * workapplication without action
   */
  export type workapplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workapplication
     */
    select?: workapplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workapplication
     */
    omit?: workapplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workapplicationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AssignmentScalarFieldEnum: {
    assignment_id: 'assignment_id',
    work_id: 'work_id',
    user_id: 'user_id',
    outsider_name: 'outsider_name',
    assignment_status: 'assignment_status',
    withdrawal_reason: 'withdrawal_reason'
  };

  export type AssignmentScalarFieldEnum = (typeof AssignmentScalarFieldEnum)[keyof typeof AssignmentScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    project_id: 'project_id',
    project_name: 'project_name',
    client_name: 'client_name',
    project_location: 'project_location',
    project_description: 'project_description',
    project_start_date: 'project_start_date',
    project_end_date: 'project_end_date',
    project_status: 'project_status'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const TagScalarFieldEnum: {
    tag_id: 'tag_id',
    tag_name: 'tag_name',
    color_hex: 'color_hex'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    task_id: 'task_id',
    user_id: 'user_id',
    task_title: 'task_title',
    task_desc: 'task_desc',
    due_date: 'due_date',
    is_completed: 'is_completed'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const TasktagScalarFieldEnum: {
    task_tag_id: 'task_tag_id',
    task_id: 'task_id',
    tag_id: 'tag_id'
  };

  export type TasktagScalarFieldEnum = (typeof TasktagScalarFieldEnum)[keyof typeof TasktagScalarFieldEnum]


  export const UserScalarFieldEnum: {
    user_id: 'user_id',
    email: 'email',
    google_id: 'google_id',
    full_name: 'full_name',
    avatar_url: 'avatar_url',
    user_type: 'user_type',
    created_at: 'created_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserprofileScalarFieldEnum: {
    profile_id: 'profile_id',
    user_id: 'user_id',
    primary_role: 'primary_role',
    secondary_role: 'secondary_role',
    reliability_score: 'reliability_score',
    is_setup_complete: 'is_setup_complete'
  };

  export type UserprofileScalarFieldEnum = (typeof UserprofileScalarFieldEnum)[keyof typeof UserprofileScalarFieldEnum]


  export const WorkScalarFieldEnum: {
    work_id: 'work_id',
    project_id: 'project_id',
    project_role: 'project_role',
    role_category: 'role_category',
    expected_salary: 'expected_salary',
    is_open_pool: 'is_open_pool',
    work_description: 'work_description',
    work_start_date: 'work_start_date',
    work_start_time: 'work_start_time',
    work_end_time: 'work_end_time',
    work_status: 'work_status'
  };

  export type WorkScalarFieldEnum = (typeof WorkScalarFieldEnum)[keyof typeof WorkScalarFieldEnum]


  export const WorkapplicationScalarFieldEnum: {
    application_id: 'application_id',
    work_id: 'work_id',
    user_id: 'user_id',
    application_status: 'application_status'
  };

  export type WorkapplicationScalarFieldEnum = (typeof WorkapplicationScalarFieldEnum)[keyof typeof WorkapplicationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const assignmentOrderByRelevanceFieldEnum: {
    outsider_name: 'outsider_name',
    withdrawal_reason: 'withdrawal_reason'
  };

  export type assignmentOrderByRelevanceFieldEnum = (typeof assignmentOrderByRelevanceFieldEnum)[keyof typeof assignmentOrderByRelevanceFieldEnum]


  export const projectOrderByRelevanceFieldEnum: {
    project_name: 'project_name',
    client_name: 'client_name',
    project_location: 'project_location',
    project_description: 'project_description'
  };

  export type projectOrderByRelevanceFieldEnum = (typeof projectOrderByRelevanceFieldEnum)[keyof typeof projectOrderByRelevanceFieldEnum]


  export const tagOrderByRelevanceFieldEnum: {
    tag_name: 'tag_name',
    color_hex: 'color_hex'
  };

  export type tagOrderByRelevanceFieldEnum = (typeof tagOrderByRelevanceFieldEnum)[keyof typeof tagOrderByRelevanceFieldEnum]


  export const taskOrderByRelevanceFieldEnum: {
    task_title: 'task_title',
    task_desc: 'task_desc'
  };

  export type taskOrderByRelevanceFieldEnum = (typeof taskOrderByRelevanceFieldEnum)[keyof typeof taskOrderByRelevanceFieldEnum]


  export const userOrderByRelevanceFieldEnum: {
    email: 'email',
    google_id: 'google_id',
    full_name: 'full_name',
    avatar_url: 'avatar_url'
  };

  export type userOrderByRelevanceFieldEnum = (typeof userOrderByRelevanceFieldEnum)[keyof typeof userOrderByRelevanceFieldEnum]


  export const workOrderByRelevanceFieldEnum: {
    project_role: 'project_role',
    work_description: 'work_description'
  };

  export type workOrderByRelevanceFieldEnum = (typeof workOrderByRelevanceFieldEnum)[keyof typeof workOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'assignment_assignment_status'
   */
  export type Enumassignment_assignment_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'assignment_assignment_status'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'project_project_status'
   */
  export type Enumproject_project_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'project_project_status'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'user_user_type'
   */
  export type Enumuser_user_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_user_type'>
    


  /**
   * Reference to a field of type 'userprofile_primary_role'
   */
  export type Enumuserprofile_primary_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'userprofile_primary_role'>
    


  /**
   * Reference to a field of type 'userprofile_secondary_role'
   */
  export type Enumuserprofile_secondary_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'userprofile_secondary_role'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'work_role_category'
   */
  export type Enumwork_role_categoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'work_role_category'>
    


  /**
   * Reference to a field of type 'work_work_status'
   */
  export type Enumwork_work_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'work_work_status'>
    


  /**
   * Reference to a field of type 'workapplication_application_status'
   */
  export type Enumworkapplication_application_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'workapplication_application_status'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type assignmentWhereInput = {
    AND?: assignmentWhereInput | assignmentWhereInput[]
    OR?: assignmentWhereInput[]
    NOT?: assignmentWhereInput | assignmentWhereInput[]
    assignment_id?: IntFilter<"assignment"> | number
    work_id?: IntFilter<"assignment"> | number
    user_id?: IntNullableFilter<"assignment"> | number | null
    outsider_name?: StringNullableFilter<"assignment"> | string | null
    assignment_status?: Enumassignment_assignment_statusFilter<"assignment"> | $Enums.assignment_assignment_status
    withdrawal_reason?: StringNullableFilter<"assignment"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
    work?: XOR<WorkScalarRelationFilter, workWhereInput>
  }

  export type assignmentOrderByWithRelationInput = {
    assignment_id?: SortOrder
    work_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    outsider_name?: SortOrderInput | SortOrder
    assignment_status?: SortOrder
    withdrawal_reason?: SortOrderInput | SortOrder
    user?: userOrderByWithRelationInput
    work?: workOrderByWithRelationInput
    _relevance?: assignmentOrderByRelevanceInput
  }

  export type assignmentWhereUniqueInput = Prisma.AtLeast<{
    assignment_id?: number
    AND?: assignmentWhereInput | assignmentWhereInput[]
    OR?: assignmentWhereInput[]
    NOT?: assignmentWhereInput | assignmentWhereInput[]
    work_id?: IntFilter<"assignment"> | number
    user_id?: IntNullableFilter<"assignment"> | number | null
    outsider_name?: StringNullableFilter<"assignment"> | string | null
    assignment_status?: Enumassignment_assignment_statusFilter<"assignment"> | $Enums.assignment_assignment_status
    withdrawal_reason?: StringNullableFilter<"assignment"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
    work?: XOR<WorkScalarRelationFilter, workWhereInput>
  }, "assignment_id">

  export type assignmentOrderByWithAggregationInput = {
    assignment_id?: SortOrder
    work_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    outsider_name?: SortOrderInput | SortOrder
    assignment_status?: SortOrder
    withdrawal_reason?: SortOrderInput | SortOrder
    _count?: assignmentCountOrderByAggregateInput
    _avg?: assignmentAvgOrderByAggregateInput
    _max?: assignmentMaxOrderByAggregateInput
    _min?: assignmentMinOrderByAggregateInput
    _sum?: assignmentSumOrderByAggregateInput
  }

  export type assignmentScalarWhereWithAggregatesInput = {
    AND?: assignmentScalarWhereWithAggregatesInput | assignmentScalarWhereWithAggregatesInput[]
    OR?: assignmentScalarWhereWithAggregatesInput[]
    NOT?: assignmentScalarWhereWithAggregatesInput | assignmentScalarWhereWithAggregatesInput[]
    assignment_id?: IntWithAggregatesFilter<"assignment"> | number
    work_id?: IntWithAggregatesFilter<"assignment"> | number
    user_id?: IntNullableWithAggregatesFilter<"assignment"> | number | null
    outsider_name?: StringNullableWithAggregatesFilter<"assignment"> | string | null
    assignment_status?: Enumassignment_assignment_statusWithAggregatesFilter<"assignment"> | $Enums.assignment_assignment_status
    withdrawal_reason?: StringNullableWithAggregatesFilter<"assignment"> | string | null
  }

  export type projectWhereInput = {
    AND?: projectWhereInput | projectWhereInput[]
    OR?: projectWhereInput[]
    NOT?: projectWhereInput | projectWhereInput[]
    project_id?: IntFilter<"project"> | number
    project_name?: StringFilter<"project"> | string
    client_name?: StringFilter<"project"> | string
    project_location?: StringFilter<"project"> | string
    project_description?: StringFilter<"project"> | string
    project_start_date?: DateTimeFilter<"project"> | Date | string
    project_end_date?: DateTimeFilter<"project"> | Date | string
    project_status?: Enumproject_project_statusFilter<"project"> | $Enums.project_project_status
    work?: WorkListRelationFilter
  }

  export type projectOrderByWithRelationInput = {
    project_id?: SortOrder
    project_name?: SortOrder
    client_name?: SortOrder
    project_location?: SortOrder
    project_description?: SortOrder
    project_start_date?: SortOrder
    project_end_date?: SortOrder
    project_status?: SortOrder
    work?: workOrderByRelationAggregateInput
    _relevance?: projectOrderByRelevanceInput
  }

  export type projectWhereUniqueInput = Prisma.AtLeast<{
    project_id?: number
    AND?: projectWhereInput | projectWhereInput[]
    OR?: projectWhereInput[]
    NOT?: projectWhereInput | projectWhereInput[]
    project_name?: StringFilter<"project"> | string
    client_name?: StringFilter<"project"> | string
    project_location?: StringFilter<"project"> | string
    project_description?: StringFilter<"project"> | string
    project_start_date?: DateTimeFilter<"project"> | Date | string
    project_end_date?: DateTimeFilter<"project"> | Date | string
    project_status?: Enumproject_project_statusFilter<"project"> | $Enums.project_project_status
    work?: WorkListRelationFilter
  }, "project_id">

  export type projectOrderByWithAggregationInput = {
    project_id?: SortOrder
    project_name?: SortOrder
    client_name?: SortOrder
    project_location?: SortOrder
    project_description?: SortOrder
    project_start_date?: SortOrder
    project_end_date?: SortOrder
    project_status?: SortOrder
    _count?: projectCountOrderByAggregateInput
    _avg?: projectAvgOrderByAggregateInput
    _max?: projectMaxOrderByAggregateInput
    _min?: projectMinOrderByAggregateInput
    _sum?: projectSumOrderByAggregateInput
  }

  export type projectScalarWhereWithAggregatesInput = {
    AND?: projectScalarWhereWithAggregatesInput | projectScalarWhereWithAggregatesInput[]
    OR?: projectScalarWhereWithAggregatesInput[]
    NOT?: projectScalarWhereWithAggregatesInput | projectScalarWhereWithAggregatesInput[]
    project_id?: IntWithAggregatesFilter<"project"> | number
    project_name?: StringWithAggregatesFilter<"project"> | string
    client_name?: StringWithAggregatesFilter<"project"> | string
    project_location?: StringWithAggregatesFilter<"project"> | string
    project_description?: StringWithAggregatesFilter<"project"> | string
    project_start_date?: DateTimeWithAggregatesFilter<"project"> | Date | string
    project_end_date?: DateTimeWithAggregatesFilter<"project"> | Date | string
    project_status?: Enumproject_project_statusWithAggregatesFilter<"project"> | $Enums.project_project_status
  }

  export type tagWhereInput = {
    AND?: tagWhereInput | tagWhereInput[]
    OR?: tagWhereInput[]
    NOT?: tagWhereInput | tagWhereInput[]
    tag_id?: IntFilter<"tag"> | number
    tag_name?: StringFilter<"tag"> | string
    color_hex?: StringFilter<"tag"> | string
    tasktag?: TasktagListRelationFilter
  }

  export type tagOrderByWithRelationInput = {
    tag_id?: SortOrder
    tag_name?: SortOrder
    color_hex?: SortOrder
    tasktag?: tasktagOrderByRelationAggregateInput
    _relevance?: tagOrderByRelevanceInput
  }

  export type tagWhereUniqueInput = Prisma.AtLeast<{
    tag_id?: number
    tag_name?: string
    AND?: tagWhereInput | tagWhereInput[]
    OR?: tagWhereInput[]
    NOT?: tagWhereInput | tagWhereInput[]
    color_hex?: StringFilter<"tag"> | string
    tasktag?: TasktagListRelationFilter
  }, "tag_id" | "tag_name">

  export type tagOrderByWithAggregationInput = {
    tag_id?: SortOrder
    tag_name?: SortOrder
    color_hex?: SortOrder
    _count?: tagCountOrderByAggregateInput
    _avg?: tagAvgOrderByAggregateInput
    _max?: tagMaxOrderByAggregateInput
    _min?: tagMinOrderByAggregateInput
    _sum?: tagSumOrderByAggregateInput
  }

  export type tagScalarWhereWithAggregatesInput = {
    AND?: tagScalarWhereWithAggregatesInput | tagScalarWhereWithAggregatesInput[]
    OR?: tagScalarWhereWithAggregatesInput[]
    NOT?: tagScalarWhereWithAggregatesInput | tagScalarWhereWithAggregatesInput[]
    tag_id?: IntWithAggregatesFilter<"tag"> | number
    tag_name?: StringWithAggregatesFilter<"tag"> | string
    color_hex?: StringWithAggregatesFilter<"tag"> | string
  }

  export type taskWhereInput = {
    AND?: taskWhereInput | taskWhereInput[]
    OR?: taskWhereInput[]
    NOT?: taskWhereInput | taskWhereInput[]
    task_id?: IntFilter<"task"> | number
    user_id?: IntFilter<"task"> | number
    task_title?: StringFilter<"task"> | string
    task_desc?: StringNullableFilter<"task"> | string | null
    due_date?: DateTimeNullableFilter<"task"> | Date | string | null
    is_completed?: BoolFilter<"task"> | boolean
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    tasktag?: TasktagListRelationFilter
  }

  export type taskOrderByWithRelationInput = {
    task_id?: SortOrder
    user_id?: SortOrder
    task_title?: SortOrder
    task_desc?: SortOrderInput | SortOrder
    due_date?: SortOrderInput | SortOrder
    is_completed?: SortOrder
    user?: userOrderByWithRelationInput
    tasktag?: tasktagOrderByRelationAggregateInput
    _relevance?: taskOrderByRelevanceInput
  }

  export type taskWhereUniqueInput = Prisma.AtLeast<{
    task_id?: number
    AND?: taskWhereInput | taskWhereInput[]
    OR?: taskWhereInput[]
    NOT?: taskWhereInput | taskWhereInput[]
    user_id?: IntFilter<"task"> | number
    task_title?: StringFilter<"task"> | string
    task_desc?: StringNullableFilter<"task"> | string | null
    due_date?: DateTimeNullableFilter<"task"> | Date | string | null
    is_completed?: BoolFilter<"task"> | boolean
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    tasktag?: TasktagListRelationFilter
  }, "task_id">

  export type taskOrderByWithAggregationInput = {
    task_id?: SortOrder
    user_id?: SortOrder
    task_title?: SortOrder
    task_desc?: SortOrderInput | SortOrder
    due_date?: SortOrderInput | SortOrder
    is_completed?: SortOrder
    _count?: taskCountOrderByAggregateInput
    _avg?: taskAvgOrderByAggregateInput
    _max?: taskMaxOrderByAggregateInput
    _min?: taskMinOrderByAggregateInput
    _sum?: taskSumOrderByAggregateInput
  }

  export type taskScalarWhereWithAggregatesInput = {
    AND?: taskScalarWhereWithAggregatesInput | taskScalarWhereWithAggregatesInput[]
    OR?: taskScalarWhereWithAggregatesInput[]
    NOT?: taskScalarWhereWithAggregatesInput | taskScalarWhereWithAggregatesInput[]
    task_id?: IntWithAggregatesFilter<"task"> | number
    user_id?: IntWithAggregatesFilter<"task"> | number
    task_title?: StringWithAggregatesFilter<"task"> | string
    task_desc?: StringNullableWithAggregatesFilter<"task"> | string | null
    due_date?: DateTimeNullableWithAggregatesFilter<"task"> | Date | string | null
    is_completed?: BoolWithAggregatesFilter<"task"> | boolean
  }

  export type tasktagWhereInput = {
    AND?: tasktagWhereInput | tasktagWhereInput[]
    OR?: tasktagWhereInput[]
    NOT?: tasktagWhereInput | tasktagWhereInput[]
    task_tag_id?: IntFilter<"tasktag"> | number
    task_id?: IntFilter<"tasktag"> | number
    tag_id?: IntFilter<"tasktag"> | number
    tag?: XOR<TagScalarRelationFilter, tagWhereInput>
    task?: XOR<TaskScalarRelationFilter, taskWhereInput>
  }

  export type tasktagOrderByWithRelationInput = {
    task_tag_id?: SortOrder
    task_id?: SortOrder
    tag_id?: SortOrder
    tag?: tagOrderByWithRelationInput
    task?: taskOrderByWithRelationInput
  }

  export type tasktagWhereUniqueInput = Prisma.AtLeast<{
    task_tag_id?: number
    AND?: tasktagWhereInput | tasktagWhereInput[]
    OR?: tasktagWhereInput[]
    NOT?: tasktagWhereInput | tasktagWhereInput[]
    task_id?: IntFilter<"tasktag"> | number
    tag_id?: IntFilter<"tasktag"> | number
    tag?: XOR<TagScalarRelationFilter, tagWhereInput>
    task?: XOR<TaskScalarRelationFilter, taskWhereInput>
  }, "task_tag_id">

  export type tasktagOrderByWithAggregationInput = {
    task_tag_id?: SortOrder
    task_id?: SortOrder
    tag_id?: SortOrder
    _count?: tasktagCountOrderByAggregateInput
    _avg?: tasktagAvgOrderByAggregateInput
    _max?: tasktagMaxOrderByAggregateInput
    _min?: tasktagMinOrderByAggregateInput
    _sum?: tasktagSumOrderByAggregateInput
  }

  export type tasktagScalarWhereWithAggregatesInput = {
    AND?: tasktagScalarWhereWithAggregatesInput | tasktagScalarWhereWithAggregatesInput[]
    OR?: tasktagScalarWhereWithAggregatesInput[]
    NOT?: tasktagScalarWhereWithAggregatesInput | tasktagScalarWhereWithAggregatesInput[]
    task_tag_id?: IntWithAggregatesFilter<"tasktag"> | number
    task_id?: IntWithAggregatesFilter<"tasktag"> | number
    tag_id?: IntWithAggregatesFilter<"tasktag"> | number
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    user_id?: IntFilter<"user"> | number
    email?: StringFilter<"user"> | string
    google_id?: StringNullableFilter<"user"> | string | null
    full_name?: StringNullableFilter<"user"> | string | null
    avatar_url?: StringNullableFilter<"user"> | string | null
    user_type?: Enumuser_user_typeFilter<"user"> | $Enums.user_user_type
    created_at?: DateTimeFilter<"user"> | Date | string
    assignment?: AssignmentListRelationFilter
    task?: TaskListRelationFilter
    userprofile?: XOR<UserprofileNullableScalarRelationFilter, userprofileWhereInput> | null
    workapplication?: WorkapplicationListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    user_id?: SortOrder
    email?: SortOrder
    google_id?: SortOrderInput | SortOrder
    full_name?: SortOrderInput | SortOrder
    avatar_url?: SortOrderInput | SortOrder
    user_type?: SortOrder
    created_at?: SortOrder
    assignment?: assignmentOrderByRelationAggregateInput
    task?: taskOrderByRelationAggregateInput
    userprofile?: userprofileOrderByWithRelationInput
    workapplication?: workapplicationOrderByRelationAggregateInput
    _relevance?: userOrderByRelevanceInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    email?: string
    google_id?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    full_name?: StringNullableFilter<"user"> | string | null
    avatar_url?: StringNullableFilter<"user"> | string | null
    user_type?: Enumuser_user_typeFilter<"user"> | $Enums.user_user_type
    created_at?: DateTimeFilter<"user"> | Date | string
    assignment?: AssignmentListRelationFilter
    task?: TaskListRelationFilter
    userprofile?: XOR<UserprofileNullableScalarRelationFilter, userprofileWhereInput> | null
    workapplication?: WorkapplicationListRelationFilter
  }, "user_id" | "email" | "google_id">

  export type userOrderByWithAggregationInput = {
    user_id?: SortOrder
    email?: SortOrder
    google_id?: SortOrderInput | SortOrder
    full_name?: SortOrderInput | SortOrder
    avatar_url?: SortOrderInput | SortOrder
    user_type?: SortOrder
    created_at?: SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"user"> | number
    email?: StringWithAggregatesFilter<"user"> | string
    google_id?: StringNullableWithAggregatesFilter<"user"> | string | null
    full_name?: StringNullableWithAggregatesFilter<"user"> | string | null
    avatar_url?: StringNullableWithAggregatesFilter<"user"> | string | null
    user_type?: Enumuser_user_typeWithAggregatesFilter<"user"> | $Enums.user_user_type
    created_at?: DateTimeWithAggregatesFilter<"user"> | Date | string
  }

  export type userprofileWhereInput = {
    AND?: userprofileWhereInput | userprofileWhereInput[]
    OR?: userprofileWhereInput[]
    NOT?: userprofileWhereInput | userprofileWhereInput[]
    profile_id?: IntFilter<"userprofile"> | number
    user_id?: IntFilter<"userprofile"> | number
    primary_role?: Enumuserprofile_primary_roleFilter<"userprofile"> | $Enums.userprofile_primary_role
    secondary_role?: Enumuserprofile_secondary_roleNullableFilter<"userprofile"> | $Enums.userprofile_secondary_role | null
    reliability_score?: DecimalFilter<"userprofile"> | Decimal | DecimalJsLike | number | string
    is_setup_complete?: BoolFilter<"userprofile"> | boolean
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type userprofileOrderByWithRelationInput = {
    profile_id?: SortOrder
    user_id?: SortOrder
    primary_role?: SortOrder
    secondary_role?: SortOrderInput | SortOrder
    reliability_score?: SortOrder
    is_setup_complete?: SortOrder
    user?: userOrderByWithRelationInput
  }

  export type userprofileWhereUniqueInput = Prisma.AtLeast<{
    profile_id?: number
    user_id?: number
    AND?: userprofileWhereInput | userprofileWhereInput[]
    OR?: userprofileWhereInput[]
    NOT?: userprofileWhereInput | userprofileWhereInput[]
    primary_role?: Enumuserprofile_primary_roleFilter<"userprofile"> | $Enums.userprofile_primary_role
    secondary_role?: Enumuserprofile_secondary_roleNullableFilter<"userprofile"> | $Enums.userprofile_secondary_role | null
    reliability_score?: DecimalFilter<"userprofile"> | Decimal | DecimalJsLike | number | string
    is_setup_complete?: BoolFilter<"userprofile"> | boolean
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "profile_id" | "user_id">

  export type userprofileOrderByWithAggregationInput = {
    profile_id?: SortOrder
    user_id?: SortOrder
    primary_role?: SortOrder
    secondary_role?: SortOrderInput | SortOrder
    reliability_score?: SortOrder
    is_setup_complete?: SortOrder
    _count?: userprofileCountOrderByAggregateInput
    _avg?: userprofileAvgOrderByAggregateInput
    _max?: userprofileMaxOrderByAggregateInput
    _min?: userprofileMinOrderByAggregateInput
    _sum?: userprofileSumOrderByAggregateInput
  }

  export type userprofileScalarWhereWithAggregatesInput = {
    AND?: userprofileScalarWhereWithAggregatesInput | userprofileScalarWhereWithAggregatesInput[]
    OR?: userprofileScalarWhereWithAggregatesInput[]
    NOT?: userprofileScalarWhereWithAggregatesInput | userprofileScalarWhereWithAggregatesInput[]
    profile_id?: IntWithAggregatesFilter<"userprofile"> | number
    user_id?: IntWithAggregatesFilter<"userprofile"> | number
    primary_role?: Enumuserprofile_primary_roleWithAggregatesFilter<"userprofile"> | $Enums.userprofile_primary_role
    secondary_role?: Enumuserprofile_secondary_roleNullableWithAggregatesFilter<"userprofile"> | $Enums.userprofile_secondary_role | null
    reliability_score?: DecimalWithAggregatesFilter<"userprofile"> | Decimal | DecimalJsLike | number | string
    is_setup_complete?: BoolWithAggregatesFilter<"userprofile"> | boolean
  }

  export type workWhereInput = {
    AND?: workWhereInput | workWhereInput[]
    OR?: workWhereInput[]
    NOT?: workWhereInput | workWhereInput[]
    work_id?: IntFilter<"work"> | number
    project_id?: IntFilter<"work"> | number
    project_role?: StringFilter<"work"> | string
    role_category?: Enumwork_role_categoryFilter<"work"> | $Enums.work_role_category
    expected_salary?: DecimalFilter<"work"> | Decimal | DecimalJsLike | number | string
    is_open_pool?: BoolFilter<"work"> | boolean
    work_description?: StringFilter<"work"> | string
    work_start_date?: DateTimeFilter<"work"> | Date | string
    work_start_time?: DateTimeNullableFilter<"work"> | Date | string | null
    work_end_time?: DateTimeNullableFilter<"work"> | Date | string | null
    work_status?: Enumwork_work_statusFilter<"work"> | $Enums.work_work_status
    assignment?: AssignmentListRelationFilter
    project?: XOR<ProjectScalarRelationFilter, projectWhereInput>
    workapplication?: WorkapplicationListRelationFilter
  }

  export type workOrderByWithRelationInput = {
    work_id?: SortOrder
    project_id?: SortOrder
    project_role?: SortOrder
    role_category?: SortOrder
    expected_salary?: SortOrder
    is_open_pool?: SortOrder
    work_description?: SortOrder
    work_start_date?: SortOrder
    work_start_time?: SortOrderInput | SortOrder
    work_end_time?: SortOrderInput | SortOrder
    work_status?: SortOrder
    assignment?: assignmentOrderByRelationAggregateInput
    project?: projectOrderByWithRelationInput
    workapplication?: workapplicationOrderByRelationAggregateInput
    _relevance?: workOrderByRelevanceInput
  }

  export type workWhereUniqueInput = Prisma.AtLeast<{
    work_id?: number
    AND?: workWhereInput | workWhereInput[]
    OR?: workWhereInput[]
    NOT?: workWhereInput | workWhereInput[]
    project_id?: IntFilter<"work"> | number
    project_role?: StringFilter<"work"> | string
    role_category?: Enumwork_role_categoryFilter<"work"> | $Enums.work_role_category
    expected_salary?: DecimalFilter<"work"> | Decimal | DecimalJsLike | number | string
    is_open_pool?: BoolFilter<"work"> | boolean
    work_description?: StringFilter<"work"> | string
    work_start_date?: DateTimeFilter<"work"> | Date | string
    work_start_time?: DateTimeNullableFilter<"work"> | Date | string | null
    work_end_time?: DateTimeNullableFilter<"work"> | Date | string | null
    work_status?: Enumwork_work_statusFilter<"work"> | $Enums.work_work_status
    assignment?: AssignmentListRelationFilter
    project?: XOR<ProjectScalarRelationFilter, projectWhereInput>
    workapplication?: WorkapplicationListRelationFilter
  }, "work_id">

  export type workOrderByWithAggregationInput = {
    work_id?: SortOrder
    project_id?: SortOrder
    project_role?: SortOrder
    role_category?: SortOrder
    expected_salary?: SortOrder
    is_open_pool?: SortOrder
    work_description?: SortOrder
    work_start_date?: SortOrder
    work_start_time?: SortOrderInput | SortOrder
    work_end_time?: SortOrderInput | SortOrder
    work_status?: SortOrder
    _count?: workCountOrderByAggregateInput
    _avg?: workAvgOrderByAggregateInput
    _max?: workMaxOrderByAggregateInput
    _min?: workMinOrderByAggregateInput
    _sum?: workSumOrderByAggregateInput
  }

  export type workScalarWhereWithAggregatesInput = {
    AND?: workScalarWhereWithAggregatesInput | workScalarWhereWithAggregatesInput[]
    OR?: workScalarWhereWithAggregatesInput[]
    NOT?: workScalarWhereWithAggregatesInput | workScalarWhereWithAggregatesInput[]
    work_id?: IntWithAggregatesFilter<"work"> | number
    project_id?: IntWithAggregatesFilter<"work"> | number
    project_role?: StringWithAggregatesFilter<"work"> | string
    role_category?: Enumwork_role_categoryWithAggregatesFilter<"work"> | $Enums.work_role_category
    expected_salary?: DecimalWithAggregatesFilter<"work"> | Decimal | DecimalJsLike | number | string
    is_open_pool?: BoolWithAggregatesFilter<"work"> | boolean
    work_description?: StringWithAggregatesFilter<"work"> | string
    work_start_date?: DateTimeWithAggregatesFilter<"work"> | Date | string
    work_start_time?: DateTimeNullableWithAggregatesFilter<"work"> | Date | string | null
    work_end_time?: DateTimeNullableWithAggregatesFilter<"work"> | Date | string | null
    work_status?: Enumwork_work_statusWithAggregatesFilter<"work"> | $Enums.work_work_status
  }

  export type workapplicationWhereInput = {
    AND?: workapplicationWhereInput | workapplicationWhereInput[]
    OR?: workapplicationWhereInput[]
    NOT?: workapplicationWhereInput | workapplicationWhereInput[]
    application_id?: IntFilter<"workapplication"> | number
    work_id?: IntFilter<"workapplication"> | number
    user_id?: IntFilter<"workapplication"> | number
    application_status?: Enumworkapplication_application_statusFilter<"workapplication"> | $Enums.workapplication_application_status
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    work?: XOR<WorkScalarRelationFilter, workWhereInput>
  }

  export type workapplicationOrderByWithRelationInput = {
    application_id?: SortOrder
    work_id?: SortOrder
    user_id?: SortOrder
    application_status?: SortOrder
    user?: userOrderByWithRelationInput
    work?: workOrderByWithRelationInput
  }

  export type workapplicationWhereUniqueInput = Prisma.AtLeast<{
    application_id?: number
    AND?: workapplicationWhereInput | workapplicationWhereInput[]
    OR?: workapplicationWhereInput[]
    NOT?: workapplicationWhereInput | workapplicationWhereInput[]
    work_id?: IntFilter<"workapplication"> | number
    user_id?: IntFilter<"workapplication"> | number
    application_status?: Enumworkapplication_application_statusFilter<"workapplication"> | $Enums.workapplication_application_status
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    work?: XOR<WorkScalarRelationFilter, workWhereInput>
  }, "application_id">

  export type workapplicationOrderByWithAggregationInput = {
    application_id?: SortOrder
    work_id?: SortOrder
    user_id?: SortOrder
    application_status?: SortOrder
    _count?: workapplicationCountOrderByAggregateInput
    _avg?: workapplicationAvgOrderByAggregateInput
    _max?: workapplicationMaxOrderByAggregateInput
    _min?: workapplicationMinOrderByAggregateInput
    _sum?: workapplicationSumOrderByAggregateInput
  }

  export type workapplicationScalarWhereWithAggregatesInput = {
    AND?: workapplicationScalarWhereWithAggregatesInput | workapplicationScalarWhereWithAggregatesInput[]
    OR?: workapplicationScalarWhereWithAggregatesInput[]
    NOT?: workapplicationScalarWhereWithAggregatesInput | workapplicationScalarWhereWithAggregatesInput[]
    application_id?: IntWithAggregatesFilter<"workapplication"> | number
    work_id?: IntWithAggregatesFilter<"workapplication"> | number
    user_id?: IntWithAggregatesFilter<"workapplication"> | number
    application_status?: Enumworkapplication_application_statusWithAggregatesFilter<"workapplication"> | $Enums.workapplication_application_status
  }

  export type assignmentCreateInput = {
    outsider_name?: string | null
    assignment_status?: $Enums.assignment_assignment_status
    withdrawal_reason?: string | null
    user?: userCreateNestedOneWithoutAssignmentInput
    work: workCreateNestedOneWithoutAssignmentInput
  }

  export type assignmentUncheckedCreateInput = {
    assignment_id?: number
    work_id: number
    user_id?: number | null
    outsider_name?: string | null
    assignment_status?: $Enums.assignment_assignment_status
    withdrawal_reason?: string | null
  }

  export type assignmentUpdateInput = {
    outsider_name?: NullableStringFieldUpdateOperationsInput | string | null
    assignment_status?: Enumassignment_assignment_statusFieldUpdateOperationsInput | $Enums.assignment_assignment_status
    withdrawal_reason?: NullableStringFieldUpdateOperationsInput | string | null
    user?: userUpdateOneWithoutAssignmentNestedInput
    work?: workUpdateOneRequiredWithoutAssignmentNestedInput
  }

  export type assignmentUncheckedUpdateInput = {
    assignment_id?: IntFieldUpdateOperationsInput | number
    work_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    outsider_name?: NullableStringFieldUpdateOperationsInput | string | null
    assignment_status?: Enumassignment_assignment_statusFieldUpdateOperationsInput | $Enums.assignment_assignment_status
    withdrawal_reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type assignmentCreateManyInput = {
    assignment_id?: number
    work_id: number
    user_id?: number | null
    outsider_name?: string | null
    assignment_status?: $Enums.assignment_assignment_status
    withdrawal_reason?: string | null
  }

  export type assignmentUpdateManyMutationInput = {
    outsider_name?: NullableStringFieldUpdateOperationsInput | string | null
    assignment_status?: Enumassignment_assignment_statusFieldUpdateOperationsInput | $Enums.assignment_assignment_status
    withdrawal_reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type assignmentUncheckedUpdateManyInput = {
    assignment_id?: IntFieldUpdateOperationsInput | number
    work_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    outsider_name?: NullableStringFieldUpdateOperationsInput | string | null
    assignment_status?: Enumassignment_assignment_statusFieldUpdateOperationsInput | $Enums.assignment_assignment_status
    withdrawal_reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type projectCreateInput = {
    project_name: string
    client_name: string
    project_location: string
    project_description: string
    project_start_date: Date | string
    project_end_date: Date | string
    project_status?: $Enums.project_project_status
    work?: workCreateNestedManyWithoutProjectInput
  }

  export type projectUncheckedCreateInput = {
    project_id?: number
    project_name: string
    client_name: string
    project_location: string
    project_description: string
    project_start_date: Date | string
    project_end_date: Date | string
    project_status?: $Enums.project_project_status
    work?: workUncheckedCreateNestedManyWithoutProjectInput
  }

  export type projectUpdateInput = {
    project_name?: StringFieldUpdateOperationsInput | string
    client_name?: StringFieldUpdateOperationsInput | string
    project_location?: StringFieldUpdateOperationsInput | string
    project_description?: StringFieldUpdateOperationsInput | string
    project_start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    project_end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    project_status?: Enumproject_project_statusFieldUpdateOperationsInput | $Enums.project_project_status
    work?: workUpdateManyWithoutProjectNestedInput
  }

  export type projectUncheckedUpdateInput = {
    project_id?: IntFieldUpdateOperationsInput | number
    project_name?: StringFieldUpdateOperationsInput | string
    client_name?: StringFieldUpdateOperationsInput | string
    project_location?: StringFieldUpdateOperationsInput | string
    project_description?: StringFieldUpdateOperationsInput | string
    project_start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    project_end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    project_status?: Enumproject_project_statusFieldUpdateOperationsInput | $Enums.project_project_status
    work?: workUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type projectCreateManyInput = {
    project_id?: number
    project_name: string
    client_name: string
    project_location: string
    project_description: string
    project_start_date: Date | string
    project_end_date: Date | string
    project_status?: $Enums.project_project_status
  }

  export type projectUpdateManyMutationInput = {
    project_name?: StringFieldUpdateOperationsInput | string
    client_name?: StringFieldUpdateOperationsInput | string
    project_location?: StringFieldUpdateOperationsInput | string
    project_description?: StringFieldUpdateOperationsInput | string
    project_start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    project_end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    project_status?: Enumproject_project_statusFieldUpdateOperationsInput | $Enums.project_project_status
  }

  export type projectUncheckedUpdateManyInput = {
    project_id?: IntFieldUpdateOperationsInput | number
    project_name?: StringFieldUpdateOperationsInput | string
    client_name?: StringFieldUpdateOperationsInput | string
    project_location?: StringFieldUpdateOperationsInput | string
    project_description?: StringFieldUpdateOperationsInput | string
    project_start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    project_end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    project_status?: Enumproject_project_statusFieldUpdateOperationsInput | $Enums.project_project_status
  }

  export type tagCreateInput = {
    tag_name: string
    color_hex?: string
    tasktag?: tasktagCreateNestedManyWithoutTagInput
  }

  export type tagUncheckedCreateInput = {
    tag_id?: number
    tag_name: string
    color_hex?: string
    tasktag?: tasktagUncheckedCreateNestedManyWithoutTagInput
  }

  export type tagUpdateInput = {
    tag_name?: StringFieldUpdateOperationsInput | string
    color_hex?: StringFieldUpdateOperationsInput | string
    tasktag?: tasktagUpdateManyWithoutTagNestedInput
  }

  export type tagUncheckedUpdateInput = {
    tag_id?: IntFieldUpdateOperationsInput | number
    tag_name?: StringFieldUpdateOperationsInput | string
    color_hex?: StringFieldUpdateOperationsInput | string
    tasktag?: tasktagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type tagCreateManyInput = {
    tag_id?: number
    tag_name: string
    color_hex?: string
  }

  export type tagUpdateManyMutationInput = {
    tag_name?: StringFieldUpdateOperationsInput | string
    color_hex?: StringFieldUpdateOperationsInput | string
  }

  export type tagUncheckedUpdateManyInput = {
    tag_id?: IntFieldUpdateOperationsInput | number
    tag_name?: StringFieldUpdateOperationsInput | string
    color_hex?: StringFieldUpdateOperationsInput | string
  }

  export type taskCreateInput = {
    task_title: string
    task_desc?: string | null
    due_date?: Date | string | null
    is_completed?: boolean
    user: userCreateNestedOneWithoutTaskInput
    tasktag?: tasktagCreateNestedManyWithoutTaskInput
  }

  export type taskUncheckedCreateInput = {
    task_id?: number
    user_id: number
    task_title: string
    task_desc?: string | null
    due_date?: Date | string | null
    is_completed?: boolean
    tasktag?: tasktagUncheckedCreateNestedManyWithoutTaskInput
  }

  export type taskUpdateInput = {
    task_title?: StringFieldUpdateOperationsInput | string
    task_desc?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_completed?: BoolFieldUpdateOperationsInput | boolean
    user?: userUpdateOneRequiredWithoutTaskNestedInput
    tasktag?: tasktagUpdateManyWithoutTaskNestedInput
  }

  export type taskUncheckedUpdateInput = {
    task_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    task_title?: StringFieldUpdateOperationsInput | string
    task_desc?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_completed?: BoolFieldUpdateOperationsInput | boolean
    tasktag?: tasktagUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type taskCreateManyInput = {
    task_id?: number
    user_id: number
    task_title: string
    task_desc?: string | null
    due_date?: Date | string | null
    is_completed?: boolean
  }

  export type taskUpdateManyMutationInput = {
    task_title?: StringFieldUpdateOperationsInput | string
    task_desc?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type taskUncheckedUpdateManyInput = {
    task_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    task_title?: StringFieldUpdateOperationsInput | string
    task_desc?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type tasktagCreateInput = {
    tag: tagCreateNestedOneWithoutTasktagInput
    task: taskCreateNestedOneWithoutTasktagInput
  }

  export type tasktagUncheckedCreateInput = {
    task_tag_id?: number
    task_id: number
    tag_id: number
  }

  export type tasktagUpdateInput = {
    tag?: tagUpdateOneRequiredWithoutTasktagNestedInput
    task?: taskUpdateOneRequiredWithoutTasktagNestedInput
  }

  export type tasktagUncheckedUpdateInput = {
    task_tag_id?: IntFieldUpdateOperationsInput | number
    task_id?: IntFieldUpdateOperationsInput | number
    tag_id?: IntFieldUpdateOperationsInput | number
  }

  export type tasktagCreateManyInput = {
    task_tag_id?: number
    task_id: number
    tag_id: number
  }

  export type tasktagUpdateManyMutationInput = {

  }

  export type tasktagUncheckedUpdateManyInput = {
    task_tag_id?: IntFieldUpdateOperationsInput | number
    task_id?: IntFieldUpdateOperationsInput | number
    tag_id?: IntFieldUpdateOperationsInput | number
  }

  export type userCreateInput = {
    email: string
    google_id?: string | null
    full_name?: string | null
    avatar_url?: string | null
    user_type?: $Enums.user_user_type
    created_at?: Date | string
    assignment?: assignmentCreateNestedManyWithoutUserInput
    task?: taskCreateNestedManyWithoutUserInput
    userprofile?: userprofileCreateNestedOneWithoutUserInput
    workapplication?: workapplicationCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    user_id?: number
    email: string
    google_id?: string | null
    full_name?: string | null
    avatar_url?: string | null
    user_type?: $Enums.user_user_type
    created_at?: Date | string
    assignment?: assignmentUncheckedCreateNestedManyWithoutUserInput
    task?: taskUncheckedCreateNestedManyWithoutUserInput
    userprofile?: userprofileUncheckedCreateNestedOneWithoutUserInput
    workapplication?: workapplicationUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_type?: Enumuser_user_typeFieldUpdateOperationsInput | $Enums.user_user_type
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    assignment?: assignmentUpdateManyWithoutUserNestedInput
    task?: taskUpdateManyWithoutUserNestedInput
    userprofile?: userprofileUpdateOneWithoutUserNestedInput
    workapplication?: workapplicationUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_type?: Enumuser_user_typeFieldUpdateOperationsInput | $Enums.user_user_type
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    assignment?: assignmentUncheckedUpdateManyWithoutUserNestedInput
    task?: taskUncheckedUpdateManyWithoutUserNestedInput
    userprofile?: userprofileUncheckedUpdateOneWithoutUserNestedInput
    workapplication?: workapplicationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    user_id?: number
    email: string
    google_id?: string | null
    full_name?: string | null
    avatar_url?: string | null
    user_type?: $Enums.user_user_type
    created_at?: Date | string
  }

  export type userUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_type?: Enumuser_user_typeFieldUpdateOperationsInput | $Enums.user_user_type
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_type?: Enumuser_user_typeFieldUpdateOperationsInput | $Enums.user_user_type
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userprofileCreateInput = {
    primary_role?: $Enums.userprofile_primary_role
    secondary_role?: $Enums.userprofile_secondary_role | null
    reliability_score?: Decimal | DecimalJsLike | number | string
    is_setup_complete?: boolean
    user: userCreateNestedOneWithoutUserprofileInput
  }

  export type userprofileUncheckedCreateInput = {
    profile_id?: number
    user_id: number
    primary_role?: $Enums.userprofile_primary_role
    secondary_role?: $Enums.userprofile_secondary_role | null
    reliability_score?: Decimal | DecimalJsLike | number | string
    is_setup_complete?: boolean
  }

  export type userprofileUpdateInput = {
    primary_role?: Enumuserprofile_primary_roleFieldUpdateOperationsInput | $Enums.userprofile_primary_role
    secondary_role?: NullableEnumuserprofile_secondary_roleFieldUpdateOperationsInput | $Enums.userprofile_secondary_role | null
    reliability_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_setup_complete?: BoolFieldUpdateOperationsInput | boolean
    user?: userUpdateOneRequiredWithoutUserprofileNestedInput
  }

  export type userprofileUncheckedUpdateInput = {
    profile_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    primary_role?: Enumuserprofile_primary_roleFieldUpdateOperationsInput | $Enums.userprofile_primary_role
    secondary_role?: NullableEnumuserprofile_secondary_roleFieldUpdateOperationsInput | $Enums.userprofile_secondary_role | null
    reliability_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_setup_complete?: BoolFieldUpdateOperationsInput | boolean
  }

  export type userprofileCreateManyInput = {
    profile_id?: number
    user_id: number
    primary_role?: $Enums.userprofile_primary_role
    secondary_role?: $Enums.userprofile_secondary_role | null
    reliability_score?: Decimal | DecimalJsLike | number | string
    is_setup_complete?: boolean
  }

  export type userprofileUpdateManyMutationInput = {
    primary_role?: Enumuserprofile_primary_roleFieldUpdateOperationsInput | $Enums.userprofile_primary_role
    secondary_role?: NullableEnumuserprofile_secondary_roleFieldUpdateOperationsInput | $Enums.userprofile_secondary_role | null
    reliability_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_setup_complete?: BoolFieldUpdateOperationsInput | boolean
  }

  export type userprofileUncheckedUpdateManyInput = {
    profile_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    primary_role?: Enumuserprofile_primary_roleFieldUpdateOperationsInput | $Enums.userprofile_primary_role
    secondary_role?: NullableEnumuserprofile_secondary_roleFieldUpdateOperationsInput | $Enums.userprofile_secondary_role | null
    reliability_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_setup_complete?: BoolFieldUpdateOperationsInput | boolean
  }

  export type workCreateInput = {
    project_role: string
    role_category: $Enums.work_role_category
    expected_salary?: Decimal | DecimalJsLike | number | string
    is_open_pool?: boolean
    work_description: string
    work_start_date: Date | string
    work_start_time?: Date | string | null
    work_end_time?: Date | string | null
    work_status?: $Enums.work_work_status
    assignment?: assignmentCreateNestedManyWithoutWorkInput
    project: projectCreateNestedOneWithoutWorkInput
    workapplication?: workapplicationCreateNestedManyWithoutWorkInput
  }

  export type workUncheckedCreateInput = {
    work_id?: number
    project_id: number
    project_role: string
    role_category: $Enums.work_role_category
    expected_salary?: Decimal | DecimalJsLike | number | string
    is_open_pool?: boolean
    work_description: string
    work_start_date: Date | string
    work_start_time?: Date | string | null
    work_end_time?: Date | string | null
    work_status?: $Enums.work_work_status
    assignment?: assignmentUncheckedCreateNestedManyWithoutWorkInput
    workapplication?: workapplicationUncheckedCreateNestedManyWithoutWorkInput
  }

  export type workUpdateInput = {
    project_role?: StringFieldUpdateOperationsInput | string
    role_category?: Enumwork_role_categoryFieldUpdateOperationsInput | $Enums.work_role_category
    expected_salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_open_pool?: BoolFieldUpdateOperationsInput | boolean
    work_description?: StringFieldUpdateOperationsInput | string
    work_start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    work_start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    work_end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    work_status?: Enumwork_work_statusFieldUpdateOperationsInput | $Enums.work_work_status
    assignment?: assignmentUpdateManyWithoutWorkNestedInput
    project?: projectUpdateOneRequiredWithoutWorkNestedInput
    workapplication?: workapplicationUpdateManyWithoutWorkNestedInput
  }

  export type workUncheckedUpdateInput = {
    work_id?: IntFieldUpdateOperationsInput | number
    project_id?: IntFieldUpdateOperationsInput | number
    project_role?: StringFieldUpdateOperationsInput | string
    role_category?: Enumwork_role_categoryFieldUpdateOperationsInput | $Enums.work_role_category
    expected_salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_open_pool?: BoolFieldUpdateOperationsInput | boolean
    work_description?: StringFieldUpdateOperationsInput | string
    work_start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    work_start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    work_end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    work_status?: Enumwork_work_statusFieldUpdateOperationsInput | $Enums.work_work_status
    assignment?: assignmentUncheckedUpdateManyWithoutWorkNestedInput
    workapplication?: workapplicationUncheckedUpdateManyWithoutWorkNestedInput
  }

  export type workCreateManyInput = {
    work_id?: number
    project_id: number
    project_role: string
    role_category: $Enums.work_role_category
    expected_salary?: Decimal | DecimalJsLike | number | string
    is_open_pool?: boolean
    work_description: string
    work_start_date: Date | string
    work_start_time?: Date | string | null
    work_end_time?: Date | string | null
    work_status?: $Enums.work_work_status
  }

  export type workUpdateManyMutationInput = {
    project_role?: StringFieldUpdateOperationsInput | string
    role_category?: Enumwork_role_categoryFieldUpdateOperationsInput | $Enums.work_role_category
    expected_salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_open_pool?: BoolFieldUpdateOperationsInput | boolean
    work_description?: StringFieldUpdateOperationsInput | string
    work_start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    work_start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    work_end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    work_status?: Enumwork_work_statusFieldUpdateOperationsInput | $Enums.work_work_status
  }

  export type workUncheckedUpdateManyInput = {
    work_id?: IntFieldUpdateOperationsInput | number
    project_id?: IntFieldUpdateOperationsInput | number
    project_role?: StringFieldUpdateOperationsInput | string
    role_category?: Enumwork_role_categoryFieldUpdateOperationsInput | $Enums.work_role_category
    expected_salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_open_pool?: BoolFieldUpdateOperationsInput | boolean
    work_description?: StringFieldUpdateOperationsInput | string
    work_start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    work_start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    work_end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    work_status?: Enumwork_work_statusFieldUpdateOperationsInput | $Enums.work_work_status
  }

  export type workapplicationCreateInput = {
    application_status?: $Enums.workapplication_application_status
    user: userCreateNestedOneWithoutWorkapplicationInput
    work: workCreateNestedOneWithoutWorkapplicationInput
  }

  export type workapplicationUncheckedCreateInput = {
    application_id?: number
    work_id: number
    user_id: number
    application_status?: $Enums.workapplication_application_status
  }

  export type workapplicationUpdateInput = {
    application_status?: Enumworkapplication_application_statusFieldUpdateOperationsInput | $Enums.workapplication_application_status
    user?: userUpdateOneRequiredWithoutWorkapplicationNestedInput
    work?: workUpdateOneRequiredWithoutWorkapplicationNestedInput
  }

  export type workapplicationUncheckedUpdateInput = {
    application_id?: IntFieldUpdateOperationsInput | number
    work_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    application_status?: Enumworkapplication_application_statusFieldUpdateOperationsInput | $Enums.workapplication_application_status
  }

  export type workapplicationCreateManyInput = {
    application_id?: number
    work_id: number
    user_id: number
    application_status?: $Enums.workapplication_application_status
  }

  export type workapplicationUpdateManyMutationInput = {
    application_status?: Enumworkapplication_application_statusFieldUpdateOperationsInput | $Enums.workapplication_application_status
  }

  export type workapplicationUncheckedUpdateManyInput = {
    application_id?: IntFieldUpdateOperationsInput | number
    work_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    application_status?: Enumworkapplication_application_statusFieldUpdateOperationsInput | $Enums.workapplication_application_status
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type Enumassignment_assignment_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.assignment_assignment_status | Enumassignment_assignment_statusFieldRefInput<$PrismaModel>
    in?: $Enums.assignment_assignment_status[]
    notIn?: $Enums.assignment_assignment_status[]
    not?: NestedEnumassignment_assignment_statusFilter<$PrismaModel> | $Enums.assignment_assignment_status
  }

  export type UserNullableScalarRelationFilter = {
    is?: userWhereInput | null
    isNot?: userWhereInput | null
  }

  export type WorkScalarRelationFilter = {
    is?: workWhereInput
    isNot?: workWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type assignmentOrderByRelevanceInput = {
    fields: assignmentOrderByRelevanceFieldEnum | assignmentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type assignmentCountOrderByAggregateInput = {
    assignment_id?: SortOrder
    work_id?: SortOrder
    user_id?: SortOrder
    outsider_name?: SortOrder
    assignment_status?: SortOrder
    withdrawal_reason?: SortOrder
  }

  export type assignmentAvgOrderByAggregateInput = {
    assignment_id?: SortOrder
    work_id?: SortOrder
    user_id?: SortOrder
  }

  export type assignmentMaxOrderByAggregateInput = {
    assignment_id?: SortOrder
    work_id?: SortOrder
    user_id?: SortOrder
    outsider_name?: SortOrder
    assignment_status?: SortOrder
    withdrawal_reason?: SortOrder
  }

  export type assignmentMinOrderByAggregateInput = {
    assignment_id?: SortOrder
    work_id?: SortOrder
    user_id?: SortOrder
    outsider_name?: SortOrder
    assignment_status?: SortOrder
    withdrawal_reason?: SortOrder
  }

  export type assignmentSumOrderByAggregateInput = {
    assignment_id?: SortOrder
    work_id?: SortOrder
    user_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type Enumassignment_assignment_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.assignment_assignment_status | Enumassignment_assignment_statusFieldRefInput<$PrismaModel>
    in?: $Enums.assignment_assignment_status[]
    notIn?: $Enums.assignment_assignment_status[]
    not?: NestedEnumassignment_assignment_statusWithAggregatesFilter<$PrismaModel> | $Enums.assignment_assignment_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumassignment_assignment_statusFilter<$PrismaModel>
    _max?: NestedEnumassignment_assignment_statusFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Enumproject_project_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.project_project_status | Enumproject_project_statusFieldRefInput<$PrismaModel>
    in?: $Enums.project_project_status[]
    notIn?: $Enums.project_project_status[]
    not?: NestedEnumproject_project_statusFilter<$PrismaModel> | $Enums.project_project_status
  }

  export type WorkListRelationFilter = {
    every?: workWhereInput
    some?: workWhereInput
    none?: workWhereInput
  }

  export type workOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type projectOrderByRelevanceInput = {
    fields: projectOrderByRelevanceFieldEnum | projectOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type projectCountOrderByAggregateInput = {
    project_id?: SortOrder
    project_name?: SortOrder
    client_name?: SortOrder
    project_location?: SortOrder
    project_description?: SortOrder
    project_start_date?: SortOrder
    project_end_date?: SortOrder
    project_status?: SortOrder
  }

  export type projectAvgOrderByAggregateInput = {
    project_id?: SortOrder
  }

  export type projectMaxOrderByAggregateInput = {
    project_id?: SortOrder
    project_name?: SortOrder
    client_name?: SortOrder
    project_location?: SortOrder
    project_description?: SortOrder
    project_start_date?: SortOrder
    project_end_date?: SortOrder
    project_status?: SortOrder
  }

  export type projectMinOrderByAggregateInput = {
    project_id?: SortOrder
    project_name?: SortOrder
    client_name?: SortOrder
    project_location?: SortOrder
    project_description?: SortOrder
    project_start_date?: SortOrder
    project_end_date?: SortOrder
    project_status?: SortOrder
  }

  export type projectSumOrderByAggregateInput = {
    project_id?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type Enumproject_project_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.project_project_status | Enumproject_project_statusFieldRefInput<$PrismaModel>
    in?: $Enums.project_project_status[]
    notIn?: $Enums.project_project_status[]
    not?: NestedEnumproject_project_statusWithAggregatesFilter<$PrismaModel> | $Enums.project_project_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumproject_project_statusFilter<$PrismaModel>
    _max?: NestedEnumproject_project_statusFilter<$PrismaModel>
  }

  export type TasktagListRelationFilter = {
    every?: tasktagWhereInput
    some?: tasktagWhereInput
    none?: tasktagWhereInput
  }

  export type tasktagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tagOrderByRelevanceInput = {
    fields: tagOrderByRelevanceFieldEnum | tagOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tagCountOrderByAggregateInput = {
    tag_id?: SortOrder
    tag_name?: SortOrder
    color_hex?: SortOrder
  }

  export type tagAvgOrderByAggregateInput = {
    tag_id?: SortOrder
  }

  export type tagMaxOrderByAggregateInput = {
    tag_id?: SortOrder
    tag_name?: SortOrder
    color_hex?: SortOrder
  }

  export type tagMinOrderByAggregateInput = {
    tag_id?: SortOrder
    tag_name?: SortOrder
    color_hex?: SortOrder
  }

  export type tagSumOrderByAggregateInput = {
    tag_id?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type taskOrderByRelevanceInput = {
    fields: taskOrderByRelevanceFieldEnum | taskOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type taskCountOrderByAggregateInput = {
    task_id?: SortOrder
    user_id?: SortOrder
    task_title?: SortOrder
    task_desc?: SortOrder
    due_date?: SortOrder
    is_completed?: SortOrder
  }

  export type taskAvgOrderByAggregateInput = {
    task_id?: SortOrder
    user_id?: SortOrder
  }

  export type taskMaxOrderByAggregateInput = {
    task_id?: SortOrder
    user_id?: SortOrder
    task_title?: SortOrder
    task_desc?: SortOrder
    due_date?: SortOrder
    is_completed?: SortOrder
  }

  export type taskMinOrderByAggregateInput = {
    task_id?: SortOrder
    user_id?: SortOrder
    task_title?: SortOrder
    task_desc?: SortOrder
    due_date?: SortOrder
    is_completed?: SortOrder
  }

  export type taskSumOrderByAggregateInput = {
    task_id?: SortOrder
    user_id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type TagScalarRelationFilter = {
    is?: tagWhereInput
    isNot?: tagWhereInput
  }

  export type TaskScalarRelationFilter = {
    is?: taskWhereInput
    isNot?: taskWhereInput
  }

  export type tasktagCountOrderByAggregateInput = {
    task_tag_id?: SortOrder
    task_id?: SortOrder
    tag_id?: SortOrder
  }

  export type tasktagAvgOrderByAggregateInput = {
    task_tag_id?: SortOrder
    task_id?: SortOrder
    tag_id?: SortOrder
  }

  export type tasktagMaxOrderByAggregateInput = {
    task_tag_id?: SortOrder
    task_id?: SortOrder
    tag_id?: SortOrder
  }

  export type tasktagMinOrderByAggregateInput = {
    task_tag_id?: SortOrder
    task_id?: SortOrder
    tag_id?: SortOrder
  }

  export type tasktagSumOrderByAggregateInput = {
    task_tag_id?: SortOrder
    task_id?: SortOrder
    tag_id?: SortOrder
  }

  export type Enumuser_user_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.user_user_type | Enumuser_user_typeFieldRefInput<$PrismaModel>
    in?: $Enums.user_user_type[]
    notIn?: $Enums.user_user_type[]
    not?: NestedEnumuser_user_typeFilter<$PrismaModel> | $Enums.user_user_type
  }

  export type AssignmentListRelationFilter = {
    every?: assignmentWhereInput
    some?: assignmentWhereInput
    none?: assignmentWhereInput
  }

  export type TaskListRelationFilter = {
    every?: taskWhereInput
    some?: taskWhereInput
    none?: taskWhereInput
  }

  export type UserprofileNullableScalarRelationFilter = {
    is?: userprofileWhereInput | null
    isNot?: userprofileWhereInput | null
  }

  export type WorkapplicationListRelationFilter = {
    every?: workapplicationWhereInput
    some?: workapplicationWhereInput
    none?: workapplicationWhereInput
  }

  export type assignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type taskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type workapplicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userOrderByRelevanceInput = {
    fields: userOrderByRelevanceFieldEnum | userOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type userCountOrderByAggregateInput = {
    user_id?: SortOrder
    email?: SortOrder
    google_id?: SortOrder
    full_name?: SortOrder
    avatar_url?: SortOrder
    user_type?: SortOrder
    created_at?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    user_id?: SortOrder
    email?: SortOrder
    google_id?: SortOrder
    full_name?: SortOrder
    avatar_url?: SortOrder
    user_type?: SortOrder
    created_at?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    user_id?: SortOrder
    email?: SortOrder
    google_id?: SortOrder
    full_name?: SortOrder
    avatar_url?: SortOrder
    user_type?: SortOrder
    created_at?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type Enumuser_user_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_user_type | Enumuser_user_typeFieldRefInput<$PrismaModel>
    in?: $Enums.user_user_type[]
    notIn?: $Enums.user_user_type[]
    not?: NestedEnumuser_user_typeWithAggregatesFilter<$PrismaModel> | $Enums.user_user_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuser_user_typeFilter<$PrismaModel>
    _max?: NestedEnumuser_user_typeFilter<$PrismaModel>
  }

  export type Enumuserprofile_primary_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.userprofile_primary_role | Enumuserprofile_primary_roleFieldRefInput<$PrismaModel>
    in?: $Enums.userprofile_primary_role[]
    notIn?: $Enums.userprofile_primary_role[]
    not?: NestedEnumuserprofile_primary_roleFilter<$PrismaModel> | $Enums.userprofile_primary_role
  }

  export type Enumuserprofile_secondary_roleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.userprofile_secondary_role | Enumuserprofile_secondary_roleFieldRefInput<$PrismaModel> | null
    in?: $Enums.userprofile_secondary_role[] | null
    notIn?: $Enums.userprofile_secondary_role[] | null
    not?: NestedEnumuserprofile_secondary_roleNullableFilter<$PrismaModel> | $Enums.userprofile_secondary_role | null
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type userprofileCountOrderByAggregateInput = {
    profile_id?: SortOrder
    user_id?: SortOrder
    primary_role?: SortOrder
    secondary_role?: SortOrder
    reliability_score?: SortOrder
    is_setup_complete?: SortOrder
  }

  export type userprofileAvgOrderByAggregateInput = {
    profile_id?: SortOrder
    user_id?: SortOrder
    reliability_score?: SortOrder
  }

  export type userprofileMaxOrderByAggregateInput = {
    profile_id?: SortOrder
    user_id?: SortOrder
    primary_role?: SortOrder
    secondary_role?: SortOrder
    reliability_score?: SortOrder
    is_setup_complete?: SortOrder
  }

  export type userprofileMinOrderByAggregateInput = {
    profile_id?: SortOrder
    user_id?: SortOrder
    primary_role?: SortOrder
    secondary_role?: SortOrder
    reliability_score?: SortOrder
    is_setup_complete?: SortOrder
  }

  export type userprofileSumOrderByAggregateInput = {
    profile_id?: SortOrder
    user_id?: SortOrder
    reliability_score?: SortOrder
  }

  export type Enumuserprofile_primary_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.userprofile_primary_role | Enumuserprofile_primary_roleFieldRefInput<$PrismaModel>
    in?: $Enums.userprofile_primary_role[]
    notIn?: $Enums.userprofile_primary_role[]
    not?: NestedEnumuserprofile_primary_roleWithAggregatesFilter<$PrismaModel> | $Enums.userprofile_primary_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuserprofile_primary_roleFilter<$PrismaModel>
    _max?: NestedEnumuserprofile_primary_roleFilter<$PrismaModel>
  }

  export type Enumuserprofile_secondary_roleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.userprofile_secondary_role | Enumuserprofile_secondary_roleFieldRefInput<$PrismaModel> | null
    in?: $Enums.userprofile_secondary_role[] | null
    notIn?: $Enums.userprofile_secondary_role[] | null
    not?: NestedEnumuserprofile_secondary_roleNullableWithAggregatesFilter<$PrismaModel> | $Enums.userprofile_secondary_role | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumuserprofile_secondary_roleNullableFilter<$PrismaModel>
    _max?: NestedEnumuserprofile_secondary_roleNullableFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type Enumwork_role_categoryFilter<$PrismaModel = never> = {
    equals?: $Enums.work_role_category | Enumwork_role_categoryFieldRefInput<$PrismaModel>
    in?: $Enums.work_role_category[]
    notIn?: $Enums.work_role_category[]
    not?: NestedEnumwork_role_categoryFilter<$PrismaModel> | $Enums.work_role_category
  }

  export type Enumwork_work_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.work_work_status | Enumwork_work_statusFieldRefInput<$PrismaModel>
    in?: $Enums.work_work_status[]
    notIn?: $Enums.work_work_status[]
    not?: NestedEnumwork_work_statusFilter<$PrismaModel> | $Enums.work_work_status
  }

  export type ProjectScalarRelationFilter = {
    is?: projectWhereInput
    isNot?: projectWhereInput
  }

  export type workOrderByRelevanceInput = {
    fields: workOrderByRelevanceFieldEnum | workOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type workCountOrderByAggregateInput = {
    work_id?: SortOrder
    project_id?: SortOrder
    project_role?: SortOrder
    role_category?: SortOrder
    expected_salary?: SortOrder
    is_open_pool?: SortOrder
    work_description?: SortOrder
    work_start_date?: SortOrder
    work_start_time?: SortOrder
    work_end_time?: SortOrder
    work_status?: SortOrder
  }

  export type workAvgOrderByAggregateInput = {
    work_id?: SortOrder
    project_id?: SortOrder
    expected_salary?: SortOrder
  }

  export type workMaxOrderByAggregateInput = {
    work_id?: SortOrder
    project_id?: SortOrder
    project_role?: SortOrder
    role_category?: SortOrder
    expected_salary?: SortOrder
    is_open_pool?: SortOrder
    work_description?: SortOrder
    work_start_date?: SortOrder
    work_start_time?: SortOrder
    work_end_time?: SortOrder
    work_status?: SortOrder
  }

  export type workMinOrderByAggregateInput = {
    work_id?: SortOrder
    project_id?: SortOrder
    project_role?: SortOrder
    role_category?: SortOrder
    expected_salary?: SortOrder
    is_open_pool?: SortOrder
    work_description?: SortOrder
    work_start_date?: SortOrder
    work_start_time?: SortOrder
    work_end_time?: SortOrder
    work_status?: SortOrder
  }

  export type workSumOrderByAggregateInput = {
    work_id?: SortOrder
    project_id?: SortOrder
    expected_salary?: SortOrder
  }

  export type Enumwork_role_categoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.work_role_category | Enumwork_role_categoryFieldRefInput<$PrismaModel>
    in?: $Enums.work_role_category[]
    notIn?: $Enums.work_role_category[]
    not?: NestedEnumwork_role_categoryWithAggregatesFilter<$PrismaModel> | $Enums.work_role_category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumwork_role_categoryFilter<$PrismaModel>
    _max?: NestedEnumwork_role_categoryFilter<$PrismaModel>
  }

  export type Enumwork_work_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.work_work_status | Enumwork_work_statusFieldRefInput<$PrismaModel>
    in?: $Enums.work_work_status[]
    notIn?: $Enums.work_work_status[]
    not?: NestedEnumwork_work_statusWithAggregatesFilter<$PrismaModel> | $Enums.work_work_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumwork_work_statusFilter<$PrismaModel>
    _max?: NestedEnumwork_work_statusFilter<$PrismaModel>
  }

  export type Enumworkapplication_application_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.workapplication_application_status | Enumworkapplication_application_statusFieldRefInput<$PrismaModel>
    in?: $Enums.workapplication_application_status[]
    notIn?: $Enums.workapplication_application_status[]
    not?: NestedEnumworkapplication_application_statusFilter<$PrismaModel> | $Enums.workapplication_application_status
  }

  export type workapplicationCountOrderByAggregateInput = {
    application_id?: SortOrder
    work_id?: SortOrder
    user_id?: SortOrder
    application_status?: SortOrder
  }

  export type workapplicationAvgOrderByAggregateInput = {
    application_id?: SortOrder
    work_id?: SortOrder
    user_id?: SortOrder
  }

  export type workapplicationMaxOrderByAggregateInput = {
    application_id?: SortOrder
    work_id?: SortOrder
    user_id?: SortOrder
    application_status?: SortOrder
  }

  export type workapplicationMinOrderByAggregateInput = {
    application_id?: SortOrder
    work_id?: SortOrder
    user_id?: SortOrder
    application_status?: SortOrder
  }

  export type workapplicationSumOrderByAggregateInput = {
    application_id?: SortOrder
    work_id?: SortOrder
    user_id?: SortOrder
  }

  export type Enumworkapplication_application_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.workapplication_application_status | Enumworkapplication_application_statusFieldRefInput<$PrismaModel>
    in?: $Enums.workapplication_application_status[]
    notIn?: $Enums.workapplication_application_status[]
    not?: NestedEnumworkapplication_application_statusWithAggregatesFilter<$PrismaModel> | $Enums.workapplication_application_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumworkapplication_application_statusFilter<$PrismaModel>
    _max?: NestedEnumworkapplication_application_statusFilter<$PrismaModel>
  }

  export type userCreateNestedOneWithoutAssignmentInput = {
    create?: XOR<userCreateWithoutAssignmentInput, userUncheckedCreateWithoutAssignmentInput>
    connectOrCreate?: userCreateOrConnectWithoutAssignmentInput
    connect?: userWhereUniqueInput
  }

  export type workCreateNestedOneWithoutAssignmentInput = {
    create?: XOR<workCreateWithoutAssignmentInput, workUncheckedCreateWithoutAssignmentInput>
    connectOrCreate?: workCreateOrConnectWithoutAssignmentInput
    connect?: workWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type Enumassignment_assignment_statusFieldUpdateOperationsInput = {
    set?: $Enums.assignment_assignment_status
  }

  export type userUpdateOneWithoutAssignmentNestedInput = {
    create?: XOR<userCreateWithoutAssignmentInput, userUncheckedCreateWithoutAssignmentInput>
    connectOrCreate?: userCreateOrConnectWithoutAssignmentInput
    upsert?: userUpsertWithoutAssignmentInput
    disconnect?: userWhereInput | boolean
    delete?: userWhereInput | boolean
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutAssignmentInput, userUpdateWithoutAssignmentInput>, userUncheckedUpdateWithoutAssignmentInput>
  }

  export type workUpdateOneRequiredWithoutAssignmentNestedInput = {
    create?: XOR<workCreateWithoutAssignmentInput, workUncheckedCreateWithoutAssignmentInput>
    connectOrCreate?: workCreateOrConnectWithoutAssignmentInput
    upsert?: workUpsertWithoutAssignmentInput
    connect?: workWhereUniqueInput
    update?: XOR<XOR<workUpdateToOneWithWhereWithoutAssignmentInput, workUpdateWithoutAssignmentInput>, workUncheckedUpdateWithoutAssignmentInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type workCreateNestedManyWithoutProjectInput = {
    create?: XOR<workCreateWithoutProjectInput, workUncheckedCreateWithoutProjectInput> | workCreateWithoutProjectInput[] | workUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: workCreateOrConnectWithoutProjectInput | workCreateOrConnectWithoutProjectInput[]
    createMany?: workCreateManyProjectInputEnvelope
    connect?: workWhereUniqueInput | workWhereUniqueInput[]
  }

  export type workUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<workCreateWithoutProjectInput, workUncheckedCreateWithoutProjectInput> | workCreateWithoutProjectInput[] | workUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: workCreateOrConnectWithoutProjectInput | workCreateOrConnectWithoutProjectInput[]
    createMany?: workCreateManyProjectInputEnvelope
    connect?: workWhereUniqueInput | workWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type Enumproject_project_statusFieldUpdateOperationsInput = {
    set?: $Enums.project_project_status
  }

  export type workUpdateManyWithoutProjectNestedInput = {
    create?: XOR<workCreateWithoutProjectInput, workUncheckedCreateWithoutProjectInput> | workCreateWithoutProjectInput[] | workUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: workCreateOrConnectWithoutProjectInput | workCreateOrConnectWithoutProjectInput[]
    upsert?: workUpsertWithWhereUniqueWithoutProjectInput | workUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: workCreateManyProjectInputEnvelope
    set?: workWhereUniqueInput | workWhereUniqueInput[]
    disconnect?: workWhereUniqueInput | workWhereUniqueInput[]
    delete?: workWhereUniqueInput | workWhereUniqueInput[]
    connect?: workWhereUniqueInput | workWhereUniqueInput[]
    update?: workUpdateWithWhereUniqueWithoutProjectInput | workUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: workUpdateManyWithWhereWithoutProjectInput | workUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: workScalarWhereInput | workScalarWhereInput[]
  }

  export type workUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<workCreateWithoutProjectInput, workUncheckedCreateWithoutProjectInput> | workCreateWithoutProjectInput[] | workUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: workCreateOrConnectWithoutProjectInput | workCreateOrConnectWithoutProjectInput[]
    upsert?: workUpsertWithWhereUniqueWithoutProjectInput | workUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: workCreateManyProjectInputEnvelope
    set?: workWhereUniqueInput | workWhereUniqueInput[]
    disconnect?: workWhereUniqueInput | workWhereUniqueInput[]
    delete?: workWhereUniqueInput | workWhereUniqueInput[]
    connect?: workWhereUniqueInput | workWhereUniqueInput[]
    update?: workUpdateWithWhereUniqueWithoutProjectInput | workUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: workUpdateManyWithWhereWithoutProjectInput | workUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: workScalarWhereInput | workScalarWhereInput[]
  }

  export type tasktagCreateNestedManyWithoutTagInput = {
    create?: XOR<tasktagCreateWithoutTagInput, tasktagUncheckedCreateWithoutTagInput> | tasktagCreateWithoutTagInput[] | tasktagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: tasktagCreateOrConnectWithoutTagInput | tasktagCreateOrConnectWithoutTagInput[]
    createMany?: tasktagCreateManyTagInputEnvelope
    connect?: tasktagWhereUniqueInput | tasktagWhereUniqueInput[]
  }

  export type tasktagUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<tasktagCreateWithoutTagInput, tasktagUncheckedCreateWithoutTagInput> | tasktagCreateWithoutTagInput[] | tasktagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: tasktagCreateOrConnectWithoutTagInput | tasktagCreateOrConnectWithoutTagInput[]
    createMany?: tasktagCreateManyTagInputEnvelope
    connect?: tasktagWhereUniqueInput | tasktagWhereUniqueInput[]
  }

  export type tasktagUpdateManyWithoutTagNestedInput = {
    create?: XOR<tasktagCreateWithoutTagInput, tasktagUncheckedCreateWithoutTagInput> | tasktagCreateWithoutTagInput[] | tasktagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: tasktagCreateOrConnectWithoutTagInput | tasktagCreateOrConnectWithoutTagInput[]
    upsert?: tasktagUpsertWithWhereUniqueWithoutTagInput | tasktagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: tasktagCreateManyTagInputEnvelope
    set?: tasktagWhereUniqueInput | tasktagWhereUniqueInput[]
    disconnect?: tasktagWhereUniqueInput | tasktagWhereUniqueInput[]
    delete?: tasktagWhereUniqueInput | tasktagWhereUniqueInput[]
    connect?: tasktagWhereUniqueInput | tasktagWhereUniqueInput[]
    update?: tasktagUpdateWithWhereUniqueWithoutTagInput | tasktagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: tasktagUpdateManyWithWhereWithoutTagInput | tasktagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: tasktagScalarWhereInput | tasktagScalarWhereInput[]
  }

  export type tasktagUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<tasktagCreateWithoutTagInput, tasktagUncheckedCreateWithoutTagInput> | tasktagCreateWithoutTagInput[] | tasktagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: tasktagCreateOrConnectWithoutTagInput | tasktagCreateOrConnectWithoutTagInput[]
    upsert?: tasktagUpsertWithWhereUniqueWithoutTagInput | tasktagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: tasktagCreateManyTagInputEnvelope
    set?: tasktagWhereUniqueInput | tasktagWhereUniqueInput[]
    disconnect?: tasktagWhereUniqueInput | tasktagWhereUniqueInput[]
    delete?: tasktagWhereUniqueInput | tasktagWhereUniqueInput[]
    connect?: tasktagWhereUniqueInput | tasktagWhereUniqueInput[]
    update?: tasktagUpdateWithWhereUniqueWithoutTagInput | tasktagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: tasktagUpdateManyWithWhereWithoutTagInput | tasktagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: tasktagScalarWhereInput | tasktagScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutTaskInput = {
    create?: XOR<userCreateWithoutTaskInput, userUncheckedCreateWithoutTaskInput>
    connectOrCreate?: userCreateOrConnectWithoutTaskInput
    connect?: userWhereUniqueInput
  }

  export type tasktagCreateNestedManyWithoutTaskInput = {
    create?: XOR<tasktagCreateWithoutTaskInput, tasktagUncheckedCreateWithoutTaskInput> | tasktagCreateWithoutTaskInput[] | tasktagUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: tasktagCreateOrConnectWithoutTaskInput | tasktagCreateOrConnectWithoutTaskInput[]
    createMany?: tasktagCreateManyTaskInputEnvelope
    connect?: tasktagWhereUniqueInput | tasktagWhereUniqueInput[]
  }

  export type tasktagUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<tasktagCreateWithoutTaskInput, tasktagUncheckedCreateWithoutTaskInput> | tasktagCreateWithoutTaskInput[] | tasktagUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: tasktagCreateOrConnectWithoutTaskInput | tasktagCreateOrConnectWithoutTaskInput[]
    createMany?: tasktagCreateManyTaskInputEnvelope
    connect?: tasktagWhereUniqueInput | tasktagWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type userUpdateOneRequiredWithoutTaskNestedInput = {
    create?: XOR<userCreateWithoutTaskInput, userUncheckedCreateWithoutTaskInput>
    connectOrCreate?: userCreateOrConnectWithoutTaskInput
    upsert?: userUpsertWithoutTaskInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutTaskInput, userUpdateWithoutTaskInput>, userUncheckedUpdateWithoutTaskInput>
  }

  export type tasktagUpdateManyWithoutTaskNestedInput = {
    create?: XOR<tasktagCreateWithoutTaskInput, tasktagUncheckedCreateWithoutTaskInput> | tasktagCreateWithoutTaskInput[] | tasktagUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: tasktagCreateOrConnectWithoutTaskInput | tasktagCreateOrConnectWithoutTaskInput[]
    upsert?: tasktagUpsertWithWhereUniqueWithoutTaskInput | tasktagUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: tasktagCreateManyTaskInputEnvelope
    set?: tasktagWhereUniqueInput | tasktagWhereUniqueInput[]
    disconnect?: tasktagWhereUniqueInput | tasktagWhereUniqueInput[]
    delete?: tasktagWhereUniqueInput | tasktagWhereUniqueInput[]
    connect?: tasktagWhereUniqueInput | tasktagWhereUniqueInput[]
    update?: tasktagUpdateWithWhereUniqueWithoutTaskInput | tasktagUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: tasktagUpdateManyWithWhereWithoutTaskInput | tasktagUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: tasktagScalarWhereInput | tasktagScalarWhereInput[]
  }

  export type tasktagUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<tasktagCreateWithoutTaskInput, tasktagUncheckedCreateWithoutTaskInput> | tasktagCreateWithoutTaskInput[] | tasktagUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: tasktagCreateOrConnectWithoutTaskInput | tasktagCreateOrConnectWithoutTaskInput[]
    upsert?: tasktagUpsertWithWhereUniqueWithoutTaskInput | tasktagUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: tasktagCreateManyTaskInputEnvelope
    set?: tasktagWhereUniqueInput | tasktagWhereUniqueInput[]
    disconnect?: tasktagWhereUniqueInput | tasktagWhereUniqueInput[]
    delete?: tasktagWhereUniqueInput | tasktagWhereUniqueInput[]
    connect?: tasktagWhereUniqueInput | tasktagWhereUniqueInput[]
    update?: tasktagUpdateWithWhereUniqueWithoutTaskInput | tasktagUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: tasktagUpdateManyWithWhereWithoutTaskInput | tasktagUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: tasktagScalarWhereInput | tasktagScalarWhereInput[]
  }

  export type tagCreateNestedOneWithoutTasktagInput = {
    create?: XOR<tagCreateWithoutTasktagInput, tagUncheckedCreateWithoutTasktagInput>
    connectOrCreate?: tagCreateOrConnectWithoutTasktagInput
    connect?: tagWhereUniqueInput
  }

  export type taskCreateNestedOneWithoutTasktagInput = {
    create?: XOR<taskCreateWithoutTasktagInput, taskUncheckedCreateWithoutTasktagInput>
    connectOrCreate?: taskCreateOrConnectWithoutTasktagInput
    connect?: taskWhereUniqueInput
  }

  export type tagUpdateOneRequiredWithoutTasktagNestedInput = {
    create?: XOR<tagCreateWithoutTasktagInput, tagUncheckedCreateWithoutTasktagInput>
    connectOrCreate?: tagCreateOrConnectWithoutTasktagInput
    upsert?: tagUpsertWithoutTasktagInput
    connect?: tagWhereUniqueInput
    update?: XOR<XOR<tagUpdateToOneWithWhereWithoutTasktagInput, tagUpdateWithoutTasktagInput>, tagUncheckedUpdateWithoutTasktagInput>
  }

  export type taskUpdateOneRequiredWithoutTasktagNestedInput = {
    create?: XOR<taskCreateWithoutTasktagInput, taskUncheckedCreateWithoutTasktagInput>
    connectOrCreate?: taskCreateOrConnectWithoutTasktagInput
    upsert?: taskUpsertWithoutTasktagInput
    connect?: taskWhereUniqueInput
    update?: XOR<XOR<taskUpdateToOneWithWhereWithoutTasktagInput, taskUpdateWithoutTasktagInput>, taskUncheckedUpdateWithoutTasktagInput>
  }

  export type assignmentCreateNestedManyWithoutUserInput = {
    create?: XOR<assignmentCreateWithoutUserInput, assignmentUncheckedCreateWithoutUserInput> | assignmentCreateWithoutUserInput[] | assignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: assignmentCreateOrConnectWithoutUserInput | assignmentCreateOrConnectWithoutUserInput[]
    createMany?: assignmentCreateManyUserInputEnvelope
    connect?: assignmentWhereUniqueInput | assignmentWhereUniqueInput[]
  }

  export type taskCreateNestedManyWithoutUserInput = {
    create?: XOR<taskCreateWithoutUserInput, taskUncheckedCreateWithoutUserInput> | taskCreateWithoutUserInput[] | taskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: taskCreateOrConnectWithoutUserInput | taskCreateOrConnectWithoutUserInput[]
    createMany?: taskCreateManyUserInputEnvelope
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[]
  }

  export type userprofileCreateNestedOneWithoutUserInput = {
    create?: XOR<userprofileCreateWithoutUserInput, userprofileUncheckedCreateWithoutUserInput>
    connectOrCreate?: userprofileCreateOrConnectWithoutUserInput
    connect?: userprofileWhereUniqueInput
  }

  export type workapplicationCreateNestedManyWithoutUserInput = {
    create?: XOR<workapplicationCreateWithoutUserInput, workapplicationUncheckedCreateWithoutUserInput> | workapplicationCreateWithoutUserInput[] | workapplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: workapplicationCreateOrConnectWithoutUserInput | workapplicationCreateOrConnectWithoutUserInput[]
    createMany?: workapplicationCreateManyUserInputEnvelope
    connect?: workapplicationWhereUniqueInput | workapplicationWhereUniqueInput[]
  }

  export type assignmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<assignmentCreateWithoutUserInput, assignmentUncheckedCreateWithoutUserInput> | assignmentCreateWithoutUserInput[] | assignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: assignmentCreateOrConnectWithoutUserInput | assignmentCreateOrConnectWithoutUserInput[]
    createMany?: assignmentCreateManyUserInputEnvelope
    connect?: assignmentWhereUniqueInput | assignmentWhereUniqueInput[]
  }

  export type taskUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<taskCreateWithoutUserInput, taskUncheckedCreateWithoutUserInput> | taskCreateWithoutUserInput[] | taskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: taskCreateOrConnectWithoutUserInput | taskCreateOrConnectWithoutUserInput[]
    createMany?: taskCreateManyUserInputEnvelope
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[]
  }

  export type userprofileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<userprofileCreateWithoutUserInput, userprofileUncheckedCreateWithoutUserInput>
    connectOrCreate?: userprofileCreateOrConnectWithoutUserInput
    connect?: userprofileWhereUniqueInput
  }

  export type workapplicationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<workapplicationCreateWithoutUserInput, workapplicationUncheckedCreateWithoutUserInput> | workapplicationCreateWithoutUserInput[] | workapplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: workapplicationCreateOrConnectWithoutUserInput | workapplicationCreateOrConnectWithoutUserInput[]
    createMany?: workapplicationCreateManyUserInputEnvelope
    connect?: workapplicationWhereUniqueInput | workapplicationWhereUniqueInput[]
  }

  export type Enumuser_user_typeFieldUpdateOperationsInput = {
    set?: $Enums.user_user_type
  }

  export type assignmentUpdateManyWithoutUserNestedInput = {
    create?: XOR<assignmentCreateWithoutUserInput, assignmentUncheckedCreateWithoutUserInput> | assignmentCreateWithoutUserInput[] | assignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: assignmentCreateOrConnectWithoutUserInput | assignmentCreateOrConnectWithoutUserInput[]
    upsert?: assignmentUpsertWithWhereUniqueWithoutUserInput | assignmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: assignmentCreateManyUserInputEnvelope
    set?: assignmentWhereUniqueInput | assignmentWhereUniqueInput[]
    disconnect?: assignmentWhereUniqueInput | assignmentWhereUniqueInput[]
    delete?: assignmentWhereUniqueInput | assignmentWhereUniqueInput[]
    connect?: assignmentWhereUniqueInput | assignmentWhereUniqueInput[]
    update?: assignmentUpdateWithWhereUniqueWithoutUserInput | assignmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: assignmentUpdateManyWithWhereWithoutUserInput | assignmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: assignmentScalarWhereInput | assignmentScalarWhereInput[]
  }

  export type taskUpdateManyWithoutUserNestedInput = {
    create?: XOR<taskCreateWithoutUserInput, taskUncheckedCreateWithoutUserInput> | taskCreateWithoutUserInput[] | taskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: taskCreateOrConnectWithoutUserInput | taskCreateOrConnectWithoutUserInput[]
    upsert?: taskUpsertWithWhereUniqueWithoutUserInput | taskUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: taskCreateManyUserInputEnvelope
    set?: taskWhereUniqueInput | taskWhereUniqueInput[]
    disconnect?: taskWhereUniqueInput | taskWhereUniqueInput[]
    delete?: taskWhereUniqueInput | taskWhereUniqueInput[]
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[]
    update?: taskUpdateWithWhereUniqueWithoutUserInput | taskUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: taskUpdateManyWithWhereWithoutUserInput | taskUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: taskScalarWhereInput | taskScalarWhereInput[]
  }

  export type userprofileUpdateOneWithoutUserNestedInput = {
    create?: XOR<userprofileCreateWithoutUserInput, userprofileUncheckedCreateWithoutUserInput>
    connectOrCreate?: userprofileCreateOrConnectWithoutUserInput
    upsert?: userprofileUpsertWithoutUserInput
    disconnect?: userprofileWhereInput | boolean
    delete?: userprofileWhereInput | boolean
    connect?: userprofileWhereUniqueInput
    update?: XOR<XOR<userprofileUpdateToOneWithWhereWithoutUserInput, userprofileUpdateWithoutUserInput>, userprofileUncheckedUpdateWithoutUserInput>
  }

  export type workapplicationUpdateManyWithoutUserNestedInput = {
    create?: XOR<workapplicationCreateWithoutUserInput, workapplicationUncheckedCreateWithoutUserInput> | workapplicationCreateWithoutUserInput[] | workapplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: workapplicationCreateOrConnectWithoutUserInput | workapplicationCreateOrConnectWithoutUserInput[]
    upsert?: workapplicationUpsertWithWhereUniqueWithoutUserInput | workapplicationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: workapplicationCreateManyUserInputEnvelope
    set?: workapplicationWhereUniqueInput | workapplicationWhereUniqueInput[]
    disconnect?: workapplicationWhereUniqueInput | workapplicationWhereUniqueInput[]
    delete?: workapplicationWhereUniqueInput | workapplicationWhereUniqueInput[]
    connect?: workapplicationWhereUniqueInput | workapplicationWhereUniqueInput[]
    update?: workapplicationUpdateWithWhereUniqueWithoutUserInput | workapplicationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: workapplicationUpdateManyWithWhereWithoutUserInput | workapplicationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: workapplicationScalarWhereInput | workapplicationScalarWhereInput[]
  }

  export type assignmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<assignmentCreateWithoutUserInput, assignmentUncheckedCreateWithoutUserInput> | assignmentCreateWithoutUserInput[] | assignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: assignmentCreateOrConnectWithoutUserInput | assignmentCreateOrConnectWithoutUserInput[]
    upsert?: assignmentUpsertWithWhereUniqueWithoutUserInput | assignmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: assignmentCreateManyUserInputEnvelope
    set?: assignmentWhereUniqueInput | assignmentWhereUniqueInput[]
    disconnect?: assignmentWhereUniqueInput | assignmentWhereUniqueInput[]
    delete?: assignmentWhereUniqueInput | assignmentWhereUniqueInput[]
    connect?: assignmentWhereUniqueInput | assignmentWhereUniqueInput[]
    update?: assignmentUpdateWithWhereUniqueWithoutUserInput | assignmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: assignmentUpdateManyWithWhereWithoutUserInput | assignmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: assignmentScalarWhereInput | assignmentScalarWhereInput[]
  }

  export type taskUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<taskCreateWithoutUserInput, taskUncheckedCreateWithoutUserInput> | taskCreateWithoutUserInput[] | taskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: taskCreateOrConnectWithoutUserInput | taskCreateOrConnectWithoutUserInput[]
    upsert?: taskUpsertWithWhereUniqueWithoutUserInput | taskUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: taskCreateManyUserInputEnvelope
    set?: taskWhereUniqueInput | taskWhereUniqueInput[]
    disconnect?: taskWhereUniqueInput | taskWhereUniqueInput[]
    delete?: taskWhereUniqueInput | taskWhereUniqueInput[]
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[]
    update?: taskUpdateWithWhereUniqueWithoutUserInput | taskUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: taskUpdateManyWithWhereWithoutUserInput | taskUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: taskScalarWhereInput | taskScalarWhereInput[]
  }

  export type userprofileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<userprofileCreateWithoutUserInput, userprofileUncheckedCreateWithoutUserInput>
    connectOrCreate?: userprofileCreateOrConnectWithoutUserInput
    upsert?: userprofileUpsertWithoutUserInput
    disconnect?: userprofileWhereInput | boolean
    delete?: userprofileWhereInput | boolean
    connect?: userprofileWhereUniqueInput
    update?: XOR<XOR<userprofileUpdateToOneWithWhereWithoutUserInput, userprofileUpdateWithoutUserInput>, userprofileUncheckedUpdateWithoutUserInput>
  }

  export type workapplicationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<workapplicationCreateWithoutUserInput, workapplicationUncheckedCreateWithoutUserInput> | workapplicationCreateWithoutUserInput[] | workapplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: workapplicationCreateOrConnectWithoutUserInput | workapplicationCreateOrConnectWithoutUserInput[]
    upsert?: workapplicationUpsertWithWhereUniqueWithoutUserInput | workapplicationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: workapplicationCreateManyUserInputEnvelope
    set?: workapplicationWhereUniqueInput | workapplicationWhereUniqueInput[]
    disconnect?: workapplicationWhereUniqueInput | workapplicationWhereUniqueInput[]
    delete?: workapplicationWhereUniqueInput | workapplicationWhereUniqueInput[]
    connect?: workapplicationWhereUniqueInput | workapplicationWhereUniqueInput[]
    update?: workapplicationUpdateWithWhereUniqueWithoutUserInput | workapplicationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: workapplicationUpdateManyWithWhereWithoutUserInput | workapplicationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: workapplicationScalarWhereInput | workapplicationScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutUserprofileInput = {
    create?: XOR<userCreateWithoutUserprofileInput, userUncheckedCreateWithoutUserprofileInput>
    connectOrCreate?: userCreateOrConnectWithoutUserprofileInput
    connect?: userWhereUniqueInput
  }

  export type Enumuserprofile_primary_roleFieldUpdateOperationsInput = {
    set?: $Enums.userprofile_primary_role
  }

  export type NullableEnumuserprofile_secondary_roleFieldUpdateOperationsInput = {
    set?: $Enums.userprofile_secondary_role | null
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type userUpdateOneRequiredWithoutUserprofileNestedInput = {
    create?: XOR<userCreateWithoutUserprofileInput, userUncheckedCreateWithoutUserprofileInput>
    connectOrCreate?: userCreateOrConnectWithoutUserprofileInput
    upsert?: userUpsertWithoutUserprofileInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutUserprofileInput, userUpdateWithoutUserprofileInput>, userUncheckedUpdateWithoutUserprofileInput>
  }

  export type assignmentCreateNestedManyWithoutWorkInput = {
    create?: XOR<assignmentCreateWithoutWorkInput, assignmentUncheckedCreateWithoutWorkInput> | assignmentCreateWithoutWorkInput[] | assignmentUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: assignmentCreateOrConnectWithoutWorkInput | assignmentCreateOrConnectWithoutWorkInput[]
    createMany?: assignmentCreateManyWorkInputEnvelope
    connect?: assignmentWhereUniqueInput | assignmentWhereUniqueInput[]
  }

  export type projectCreateNestedOneWithoutWorkInput = {
    create?: XOR<projectCreateWithoutWorkInput, projectUncheckedCreateWithoutWorkInput>
    connectOrCreate?: projectCreateOrConnectWithoutWorkInput
    connect?: projectWhereUniqueInput
  }

  export type workapplicationCreateNestedManyWithoutWorkInput = {
    create?: XOR<workapplicationCreateWithoutWorkInput, workapplicationUncheckedCreateWithoutWorkInput> | workapplicationCreateWithoutWorkInput[] | workapplicationUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: workapplicationCreateOrConnectWithoutWorkInput | workapplicationCreateOrConnectWithoutWorkInput[]
    createMany?: workapplicationCreateManyWorkInputEnvelope
    connect?: workapplicationWhereUniqueInput | workapplicationWhereUniqueInput[]
  }

  export type assignmentUncheckedCreateNestedManyWithoutWorkInput = {
    create?: XOR<assignmentCreateWithoutWorkInput, assignmentUncheckedCreateWithoutWorkInput> | assignmentCreateWithoutWorkInput[] | assignmentUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: assignmentCreateOrConnectWithoutWorkInput | assignmentCreateOrConnectWithoutWorkInput[]
    createMany?: assignmentCreateManyWorkInputEnvelope
    connect?: assignmentWhereUniqueInput | assignmentWhereUniqueInput[]
  }

  export type workapplicationUncheckedCreateNestedManyWithoutWorkInput = {
    create?: XOR<workapplicationCreateWithoutWorkInput, workapplicationUncheckedCreateWithoutWorkInput> | workapplicationCreateWithoutWorkInput[] | workapplicationUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: workapplicationCreateOrConnectWithoutWorkInput | workapplicationCreateOrConnectWithoutWorkInput[]
    createMany?: workapplicationCreateManyWorkInputEnvelope
    connect?: workapplicationWhereUniqueInput | workapplicationWhereUniqueInput[]
  }

  export type Enumwork_role_categoryFieldUpdateOperationsInput = {
    set?: $Enums.work_role_category
  }

  export type Enumwork_work_statusFieldUpdateOperationsInput = {
    set?: $Enums.work_work_status
  }

  export type assignmentUpdateManyWithoutWorkNestedInput = {
    create?: XOR<assignmentCreateWithoutWorkInput, assignmentUncheckedCreateWithoutWorkInput> | assignmentCreateWithoutWorkInput[] | assignmentUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: assignmentCreateOrConnectWithoutWorkInput | assignmentCreateOrConnectWithoutWorkInput[]
    upsert?: assignmentUpsertWithWhereUniqueWithoutWorkInput | assignmentUpsertWithWhereUniqueWithoutWorkInput[]
    createMany?: assignmentCreateManyWorkInputEnvelope
    set?: assignmentWhereUniqueInput | assignmentWhereUniqueInput[]
    disconnect?: assignmentWhereUniqueInput | assignmentWhereUniqueInput[]
    delete?: assignmentWhereUniqueInput | assignmentWhereUniqueInput[]
    connect?: assignmentWhereUniqueInput | assignmentWhereUniqueInput[]
    update?: assignmentUpdateWithWhereUniqueWithoutWorkInput | assignmentUpdateWithWhereUniqueWithoutWorkInput[]
    updateMany?: assignmentUpdateManyWithWhereWithoutWorkInput | assignmentUpdateManyWithWhereWithoutWorkInput[]
    deleteMany?: assignmentScalarWhereInput | assignmentScalarWhereInput[]
  }

  export type projectUpdateOneRequiredWithoutWorkNestedInput = {
    create?: XOR<projectCreateWithoutWorkInput, projectUncheckedCreateWithoutWorkInput>
    connectOrCreate?: projectCreateOrConnectWithoutWorkInput
    upsert?: projectUpsertWithoutWorkInput
    connect?: projectWhereUniqueInput
    update?: XOR<XOR<projectUpdateToOneWithWhereWithoutWorkInput, projectUpdateWithoutWorkInput>, projectUncheckedUpdateWithoutWorkInput>
  }

  export type workapplicationUpdateManyWithoutWorkNestedInput = {
    create?: XOR<workapplicationCreateWithoutWorkInput, workapplicationUncheckedCreateWithoutWorkInput> | workapplicationCreateWithoutWorkInput[] | workapplicationUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: workapplicationCreateOrConnectWithoutWorkInput | workapplicationCreateOrConnectWithoutWorkInput[]
    upsert?: workapplicationUpsertWithWhereUniqueWithoutWorkInput | workapplicationUpsertWithWhereUniqueWithoutWorkInput[]
    createMany?: workapplicationCreateManyWorkInputEnvelope
    set?: workapplicationWhereUniqueInput | workapplicationWhereUniqueInput[]
    disconnect?: workapplicationWhereUniqueInput | workapplicationWhereUniqueInput[]
    delete?: workapplicationWhereUniqueInput | workapplicationWhereUniqueInput[]
    connect?: workapplicationWhereUniqueInput | workapplicationWhereUniqueInput[]
    update?: workapplicationUpdateWithWhereUniqueWithoutWorkInput | workapplicationUpdateWithWhereUniqueWithoutWorkInput[]
    updateMany?: workapplicationUpdateManyWithWhereWithoutWorkInput | workapplicationUpdateManyWithWhereWithoutWorkInput[]
    deleteMany?: workapplicationScalarWhereInput | workapplicationScalarWhereInput[]
  }

  export type assignmentUncheckedUpdateManyWithoutWorkNestedInput = {
    create?: XOR<assignmentCreateWithoutWorkInput, assignmentUncheckedCreateWithoutWorkInput> | assignmentCreateWithoutWorkInput[] | assignmentUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: assignmentCreateOrConnectWithoutWorkInput | assignmentCreateOrConnectWithoutWorkInput[]
    upsert?: assignmentUpsertWithWhereUniqueWithoutWorkInput | assignmentUpsertWithWhereUniqueWithoutWorkInput[]
    createMany?: assignmentCreateManyWorkInputEnvelope
    set?: assignmentWhereUniqueInput | assignmentWhereUniqueInput[]
    disconnect?: assignmentWhereUniqueInput | assignmentWhereUniqueInput[]
    delete?: assignmentWhereUniqueInput | assignmentWhereUniqueInput[]
    connect?: assignmentWhereUniqueInput | assignmentWhereUniqueInput[]
    update?: assignmentUpdateWithWhereUniqueWithoutWorkInput | assignmentUpdateWithWhereUniqueWithoutWorkInput[]
    updateMany?: assignmentUpdateManyWithWhereWithoutWorkInput | assignmentUpdateManyWithWhereWithoutWorkInput[]
    deleteMany?: assignmentScalarWhereInput | assignmentScalarWhereInput[]
  }

  export type workapplicationUncheckedUpdateManyWithoutWorkNestedInput = {
    create?: XOR<workapplicationCreateWithoutWorkInput, workapplicationUncheckedCreateWithoutWorkInput> | workapplicationCreateWithoutWorkInput[] | workapplicationUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: workapplicationCreateOrConnectWithoutWorkInput | workapplicationCreateOrConnectWithoutWorkInput[]
    upsert?: workapplicationUpsertWithWhereUniqueWithoutWorkInput | workapplicationUpsertWithWhereUniqueWithoutWorkInput[]
    createMany?: workapplicationCreateManyWorkInputEnvelope
    set?: workapplicationWhereUniqueInput | workapplicationWhereUniqueInput[]
    disconnect?: workapplicationWhereUniqueInput | workapplicationWhereUniqueInput[]
    delete?: workapplicationWhereUniqueInput | workapplicationWhereUniqueInput[]
    connect?: workapplicationWhereUniqueInput | workapplicationWhereUniqueInput[]
    update?: workapplicationUpdateWithWhereUniqueWithoutWorkInput | workapplicationUpdateWithWhereUniqueWithoutWorkInput[]
    updateMany?: workapplicationUpdateManyWithWhereWithoutWorkInput | workapplicationUpdateManyWithWhereWithoutWorkInput[]
    deleteMany?: workapplicationScalarWhereInput | workapplicationScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutWorkapplicationInput = {
    create?: XOR<userCreateWithoutWorkapplicationInput, userUncheckedCreateWithoutWorkapplicationInput>
    connectOrCreate?: userCreateOrConnectWithoutWorkapplicationInput
    connect?: userWhereUniqueInput
  }

  export type workCreateNestedOneWithoutWorkapplicationInput = {
    create?: XOR<workCreateWithoutWorkapplicationInput, workUncheckedCreateWithoutWorkapplicationInput>
    connectOrCreate?: workCreateOrConnectWithoutWorkapplicationInput
    connect?: workWhereUniqueInput
  }

  export type Enumworkapplication_application_statusFieldUpdateOperationsInput = {
    set?: $Enums.workapplication_application_status
  }

  export type userUpdateOneRequiredWithoutWorkapplicationNestedInput = {
    create?: XOR<userCreateWithoutWorkapplicationInput, userUncheckedCreateWithoutWorkapplicationInput>
    connectOrCreate?: userCreateOrConnectWithoutWorkapplicationInput
    upsert?: userUpsertWithoutWorkapplicationInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutWorkapplicationInput, userUpdateWithoutWorkapplicationInput>, userUncheckedUpdateWithoutWorkapplicationInput>
  }

  export type workUpdateOneRequiredWithoutWorkapplicationNestedInput = {
    create?: XOR<workCreateWithoutWorkapplicationInput, workUncheckedCreateWithoutWorkapplicationInput>
    connectOrCreate?: workCreateOrConnectWithoutWorkapplicationInput
    upsert?: workUpsertWithoutWorkapplicationInput
    connect?: workWhereUniqueInput
    update?: XOR<XOR<workUpdateToOneWithWhereWithoutWorkapplicationInput, workUpdateWithoutWorkapplicationInput>, workUncheckedUpdateWithoutWorkapplicationInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumassignment_assignment_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.assignment_assignment_status | Enumassignment_assignment_statusFieldRefInput<$PrismaModel>
    in?: $Enums.assignment_assignment_status[]
    notIn?: $Enums.assignment_assignment_status[]
    not?: NestedEnumassignment_assignment_statusFilter<$PrismaModel> | $Enums.assignment_assignment_status
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumassignment_assignment_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.assignment_assignment_status | Enumassignment_assignment_statusFieldRefInput<$PrismaModel>
    in?: $Enums.assignment_assignment_status[]
    notIn?: $Enums.assignment_assignment_status[]
    not?: NestedEnumassignment_assignment_statusWithAggregatesFilter<$PrismaModel> | $Enums.assignment_assignment_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumassignment_assignment_statusFilter<$PrismaModel>
    _max?: NestedEnumassignment_assignment_statusFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumproject_project_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.project_project_status | Enumproject_project_statusFieldRefInput<$PrismaModel>
    in?: $Enums.project_project_status[]
    notIn?: $Enums.project_project_status[]
    not?: NestedEnumproject_project_statusFilter<$PrismaModel> | $Enums.project_project_status
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumproject_project_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.project_project_status | Enumproject_project_statusFieldRefInput<$PrismaModel>
    in?: $Enums.project_project_status[]
    notIn?: $Enums.project_project_status[]
    not?: NestedEnumproject_project_statusWithAggregatesFilter<$PrismaModel> | $Enums.project_project_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumproject_project_statusFilter<$PrismaModel>
    _max?: NestedEnumproject_project_statusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumuser_user_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.user_user_type | Enumuser_user_typeFieldRefInput<$PrismaModel>
    in?: $Enums.user_user_type[]
    notIn?: $Enums.user_user_type[]
    not?: NestedEnumuser_user_typeFilter<$PrismaModel> | $Enums.user_user_type
  }

  export type NestedEnumuser_user_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_user_type | Enumuser_user_typeFieldRefInput<$PrismaModel>
    in?: $Enums.user_user_type[]
    notIn?: $Enums.user_user_type[]
    not?: NestedEnumuser_user_typeWithAggregatesFilter<$PrismaModel> | $Enums.user_user_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuser_user_typeFilter<$PrismaModel>
    _max?: NestedEnumuser_user_typeFilter<$PrismaModel>
  }

  export type NestedEnumuserprofile_primary_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.userprofile_primary_role | Enumuserprofile_primary_roleFieldRefInput<$PrismaModel>
    in?: $Enums.userprofile_primary_role[]
    notIn?: $Enums.userprofile_primary_role[]
    not?: NestedEnumuserprofile_primary_roleFilter<$PrismaModel> | $Enums.userprofile_primary_role
  }

  export type NestedEnumuserprofile_secondary_roleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.userprofile_secondary_role | Enumuserprofile_secondary_roleFieldRefInput<$PrismaModel> | null
    in?: $Enums.userprofile_secondary_role[] | null
    notIn?: $Enums.userprofile_secondary_role[] | null
    not?: NestedEnumuserprofile_secondary_roleNullableFilter<$PrismaModel> | $Enums.userprofile_secondary_role | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumuserprofile_primary_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.userprofile_primary_role | Enumuserprofile_primary_roleFieldRefInput<$PrismaModel>
    in?: $Enums.userprofile_primary_role[]
    notIn?: $Enums.userprofile_primary_role[]
    not?: NestedEnumuserprofile_primary_roleWithAggregatesFilter<$PrismaModel> | $Enums.userprofile_primary_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuserprofile_primary_roleFilter<$PrismaModel>
    _max?: NestedEnumuserprofile_primary_roleFilter<$PrismaModel>
  }

  export type NestedEnumuserprofile_secondary_roleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.userprofile_secondary_role | Enumuserprofile_secondary_roleFieldRefInput<$PrismaModel> | null
    in?: $Enums.userprofile_secondary_role[] | null
    notIn?: $Enums.userprofile_secondary_role[] | null
    not?: NestedEnumuserprofile_secondary_roleNullableWithAggregatesFilter<$PrismaModel> | $Enums.userprofile_secondary_role | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumuserprofile_secondary_roleNullableFilter<$PrismaModel>
    _max?: NestedEnumuserprofile_secondary_roleNullableFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumwork_role_categoryFilter<$PrismaModel = never> = {
    equals?: $Enums.work_role_category | Enumwork_role_categoryFieldRefInput<$PrismaModel>
    in?: $Enums.work_role_category[]
    notIn?: $Enums.work_role_category[]
    not?: NestedEnumwork_role_categoryFilter<$PrismaModel> | $Enums.work_role_category
  }

  export type NestedEnumwork_work_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.work_work_status | Enumwork_work_statusFieldRefInput<$PrismaModel>
    in?: $Enums.work_work_status[]
    notIn?: $Enums.work_work_status[]
    not?: NestedEnumwork_work_statusFilter<$PrismaModel> | $Enums.work_work_status
  }

  export type NestedEnumwork_role_categoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.work_role_category | Enumwork_role_categoryFieldRefInput<$PrismaModel>
    in?: $Enums.work_role_category[]
    notIn?: $Enums.work_role_category[]
    not?: NestedEnumwork_role_categoryWithAggregatesFilter<$PrismaModel> | $Enums.work_role_category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumwork_role_categoryFilter<$PrismaModel>
    _max?: NestedEnumwork_role_categoryFilter<$PrismaModel>
  }

  export type NestedEnumwork_work_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.work_work_status | Enumwork_work_statusFieldRefInput<$PrismaModel>
    in?: $Enums.work_work_status[]
    notIn?: $Enums.work_work_status[]
    not?: NestedEnumwork_work_statusWithAggregatesFilter<$PrismaModel> | $Enums.work_work_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumwork_work_statusFilter<$PrismaModel>
    _max?: NestedEnumwork_work_statusFilter<$PrismaModel>
  }

  export type NestedEnumworkapplication_application_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.workapplication_application_status | Enumworkapplication_application_statusFieldRefInput<$PrismaModel>
    in?: $Enums.workapplication_application_status[]
    notIn?: $Enums.workapplication_application_status[]
    not?: NestedEnumworkapplication_application_statusFilter<$PrismaModel> | $Enums.workapplication_application_status
  }

  export type NestedEnumworkapplication_application_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.workapplication_application_status | Enumworkapplication_application_statusFieldRefInput<$PrismaModel>
    in?: $Enums.workapplication_application_status[]
    notIn?: $Enums.workapplication_application_status[]
    not?: NestedEnumworkapplication_application_statusWithAggregatesFilter<$PrismaModel> | $Enums.workapplication_application_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumworkapplication_application_statusFilter<$PrismaModel>
    _max?: NestedEnumworkapplication_application_statusFilter<$PrismaModel>
  }

  export type userCreateWithoutAssignmentInput = {
    email: string
    google_id?: string | null
    full_name?: string | null
    avatar_url?: string | null
    user_type?: $Enums.user_user_type
    created_at?: Date | string
    task?: taskCreateNestedManyWithoutUserInput
    userprofile?: userprofileCreateNestedOneWithoutUserInput
    workapplication?: workapplicationCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutAssignmentInput = {
    user_id?: number
    email: string
    google_id?: string | null
    full_name?: string | null
    avatar_url?: string | null
    user_type?: $Enums.user_user_type
    created_at?: Date | string
    task?: taskUncheckedCreateNestedManyWithoutUserInput
    userprofile?: userprofileUncheckedCreateNestedOneWithoutUserInput
    workapplication?: workapplicationUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutAssignmentInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutAssignmentInput, userUncheckedCreateWithoutAssignmentInput>
  }

  export type workCreateWithoutAssignmentInput = {
    project_role: string
    role_category: $Enums.work_role_category
    expected_salary?: Decimal | DecimalJsLike | number | string
    is_open_pool?: boolean
    work_description: string
    work_start_date: Date | string
    work_start_time?: Date | string | null
    work_end_time?: Date | string | null
    work_status?: $Enums.work_work_status
    project: projectCreateNestedOneWithoutWorkInput
    workapplication?: workapplicationCreateNestedManyWithoutWorkInput
  }

  export type workUncheckedCreateWithoutAssignmentInput = {
    work_id?: number
    project_id: number
    project_role: string
    role_category: $Enums.work_role_category
    expected_salary?: Decimal | DecimalJsLike | number | string
    is_open_pool?: boolean
    work_description: string
    work_start_date: Date | string
    work_start_time?: Date | string | null
    work_end_time?: Date | string | null
    work_status?: $Enums.work_work_status
    workapplication?: workapplicationUncheckedCreateNestedManyWithoutWorkInput
  }

  export type workCreateOrConnectWithoutAssignmentInput = {
    where: workWhereUniqueInput
    create: XOR<workCreateWithoutAssignmentInput, workUncheckedCreateWithoutAssignmentInput>
  }

  export type userUpsertWithoutAssignmentInput = {
    update: XOR<userUpdateWithoutAssignmentInput, userUncheckedUpdateWithoutAssignmentInput>
    create: XOR<userCreateWithoutAssignmentInput, userUncheckedCreateWithoutAssignmentInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutAssignmentInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutAssignmentInput, userUncheckedUpdateWithoutAssignmentInput>
  }

  export type userUpdateWithoutAssignmentInput = {
    email?: StringFieldUpdateOperationsInput | string
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_type?: Enumuser_user_typeFieldUpdateOperationsInput | $Enums.user_user_type
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: taskUpdateManyWithoutUserNestedInput
    userprofile?: userprofileUpdateOneWithoutUserNestedInput
    workapplication?: workapplicationUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutAssignmentInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_type?: Enumuser_user_typeFieldUpdateOperationsInput | $Enums.user_user_type
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: taskUncheckedUpdateManyWithoutUserNestedInput
    userprofile?: userprofileUncheckedUpdateOneWithoutUserNestedInput
    workapplication?: workapplicationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type workUpsertWithoutAssignmentInput = {
    update: XOR<workUpdateWithoutAssignmentInput, workUncheckedUpdateWithoutAssignmentInput>
    create: XOR<workCreateWithoutAssignmentInput, workUncheckedCreateWithoutAssignmentInput>
    where?: workWhereInput
  }

  export type workUpdateToOneWithWhereWithoutAssignmentInput = {
    where?: workWhereInput
    data: XOR<workUpdateWithoutAssignmentInput, workUncheckedUpdateWithoutAssignmentInput>
  }

  export type workUpdateWithoutAssignmentInput = {
    project_role?: StringFieldUpdateOperationsInput | string
    role_category?: Enumwork_role_categoryFieldUpdateOperationsInput | $Enums.work_role_category
    expected_salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_open_pool?: BoolFieldUpdateOperationsInput | boolean
    work_description?: StringFieldUpdateOperationsInput | string
    work_start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    work_start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    work_end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    work_status?: Enumwork_work_statusFieldUpdateOperationsInput | $Enums.work_work_status
    project?: projectUpdateOneRequiredWithoutWorkNestedInput
    workapplication?: workapplicationUpdateManyWithoutWorkNestedInput
  }

  export type workUncheckedUpdateWithoutAssignmentInput = {
    work_id?: IntFieldUpdateOperationsInput | number
    project_id?: IntFieldUpdateOperationsInput | number
    project_role?: StringFieldUpdateOperationsInput | string
    role_category?: Enumwork_role_categoryFieldUpdateOperationsInput | $Enums.work_role_category
    expected_salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_open_pool?: BoolFieldUpdateOperationsInput | boolean
    work_description?: StringFieldUpdateOperationsInput | string
    work_start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    work_start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    work_end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    work_status?: Enumwork_work_statusFieldUpdateOperationsInput | $Enums.work_work_status
    workapplication?: workapplicationUncheckedUpdateManyWithoutWorkNestedInput
  }

  export type workCreateWithoutProjectInput = {
    project_role: string
    role_category: $Enums.work_role_category
    expected_salary?: Decimal | DecimalJsLike | number | string
    is_open_pool?: boolean
    work_description: string
    work_start_date: Date | string
    work_start_time?: Date | string | null
    work_end_time?: Date | string | null
    work_status?: $Enums.work_work_status
    assignment?: assignmentCreateNestedManyWithoutWorkInput
    workapplication?: workapplicationCreateNestedManyWithoutWorkInput
  }

  export type workUncheckedCreateWithoutProjectInput = {
    work_id?: number
    project_role: string
    role_category: $Enums.work_role_category
    expected_salary?: Decimal | DecimalJsLike | number | string
    is_open_pool?: boolean
    work_description: string
    work_start_date: Date | string
    work_start_time?: Date | string | null
    work_end_time?: Date | string | null
    work_status?: $Enums.work_work_status
    assignment?: assignmentUncheckedCreateNestedManyWithoutWorkInput
    workapplication?: workapplicationUncheckedCreateNestedManyWithoutWorkInput
  }

  export type workCreateOrConnectWithoutProjectInput = {
    where: workWhereUniqueInput
    create: XOR<workCreateWithoutProjectInput, workUncheckedCreateWithoutProjectInput>
  }

  export type workCreateManyProjectInputEnvelope = {
    data: workCreateManyProjectInput | workCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type workUpsertWithWhereUniqueWithoutProjectInput = {
    where: workWhereUniqueInput
    update: XOR<workUpdateWithoutProjectInput, workUncheckedUpdateWithoutProjectInput>
    create: XOR<workCreateWithoutProjectInput, workUncheckedCreateWithoutProjectInput>
  }

  export type workUpdateWithWhereUniqueWithoutProjectInput = {
    where: workWhereUniqueInput
    data: XOR<workUpdateWithoutProjectInput, workUncheckedUpdateWithoutProjectInput>
  }

  export type workUpdateManyWithWhereWithoutProjectInput = {
    where: workScalarWhereInput
    data: XOR<workUpdateManyMutationInput, workUncheckedUpdateManyWithoutProjectInput>
  }

  export type workScalarWhereInput = {
    AND?: workScalarWhereInput | workScalarWhereInput[]
    OR?: workScalarWhereInput[]
    NOT?: workScalarWhereInput | workScalarWhereInput[]
    work_id?: IntFilter<"work"> | number
    project_id?: IntFilter<"work"> | number
    project_role?: StringFilter<"work"> | string
    role_category?: Enumwork_role_categoryFilter<"work"> | $Enums.work_role_category
    expected_salary?: DecimalFilter<"work"> | Decimal | DecimalJsLike | number | string
    is_open_pool?: BoolFilter<"work"> | boolean
    work_description?: StringFilter<"work"> | string
    work_start_date?: DateTimeFilter<"work"> | Date | string
    work_start_time?: DateTimeNullableFilter<"work"> | Date | string | null
    work_end_time?: DateTimeNullableFilter<"work"> | Date | string | null
    work_status?: Enumwork_work_statusFilter<"work"> | $Enums.work_work_status
  }

  export type tasktagCreateWithoutTagInput = {
    task: taskCreateNestedOneWithoutTasktagInput
  }

  export type tasktagUncheckedCreateWithoutTagInput = {
    task_tag_id?: number
    task_id: number
  }

  export type tasktagCreateOrConnectWithoutTagInput = {
    where: tasktagWhereUniqueInput
    create: XOR<tasktagCreateWithoutTagInput, tasktagUncheckedCreateWithoutTagInput>
  }

  export type tasktagCreateManyTagInputEnvelope = {
    data: tasktagCreateManyTagInput | tasktagCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type tasktagUpsertWithWhereUniqueWithoutTagInput = {
    where: tasktagWhereUniqueInput
    update: XOR<tasktagUpdateWithoutTagInput, tasktagUncheckedUpdateWithoutTagInput>
    create: XOR<tasktagCreateWithoutTagInput, tasktagUncheckedCreateWithoutTagInput>
  }

  export type tasktagUpdateWithWhereUniqueWithoutTagInput = {
    where: tasktagWhereUniqueInput
    data: XOR<tasktagUpdateWithoutTagInput, tasktagUncheckedUpdateWithoutTagInput>
  }

  export type tasktagUpdateManyWithWhereWithoutTagInput = {
    where: tasktagScalarWhereInput
    data: XOR<tasktagUpdateManyMutationInput, tasktagUncheckedUpdateManyWithoutTagInput>
  }

  export type tasktagScalarWhereInput = {
    AND?: tasktagScalarWhereInput | tasktagScalarWhereInput[]
    OR?: tasktagScalarWhereInput[]
    NOT?: tasktagScalarWhereInput | tasktagScalarWhereInput[]
    task_tag_id?: IntFilter<"tasktag"> | number
    task_id?: IntFilter<"tasktag"> | number
    tag_id?: IntFilter<"tasktag"> | number
  }

  export type userCreateWithoutTaskInput = {
    email: string
    google_id?: string | null
    full_name?: string | null
    avatar_url?: string | null
    user_type?: $Enums.user_user_type
    created_at?: Date | string
    assignment?: assignmentCreateNestedManyWithoutUserInput
    userprofile?: userprofileCreateNestedOneWithoutUserInput
    workapplication?: workapplicationCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutTaskInput = {
    user_id?: number
    email: string
    google_id?: string | null
    full_name?: string | null
    avatar_url?: string | null
    user_type?: $Enums.user_user_type
    created_at?: Date | string
    assignment?: assignmentUncheckedCreateNestedManyWithoutUserInput
    userprofile?: userprofileUncheckedCreateNestedOneWithoutUserInput
    workapplication?: workapplicationUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutTaskInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutTaskInput, userUncheckedCreateWithoutTaskInput>
  }

  export type tasktagCreateWithoutTaskInput = {
    tag: tagCreateNestedOneWithoutTasktagInput
  }

  export type tasktagUncheckedCreateWithoutTaskInput = {
    task_tag_id?: number
    tag_id: number
  }

  export type tasktagCreateOrConnectWithoutTaskInput = {
    where: tasktagWhereUniqueInput
    create: XOR<tasktagCreateWithoutTaskInput, tasktagUncheckedCreateWithoutTaskInput>
  }

  export type tasktagCreateManyTaskInputEnvelope = {
    data: tasktagCreateManyTaskInput | tasktagCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithoutTaskInput = {
    update: XOR<userUpdateWithoutTaskInput, userUncheckedUpdateWithoutTaskInput>
    create: XOR<userCreateWithoutTaskInput, userUncheckedCreateWithoutTaskInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutTaskInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutTaskInput, userUncheckedUpdateWithoutTaskInput>
  }

  export type userUpdateWithoutTaskInput = {
    email?: StringFieldUpdateOperationsInput | string
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_type?: Enumuser_user_typeFieldUpdateOperationsInput | $Enums.user_user_type
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    assignment?: assignmentUpdateManyWithoutUserNestedInput
    userprofile?: userprofileUpdateOneWithoutUserNestedInput
    workapplication?: workapplicationUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutTaskInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_type?: Enumuser_user_typeFieldUpdateOperationsInput | $Enums.user_user_type
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    assignment?: assignmentUncheckedUpdateManyWithoutUserNestedInput
    userprofile?: userprofileUncheckedUpdateOneWithoutUserNestedInput
    workapplication?: workapplicationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type tasktagUpsertWithWhereUniqueWithoutTaskInput = {
    where: tasktagWhereUniqueInput
    update: XOR<tasktagUpdateWithoutTaskInput, tasktagUncheckedUpdateWithoutTaskInput>
    create: XOR<tasktagCreateWithoutTaskInput, tasktagUncheckedCreateWithoutTaskInput>
  }

  export type tasktagUpdateWithWhereUniqueWithoutTaskInput = {
    where: tasktagWhereUniqueInput
    data: XOR<tasktagUpdateWithoutTaskInput, tasktagUncheckedUpdateWithoutTaskInput>
  }

  export type tasktagUpdateManyWithWhereWithoutTaskInput = {
    where: tasktagScalarWhereInput
    data: XOR<tasktagUpdateManyMutationInput, tasktagUncheckedUpdateManyWithoutTaskInput>
  }

  export type tagCreateWithoutTasktagInput = {
    tag_name: string
    color_hex?: string
  }

  export type tagUncheckedCreateWithoutTasktagInput = {
    tag_id?: number
    tag_name: string
    color_hex?: string
  }

  export type tagCreateOrConnectWithoutTasktagInput = {
    where: tagWhereUniqueInput
    create: XOR<tagCreateWithoutTasktagInput, tagUncheckedCreateWithoutTasktagInput>
  }

  export type taskCreateWithoutTasktagInput = {
    task_title: string
    task_desc?: string | null
    due_date?: Date | string | null
    is_completed?: boolean
    user: userCreateNestedOneWithoutTaskInput
  }

  export type taskUncheckedCreateWithoutTasktagInput = {
    task_id?: number
    user_id: number
    task_title: string
    task_desc?: string | null
    due_date?: Date | string | null
    is_completed?: boolean
  }

  export type taskCreateOrConnectWithoutTasktagInput = {
    where: taskWhereUniqueInput
    create: XOR<taskCreateWithoutTasktagInput, taskUncheckedCreateWithoutTasktagInput>
  }

  export type tagUpsertWithoutTasktagInput = {
    update: XOR<tagUpdateWithoutTasktagInput, tagUncheckedUpdateWithoutTasktagInput>
    create: XOR<tagCreateWithoutTasktagInput, tagUncheckedCreateWithoutTasktagInput>
    where?: tagWhereInput
  }

  export type tagUpdateToOneWithWhereWithoutTasktagInput = {
    where?: tagWhereInput
    data: XOR<tagUpdateWithoutTasktagInput, tagUncheckedUpdateWithoutTasktagInput>
  }

  export type tagUpdateWithoutTasktagInput = {
    tag_name?: StringFieldUpdateOperationsInput | string
    color_hex?: StringFieldUpdateOperationsInput | string
  }

  export type tagUncheckedUpdateWithoutTasktagInput = {
    tag_id?: IntFieldUpdateOperationsInput | number
    tag_name?: StringFieldUpdateOperationsInput | string
    color_hex?: StringFieldUpdateOperationsInput | string
  }

  export type taskUpsertWithoutTasktagInput = {
    update: XOR<taskUpdateWithoutTasktagInput, taskUncheckedUpdateWithoutTasktagInput>
    create: XOR<taskCreateWithoutTasktagInput, taskUncheckedCreateWithoutTasktagInput>
    where?: taskWhereInput
  }

  export type taskUpdateToOneWithWhereWithoutTasktagInput = {
    where?: taskWhereInput
    data: XOR<taskUpdateWithoutTasktagInput, taskUncheckedUpdateWithoutTasktagInput>
  }

  export type taskUpdateWithoutTasktagInput = {
    task_title?: StringFieldUpdateOperationsInput | string
    task_desc?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_completed?: BoolFieldUpdateOperationsInput | boolean
    user?: userUpdateOneRequiredWithoutTaskNestedInput
  }

  export type taskUncheckedUpdateWithoutTasktagInput = {
    task_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    task_title?: StringFieldUpdateOperationsInput | string
    task_desc?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type assignmentCreateWithoutUserInput = {
    outsider_name?: string | null
    assignment_status?: $Enums.assignment_assignment_status
    withdrawal_reason?: string | null
    work: workCreateNestedOneWithoutAssignmentInput
  }

  export type assignmentUncheckedCreateWithoutUserInput = {
    assignment_id?: number
    work_id: number
    outsider_name?: string | null
    assignment_status?: $Enums.assignment_assignment_status
    withdrawal_reason?: string | null
  }

  export type assignmentCreateOrConnectWithoutUserInput = {
    where: assignmentWhereUniqueInput
    create: XOR<assignmentCreateWithoutUserInput, assignmentUncheckedCreateWithoutUserInput>
  }

  export type assignmentCreateManyUserInputEnvelope = {
    data: assignmentCreateManyUserInput | assignmentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type taskCreateWithoutUserInput = {
    task_title: string
    task_desc?: string | null
    due_date?: Date | string | null
    is_completed?: boolean
    tasktag?: tasktagCreateNestedManyWithoutTaskInput
  }

  export type taskUncheckedCreateWithoutUserInput = {
    task_id?: number
    task_title: string
    task_desc?: string | null
    due_date?: Date | string | null
    is_completed?: boolean
    tasktag?: tasktagUncheckedCreateNestedManyWithoutTaskInput
  }

  export type taskCreateOrConnectWithoutUserInput = {
    where: taskWhereUniqueInput
    create: XOR<taskCreateWithoutUserInput, taskUncheckedCreateWithoutUserInput>
  }

  export type taskCreateManyUserInputEnvelope = {
    data: taskCreateManyUserInput | taskCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type userprofileCreateWithoutUserInput = {
    primary_role?: $Enums.userprofile_primary_role
    secondary_role?: $Enums.userprofile_secondary_role | null
    reliability_score?: Decimal | DecimalJsLike | number | string
    is_setup_complete?: boolean
  }

  export type userprofileUncheckedCreateWithoutUserInput = {
    profile_id?: number
    primary_role?: $Enums.userprofile_primary_role
    secondary_role?: $Enums.userprofile_secondary_role | null
    reliability_score?: Decimal | DecimalJsLike | number | string
    is_setup_complete?: boolean
  }

  export type userprofileCreateOrConnectWithoutUserInput = {
    where: userprofileWhereUniqueInput
    create: XOR<userprofileCreateWithoutUserInput, userprofileUncheckedCreateWithoutUserInput>
  }

  export type workapplicationCreateWithoutUserInput = {
    application_status?: $Enums.workapplication_application_status
    work: workCreateNestedOneWithoutWorkapplicationInput
  }

  export type workapplicationUncheckedCreateWithoutUserInput = {
    application_id?: number
    work_id: number
    application_status?: $Enums.workapplication_application_status
  }

  export type workapplicationCreateOrConnectWithoutUserInput = {
    where: workapplicationWhereUniqueInput
    create: XOR<workapplicationCreateWithoutUserInput, workapplicationUncheckedCreateWithoutUserInput>
  }

  export type workapplicationCreateManyUserInputEnvelope = {
    data: workapplicationCreateManyUserInput | workapplicationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type assignmentUpsertWithWhereUniqueWithoutUserInput = {
    where: assignmentWhereUniqueInput
    update: XOR<assignmentUpdateWithoutUserInput, assignmentUncheckedUpdateWithoutUserInput>
    create: XOR<assignmentCreateWithoutUserInput, assignmentUncheckedCreateWithoutUserInput>
  }

  export type assignmentUpdateWithWhereUniqueWithoutUserInput = {
    where: assignmentWhereUniqueInput
    data: XOR<assignmentUpdateWithoutUserInput, assignmentUncheckedUpdateWithoutUserInput>
  }

  export type assignmentUpdateManyWithWhereWithoutUserInput = {
    where: assignmentScalarWhereInput
    data: XOR<assignmentUpdateManyMutationInput, assignmentUncheckedUpdateManyWithoutUserInput>
  }

  export type assignmentScalarWhereInput = {
    AND?: assignmentScalarWhereInput | assignmentScalarWhereInput[]
    OR?: assignmentScalarWhereInput[]
    NOT?: assignmentScalarWhereInput | assignmentScalarWhereInput[]
    assignment_id?: IntFilter<"assignment"> | number
    work_id?: IntFilter<"assignment"> | number
    user_id?: IntNullableFilter<"assignment"> | number | null
    outsider_name?: StringNullableFilter<"assignment"> | string | null
    assignment_status?: Enumassignment_assignment_statusFilter<"assignment"> | $Enums.assignment_assignment_status
    withdrawal_reason?: StringNullableFilter<"assignment"> | string | null
  }

  export type taskUpsertWithWhereUniqueWithoutUserInput = {
    where: taskWhereUniqueInput
    update: XOR<taskUpdateWithoutUserInput, taskUncheckedUpdateWithoutUserInput>
    create: XOR<taskCreateWithoutUserInput, taskUncheckedCreateWithoutUserInput>
  }

  export type taskUpdateWithWhereUniqueWithoutUserInput = {
    where: taskWhereUniqueInput
    data: XOR<taskUpdateWithoutUserInput, taskUncheckedUpdateWithoutUserInput>
  }

  export type taskUpdateManyWithWhereWithoutUserInput = {
    where: taskScalarWhereInput
    data: XOR<taskUpdateManyMutationInput, taskUncheckedUpdateManyWithoutUserInput>
  }

  export type taskScalarWhereInput = {
    AND?: taskScalarWhereInput | taskScalarWhereInput[]
    OR?: taskScalarWhereInput[]
    NOT?: taskScalarWhereInput | taskScalarWhereInput[]
    task_id?: IntFilter<"task"> | number
    user_id?: IntFilter<"task"> | number
    task_title?: StringFilter<"task"> | string
    task_desc?: StringNullableFilter<"task"> | string | null
    due_date?: DateTimeNullableFilter<"task"> | Date | string | null
    is_completed?: BoolFilter<"task"> | boolean
  }

  export type userprofileUpsertWithoutUserInput = {
    update: XOR<userprofileUpdateWithoutUserInput, userprofileUncheckedUpdateWithoutUserInput>
    create: XOR<userprofileCreateWithoutUserInput, userprofileUncheckedCreateWithoutUserInput>
    where?: userprofileWhereInput
  }

  export type userprofileUpdateToOneWithWhereWithoutUserInput = {
    where?: userprofileWhereInput
    data: XOR<userprofileUpdateWithoutUserInput, userprofileUncheckedUpdateWithoutUserInput>
  }

  export type userprofileUpdateWithoutUserInput = {
    primary_role?: Enumuserprofile_primary_roleFieldUpdateOperationsInput | $Enums.userprofile_primary_role
    secondary_role?: NullableEnumuserprofile_secondary_roleFieldUpdateOperationsInput | $Enums.userprofile_secondary_role | null
    reliability_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_setup_complete?: BoolFieldUpdateOperationsInput | boolean
  }

  export type userprofileUncheckedUpdateWithoutUserInput = {
    profile_id?: IntFieldUpdateOperationsInput | number
    primary_role?: Enumuserprofile_primary_roleFieldUpdateOperationsInput | $Enums.userprofile_primary_role
    secondary_role?: NullableEnumuserprofile_secondary_roleFieldUpdateOperationsInput | $Enums.userprofile_secondary_role | null
    reliability_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_setup_complete?: BoolFieldUpdateOperationsInput | boolean
  }

  export type workapplicationUpsertWithWhereUniqueWithoutUserInput = {
    where: workapplicationWhereUniqueInput
    update: XOR<workapplicationUpdateWithoutUserInput, workapplicationUncheckedUpdateWithoutUserInput>
    create: XOR<workapplicationCreateWithoutUserInput, workapplicationUncheckedCreateWithoutUserInput>
  }

  export type workapplicationUpdateWithWhereUniqueWithoutUserInput = {
    where: workapplicationWhereUniqueInput
    data: XOR<workapplicationUpdateWithoutUserInput, workapplicationUncheckedUpdateWithoutUserInput>
  }

  export type workapplicationUpdateManyWithWhereWithoutUserInput = {
    where: workapplicationScalarWhereInput
    data: XOR<workapplicationUpdateManyMutationInput, workapplicationUncheckedUpdateManyWithoutUserInput>
  }

  export type workapplicationScalarWhereInput = {
    AND?: workapplicationScalarWhereInput | workapplicationScalarWhereInput[]
    OR?: workapplicationScalarWhereInput[]
    NOT?: workapplicationScalarWhereInput | workapplicationScalarWhereInput[]
    application_id?: IntFilter<"workapplication"> | number
    work_id?: IntFilter<"workapplication"> | number
    user_id?: IntFilter<"workapplication"> | number
    application_status?: Enumworkapplication_application_statusFilter<"workapplication"> | $Enums.workapplication_application_status
  }

  export type userCreateWithoutUserprofileInput = {
    email: string
    google_id?: string | null
    full_name?: string | null
    avatar_url?: string | null
    user_type?: $Enums.user_user_type
    created_at?: Date | string
    assignment?: assignmentCreateNestedManyWithoutUserInput
    task?: taskCreateNestedManyWithoutUserInput
    workapplication?: workapplicationCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutUserprofileInput = {
    user_id?: number
    email: string
    google_id?: string | null
    full_name?: string | null
    avatar_url?: string | null
    user_type?: $Enums.user_user_type
    created_at?: Date | string
    assignment?: assignmentUncheckedCreateNestedManyWithoutUserInput
    task?: taskUncheckedCreateNestedManyWithoutUserInput
    workapplication?: workapplicationUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutUserprofileInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutUserprofileInput, userUncheckedCreateWithoutUserprofileInput>
  }

  export type userUpsertWithoutUserprofileInput = {
    update: XOR<userUpdateWithoutUserprofileInput, userUncheckedUpdateWithoutUserprofileInput>
    create: XOR<userCreateWithoutUserprofileInput, userUncheckedCreateWithoutUserprofileInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutUserprofileInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutUserprofileInput, userUncheckedUpdateWithoutUserprofileInput>
  }

  export type userUpdateWithoutUserprofileInput = {
    email?: StringFieldUpdateOperationsInput | string
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_type?: Enumuser_user_typeFieldUpdateOperationsInput | $Enums.user_user_type
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    assignment?: assignmentUpdateManyWithoutUserNestedInput
    task?: taskUpdateManyWithoutUserNestedInput
    workapplication?: workapplicationUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutUserprofileInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_type?: Enumuser_user_typeFieldUpdateOperationsInput | $Enums.user_user_type
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    assignment?: assignmentUncheckedUpdateManyWithoutUserNestedInput
    task?: taskUncheckedUpdateManyWithoutUserNestedInput
    workapplication?: workapplicationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type assignmentCreateWithoutWorkInput = {
    outsider_name?: string | null
    assignment_status?: $Enums.assignment_assignment_status
    withdrawal_reason?: string | null
    user?: userCreateNestedOneWithoutAssignmentInput
  }

  export type assignmentUncheckedCreateWithoutWorkInput = {
    assignment_id?: number
    user_id?: number | null
    outsider_name?: string | null
    assignment_status?: $Enums.assignment_assignment_status
    withdrawal_reason?: string | null
  }

  export type assignmentCreateOrConnectWithoutWorkInput = {
    where: assignmentWhereUniqueInput
    create: XOR<assignmentCreateWithoutWorkInput, assignmentUncheckedCreateWithoutWorkInput>
  }

  export type assignmentCreateManyWorkInputEnvelope = {
    data: assignmentCreateManyWorkInput | assignmentCreateManyWorkInput[]
    skipDuplicates?: boolean
  }

  export type projectCreateWithoutWorkInput = {
    project_name: string
    client_name: string
    project_location: string
    project_description: string
    project_start_date: Date | string
    project_end_date: Date | string
    project_status?: $Enums.project_project_status
  }

  export type projectUncheckedCreateWithoutWorkInput = {
    project_id?: number
    project_name: string
    client_name: string
    project_location: string
    project_description: string
    project_start_date: Date | string
    project_end_date: Date | string
    project_status?: $Enums.project_project_status
  }

  export type projectCreateOrConnectWithoutWorkInput = {
    where: projectWhereUniqueInput
    create: XOR<projectCreateWithoutWorkInput, projectUncheckedCreateWithoutWorkInput>
  }

  export type workapplicationCreateWithoutWorkInput = {
    application_status?: $Enums.workapplication_application_status
    user: userCreateNestedOneWithoutWorkapplicationInput
  }

  export type workapplicationUncheckedCreateWithoutWorkInput = {
    application_id?: number
    user_id: number
    application_status?: $Enums.workapplication_application_status
  }

  export type workapplicationCreateOrConnectWithoutWorkInput = {
    where: workapplicationWhereUniqueInput
    create: XOR<workapplicationCreateWithoutWorkInput, workapplicationUncheckedCreateWithoutWorkInput>
  }

  export type workapplicationCreateManyWorkInputEnvelope = {
    data: workapplicationCreateManyWorkInput | workapplicationCreateManyWorkInput[]
    skipDuplicates?: boolean
  }

  export type assignmentUpsertWithWhereUniqueWithoutWorkInput = {
    where: assignmentWhereUniqueInput
    update: XOR<assignmentUpdateWithoutWorkInput, assignmentUncheckedUpdateWithoutWorkInput>
    create: XOR<assignmentCreateWithoutWorkInput, assignmentUncheckedCreateWithoutWorkInput>
  }

  export type assignmentUpdateWithWhereUniqueWithoutWorkInput = {
    where: assignmentWhereUniqueInput
    data: XOR<assignmentUpdateWithoutWorkInput, assignmentUncheckedUpdateWithoutWorkInput>
  }

  export type assignmentUpdateManyWithWhereWithoutWorkInput = {
    where: assignmentScalarWhereInput
    data: XOR<assignmentUpdateManyMutationInput, assignmentUncheckedUpdateManyWithoutWorkInput>
  }

  export type projectUpsertWithoutWorkInput = {
    update: XOR<projectUpdateWithoutWorkInput, projectUncheckedUpdateWithoutWorkInput>
    create: XOR<projectCreateWithoutWorkInput, projectUncheckedCreateWithoutWorkInput>
    where?: projectWhereInput
  }

  export type projectUpdateToOneWithWhereWithoutWorkInput = {
    where?: projectWhereInput
    data: XOR<projectUpdateWithoutWorkInput, projectUncheckedUpdateWithoutWorkInput>
  }

  export type projectUpdateWithoutWorkInput = {
    project_name?: StringFieldUpdateOperationsInput | string
    client_name?: StringFieldUpdateOperationsInput | string
    project_location?: StringFieldUpdateOperationsInput | string
    project_description?: StringFieldUpdateOperationsInput | string
    project_start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    project_end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    project_status?: Enumproject_project_statusFieldUpdateOperationsInput | $Enums.project_project_status
  }

  export type projectUncheckedUpdateWithoutWorkInput = {
    project_id?: IntFieldUpdateOperationsInput | number
    project_name?: StringFieldUpdateOperationsInput | string
    client_name?: StringFieldUpdateOperationsInput | string
    project_location?: StringFieldUpdateOperationsInput | string
    project_description?: StringFieldUpdateOperationsInput | string
    project_start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    project_end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    project_status?: Enumproject_project_statusFieldUpdateOperationsInput | $Enums.project_project_status
  }

  export type workapplicationUpsertWithWhereUniqueWithoutWorkInput = {
    where: workapplicationWhereUniqueInput
    update: XOR<workapplicationUpdateWithoutWorkInput, workapplicationUncheckedUpdateWithoutWorkInput>
    create: XOR<workapplicationCreateWithoutWorkInput, workapplicationUncheckedCreateWithoutWorkInput>
  }

  export type workapplicationUpdateWithWhereUniqueWithoutWorkInput = {
    where: workapplicationWhereUniqueInput
    data: XOR<workapplicationUpdateWithoutWorkInput, workapplicationUncheckedUpdateWithoutWorkInput>
  }

  export type workapplicationUpdateManyWithWhereWithoutWorkInput = {
    where: workapplicationScalarWhereInput
    data: XOR<workapplicationUpdateManyMutationInput, workapplicationUncheckedUpdateManyWithoutWorkInput>
  }

  export type userCreateWithoutWorkapplicationInput = {
    email: string
    google_id?: string | null
    full_name?: string | null
    avatar_url?: string | null
    user_type?: $Enums.user_user_type
    created_at?: Date | string
    assignment?: assignmentCreateNestedManyWithoutUserInput
    task?: taskCreateNestedManyWithoutUserInput
    userprofile?: userprofileCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateWithoutWorkapplicationInput = {
    user_id?: number
    email: string
    google_id?: string | null
    full_name?: string | null
    avatar_url?: string | null
    user_type?: $Enums.user_user_type
    created_at?: Date | string
    assignment?: assignmentUncheckedCreateNestedManyWithoutUserInput
    task?: taskUncheckedCreateNestedManyWithoutUserInput
    userprofile?: userprofileUncheckedCreateNestedOneWithoutUserInput
  }

  export type userCreateOrConnectWithoutWorkapplicationInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutWorkapplicationInput, userUncheckedCreateWithoutWorkapplicationInput>
  }

  export type workCreateWithoutWorkapplicationInput = {
    project_role: string
    role_category: $Enums.work_role_category
    expected_salary?: Decimal | DecimalJsLike | number | string
    is_open_pool?: boolean
    work_description: string
    work_start_date: Date | string
    work_start_time?: Date | string | null
    work_end_time?: Date | string | null
    work_status?: $Enums.work_work_status
    assignment?: assignmentCreateNestedManyWithoutWorkInput
    project: projectCreateNestedOneWithoutWorkInput
  }

  export type workUncheckedCreateWithoutWorkapplicationInput = {
    work_id?: number
    project_id: number
    project_role: string
    role_category: $Enums.work_role_category
    expected_salary?: Decimal | DecimalJsLike | number | string
    is_open_pool?: boolean
    work_description: string
    work_start_date: Date | string
    work_start_time?: Date | string | null
    work_end_time?: Date | string | null
    work_status?: $Enums.work_work_status
    assignment?: assignmentUncheckedCreateNestedManyWithoutWorkInput
  }

  export type workCreateOrConnectWithoutWorkapplicationInput = {
    where: workWhereUniqueInput
    create: XOR<workCreateWithoutWorkapplicationInput, workUncheckedCreateWithoutWorkapplicationInput>
  }

  export type userUpsertWithoutWorkapplicationInput = {
    update: XOR<userUpdateWithoutWorkapplicationInput, userUncheckedUpdateWithoutWorkapplicationInput>
    create: XOR<userCreateWithoutWorkapplicationInput, userUncheckedCreateWithoutWorkapplicationInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutWorkapplicationInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutWorkapplicationInput, userUncheckedUpdateWithoutWorkapplicationInput>
  }

  export type userUpdateWithoutWorkapplicationInput = {
    email?: StringFieldUpdateOperationsInput | string
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_type?: Enumuser_user_typeFieldUpdateOperationsInput | $Enums.user_user_type
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    assignment?: assignmentUpdateManyWithoutUserNestedInput
    task?: taskUpdateManyWithoutUserNestedInput
    userprofile?: userprofileUpdateOneWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutWorkapplicationInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_type?: Enumuser_user_typeFieldUpdateOperationsInput | $Enums.user_user_type
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    assignment?: assignmentUncheckedUpdateManyWithoutUserNestedInput
    task?: taskUncheckedUpdateManyWithoutUserNestedInput
    userprofile?: userprofileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type workUpsertWithoutWorkapplicationInput = {
    update: XOR<workUpdateWithoutWorkapplicationInput, workUncheckedUpdateWithoutWorkapplicationInput>
    create: XOR<workCreateWithoutWorkapplicationInput, workUncheckedCreateWithoutWorkapplicationInput>
    where?: workWhereInput
  }

  export type workUpdateToOneWithWhereWithoutWorkapplicationInput = {
    where?: workWhereInput
    data: XOR<workUpdateWithoutWorkapplicationInput, workUncheckedUpdateWithoutWorkapplicationInput>
  }

  export type workUpdateWithoutWorkapplicationInput = {
    project_role?: StringFieldUpdateOperationsInput | string
    role_category?: Enumwork_role_categoryFieldUpdateOperationsInput | $Enums.work_role_category
    expected_salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_open_pool?: BoolFieldUpdateOperationsInput | boolean
    work_description?: StringFieldUpdateOperationsInput | string
    work_start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    work_start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    work_end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    work_status?: Enumwork_work_statusFieldUpdateOperationsInput | $Enums.work_work_status
    assignment?: assignmentUpdateManyWithoutWorkNestedInput
    project?: projectUpdateOneRequiredWithoutWorkNestedInput
  }

  export type workUncheckedUpdateWithoutWorkapplicationInput = {
    work_id?: IntFieldUpdateOperationsInput | number
    project_id?: IntFieldUpdateOperationsInput | number
    project_role?: StringFieldUpdateOperationsInput | string
    role_category?: Enumwork_role_categoryFieldUpdateOperationsInput | $Enums.work_role_category
    expected_salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_open_pool?: BoolFieldUpdateOperationsInput | boolean
    work_description?: StringFieldUpdateOperationsInput | string
    work_start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    work_start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    work_end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    work_status?: Enumwork_work_statusFieldUpdateOperationsInput | $Enums.work_work_status
    assignment?: assignmentUncheckedUpdateManyWithoutWorkNestedInput
  }

  export type workCreateManyProjectInput = {
    work_id?: number
    project_role: string
    role_category: $Enums.work_role_category
    expected_salary?: Decimal | DecimalJsLike | number | string
    is_open_pool?: boolean
    work_description: string
    work_start_date: Date | string
    work_start_time?: Date | string | null
    work_end_time?: Date | string | null
    work_status?: $Enums.work_work_status
  }

  export type workUpdateWithoutProjectInput = {
    project_role?: StringFieldUpdateOperationsInput | string
    role_category?: Enumwork_role_categoryFieldUpdateOperationsInput | $Enums.work_role_category
    expected_salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_open_pool?: BoolFieldUpdateOperationsInput | boolean
    work_description?: StringFieldUpdateOperationsInput | string
    work_start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    work_start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    work_end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    work_status?: Enumwork_work_statusFieldUpdateOperationsInput | $Enums.work_work_status
    assignment?: assignmentUpdateManyWithoutWorkNestedInput
    workapplication?: workapplicationUpdateManyWithoutWorkNestedInput
  }

  export type workUncheckedUpdateWithoutProjectInput = {
    work_id?: IntFieldUpdateOperationsInput | number
    project_role?: StringFieldUpdateOperationsInput | string
    role_category?: Enumwork_role_categoryFieldUpdateOperationsInput | $Enums.work_role_category
    expected_salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_open_pool?: BoolFieldUpdateOperationsInput | boolean
    work_description?: StringFieldUpdateOperationsInput | string
    work_start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    work_start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    work_end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    work_status?: Enumwork_work_statusFieldUpdateOperationsInput | $Enums.work_work_status
    assignment?: assignmentUncheckedUpdateManyWithoutWorkNestedInput
    workapplication?: workapplicationUncheckedUpdateManyWithoutWorkNestedInput
  }

  export type workUncheckedUpdateManyWithoutProjectInput = {
    work_id?: IntFieldUpdateOperationsInput | number
    project_role?: StringFieldUpdateOperationsInput | string
    role_category?: Enumwork_role_categoryFieldUpdateOperationsInput | $Enums.work_role_category
    expected_salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_open_pool?: BoolFieldUpdateOperationsInput | boolean
    work_description?: StringFieldUpdateOperationsInput | string
    work_start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    work_start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    work_end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    work_status?: Enumwork_work_statusFieldUpdateOperationsInput | $Enums.work_work_status
  }

  export type tasktagCreateManyTagInput = {
    task_tag_id?: number
    task_id: number
  }

  export type tasktagUpdateWithoutTagInput = {
    task?: taskUpdateOneRequiredWithoutTasktagNestedInput
  }

  export type tasktagUncheckedUpdateWithoutTagInput = {
    task_tag_id?: IntFieldUpdateOperationsInput | number
    task_id?: IntFieldUpdateOperationsInput | number
  }

  export type tasktagUncheckedUpdateManyWithoutTagInput = {
    task_tag_id?: IntFieldUpdateOperationsInput | number
    task_id?: IntFieldUpdateOperationsInput | number
  }

  export type tasktagCreateManyTaskInput = {
    task_tag_id?: number
    tag_id: number
  }

  export type tasktagUpdateWithoutTaskInput = {
    tag?: tagUpdateOneRequiredWithoutTasktagNestedInput
  }

  export type tasktagUncheckedUpdateWithoutTaskInput = {
    task_tag_id?: IntFieldUpdateOperationsInput | number
    tag_id?: IntFieldUpdateOperationsInput | number
  }

  export type tasktagUncheckedUpdateManyWithoutTaskInput = {
    task_tag_id?: IntFieldUpdateOperationsInput | number
    tag_id?: IntFieldUpdateOperationsInput | number
  }

  export type assignmentCreateManyUserInput = {
    assignment_id?: number
    work_id: number
    outsider_name?: string | null
    assignment_status?: $Enums.assignment_assignment_status
    withdrawal_reason?: string | null
  }

  export type taskCreateManyUserInput = {
    task_id?: number
    task_title: string
    task_desc?: string | null
    due_date?: Date | string | null
    is_completed?: boolean
  }

  export type workapplicationCreateManyUserInput = {
    application_id?: number
    work_id: number
    application_status?: $Enums.workapplication_application_status
  }

  export type assignmentUpdateWithoutUserInput = {
    outsider_name?: NullableStringFieldUpdateOperationsInput | string | null
    assignment_status?: Enumassignment_assignment_statusFieldUpdateOperationsInput | $Enums.assignment_assignment_status
    withdrawal_reason?: NullableStringFieldUpdateOperationsInput | string | null
    work?: workUpdateOneRequiredWithoutAssignmentNestedInput
  }

  export type assignmentUncheckedUpdateWithoutUserInput = {
    assignment_id?: IntFieldUpdateOperationsInput | number
    work_id?: IntFieldUpdateOperationsInput | number
    outsider_name?: NullableStringFieldUpdateOperationsInput | string | null
    assignment_status?: Enumassignment_assignment_statusFieldUpdateOperationsInput | $Enums.assignment_assignment_status
    withdrawal_reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type assignmentUncheckedUpdateManyWithoutUserInput = {
    assignment_id?: IntFieldUpdateOperationsInput | number
    work_id?: IntFieldUpdateOperationsInput | number
    outsider_name?: NullableStringFieldUpdateOperationsInput | string | null
    assignment_status?: Enumassignment_assignment_statusFieldUpdateOperationsInput | $Enums.assignment_assignment_status
    withdrawal_reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type taskUpdateWithoutUserInput = {
    task_title?: StringFieldUpdateOperationsInput | string
    task_desc?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_completed?: BoolFieldUpdateOperationsInput | boolean
    tasktag?: tasktagUpdateManyWithoutTaskNestedInput
  }

  export type taskUncheckedUpdateWithoutUserInput = {
    task_id?: IntFieldUpdateOperationsInput | number
    task_title?: StringFieldUpdateOperationsInput | string
    task_desc?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_completed?: BoolFieldUpdateOperationsInput | boolean
    tasktag?: tasktagUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type taskUncheckedUpdateManyWithoutUserInput = {
    task_id?: IntFieldUpdateOperationsInput | number
    task_title?: StringFieldUpdateOperationsInput | string
    task_desc?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type workapplicationUpdateWithoutUserInput = {
    application_status?: Enumworkapplication_application_statusFieldUpdateOperationsInput | $Enums.workapplication_application_status
    work?: workUpdateOneRequiredWithoutWorkapplicationNestedInput
  }

  export type workapplicationUncheckedUpdateWithoutUserInput = {
    application_id?: IntFieldUpdateOperationsInput | number
    work_id?: IntFieldUpdateOperationsInput | number
    application_status?: Enumworkapplication_application_statusFieldUpdateOperationsInput | $Enums.workapplication_application_status
  }

  export type workapplicationUncheckedUpdateManyWithoutUserInput = {
    application_id?: IntFieldUpdateOperationsInput | number
    work_id?: IntFieldUpdateOperationsInput | number
    application_status?: Enumworkapplication_application_statusFieldUpdateOperationsInput | $Enums.workapplication_application_status
  }

  export type assignmentCreateManyWorkInput = {
    assignment_id?: number
    user_id?: number | null
    outsider_name?: string | null
    assignment_status?: $Enums.assignment_assignment_status
    withdrawal_reason?: string | null
  }

  export type workapplicationCreateManyWorkInput = {
    application_id?: number
    user_id: number
    application_status?: $Enums.workapplication_application_status
  }

  export type assignmentUpdateWithoutWorkInput = {
    outsider_name?: NullableStringFieldUpdateOperationsInput | string | null
    assignment_status?: Enumassignment_assignment_statusFieldUpdateOperationsInput | $Enums.assignment_assignment_status
    withdrawal_reason?: NullableStringFieldUpdateOperationsInput | string | null
    user?: userUpdateOneWithoutAssignmentNestedInput
  }

  export type assignmentUncheckedUpdateWithoutWorkInput = {
    assignment_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    outsider_name?: NullableStringFieldUpdateOperationsInput | string | null
    assignment_status?: Enumassignment_assignment_statusFieldUpdateOperationsInput | $Enums.assignment_assignment_status
    withdrawal_reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type assignmentUncheckedUpdateManyWithoutWorkInput = {
    assignment_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    outsider_name?: NullableStringFieldUpdateOperationsInput | string | null
    assignment_status?: Enumassignment_assignment_statusFieldUpdateOperationsInput | $Enums.assignment_assignment_status
    withdrawal_reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type workapplicationUpdateWithoutWorkInput = {
    application_status?: Enumworkapplication_application_statusFieldUpdateOperationsInput | $Enums.workapplication_application_status
    user?: userUpdateOneRequiredWithoutWorkapplicationNestedInput
  }

  export type workapplicationUncheckedUpdateWithoutWorkInput = {
    application_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    application_status?: Enumworkapplication_application_statusFieldUpdateOperationsInput | $Enums.workapplication_application_status
  }

  export type workapplicationUncheckedUpdateManyWithoutWorkInput = {
    application_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    application_status?: Enumworkapplication_application_statusFieldUpdateOperationsInput | $Enums.workapplication_application_status
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
