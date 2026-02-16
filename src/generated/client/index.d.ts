
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserProfile
 * 
 */
export type UserProfile = $Result.DefaultSelection<Prisma.$UserProfilePayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Work
 * 
 */
export type Work = $Result.DefaultSelection<Prisma.$WorkPayload>
/**
 * Model Assignment
 * 
 */
export type Assignment = $Result.DefaultSelection<Prisma.$AssignmentPayload>
/**
 * Model WorkApplication
 * 
 */
export type WorkApplication = $Result.DefaultSelection<Prisma.$WorkApplicationPayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model TaskTag
 * 
 */
export type TaskTag = $Result.DefaultSelection<Prisma.$TaskTagPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserType: {
  OWNER: 'OWNER',
  EMPLOYEE: 'EMPLOYEE'
};

export type UserType = (typeof UserType)[keyof typeof UserType]


export const RoleCategory: {
  PHOTO: 'PHOTO',
  VIDEO: 'VIDEO',
  EDITOR: 'EDITOR',
  ASSISTANT: 'ASSISTANT',
  ANY: 'ANY'
};

export type RoleCategory = (typeof RoleCategory)[keyof typeof RoleCategory]


export const ProjectStatus: {
  ACTIVE: 'ACTIVE',
  ARCHIVED: 'ARCHIVED'
};

export type ProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus]


export const WorkStatus: {
  PENDING: 'PENDING',
  OPEN: 'OPEN',
  ASSIGNED: 'ASSIGNED',
  REVIEW: 'REVIEW',
  COMPLETED: 'COMPLETED'
};

export type WorkStatus = (typeof WorkStatus)[keyof typeof WorkStatus]


export const AssignmentStatus: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED'
};

export type AssignmentStatus = (typeof AssignmentStatus)[keyof typeof AssignmentStatus]


export const ApplicationStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type ApplicationStatus = (typeof ApplicationStatus)[keyof typeof ApplicationStatus]

}

export type UserType = $Enums.UserType

export const UserType: typeof $Enums.UserType

export type RoleCategory = $Enums.RoleCategory

export const RoleCategory: typeof $Enums.RoleCategory

export type ProjectStatus = $Enums.ProjectStatus

export const ProjectStatus: typeof $Enums.ProjectStatus

export type WorkStatus = $Enums.WorkStatus

export const WorkStatus: typeof $Enums.WorkStatus

export type AssignmentStatus = $Enums.AssignmentStatus

export const AssignmentStatus: typeof $Enums.AssignmentStatus

export type ApplicationStatus = $Enums.ApplicationStatus

export const ApplicationStatus: typeof $Enums.ApplicationStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userProfile`: Exposes CRUD operations for the **UserProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserProfiles
    * const userProfiles = await prisma.userProfile.findMany()
    * ```
    */
  get userProfile(): Prisma.UserProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.work`: Exposes CRUD operations for the **Work** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Works
    * const works = await prisma.work.findMany()
    * ```
    */
  get work(): Prisma.WorkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.assignment`: Exposes CRUD operations for the **Assignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assignments
    * const assignments = await prisma.assignment.findMany()
    * ```
    */
  get assignment(): Prisma.AssignmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workApplication`: Exposes CRUD operations for the **WorkApplication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkApplications
    * const workApplications = await prisma.workApplication.findMany()
    * ```
    */
  get workApplication(): Prisma.WorkApplicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.taskTag`: Exposes CRUD operations for the **TaskTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TaskTags
    * const taskTags = await prisma.taskTag.findMany()
    * ```
    */
  get taskTag(): Prisma.TaskTagDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
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
    User: 'User',
    UserProfile: 'UserProfile',
    Project: 'Project',
    Work: 'Work',
    Assignment: 'Assignment',
    WorkApplication: 'WorkApplication',
    Task: 'Task',
    Tag: 'Tag',
    TaskTag: 'TaskTag'
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
      modelProps: "user" | "userProfile" | "project" | "work" | "assignment" | "workApplication" | "task" | "tag" | "taskTag"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserProfile: {
        payload: Prisma.$UserProfilePayload<ExtArgs>
        fields: Prisma.UserProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findFirst: {
            args: Prisma.UserProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findMany: {
            args: Prisma.UserProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          create: {
            args: Prisma.UserProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          createMany: {
            args: Prisma.UserProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          update: {
            args: Prisma.UserProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          deleteMany: {
            args: Prisma.UserProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          aggregate: {
            args: Prisma.UserProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserProfile>
          }
          groupBy: {
            args: Prisma.UserProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserProfileCountArgs<ExtArgs>
            result: $Utils.Optional<UserProfileCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      Work: {
        payload: Prisma.$WorkPayload<ExtArgs>
        fields: Prisma.WorkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>
          }
          findFirst: {
            args: Prisma.WorkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>
          }
          findMany: {
            args: Prisma.WorkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>[]
          }
          create: {
            args: Prisma.WorkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>
          }
          createMany: {
            args: Prisma.WorkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.WorkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>
          }
          update: {
            args: Prisma.WorkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>
          }
          deleteMany: {
            args: Prisma.WorkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WorkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>
          }
          aggregate: {
            args: Prisma.WorkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWork>
          }
          groupBy: {
            args: Prisma.WorkGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkCountArgs<ExtArgs>
            result: $Utils.Optional<WorkCountAggregateOutputType> | number
          }
        }
      }
      Assignment: {
        payload: Prisma.$AssignmentPayload<ExtArgs>
        fields: Prisma.AssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          findFirst: {
            args: Prisma.AssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          findMany: {
            args: Prisma.AssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>[]
          }
          create: {
            args: Prisma.AssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          createMany: {
            args: Prisma.AssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          update: {
            args: Prisma.AssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          deleteMany: {
            args: Prisma.AssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          aggregate: {
            args: Prisma.AssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssignment>
          }
          groupBy: {
            args: Prisma.AssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<AssignmentCountAggregateOutputType> | number
          }
        }
      }
      WorkApplication: {
        payload: Prisma.$WorkApplicationPayload<ExtArgs>
        fields: Prisma.WorkApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkApplicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkApplicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkApplicationPayload>
          }
          findFirst: {
            args: Prisma.WorkApplicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkApplicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkApplicationPayload>
          }
          findMany: {
            args: Prisma.WorkApplicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkApplicationPayload>[]
          }
          create: {
            args: Prisma.WorkApplicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkApplicationPayload>
          }
          createMany: {
            args: Prisma.WorkApplicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.WorkApplicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkApplicationPayload>
          }
          update: {
            args: Prisma.WorkApplicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkApplicationPayload>
          }
          deleteMany: {
            args: Prisma.WorkApplicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkApplicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WorkApplicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkApplicationPayload>
          }
          aggregate: {
            args: Prisma.WorkApplicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkApplication>
          }
          groupBy: {
            args: Prisma.WorkApplicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkApplicationCountArgs<ExtArgs>
            result: $Utils.Optional<WorkApplicationCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      TaskTag: {
        payload: Prisma.$TaskTagPayload<ExtArgs>
        fields: Prisma.TaskTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskTagPayload>
          }
          findFirst: {
            args: Prisma.TaskTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskTagPayload>
          }
          findMany: {
            args: Prisma.TaskTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskTagPayload>[]
          }
          create: {
            args: Prisma.TaskTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskTagPayload>
          }
          createMany: {
            args: Prisma.TaskTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TaskTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskTagPayload>
          }
          update: {
            args: Prisma.TaskTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskTagPayload>
          }
          deleteMany: {
            args: Prisma.TaskTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TaskTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskTagPayload>
          }
          aggregate: {
            args: Prisma.TaskTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaskTag>
          }
          groupBy: {
            args: Prisma.TaskTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskTagCountArgs<ExtArgs>
            result: $Utils.Optional<TaskTagCountAggregateOutputType> | number
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
    user?: UserOmit
    userProfile?: UserProfileOmit
    project?: ProjectOmit
    work?: WorkOmit
    assignment?: AssignmentOmit
    workApplication?: WorkApplicationOmit
    task?: TaskOmit
    tag?: TagOmit
    taskTag?: TaskTagOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    assignments: number
    applications: number
    tasks: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignments?: boolean | UserCountOutputTypeCountAssignmentsArgs
    applications?: boolean | UserCountOutputTypeCountApplicationsArgs
    tasks?: boolean | UserCountOutputTypeCountTasksArgs
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
  export type UserCountOutputTypeCountAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkApplicationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    works: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    works?: boolean | ProjectCountOutputTypeCountWorksArgs
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
  export type ProjectCountOutputTypeCountWorksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkWhereInput
  }


  /**
   * Count Type WorkCountOutputType
   */

  export type WorkCountOutputType = {
    assignments: number
    applications: number
  }

  export type WorkCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignments?: boolean | WorkCountOutputTypeCountAssignmentsArgs
    applications?: boolean | WorkCountOutputTypeCountApplicationsArgs
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
  export type WorkCountOutputTypeCountAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentWhereInput
  }

  /**
   * WorkCountOutputType without action
   */
  export type WorkCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkApplicationWhereInput
  }


  /**
   * Count Type TaskCountOutputType
   */

  export type TaskCountOutputType = {
    tags: number
  }

  export type TaskCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags?: boolean | TaskCountOutputTypeCountTagsArgs
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
  export type TaskCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskTagWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    tasks: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | TagCountOutputTypeCountTasksArgs
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
  export type TagCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskTagWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
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
    user_type: $Enums.UserType | null
    created_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    user_id: number | null
    email: string | null
    google_id: string | null
    full_name: string | null
    avatar_url: string | null
    user_type: $Enums.UserType | null
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
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
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
    user_type: $Enums.UserType
    created_at: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
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


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    email?: boolean
    google_id?: boolean
    full_name?: boolean
    avatar_url?: boolean
    user_type?: boolean
    created_at?: boolean
    profile?: boolean | User$profileArgs<ExtArgs>
    assignments?: boolean | User$assignmentsArgs<ExtArgs>
    applications?: boolean | User$applicationsArgs<ExtArgs>
    tasks?: boolean | User$tasksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    user_id?: boolean
    email?: boolean
    google_id?: boolean
    full_name?: boolean
    avatar_url?: boolean
    user_type?: boolean
    created_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "email" | "google_id" | "full_name" | "avatar_url" | "user_type" | "created_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | User$profileArgs<ExtArgs>
    assignments?: boolean | User$assignmentsArgs<ExtArgs>
    applications?: boolean | User$applicationsArgs<ExtArgs>
    tasks?: boolean | User$tasksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      profile: Prisma.$UserProfilePayload<ExtArgs> | null
      assignments: Prisma.$AssignmentPayload<ExtArgs>[]
      applications: Prisma.$WorkApplicationPayload<ExtArgs>[]
      tasks: Prisma.$TaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      email: string
      google_id: string | null
      full_name: string | null
      avatar_url: string | null
      user_type: $Enums.UserType
      created_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
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
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends User$profileArgs<ExtArgs> = {}>(args?: Subset<T, User$profileArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    assignments<T extends User$assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    applications<T extends User$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, User$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tasks<T extends User$tasksArgs<ExtArgs> = {}>(args?: Subset<T, User$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly user_id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly google_id: FieldRef<"User", 'String'>
    readonly full_name: FieldRef<"User", 'String'>
    readonly avatar_url: FieldRef<"User", 'String'>
    readonly user_type: FieldRef<"User", 'UserType'>
    readonly created_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.profile
   */
  export type User$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    where?: UserProfileWhereInput
  }

  /**
   * User.assignments
   */
  export type User$assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    where?: AssignmentWhereInput
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    cursor?: AssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * User.applications
   */
  export type User$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkApplication
     */
    select?: WorkApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkApplication
     */
    omit?: WorkApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkApplicationInclude<ExtArgs> | null
    where?: WorkApplicationWhereInput
    orderBy?: WorkApplicationOrderByWithRelationInput | WorkApplicationOrderByWithRelationInput[]
    cursor?: WorkApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkApplicationScalarFieldEnum | WorkApplicationScalarFieldEnum[]
  }

  /**
   * User.tasks
   */
  export type User$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserProfile
   */

  export type AggregateUserProfile = {
    _count: UserProfileCountAggregateOutputType | null
    _avg: UserProfileAvgAggregateOutputType | null
    _sum: UserProfileSumAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  export type UserProfileAvgAggregateOutputType = {
    profile_id: number | null
    user_id: number | null
    reliability_score: Decimal | null
  }

  export type UserProfileSumAggregateOutputType = {
    profile_id: number | null
    user_id: number | null
    reliability_score: Decimal | null
  }

  export type UserProfileMinAggregateOutputType = {
    profile_id: number | null
    user_id: number | null
    primary_role: $Enums.RoleCategory | null
    secondary_role: $Enums.RoleCategory | null
    reliability_score: Decimal | null
  }

  export type UserProfileMaxAggregateOutputType = {
    profile_id: number | null
    user_id: number | null
    primary_role: $Enums.RoleCategory | null
    secondary_role: $Enums.RoleCategory | null
    reliability_score: Decimal | null
  }

  export type UserProfileCountAggregateOutputType = {
    profile_id: number
    user_id: number
    primary_role: number
    secondary_role: number
    reliability_score: number
    _all: number
  }


  export type UserProfileAvgAggregateInputType = {
    profile_id?: true
    user_id?: true
    reliability_score?: true
  }

  export type UserProfileSumAggregateInputType = {
    profile_id?: true
    user_id?: true
    reliability_score?: true
  }

  export type UserProfileMinAggregateInputType = {
    profile_id?: true
    user_id?: true
    primary_role?: true
    secondary_role?: true
    reliability_score?: true
  }

  export type UserProfileMaxAggregateInputType = {
    profile_id?: true
    user_id?: true
    primary_role?: true
    secondary_role?: true
    reliability_score?: true
  }

  export type UserProfileCountAggregateInputType = {
    profile_id?: true
    user_id?: true
    primary_role?: true
    secondary_role?: true
    reliability_score?: true
    _all?: true
  }

  export type UserProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfile to aggregate.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserProfiles
    **/
    _count?: true | UserProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserProfileMaxAggregateInputType
  }

  export type GetUserProfileAggregateType<T extends UserProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateUserProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserProfile[P]>
      : GetScalarType<T[P], AggregateUserProfile[P]>
  }




  export type UserProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProfileWhereInput
    orderBy?: UserProfileOrderByWithAggregationInput | UserProfileOrderByWithAggregationInput[]
    by: UserProfileScalarFieldEnum[] | UserProfileScalarFieldEnum
    having?: UserProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserProfileCountAggregateInputType | true
    _avg?: UserProfileAvgAggregateInputType
    _sum?: UserProfileSumAggregateInputType
    _min?: UserProfileMinAggregateInputType
    _max?: UserProfileMaxAggregateInputType
  }

  export type UserProfileGroupByOutputType = {
    profile_id: number
    user_id: number
    primary_role: $Enums.RoleCategory
    secondary_role: $Enums.RoleCategory | null
    reliability_score: Decimal
    _count: UserProfileCountAggregateOutputType | null
    _avg: UserProfileAvgAggregateOutputType | null
    _sum: UserProfileSumAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  type GetUserProfileGroupByPayload<T extends UserProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
            : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
        }
      >
    >


  export type UserProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    profile_id?: boolean
    user_id?: boolean
    primary_role?: boolean
    secondary_role?: boolean
    reliability_score?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>



  export type UserProfileSelectScalar = {
    profile_id?: boolean
    user_id?: boolean
    primary_role?: boolean
    secondary_role?: boolean
    reliability_score?: boolean
  }

  export type UserProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"profile_id" | "user_id" | "primary_role" | "secondary_role" | "reliability_score", ExtArgs["result"]["userProfile"]>
  export type UserProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      profile_id: number
      user_id: number
      primary_role: $Enums.RoleCategory
      secondary_role: $Enums.RoleCategory | null
      reliability_score: Prisma.Decimal
    }, ExtArgs["result"]["userProfile"]>
    composites: {}
  }

  type UserProfileGetPayload<S extends boolean | null | undefined | UserProfileDefaultArgs> = $Result.GetResult<Prisma.$UserProfilePayload, S>

  type UserProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserProfileCountAggregateInputType | true
    }

  export interface UserProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserProfile'], meta: { name: 'UserProfile' } }
    /**
     * Find zero or one UserProfile that matches the filter.
     * @param {UserProfileFindUniqueArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserProfileFindUniqueArgs>(args: SelectSubset<T, UserProfileFindUniqueArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserProfileFindUniqueOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, UserProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserProfileFindFirstArgs>(args?: SelectSubset<T, UserProfileFindFirstArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, UserProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserProfiles
     * const userProfiles = await prisma.userProfile.findMany()
     * 
     * // Get first 10 UserProfiles
     * const userProfiles = await prisma.userProfile.findMany({ take: 10 })
     * 
     * // Only select the `profile_id`
     * const userProfileWithProfile_idOnly = await prisma.userProfile.findMany({ select: { profile_id: true } })
     * 
     */
    findMany<T extends UserProfileFindManyArgs>(args?: SelectSubset<T, UserProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserProfile.
     * @param {UserProfileCreateArgs} args - Arguments to create a UserProfile.
     * @example
     * // Create one UserProfile
     * const UserProfile = await prisma.userProfile.create({
     *   data: {
     *     // ... data to create a UserProfile
     *   }
     * })
     * 
     */
    create<T extends UserProfileCreateArgs>(args: SelectSubset<T, UserProfileCreateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserProfiles.
     * @param {UserProfileCreateManyArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserProfileCreateManyArgs>(args?: SelectSubset<T, UserProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserProfile.
     * @param {UserProfileDeleteArgs} args - Arguments to delete one UserProfile.
     * @example
     * // Delete one UserProfile
     * const UserProfile = await prisma.userProfile.delete({
     *   where: {
     *     // ... filter to delete one UserProfile
     *   }
     * })
     * 
     */
    delete<T extends UserProfileDeleteArgs>(args: SelectSubset<T, UserProfileDeleteArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserProfile.
     * @param {UserProfileUpdateArgs} args - Arguments to update one UserProfile.
     * @example
     * // Update one UserProfile
     * const userProfile = await prisma.userProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserProfileUpdateArgs>(args: SelectSubset<T, UserProfileUpdateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserProfiles.
     * @param {UserProfileDeleteManyArgs} args - Arguments to filter UserProfiles to delete.
     * @example
     * // Delete a few UserProfiles
     * const { count } = await prisma.userProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserProfileDeleteManyArgs>(args?: SelectSubset<T, UserProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserProfileUpdateManyArgs>(args: SelectSubset<T, UserProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserProfile.
     * @param {UserProfileUpsertArgs} args - Arguments to update or create a UserProfile.
     * @example
     * // Update or create a UserProfile
     * const userProfile = await prisma.userProfile.upsert({
     *   create: {
     *     // ... data to create a UserProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserProfile we want to update
     *   }
     * })
     */
    upsert<T extends UserProfileUpsertArgs>(args: SelectSubset<T, UserProfileUpsertArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileCountArgs} args - Arguments to filter UserProfiles to count.
     * @example
     * // Count the number of UserProfiles
     * const count = await prisma.userProfile.count({
     *   where: {
     *     // ... the filter for the UserProfiles we want to count
     *   }
     * })
    **/
    count<T extends UserProfileCountArgs>(
      args?: Subset<T, UserProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserProfileAggregateArgs>(args: Subset<T, UserProfileAggregateArgs>): Prisma.PrismaPromise<GetUserProfileAggregateType<T>>

    /**
     * Group by UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileGroupByArgs} args - Group by arguments.
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
      T extends UserProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserProfileGroupByArgs['orderBy'] }
        : { orderBy?: UserProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserProfile model
   */
  readonly fields: UserProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserProfile model
   */
  interface UserProfileFieldRefs {
    readonly profile_id: FieldRef<"UserProfile", 'Int'>
    readonly user_id: FieldRef<"UserProfile", 'Int'>
    readonly primary_role: FieldRef<"UserProfile", 'RoleCategory'>
    readonly secondary_role: FieldRef<"UserProfile", 'RoleCategory'>
    readonly reliability_score: FieldRef<"UserProfile", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * UserProfile findUnique
   */
  export type UserProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findUniqueOrThrow
   */
  export type UserProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findFirst
   */
  export type UserProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findFirstOrThrow
   */
  export type UserProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findMany
   */
  export type UserProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfiles to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile create
   */
  export type UserProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a UserProfile.
     */
    data: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
  }

  /**
   * UserProfile createMany
   */
  export type UserProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserProfile update
   */
  export type UserProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a UserProfile.
     */
    data: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
    /**
     * Choose, which UserProfile to update.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile updateMany
   */
  export type UserProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
  }

  /**
   * UserProfile upsert
   */
  export type UserProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the UserProfile to update in case it exists.
     */
    where: UserProfileWhereUniqueInput
    /**
     * In case the UserProfile found by the `where` argument doesn't exist, create a new UserProfile with this data.
     */
    create: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
    /**
     * In case the UserProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
  }

  /**
   * UserProfile delete
   */
  export type UserProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter which UserProfile to delete.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile deleteMany
   */
  export type UserProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfiles to delete
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to delete.
     */
    limit?: number
  }

  /**
   * UserProfile without action
   */
  export type UserProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
  }


  /**
   * Model Project
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
    project_status: $Enums.ProjectStatus | null
  }

  export type ProjectMaxAggregateOutputType = {
    project_id: number | null
    project_name: string | null
    client_name: string | null
    project_location: string | null
    project_description: string | null
    project_start_date: Date | null
    project_end_date: Date | null
    project_status: $Enums.ProjectStatus | null
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
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
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




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
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
    project_status: $Enums.ProjectStatus
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
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


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    project_id?: boolean
    project_name?: boolean
    client_name?: boolean
    project_location?: boolean
    project_description?: boolean
    project_start_date?: boolean
    project_end_date?: boolean
    project_status?: boolean
    works?: boolean | Project$worksArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>



  export type ProjectSelectScalar = {
    project_id?: boolean
    project_name?: boolean
    client_name?: boolean
    project_location?: boolean
    project_description?: boolean
    project_start_date?: boolean
    project_end_date?: boolean
    project_status?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"project_id" | "project_name" | "client_name" | "project_location" | "project_description" | "project_start_date" | "project_end_date" | "project_status", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    works?: boolean | Project$worksArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      works: Prisma.$WorkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      project_id: number
      project_name: string
      client_name: string
      project_location: string
      project_description: string
      project_start_date: Date
      project_end_date: Date
      project_status: $Enums.ProjectStatus
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
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
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
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
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
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
     * @param {ProjectGroupByArgs} args - Group by arguments.
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
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    works<T extends Project$worksArgs<ExtArgs> = {}>(args?: Subset<T, Project$worksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly project_id: FieldRef<"Project", 'Int'>
    readonly project_name: FieldRef<"Project", 'String'>
    readonly client_name: FieldRef<"Project", 'String'>
    readonly project_location: FieldRef<"Project", 'String'>
    readonly project_description: FieldRef<"Project", 'String'>
    readonly project_start_date: FieldRef<"Project", 'DateTime'>
    readonly project_end_date: FieldRef<"Project", 'DateTime'>
    readonly project_status: FieldRef<"Project", 'ProjectStatus'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.works
   */
  export type Project$worksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    where?: WorkWhereInput
    orderBy?: WorkOrderByWithRelationInput | WorkOrderByWithRelationInput[]
    cursor?: WorkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkScalarFieldEnum | WorkScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model Work
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
    role_category: $Enums.RoleCategory | null
    expected_salary: Decimal | null
    is_open_pool: boolean | null
    work_description: string | null
    work_start_date: Date | null
    work_start_time: Date | null
    work_end_time: Date | null
    work_status: $Enums.WorkStatus | null
  }

  export type WorkMaxAggregateOutputType = {
    work_id: number | null
    project_id: number | null
    project_role: string | null
    role_category: $Enums.RoleCategory | null
    expected_salary: Decimal | null
    is_open_pool: boolean | null
    work_description: string | null
    work_start_date: Date | null
    work_start_time: Date | null
    work_end_time: Date | null
    work_status: $Enums.WorkStatus | null
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
     * Filter which Work to aggregate.
     */
    where?: WorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Works to fetch.
     */
    orderBy?: WorkOrderByWithRelationInput | WorkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Works from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Works.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Works
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




  export type WorkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkWhereInput
    orderBy?: WorkOrderByWithAggregationInput | WorkOrderByWithAggregationInput[]
    by: WorkScalarFieldEnum[] | WorkScalarFieldEnum
    having?: WorkScalarWhereWithAggregatesInput
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
    role_category: $Enums.RoleCategory
    expected_salary: Decimal
    is_open_pool: boolean
    work_description: string
    work_start_date: Date
    work_start_time: Date | null
    work_end_time: Date | null
    work_status: $Enums.WorkStatus
    _count: WorkCountAggregateOutputType | null
    _avg: WorkAvgAggregateOutputType | null
    _sum: WorkSumAggregateOutputType | null
    _min: WorkMinAggregateOutputType | null
    _max: WorkMaxAggregateOutputType | null
  }

  type GetWorkGroupByPayload<T extends WorkGroupByArgs> = Prisma.PrismaPromise<
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


  export type WorkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    assignments?: boolean | Work$assignmentsArgs<ExtArgs>
    applications?: boolean | Work$applicationsArgs<ExtArgs>
    _count?: boolean | WorkCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["work"]>



  export type WorkSelectScalar = {
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

  export type WorkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"work_id" | "project_id" | "project_role" | "role_category" | "expected_salary" | "is_open_pool" | "work_description" | "work_start_date" | "work_start_time" | "work_end_time" | "work_status", ExtArgs["result"]["work"]>
  export type WorkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    assignments?: boolean | Work$assignmentsArgs<ExtArgs>
    applications?: boolean | Work$applicationsArgs<ExtArgs>
    _count?: boolean | WorkCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $WorkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Work"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      assignments: Prisma.$AssignmentPayload<ExtArgs>[]
      applications: Prisma.$WorkApplicationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      work_id: number
      project_id: number
      project_role: string
      role_category: $Enums.RoleCategory
      expected_salary: Prisma.Decimal
      is_open_pool: boolean
      work_description: string
      work_start_date: Date
      work_start_time: Date | null
      work_end_time: Date | null
      work_status: $Enums.WorkStatus
    }, ExtArgs["result"]["work"]>
    composites: {}
  }

  type WorkGetPayload<S extends boolean | null | undefined | WorkDefaultArgs> = $Result.GetResult<Prisma.$WorkPayload, S>

  type WorkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkCountAggregateInputType | true
    }

  export interface WorkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Work'], meta: { name: 'Work' } }
    /**
     * Find zero or one Work that matches the filter.
     * @param {WorkFindUniqueArgs} args - Arguments to find a Work
     * @example
     * // Get one Work
     * const work = await prisma.work.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkFindUniqueArgs>(args: SelectSubset<T, WorkFindUniqueArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Work that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkFindUniqueOrThrowArgs} args - Arguments to find a Work
     * @example
     * // Get one Work
     * const work = await prisma.work.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Work that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFindFirstArgs} args - Arguments to find a Work
     * @example
     * // Get one Work
     * const work = await prisma.work.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkFindFirstArgs>(args?: SelectSubset<T, WorkFindFirstArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Work that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFindFirstOrThrowArgs} args - Arguments to find a Work
     * @example
     * // Get one Work
     * const work = await prisma.work.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Works that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends WorkFindManyArgs>(args?: SelectSubset<T, WorkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Work.
     * @param {WorkCreateArgs} args - Arguments to create a Work.
     * @example
     * // Create one Work
     * const Work = await prisma.work.create({
     *   data: {
     *     // ... data to create a Work
     *   }
     * })
     * 
     */
    create<T extends WorkCreateArgs>(args: SelectSubset<T, WorkCreateArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Works.
     * @param {WorkCreateManyArgs} args - Arguments to create many Works.
     * @example
     * // Create many Works
     * const work = await prisma.work.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkCreateManyArgs>(args?: SelectSubset<T, WorkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Work.
     * @param {WorkDeleteArgs} args - Arguments to delete one Work.
     * @example
     * // Delete one Work
     * const Work = await prisma.work.delete({
     *   where: {
     *     // ... filter to delete one Work
     *   }
     * })
     * 
     */
    delete<T extends WorkDeleteArgs>(args: SelectSubset<T, WorkDeleteArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Work.
     * @param {WorkUpdateArgs} args - Arguments to update one Work.
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
    update<T extends WorkUpdateArgs>(args: SelectSubset<T, WorkUpdateArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Works.
     * @param {WorkDeleteManyArgs} args - Arguments to filter Works to delete.
     * @example
     * // Delete a few Works
     * const { count } = await prisma.work.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkDeleteManyArgs>(args?: SelectSubset<T, WorkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Works.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends WorkUpdateManyArgs>(args: SelectSubset<T, WorkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Work.
     * @param {WorkUpsertArgs} args - Arguments to update or create a Work.
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
    upsert<T extends WorkUpsertArgs>(args: SelectSubset<T, WorkUpsertArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Works.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkCountArgs} args - Arguments to filter Works to count.
     * @example
     * // Count the number of Works
     * const count = await prisma.work.count({
     *   where: {
     *     // ... the filter for the Works we want to count
     *   }
     * })
    **/
    count<T extends WorkCountArgs>(
      args?: Subset<T, WorkCountArgs>,
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
     * @param {WorkGroupByArgs} args - Group by arguments.
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
      T extends WorkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkGroupByArgs['orderBy'] }
        : { orderBy?: WorkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Work model
   */
  readonly fields: WorkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Work.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assignments<T extends Work$assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, Work$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    applications<T extends Work$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, Work$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Work model
   */
  interface WorkFieldRefs {
    readonly work_id: FieldRef<"Work", 'Int'>
    readonly project_id: FieldRef<"Work", 'Int'>
    readonly project_role: FieldRef<"Work", 'String'>
    readonly role_category: FieldRef<"Work", 'RoleCategory'>
    readonly expected_salary: FieldRef<"Work", 'Decimal'>
    readonly is_open_pool: FieldRef<"Work", 'Boolean'>
    readonly work_description: FieldRef<"Work", 'String'>
    readonly work_start_date: FieldRef<"Work", 'DateTime'>
    readonly work_start_time: FieldRef<"Work", 'DateTime'>
    readonly work_end_time: FieldRef<"Work", 'DateTime'>
    readonly work_status: FieldRef<"Work", 'WorkStatus'>
  }
    

  // Custom InputTypes
  /**
   * Work findUnique
   */
  export type WorkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * Filter, which Work to fetch.
     */
    where: WorkWhereUniqueInput
  }

  /**
   * Work findUniqueOrThrow
   */
  export type WorkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * Filter, which Work to fetch.
     */
    where: WorkWhereUniqueInput
  }

  /**
   * Work findFirst
   */
  export type WorkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * Filter, which Work to fetch.
     */
    where?: WorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Works to fetch.
     */
    orderBy?: WorkOrderByWithRelationInput | WorkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Works.
     */
    cursor?: WorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Works from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Works.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Works.
     */
    distinct?: WorkScalarFieldEnum | WorkScalarFieldEnum[]
  }

  /**
   * Work findFirstOrThrow
   */
  export type WorkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * Filter, which Work to fetch.
     */
    where?: WorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Works to fetch.
     */
    orderBy?: WorkOrderByWithRelationInput | WorkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Works.
     */
    cursor?: WorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Works from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Works.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Works.
     */
    distinct?: WorkScalarFieldEnum | WorkScalarFieldEnum[]
  }

  /**
   * Work findMany
   */
  export type WorkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * Filter, which Works to fetch.
     */
    where?: WorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Works to fetch.
     */
    orderBy?: WorkOrderByWithRelationInput | WorkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Works.
     */
    cursor?: WorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Works from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Works.
     */
    skip?: number
    distinct?: WorkScalarFieldEnum | WorkScalarFieldEnum[]
  }

  /**
   * Work create
   */
  export type WorkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * The data needed to create a Work.
     */
    data: XOR<WorkCreateInput, WorkUncheckedCreateInput>
  }

  /**
   * Work createMany
   */
  export type WorkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Works.
     */
    data: WorkCreateManyInput | WorkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Work update
   */
  export type WorkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * The data needed to update a Work.
     */
    data: XOR<WorkUpdateInput, WorkUncheckedUpdateInput>
    /**
     * Choose, which Work to update.
     */
    where: WorkWhereUniqueInput
  }

  /**
   * Work updateMany
   */
  export type WorkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Works.
     */
    data: XOR<WorkUpdateManyMutationInput, WorkUncheckedUpdateManyInput>
    /**
     * Filter which Works to update
     */
    where?: WorkWhereInput
    /**
     * Limit how many Works to update.
     */
    limit?: number
  }

  /**
   * Work upsert
   */
  export type WorkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * The filter to search for the Work to update in case it exists.
     */
    where: WorkWhereUniqueInput
    /**
     * In case the Work found by the `where` argument doesn't exist, create a new Work with this data.
     */
    create: XOR<WorkCreateInput, WorkUncheckedCreateInput>
    /**
     * In case the Work was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkUpdateInput, WorkUncheckedUpdateInput>
  }

  /**
   * Work delete
   */
  export type WorkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * Filter which Work to delete.
     */
    where: WorkWhereUniqueInput
  }

  /**
   * Work deleteMany
   */
  export type WorkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Works to delete
     */
    where?: WorkWhereInput
    /**
     * Limit how many Works to delete.
     */
    limit?: number
  }

  /**
   * Work.assignments
   */
  export type Work$assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    where?: AssignmentWhereInput
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    cursor?: AssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Work.applications
   */
  export type Work$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkApplication
     */
    select?: WorkApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkApplication
     */
    omit?: WorkApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkApplicationInclude<ExtArgs> | null
    where?: WorkApplicationWhereInput
    orderBy?: WorkApplicationOrderByWithRelationInput | WorkApplicationOrderByWithRelationInput[]
    cursor?: WorkApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkApplicationScalarFieldEnum | WorkApplicationScalarFieldEnum[]
  }

  /**
   * Work without action
   */
  export type WorkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
  }


  /**
   * Model Assignment
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
    assignment_status: $Enums.AssignmentStatus | null
    withdrawal_reason: string | null
  }

  export type AssignmentMaxAggregateOutputType = {
    assignment_id: number | null
    work_id: number | null
    user_id: number | null
    outsider_name: string | null
    assignment_status: $Enums.AssignmentStatus | null
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
     * Filter which Assignment to aggregate.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Assignments
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




  export type AssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentWhereInput
    orderBy?: AssignmentOrderByWithAggregationInput | AssignmentOrderByWithAggregationInput[]
    by: AssignmentScalarFieldEnum[] | AssignmentScalarFieldEnum
    having?: AssignmentScalarWhereWithAggregatesInput
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
    assignment_status: $Enums.AssignmentStatus
    withdrawal_reason: string | null
    _count: AssignmentCountAggregateOutputType | null
    _avg: AssignmentAvgAggregateOutputType | null
    _sum: AssignmentSumAggregateOutputType | null
    _min: AssignmentMinAggregateOutputType | null
    _max: AssignmentMaxAggregateOutputType | null
  }

  type GetAssignmentGroupByPayload<T extends AssignmentGroupByArgs> = Prisma.PrismaPromise<
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


  export type AssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    assignment_id?: boolean
    work_id?: boolean
    user_id?: boolean
    outsider_name?: boolean
    assignment_status?: boolean
    withdrawal_reason?: boolean
    work?: boolean | WorkDefaultArgs<ExtArgs>
    user?: boolean | Assignment$userArgs<ExtArgs>
  }, ExtArgs["result"]["assignment"]>



  export type AssignmentSelectScalar = {
    assignment_id?: boolean
    work_id?: boolean
    user_id?: boolean
    outsider_name?: boolean
    assignment_status?: boolean
    withdrawal_reason?: boolean
  }

  export type AssignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"assignment_id" | "work_id" | "user_id" | "outsider_name" | "assignment_status" | "withdrawal_reason", ExtArgs["result"]["assignment"]>
  export type AssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    work?: boolean | WorkDefaultArgs<ExtArgs>
    user?: boolean | Assignment$userArgs<ExtArgs>
  }

  export type $AssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Assignment"
    objects: {
      work: Prisma.$WorkPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      assignment_id: number
      work_id: number
      user_id: number | null
      outsider_name: string | null
      assignment_status: $Enums.AssignmentStatus
      withdrawal_reason: string | null
    }, ExtArgs["result"]["assignment"]>
    composites: {}
  }

  type AssignmentGetPayload<S extends boolean | null | undefined | AssignmentDefaultArgs> = $Result.GetResult<Prisma.$AssignmentPayload, S>

  type AssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssignmentCountAggregateInputType | true
    }

  export interface AssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Assignment'], meta: { name: 'Assignment' } }
    /**
     * Find zero or one Assignment that matches the filter.
     * @param {AssignmentFindUniqueArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssignmentFindUniqueArgs>(args: SelectSubset<T, AssignmentFindUniqueArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Assignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssignmentFindUniqueOrThrowArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFindFirstArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssignmentFindFirstArgs>(args?: SelectSubset<T, AssignmentFindFirstArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFindFirstOrThrowArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Assignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends AssignmentFindManyArgs>(args?: SelectSubset<T, AssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Assignment.
     * @param {AssignmentCreateArgs} args - Arguments to create a Assignment.
     * @example
     * // Create one Assignment
     * const Assignment = await prisma.assignment.create({
     *   data: {
     *     // ... data to create a Assignment
     *   }
     * })
     * 
     */
    create<T extends AssignmentCreateArgs>(args: SelectSubset<T, AssignmentCreateArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Assignments.
     * @param {AssignmentCreateManyArgs} args - Arguments to create many Assignments.
     * @example
     * // Create many Assignments
     * const assignment = await prisma.assignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssignmentCreateManyArgs>(args?: SelectSubset<T, AssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Assignment.
     * @param {AssignmentDeleteArgs} args - Arguments to delete one Assignment.
     * @example
     * // Delete one Assignment
     * const Assignment = await prisma.assignment.delete({
     *   where: {
     *     // ... filter to delete one Assignment
     *   }
     * })
     * 
     */
    delete<T extends AssignmentDeleteArgs>(args: SelectSubset<T, AssignmentDeleteArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Assignment.
     * @param {AssignmentUpdateArgs} args - Arguments to update one Assignment.
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
    update<T extends AssignmentUpdateArgs>(args: SelectSubset<T, AssignmentUpdateArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Assignments.
     * @param {AssignmentDeleteManyArgs} args - Arguments to filter Assignments to delete.
     * @example
     * // Delete a few Assignments
     * const { count } = await prisma.assignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssignmentDeleteManyArgs>(args?: SelectSubset<T, AssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends AssignmentUpdateManyArgs>(args: SelectSubset<T, AssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Assignment.
     * @param {AssignmentUpsertArgs} args - Arguments to update or create a Assignment.
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
    upsert<T extends AssignmentUpsertArgs>(args: SelectSubset<T, AssignmentUpsertArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Assignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentCountArgs} args - Arguments to filter Assignments to count.
     * @example
     * // Count the number of Assignments
     * const count = await prisma.assignment.count({
     *   where: {
     *     // ... the filter for the Assignments we want to count
     *   }
     * })
    **/
    count<T extends AssignmentCountArgs>(
      args?: Subset<T, AssignmentCountArgs>,
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
     * @param {AssignmentGroupByArgs} args - Group by arguments.
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
      T extends AssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssignmentGroupByArgs['orderBy'] }
        : { orderBy?: AssignmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Assignment model
   */
  readonly fields: AssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Assignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    work<T extends WorkDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkDefaultArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends Assignment$userArgs<ExtArgs> = {}>(args?: Subset<T, Assignment$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Assignment model
   */
  interface AssignmentFieldRefs {
    readonly assignment_id: FieldRef<"Assignment", 'Int'>
    readonly work_id: FieldRef<"Assignment", 'Int'>
    readonly user_id: FieldRef<"Assignment", 'Int'>
    readonly outsider_name: FieldRef<"Assignment", 'String'>
    readonly assignment_status: FieldRef<"Assignment", 'AssignmentStatus'>
    readonly withdrawal_reason: FieldRef<"Assignment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Assignment findUnique
   */
  export type AssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment findUniqueOrThrow
   */
  export type AssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment findFirst
   */
  export type AssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assignments.
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assignments.
     */
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Assignment findFirstOrThrow
   */
  export type AssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assignments.
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assignments.
     */
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Assignment findMany
   */
  export type AssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignments to fetch.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Assignments.
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Assignment create
   */
  export type AssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Assignment.
     */
    data: XOR<AssignmentCreateInput, AssignmentUncheckedCreateInput>
  }

  /**
   * Assignment createMany
   */
  export type AssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Assignments.
     */
    data: AssignmentCreateManyInput | AssignmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Assignment update
   */
  export type AssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Assignment.
     */
    data: XOR<AssignmentUpdateInput, AssignmentUncheckedUpdateInput>
    /**
     * Choose, which Assignment to update.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment updateMany
   */
  export type AssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Assignments.
     */
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyInput>
    /**
     * Filter which Assignments to update
     */
    where?: AssignmentWhereInput
    /**
     * Limit how many Assignments to update.
     */
    limit?: number
  }

  /**
   * Assignment upsert
   */
  export type AssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Assignment to update in case it exists.
     */
    where: AssignmentWhereUniqueInput
    /**
     * In case the Assignment found by the `where` argument doesn't exist, create a new Assignment with this data.
     */
    create: XOR<AssignmentCreateInput, AssignmentUncheckedCreateInput>
    /**
     * In case the Assignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssignmentUpdateInput, AssignmentUncheckedUpdateInput>
  }

  /**
   * Assignment delete
   */
  export type AssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter which Assignment to delete.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment deleteMany
   */
  export type AssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assignments to delete
     */
    where?: AssignmentWhereInput
    /**
     * Limit how many Assignments to delete.
     */
    limit?: number
  }

  /**
   * Assignment.user
   */
  export type Assignment$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Assignment without action
   */
  export type AssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
  }


  /**
   * Model WorkApplication
   */

  export type AggregateWorkApplication = {
    _count: WorkApplicationCountAggregateOutputType | null
    _avg: WorkApplicationAvgAggregateOutputType | null
    _sum: WorkApplicationSumAggregateOutputType | null
    _min: WorkApplicationMinAggregateOutputType | null
    _max: WorkApplicationMaxAggregateOutputType | null
  }

  export type WorkApplicationAvgAggregateOutputType = {
    application_id: number | null
    work_id: number | null
    user_id: number | null
  }

  export type WorkApplicationSumAggregateOutputType = {
    application_id: number | null
    work_id: number | null
    user_id: number | null
  }

  export type WorkApplicationMinAggregateOutputType = {
    application_id: number | null
    work_id: number | null
    user_id: number | null
    application_status: $Enums.ApplicationStatus | null
  }

  export type WorkApplicationMaxAggregateOutputType = {
    application_id: number | null
    work_id: number | null
    user_id: number | null
    application_status: $Enums.ApplicationStatus | null
  }

  export type WorkApplicationCountAggregateOutputType = {
    application_id: number
    work_id: number
    user_id: number
    application_status: number
    _all: number
  }


  export type WorkApplicationAvgAggregateInputType = {
    application_id?: true
    work_id?: true
    user_id?: true
  }

  export type WorkApplicationSumAggregateInputType = {
    application_id?: true
    work_id?: true
    user_id?: true
  }

  export type WorkApplicationMinAggregateInputType = {
    application_id?: true
    work_id?: true
    user_id?: true
    application_status?: true
  }

  export type WorkApplicationMaxAggregateInputType = {
    application_id?: true
    work_id?: true
    user_id?: true
    application_status?: true
  }

  export type WorkApplicationCountAggregateInputType = {
    application_id?: true
    work_id?: true
    user_id?: true
    application_status?: true
    _all?: true
  }

  export type WorkApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkApplication to aggregate.
     */
    where?: WorkApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkApplications to fetch.
     */
    orderBy?: WorkApplicationOrderByWithRelationInput | WorkApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkApplications
    **/
    _count?: true | WorkApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkApplicationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkApplicationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkApplicationMaxAggregateInputType
  }

  export type GetWorkApplicationAggregateType<T extends WorkApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkApplication[P]>
      : GetScalarType<T[P], AggregateWorkApplication[P]>
  }




  export type WorkApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkApplicationWhereInput
    orderBy?: WorkApplicationOrderByWithAggregationInput | WorkApplicationOrderByWithAggregationInput[]
    by: WorkApplicationScalarFieldEnum[] | WorkApplicationScalarFieldEnum
    having?: WorkApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkApplicationCountAggregateInputType | true
    _avg?: WorkApplicationAvgAggregateInputType
    _sum?: WorkApplicationSumAggregateInputType
    _min?: WorkApplicationMinAggregateInputType
    _max?: WorkApplicationMaxAggregateInputType
  }

  export type WorkApplicationGroupByOutputType = {
    application_id: number
    work_id: number
    user_id: number
    application_status: $Enums.ApplicationStatus
    _count: WorkApplicationCountAggregateOutputType | null
    _avg: WorkApplicationAvgAggregateOutputType | null
    _sum: WorkApplicationSumAggregateOutputType | null
    _min: WorkApplicationMinAggregateOutputType | null
    _max: WorkApplicationMaxAggregateOutputType | null
  }

  type GetWorkApplicationGroupByPayload<T extends WorkApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], WorkApplicationGroupByOutputType[P]>
        }
      >
    >


  export type WorkApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    application_id?: boolean
    work_id?: boolean
    user_id?: boolean
    application_status?: boolean
    work?: boolean | WorkDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workApplication"]>



  export type WorkApplicationSelectScalar = {
    application_id?: boolean
    work_id?: boolean
    user_id?: boolean
    application_status?: boolean
  }

  export type WorkApplicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"application_id" | "work_id" | "user_id" | "application_status", ExtArgs["result"]["workApplication"]>
  export type WorkApplicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    work?: boolean | WorkDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WorkApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkApplication"
    objects: {
      work: Prisma.$WorkPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      application_id: number
      work_id: number
      user_id: number
      application_status: $Enums.ApplicationStatus
    }, ExtArgs["result"]["workApplication"]>
    composites: {}
  }

  type WorkApplicationGetPayload<S extends boolean | null | undefined | WorkApplicationDefaultArgs> = $Result.GetResult<Prisma.$WorkApplicationPayload, S>

  type WorkApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkApplicationCountAggregateInputType | true
    }

  export interface WorkApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkApplication'], meta: { name: 'WorkApplication' } }
    /**
     * Find zero or one WorkApplication that matches the filter.
     * @param {WorkApplicationFindUniqueArgs} args - Arguments to find a WorkApplication
     * @example
     * // Get one WorkApplication
     * const workApplication = await prisma.workApplication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkApplicationFindUniqueArgs>(args: SelectSubset<T, WorkApplicationFindUniqueArgs<ExtArgs>>): Prisma__WorkApplicationClient<$Result.GetResult<Prisma.$WorkApplicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkApplication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkApplicationFindUniqueOrThrowArgs} args - Arguments to find a WorkApplication
     * @example
     * // Get one WorkApplication
     * const workApplication = await prisma.workApplication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkApplicationFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkApplicationClient<$Result.GetResult<Prisma.$WorkApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkApplication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkApplicationFindFirstArgs} args - Arguments to find a WorkApplication
     * @example
     * // Get one WorkApplication
     * const workApplication = await prisma.workApplication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkApplicationFindFirstArgs>(args?: SelectSubset<T, WorkApplicationFindFirstArgs<ExtArgs>>): Prisma__WorkApplicationClient<$Result.GetResult<Prisma.$WorkApplicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkApplication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkApplicationFindFirstOrThrowArgs} args - Arguments to find a WorkApplication
     * @example
     * // Get one WorkApplication
     * const workApplication = await prisma.workApplication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkApplicationFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkApplicationClient<$Result.GetResult<Prisma.$WorkApplicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkApplications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkApplications
     * const workApplications = await prisma.workApplication.findMany()
     * 
     * // Get first 10 WorkApplications
     * const workApplications = await prisma.workApplication.findMany({ take: 10 })
     * 
     * // Only select the `application_id`
     * const workApplicationWithApplication_idOnly = await prisma.workApplication.findMany({ select: { application_id: true } })
     * 
     */
    findMany<T extends WorkApplicationFindManyArgs>(args?: SelectSubset<T, WorkApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkApplication.
     * @param {WorkApplicationCreateArgs} args - Arguments to create a WorkApplication.
     * @example
     * // Create one WorkApplication
     * const WorkApplication = await prisma.workApplication.create({
     *   data: {
     *     // ... data to create a WorkApplication
     *   }
     * })
     * 
     */
    create<T extends WorkApplicationCreateArgs>(args: SelectSubset<T, WorkApplicationCreateArgs<ExtArgs>>): Prisma__WorkApplicationClient<$Result.GetResult<Prisma.$WorkApplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkApplications.
     * @param {WorkApplicationCreateManyArgs} args - Arguments to create many WorkApplications.
     * @example
     * // Create many WorkApplications
     * const workApplication = await prisma.workApplication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkApplicationCreateManyArgs>(args?: SelectSubset<T, WorkApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WorkApplication.
     * @param {WorkApplicationDeleteArgs} args - Arguments to delete one WorkApplication.
     * @example
     * // Delete one WorkApplication
     * const WorkApplication = await prisma.workApplication.delete({
     *   where: {
     *     // ... filter to delete one WorkApplication
     *   }
     * })
     * 
     */
    delete<T extends WorkApplicationDeleteArgs>(args: SelectSubset<T, WorkApplicationDeleteArgs<ExtArgs>>): Prisma__WorkApplicationClient<$Result.GetResult<Prisma.$WorkApplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkApplication.
     * @param {WorkApplicationUpdateArgs} args - Arguments to update one WorkApplication.
     * @example
     * // Update one WorkApplication
     * const workApplication = await prisma.workApplication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkApplicationUpdateArgs>(args: SelectSubset<T, WorkApplicationUpdateArgs<ExtArgs>>): Prisma__WorkApplicationClient<$Result.GetResult<Prisma.$WorkApplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkApplications.
     * @param {WorkApplicationDeleteManyArgs} args - Arguments to filter WorkApplications to delete.
     * @example
     * // Delete a few WorkApplications
     * const { count } = await prisma.workApplication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkApplicationDeleteManyArgs>(args?: SelectSubset<T, WorkApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkApplications
     * const workApplication = await prisma.workApplication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkApplicationUpdateManyArgs>(args: SelectSubset<T, WorkApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WorkApplication.
     * @param {WorkApplicationUpsertArgs} args - Arguments to update or create a WorkApplication.
     * @example
     * // Update or create a WorkApplication
     * const workApplication = await prisma.workApplication.upsert({
     *   create: {
     *     // ... data to create a WorkApplication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkApplication we want to update
     *   }
     * })
     */
    upsert<T extends WorkApplicationUpsertArgs>(args: SelectSubset<T, WorkApplicationUpsertArgs<ExtArgs>>): Prisma__WorkApplicationClient<$Result.GetResult<Prisma.$WorkApplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkApplicationCountArgs} args - Arguments to filter WorkApplications to count.
     * @example
     * // Count the number of WorkApplications
     * const count = await prisma.workApplication.count({
     *   where: {
     *     // ... the filter for the WorkApplications we want to count
     *   }
     * })
    **/
    count<T extends WorkApplicationCountArgs>(
      args?: Subset<T, WorkApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkApplicationAggregateArgs>(args: Subset<T, WorkApplicationAggregateArgs>): Prisma.PrismaPromise<GetWorkApplicationAggregateType<T>>

    /**
     * Group by WorkApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkApplicationGroupByArgs} args - Group by arguments.
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
      T extends WorkApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkApplicationGroupByArgs['orderBy'] }
        : { orderBy?: WorkApplicationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkApplication model
   */
  readonly fields: WorkApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkApplication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    work<T extends WorkDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkDefaultArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WorkApplication model
   */
  interface WorkApplicationFieldRefs {
    readonly application_id: FieldRef<"WorkApplication", 'Int'>
    readonly work_id: FieldRef<"WorkApplication", 'Int'>
    readonly user_id: FieldRef<"WorkApplication", 'Int'>
    readonly application_status: FieldRef<"WorkApplication", 'ApplicationStatus'>
  }
    

  // Custom InputTypes
  /**
   * WorkApplication findUnique
   */
  export type WorkApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkApplication
     */
    select?: WorkApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkApplication
     */
    omit?: WorkApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkApplicationInclude<ExtArgs> | null
    /**
     * Filter, which WorkApplication to fetch.
     */
    where: WorkApplicationWhereUniqueInput
  }

  /**
   * WorkApplication findUniqueOrThrow
   */
  export type WorkApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkApplication
     */
    select?: WorkApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkApplication
     */
    omit?: WorkApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkApplicationInclude<ExtArgs> | null
    /**
     * Filter, which WorkApplication to fetch.
     */
    where: WorkApplicationWhereUniqueInput
  }

  /**
   * WorkApplication findFirst
   */
  export type WorkApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkApplication
     */
    select?: WorkApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkApplication
     */
    omit?: WorkApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkApplicationInclude<ExtArgs> | null
    /**
     * Filter, which WorkApplication to fetch.
     */
    where?: WorkApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkApplications to fetch.
     */
    orderBy?: WorkApplicationOrderByWithRelationInput | WorkApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkApplications.
     */
    cursor?: WorkApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkApplications.
     */
    distinct?: WorkApplicationScalarFieldEnum | WorkApplicationScalarFieldEnum[]
  }

  /**
   * WorkApplication findFirstOrThrow
   */
  export type WorkApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkApplication
     */
    select?: WorkApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkApplication
     */
    omit?: WorkApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkApplicationInclude<ExtArgs> | null
    /**
     * Filter, which WorkApplication to fetch.
     */
    where?: WorkApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkApplications to fetch.
     */
    orderBy?: WorkApplicationOrderByWithRelationInput | WorkApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkApplications.
     */
    cursor?: WorkApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkApplications.
     */
    distinct?: WorkApplicationScalarFieldEnum | WorkApplicationScalarFieldEnum[]
  }

  /**
   * WorkApplication findMany
   */
  export type WorkApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkApplication
     */
    select?: WorkApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkApplication
     */
    omit?: WorkApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkApplicationInclude<ExtArgs> | null
    /**
     * Filter, which WorkApplications to fetch.
     */
    where?: WorkApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkApplications to fetch.
     */
    orderBy?: WorkApplicationOrderByWithRelationInput | WorkApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkApplications.
     */
    cursor?: WorkApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkApplications.
     */
    skip?: number
    distinct?: WorkApplicationScalarFieldEnum | WorkApplicationScalarFieldEnum[]
  }

  /**
   * WorkApplication create
   */
  export type WorkApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkApplication
     */
    select?: WorkApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkApplication
     */
    omit?: WorkApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkApplicationInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkApplication.
     */
    data: XOR<WorkApplicationCreateInput, WorkApplicationUncheckedCreateInput>
  }

  /**
   * WorkApplication createMany
   */
  export type WorkApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkApplications.
     */
    data: WorkApplicationCreateManyInput | WorkApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkApplication update
   */
  export type WorkApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkApplication
     */
    select?: WorkApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkApplication
     */
    omit?: WorkApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkApplicationInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkApplication.
     */
    data: XOR<WorkApplicationUpdateInput, WorkApplicationUncheckedUpdateInput>
    /**
     * Choose, which WorkApplication to update.
     */
    where: WorkApplicationWhereUniqueInput
  }

  /**
   * WorkApplication updateMany
   */
  export type WorkApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkApplications.
     */
    data: XOR<WorkApplicationUpdateManyMutationInput, WorkApplicationUncheckedUpdateManyInput>
    /**
     * Filter which WorkApplications to update
     */
    where?: WorkApplicationWhereInput
    /**
     * Limit how many WorkApplications to update.
     */
    limit?: number
  }

  /**
   * WorkApplication upsert
   */
  export type WorkApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkApplication
     */
    select?: WorkApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkApplication
     */
    omit?: WorkApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkApplicationInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkApplication to update in case it exists.
     */
    where: WorkApplicationWhereUniqueInput
    /**
     * In case the WorkApplication found by the `where` argument doesn't exist, create a new WorkApplication with this data.
     */
    create: XOR<WorkApplicationCreateInput, WorkApplicationUncheckedCreateInput>
    /**
     * In case the WorkApplication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkApplicationUpdateInput, WorkApplicationUncheckedUpdateInput>
  }

  /**
   * WorkApplication delete
   */
  export type WorkApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkApplication
     */
    select?: WorkApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkApplication
     */
    omit?: WorkApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkApplicationInclude<ExtArgs> | null
    /**
     * Filter which WorkApplication to delete.
     */
    where: WorkApplicationWhereUniqueInput
  }

  /**
   * WorkApplication deleteMany
   */
  export type WorkApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkApplications to delete
     */
    where?: WorkApplicationWhereInput
    /**
     * Limit how many WorkApplications to delete.
     */
    limit?: number
  }

  /**
   * WorkApplication without action
   */
  export type WorkApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkApplication
     */
    select?: WorkApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkApplication
     */
    omit?: WorkApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkApplicationInclude<ExtArgs> | null
  }


  /**
   * Model Task
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
  }

  export type TaskMaxAggregateOutputType = {
    task_id: number | null
    user_id: number | null
    task_title: string | null
    task_desc: string | null
    due_date: Date | null
  }

  export type TaskCountAggregateOutputType = {
    task_id: number
    user_id: number
    task_title: number
    task_desc: number
    due_date: number
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
  }

  export type TaskMaxAggregateInputType = {
    task_id?: true
    user_id?: true
    task_title?: true
    task_desc?: true
    due_date?: true
  }

  export type TaskCountAggregateInputType = {
    task_id?: true
    user_id?: true
    task_title?: true
    task_desc?: true
    due_date?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
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




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
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
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
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


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    task_id?: boolean
    user_id?: boolean
    task_title?: boolean
    task_desc?: boolean
    due_date?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tags?: boolean | Task$tagsArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>



  export type TaskSelectScalar = {
    task_id?: boolean
    user_id?: boolean
    task_title?: boolean
    task_desc?: boolean
    due_date?: boolean
  }

  export type TaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"task_id" | "user_id" | "task_title" | "task_desc" | "due_date", ExtArgs["result"]["task"]>
  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tags?: boolean | Task$tagsArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      tags: Prisma.$TaskTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      task_id: number
      user_id: number
      task_title: string
      task_desc: string | null
      due_date: Date | null
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
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
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
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
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
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
     * @param {TaskGroupByArgs} args - Group by arguments.
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
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tags<T extends Task$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Task$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Task model
   */
  interface TaskFieldRefs {
    readonly task_id: FieldRef<"Task", 'Int'>
    readonly user_id: FieldRef<"Task", 'Int'>
    readonly task_title: FieldRef<"Task", 'String'>
    readonly task_desc: FieldRef<"Task", 'String'>
    readonly due_date: FieldRef<"Task", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to delete.
     */
    limit?: number
  }

  /**
   * Task.tags
   */
  export type Task$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTag
     */
    select?: TaskTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskTag
     */
    omit?: TaskTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTagInclude<ExtArgs> | null
    where?: TaskTagWhereInput
    orderBy?: TaskTagOrderByWithRelationInput | TaskTagOrderByWithRelationInput[]
    cursor?: TaskTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskTagScalarFieldEnum | TaskTagScalarFieldEnum[]
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Model Tag
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
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
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




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
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

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
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


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tag_id?: boolean
    tag_name?: boolean
    color_hex?: boolean
    tasks?: boolean | Tag$tasksArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>



  export type TagSelectScalar = {
    tag_id?: boolean
    tag_name?: boolean
    color_hex?: boolean
  }

  export type TagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tag_id" | "tag_name" | "color_hex", ExtArgs["result"]["tag"]>
  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | Tag$tasksArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      tasks: Prisma.$TaskTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      tag_id: number
      tag_name: string
      color_hex: string
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
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
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
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
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
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
     * @param {TagGroupByArgs} args - Group by arguments.
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
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tasks<T extends Tag$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Tag$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Tag model
   */
  interface TagFieldRefs {
    readonly tag_id: FieldRef<"Tag", 'Int'>
    readonly tag_name: FieldRef<"Tag", 'String'>
    readonly color_hex: FieldRef<"Tag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tag.tasks
   */
  export type Tag$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTag
     */
    select?: TaskTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskTag
     */
    omit?: TaskTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTagInclude<ExtArgs> | null
    where?: TaskTagWhereInput
    orderBy?: TaskTagOrderByWithRelationInput | TaskTagOrderByWithRelationInput[]
    cursor?: TaskTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskTagScalarFieldEnum | TaskTagScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model TaskTag
   */

  export type AggregateTaskTag = {
    _count: TaskTagCountAggregateOutputType | null
    _avg: TaskTagAvgAggregateOutputType | null
    _sum: TaskTagSumAggregateOutputType | null
    _min: TaskTagMinAggregateOutputType | null
    _max: TaskTagMaxAggregateOutputType | null
  }

  export type TaskTagAvgAggregateOutputType = {
    task_tag_id: number | null
    task_id: number | null
    tag_id: number | null
  }

  export type TaskTagSumAggregateOutputType = {
    task_tag_id: number | null
    task_id: number | null
    tag_id: number | null
  }

  export type TaskTagMinAggregateOutputType = {
    task_tag_id: number | null
    task_id: number | null
    tag_id: number | null
  }

  export type TaskTagMaxAggregateOutputType = {
    task_tag_id: number | null
    task_id: number | null
    tag_id: number | null
  }

  export type TaskTagCountAggregateOutputType = {
    task_tag_id: number
    task_id: number
    tag_id: number
    _all: number
  }


  export type TaskTagAvgAggregateInputType = {
    task_tag_id?: true
    task_id?: true
    tag_id?: true
  }

  export type TaskTagSumAggregateInputType = {
    task_tag_id?: true
    task_id?: true
    tag_id?: true
  }

  export type TaskTagMinAggregateInputType = {
    task_tag_id?: true
    task_id?: true
    tag_id?: true
  }

  export type TaskTagMaxAggregateInputType = {
    task_tag_id?: true
    task_id?: true
    tag_id?: true
  }

  export type TaskTagCountAggregateInputType = {
    task_tag_id?: true
    task_id?: true
    tag_id?: true
    _all?: true
  }

  export type TaskTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskTag to aggregate.
     */
    where?: TaskTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskTags to fetch.
     */
    orderBy?: TaskTagOrderByWithRelationInput | TaskTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TaskTags
    **/
    _count?: true | TaskTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskTagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskTagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskTagMaxAggregateInputType
  }

  export type GetTaskTagAggregateType<T extends TaskTagAggregateArgs> = {
        [P in keyof T & keyof AggregateTaskTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaskTag[P]>
      : GetScalarType<T[P], AggregateTaskTag[P]>
  }




  export type TaskTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskTagWhereInput
    orderBy?: TaskTagOrderByWithAggregationInput | TaskTagOrderByWithAggregationInput[]
    by: TaskTagScalarFieldEnum[] | TaskTagScalarFieldEnum
    having?: TaskTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskTagCountAggregateInputType | true
    _avg?: TaskTagAvgAggregateInputType
    _sum?: TaskTagSumAggregateInputType
    _min?: TaskTagMinAggregateInputType
    _max?: TaskTagMaxAggregateInputType
  }

  export type TaskTagGroupByOutputType = {
    task_tag_id: number
    task_id: number
    tag_id: number
    _count: TaskTagCountAggregateOutputType | null
    _avg: TaskTagAvgAggregateOutputType | null
    _sum: TaskTagSumAggregateOutputType | null
    _min: TaskTagMinAggregateOutputType | null
    _max: TaskTagMaxAggregateOutputType | null
  }

  type GetTaskTagGroupByPayload<T extends TaskTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskTagGroupByOutputType[P]>
            : GetScalarType<T[P], TaskTagGroupByOutputType[P]>
        }
      >
    >


  export type TaskTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    task_tag_id?: boolean
    task_id?: boolean
    tag_id?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskTag"]>



  export type TaskTagSelectScalar = {
    task_tag_id?: boolean
    task_id?: boolean
    tag_id?: boolean
  }

  export type TaskTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"task_tag_id" | "task_id" | "tag_id", ExtArgs["result"]["taskTag"]>
  export type TaskTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }

  export type $TaskTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TaskTag"
    objects: {
      task: Prisma.$TaskPayload<ExtArgs>
      tag: Prisma.$TagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      task_tag_id: number
      task_id: number
      tag_id: number
    }, ExtArgs["result"]["taskTag"]>
    composites: {}
  }

  type TaskTagGetPayload<S extends boolean | null | undefined | TaskTagDefaultArgs> = $Result.GetResult<Prisma.$TaskTagPayload, S>

  type TaskTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskTagCountAggregateInputType | true
    }

  export interface TaskTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TaskTag'], meta: { name: 'TaskTag' } }
    /**
     * Find zero or one TaskTag that matches the filter.
     * @param {TaskTagFindUniqueArgs} args - Arguments to find a TaskTag
     * @example
     * // Get one TaskTag
     * const taskTag = await prisma.taskTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskTagFindUniqueArgs>(args: SelectSubset<T, TaskTagFindUniqueArgs<ExtArgs>>): Prisma__TaskTagClient<$Result.GetResult<Prisma.$TaskTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TaskTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskTagFindUniqueOrThrowArgs} args - Arguments to find a TaskTag
     * @example
     * // Get one TaskTag
     * const taskTag = await prisma.taskTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskTagFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskTagClient<$Result.GetResult<Prisma.$TaskTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskTagFindFirstArgs} args - Arguments to find a TaskTag
     * @example
     * // Get one TaskTag
     * const taskTag = await prisma.taskTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskTagFindFirstArgs>(args?: SelectSubset<T, TaskTagFindFirstArgs<ExtArgs>>): Prisma__TaskTagClient<$Result.GetResult<Prisma.$TaskTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskTagFindFirstOrThrowArgs} args - Arguments to find a TaskTag
     * @example
     * // Get one TaskTag
     * const taskTag = await prisma.taskTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskTagFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskTagClient<$Result.GetResult<Prisma.$TaskTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TaskTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaskTags
     * const taskTags = await prisma.taskTag.findMany()
     * 
     * // Get first 10 TaskTags
     * const taskTags = await prisma.taskTag.findMany({ take: 10 })
     * 
     * // Only select the `task_tag_id`
     * const taskTagWithTask_tag_idOnly = await prisma.taskTag.findMany({ select: { task_tag_id: true } })
     * 
     */
    findMany<T extends TaskTagFindManyArgs>(args?: SelectSubset<T, TaskTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TaskTag.
     * @param {TaskTagCreateArgs} args - Arguments to create a TaskTag.
     * @example
     * // Create one TaskTag
     * const TaskTag = await prisma.taskTag.create({
     *   data: {
     *     // ... data to create a TaskTag
     *   }
     * })
     * 
     */
    create<T extends TaskTagCreateArgs>(args: SelectSubset<T, TaskTagCreateArgs<ExtArgs>>): Prisma__TaskTagClient<$Result.GetResult<Prisma.$TaskTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TaskTags.
     * @param {TaskTagCreateManyArgs} args - Arguments to create many TaskTags.
     * @example
     * // Create many TaskTags
     * const taskTag = await prisma.taskTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskTagCreateManyArgs>(args?: SelectSubset<T, TaskTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TaskTag.
     * @param {TaskTagDeleteArgs} args - Arguments to delete one TaskTag.
     * @example
     * // Delete one TaskTag
     * const TaskTag = await prisma.taskTag.delete({
     *   where: {
     *     // ... filter to delete one TaskTag
     *   }
     * })
     * 
     */
    delete<T extends TaskTagDeleteArgs>(args: SelectSubset<T, TaskTagDeleteArgs<ExtArgs>>): Prisma__TaskTagClient<$Result.GetResult<Prisma.$TaskTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TaskTag.
     * @param {TaskTagUpdateArgs} args - Arguments to update one TaskTag.
     * @example
     * // Update one TaskTag
     * const taskTag = await prisma.taskTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskTagUpdateArgs>(args: SelectSubset<T, TaskTagUpdateArgs<ExtArgs>>): Prisma__TaskTagClient<$Result.GetResult<Prisma.$TaskTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TaskTags.
     * @param {TaskTagDeleteManyArgs} args - Arguments to filter TaskTags to delete.
     * @example
     * // Delete a few TaskTags
     * const { count } = await prisma.taskTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskTagDeleteManyArgs>(args?: SelectSubset<T, TaskTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaskTags
     * const taskTag = await prisma.taskTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskTagUpdateManyArgs>(args: SelectSubset<T, TaskTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TaskTag.
     * @param {TaskTagUpsertArgs} args - Arguments to update or create a TaskTag.
     * @example
     * // Update or create a TaskTag
     * const taskTag = await prisma.taskTag.upsert({
     *   create: {
     *     // ... data to create a TaskTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaskTag we want to update
     *   }
     * })
     */
    upsert<T extends TaskTagUpsertArgs>(args: SelectSubset<T, TaskTagUpsertArgs<ExtArgs>>): Prisma__TaskTagClient<$Result.GetResult<Prisma.$TaskTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TaskTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskTagCountArgs} args - Arguments to filter TaskTags to count.
     * @example
     * // Count the number of TaskTags
     * const count = await prisma.taskTag.count({
     *   where: {
     *     // ... the filter for the TaskTags we want to count
     *   }
     * })
    **/
    count<T extends TaskTagCountArgs>(
      args?: Subset<T, TaskTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TaskTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskTagAggregateArgs>(args: Subset<T, TaskTagAggregateArgs>): Prisma.PrismaPromise<GetTaskTagAggregateType<T>>

    /**
     * Group by TaskTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskTagGroupByArgs} args - Group by arguments.
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
      T extends TaskTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskTagGroupByArgs['orderBy'] }
        : { orderBy?: TaskTagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TaskTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TaskTag model
   */
  readonly fields: TaskTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TaskTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tag<T extends TagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TagDefaultArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TaskTag model
   */
  interface TaskTagFieldRefs {
    readonly task_tag_id: FieldRef<"TaskTag", 'Int'>
    readonly task_id: FieldRef<"TaskTag", 'Int'>
    readonly tag_id: FieldRef<"TaskTag", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TaskTag findUnique
   */
  export type TaskTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTag
     */
    select?: TaskTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskTag
     */
    omit?: TaskTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTagInclude<ExtArgs> | null
    /**
     * Filter, which TaskTag to fetch.
     */
    where: TaskTagWhereUniqueInput
  }

  /**
   * TaskTag findUniqueOrThrow
   */
  export type TaskTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTag
     */
    select?: TaskTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskTag
     */
    omit?: TaskTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTagInclude<ExtArgs> | null
    /**
     * Filter, which TaskTag to fetch.
     */
    where: TaskTagWhereUniqueInput
  }

  /**
   * TaskTag findFirst
   */
  export type TaskTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTag
     */
    select?: TaskTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskTag
     */
    omit?: TaskTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTagInclude<ExtArgs> | null
    /**
     * Filter, which TaskTag to fetch.
     */
    where?: TaskTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskTags to fetch.
     */
    orderBy?: TaskTagOrderByWithRelationInput | TaskTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskTags.
     */
    cursor?: TaskTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskTags.
     */
    distinct?: TaskTagScalarFieldEnum | TaskTagScalarFieldEnum[]
  }

  /**
   * TaskTag findFirstOrThrow
   */
  export type TaskTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTag
     */
    select?: TaskTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskTag
     */
    omit?: TaskTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTagInclude<ExtArgs> | null
    /**
     * Filter, which TaskTag to fetch.
     */
    where?: TaskTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskTags to fetch.
     */
    orderBy?: TaskTagOrderByWithRelationInput | TaskTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskTags.
     */
    cursor?: TaskTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskTags.
     */
    distinct?: TaskTagScalarFieldEnum | TaskTagScalarFieldEnum[]
  }

  /**
   * TaskTag findMany
   */
  export type TaskTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTag
     */
    select?: TaskTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskTag
     */
    omit?: TaskTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTagInclude<ExtArgs> | null
    /**
     * Filter, which TaskTags to fetch.
     */
    where?: TaskTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskTags to fetch.
     */
    orderBy?: TaskTagOrderByWithRelationInput | TaskTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TaskTags.
     */
    cursor?: TaskTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskTags.
     */
    skip?: number
    distinct?: TaskTagScalarFieldEnum | TaskTagScalarFieldEnum[]
  }

  /**
   * TaskTag create
   */
  export type TaskTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTag
     */
    select?: TaskTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskTag
     */
    omit?: TaskTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTagInclude<ExtArgs> | null
    /**
     * The data needed to create a TaskTag.
     */
    data: XOR<TaskTagCreateInput, TaskTagUncheckedCreateInput>
  }

  /**
   * TaskTag createMany
   */
  export type TaskTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaskTags.
     */
    data: TaskTagCreateManyInput | TaskTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TaskTag update
   */
  export type TaskTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTag
     */
    select?: TaskTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskTag
     */
    omit?: TaskTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTagInclude<ExtArgs> | null
    /**
     * The data needed to update a TaskTag.
     */
    data: XOR<TaskTagUpdateInput, TaskTagUncheckedUpdateInput>
    /**
     * Choose, which TaskTag to update.
     */
    where: TaskTagWhereUniqueInput
  }

  /**
   * TaskTag updateMany
   */
  export type TaskTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TaskTags.
     */
    data: XOR<TaskTagUpdateManyMutationInput, TaskTagUncheckedUpdateManyInput>
    /**
     * Filter which TaskTags to update
     */
    where?: TaskTagWhereInput
    /**
     * Limit how many TaskTags to update.
     */
    limit?: number
  }

  /**
   * TaskTag upsert
   */
  export type TaskTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTag
     */
    select?: TaskTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskTag
     */
    omit?: TaskTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTagInclude<ExtArgs> | null
    /**
     * The filter to search for the TaskTag to update in case it exists.
     */
    where: TaskTagWhereUniqueInput
    /**
     * In case the TaskTag found by the `where` argument doesn't exist, create a new TaskTag with this data.
     */
    create: XOR<TaskTagCreateInput, TaskTagUncheckedCreateInput>
    /**
     * In case the TaskTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskTagUpdateInput, TaskTagUncheckedUpdateInput>
  }

  /**
   * TaskTag delete
   */
  export type TaskTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTag
     */
    select?: TaskTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskTag
     */
    omit?: TaskTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTagInclude<ExtArgs> | null
    /**
     * Filter which TaskTag to delete.
     */
    where: TaskTagWhereUniqueInput
  }

  /**
   * TaskTag deleteMany
   */
  export type TaskTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskTags to delete
     */
    where?: TaskTagWhereInput
    /**
     * Limit how many TaskTags to delete.
     */
    limit?: number
  }

  /**
   * TaskTag without action
   */
  export type TaskTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTag
     */
    select?: TaskTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskTag
     */
    omit?: TaskTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTagInclude<ExtArgs> | null
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


  export const UserProfileScalarFieldEnum: {
    profile_id: 'profile_id',
    user_id: 'user_id',
    primary_role: 'primary_role',
    secondary_role: 'secondary_role',
    reliability_score: 'reliability_score'
  };

  export type UserProfileScalarFieldEnum = (typeof UserProfileScalarFieldEnum)[keyof typeof UserProfileScalarFieldEnum]


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


  export const AssignmentScalarFieldEnum: {
    assignment_id: 'assignment_id',
    work_id: 'work_id',
    user_id: 'user_id',
    outsider_name: 'outsider_name',
    assignment_status: 'assignment_status',
    withdrawal_reason: 'withdrawal_reason'
  };

  export type AssignmentScalarFieldEnum = (typeof AssignmentScalarFieldEnum)[keyof typeof AssignmentScalarFieldEnum]


  export const WorkApplicationScalarFieldEnum: {
    application_id: 'application_id',
    work_id: 'work_id',
    user_id: 'user_id',
    application_status: 'application_status'
  };

  export type WorkApplicationScalarFieldEnum = (typeof WorkApplicationScalarFieldEnum)[keyof typeof WorkApplicationScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    task_id: 'task_id',
    user_id: 'user_id',
    task_title: 'task_title',
    task_desc: 'task_desc',
    due_date: 'due_date'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const TagScalarFieldEnum: {
    tag_id: 'tag_id',
    tag_name: 'tag_name',
    color_hex: 'color_hex'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const TaskTagScalarFieldEnum: {
    task_tag_id: 'task_tag_id',
    task_id: 'task_id',
    tag_id: 'tag_id'
  };

  export type TaskTagScalarFieldEnum = (typeof TaskTagScalarFieldEnum)[keyof typeof TaskTagScalarFieldEnum]


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


  export const UserOrderByRelevanceFieldEnum: {
    email: 'email',
    google_id: 'google_id',
    full_name: 'full_name',
    avatar_url: 'avatar_url'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const ProjectOrderByRelevanceFieldEnum: {
    project_name: 'project_name',
    client_name: 'client_name',
    project_location: 'project_location',
    project_description: 'project_description'
  };

  export type ProjectOrderByRelevanceFieldEnum = (typeof ProjectOrderByRelevanceFieldEnum)[keyof typeof ProjectOrderByRelevanceFieldEnum]


  export const WorkOrderByRelevanceFieldEnum: {
    project_role: 'project_role',
    work_description: 'work_description'
  };

  export type WorkOrderByRelevanceFieldEnum = (typeof WorkOrderByRelevanceFieldEnum)[keyof typeof WorkOrderByRelevanceFieldEnum]


  export const AssignmentOrderByRelevanceFieldEnum: {
    outsider_name: 'outsider_name',
    withdrawal_reason: 'withdrawal_reason'
  };

  export type AssignmentOrderByRelevanceFieldEnum = (typeof AssignmentOrderByRelevanceFieldEnum)[keyof typeof AssignmentOrderByRelevanceFieldEnum]


  export const TaskOrderByRelevanceFieldEnum: {
    task_title: 'task_title',
    task_desc: 'task_desc'
  };

  export type TaskOrderByRelevanceFieldEnum = (typeof TaskOrderByRelevanceFieldEnum)[keyof typeof TaskOrderByRelevanceFieldEnum]


  export const TagOrderByRelevanceFieldEnum: {
    tag_name: 'tag_name',
    color_hex: 'color_hex'
  };

  export type TagOrderByRelevanceFieldEnum = (typeof TagOrderByRelevanceFieldEnum)[keyof typeof TagOrderByRelevanceFieldEnum]


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
   * Reference to a field of type 'UserType'
   */
  export type EnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'RoleCategory'
   */
  export type EnumRoleCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoleCategory'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'ProjectStatus'
   */
  export type EnumProjectStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectStatus'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'WorkStatus'
   */
  export type EnumWorkStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WorkStatus'>
    


  /**
   * Reference to a field of type 'AssignmentStatus'
   */
  export type EnumAssignmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssignmentStatus'>
    


  /**
   * Reference to a field of type 'ApplicationStatus'
   */
  export type EnumApplicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApplicationStatus'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    user_id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    google_id?: StringNullableFilter<"User"> | string | null
    full_name?: StringNullableFilter<"User"> | string | null
    avatar_url?: StringNullableFilter<"User"> | string | null
    user_type?: EnumUserTypeFilter<"User"> | $Enums.UserType
    created_at?: DateTimeFilter<"User"> | Date | string
    profile?: XOR<UserProfileNullableScalarRelationFilter, UserProfileWhereInput> | null
    assignments?: AssignmentListRelationFilter
    applications?: WorkApplicationListRelationFilter
    tasks?: TaskListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    user_id?: SortOrder
    email?: SortOrder
    google_id?: SortOrderInput | SortOrder
    full_name?: SortOrderInput | SortOrder
    avatar_url?: SortOrderInput | SortOrder
    user_type?: SortOrder
    created_at?: SortOrder
    profile?: UserProfileOrderByWithRelationInput
    assignments?: AssignmentOrderByRelationAggregateInput
    applications?: WorkApplicationOrderByRelationAggregateInput
    tasks?: TaskOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    email?: string
    google_id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    full_name?: StringNullableFilter<"User"> | string | null
    avatar_url?: StringNullableFilter<"User"> | string | null
    user_type?: EnumUserTypeFilter<"User"> | $Enums.UserType
    created_at?: DateTimeFilter<"User"> | Date | string
    profile?: XOR<UserProfileNullableScalarRelationFilter, UserProfileWhereInput> | null
    assignments?: AssignmentListRelationFilter
    applications?: WorkApplicationListRelationFilter
    tasks?: TaskListRelationFilter
  }, "user_id" | "email" | "google_id">

  export type UserOrderByWithAggregationInput = {
    user_id?: SortOrder
    email?: SortOrder
    google_id?: SortOrderInput | SortOrder
    full_name?: SortOrderInput | SortOrder
    avatar_url?: SortOrderInput | SortOrder
    user_type?: SortOrder
    created_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    google_id?: StringNullableWithAggregatesFilter<"User"> | string | null
    full_name?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatar_url?: StringNullableWithAggregatesFilter<"User"> | string | null
    user_type?: EnumUserTypeWithAggregatesFilter<"User"> | $Enums.UserType
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserProfileWhereInput = {
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    profile_id?: IntFilter<"UserProfile"> | number
    user_id?: IntFilter<"UserProfile"> | number
    primary_role?: EnumRoleCategoryFilter<"UserProfile"> | $Enums.RoleCategory
    secondary_role?: EnumRoleCategoryNullableFilter<"UserProfile"> | $Enums.RoleCategory | null
    reliability_score?: DecimalFilter<"UserProfile"> | Decimal | DecimalJsLike | number | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserProfileOrderByWithRelationInput = {
    profile_id?: SortOrder
    user_id?: SortOrder
    primary_role?: SortOrder
    secondary_role?: SortOrderInput | SortOrder
    reliability_score?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserProfileWhereUniqueInput = Prisma.AtLeast<{
    profile_id?: number
    user_id?: number
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    primary_role?: EnumRoleCategoryFilter<"UserProfile"> | $Enums.RoleCategory
    secondary_role?: EnumRoleCategoryNullableFilter<"UserProfile"> | $Enums.RoleCategory | null
    reliability_score?: DecimalFilter<"UserProfile"> | Decimal | DecimalJsLike | number | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "profile_id" | "user_id">

  export type UserProfileOrderByWithAggregationInput = {
    profile_id?: SortOrder
    user_id?: SortOrder
    primary_role?: SortOrder
    secondary_role?: SortOrderInput | SortOrder
    reliability_score?: SortOrder
    _count?: UserProfileCountOrderByAggregateInput
    _avg?: UserProfileAvgOrderByAggregateInput
    _max?: UserProfileMaxOrderByAggregateInput
    _min?: UserProfileMinOrderByAggregateInput
    _sum?: UserProfileSumOrderByAggregateInput
  }

  export type UserProfileScalarWhereWithAggregatesInput = {
    AND?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    OR?: UserProfileScalarWhereWithAggregatesInput[]
    NOT?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    profile_id?: IntWithAggregatesFilter<"UserProfile"> | number
    user_id?: IntWithAggregatesFilter<"UserProfile"> | number
    primary_role?: EnumRoleCategoryWithAggregatesFilter<"UserProfile"> | $Enums.RoleCategory
    secondary_role?: EnumRoleCategoryNullableWithAggregatesFilter<"UserProfile"> | $Enums.RoleCategory | null
    reliability_score?: DecimalWithAggregatesFilter<"UserProfile"> | Decimal | DecimalJsLike | number | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    project_id?: IntFilter<"Project"> | number
    project_name?: StringFilter<"Project"> | string
    client_name?: StringFilter<"Project"> | string
    project_location?: StringFilter<"Project"> | string
    project_description?: StringFilter<"Project"> | string
    project_start_date?: DateTimeFilter<"Project"> | Date | string
    project_end_date?: DateTimeFilter<"Project"> | Date | string
    project_status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    works?: WorkListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    project_id?: SortOrder
    project_name?: SortOrder
    client_name?: SortOrder
    project_location?: SortOrder
    project_description?: SortOrder
    project_start_date?: SortOrder
    project_end_date?: SortOrder
    project_status?: SortOrder
    works?: WorkOrderByRelationAggregateInput
    _relevance?: ProjectOrderByRelevanceInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    project_id?: number
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    project_name?: StringFilter<"Project"> | string
    client_name?: StringFilter<"Project"> | string
    project_location?: StringFilter<"Project"> | string
    project_description?: StringFilter<"Project"> | string
    project_start_date?: DateTimeFilter<"Project"> | Date | string
    project_end_date?: DateTimeFilter<"Project"> | Date | string
    project_status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    works?: WorkListRelationFilter
  }, "project_id">

  export type ProjectOrderByWithAggregationInput = {
    project_id?: SortOrder
    project_name?: SortOrder
    client_name?: SortOrder
    project_location?: SortOrder
    project_description?: SortOrder
    project_start_date?: SortOrder
    project_end_date?: SortOrder
    project_status?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    project_id?: IntWithAggregatesFilter<"Project"> | number
    project_name?: StringWithAggregatesFilter<"Project"> | string
    client_name?: StringWithAggregatesFilter<"Project"> | string
    project_location?: StringWithAggregatesFilter<"Project"> | string
    project_description?: StringWithAggregatesFilter<"Project"> | string
    project_start_date?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    project_end_date?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    project_status?: EnumProjectStatusWithAggregatesFilter<"Project"> | $Enums.ProjectStatus
  }

  export type WorkWhereInput = {
    AND?: WorkWhereInput | WorkWhereInput[]
    OR?: WorkWhereInput[]
    NOT?: WorkWhereInput | WorkWhereInput[]
    work_id?: IntFilter<"Work"> | number
    project_id?: IntFilter<"Work"> | number
    project_role?: StringFilter<"Work"> | string
    role_category?: EnumRoleCategoryFilter<"Work"> | $Enums.RoleCategory
    expected_salary?: DecimalFilter<"Work"> | Decimal | DecimalJsLike | number | string
    is_open_pool?: BoolFilter<"Work"> | boolean
    work_description?: StringFilter<"Work"> | string
    work_start_date?: DateTimeFilter<"Work"> | Date | string
    work_start_time?: DateTimeNullableFilter<"Work"> | Date | string | null
    work_end_time?: DateTimeNullableFilter<"Work"> | Date | string | null
    work_status?: EnumWorkStatusFilter<"Work"> | $Enums.WorkStatus
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    assignments?: AssignmentListRelationFilter
    applications?: WorkApplicationListRelationFilter
  }

  export type WorkOrderByWithRelationInput = {
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
    project?: ProjectOrderByWithRelationInput
    assignments?: AssignmentOrderByRelationAggregateInput
    applications?: WorkApplicationOrderByRelationAggregateInput
    _relevance?: WorkOrderByRelevanceInput
  }

  export type WorkWhereUniqueInput = Prisma.AtLeast<{
    work_id?: number
    AND?: WorkWhereInput | WorkWhereInput[]
    OR?: WorkWhereInput[]
    NOT?: WorkWhereInput | WorkWhereInput[]
    project_id?: IntFilter<"Work"> | number
    project_role?: StringFilter<"Work"> | string
    role_category?: EnumRoleCategoryFilter<"Work"> | $Enums.RoleCategory
    expected_salary?: DecimalFilter<"Work"> | Decimal | DecimalJsLike | number | string
    is_open_pool?: BoolFilter<"Work"> | boolean
    work_description?: StringFilter<"Work"> | string
    work_start_date?: DateTimeFilter<"Work"> | Date | string
    work_start_time?: DateTimeNullableFilter<"Work"> | Date | string | null
    work_end_time?: DateTimeNullableFilter<"Work"> | Date | string | null
    work_status?: EnumWorkStatusFilter<"Work"> | $Enums.WorkStatus
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    assignments?: AssignmentListRelationFilter
    applications?: WorkApplicationListRelationFilter
  }, "work_id">

  export type WorkOrderByWithAggregationInput = {
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
    _count?: WorkCountOrderByAggregateInput
    _avg?: WorkAvgOrderByAggregateInput
    _max?: WorkMaxOrderByAggregateInput
    _min?: WorkMinOrderByAggregateInput
    _sum?: WorkSumOrderByAggregateInput
  }

  export type WorkScalarWhereWithAggregatesInput = {
    AND?: WorkScalarWhereWithAggregatesInput | WorkScalarWhereWithAggregatesInput[]
    OR?: WorkScalarWhereWithAggregatesInput[]
    NOT?: WorkScalarWhereWithAggregatesInput | WorkScalarWhereWithAggregatesInput[]
    work_id?: IntWithAggregatesFilter<"Work"> | number
    project_id?: IntWithAggregatesFilter<"Work"> | number
    project_role?: StringWithAggregatesFilter<"Work"> | string
    role_category?: EnumRoleCategoryWithAggregatesFilter<"Work"> | $Enums.RoleCategory
    expected_salary?: DecimalWithAggregatesFilter<"Work"> | Decimal | DecimalJsLike | number | string
    is_open_pool?: BoolWithAggregatesFilter<"Work"> | boolean
    work_description?: StringWithAggregatesFilter<"Work"> | string
    work_start_date?: DateTimeWithAggregatesFilter<"Work"> | Date | string
    work_start_time?: DateTimeNullableWithAggregatesFilter<"Work"> | Date | string | null
    work_end_time?: DateTimeNullableWithAggregatesFilter<"Work"> | Date | string | null
    work_status?: EnumWorkStatusWithAggregatesFilter<"Work"> | $Enums.WorkStatus
  }

  export type AssignmentWhereInput = {
    AND?: AssignmentWhereInput | AssignmentWhereInput[]
    OR?: AssignmentWhereInput[]
    NOT?: AssignmentWhereInput | AssignmentWhereInput[]
    assignment_id?: IntFilter<"Assignment"> | number
    work_id?: IntFilter<"Assignment"> | number
    user_id?: IntNullableFilter<"Assignment"> | number | null
    outsider_name?: StringNullableFilter<"Assignment"> | string | null
    assignment_status?: EnumAssignmentStatusFilter<"Assignment"> | $Enums.AssignmentStatus
    withdrawal_reason?: StringNullableFilter<"Assignment"> | string | null
    work?: XOR<WorkScalarRelationFilter, WorkWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type AssignmentOrderByWithRelationInput = {
    assignment_id?: SortOrder
    work_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    outsider_name?: SortOrderInput | SortOrder
    assignment_status?: SortOrder
    withdrawal_reason?: SortOrderInput | SortOrder
    work?: WorkOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    _relevance?: AssignmentOrderByRelevanceInput
  }

  export type AssignmentWhereUniqueInput = Prisma.AtLeast<{
    assignment_id?: number
    AND?: AssignmentWhereInput | AssignmentWhereInput[]
    OR?: AssignmentWhereInput[]
    NOT?: AssignmentWhereInput | AssignmentWhereInput[]
    work_id?: IntFilter<"Assignment"> | number
    user_id?: IntNullableFilter<"Assignment"> | number | null
    outsider_name?: StringNullableFilter<"Assignment"> | string | null
    assignment_status?: EnumAssignmentStatusFilter<"Assignment"> | $Enums.AssignmentStatus
    withdrawal_reason?: StringNullableFilter<"Assignment"> | string | null
    work?: XOR<WorkScalarRelationFilter, WorkWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "assignment_id">

  export type AssignmentOrderByWithAggregationInput = {
    assignment_id?: SortOrder
    work_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    outsider_name?: SortOrderInput | SortOrder
    assignment_status?: SortOrder
    withdrawal_reason?: SortOrderInput | SortOrder
    _count?: AssignmentCountOrderByAggregateInput
    _avg?: AssignmentAvgOrderByAggregateInput
    _max?: AssignmentMaxOrderByAggregateInput
    _min?: AssignmentMinOrderByAggregateInput
    _sum?: AssignmentSumOrderByAggregateInput
  }

  export type AssignmentScalarWhereWithAggregatesInput = {
    AND?: AssignmentScalarWhereWithAggregatesInput | AssignmentScalarWhereWithAggregatesInput[]
    OR?: AssignmentScalarWhereWithAggregatesInput[]
    NOT?: AssignmentScalarWhereWithAggregatesInput | AssignmentScalarWhereWithAggregatesInput[]
    assignment_id?: IntWithAggregatesFilter<"Assignment"> | number
    work_id?: IntWithAggregatesFilter<"Assignment"> | number
    user_id?: IntNullableWithAggregatesFilter<"Assignment"> | number | null
    outsider_name?: StringNullableWithAggregatesFilter<"Assignment"> | string | null
    assignment_status?: EnumAssignmentStatusWithAggregatesFilter<"Assignment"> | $Enums.AssignmentStatus
    withdrawal_reason?: StringNullableWithAggregatesFilter<"Assignment"> | string | null
  }

  export type WorkApplicationWhereInput = {
    AND?: WorkApplicationWhereInput | WorkApplicationWhereInput[]
    OR?: WorkApplicationWhereInput[]
    NOT?: WorkApplicationWhereInput | WorkApplicationWhereInput[]
    application_id?: IntFilter<"WorkApplication"> | number
    work_id?: IntFilter<"WorkApplication"> | number
    user_id?: IntFilter<"WorkApplication"> | number
    application_status?: EnumApplicationStatusFilter<"WorkApplication"> | $Enums.ApplicationStatus
    work?: XOR<WorkScalarRelationFilter, WorkWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type WorkApplicationOrderByWithRelationInput = {
    application_id?: SortOrder
    work_id?: SortOrder
    user_id?: SortOrder
    application_status?: SortOrder
    work?: WorkOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type WorkApplicationWhereUniqueInput = Prisma.AtLeast<{
    application_id?: number
    AND?: WorkApplicationWhereInput | WorkApplicationWhereInput[]
    OR?: WorkApplicationWhereInput[]
    NOT?: WorkApplicationWhereInput | WorkApplicationWhereInput[]
    work_id?: IntFilter<"WorkApplication"> | number
    user_id?: IntFilter<"WorkApplication"> | number
    application_status?: EnumApplicationStatusFilter<"WorkApplication"> | $Enums.ApplicationStatus
    work?: XOR<WorkScalarRelationFilter, WorkWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "application_id">

  export type WorkApplicationOrderByWithAggregationInput = {
    application_id?: SortOrder
    work_id?: SortOrder
    user_id?: SortOrder
    application_status?: SortOrder
    _count?: WorkApplicationCountOrderByAggregateInput
    _avg?: WorkApplicationAvgOrderByAggregateInput
    _max?: WorkApplicationMaxOrderByAggregateInput
    _min?: WorkApplicationMinOrderByAggregateInput
    _sum?: WorkApplicationSumOrderByAggregateInput
  }

  export type WorkApplicationScalarWhereWithAggregatesInput = {
    AND?: WorkApplicationScalarWhereWithAggregatesInput | WorkApplicationScalarWhereWithAggregatesInput[]
    OR?: WorkApplicationScalarWhereWithAggregatesInput[]
    NOT?: WorkApplicationScalarWhereWithAggregatesInput | WorkApplicationScalarWhereWithAggregatesInput[]
    application_id?: IntWithAggregatesFilter<"WorkApplication"> | number
    work_id?: IntWithAggregatesFilter<"WorkApplication"> | number
    user_id?: IntWithAggregatesFilter<"WorkApplication"> | number
    application_status?: EnumApplicationStatusWithAggregatesFilter<"WorkApplication"> | $Enums.ApplicationStatus
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    task_id?: IntFilter<"Task"> | number
    user_id?: IntFilter<"Task"> | number
    task_title?: StringFilter<"Task"> | string
    task_desc?: StringNullableFilter<"Task"> | string | null
    due_date?: DateTimeNullableFilter<"Task"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    tags?: TaskTagListRelationFilter
  }

  export type TaskOrderByWithRelationInput = {
    task_id?: SortOrder
    user_id?: SortOrder
    task_title?: SortOrder
    task_desc?: SortOrderInput | SortOrder
    due_date?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    tags?: TaskTagOrderByRelationAggregateInput
    _relevance?: TaskOrderByRelevanceInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    task_id?: number
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    user_id?: IntFilter<"Task"> | number
    task_title?: StringFilter<"Task"> | string
    task_desc?: StringNullableFilter<"Task"> | string | null
    due_date?: DateTimeNullableFilter<"Task"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    tags?: TaskTagListRelationFilter
  }, "task_id">

  export type TaskOrderByWithAggregationInput = {
    task_id?: SortOrder
    user_id?: SortOrder
    task_title?: SortOrder
    task_desc?: SortOrderInput | SortOrder
    due_date?: SortOrderInput | SortOrder
    _count?: TaskCountOrderByAggregateInput
    _avg?: TaskAvgOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
    _sum?: TaskSumOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    task_id?: IntWithAggregatesFilter<"Task"> | number
    user_id?: IntWithAggregatesFilter<"Task"> | number
    task_title?: StringWithAggregatesFilter<"Task"> | string
    task_desc?: StringNullableWithAggregatesFilter<"Task"> | string | null
    due_date?: DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    tag_id?: IntFilter<"Tag"> | number
    tag_name?: StringFilter<"Tag"> | string
    color_hex?: StringFilter<"Tag"> | string
    tasks?: TaskTagListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    tag_id?: SortOrder
    tag_name?: SortOrder
    color_hex?: SortOrder
    tasks?: TaskTagOrderByRelationAggregateInput
    _relevance?: TagOrderByRelevanceInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    tag_id?: number
    tag_name?: string
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    color_hex?: StringFilter<"Tag"> | string
    tasks?: TaskTagListRelationFilter
  }, "tag_id" | "tag_name">

  export type TagOrderByWithAggregationInput = {
    tag_id?: SortOrder
    tag_name?: SortOrder
    color_hex?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _avg?: TagAvgOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
    _sum?: TagSumOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    tag_id?: IntWithAggregatesFilter<"Tag"> | number
    tag_name?: StringWithAggregatesFilter<"Tag"> | string
    color_hex?: StringWithAggregatesFilter<"Tag"> | string
  }

  export type TaskTagWhereInput = {
    AND?: TaskTagWhereInput | TaskTagWhereInput[]
    OR?: TaskTagWhereInput[]
    NOT?: TaskTagWhereInput | TaskTagWhereInput[]
    task_tag_id?: IntFilter<"TaskTag"> | number
    task_id?: IntFilter<"TaskTag"> | number
    tag_id?: IntFilter<"TaskTag"> | number
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }

  export type TaskTagOrderByWithRelationInput = {
    task_tag_id?: SortOrder
    task_id?: SortOrder
    tag_id?: SortOrder
    task?: TaskOrderByWithRelationInput
    tag?: TagOrderByWithRelationInput
  }

  export type TaskTagWhereUniqueInput = Prisma.AtLeast<{
    task_tag_id?: number
    AND?: TaskTagWhereInput | TaskTagWhereInput[]
    OR?: TaskTagWhereInput[]
    NOT?: TaskTagWhereInput | TaskTagWhereInput[]
    task_id?: IntFilter<"TaskTag"> | number
    tag_id?: IntFilter<"TaskTag"> | number
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }, "task_tag_id">

  export type TaskTagOrderByWithAggregationInput = {
    task_tag_id?: SortOrder
    task_id?: SortOrder
    tag_id?: SortOrder
    _count?: TaskTagCountOrderByAggregateInput
    _avg?: TaskTagAvgOrderByAggregateInput
    _max?: TaskTagMaxOrderByAggregateInput
    _min?: TaskTagMinOrderByAggregateInput
    _sum?: TaskTagSumOrderByAggregateInput
  }

  export type TaskTagScalarWhereWithAggregatesInput = {
    AND?: TaskTagScalarWhereWithAggregatesInput | TaskTagScalarWhereWithAggregatesInput[]
    OR?: TaskTagScalarWhereWithAggregatesInput[]
    NOT?: TaskTagScalarWhereWithAggregatesInput | TaskTagScalarWhereWithAggregatesInput[]
    task_tag_id?: IntWithAggregatesFilter<"TaskTag"> | number
    task_id?: IntWithAggregatesFilter<"TaskTag"> | number
    tag_id?: IntWithAggregatesFilter<"TaskTag"> | number
  }

  export type UserCreateInput = {
    email: string
    google_id?: string | null
    full_name?: string | null
    avatar_url?: string | null
    user_type?: $Enums.UserType
    created_at?: Date | string
    profile?: UserProfileCreateNestedOneWithoutUserInput
    assignments?: AssignmentCreateNestedManyWithoutUserInput
    applications?: WorkApplicationCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    user_id?: number
    email: string
    google_id?: string | null
    full_name?: string | null
    avatar_url?: string | null
    user_type?: $Enums.UserType
    created_at?: Date | string
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutUserInput
    applications?: WorkApplicationUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    assignments?: AssignmentUpdateManyWithoutUserNestedInput
    applications?: WorkApplicationUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutUserNestedInput
    applications?: WorkApplicationUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    user_id?: number
    email: string
    google_id?: string | null
    full_name?: string | null
    avatar_url?: string | null
    user_type?: $Enums.UserType
    created_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileCreateInput = {
    primary_role: $Enums.RoleCategory
    secondary_role?: $Enums.RoleCategory | null
    reliability_score?: Decimal | DecimalJsLike | number | string
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type UserProfileUncheckedCreateInput = {
    profile_id?: number
    user_id: number
    primary_role: $Enums.RoleCategory
    secondary_role?: $Enums.RoleCategory | null
    reliability_score?: Decimal | DecimalJsLike | number | string
  }

  export type UserProfileUpdateInput = {
    primary_role?: EnumRoleCategoryFieldUpdateOperationsInput | $Enums.RoleCategory
    secondary_role?: NullableEnumRoleCategoryFieldUpdateOperationsInput | $Enums.RoleCategory | null
    reliability_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type UserProfileUncheckedUpdateInput = {
    profile_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    primary_role?: EnumRoleCategoryFieldUpdateOperationsInput | $Enums.RoleCategory
    secondary_role?: NullableEnumRoleCategoryFieldUpdateOperationsInput | $Enums.RoleCategory | null
    reliability_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type UserProfileCreateManyInput = {
    profile_id?: number
    user_id: number
    primary_role: $Enums.RoleCategory
    secondary_role?: $Enums.RoleCategory | null
    reliability_score?: Decimal | DecimalJsLike | number | string
  }

  export type UserProfileUpdateManyMutationInput = {
    primary_role?: EnumRoleCategoryFieldUpdateOperationsInput | $Enums.RoleCategory
    secondary_role?: NullableEnumRoleCategoryFieldUpdateOperationsInput | $Enums.RoleCategory | null
    reliability_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type UserProfileUncheckedUpdateManyInput = {
    profile_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    primary_role?: EnumRoleCategoryFieldUpdateOperationsInput | $Enums.RoleCategory
    secondary_role?: NullableEnumRoleCategoryFieldUpdateOperationsInput | $Enums.RoleCategory | null
    reliability_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ProjectCreateInput = {
    project_name: string
    client_name: string
    project_location: string
    project_description: string
    project_start_date: Date | string
    project_end_date: Date | string
    project_status?: $Enums.ProjectStatus
    works?: WorkCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    project_id?: number
    project_name: string
    client_name: string
    project_location: string
    project_description: string
    project_start_date: Date | string
    project_end_date: Date | string
    project_status?: $Enums.ProjectStatus
    works?: WorkUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    project_name?: StringFieldUpdateOperationsInput | string
    client_name?: StringFieldUpdateOperationsInput | string
    project_location?: StringFieldUpdateOperationsInput | string
    project_description?: StringFieldUpdateOperationsInput | string
    project_start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    project_end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    project_status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    works?: WorkUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    project_id?: IntFieldUpdateOperationsInput | number
    project_name?: StringFieldUpdateOperationsInput | string
    client_name?: StringFieldUpdateOperationsInput | string
    project_location?: StringFieldUpdateOperationsInput | string
    project_description?: StringFieldUpdateOperationsInput | string
    project_start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    project_end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    project_status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    works?: WorkUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    project_id?: number
    project_name: string
    client_name: string
    project_location: string
    project_description: string
    project_start_date: Date | string
    project_end_date: Date | string
    project_status?: $Enums.ProjectStatus
  }

  export type ProjectUpdateManyMutationInput = {
    project_name?: StringFieldUpdateOperationsInput | string
    client_name?: StringFieldUpdateOperationsInput | string
    project_location?: StringFieldUpdateOperationsInput | string
    project_description?: StringFieldUpdateOperationsInput | string
    project_start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    project_end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    project_status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
  }

  export type ProjectUncheckedUpdateManyInput = {
    project_id?: IntFieldUpdateOperationsInput | number
    project_name?: StringFieldUpdateOperationsInput | string
    client_name?: StringFieldUpdateOperationsInput | string
    project_location?: StringFieldUpdateOperationsInput | string
    project_description?: StringFieldUpdateOperationsInput | string
    project_start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    project_end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    project_status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
  }

  export type WorkCreateInput = {
    project_role: string
    role_category: $Enums.RoleCategory
    expected_salary?: Decimal | DecimalJsLike | number | string
    is_open_pool?: boolean
    work_description: string
    work_start_date: Date | string
    work_start_time?: Date | string | null
    work_end_time?: Date | string | null
    work_status?: $Enums.WorkStatus
    project: ProjectCreateNestedOneWithoutWorksInput
    assignments?: AssignmentCreateNestedManyWithoutWorkInput
    applications?: WorkApplicationCreateNestedManyWithoutWorkInput
  }

  export type WorkUncheckedCreateInput = {
    work_id?: number
    project_id: number
    project_role: string
    role_category: $Enums.RoleCategory
    expected_salary?: Decimal | DecimalJsLike | number | string
    is_open_pool?: boolean
    work_description: string
    work_start_date: Date | string
    work_start_time?: Date | string | null
    work_end_time?: Date | string | null
    work_status?: $Enums.WorkStatus
    assignments?: AssignmentUncheckedCreateNestedManyWithoutWorkInput
    applications?: WorkApplicationUncheckedCreateNestedManyWithoutWorkInput
  }

  export type WorkUpdateInput = {
    project_role?: StringFieldUpdateOperationsInput | string
    role_category?: EnumRoleCategoryFieldUpdateOperationsInput | $Enums.RoleCategory
    expected_salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_open_pool?: BoolFieldUpdateOperationsInput | boolean
    work_description?: StringFieldUpdateOperationsInput | string
    work_start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    work_start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    work_end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    work_status?: EnumWorkStatusFieldUpdateOperationsInput | $Enums.WorkStatus
    project?: ProjectUpdateOneRequiredWithoutWorksNestedInput
    assignments?: AssignmentUpdateManyWithoutWorkNestedInput
    applications?: WorkApplicationUpdateManyWithoutWorkNestedInput
  }

  export type WorkUncheckedUpdateInput = {
    work_id?: IntFieldUpdateOperationsInput | number
    project_id?: IntFieldUpdateOperationsInput | number
    project_role?: StringFieldUpdateOperationsInput | string
    role_category?: EnumRoleCategoryFieldUpdateOperationsInput | $Enums.RoleCategory
    expected_salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_open_pool?: BoolFieldUpdateOperationsInput | boolean
    work_description?: StringFieldUpdateOperationsInput | string
    work_start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    work_start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    work_end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    work_status?: EnumWorkStatusFieldUpdateOperationsInput | $Enums.WorkStatus
    assignments?: AssignmentUncheckedUpdateManyWithoutWorkNestedInput
    applications?: WorkApplicationUncheckedUpdateManyWithoutWorkNestedInput
  }

  export type WorkCreateManyInput = {
    work_id?: number
    project_id: number
    project_role: string
    role_category: $Enums.RoleCategory
    expected_salary?: Decimal | DecimalJsLike | number | string
    is_open_pool?: boolean
    work_description: string
    work_start_date: Date | string
    work_start_time?: Date | string | null
    work_end_time?: Date | string | null
    work_status?: $Enums.WorkStatus
  }

  export type WorkUpdateManyMutationInput = {
    project_role?: StringFieldUpdateOperationsInput | string
    role_category?: EnumRoleCategoryFieldUpdateOperationsInput | $Enums.RoleCategory
    expected_salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_open_pool?: BoolFieldUpdateOperationsInput | boolean
    work_description?: StringFieldUpdateOperationsInput | string
    work_start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    work_start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    work_end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    work_status?: EnumWorkStatusFieldUpdateOperationsInput | $Enums.WorkStatus
  }

  export type WorkUncheckedUpdateManyInput = {
    work_id?: IntFieldUpdateOperationsInput | number
    project_id?: IntFieldUpdateOperationsInput | number
    project_role?: StringFieldUpdateOperationsInput | string
    role_category?: EnumRoleCategoryFieldUpdateOperationsInput | $Enums.RoleCategory
    expected_salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_open_pool?: BoolFieldUpdateOperationsInput | boolean
    work_description?: StringFieldUpdateOperationsInput | string
    work_start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    work_start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    work_end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    work_status?: EnumWorkStatusFieldUpdateOperationsInput | $Enums.WorkStatus
  }

  export type AssignmentCreateInput = {
    outsider_name?: string | null
    assignment_status?: $Enums.AssignmentStatus
    withdrawal_reason?: string | null
    work: WorkCreateNestedOneWithoutAssignmentsInput
    user?: UserCreateNestedOneWithoutAssignmentsInput
  }

  export type AssignmentUncheckedCreateInput = {
    assignment_id?: number
    work_id: number
    user_id?: number | null
    outsider_name?: string | null
    assignment_status?: $Enums.AssignmentStatus
    withdrawal_reason?: string | null
  }

  export type AssignmentUpdateInput = {
    outsider_name?: NullableStringFieldUpdateOperationsInput | string | null
    assignment_status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    withdrawal_reason?: NullableStringFieldUpdateOperationsInput | string | null
    work?: WorkUpdateOneRequiredWithoutAssignmentsNestedInput
    user?: UserUpdateOneWithoutAssignmentsNestedInput
  }

  export type AssignmentUncheckedUpdateInput = {
    assignment_id?: IntFieldUpdateOperationsInput | number
    work_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    outsider_name?: NullableStringFieldUpdateOperationsInput | string | null
    assignment_status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    withdrawal_reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AssignmentCreateManyInput = {
    assignment_id?: number
    work_id: number
    user_id?: number | null
    outsider_name?: string | null
    assignment_status?: $Enums.AssignmentStatus
    withdrawal_reason?: string | null
  }

  export type AssignmentUpdateManyMutationInput = {
    outsider_name?: NullableStringFieldUpdateOperationsInput | string | null
    assignment_status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    withdrawal_reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AssignmentUncheckedUpdateManyInput = {
    assignment_id?: IntFieldUpdateOperationsInput | number
    work_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    outsider_name?: NullableStringFieldUpdateOperationsInput | string | null
    assignment_status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    withdrawal_reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WorkApplicationCreateInput = {
    application_status?: $Enums.ApplicationStatus
    work: WorkCreateNestedOneWithoutApplicationsInput
    user: UserCreateNestedOneWithoutApplicationsInput
  }

  export type WorkApplicationUncheckedCreateInput = {
    application_id?: number
    work_id: number
    user_id: number
    application_status?: $Enums.ApplicationStatus
  }

  export type WorkApplicationUpdateInput = {
    application_status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    work?: WorkUpdateOneRequiredWithoutApplicationsNestedInput
    user?: UserUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type WorkApplicationUncheckedUpdateInput = {
    application_id?: IntFieldUpdateOperationsInput | number
    work_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    application_status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
  }

  export type WorkApplicationCreateManyInput = {
    application_id?: number
    work_id: number
    user_id: number
    application_status?: $Enums.ApplicationStatus
  }

  export type WorkApplicationUpdateManyMutationInput = {
    application_status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
  }

  export type WorkApplicationUncheckedUpdateManyInput = {
    application_id?: IntFieldUpdateOperationsInput | number
    work_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    application_status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
  }

  export type TaskCreateInput = {
    task_title: string
    task_desc?: string | null
    due_date?: Date | string | null
    user: UserCreateNestedOneWithoutTasksInput
    tags?: TaskTagCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateInput = {
    task_id?: number
    user_id: number
    task_title: string
    task_desc?: string | null
    due_date?: Date | string | null
    tags?: TaskTagUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskUpdateInput = {
    task_title?: StringFieldUpdateOperationsInput | string
    task_desc?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutTasksNestedInput
    tags?: TaskTagUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    task_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    task_title?: StringFieldUpdateOperationsInput | string
    task_desc?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tags?: TaskTagUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskCreateManyInput = {
    task_id?: number
    user_id: number
    task_title: string
    task_desc?: string | null
    due_date?: Date | string | null
  }

  export type TaskUpdateManyMutationInput = {
    task_title?: StringFieldUpdateOperationsInput | string
    task_desc?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TaskUncheckedUpdateManyInput = {
    task_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    task_title?: StringFieldUpdateOperationsInput | string
    task_desc?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TagCreateInput = {
    tag_name: string
    color_hex?: string
    tasks?: TaskTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateInput = {
    tag_id?: number
    tag_name: string
    color_hex?: string
    tasks?: TaskTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagUpdateInput = {
    tag_name?: StringFieldUpdateOperationsInput | string
    color_hex?: StringFieldUpdateOperationsInput | string
    tasks?: TaskTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateInput = {
    tag_id?: IntFieldUpdateOperationsInput | number
    tag_name?: StringFieldUpdateOperationsInput | string
    color_hex?: StringFieldUpdateOperationsInput | string
    tasks?: TaskTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagCreateManyInput = {
    tag_id?: number
    tag_name: string
    color_hex?: string
  }

  export type TagUpdateManyMutationInput = {
    tag_name?: StringFieldUpdateOperationsInput | string
    color_hex?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateManyInput = {
    tag_id?: IntFieldUpdateOperationsInput | number
    tag_name?: StringFieldUpdateOperationsInput | string
    color_hex?: StringFieldUpdateOperationsInput | string
  }

  export type TaskTagCreateInput = {
    task: TaskCreateNestedOneWithoutTagsInput
    tag: TagCreateNestedOneWithoutTasksInput
  }

  export type TaskTagUncheckedCreateInput = {
    task_tag_id?: number
    task_id: number
    tag_id: number
  }

  export type TaskTagUpdateInput = {
    task?: TaskUpdateOneRequiredWithoutTagsNestedInput
    tag?: TagUpdateOneRequiredWithoutTasksNestedInput
  }

  export type TaskTagUncheckedUpdateInput = {
    task_tag_id?: IntFieldUpdateOperationsInput | number
    task_id?: IntFieldUpdateOperationsInput | number
    tag_id?: IntFieldUpdateOperationsInput | number
  }

  export type TaskTagCreateManyInput = {
    task_tag_id?: number
    task_id: number
    tag_id: number
  }

  export type TaskTagUpdateManyMutationInput = {

  }

  export type TaskTagUncheckedUpdateManyInput = {
    task_tag_id?: IntFieldUpdateOperationsInput | number
    task_id?: IntFieldUpdateOperationsInput | number
    tag_id?: IntFieldUpdateOperationsInput | number
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

  export type EnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[]
    notIn?: $Enums.UserType[]
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
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

  export type UserProfileNullableScalarRelationFilter = {
    is?: UserProfileWhereInput | null
    isNot?: UserProfileWhereInput | null
  }

  export type AssignmentListRelationFilter = {
    every?: AssignmentWhereInput
    some?: AssignmentWhereInput
    none?: AssignmentWhereInput
  }

  export type WorkApplicationListRelationFilter = {
    every?: WorkApplicationWhereInput
    some?: WorkApplicationWhereInput
    none?: WorkApplicationWhereInput
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkApplicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    user_id?: SortOrder
    email?: SortOrder
    google_id?: SortOrder
    full_name?: SortOrder
    avatar_url?: SortOrder
    user_type?: SortOrder
    created_at?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    user_id?: SortOrder
    email?: SortOrder
    google_id?: SortOrder
    full_name?: SortOrder
    avatar_url?: SortOrder
    user_type?: SortOrder
    created_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    user_id?: SortOrder
    email?: SortOrder
    google_id?: SortOrder
    full_name?: SortOrder
    avatar_url?: SortOrder
    user_type?: SortOrder
    created_at?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
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

  export type EnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[]
    notIn?: $Enums.UserType[]
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
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

  export type EnumRoleCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleCategory | EnumRoleCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.RoleCategory[]
    notIn?: $Enums.RoleCategory[]
    not?: NestedEnumRoleCategoryFilter<$PrismaModel> | $Enums.RoleCategory
  }

  export type EnumRoleCategoryNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleCategory | EnumRoleCategoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.RoleCategory[] | null
    notIn?: $Enums.RoleCategory[] | null
    not?: NestedEnumRoleCategoryNullableFilter<$PrismaModel> | $Enums.RoleCategory | null
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserProfileCountOrderByAggregateInput = {
    profile_id?: SortOrder
    user_id?: SortOrder
    primary_role?: SortOrder
    secondary_role?: SortOrder
    reliability_score?: SortOrder
  }

  export type UserProfileAvgOrderByAggregateInput = {
    profile_id?: SortOrder
    user_id?: SortOrder
    reliability_score?: SortOrder
  }

  export type UserProfileMaxOrderByAggregateInput = {
    profile_id?: SortOrder
    user_id?: SortOrder
    primary_role?: SortOrder
    secondary_role?: SortOrder
    reliability_score?: SortOrder
  }

  export type UserProfileMinOrderByAggregateInput = {
    profile_id?: SortOrder
    user_id?: SortOrder
    primary_role?: SortOrder
    secondary_role?: SortOrder
    reliability_score?: SortOrder
  }

  export type UserProfileSumOrderByAggregateInput = {
    profile_id?: SortOrder
    user_id?: SortOrder
    reliability_score?: SortOrder
  }

  export type EnumRoleCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleCategory | EnumRoleCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.RoleCategory[]
    notIn?: $Enums.RoleCategory[]
    not?: NestedEnumRoleCategoryWithAggregatesFilter<$PrismaModel> | $Enums.RoleCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleCategoryFilter<$PrismaModel>
    _max?: NestedEnumRoleCategoryFilter<$PrismaModel>
  }

  export type EnumRoleCategoryNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleCategory | EnumRoleCategoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.RoleCategory[] | null
    notIn?: $Enums.RoleCategory[] | null
    not?: NestedEnumRoleCategoryNullableWithAggregatesFilter<$PrismaModel> | $Enums.RoleCategory | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRoleCategoryNullableFilter<$PrismaModel>
    _max?: NestedEnumRoleCategoryNullableFilter<$PrismaModel>
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

  export type EnumProjectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[]
    notIn?: $Enums.ProjectStatus[]
    not?: NestedEnumProjectStatusFilter<$PrismaModel> | $Enums.ProjectStatus
  }

  export type WorkListRelationFilter = {
    every?: WorkWhereInput
    some?: WorkWhereInput
    none?: WorkWhereInput
  }

  export type WorkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectOrderByRelevanceInput = {
    fields: ProjectOrderByRelevanceFieldEnum | ProjectOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProjectCountOrderByAggregateInput = {
    project_id?: SortOrder
    project_name?: SortOrder
    client_name?: SortOrder
    project_location?: SortOrder
    project_description?: SortOrder
    project_start_date?: SortOrder
    project_end_date?: SortOrder
    project_status?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    project_id?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    project_id?: SortOrder
    project_name?: SortOrder
    client_name?: SortOrder
    project_location?: SortOrder
    project_description?: SortOrder
    project_start_date?: SortOrder
    project_end_date?: SortOrder
    project_status?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    project_id?: SortOrder
    project_name?: SortOrder
    client_name?: SortOrder
    project_location?: SortOrder
    project_description?: SortOrder
    project_start_date?: SortOrder
    project_end_date?: SortOrder
    project_status?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    project_id?: SortOrder
  }

  export type EnumProjectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[]
    notIn?: $Enums.ProjectStatus[]
    not?: NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectStatusFilter<$PrismaModel>
    _max?: NestedEnumProjectStatusFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type EnumWorkStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkStatus | EnumWorkStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WorkStatus[]
    notIn?: $Enums.WorkStatus[]
    not?: NestedEnumWorkStatusFilter<$PrismaModel> | $Enums.WorkStatus
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type WorkOrderByRelevanceInput = {
    fields: WorkOrderByRelevanceFieldEnum | WorkOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type WorkCountOrderByAggregateInput = {
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

  export type WorkAvgOrderByAggregateInput = {
    work_id?: SortOrder
    project_id?: SortOrder
    expected_salary?: SortOrder
  }

  export type WorkMaxOrderByAggregateInput = {
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

  export type WorkMinOrderByAggregateInput = {
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

  export type WorkSumOrderByAggregateInput = {
    work_id?: SortOrder
    project_id?: SortOrder
    expected_salary?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EnumWorkStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkStatus | EnumWorkStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WorkStatus[]
    notIn?: $Enums.WorkStatus[]
    not?: NestedEnumWorkStatusWithAggregatesFilter<$PrismaModel> | $Enums.WorkStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWorkStatusFilter<$PrismaModel>
    _max?: NestedEnumWorkStatusFilter<$PrismaModel>
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

  export type EnumAssignmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AssignmentStatus | EnumAssignmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AssignmentStatus[]
    notIn?: $Enums.AssignmentStatus[]
    not?: NestedEnumAssignmentStatusFilter<$PrismaModel> | $Enums.AssignmentStatus
  }

  export type WorkScalarRelationFilter = {
    is?: WorkWhereInput
    isNot?: WorkWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type AssignmentOrderByRelevanceInput = {
    fields: AssignmentOrderByRelevanceFieldEnum | AssignmentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AssignmentCountOrderByAggregateInput = {
    assignment_id?: SortOrder
    work_id?: SortOrder
    user_id?: SortOrder
    outsider_name?: SortOrder
    assignment_status?: SortOrder
    withdrawal_reason?: SortOrder
  }

  export type AssignmentAvgOrderByAggregateInput = {
    assignment_id?: SortOrder
    work_id?: SortOrder
    user_id?: SortOrder
  }

  export type AssignmentMaxOrderByAggregateInput = {
    assignment_id?: SortOrder
    work_id?: SortOrder
    user_id?: SortOrder
    outsider_name?: SortOrder
    assignment_status?: SortOrder
    withdrawal_reason?: SortOrder
  }

  export type AssignmentMinOrderByAggregateInput = {
    assignment_id?: SortOrder
    work_id?: SortOrder
    user_id?: SortOrder
    outsider_name?: SortOrder
    assignment_status?: SortOrder
    withdrawal_reason?: SortOrder
  }

  export type AssignmentSumOrderByAggregateInput = {
    assignment_id?: SortOrder
    work_id?: SortOrder
    user_id?: SortOrder
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

  export type EnumAssignmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssignmentStatus | EnumAssignmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AssignmentStatus[]
    notIn?: $Enums.AssignmentStatus[]
    not?: NestedEnumAssignmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AssignmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAssignmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAssignmentStatusFilter<$PrismaModel>
  }

  export type EnumApplicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[]
    notIn?: $Enums.ApplicationStatus[]
    not?: NestedEnumApplicationStatusFilter<$PrismaModel> | $Enums.ApplicationStatus
  }

  export type WorkApplicationCountOrderByAggregateInput = {
    application_id?: SortOrder
    work_id?: SortOrder
    user_id?: SortOrder
    application_status?: SortOrder
  }

  export type WorkApplicationAvgOrderByAggregateInput = {
    application_id?: SortOrder
    work_id?: SortOrder
    user_id?: SortOrder
  }

  export type WorkApplicationMaxOrderByAggregateInput = {
    application_id?: SortOrder
    work_id?: SortOrder
    user_id?: SortOrder
    application_status?: SortOrder
  }

  export type WorkApplicationMinOrderByAggregateInput = {
    application_id?: SortOrder
    work_id?: SortOrder
    user_id?: SortOrder
    application_status?: SortOrder
  }

  export type WorkApplicationSumOrderByAggregateInput = {
    application_id?: SortOrder
    work_id?: SortOrder
    user_id?: SortOrder
  }

  export type EnumApplicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[]
    notIn?: $Enums.ApplicationStatus[]
    not?: NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApplicationStatusFilter<$PrismaModel>
    _max?: NestedEnumApplicationStatusFilter<$PrismaModel>
  }

  export type TaskTagListRelationFilter = {
    every?: TaskTagWhereInput
    some?: TaskTagWhereInput
    none?: TaskTagWhereInput
  }

  export type TaskTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskOrderByRelevanceInput = {
    fields: TaskOrderByRelevanceFieldEnum | TaskOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TaskCountOrderByAggregateInput = {
    task_id?: SortOrder
    user_id?: SortOrder
    task_title?: SortOrder
    task_desc?: SortOrder
    due_date?: SortOrder
  }

  export type TaskAvgOrderByAggregateInput = {
    task_id?: SortOrder
    user_id?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    task_id?: SortOrder
    user_id?: SortOrder
    task_title?: SortOrder
    task_desc?: SortOrder
    due_date?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    task_id?: SortOrder
    user_id?: SortOrder
    task_title?: SortOrder
    task_desc?: SortOrder
    due_date?: SortOrder
  }

  export type TaskSumOrderByAggregateInput = {
    task_id?: SortOrder
    user_id?: SortOrder
  }

  export type TagOrderByRelevanceInput = {
    fields: TagOrderByRelevanceFieldEnum | TagOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TagCountOrderByAggregateInput = {
    tag_id?: SortOrder
    tag_name?: SortOrder
    color_hex?: SortOrder
  }

  export type TagAvgOrderByAggregateInput = {
    tag_id?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    tag_id?: SortOrder
    tag_name?: SortOrder
    color_hex?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    tag_id?: SortOrder
    tag_name?: SortOrder
    color_hex?: SortOrder
  }

  export type TagSumOrderByAggregateInput = {
    tag_id?: SortOrder
  }

  export type TaskScalarRelationFilter = {
    is?: TaskWhereInput
    isNot?: TaskWhereInput
  }

  export type TagScalarRelationFilter = {
    is?: TagWhereInput
    isNot?: TagWhereInput
  }

  export type TaskTagCountOrderByAggregateInput = {
    task_tag_id?: SortOrder
    task_id?: SortOrder
    tag_id?: SortOrder
  }

  export type TaskTagAvgOrderByAggregateInput = {
    task_tag_id?: SortOrder
    task_id?: SortOrder
    tag_id?: SortOrder
  }

  export type TaskTagMaxOrderByAggregateInput = {
    task_tag_id?: SortOrder
    task_id?: SortOrder
    tag_id?: SortOrder
  }

  export type TaskTagMinOrderByAggregateInput = {
    task_tag_id?: SortOrder
    task_id?: SortOrder
    tag_id?: SortOrder
  }

  export type TaskTagSumOrderByAggregateInput = {
    task_tag_id?: SortOrder
    task_id?: SortOrder
    tag_id?: SortOrder
  }

  export type UserProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    connect?: UserProfileWhereUniqueInput
  }

  export type AssignmentCreateNestedManyWithoutUserInput = {
    create?: XOR<AssignmentCreateWithoutUserInput, AssignmentUncheckedCreateWithoutUserInput> | AssignmentCreateWithoutUserInput[] | AssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutUserInput | AssignmentCreateOrConnectWithoutUserInput[]
    createMany?: AssignmentCreateManyUserInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type WorkApplicationCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkApplicationCreateWithoutUserInput, WorkApplicationUncheckedCreateWithoutUserInput> | WorkApplicationCreateWithoutUserInput[] | WorkApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkApplicationCreateOrConnectWithoutUserInput | WorkApplicationCreateOrConnectWithoutUserInput[]
    createMany?: WorkApplicationCreateManyUserInputEnvelope
    connect?: WorkApplicationWhereUniqueInput | WorkApplicationWhereUniqueInput[]
  }

  export type TaskCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type UserProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    connect?: UserProfileWhereUniqueInput
  }

  export type AssignmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AssignmentCreateWithoutUserInput, AssignmentUncheckedCreateWithoutUserInput> | AssignmentCreateWithoutUserInput[] | AssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutUserInput | AssignmentCreateOrConnectWithoutUserInput[]
    createMany?: AssignmentCreateManyUserInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type WorkApplicationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkApplicationCreateWithoutUserInput, WorkApplicationUncheckedCreateWithoutUserInput> | WorkApplicationCreateWithoutUserInput[] | WorkApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkApplicationCreateOrConnectWithoutUserInput | WorkApplicationCreateOrConnectWithoutUserInput[]
    createMany?: WorkApplicationCreateManyUserInputEnvelope
    connect?: WorkApplicationWhereUniqueInput | WorkApplicationWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserTypeFieldUpdateOperationsInput = {
    set?: $Enums.UserType
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    upsert?: UserProfileUpsertWithoutUserInput
    disconnect?: UserProfileWhereInput | boolean
    delete?: UserProfileWhereInput | boolean
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutUserInput, UserProfileUpdateWithoutUserInput>, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type AssignmentUpdateManyWithoutUserNestedInput = {
    create?: XOR<AssignmentCreateWithoutUserInput, AssignmentUncheckedCreateWithoutUserInput> | AssignmentCreateWithoutUserInput[] | AssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutUserInput | AssignmentCreateOrConnectWithoutUserInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutUserInput | AssignmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AssignmentCreateManyUserInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutUserInput | AssignmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutUserInput | AssignmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type WorkApplicationUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkApplicationCreateWithoutUserInput, WorkApplicationUncheckedCreateWithoutUserInput> | WorkApplicationCreateWithoutUserInput[] | WorkApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkApplicationCreateOrConnectWithoutUserInput | WorkApplicationCreateOrConnectWithoutUserInput[]
    upsert?: WorkApplicationUpsertWithWhereUniqueWithoutUserInput | WorkApplicationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkApplicationCreateManyUserInputEnvelope
    set?: WorkApplicationWhereUniqueInput | WorkApplicationWhereUniqueInput[]
    disconnect?: WorkApplicationWhereUniqueInput | WorkApplicationWhereUniqueInput[]
    delete?: WorkApplicationWhereUniqueInput | WorkApplicationWhereUniqueInput[]
    connect?: WorkApplicationWhereUniqueInput | WorkApplicationWhereUniqueInput[]
    update?: WorkApplicationUpdateWithWhereUniqueWithoutUserInput | WorkApplicationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkApplicationUpdateManyWithWhereWithoutUserInput | WorkApplicationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkApplicationScalarWhereInput | WorkApplicationScalarWhereInput[]
  }

  export type TaskUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutUserInput | TaskUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutUserInput | TaskUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutUserInput | TaskUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    upsert?: UserProfileUpsertWithoutUserInput
    disconnect?: UserProfileWhereInput | boolean
    delete?: UserProfileWhereInput | boolean
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutUserInput, UserProfileUpdateWithoutUserInput>, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type AssignmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AssignmentCreateWithoutUserInput, AssignmentUncheckedCreateWithoutUserInput> | AssignmentCreateWithoutUserInput[] | AssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutUserInput | AssignmentCreateOrConnectWithoutUserInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutUserInput | AssignmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AssignmentCreateManyUserInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutUserInput | AssignmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutUserInput | AssignmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type WorkApplicationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkApplicationCreateWithoutUserInput, WorkApplicationUncheckedCreateWithoutUserInput> | WorkApplicationCreateWithoutUserInput[] | WorkApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkApplicationCreateOrConnectWithoutUserInput | WorkApplicationCreateOrConnectWithoutUserInput[]
    upsert?: WorkApplicationUpsertWithWhereUniqueWithoutUserInput | WorkApplicationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkApplicationCreateManyUserInputEnvelope
    set?: WorkApplicationWhereUniqueInput | WorkApplicationWhereUniqueInput[]
    disconnect?: WorkApplicationWhereUniqueInput | WorkApplicationWhereUniqueInput[]
    delete?: WorkApplicationWhereUniqueInput | WorkApplicationWhereUniqueInput[]
    connect?: WorkApplicationWhereUniqueInput | WorkApplicationWhereUniqueInput[]
    update?: WorkApplicationUpdateWithWhereUniqueWithoutUserInput | WorkApplicationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkApplicationUpdateManyWithWhereWithoutUserInput | WorkApplicationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkApplicationScalarWhereInput | WorkApplicationScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutUserInput | TaskUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutUserInput | TaskUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutUserInput | TaskUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type EnumRoleCategoryFieldUpdateOperationsInput = {
    set?: $Enums.RoleCategory
  }

  export type NullableEnumRoleCategoryFieldUpdateOperationsInput = {
    set?: $Enums.RoleCategory | null
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type WorkCreateNestedManyWithoutProjectInput = {
    create?: XOR<WorkCreateWithoutProjectInput, WorkUncheckedCreateWithoutProjectInput> | WorkCreateWithoutProjectInput[] | WorkUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: WorkCreateOrConnectWithoutProjectInput | WorkCreateOrConnectWithoutProjectInput[]
    createMany?: WorkCreateManyProjectInputEnvelope
    connect?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
  }

  export type WorkUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<WorkCreateWithoutProjectInput, WorkUncheckedCreateWithoutProjectInput> | WorkCreateWithoutProjectInput[] | WorkUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: WorkCreateOrConnectWithoutProjectInput | WorkCreateOrConnectWithoutProjectInput[]
    createMany?: WorkCreateManyProjectInputEnvelope
    connect?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
  }

  export type EnumProjectStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProjectStatus
  }

  export type WorkUpdateManyWithoutProjectNestedInput = {
    create?: XOR<WorkCreateWithoutProjectInput, WorkUncheckedCreateWithoutProjectInput> | WorkCreateWithoutProjectInput[] | WorkUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: WorkCreateOrConnectWithoutProjectInput | WorkCreateOrConnectWithoutProjectInput[]
    upsert?: WorkUpsertWithWhereUniqueWithoutProjectInput | WorkUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: WorkCreateManyProjectInputEnvelope
    set?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
    disconnect?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
    delete?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
    connect?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
    update?: WorkUpdateWithWhereUniqueWithoutProjectInput | WorkUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: WorkUpdateManyWithWhereWithoutProjectInput | WorkUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: WorkScalarWhereInput | WorkScalarWhereInput[]
  }

  export type WorkUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<WorkCreateWithoutProjectInput, WorkUncheckedCreateWithoutProjectInput> | WorkCreateWithoutProjectInput[] | WorkUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: WorkCreateOrConnectWithoutProjectInput | WorkCreateOrConnectWithoutProjectInput[]
    upsert?: WorkUpsertWithWhereUniqueWithoutProjectInput | WorkUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: WorkCreateManyProjectInputEnvelope
    set?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
    disconnect?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
    delete?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
    connect?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
    update?: WorkUpdateWithWhereUniqueWithoutProjectInput | WorkUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: WorkUpdateManyWithWhereWithoutProjectInput | WorkUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: WorkScalarWhereInput | WorkScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutWorksInput = {
    create?: XOR<ProjectCreateWithoutWorksInput, ProjectUncheckedCreateWithoutWorksInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutWorksInput
    connect?: ProjectWhereUniqueInput
  }

  export type AssignmentCreateNestedManyWithoutWorkInput = {
    create?: XOR<AssignmentCreateWithoutWorkInput, AssignmentUncheckedCreateWithoutWorkInput> | AssignmentCreateWithoutWorkInput[] | AssignmentUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutWorkInput | AssignmentCreateOrConnectWithoutWorkInput[]
    createMany?: AssignmentCreateManyWorkInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type WorkApplicationCreateNestedManyWithoutWorkInput = {
    create?: XOR<WorkApplicationCreateWithoutWorkInput, WorkApplicationUncheckedCreateWithoutWorkInput> | WorkApplicationCreateWithoutWorkInput[] | WorkApplicationUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: WorkApplicationCreateOrConnectWithoutWorkInput | WorkApplicationCreateOrConnectWithoutWorkInput[]
    createMany?: WorkApplicationCreateManyWorkInputEnvelope
    connect?: WorkApplicationWhereUniqueInput | WorkApplicationWhereUniqueInput[]
  }

  export type AssignmentUncheckedCreateNestedManyWithoutWorkInput = {
    create?: XOR<AssignmentCreateWithoutWorkInput, AssignmentUncheckedCreateWithoutWorkInput> | AssignmentCreateWithoutWorkInput[] | AssignmentUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutWorkInput | AssignmentCreateOrConnectWithoutWorkInput[]
    createMany?: AssignmentCreateManyWorkInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type WorkApplicationUncheckedCreateNestedManyWithoutWorkInput = {
    create?: XOR<WorkApplicationCreateWithoutWorkInput, WorkApplicationUncheckedCreateWithoutWorkInput> | WorkApplicationCreateWithoutWorkInput[] | WorkApplicationUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: WorkApplicationCreateOrConnectWithoutWorkInput | WorkApplicationCreateOrConnectWithoutWorkInput[]
    createMany?: WorkApplicationCreateManyWorkInputEnvelope
    connect?: WorkApplicationWhereUniqueInput | WorkApplicationWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumWorkStatusFieldUpdateOperationsInput = {
    set?: $Enums.WorkStatus
  }

  export type ProjectUpdateOneRequiredWithoutWorksNestedInput = {
    create?: XOR<ProjectCreateWithoutWorksInput, ProjectUncheckedCreateWithoutWorksInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutWorksInput
    upsert?: ProjectUpsertWithoutWorksInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutWorksInput, ProjectUpdateWithoutWorksInput>, ProjectUncheckedUpdateWithoutWorksInput>
  }

  export type AssignmentUpdateManyWithoutWorkNestedInput = {
    create?: XOR<AssignmentCreateWithoutWorkInput, AssignmentUncheckedCreateWithoutWorkInput> | AssignmentCreateWithoutWorkInput[] | AssignmentUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutWorkInput | AssignmentCreateOrConnectWithoutWorkInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutWorkInput | AssignmentUpsertWithWhereUniqueWithoutWorkInput[]
    createMany?: AssignmentCreateManyWorkInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutWorkInput | AssignmentUpdateWithWhereUniqueWithoutWorkInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutWorkInput | AssignmentUpdateManyWithWhereWithoutWorkInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type WorkApplicationUpdateManyWithoutWorkNestedInput = {
    create?: XOR<WorkApplicationCreateWithoutWorkInput, WorkApplicationUncheckedCreateWithoutWorkInput> | WorkApplicationCreateWithoutWorkInput[] | WorkApplicationUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: WorkApplicationCreateOrConnectWithoutWorkInput | WorkApplicationCreateOrConnectWithoutWorkInput[]
    upsert?: WorkApplicationUpsertWithWhereUniqueWithoutWorkInput | WorkApplicationUpsertWithWhereUniqueWithoutWorkInput[]
    createMany?: WorkApplicationCreateManyWorkInputEnvelope
    set?: WorkApplicationWhereUniqueInput | WorkApplicationWhereUniqueInput[]
    disconnect?: WorkApplicationWhereUniqueInput | WorkApplicationWhereUniqueInput[]
    delete?: WorkApplicationWhereUniqueInput | WorkApplicationWhereUniqueInput[]
    connect?: WorkApplicationWhereUniqueInput | WorkApplicationWhereUniqueInput[]
    update?: WorkApplicationUpdateWithWhereUniqueWithoutWorkInput | WorkApplicationUpdateWithWhereUniqueWithoutWorkInput[]
    updateMany?: WorkApplicationUpdateManyWithWhereWithoutWorkInput | WorkApplicationUpdateManyWithWhereWithoutWorkInput[]
    deleteMany?: WorkApplicationScalarWhereInput | WorkApplicationScalarWhereInput[]
  }

  export type AssignmentUncheckedUpdateManyWithoutWorkNestedInput = {
    create?: XOR<AssignmentCreateWithoutWorkInput, AssignmentUncheckedCreateWithoutWorkInput> | AssignmentCreateWithoutWorkInput[] | AssignmentUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutWorkInput | AssignmentCreateOrConnectWithoutWorkInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutWorkInput | AssignmentUpsertWithWhereUniqueWithoutWorkInput[]
    createMany?: AssignmentCreateManyWorkInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutWorkInput | AssignmentUpdateWithWhereUniqueWithoutWorkInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutWorkInput | AssignmentUpdateManyWithWhereWithoutWorkInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type WorkApplicationUncheckedUpdateManyWithoutWorkNestedInput = {
    create?: XOR<WorkApplicationCreateWithoutWorkInput, WorkApplicationUncheckedCreateWithoutWorkInput> | WorkApplicationCreateWithoutWorkInput[] | WorkApplicationUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: WorkApplicationCreateOrConnectWithoutWorkInput | WorkApplicationCreateOrConnectWithoutWorkInput[]
    upsert?: WorkApplicationUpsertWithWhereUniqueWithoutWorkInput | WorkApplicationUpsertWithWhereUniqueWithoutWorkInput[]
    createMany?: WorkApplicationCreateManyWorkInputEnvelope
    set?: WorkApplicationWhereUniqueInput | WorkApplicationWhereUniqueInput[]
    disconnect?: WorkApplicationWhereUniqueInput | WorkApplicationWhereUniqueInput[]
    delete?: WorkApplicationWhereUniqueInput | WorkApplicationWhereUniqueInput[]
    connect?: WorkApplicationWhereUniqueInput | WorkApplicationWhereUniqueInput[]
    update?: WorkApplicationUpdateWithWhereUniqueWithoutWorkInput | WorkApplicationUpdateWithWhereUniqueWithoutWorkInput[]
    updateMany?: WorkApplicationUpdateManyWithWhereWithoutWorkInput | WorkApplicationUpdateManyWithWhereWithoutWorkInput[]
    deleteMany?: WorkApplicationScalarWhereInput | WorkApplicationScalarWhereInput[]
  }

  export type WorkCreateNestedOneWithoutAssignmentsInput = {
    create?: XOR<WorkCreateWithoutAssignmentsInput, WorkUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: WorkCreateOrConnectWithoutAssignmentsInput
    connect?: WorkWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAssignmentsInput = {
    create?: XOR<UserCreateWithoutAssignmentsInput, UserUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignmentsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumAssignmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.AssignmentStatus
  }

  export type WorkUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: XOR<WorkCreateWithoutAssignmentsInput, WorkUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: WorkCreateOrConnectWithoutAssignmentsInput
    upsert?: WorkUpsertWithoutAssignmentsInput
    connect?: WorkWhereUniqueInput
    update?: XOR<XOR<WorkUpdateToOneWithWhereWithoutAssignmentsInput, WorkUpdateWithoutAssignmentsInput>, WorkUncheckedUpdateWithoutAssignmentsInput>
  }

  export type UserUpdateOneWithoutAssignmentsNestedInput = {
    create?: XOR<UserCreateWithoutAssignmentsInput, UserUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignmentsInput
    upsert?: UserUpsertWithoutAssignmentsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssignmentsInput, UserUpdateWithoutAssignmentsInput>, UserUncheckedUpdateWithoutAssignmentsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type WorkCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<WorkCreateWithoutApplicationsInput, WorkUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: WorkCreateOrConnectWithoutApplicationsInput
    connect?: WorkWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApplicationsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumApplicationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ApplicationStatus
  }

  export type WorkUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<WorkCreateWithoutApplicationsInput, WorkUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: WorkCreateOrConnectWithoutApplicationsInput
    upsert?: WorkUpsertWithoutApplicationsInput
    connect?: WorkWhereUniqueInput
    update?: XOR<XOR<WorkUpdateToOneWithWhereWithoutApplicationsInput, WorkUpdateWithoutApplicationsInput>, WorkUncheckedUpdateWithoutApplicationsInput>
  }

  export type UserUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApplicationsInput
    upsert?: UserUpsertWithoutApplicationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApplicationsInput, UserUpdateWithoutApplicationsInput>, UserUncheckedUpdateWithoutApplicationsInput>
  }

  export type UserCreateNestedOneWithoutTasksInput = {
    create?: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutTasksInput
    connect?: UserWhereUniqueInput
  }

  export type TaskTagCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskTagCreateWithoutTaskInput, TaskTagUncheckedCreateWithoutTaskInput> | TaskTagCreateWithoutTaskInput[] | TaskTagUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskTagCreateOrConnectWithoutTaskInput | TaskTagCreateOrConnectWithoutTaskInput[]
    createMany?: TaskTagCreateManyTaskInputEnvelope
    connect?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
  }

  export type TaskTagUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskTagCreateWithoutTaskInput, TaskTagUncheckedCreateWithoutTaskInput> | TaskTagCreateWithoutTaskInput[] | TaskTagUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskTagCreateOrConnectWithoutTaskInput | TaskTagCreateOrConnectWithoutTaskInput[]
    createMany?: TaskTagCreateManyTaskInputEnvelope
    connect?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutTasksInput
    upsert?: UserUpsertWithoutTasksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTasksInput, UserUpdateWithoutTasksInput>, UserUncheckedUpdateWithoutTasksInput>
  }

  export type TaskTagUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskTagCreateWithoutTaskInput, TaskTagUncheckedCreateWithoutTaskInput> | TaskTagCreateWithoutTaskInput[] | TaskTagUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskTagCreateOrConnectWithoutTaskInput | TaskTagCreateOrConnectWithoutTaskInput[]
    upsert?: TaskTagUpsertWithWhereUniqueWithoutTaskInput | TaskTagUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskTagCreateManyTaskInputEnvelope
    set?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
    disconnect?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
    delete?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
    connect?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
    update?: TaskTagUpdateWithWhereUniqueWithoutTaskInput | TaskTagUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskTagUpdateManyWithWhereWithoutTaskInput | TaskTagUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskTagScalarWhereInput | TaskTagScalarWhereInput[]
  }

  export type TaskTagUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskTagCreateWithoutTaskInput, TaskTagUncheckedCreateWithoutTaskInput> | TaskTagCreateWithoutTaskInput[] | TaskTagUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskTagCreateOrConnectWithoutTaskInput | TaskTagCreateOrConnectWithoutTaskInput[]
    upsert?: TaskTagUpsertWithWhereUniqueWithoutTaskInput | TaskTagUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskTagCreateManyTaskInputEnvelope
    set?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
    disconnect?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
    delete?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
    connect?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
    update?: TaskTagUpdateWithWhereUniqueWithoutTaskInput | TaskTagUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskTagUpdateManyWithWhereWithoutTaskInput | TaskTagUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskTagScalarWhereInput | TaskTagScalarWhereInput[]
  }

  export type TaskTagCreateNestedManyWithoutTagInput = {
    create?: XOR<TaskTagCreateWithoutTagInput, TaskTagUncheckedCreateWithoutTagInput> | TaskTagCreateWithoutTagInput[] | TaskTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: TaskTagCreateOrConnectWithoutTagInput | TaskTagCreateOrConnectWithoutTagInput[]
    createMany?: TaskTagCreateManyTagInputEnvelope
    connect?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
  }

  export type TaskTagUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<TaskTagCreateWithoutTagInput, TaskTagUncheckedCreateWithoutTagInput> | TaskTagCreateWithoutTagInput[] | TaskTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: TaskTagCreateOrConnectWithoutTagInput | TaskTagCreateOrConnectWithoutTagInput[]
    createMany?: TaskTagCreateManyTagInputEnvelope
    connect?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
  }

  export type TaskTagUpdateManyWithoutTagNestedInput = {
    create?: XOR<TaskTagCreateWithoutTagInput, TaskTagUncheckedCreateWithoutTagInput> | TaskTagCreateWithoutTagInput[] | TaskTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: TaskTagCreateOrConnectWithoutTagInput | TaskTagCreateOrConnectWithoutTagInput[]
    upsert?: TaskTagUpsertWithWhereUniqueWithoutTagInput | TaskTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: TaskTagCreateManyTagInputEnvelope
    set?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
    disconnect?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
    delete?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
    connect?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
    update?: TaskTagUpdateWithWhereUniqueWithoutTagInput | TaskTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: TaskTagUpdateManyWithWhereWithoutTagInput | TaskTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: TaskTagScalarWhereInput | TaskTagScalarWhereInput[]
  }

  export type TaskTagUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<TaskTagCreateWithoutTagInput, TaskTagUncheckedCreateWithoutTagInput> | TaskTagCreateWithoutTagInput[] | TaskTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: TaskTagCreateOrConnectWithoutTagInput | TaskTagCreateOrConnectWithoutTagInput[]
    upsert?: TaskTagUpsertWithWhereUniqueWithoutTagInput | TaskTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: TaskTagCreateManyTagInputEnvelope
    set?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
    disconnect?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
    delete?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
    connect?: TaskTagWhereUniqueInput | TaskTagWhereUniqueInput[]
    update?: TaskTagUpdateWithWhereUniqueWithoutTagInput | TaskTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: TaskTagUpdateManyWithWhereWithoutTagInput | TaskTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: TaskTagScalarWhereInput | TaskTagScalarWhereInput[]
  }

  export type TaskCreateNestedOneWithoutTagsInput = {
    create?: XOR<TaskCreateWithoutTagsInput, TaskUncheckedCreateWithoutTagsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutTagsInput
    connect?: TaskWhereUniqueInput
  }

  export type TagCreateNestedOneWithoutTasksInput = {
    create?: XOR<TagCreateWithoutTasksInput, TagUncheckedCreateWithoutTasksInput>
    connectOrCreate?: TagCreateOrConnectWithoutTasksInput
    connect?: TagWhereUniqueInput
  }

  export type TaskUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<TaskCreateWithoutTagsInput, TaskUncheckedCreateWithoutTagsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutTagsInput
    upsert?: TaskUpsertWithoutTagsInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutTagsInput, TaskUpdateWithoutTagsInput>, TaskUncheckedUpdateWithoutTagsInput>
  }

  export type TagUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<TagCreateWithoutTasksInput, TagUncheckedCreateWithoutTasksInput>
    connectOrCreate?: TagCreateOrConnectWithoutTasksInput
    upsert?: TagUpsertWithoutTasksInput
    connect?: TagWhereUniqueInput
    update?: XOR<XOR<TagUpdateToOneWithWhereWithoutTasksInput, TagUpdateWithoutTasksInput>, TagUncheckedUpdateWithoutTasksInput>
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

  export type NestedEnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[]
    notIn?: $Enums.UserType[]
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
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

  export type NestedEnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[]
    notIn?: $Enums.UserType[]
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
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

  export type NestedEnumRoleCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleCategory | EnumRoleCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.RoleCategory[]
    notIn?: $Enums.RoleCategory[]
    not?: NestedEnumRoleCategoryFilter<$PrismaModel> | $Enums.RoleCategory
  }

  export type NestedEnumRoleCategoryNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleCategory | EnumRoleCategoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.RoleCategory[] | null
    notIn?: $Enums.RoleCategory[] | null
    not?: NestedEnumRoleCategoryNullableFilter<$PrismaModel> | $Enums.RoleCategory | null
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

  export type NestedEnumRoleCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleCategory | EnumRoleCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.RoleCategory[]
    notIn?: $Enums.RoleCategory[]
    not?: NestedEnumRoleCategoryWithAggregatesFilter<$PrismaModel> | $Enums.RoleCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleCategoryFilter<$PrismaModel>
    _max?: NestedEnumRoleCategoryFilter<$PrismaModel>
  }

  export type NestedEnumRoleCategoryNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleCategory | EnumRoleCategoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.RoleCategory[] | null
    notIn?: $Enums.RoleCategory[] | null
    not?: NestedEnumRoleCategoryNullableWithAggregatesFilter<$PrismaModel> | $Enums.RoleCategory | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRoleCategoryNullableFilter<$PrismaModel>
    _max?: NestedEnumRoleCategoryNullableFilter<$PrismaModel>
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

  export type NestedEnumProjectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[]
    notIn?: $Enums.ProjectStatus[]
    not?: NestedEnumProjectStatusFilter<$PrismaModel> | $Enums.ProjectStatus
  }

  export type NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[]
    notIn?: $Enums.ProjectStatus[]
    not?: NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectStatusFilter<$PrismaModel>
    _max?: NestedEnumProjectStatusFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumWorkStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkStatus | EnumWorkStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WorkStatus[]
    notIn?: $Enums.WorkStatus[]
    not?: NestedEnumWorkStatusFilter<$PrismaModel> | $Enums.WorkStatus
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumWorkStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkStatus | EnumWorkStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WorkStatus[]
    notIn?: $Enums.WorkStatus[]
    not?: NestedEnumWorkStatusWithAggregatesFilter<$PrismaModel> | $Enums.WorkStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWorkStatusFilter<$PrismaModel>
    _max?: NestedEnumWorkStatusFilter<$PrismaModel>
  }

  export type NestedEnumAssignmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AssignmentStatus | EnumAssignmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AssignmentStatus[]
    notIn?: $Enums.AssignmentStatus[]
    not?: NestedEnumAssignmentStatusFilter<$PrismaModel> | $Enums.AssignmentStatus
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

  export type NestedEnumAssignmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssignmentStatus | EnumAssignmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AssignmentStatus[]
    notIn?: $Enums.AssignmentStatus[]
    not?: NestedEnumAssignmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AssignmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAssignmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAssignmentStatusFilter<$PrismaModel>
  }

  export type NestedEnumApplicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[]
    notIn?: $Enums.ApplicationStatus[]
    not?: NestedEnumApplicationStatusFilter<$PrismaModel> | $Enums.ApplicationStatus
  }

  export type NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[]
    notIn?: $Enums.ApplicationStatus[]
    not?: NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApplicationStatusFilter<$PrismaModel>
    _max?: NestedEnumApplicationStatusFilter<$PrismaModel>
  }

  export type UserProfileCreateWithoutUserInput = {
    primary_role: $Enums.RoleCategory
    secondary_role?: $Enums.RoleCategory | null
    reliability_score?: Decimal | DecimalJsLike | number | string
  }

  export type UserProfileUncheckedCreateWithoutUserInput = {
    profile_id?: number
    primary_role: $Enums.RoleCategory
    secondary_role?: $Enums.RoleCategory | null
    reliability_score?: Decimal | DecimalJsLike | number | string
  }

  export type UserProfileCreateOrConnectWithoutUserInput = {
    where: UserProfileWhereUniqueInput
    create: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
  }

  export type AssignmentCreateWithoutUserInput = {
    outsider_name?: string | null
    assignment_status?: $Enums.AssignmentStatus
    withdrawal_reason?: string | null
    work: WorkCreateNestedOneWithoutAssignmentsInput
  }

  export type AssignmentUncheckedCreateWithoutUserInput = {
    assignment_id?: number
    work_id: number
    outsider_name?: string | null
    assignment_status?: $Enums.AssignmentStatus
    withdrawal_reason?: string | null
  }

  export type AssignmentCreateOrConnectWithoutUserInput = {
    where: AssignmentWhereUniqueInput
    create: XOR<AssignmentCreateWithoutUserInput, AssignmentUncheckedCreateWithoutUserInput>
  }

  export type AssignmentCreateManyUserInputEnvelope = {
    data: AssignmentCreateManyUserInput | AssignmentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WorkApplicationCreateWithoutUserInput = {
    application_status?: $Enums.ApplicationStatus
    work: WorkCreateNestedOneWithoutApplicationsInput
  }

  export type WorkApplicationUncheckedCreateWithoutUserInput = {
    application_id?: number
    work_id: number
    application_status?: $Enums.ApplicationStatus
  }

  export type WorkApplicationCreateOrConnectWithoutUserInput = {
    where: WorkApplicationWhereUniqueInput
    create: XOR<WorkApplicationCreateWithoutUserInput, WorkApplicationUncheckedCreateWithoutUserInput>
  }

  export type WorkApplicationCreateManyUserInputEnvelope = {
    data: WorkApplicationCreateManyUserInput | WorkApplicationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TaskCreateWithoutUserInput = {
    task_title: string
    task_desc?: string | null
    due_date?: Date | string | null
    tags?: TaskTagCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutUserInput = {
    task_id?: number
    task_title: string
    task_desc?: string | null
    due_date?: Date | string | null
    tags?: TaskTagUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutUserInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput>
  }

  export type TaskCreateManyUserInputEnvelope = {
    data: TaskCreateManyUserInput | TaskCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserProfileUpsertWithoutUserInput = {
    update: XOR<UserProfileUpdateWithoutUserInput, UserProfileUncheckedUpdateWithoutUserInput>
    create: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    where?: UserProfileWhereInput
  }

  export type UserProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: UserProfileWhereInput
    data: XOR<UserProfileUpdateWithoutUserInput, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserProfileUpdateWithoutUserInput = {
    primary_role?: EnumRoleCategoryFieldUpdateOperationsInput | $Enums.RoleCategory
    secondary_role?: NullableEnumRoleCategoryFieldUpdateOperationsInput | $Enums.RoleCategory | null
    reliability_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type UserProfileUncheckedUpdateWithoutUserInput = {
    profile_id?: IntFieldUpdateOperationsInput | number
    primary_role?: EnumRoleCategoryFieldUpdateOperationsInput | $Enums.RoleCategory
    secondary_role?: NullableEnumRoleCategoryFieldUpdateOperationsInput | $Enums.RoleCategory | null
    reliability_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type AssignmentUpsertWithWhereUniqueWithoutUserInput = {
    where: AssignmentWhereUniqueInput
    update: XOR<AssignmentUpdateWithoutUserInput, AssignmentUncheckedUpdateWithoutUserInput>
    create: XOR<AssignmentCreateWithoutUserInput, AssignmentUncheckedCreateWithoutUserInput>
  }

  export type AssignmentUpdateWithWhereUniqueWithoutUserInput = {
    where: AssignmentWhereUniqueInput
    data: XOR<AssignmentUpdateWithoutUserInput, AssignmentUncheckedUpdateWithoutUserInput>
  }

  export type AssignmentUpdateManyWithWhereWithoutUserInput = {
    where: AssignmentScalarWhereInput
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyWithoutUserInput>
  }

  export type AssignmentScalarWhereInput = {
    AND?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
    OR?: AssignmentScalarWhereInput[]
    NOT?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
    assignment_id?: IntFilter<"Assignment"> | number
    work_id?: IntFilter<"Assignment"> | number
    user_id?: IntNullableFilter<"Assignment"> | number | null
    outsider_name?: StringNullableFilter<"Assignment"> | string | null
    assignment_status?: EnumAssignmentStatusFilter<"Assignment"> | $Enums.AssignmentStatus
    withdrawal_reason?: StringNullableFilter<"Assignment"> | string | null
  }

  export type WorkApplicationUpsertWithWhereUniqueWithoutUserInput = {
    where: WorkApplicationWhereUniqueInput
    update: XOR<WorkApplicationUpdateWithoutUserInput, WorkApplicationUncheckedUpdateWithoutUserInput>
    create: XOR<WorkApplicationCreateWithoutUserInput, WorkApplicationUncheckedCreateWithoutUserInput>
  }

  export type WorkApplicationUpdateWithWhereUniqueWithoutUserInput = {
    where: WorkApplicationWhereUniqueInput
    data: XOR<WorkApplicationUpdateWithoutUserInput, WorkApplicationUncheckedUpdateWithoutUserInput>
  }

  export type WorkApplicationUpdateManyWithWhereWithoutUserInput = {
    where: WorkApplicationScalarWhereInput
    data: XOR<WorkApplicationUpdateManyMutationInput, WorkApplicationUncheckedUpdateManyWithoutUserInput>
  }

  export type WorkApplicationScalarWhereInput = {
    AND?: WorkApplicationScalarWhereInput | WorkApplicationScalarWhereInput[]
    OR?: WorkApplicationScalarWhereInput[]
    NOT?: WorkApplicationScalarWhereInput | WorkApplicationScalarWhereInput[]
    application_id?: IntFilter<"WorkApplication"> | number
    work_id?: IntFilter<"WorkApplication"> | number
    user_id?: IntFilter<"WorkApplication"> | number
    application_status?: EnumApplicationStatusFilter<"WorkApplication"> | $Enums.ApplicationStatus
  }

  export type TaskUpsertWithWhereUniqueWithoutUserInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutUserInput, TaskUncheckedUpdateWithoutUserInput>
    create: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutUserInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutUserInput, TaskUncheckedUpdateWithoutUserInput>
  }

  export type TaskUpdateManyWithWhereWithoutUserInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutUserInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    task_id?: IntFilter<"Task"> | number
    user_id?: IntFilter<"Task"> | number
    task_title?: StringFilter<"Task"> | string
    task_desc?: StringNullableFilter<"Task"> | string | null
    due_date?: DateTimeNullableFilter<"Task"> | Date | string | null
  }

  export type UserCreateWithoutProfileInput = {
    email: string
    google_id?: string | null
    full_name?: string | null
    avatar_url?: string | null
    user_type?: $Enums.UserType
    created_at?: Date | string
    assignments?: AssignmentCreateNestedManyWithoutUserInput
    applications?: WorkApplicationCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    user_id?: number
    email: string
    google_id?: string | null
    full_name?: string | null
    avatar_url?: string | null
    user_type?: $Enums.UserType
    created_at?: Date | string
    assignments?: AssignmentUncheckedCreateNestedManyWithoutUserInput
    applications?: WorkApplicationUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    email?: StringFieldUpdateOperationsInput | string
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: AssignmentUpdateManyWithoutUserNestedInput
    applications?: WorkApplicationUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: AssignmentUncheckedUpdateManyWithoutUserNestedInput
    applications?: WorkApplicationUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WorkCreateWithoutProjectInput = {
    project_role: string
    role_category: $Enums.RoleCategory
    expected_salary?: Decimal | DecimalJsLike | number | string
    is_open_pool?: boolean
    work_description: string
    work_start_date: Date | string
    work_start_time?: Date | string | null
    work_end_time?: Date | string | null
    work_status?: $Enums.WorkStatus
    assignments?: AssignmentCreateNestedManyWithoutWorkInput
    applications?: WorkApplicationCreateNestedManyWithoutWorkInput
  }

  export type WorkUncheckedCreateWithoutProjectInput = {
    work_id?: number
    project_role: string
    role_category: $Enums.RoleCategory
    expected_salary?: Decimal | DecimalJsLike | number | string
    is_open_pool?: boolean
    work_description: string
    work_start_date: Date | string
    work_start_time?: Date | string | null
    work_end_time?: Date | string | null
    work_status?: $Enums.WorkStatus
    assignments?: AssignmentUncheckedCreateNestedManyWithoutWorkInput
    applications?: WorkApplicationUncheckedCreateNestedManyWithoutWorkInput
  }

  export type WorkCreateOrConnectWithoutProjectInput = {
    where: WorkWhereUniqueInput
    create: XOR<WorkCreateWithoutProjectInput, WorkUncheckedCreateWithoutProjectInput>
  }

  export type WorkCreateManyProjectInputEnvelope = {
    data: WorkCreateManyProjectInput | WorkCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type WorkUpsertWithWhereUniqueWithoutProjectInput = {
    where: WorkWhereUniqueInput
    update: XOR<WorkUpdateWithoutProjectInput, WorkUncheckedUpdateWithoutProjectInput>
    create: XOR<WorkCreateWithoutProjectInput, WorkUncheckedCreateWithoutProjectInput>
  }

  export type WorkUpdateWithWhereUniqueWithoutProjectInput = {
    where: WorkWhereUniqueInput
    data: XOR<WorkUpdateWithoutProjectInput, WorkUncheckedUpdateWithoutProjectInput>
  }

  export type WorkUpdateManyWithWhereWithoutProjectInput = {
    where: WorkScalarWhereInput
    data: XOR<WorkUpdateManyMutationInput, WorkUncheckedUpdateManyWithoutProjectInput>
  }

  export type WorkScalarWhereInput = {
    AND?: WorkScalarWhereInput | WorkScalarWhereInput[]
    OR?: WorkScalarWhereInput[]
    NOT?: WorkScalarWhereInput | WorkScalarWhereInput[]
    work_id?: IntFilter<"Work"> | number
    project_id?: IntFilter<"Work"> | number
    project_role?: StringFilter<"Work"> | string
    role_category?: EnumRoleCategoryFilter<"Work"> | $Enums.RoleCategory
    expected_salary?: DecimalFilter<"Work"> | Decimal | DecimalJsLike | number | string
    is_open_pool?: BoolFilter<"Work"> | boolean
    work_description?: StringFilter<"Work"> | string
    work_start_date?: DateTimeFilter<"Work"> | Date | string
    work_start_time?: DateTimeNullableFilter<"Work"> | Date | string | null
    work_end_time?: DateTimeNullableFilter<"Work"> | Date | string | null
    work_status?: EnumWorkStatusFilter<"Work"> | $Enums.WorkStatus
  }

  export type ProjectCreateWithoutWorksInput = {
    project_name: string
    client_name: string
    project_location: string
    project_description: string
    project_start_date: Date | string
    project_end_date: Date | string
    project_status?: $Enums.ProjectStatus
  }

  export type ProjectUncheckedCreateWithoutWorksInput = {
    project_id?: number
    project_name: string
    client_name: string
    project_location: string
    project_description: string
    project_start_date: Date | string
    project_end_date: Date | string
    project_status?: $Enums.ProjectStatus
  }

  export type ProjectCreateOrConnectWithoutWorksInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutWorksInput, ProjectUncheckedCreateWithoutWorksInput>
  }

  export type AssignmentCreateWithoutWorkInput = {
    outsider_name?: string | null
    assignment_status?: $Enums.AssignmentStatus
    withdrawal_reason?: string | null
    user?: UserCreateNestedOneWithoutAssignmentsInput
  }

  export type AssignmentUncheckedCreateWithoutWorkInput = {
    assignment_id?: number
    user_id?: number | null
    outsider_name?: string | null
    assignment_status?: $Enums.AssignmentStatus
    withdrawal_reason?: string | null
  }

  export type AssignmentCreateOrConnectWithoutWorkInput = {
    where: AssignmentWhereUniqueInput
    create: XOR<AssignmentCreateWithoutWorkInput, AssignmentUncheckedCreateWithoutWorkInput>
  }

  export type AssignmentCreateManyWorkInputEnvelope = {
    data: AssignmentCreateManyWorkInput | AssignmentCreateManyWorkInput[]
    skipDuplicates?: boolean
  }

  export type WorkApplicationCreateWithoutWorkInput = {
    application_status?: $Enums.ApplicationStatus
    user: UserCreateNestedOneWithoutApplicationsInput
  }

  export type WorkApplicationUncheckedCreateWithoutWorkInput = {
    application_id?: number
    user_id: number
    application_status?: $Enums.ApplicationStatus
  }

  export type WorkApplicationCreateOrConnectWithoutWorkInput = {
    where: WorkApplicationWhereUniqueInput
    create: XOR<WorkApplicationCreateWithoutWorkInput, WorkApplicationUncheckedCreateWithoutWorkInput>
  }

  export type WorkApplicationCreateManyWorkInputEnvelope = {
    data: WorkApplicationCreateManyWorkInput | WorkApplicationCreateManyWorkInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithoutWorksInput = {
    update: XOR<ProjectUpdateWithoutWorksInput, ProjectUncheckedUpdateWithoutWorksInput>
    create: XOR<ProjectCreateWithoutWorksInput, ProjectUncheckedCreateWithoutWorksInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutWorksInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutWorksInput, ProjectUncheckedUpdateWithoutWorksInput>
  }

  export type ProjectUpdateWithoutWorksInput = {
    project_name?: StringFieldUpdateOperationsInput | string
    client_name?: StringFieldUpdateOperationsInput | string
    project_location?: StringFieldUpdateOperationsInput | string
    project_description?: StringFieldUpdateOperationsInput | string
    project_start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    project_end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    project_status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
  }

  export type ProjectUncheckedUpdateWithoutWorksInput = {
    project_id?: IntFieldUpdateOperationsInput | number
    project_name?: StringFieldUpdateOperationsInput | string
    client_name?: StringFieldUpdateOperationsInput | string
    project_location?: StringFieldUpdateOperationsInput | string
    project_description?: StringFieldUpdateOperationsInput | string
    project_start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    project_end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    project_status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
  }

  export type AssignmentUpsertWithWhereUniqueWithoutWorkInput = {
    where: AssignmentWhereUniqueInput
    update: XOR<AssignmentUpdateWithoutWorkInput, AssignmentUncheckedUpdateWithoutWorkInput>
    create: XOR<AssignmentCreateWithoutWorkInput, AssignmentUncheckedCreateWithoutWorkInput>
  }

  export type AssignmentUpdateWithWhereUniqueWithoutWorkInput = {
    where: AssignmentWhereUniqueInput
    data: XOR<AssignmentUpdateWithoutWorkInput, AssignmentUncheckedUpdateWithoutWorkInput>
  }

  export type AssignmentUpdateManyWithWhereWithoutWorkInput = {
    where: AssignmentScalarWhereInput
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyWithoutWorkInput>
  }

  export type WorkApplicationUpsertWithWhereUniqueWithoutWorkInput = {
    where: WorkApplicationWhereUniqueInput
    update: XOR<WorkApplicationUpdateWithoutWorkInput, WorkApplicationUncheckedUpdateWithoutWorkInput>
    create: XOR<WorkApplicationCreateWithoutWorkInput, WorkApplicationUncheckedCreateWithoutWorkInput>
  }

  export type WorkApplicationUpdateWithWhereUniqueWithoutWorkInput = {
    where: WorkApplicationWhereUniqueInput
    data: XOR<WorkApplicationUpdateWithoutWorkInput, WorkApplicationUncheckedUpdateWithoutWorkInput>
  }

  export type WorkApplicationUpdateManyWithWhereWithoutWorkInput = {
    where: WorkApplicationScalarWhereInput
    data: XOR<WorkApplicationUpdateManyMutationInput, WorkApplicationUncheckedUpdateManyWithoutWorkInput>
  }

  export type WorkCreateWithoutAssignmentsInput = {
    project_role: string
    role_category: $Enums.RoleCategory
    expected_salary?: Decimal | DecimalJsLike | number | string
    is_open_pool?: boolean
    work_description: string
    work_start_date: Date | string
    work_start_time?: Date | string | null
    work_end_time?: Date | string | null
    work_status?: $Enums.WorkStatus
    project: ProjectCreateNestedOneWithoutWorksInput
    applications?: WorkApplicationCreateNestedManyWithoutWorkInput
  }

  export type WorkUncheckedCreateWithoutAssignmentsInput = {
    work_id?: number
    project_id: number
    project_role: string
    role_category: $Enums.RoleCategory
    expected_salary?: Decimal | DecimalJsLike | number | string
    is_open_pool?: boolean
    work_description: string
    work_start_date: Date | string
    work_start_time?: Date | string | null
    work_end_time?: Date | string | null
    work_status?: $Enums.WorkStatus
    applications?: WorkApplicationUncheckedCreateNestedManyWithoutWorkInput
  }

  export type WorkCreateOrConnectWithoutAssignmentsInput = {
    where: WorkWhereUniqueInput
    create: XOR<WorkCreateWithoutAssignmentsInput, WorkUncheckedCreateWithoutAssignmentsInput>
  }

  export type UserCreateWithoutAssignmentsInput = {
    email: string
    google_id?: string | null
    full_name?: string | null
    avatar_url?: string | null
    user_type?: $Enums.UserType
    created_at?: Date | string
    profile?: UserProfileCreateNestedOneWithoutUserInput
    applications?: WorkApplicationCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAssignmentsInput = {
    user_id?: number
    email: string
    google_id?: string | null
    full_name?: string | null
    avatar_url?: string | null
    user_type?: $Enums.UserType
    created_at?: Date | string
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    applications?: WorkApplicationUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAssignmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssignmentsInput, UserUncheckedCreateWithoutAssignmentsInput>
  }

  export type WorkUpsertWithoutAssignmentsInput = {
    update: XOR<WorkUpdateWithoutAssignmentsInput, WorkUncheckedUpdateWithoutAssignmentsInput>
    create: XOR<WorkCreateWithoutAssignmentsInput, WorkUncheckedCreateWithoutAssignmentsInput>
    where?: WorkWhereInput
  }

  export type WorkUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: WorkWhereInput
    data: XOR<WorkUpdateWithoutAssignmentsInput, WorkUncheckedUpdateWithoutAssignmentsInput>
  }

  export type WorkUpdateWithoutAssignmentsInput = {
    project_role?: StringFieldUpdateOperationsInput | string
    role_category?: EnumRoleCategoryFieldUpdateOperationsInput | $Enums.RoleCategory
    expected_salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_open_pool?: BoolFieldUpdateOperationsInput | boolean
    work_description?: StringFieldUpdateOperationsInput | string
    work_start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    work_start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    work_end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    work_status?: EnumWorkStatusFieldUpdateOperationsInput | $Enums.WorkStatus
    project?: ProjectUpdateOneRequiredWithoutWorksNestedInput
    applications?: WorkApplicationUpdateManyWithoutWorkNestedInput
  }

  export type WorkUncheckedUpdateWithoutAssignmentsInput = {
    work_id?: IntFieldUpdateOperationsInput | number
    project_id?: IntFieldUpdateOperationsInput | number
    project_role?: StringFieldUpdateOperationsInput | string
    role_category?: EnumRoleCategoryFieldUpdateOperationsInput | $Enums.RoleCategory
    expected_salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_open_pool?: BoolFieldUpdateOperationsInput | boolean
    work_description?: StringFieldUpdateOperationsInput | string
    work_start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    work_start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    work_end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    work_status?: EnumWorkStatusFieldUpdateOperationsInput | $Enums.WorkStatus
    applications?: WorkApplicationUncheckedUpdateManyWithoutWorkNestedInput
  }

  export type UserUpsertWithoutAssignmentsInput = {
    update: XOR<UserUpdateWithoutAssignmentsInput, UserUncheckedUpdateWithoutAssignmentsInput>
    create: XOR<UserCreateWithoutAssignmentsInput, UserUncheckedCreateWithoutAssignmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssignmentsInput, UserUncheckedUpdateWithoutAssignmentsInput>
  }

  export type UserUpdateWithoutAssignmentsInput = {
    email?: StringFieldUpdateOperationsInput | string
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    applications?: WorkApplicationUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAssignmentsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    applications?: WorkApplicationUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WorkCreateWithoutApplicationsInput = {
    project_role: string
    role_category: $Enums.RoleCategory
    expected_salary?: Decimal | DecimalJsLike | number | string
    is_open_pool?: boolean
    work_description: string
    work_start_date: Date | string
    work_start_time?: Date | string | null
    work_end_time?: Date | string | null
    work_status?: $Enums.WorkStatus
    project: ProjectCreateNestedOneWithoutWorksInput
    assignments?: AssignmentCreateNestedManyWithoutWorkInput
  }

  export type WorkUncheckedCreateWithoutApplicationsInput = {
    work_id?: number
    project_id: number
    project_role: string
    role_category: $Enums.RoleCategory
    expected_salary?: Decimal | DecimalJsLike | number | string
    is_open_pool?: boolean
    work_description: string
    work_start_date: Date | string
    work_start_time?: Date | string | null
    work_end_time?: Date | string | null
    work_status?: $Enums.WorkStatus
    assignments?: AssignmentUncheckedCreateNestedManyWithoutWorkInput
  }

  export type WorkCreateOrConnectWithoutApplicationsInput = {
    where: WorkWhereUniqueInput
    create: XOR<WorkCreateWithoutApplicationsInput, WorkUncheckedCreateWithoutApplicationsInput>
  }

  export type UserCreateWithoutApplicationsInput = {
    email: string
    google_id?: string | null
    full_name?: string | null
    avatar_url?: string | null
    user_type?: $Enums.UserType
    created_at?: Date | string
    profile?: UserProfileCreateNestedOneWithoutUserInput
    assignments?: AssignmentCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutApplicationsInput = {
    user_id?: number
    email: string
    google_id?: string | null
    full_name?: string | null
    avatar_url?: string | null
    user_type?: $Enums.UserType
    created_at?: Date | string
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutApplicationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
  }

  export type WorkUpsertWithoutApplicationsInput = {
    update: XOR<WorkUpdateWithoutApplicationsInput, WorkUncheckedUpdateWithoutApplicationsInput>
    create: XOR<WorkCreateWithoutApplicationsInput, WorkUncheckedCreateWithoutApplicationsInput>
    where?: WorkWhereInput
  }

  export type WorkUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: WorkWhereInput
    data: XOR<WorkUpdateWithoutApplicationsInput, WorkUncheckedUpdateWithoutApplicationsInput>
  }

  export type WorkUpdateWithoutApplicationsInput = {
    project_role?: StringFieldUpdateOperationsInput | string
    role_category?: EnumRoleCategoryFieldUpdateOperationsInput | $Enums.RoleCategory
    expected_salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_open_pool?: BoolFieldUpdateOperationsInput | boolean
    work_description?: StringFieldUpdateOperationsInput | string
    work_start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    work_start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    work_end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    work_status?: EnumWorkStatusFieldUpdateOperationsInput | $Enums.WorkStatus
    project?: ProjectUpdateOneRequiredWithoutWorksNestedInput
    assignments?: AssignmentUpdateManyWithoutWorkNestedInput
  }

  export type WorkUncheckedUpdateWithoutApplicationsInput = {
    work_id?: IntFieldUpdateOperationsInput | number
    project_id?: IntFieldUpdateOperationsInput | number
    project_role?: StringFieldUpdateOperationsInput | string
    role_category?: EnumRoleCategoryFieldUpdateOperationsInput | $Enums.RoleCategory
    expected_salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_open_pool?: BoolFieldUpdateOperationsInput | boolean
    work_description?: StringFieldUpdateOperationsInput | string
    work_start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    work_start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    work_end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    work_status?: EnumWorkStatusFieldUpdateOperationsInput | $Enums.WorkStatus
    assignments?: AssignmentUncheckedUpdateManyWithoutWorkNestedInput
  }

  export type UserUpsertWithoutApplicationsInput = {
    update: XOR<UserUpdateWithoutApplicationsInput, UserUncheckedUpdateWithoutApplicationsInput>
    create: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutApplicationsInput, UserUncheckedUpdateWithoutApplicationsInput>
  }

  export type UserUpdateWithoutApplicationsInput = {
    email?: StringFieldUpdateOperationsInput | string
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    assignments?: AssignmentUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutApplicationsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutTasksInput = {
    email: string
    google_id?: string | null
    full_name?: string | null
    avatar_url?: string | null
    user_type?: $Enums.UserType
    created_at?: Date | string
    profile?: UserProfileCreateNestedOneWithoutUserInput
    assignments?: AssignmentCreateNestedManyWithoutUserInput
    applications?: WorkApplicationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTasksInput = {
    user_id?: number
    email: string
    google_id?: string | null
    full_name?: string | null
    avatar_url?: string | null
    user_type?: $Enums.UserType
    created_at?: Date | string
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutUserInput
    applications?: WorkApplicationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTasksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
  }

  export type TaskTagCreateWithoutTaskInput = {
    tag: TagCreateNestedOneWithoutTasksInput
  }

  export type TaskTagUncheckedCreateWithoutTaskInput = {
    task_tag_id?: number
    tag_id: number
  }

  export type TaskTagCreateOrConnectWithoutTaskInput = {
    where: TaskTagWhereUniqueInput
    create: XOR<TaskTagCreateWithoutTaskInput, TaskTagUncheckedCreateWithoutTaskInput>
  }

  export type TaskTagCreateManyTaskInputEnvelope = {
    data: TaskTagCreateManyTaskInput | TaskTagCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTasksInput = {
    update: XOR<UserUpdateWithoutTasksInput, UserUncheckedUpdateWithoutTasksInput>
    create: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTasksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTasksInput, UserUncheckedUpdateWithoutTasksInput>
  }

  export type UserUpdateWithoutTasksInput = {
    email?: StringFieldUpdateOperationsInput | string
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    assignments?: AssignmentUpdateManyWithoutUserNestedInput
    applications?: WorkApplicationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTasksInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    user_type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutUserNestedInput
    applications?: WorkApplicationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TaskTagUpsertWithWhereUniqueWithoutTaskInput = {
    where: TaskTagWhereUniqueInput
    update: XOR<TaskTagUpdateWithoutTaskInput, TaskTagUncheckedUpdateWithoutTaskInput>
    create: XOR<TaskTagCreateWithoutTaskInput, TaskTagUncheckedCreateWithoutTaskInput>
  }

  export type TaskTagUpdateWithWhereUniqueWithoutTaskInput = {
    where: TaskTagWhereUniqueInput
    data: XOR<TaskTagUpdateWithoutTaskInput, TaskTagUncheckedUpdateWithoutTaskInput>
  }

  export type TaskTagUpdateManyWithWhereWithoutTaskInput = {
    where: TaskTagScalarWhereInput
    data: XOR<TaskTagUpdateManyMutationInput, TaskTagUncheckedUpdateManyWithoutTaskInput>
  }

  export type TaskTagScalarWhereInput = {
    AND?: TaskTagScalarWhereInput | TaskTagScalarWhereInput[]
    OR?: TaskTagScalarWhereInput[]
    NOT?: TaskTagScalarWhereInput | TaskTagScalarWhereInput[]
    task_tag_id?: IntFilter<"TaskTag"> | number
    task_id?: IntFilter<"TaskTag"> | number
    tag_id?: IntFilter<"TaskTag"> | number
  }

  export type TaskTagCreateWithoutTagInput = {
    task: TaskCreateNestedOneWithoutTagsInput
  }

  export type TaskTagUncheckedCreateWithoutTagInput = {
    task_tag_id?: number
    task_id: number
  }

  export type TaskTagCreateOrConnectWithoutTagInput = {
    where: TaskTagWhereUniqueInput
    create: XOR<TaskTagCreateWithoutTagInput, TaskTagUncheckedCreateWithoutTagInput>
  }

  export type TaskTagCreateManyTagInputEnvelope = {
    data: TaskTagCreateManyTagInput | TaskTagCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type TaskTagUpsertWithWhereUniqueWithoutTagInput = {
    where: TaskTagWhereUniqueInput
    update: XOR<TaskTagUpdateWithoutTagInput, TaskTagUncheckedUpdateWithoutTagInput>
    create: XOR<TaskTagCreateWithoutTagInput, TaskTagUncheckedCreateWithoutTagInput>
  }

  export type TaskTagUpdateWithWhereUniqueWithoutTagInput = {
    where: TaskTagWhereUniqueInput
    data: XOR<TaskTagUpdateWithoutTagInput, TaskTagUncheckedUpdateWithoutTagInput>
  }

  export type TaskTagUpdateManyWithWhereWithoutTagInput = {
    where: TaskTagScalarWhereInput
    data: XOR<TaskTagUpdateManyMutationInput, TaskTagUncheckedUpdateManyWithoutTagInput>
  }

  export type TaskCreateWithoutTagsInput = {
    task_title: string
    task_desc?: string | null
    due_date?: Date | string | null
    user: UserCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutTagsInput = {
    task_id?: number
    user_id: number
    task_title: string
    task_desc?: string | null
    due_date?: Date | string | null
  }

  export type TaskCreateOrConnectWithoutTagsInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutTagsInput, TaskUncheckedCreateWithoutTagsInput>
  }

  export type TagCreateWithoutTasksInput = {
    tag_name: string
    color_hex?: string
  }

  export type TagUncheckedCreateWithoutTasksInput = {
    tag_id?: number
    tag_name: string
    color_hex?: string
  }

  export type TagCreateOrConnectWithoutTasksInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutTasksInput, TagUncheckedCreateWithoutTasksInput>
  }

  export type TaskUpsertWithoutTagsInput = {
    update: XOR<TaskUpdateWithoutTagsInput, TaskUncheckedUpdateWithoutTagsInput>
    create: XOR<TaskCreateWithoutTagsInput, TaskUncheckedCreateWithoutTagsInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutTagsInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutTagsInput, TaskUncheckedUpdateWithoutTagsInput>
  }

  export type TaskUpdateWithoutTagsInput = {
    task_title?: StringFieldUpdateOperationsInput | string
    task_desc?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutTagsInput = {
    task_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    task_title?: StringFieldUpdateOperationsInput | string
    task_desc?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TagUpsertWithoutTasksInput = {
    update: XOR<TagUpdateWithoutTasksInput, TagUncheckedUpdateWithoutTasksInput>
    create: XOR<TagCreateWithoutTasksInput, TagUncheckedCreateWithoutTasksInput>
    where?: TagWhereInput
  }

  export type TagUpdateToOneWithWhereWithoutTasksInput = {
    where?: TagWhereInput
    data: XOR<TagUpdateWithoutTasksInput, TagUncheckedUpdateWithoutTasksInput>
  }

  export type TagUpdateWithoutTasksInput = {
    tag_name?: StringFieldUpdateOperationsInput | string
    color_hex?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateWithoutTasksInput = {
    tag_id?: IntFieldUpdateOperationsInput | number
    tag_name?: StringFieldUpdateOperationsInput | string
    color_hex?: StringFieldUpdateOperationsInput | string
  }

  export type AssignmentCreateManyUserInput = {
    assignment_id?: number
    work_id: number
    outsider_name?: string | null
    assignment_status?: $Enums.AssignmentStatus
    withdrawal_reason?: string | null
  }

  export type WorkApplicationCreateManyUserInput = {
    application_id?: number
    work_id: number
    application_status?: $Enums.ApplicationStatus
  }

  export type TaskCreateManyUserInput = {
    task_id?: number
    task_title: string
    task_desc?: string | null
    due_date?: Date | string | null
  }

  export type AssignmentUpdateWithoutUserInput = {
    outsider_name?: NullableStringFieldUpdateOperationsInput | string | null
    assignment_status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    withdrawal_reason?: NullableStringFieldUpdateOperationsInput | string | null
    work?: WorkUpdateOneRequiredWithoutAssignmentsNestedInput
  }

  export type AssignmentUncheckedUpdateWithoutUserInput = {
    assignment_id?: IntFieldUpdateOperationsInput | number
    work_id?: IntFieldUpdateOperationsInput | number
    outsider_name?: NullableStringFieldUpdateOperationsInput | string | null
    assignment_status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    withdrawal_reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AssignmentUncheckedUpdateManyWithoutUserInput = {
    assignment_id?: IntFieldUpdateOperationsInput | number
    work_id?: IntFieldUpdateOperationsInput | number
    outsider_name?: NullableStringFieldUpdateOperationsInput | string | null
    assignment_status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    withdrawal_reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WorkApplicationUpdateWithoutUserInput = {
    application_status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    work?: WorkUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type WorkApplicationUncheckedUpdateWithoutUserInput = {
    application_id?: IntFieldUpdateOperationsInput | number
    work_id?: IntFieldUpdateOperationsInput | number
    application_status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
  }

  export type WorkApplicationUncheckedUpdateManyWithoutUserInput = {
    application_id?: IntFieldUpdateOperationsInput | number
    work_id?: IntFieldUpdateOperationsInput | number
    application_status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
  }

  export type TaskUpdateWithoutUserInput = {
    task_title?: StringFieldUpdateOperationsInput | string
    task_desc?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tags?: TaskTagUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutUserInput = {
    task_id?: IntFieldUpdateOperationsInput | number
    task_title?: StringFieldUpdateOperationsInput | string
    task_desc?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tags?: TaskTagUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutUserInput = {
    task_id?: IntFieldUpdateOperationsInput | number
    task_title?: StringFieldUpdateOperationsInput | string
    task_desc?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WorkCreateManyProjectInput = {
    work_id?: number
    project_role: string
    role_category: $Enums.RoleCategory
    expected_salary?: Decimal | DecimalJsLike | number | string
    is_open_pool?: boolean
    work_description: string
    work_start_date: Date | string
    work_start_time?: Date | string | null
    work_end_time?: Date | string | null
    work_status?: $Enums.WorkStatus
  }

  export type WorkUpdateWithoutProjectInput = {
    project_role?: StringFieldUpdateOperationsInput | string
    role_category?: EnumRoleCategoryFieldUpdateOperationsInput | $Enums.RoleCategory
    expected_salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_open_pool?: BoolFieldUpdateOperationsInput | boolean
    work_description?: StringFieldUpdateOperationsInput | string
    work_start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    work_start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    work_end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    work_status?: EnumWorkStatusFieldUpdateOperationsInput | $Enums.WorkStatus
    assignments?: AssignmentUpdateManyWithoutWorkNestedInput
    applications?: WorkApplicationUpdateManyWithoutWorkNestedInput
  }

  export type WorkUncheckedUpdateWithoutProjectInput = {
    work_id?: IntFieldUpdateOperationsInput | number
    project_role?: StringFieldUpdateOperationsInput | string
    role_category?: EnumRoleCategoryFieldUpdateOperationsInput | $Enums.RoleCategory
    expected_salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_open_pool?: BoolFieldUpdateOperationsInput | boolean
    work_description?: StringFieldUpdateOperationsInput | string
    work_start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    work_start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    work_end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    work_status?: EnumWorkStatusFieldUpdateOperationsInput | $Enums.WorkStatus
    assignments?: AssignmentUncheckedUpdateManyWithoutWorkNestedInput
    applications?: WorkApplicationUncheckedUpdateManyWithoutWorkNestedInput
  }

  export type WorkUncheckedUpdateManyWithoutProjectInput = {
    work_id?: IntFieldUpdateOperationsInput | number
    project_role?: StringFieldUpdateOperationsInput | string
    role_category?: EnumRoleCategoryFieldUpdateOperationsInput | $Enums.RoleCategory
    expected_salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_open_pool?: BoolFieldUpdateOperationsInput | boolean
    work_description?: StringFieldUpdateOperationsInput | string
    work_start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    work_start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    work_end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    work_status?: EnumWorkStatusFieldUpdateOperationsInput | $Enums.WorkStatus
  }

  export type AssignmentCreateManyWorkInput = {
    assignment_id?: number
    user_id?: number | null
    outsider_name?: string | null
    assignment_status?: $Enums.AssignmentStatus
    withdrawal_reason?: string | null
  }

  export type WorkApplicationCreateManyWorkInput = {
    application_id?: number
    user_id: number
    application_status?: $Enums.ApplicationStatus
  }

  export type AssignmentUpdateWithoutWorkInput = {
    outsider_name?: NullableStringFieldUpdateOperationsInput | string | null
    assignment_status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    withdrawal_reason?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneWithoutAssignmentsNestedInput
  }

  export type AssignmentUncheckedUpdateWithoutWorkInput = {
    assignment_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    outsider_name?: NullableStringFieldUpdateOperationsInput | string | null
    assignment_status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    withdrawal_reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AssignmentUncheckedUpdateManyWithoutWorkInput = {
    assignment_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    outsider_name?: NullableStringFieldUpdateOperationsInput | string | null
    assignment_status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    withdrawal_reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WorkApplicationUpdateWithoutWorkInput = {
    application_status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    user?: UserUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type WorkApplicationUncheckedUpdateWithoutWorkInput = {
    application_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    application_status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
  }

  export type WorkApplicationUncheckedUpdateManyWithoutWorkInput = {
    application_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    application_status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
  }

  export type TaskTagCreateManyTaskInput = {
    task_tag_id?: number
    tag_id: number
  }

  export type TaskTagUpdateWithoutTaskInput = {
    tag?: TagUpdateOneRequiredWithoutTasksNestedInput
  }

  export type TaskTagUncheckedUpdateWithoutTaskInput = {
    task_tag_id?: IntFieldUpdateOperationsInput | number
    tag_id?: IntFieldUpdateOperationsInput | number
  }

  export type TaskTagUncheckedUpdateManyWithoutTaskInput = {
    task_tag_id?: IntFieldUpdateOperationsInput | number
    tag_id?: IntFieldUpdateOperationsInput | number
  }

  export type TaskTagCreateManyTagInput = {
    task_tag_id?: number
    task_id: number
  }

  export type TaskTagUpdateWithoutTagInput = {
    task?: TaskUpdateOneRequiredWithoutTagsNestedInput
  }

  export type TaskTagUncheckedUpdateWithoutTagInput = {
    task_tag_id?: IntFieldUpdateOperationsInput | number
    task_id?: IntFieldUpdateOperationsInput | number
  }

  export type TaskTagUncheckedUpdateManyWithoutTagInput = {
    task_tag_id?: IntFieldUpdateOperationsInput | number
    task_id?: IntFieldUpdateOperationsInput | number
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