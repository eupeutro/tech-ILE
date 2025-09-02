
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Terreiro
 * 
 */
export type Terreiro = $Result.DefaultSelection<Prisma.$TerreiroPayload>
/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Adm
 * 
 */
export type Adm = $Result.DefaultSelection<Prisma.$AdmPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Terreiros
 * const terreiros = await prisma.terreiro.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * // Fetch zero or more Terreiros
   * const terreiros = await prisma.terreiro.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * `prisma.terreiro`: Exposes CRUD operations for the **Terreiro** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Terreiros
    * const terreiros = await prisma.terreiro.findMany()
    * ```
    */
  get terreiro(): Prisma.TerreiroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.adm`: Exposes CRUD operations for the **Adm** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Adms
    * const adms = await prisma.adm.findMany()
    * ```
    */
  get adm(): Prisma.AdmDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Terreiro: 'Terreiro',
    Usuario: 'Usuario',
    Adm: 'Adm'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "terreiro" | "usuario" | "adm"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Terreiro: {
        payload: Prisma.$TerreiroPayload<ExtArgs>
        fields: Prisma.TerreiroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TerreiroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerreiroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TerreiroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerreiroPayload>
          }
          findFirst: {
            args: Prisma.TerreiroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerreiroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TerreiroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerreiroPayload>
          }
          findMany: {
            args: Prisma.TerreiroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerreiroPayload>[]
          }
          create: {
            args: Prisma.TerreiroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerreiroPayload>
          }
          createMany: {
            args: Prisma.TerreiroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TerreiroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerreiroPayload>
          }
          update: {
            args: Prisma.TerreiroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerreiroPayload>
          }
          deleteMany: {
            args: Prisma.TerreiroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TerreiroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TerreiroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerreiroPayload>
          }
          aggregate: {
            args: Prisma.TerreiroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTerreiro>
          }
          groupBy: {
            args: Prisma.TerreiroGroupByArgs<ExtArgs>
            result: $Utils.Optional<TerreiroGroupByOutputType>[]
          }
          count: {
            args: Prisma.TerreiroCountArgs<ExtArgs>
            result: $Utils.Optional<TerreiroCountAggregateOutputType> | number
          }
        }
      }
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Adm: {
        payload: Prisma.$AdmPayload<ExtArgs>
        fields: Prisma.AdmFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdmFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdmFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmPayload>
          }
          findFirst: {
            args: Prisma.AdmFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdmFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmPayload>
          }
          findMany: {
            args: Prisma.AdmFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmPayload>[]
          }
          create: {
            args: Prisma.AdmCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmPayload>
          }
          createMany: {
            args: Prisma.AdmCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AdmDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmPayload>
          }
          update: {
            args: Prisma.AdmUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmPayload>
          }
          deleteMany: {
            args: Prisma.AdmDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdmUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdmUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmPayload>
          }
          aggregate: {
            args: Prisma.AdmAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdm>
          }
          groupBy: {
            args: Prisma.AdmGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdmGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdmCountArgs<ExtArgs>
            result: $Utils.Optional<AdmCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    terreiro?: TerreiroOmit
    usuario?: UsuarioOmit
    adm?: AdmOmit
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
   * Count Type TerreiroCountOutputType
   */

  export type TerreiroCountOutputType = {
    usuarios: number
    adms: number
  }

  export type TerreiroCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | TerreiroCountOutputTypeCountUsuariosArgs
    adms?: boolean | TerreiroCountOutputTypeCountAdmsArgs
  }

  // Custom InputTypes
  /**
   * TerreiroCountOutputType without action
   */
  export type TerreiroCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TerreiroCountOutputType
     */
    select?: TerreiroCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TerreiroCountOutputType without action
   */
  export type TerreiroCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
  }

  /**
   * TerreiroCountOutputType without action
   */
  export type TerreiroCountOutputTypeCountAdmsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdmWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Terreiro
   */

  export type AggregateTerreiro = {
    _count: TerreiroCountAggregateOutputType | null
    _avg: TerreiroAvgAggregateOutputType | null
    _sum: TerreiroSumAggregateOutputType | null
    _min: TerreiroMinAggregateOutputType | null
    _max: TerreiroMaxAggregateOutputType | null
  }

  export type TerreiroAvgAggregateOutputType = {
    id_terreiro: number | null
  }

  export type TerreiroSumAggregateOutputType = {
    id_terreiro: number | null
  }

  export type TerreiroMinAggregateOutputType = {
    id_terreiro: number | null
    nome_terreiro: string | null
    cnpj_terreiro: string | null
    Cep_terreiro: string | null
    Tipo_terreiro: string | null
  }

  export type TerreiroMaxAggregateOutputType = {
    id_terreiro: number | null
    nome_terreiro: string | null
    cnpj_terreiro: string | null
    Cep_terreiro: string | null
    Tipo_terreiro: string | null
  }

  export type TerreiroCountAggregateOutputType = {
    id_terreiro: number
    nome_terreiro: number
    cnpj_terreiro: number
    Cep_terreiro: number
    Tipo_terreiro: number
    _all: number
  }


  export type TerreiroAvgAggregateInputType = {
    id_terreiro?: true
  }

  export type TerreiroSumAggregateInputType = {
    id_terreiro?: true
  }

  export type TerreiroMinAggregateInputType = {
    id_terreiro?: true
    nome_terreiro?: true
    cnpj_terreiro?: true
    Cep_terreiro?: true
    Tipo_terreiro?: true
  }

  export type TerreiroMaxAggregateInputType = {
    id_terreiro?: true
    nome_terreiro?: true
    cnpj_terreiro?: true
    Cep_terreiro?: true
    Tipo_terreiro?: true
  }

  export type TerreiroCountAggregateInputType = {
    id_terreiro?: true
    nome_terreiro?: true
    cnpj_terreiro?: true
    Cep_terreiro?: true
    Tipo_terreiro?: true
    _all?: true
  }

  export type TerreiroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Terreiro to aggregate.
     */
    where?: TerreiroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Terreiros to fetch.
     */
    orderBy?: TerreiroOrderByWithRelationInput | TerreiroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TerreiroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Terreiros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Terreiros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Terreiros
    **/
    _count?: true | TerreiroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TerreiroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TerreiroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TerreiroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TerreiroMaxAggregateInputType
  }

  export type GetTerreiroAggregateType<T extends TerreiroAggregateArgs> = {
        [P in keyof T & keyof AggregateTerreiro]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTerreiro[P]>
      : GetScalarType<T[P], AggregateTerreiro[P]>
  }




  export type TerreiroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TerreiroWhereInput
    orderBy?: TerreiroOrderByWithAggregationInput | TerreiroOrderByWithAggregationInput[]
    by: TerreiroScalarFieldEnum[] | TerreiroScalarFieldEnum
    having?: TerreiroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TerreiroCountAggregateInputType | true
    _avg?: TerreiroAvgAggregateInputType
    _sum?: TerreiroSumAggregateInputType
    _min?: TerreiroMinAggregateInputType
    _max?: TerreiroMaxAggregateInputType
  }

  export type TerreiroGroupByOutputType = {
    id_terreiro: number
    nome_terreiro: string
    cnpj_terreiro: string
    Cep_terreiro: string
    Tipo_terreiro: string | null
    _count: TerreiroCountAggregateOutputType | null
    _avg: TerreiroAvgAggregateOutputType | null
    _sum: TerreiroSumAggregateOutputType | null
    _min: TerreiroMinAggregateOutputType | null
    _max: TerreiroMaxAggregateOutputType | null
  }

  type GetTerreiroGroupByPayload<T extends TerreiroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TerreiroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TerreiroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TerreiroGroupByOutputType[P]>
            : GetScalarType<T[P], TerreiroGroupByOutputType[P]>
        }
      >
    >


  export type TerreiroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_terreiro?: boolean
    nome_terreiro?: boolean
    cnpj_terreiro?: boolean
    Cep_terreiro?: boolean
    Tipo_terreiro?: boolean
    usuarios?: boolean | Terreiro$usuariosArgs<ExtArgs>
    adms?: boolean | Terreiro$admsArgs<ExtArgs>
    _count?: boolean | TerreiroCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["terreiro"]>



  export type TerreiroSelectScalar = {
    id_terreiro?: boolean
    nome_terreiro?: boolean
    cnpj_terreiro?: boolean
    Cep_terreiro?: boolean
    Tipo_terreiro?: boolean
  }

  export type TerreiroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_terreiro" | "nome_terreiro" | "cnpj_terreiro" | "Cep_terreiro" | "Tipo_terreiro", ExtArgs["result"]["terreiro"]>
  export type TerreiroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | Terreiro$usuariosArgs<ExtArgs>
    adms?: boolean | Terreiro$admsArgs<ExtArgs>
    _count?: boolean | TerreiroCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TerreiroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Terreiro"
    objects: {
      usuarios: Prisma.$UsuarioPayload<ExtArgs>[]
      adms: Prisma.$AdmPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_terreiro: number
      nome_terreiro: string
      cnpj_terreiro: string
      Cep_terreiro: string
      Tipo_terreiro: string | null
    }, ExtArgs["result"]["terreiro"]>
    composites: {}
  }

  type TerreiroGetPayload<S extends boolean | null | undefined | TerreiroDefaultArgs> = $Result.GetResult<Prisma.$TerreiroPayload, S>

  type TerreiroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TerreiroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TerreiroCountAggregateInputType | true
    }

  export interface TerreiroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Terreiro'], meta: { name: 'Terreiro' } }
    /**
     * Find zero or one Terreiro that matches the filter.
     * @param {TerreiroFindUniqueArgs} args - Arguments to find a Terreiro
     * @example
     * // Get one Terreiro
     * const terreiro = await prisma.terreiro.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TerreiroFindUniqueArgs>(args: SelectSubset<T, TerreiroFindUniqueArgs<ExtArgs>>): Prisma__TerreiroClient<$Result.GetResult<Prisma.$TerreiroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Terreiro that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TerreiroFindUniqueOrThrowArgs} args - Arguments to find a Terreiro
     * @example
     * // Get one Terreiro
     * const terreiro = await prisma.terreiro.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TerreiroFindUniqueOrThrowArgs>(args: SelectSubset<T, TerreiroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TerreiroClient<$Result.GetResult<Prisma.$TerreiroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Terreiro that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TerreiroFindFirstArgs} args - Arguments to find a Terreiro
     * @example
     * // Get one Terreiro
     * const terreiro = await prisma.terreiro.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TerreiroFindFirstArgs>(args?: SelectSubset<T, TerreiroFindFirstArgs<ExtArgs>>): Prisma__TerreiroClient<$Result.GetResult<Prisma.$TerreiroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Terreiro that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TerreiroFindFirstOrThrowArgs} args - Arguments to find a Terreiro
     * @example
     * // Get one Terreiro
     * const terreiro = await prisma.terreiro.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TerreiroFindFirstOrThrowArgs>(args?: SelectSubset<T, TerreiroFindFirstOrThrowArgs<ExtArgs>>): Prisma__TerreiroClient<$Result.GetResult<Prisma.$TerreiroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Terreiros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TerreiroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Terreiros
     * const terreiros = await prisma.terreiro.findMany()
     * 
     * // Get first 10 Terreiros
     * const terreiros = await prisma.terreiro.findMany({ take: 10 })
     * 
     * // Only select the `id_terreiro`
     * const terreiroWithId_terreiroOnly = await prisma.terreiro.findMany({ select: { id_terreiro: true } })
     * 
     */
    findMany<T extends TerreiroFindManyArgs>(args?: SelectSubset<T, TerreiroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TerreiroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Terreiro.
     * @param {TerreiroCreateArgs} args - Arguments to create a Terreiro.
     * @example
     * // Create one Terreiro
     * const Terreiro = await prisma.terreiro.create({
     *   data: {
     *     // ... data to create a Terreiro
     *   }
     * })
     * 
     */
    create<T extends TerreiroCreateArgs>(args: SelectSubset<T, TerreiroCreateArgs<ExtArgs>>): Prisma__TerreiroClient<$Result.GetResult<Prisma.$TerreiroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Terreiros.
     * @param {TerreiroCreateManyArgs} args - Arguments to create many Terreiros.
     * @example
     * // Create many Terreiros
     * const terreiro = await prisma.terreiro.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TerreiroCreateManyArgs>(args?: SelectSubset<T, TerreiroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Terreiro.
     * @param {TerreiroDeleteArgs} args - Arguments to delete one Terreiro.
     * @example
     * // Delete one Terreiro
     * const Terreiro = await prisma.terreiro.delete({
     *   where: {
     *     // ... filter to delete one Terreiro
     *   }
     * })
     * 
     */
    delete<T extends TerreiroDeleteArgs>(args: SelectSubset<T, TerreiroDeleteArgs<ExtArgs>>): Prisma__TerreiroClient<$Result.GetResult<Prisma.$TerreiroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Terreiro.
     * @param {TerreiroUpdateArgs} args - Arguments to update one Terreiro.
     * @example
     * // Update one Terreiro
     * const terreiro = await prisma.terreiro.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TerreiroUpdateArgs>(args: SelectSubset<T, TerreiroUpdateArgs<ExtArgs>>): Prisma__TerreiroClient<$Result.GetResult<Prisma.$TerreiroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Terreiros.
     * @param {TerreiroDeleteManyArgs} args - Arguments to filter Terreiros to delete.
     * @example
     * // Delete a few Terreiros
     * const { count } = await prisma.terreiro.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TerreiroDeleteManyArgs>(args?: SelectSubset<T, TerreiroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Terreiros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TerreiroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Terreiros
     * const terreiro = await prisma.terreiro.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TerreiroUpdateManyArgs>(args: SelectSubset<T, TerreiroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Terreiro.
     * @param {TerreiroUpsertArgs} args - Arguments to update or create a Terreiro.
     * @example
     * // Update or create a Terreiro
     * const terreiro = await prisma.terreiro.upsert({
     *   create: {
     *     // ... data to create a Terreiro
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Terreiro we want to update
     *   }
     * })
     */
    upsert<T extends TerreiroUpsertArgs>(args: SelectSubset<T, TerreiroUpsertArgs<ExtArgs>>): Prisma__TerreiroClient<$Result.GetResult<Prisma.$TerreiroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Terreiros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TerreiroCountArgs} args - Arguments to filter Terreiros to count.
     * @example
     * // Count the number of Terreiros
     * const count = await prisma.terreiro.count({
     *   where: {
     *     // ... the filter for the Terreiros we want to count
     *   }
     * })
    **/
    count<T extends TerreiroCountArgs>(
      args?: Subset<T, TerreiroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TerreiroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Terreiro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TerreiroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TerreiroAggregateArgs>(args: Subset<T, TerreiroAggregateArgs>): Prisma.PrismaPromise<GetTerreiroAggregateType<T>>

    /**
     * Group by Terreiro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TerreiroGroupByArgs} args - Group by arguments.
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
      T extends TerreiroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TerreiroGroupByArgs['orderBy'] }
        : { orderBy?: TerreiroGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TerreiroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTerreiroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Terreiro model
   */
  readonly fields: TerreiroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Terreiro.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TerreiroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends Terreiro$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, Terreiro$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    adms<T extends Terreiro$admsArgs<ExtArgs> = {}>(args?: Subset<T, Terreiro$admsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdmPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Terreiro model
   */
  interface TerreiroFieldRefs {
    readonly id_terreiro: FieldRef<"Terreiro", 'Int'>
    readonly nome_terreiro: FieldRef<"Terreiro", 'String'>
    readonly cnpj_terreiro: FieldRef<"Terreiro", 'String'>
    readonly Cep_terreiro: FieldRef<"Terreiro", 'String'>
    readonly Tipo_terreiro: FieldRef<"Terreiro", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Terreiro findUnique
   */
  export type TerreiroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Terreiro
     */
    select?: TerreiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Terreiro
     */
    omit?: TerreiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerreiroInclude<ExtArgs> | null
    /**
     * Filter, which Terreiro to fetch.
     */
    where: TerreiroWhereUniqueInput
  }

  /**
   * Terreiro findUniqueOrThrow
   */
  export type TerreiroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Terreiro
     */
    select?: TerreiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Terreiro
     */
    omit?: TerreiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerreiroInclude<ExtArgs> | null
    /**
     * Filter, which Terreiro to fetch.
     */
    where: TerreiroWhereUniqueInput
  }

  /**
   * Terreiro findFirst
   */
  export type TerreiroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Terreiro
     */
    select?: TerreiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Terreiro
     */
    omit?: TerreiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerreiroInclude<ExtArgs> | null
    /**
     * Filter, which Terreiro to fetch.
     */
    where?: TerreiroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Terreiros to fetch.
     */
    orderBy?: TerreiroOrderByWithRelationInput | TerreiroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Terreiros.
     */
    cursor?: TerreiroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Terreiros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Terreiros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Terreiros.
     */
    distinct?: TerreiroScalarFieldEnum | TerreiroScalarFieldEnum[]
  }

  /**
   * Terreiro findFirstOrThrow
   */
  export type TerreiroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Terreiro
     */
    select?: TerreiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Terreiro
     */
    omit?: TerreiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerreiroInclude<ExtArgs> | null
    /**
     * Filter, which Terreiro to fetch.
     */
    where?: TerreiroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Terreiros to fetch.
     */
    orderBy?: TerreiroOrderByWithRelationInput | TerreiroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Terreiros.
     */
    cursor?: TerreiroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Terreiros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Terreiros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Terreiros.
     */
    distinct?: TerreiroScalarFieldEnum | TerreiroScalarFieldEnum[]
  }

  /**
   * Terreiro findMany
   */
  export type TerreiroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Terreiro
     */
    select?: TerreiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Terreiro
     */
    omit?: TerreiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerreiroInclude<ExtArgs> | null
    /**
     * Filter, which Terreiros to fetch.
     */
    where?: TerreiroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Terreiros to fetch.
     */
    orderBy?: TerreiroOrderByWithRelationInput | TerreiroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Terreiros.
     */
    cursor?: TerreiroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Terreiros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Terreiros.
     */
    skip?: number
    distinct?: TerreiroScalarFieldEnum | TerreiroScalarFieldEnum[]
  }

  /**
   * Terreiro create
   */
  export type TerreiroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Terreiro
     */
    select?: TerreiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Terreiro
     */
    omit?: TerreiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerreiroInclude<ExtArgs> | null
    /**
     * The data needed to create a Terreiro.
     */
    data: XOR<TerreiroCreateInput, TerreiroUncheckedCreateInput>
  }

  /**
   * Terreiro createMany
   */
  export type TerreiroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Terreiros.
     */
    data: TerreiroCreateManyInput | TerreiroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Terreiro update
   */
  export type TerreiroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Terreiro
     */
    select?: TerreiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Terreiro
     */
    omit?: TerreiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerreiroInclude<ExtArgs> | null
    /**
     * The data needed to update a Terreiro.
     */
    data: XOR<TerreiroUpdateInput, TerreiroUncheckedUpdateInput>
    /**
     * Choose, which Terreiro to update.
     */
    where: TerreiroWhereUniqueInput
  }

  /**
   * Terreiro updateMany
   */
  export type TerreiroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Terreiros.
     */
    data: XOR<TerreiroUpdateManyMutationInput, TerreiroUncheckedUpdateManyInput>
    /**
     * Filter which Terreiros to update
     */
    where?: TerreiroWhereInput
    /**
     * Limit how many Terreiros to update.
     */
    limit?: number
  }

  /**
   * Terreiro upsert
   */
  export type TerreiroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Terreiro
     */
    select?: TerreiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Terreiro
     */
    omit?: TerreiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerreiroInclude<ExtArgs> | null
    /**
     * The filter to search for the Terreiro to update in case it exists.
     */
    where: TerreiroWhereUniqueInput
    /**
     * In case the Terreiro found by the `where` argument doesn't exist, create a new Terreiro with this data.
     */
    create: XOR<TerreiroCreateInput, TerreiroUncheckedCreateInput>
    /**
     * In case the Terreiro was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TerreiroUpdateInput, TerreiroUncheckedUpdateInput>
  }

  /**
   * Terreiro delete
   */
  export type TerreiroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Terreiro
     */
    select?: TerreiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Terreiro
     */
    omit?: TerreiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerreiroInclude<ExtArgs> | null
    /**
     * Filter which Terreiro to delete.
     */
    where: TerreiroWhereUniqueInput
  }

  /**
   * Terreiro deleteMany
   */
  export type TerreiroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Terreiros to delete
     */
    where?: TerreiroWhereInput
    /**
     * Limit how many Terreiros to delete.
     */
    limit?: number
  }

  /**
   * Terreiro.usuarios
   */
  export type Terreiro$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    cursor?: UsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Terreiro.adms
   */
  export type Terreiro$admsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adm
     */
    select?: AdmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adm
     */
    omit?: AdmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmInclude<ExtArgs> | null
    where?: AdmWhereInput
    orderBy?: AdmOrderByWithRelationInput | AdmOrderByWithRelationInput[]
    cursor?: AdmWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdmScalarFieldEnum | AdmScalarFieldEnum[]
  }

  /**
   * Terreiro without action
   */
  export type TerreiroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Terreiro
     */
    select?: TerreiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Terreiro
     */
    omit?: TerreiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerreiroInclude<ExtArgs> | null
  }


  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id_usuario: number | null
    id_terreiro_fk: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id_usuario: number | null
    id_terreiro_fk: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id_usuario: number | null
    nome_usuario: string | null
    idade_usuario: Date | null
    email_usuario: string | null
    contato_usuario: string | null
    senha_usuario: string | null
    permicao_adm: boolean | null
    id_terreiro_fk: number | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id_usuario: number | null
    nome_usuario: string | null
    idade_usuario: Date | null
    email_usuario: string | null
    contato_usuario: string | null
    senha_usuario: string | null
    permicao_adm: boolean | null
    id_terreiro_fk: number | null
  }

  export type UsuarioCountAggregateOutputType = {
    id_usuario: number
    nome_usuario: number
    idade_usuario: number
    email_usuario: number
    contato_usuario: number
    senha_usuario: number
    permicao_adm: number
    id_terreiro_fk: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id_usuario?: true
    id_terreiro_fk?: true
  }

  export type UsuarioSumAggregateInputType = {
    id_usuario?: true
    id_terreiro_fk?: true
  }

  export type UsuarioMinAggregateInputType = {
    id_usuario?: true
    nome_usuario?: true
    idade_usuario?: true
    email_usuario?: true
    contato_usuario?: true
    senha_usuario?: true
    permicao_adm?: true
    id_terreiro_fk?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id_usuario?: true
    nome_usuario?: true
    idade_usuario?: true
    email_usuario?: true
    contato_usuario?: true
    senha_usuario?: true
    permicao_adm?: true
    id_terreiro_fk?: true
  }

  export type UsuarioCountAggregateInputType = {
    id_usuario?: true
    nome_usuario?: true
    idade_usuario?: true
    email_usuario?: true
    contato_usuario?: true
    senha_usuario?: true
    permicao_adm?: true
    id_terreiro_fk?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id_usuario: number
    nome_usuario: string
    idade_usuario: Date
    email_usuario: string
    contato_usuario: string
    senha_usuario: string
    permicao_adm: boolean | null
    id_terreiro_fk: number | null
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nome_usuario?: boolean
    idade_usuario?: boolean
    email_usuario?: boolean
    contato_usuario?: boolean
    senha_usuario?: boolean
    permicao_adm?: boolean
    id_terreiro_fk?: boolean
    terreiro?: boolean | Usuario$terreiroArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>



  export type UsuarioSelectScalar = {
    id_usuario?: boolean
    nome_usuario?: boolean
    idade_usuario?: boolean
    email_usuario?: boolean
    contato_usuario?: boolean
    senha_usuario?: boolean
    permicao_adm?: boolean
    id_terreiro_fk?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_usuario" | "nome_usuario" | "idade_usuario" | "email_usuario" | "contato_usuario" | "senha_usuario" | "permicao_adm" | "id_terreiro_fk", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    terreiro?: boolean | Usuario$terreiroArgs<ExtArgs>
  }

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      terreiro: Prisma.$TerreiroPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_usuario: number
      nome_usuario: string
      idade_usuario: Date
      email_usuario: string
      contato_usuario: string
      senha_usuario: string
      permicao_adm: boolean | null
      id_terreiro_fk: number | null
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.findMany({ select: { id_usuario: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    terreiro<T extends Usuario$terreiroArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$terreiroArgs<ExtArgs>>): Prisma__TerreiroClient<$Result.GetResult<Prisma.$TerreiroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id_usuario: FieldRef<"Usuario", 'Int'>
    readonly nome_usuario: FieldRef<"Usuario", 'String'>
    readonly idade_usuario: FieldRef<"Usuario", 'DateTime'>
    readonly email_usuario: FieldRef<"Usuario", 'String'>
    readonly contato_usuario: FieldRef<"Usuario", 'String'>
    readonly senha_usuario: FieldRef<"Usuario", 'String'>
    readonly permicao_adm: FieldRef<"Usuario", 'Boolean'>
    readonly id_terreiro_fk: FieldRef<"Usuario", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.terreiro
   */
  export type Usuario$terreiroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Terreiro
     */
    select?: TerreiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Terreiro
     */
    omit?: TerreiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerreiroInclude<ExtArgs> | null
    where?: TerreiroWhereInput
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Adm
   */

  export type AggregateAdm = {
    _count: AdmCountAggregateOutputType | null
    _avg: AdmAvgAggregateOutputType | null
    _sum: AdmSumAggregateOutputType | null
    _min: AdmMinAggregateOutputType | null
    _max: AdmMaxAggregateOutputType | null
  }

  export type AdmAvgAggregateOutputType = {
    id_adm: number | null
    id_terreiro_fk: number | null
  }

  export type AdmSumAggregateOutputType = {
    id_adm: number | null
    id_terreiro_fk: number | null
  }

  export type AdmMinAggregateOutputType = {
    id_adm: number | null
    nome_adm: string | null
    id_terreiro_fk: number | null
  }

  export type AdmMaxAggregateOutputType = {
    id_adm: number | null
    nome_adm: string | null
    id_terreiro_fk: number | null
  }

  export type AdmCountAggregateOutputType = {
    id_adm: number
    nome_adm: number
    id_terreiro_fk: number
    _all: number
  }


  export type AdmAvgAggregateInputType = {
    id_adm?: true
    id_terreiro_fk?: true
  }

  export type AdmSumAggregateInputType = {
    id_adm?: true
    id_terreiro_fk?: true
  }

  export type AdmMinAggregateInputType = {
    id_adm?: true
    nome_adm?: true
    id_terreiro_fk?: true
  }

  export type AdmMaxAggregateInputType = {
    id_adm?: true
    nome_adm?: true
    id_terreiro_fk?: true
  }

  export type AdmCountAggregateInputType = {
    id_adm?: true
    nome_adm?: true
    id_terreiro_fk?: true
    _all?: true
  }

  export type AdmAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Adm to aggregate.
     */
    where?: AdmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adms to fetch.
     */
    orderBy?: AdmOrderByWithRelationInput | AdmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Adms
    **/
    _count?: true | AdmCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdmAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdmSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdmMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdmMaxAggregateInputType
  }

  export type GetAdmAggregateType<T extends AdmAggregateArgs> = {
        [P in keyof T & keyof AggregateAdm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdm[P]>
      : GetScalarType<T[P], AggregateAdm[P]>
  }




  export type AdmGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdmWhereInput
    orderBy?: AdmOrderByWithAggregationInput | AdmOrderByWithAggregationInput[]
    by: AdmScalarFieldEnum[] | AdmScalarFieldEnum
    having?: AdmScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdmCountAggregateInputType | true
    _avg?: AdmAvgAggregateInputType
    _sum?: AdmSumAggregateInputType
    _min?: AdmMinAggregateInputType
    _max?: AdmMaxAggregateInputType
  }

  export type AdmGroupByOutputType = {
    id_adm: number
    nome_adm: string
    id_terreiro_fk: number | null
    _count: AdmCountAggregateOutputType | null
    _avg: AdmAvgAggregateOutputType | null
    _sum: AdmSumAggregateOutputType | null
    _min: AdmMinAggregateOutputType | null
    _max: AdmMaxAggregateOutputType | null
  }

  type GetAdmGroupByPayload<T extends AdmGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdmGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdmGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdmGroupByOutputType[P]>
            : GetScalarType<T[P], AdmGroupByOutputType[P]>
        }
      >
    >


  export type AdmSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_adm?: boolean
    nome_adm?: boolean
    id_terreiro_fk?: boolean
    terreiro?: boolean | Adm$terreiroArgs<ExtArgs>
  }, ExtArgs["result"]["adm"]>



  export type AdmSelectScalar = {
    id_adm?: boolean
    nome_adm?: boolean
    id_terreiro_fk?: boolean
  }

  export type AdmOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_adm" | "nome_adm" | "id_terreiro_fk", ExtArgs["result"]["adm"]>
  export type AdmInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    terreiro?: boolean | Adm$terreiroArgs<ExtArgs>
  }

  export type $AdmPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Adm"
    objects: {
      terreiro: Prisma.$TerreiroPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_adm: number
      nome_adm: string
      id_terreiro_fk: number | null
    }, ExtArgs["result"]["adm"]>
    composites: {}
  }

  type AdmGetPayload<S extends boolean | null | undefined | AdmDefaultArgs> = $Result.GetResult<Prisma.$AdmPayload, S>

  type AdmCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdmFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdmCountAggregateInputType | true
    }

  export interface AdmDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Adm'], meta: { name: 'Adm' } }
    /**
     * Find zero or one Adm that matches the filter.
     * @param {AdmFindUniqueArgs} args - Arguments to find a Adm
     * @example
     * // Get one Adm
     * const adm = await prisma.adm.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdmFindUniqueArgs>(args: SelectSubset<T, AdmFindUniqueArgs<ExtArgs>>): Prisma__AdmClient<$Result.GetResult<Prisma.$AdmPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Adm that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdmFindUniqueOrThrowArgs} args - Arguments to find a Adm
     * @example
     * // Get one Adm
     * const adm = await prisma.adm.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdmFindUniqueOrThrowArgs>(args: SelectSubset<T, AdmFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdmClient<$Result.GetResult<Prisma.$AdmPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Adm that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmFindFirstArgs} args - Arguments to find a Adm
     * @example
     * // Get one Adm
     * const adm = await prisma.adm.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdmFindFirstArgs>(args?: SelectSubset<T, AdmFindFirstArgs<ExtArgs>>): Prisma__AdmClient<$Result.GetResult<Prisma.$AdmPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Adm that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmFindFirstOrThrowArgs} args - Arguments to find a Adm
     * @example
     * // Get one Adm
     * const adm = await prisma.adm.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdmFindFirstOrThrowArgs>(args?: SelectSubset<T, AdmFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdmClient<$Result.GetResult<Prisma.$AdmPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Adms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Adms
     * const adms = await prisma.adm.findMany()
     * 
     * // Get first 10 Adms
     * const adms = await prisma.adm.findMany({ take: 10 })
     * 
     * // Only select the `id_adm`
     * const admWithId_admOnly = await prisma.adm.findMany({ select: { id_adm: true } })
     * 
     */
    findMany<T extends AdmFindManyArgs>(args?: SelectSubset<T, AdmFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdmPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Adm.
     * @param {AdmCreateArgs} args - Arguments to create a Adm.
     * @example
     * // Create one Adm
     * const Adm = await prisma.adm.create({
     *   data: {
     *     // ... data to create a Adm
     *   }
     * })
     * 
     */
    create<T extends AdmCreateArgs>(args: SelectSubset<T, AdmCreateArgs<ExtArgs>>): Prisma__AdmClient<$Result.GetResult<Prisma.$AdmPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Adms.
     * @param {AdmCreateManyArgs} args - Arguments to create many Adms.
     * @example
     * // Create many Adms
     * const adm = await prisma.adm.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdmCreateManyArgs>(args?: SelectSubset<T, AdmCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Adm.
     * @param {AdmDeleteArgs} args - Arguments to delete one Adm.
     * @example
     * // Delete one Adm
     * const Adm = await prisma.adm.delete({
     *   where: {
     *     // ... filter to delete one Adm
     *   }
     * })
     * 
     */
    delete<T extends AdmDeleteArgs>(args: SelectSubset<T, AdmDeleteArgs<ExtArgs>>): Prisma__AdmClient<$Result.GetResult<Prisma.$AdmPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Adm.
     * @param {AdmUpdateArgs} args - Arguments to update one Adm.
     * @example
     * // Update one Adm
     * const adm = await prisma.adm.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdmUpdateArgs>(args: SelectSubset<T, AdmUpdateArgs<ExtArgs>>): Prisma__AdmClient<$Result.GetResult<Prisma.$AdmPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Adms.
     * @param {AdmDeleteManyArgs} args - Arguments to filter Adms to delete.
     * @example
     * // Delete a few Adms
     * const { count } = await prisma.adm.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdmDeleteManyArgs>(args?: SelectSubset<T, AdmDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Adms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Adms
     * const adm = await prisma.adm.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdmUpdateManyArgs>(args: SelectSubset<T, AdmUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Adm.
     * @param {AdmUpsertArgs} args - Arguments to update or create a Adm.
     * @example
     * // Update or create a Adm
     * const adm = await prisma.adm.upsert({
     *   create: {
     *     // ... data to create a Adm
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Adm we want to update
     *   }
     * })
     */
    upsert<T extends AdmUpsertArgs>(args: SelectSubset<T, AdmUpsertArgs<ExtArgs>>): Prisma__AdmClient<$Result.GetResult<Prisma.$AdmPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Adms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmCountArgs} args - Arguments to filter Adms to count.
     * @example
     * // Count the number of Adms
     * const count = await prisma.adm.count({
     *   where: {
     *     // ... the filter for the Adms we want to count
     *   }
     * })
    **/
    count<T extends AdmCountArgs>(
      args?: Subset<T, AdmCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdmCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Adm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdmAggregateArgs>(args: Subset<T, AdmAggregateArgs>): Prisma.PrismaPromise<GetAdmAggregateType<T>>

    /**
     * Group by Adm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmGroupByArgs} args - Group by arguments.
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
      T extends AdmGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdmGroupByArgs['orderBy'] }
        : { orderBy?: AdmGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdmGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdmGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Adm model
   */
  readonly fields: AdmFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Adm.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdmClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    terreiro<T extends Adm$terreiroArgs<ExtArgs> = {}>(args?: Subset<T, Adm$terreiroArgs<ExtArgs>>): Prisma__TerreiroClient<$Result.GetResult<Prisma.$TerreiroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Adm model
   */
  interface AdmFieldRefs {
    readonly id_adm: FieldRef<"Adm", 'Int'>
    readonly nome_adm: FieldRef<"Adm", 'String'>
    readonly id_terreiro_fk: FieldRef<"Adm", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Adm findUnique
   */
  export type AdmFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adm
     */
    select?: AdmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adm
     */
    omit?: AdmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmInclude<ExtArgs> | null
    /**
     * Filter, which Adm to fetch.
     */
    where: AdmWhereUniqueInput
  }

  /**
   * Adm findUniqueOrThrow
   */
  export type AdmFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adm
     */
    select?: AdmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adm
     */
    omit?: AdmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmInclude<ExtArgs> | null
    /**
     * Filter, which Adm to fetch.
     */
    where: AdmWhereUniqueInput
  }

  /**
   * Adm findFirst
   */
  export type AdmFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adm
     */
    select?: AdmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adm
     */
    omit?: AdmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmInclude<ExtArgs> | null
    /**
     * Filter, which Adm to fetch.
     */
    where?: AdmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adms to fetch.
     */
    orderBy?: AdmOrderByWithRelationInput | AdmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Adms.
     */
    cursor?: AdmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Adms.
     */
    distinct?: AdmScalarFieldEnum | AdmScalarFieldEnum[]
  }

  /**
   * Adm findFirstOrThrow
   */
  export type AdmFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adm
     */
    select?: AdmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adm
     */
    omit?: AdmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmInclude<ExtArgs> | null
    /**
     * Filter, which Adm to fetch.
     */
    where?: AdmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adms to fetch.
     */
    orderBy?: AdmOrderByWithRelationInput | AdmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Adms.
     */
    cursor?: AdmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Adms.
     */
    distinct?: AdmScalarFieldEnum | AdmScalarFieldEnum[]
  }

  /**
   * Adm findMany
   */
  export type AdmFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adm
     */
    select?: AdmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adm
     */
    omit?: AdmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmInclude<ExtArgs> | null
    /**
     * Filter, which Adms to fetch.
     */
    where?: AdmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adms to fetch.
     */
    orderBy?: AdmOrderByWithRelationInput | AdmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Adms.
     */
    cursor?: AdmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adms.
     */
    skip?: number
    distinct?: AdmScalarFieldEnum | AdmScalarFieldEnum[]
  }

  /**
   * Adm create
   */
  export type AdmCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adm
     */
    select?: AdmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adm
     */
    omit?: AdmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmInclude<ExtArgs> | null
    /**
     * The data needed to create a Adm.
     */
    data: XOR<AdmCreateInput, AdmUncheckedCreateInput>
  }

  /**
   * Adm createMany
   */
  export type AdmCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Adms.
     */
    data: AdmCreateManyInput | AdmCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Adm update
   */
  export type AdmUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adm
     */
    select?: AdmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adm
     */
    omit?: AdmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmInclude<ExtArgs> | null
    /**
     * The data needed to update a Adm.
     */
    data: XOR<AdmUpdateInput, AdmUncheckedUpdateInput>
    /**
     * Choose, which Adm to update.
     */
    where: AdmWhereUniqueInput
  }

  /**
   * Adm updateMany
   */
  export type AdmUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Adms.
     */
    data: XOR<AdmUpdateManyMutationInput, AdmUncheckedUpdateManyInput>
    /**
     * Filter which Adms to update
     */
    where?: AdmWhereInput
    /**
     * Limit how many Adms to update.
     */
    limit?: number
  }

  /**
   * Adm upsert
   */
  export type AdmUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adm
     */
    select?: AdmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adm
     */
    omit?: AdmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmInclude<ExtArgs> | null
    /**
     * The filter to search for the Adm to update in case it exists.
     */
    where: AdmWhereUniqueInput
    /**
     * In case the Adm found by the `where` argument doesn't exist, create a new Adm with this data.
     */
    create: XOR<AdmCreateInput, AdmUncheckedCreateInput>
    /**
     * In case the Adm was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdmUpdateInput, AdmUncheckedUpdateInput>
  }

  /**
   * Adm delete
   */
  export type AdmDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adm
     */
    select?: AdmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adm
     */
    omit?: AdmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmInclude<ExtArgs> | null
    /**
     * Filter which Adm to delete.
     */
    where: AdmWhereUniqueInput
  }

  /**
   * Adm deleteMany
   */
  export type AdmDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Adms to delete
     */
    where?: AdmWhereInput
    /**
     * Limit how many Adms to delete.
     */
    limit?: number
  }

  /**
   * Adm.terreiro
   */
  export type Adm$terreiroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Terreiro
     */
    select?: TerreiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Terreiro
     */
    omit?: TerreiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerreiroInclude<ExtArgs> | null
    where?: TerreiroWhereInput
  }

  /**
   * Adm without action
   */
  export type AdmDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adm
     */
    select?: AdmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adm
     */
    omit?: AdmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmInclude<ExtArgs> | null
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


  export const TerreiroScalarFieldEnum: {
    id_terreiro: 'id_terreiro',
    nome_terreiro: 'nome_terreiro',
    cnpj_terreiro: 'cnpj_terreiro',
    Cep_terreiro: 'Cep_terreiro',
    Tipo_terreiro: 'Tipo_terreiro'
  };

  export type TerreiroScalarFieldEnum = (typeof TerreiroScalarFieldEnum)[keyof typeof TerreiroScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id_usuario: 'id_usuario',
    nome_usuario: 'nome_usuario',
    idade_usuario: 'idade_usuario',
    email_usuario: 'email_usuario',
    contato_usuario: 'contato_usuario',
    senha_usuario: 'senha_usuario',
    permicao_adm: 'permicao_adm',
    id_terreiro_fk: 'id_terreiro_fk'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const AdmScalarFieldEnum: {
    id_adm: 'id_adm',
    nome_adm: 'nome_adm',
    id_terreiro_fk: 'id_terreiro_fk'
  };

  export type AdmScalarFieldEnum = (typeof AdmScalarFieldEnum)[keyof typeof AdmScalarFieldEnum]


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


  export const TerreiroOrderByRelevanceFieldEnum: {
    nome_terreiro: 'nome_terreiro',
    cnpj_terreiro: 'cnpj_terreiro',
    Cep_terreiro: 'Cep_terreiro',
    Tipo_terreiro: 'Tipo_terreiro'
  };

  export type TerreiroOrderByRelevanceFieldEnum = (typeof TerreiroOrderByRelevanceFieldEnum)[keyof typeof TerreiroOrderByRelevanceFieldEnum]


  export const UsuarioOrderByRelevanceFieldEnum: {
    nome_usuario: 'nome_usuario',
    email_usuario: 'email_usuario',
    contato_usuario: 'contato_usuario',
    senha_usuario: 'senha_usuario'
  };

  export type UsuarioOrderByRelevanceFieldEnum = (typeof UsuarioOrderByRelevanceFieldEnum)[keyof typeof UsuarioOrderByRelevanceFieldEnum]


  export const AdmOrderByRelevanceFieldEnum: {
    nome_adm: 'nome_adm'
  };

  export type AdmOrderByRelevanceFieldEnum = (typeof AdmOrderByRelevanceFieldEnum)[keyof typeof AdmOrderByRelevanceFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type TerreiroWhereInput = {
    AND?: TerreiroWhereInput | TerreiroWhereInput[]
    OR?: TerreiroWhereInput[]
    NOT?: TerreiroWhereInput | TerreiroWhereInput[]
    id_terreiro?: IntFilter<"Terreiro"> | number
    nome_terreiro?: StringFilter<"Terreiro"> | string
    cnpj_terreiro?: StringFilter<"Terreiro"> | string
    Cep_terreiro?: StringFilter<"Terreiro"> | string
    Tipo_terreiro?: StringNullableFilter<"Terreiro"> | string | null
    usuarios?: UsuarioListRelationFilter
    adms?: AdmListRelationFilter
  }

  export type TerreiroOrderByWithRelationInput = {
    id_terreiro?: SortOrder
    nome_terreiro?: SortOrder
    cnpj_terreiro?: SortOrder
    Cep_terreiro?: SortOrder
    Tipo_terreiro?: SortOrderInput | SortOrder
    usuarios?: UsuarioOrderByRelationAggregateInput
    adms?: AdmOrderByRelationAggregateInput
    _relevance?: TerreiroOrderByRelevanceInput
  }

  export type TerreiroWhereUniqueInput = Prisma.AtLeast<{
    id_terreiro?: number
    AND?: TerreiroWhereInput | TerreiroWhereInput[]
    OR?: TerreiroWhereInput[]
    NOT?: TerreiroWhereInput | TerreiroWhereInput[]
    nome_terreiro?: StringFilter<"Terreiro"> | string
    cnpj_terreiro?: StringFilter<"Terreiro"> | string
    Cep_terreiro?: StringFilter<"Terreiro"> | string
    Tipo_terreiro?: StringNullableFilter<"Terreiro"> | string | null
    usuarios?: UsuarioListRelationFilter
    adms?: AdmListRelationFilter
  }, "id_terreiro">

  export type TerreiroOrderByWithAggregationInput = {
    id_terreiro?: SortOrder
    nome_terreiro?: SortOrder
    cnpj_terreiro?: SortOrder
    Cep_terreiro?: SortOrder
    Tipo_terreiro?: SortOrderInput | SortOrder
    _count?: TerreiroCountOrderByAggregateInput
    _avg?: TerreiroAvgOrderByAggregateInput
    _max?: TerreiroMaxOrderByAggregateInput
    _min?: TerreiroMinOrderByAggregateInput
    _sum?: TerreiroSumOrderByAggregateInput
  }

  export type TerreiroScalarWhereWithAggregatesInput = {
    AND?: TerreiroScalarWhereWithAggregatesInput | TerreiroScalarWhereWithAggregatesInput[]
    OR?: TerreiroScalarWhereWithAggregatesInput[]
    NOT?: TerreiroScalarWhereWithAggregatesInput | TerreiroScalarWhereWithAggregatesInput[]
    id_terreiro?: IntWithAggregatesFilter<"Terreiro"> | number
    nome_terreiro?: StringWithAggregatesFilter<"Terreiro"> | string
    cnpj_terreiro?: StringWithAggregatesFilter<"Terreiro"> | string
    Cep_terreiro?: StringWithAggregatesFilter<"Terreiro"> | string
    Tipo_terreiro?: StringNullableWithAggregatesFilter<"Terreiro"> | string | null
  }

  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id_usuario?: IntFilter<"Usuario"> | number
    nome_usuario?: StringFilter<"Usuario"> | string
    idade_usuario?: DateTimeFilter<"Usuario"> | Date | string
    email_usuario?: StringFilter<"Usuario"> | string
    contato_usuario?: StringFilter<"Usuario"> | string
    senha_usuario?: StringFilter<"Usuario"> | string
    permicao_adm?: BoolNullableFilter<"Usuario"> | boolean | null
    id_terreiro_fk?: IntNullableFilter<"Usuario"> | number | null
    terreiro?: XOR<TerreiroNullableScalarRelationFilter, TerreiroWhereInput> | null
  }

  export type UsuarioOrderByWithRelationInput = {
    id_usuario?: SortOrder
    nome_usuario?: SortOrder
    idade_usuario?: SortOrder
    email_usuario?: SortOrder
    contato_usuario?: SortOrder
    senha_usuario?: SortOrder
    permicao_adm?: SortOrderInput | SortOrder
    id_terreiro_fk?: SortOrderInput | SortOrder
    terreiro?: TerreiroOrderByWithRelationInput
    _relevance?: UsuarioOrderByRelevanceInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id_usuario?: number
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nome_usuario?: StringFilter<"Usuario"> | string
    idade_usuario?: DateTimeFilter<"Usuario"> | Date | string
    email_usuario?: StringFilter<"Usuario"> | string
    contato_usuario?: StringFilter<"Usuario"> | string
    senha_usuario?: StringFilter<"Usuario"> | string
    permicao_adm?: BoolNullableFilter<"Usuario"> | boolean | null
    id_terreiro_fk?: IntNullableFilter<"Usuario"> | number | null
    terreiro?: XOR<TerreiroNullableScalarRelationFilter, TerreiroWhereInput> | null
  }, "id_usuario">

  export type UsuarioOrderByWithAggregationInput = {
    id_usuario?: SortOrder
    nome_usuario?: SortOrder
    idade_usuario?: SortOrder
    email_usuario?: SortOrder
    contato_usuario?: SortOrder
    senha_usuario?: SortOrder
    permicao_adm?: SortOrderInput | SortOrder
    id_terreiro_fk?: SortOrderInput | SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id_usuario?: IntWithAggregatesFilter<"Usuario"> | number
    nome_usuario?: StringWithAggregatesFilter<"Usuario"> | string
    idade_usuario?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    email_usuario?: StringWithAggregatesFilter<"Usuario"> | string
    contato_usuario?: StringWithAggregatesFilter<"Usuario"> | string
    senha_usuario?: StringWithAggregatesFilter<"Usuario"> | string
    permicao_adm?: BoolNullableWithAggregatesFilter<"Usuario"> | boolean | null
    id_terreiro_fk?: IntNullableWithAggregatesFilter<"Usuario"> | number | null
  }

  export type AdmWhereInput = {
    AND?: AdmWhereInput | AdmWhereInput[]
    OR?: AdmWhereInput[]
    NOT?: AdmWhereInput | AdmWhereInput[]
    id_adm?: IntFilter<"Adm"> | number
    nome_adm?: StringFilter<"Adm"> | string
    id_terreiro_fk?: IntNullableFilter<"Adm"> | number | null
    terreiro?: XOR<TerreiroNullableScalarRelationFilter, TerreiroWhereInput> | null
  }

  export type AdmOrderByWithRelationInput = {
    id_adm?: SortOrder
    nome_adm?: SortOrder
    id_terreiro_fk?: SortOrderInput | SortOrder
    terreiro?: TerreiroOrderByWithRelationInput
    _relevance?: AdmOrderByRelevanceInput
  }

  export type AdmWhereUniqueInput = Prisma.AtLeast<{
    id_adm?: number
    AND?: AdmWhereInput | AdmWhereInput[]
    OR?: AdmWhereInput[]
    NOT?: AdmWhereInput | AdmWhereInput[]
    nome_adm?: StringFilter<"Adm"> | string
    id_terreiro_fk?: IntNullableFilter<"Adm"> | number | null
    terreiro?: XOR<TerreiroNullableScalarRelationFilter, TerreiroWhereInput> | null
  }, "id_adm">

  export type AdmOrderByWithAggregationInput = {
    id_adm?: SortOrder
    nome_adm?: SortOrder
    id_terreiro_fk?: SortOrderInput | SortOrder
    _count?: AdmCountOrderByAggregateInput
    _avg?: AdmAvgOrderByAggregateInput
    _max?: AdmMaxOrderByAggregateInput
    _min?: AdmMinOrderByAggregateInput
    _sum?: AdmSumOrderByAggregateInput
  }

  export type AdmScalarWhereWithAggregatesInput = {
    AND?: AdmScalarWhereWithAggregatesInput | AdmScalarWhereWithAggregatesInput[]
    OR?: AdmScalarWhereWithAggregatesInput[]
    NOT?: AdmScalarWhereWithAggregatesInput | AdmScalarWhereWithAggregatesInput[]
    id_adm?: IntWithAggregatesFilter<"Adm"> | number
    nome_adm?: StringWithAggregatesFilter<"Adm"> | string
    id_terreiro_fk?: IntNullableWithAggregatesFilter<"Adm"> | number | null
  }

  export type TerreiroCreateInput = {
    nome_terreiro: string
    cnpj_terreiro: string
    Cep_terreiro: string
    Tipo_terreiro?: string | null
    usuarios?: UsuarioCreateNestedManyWithoutTerreiroInput
    adms?: AdmCreateNestedManyWithoutTerreiroInput
  }

  export type TerreiroUncheckedCreateInput = {
    id_terreiro?: number
    nome_terreiro: string
    cnpj_terreiro: string
    Cep_terreiro: string
    Tipo_terreiro?: string | null
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutTerreiroInput
    adms?: AdmUncheckedCreateNestedManyWithoutTerreiroInput
  }

  export type TerreiroUpdateInput = {
    nome_terreiro?: StringFieldUpdateOperationsInput | string
    cnpj_terreiro?: StringFieldUpdateOperationsInput | string
    Cep_terreiro?: StringFieldUpdateOperationsInput | string
    Tipo_terreiro?: NullableStringFieldUpdateOperationsInput | string | null
    usuarios?: UsuarioUpdateManyWithoutTerreiroNestedInput
    adms?: AdmUpdateManyWithoutTerreiroNestedInput
  }

  export type TerreiroUncheckedUpdateInput = {
    id_terreiro?: IntFieldUpdateOperationsInput | number
    nome_terreiro?: StringFieldUpdateOperationsInput | string
    cnpj_terreiro?: StringFieldUpdateOperationsInput | string
    Cep_terreiro?: StringFieldUpdateOperationsInput | string
    Tipo_terreiro?: NullableStringFieldUpdateOperationsInput | string | null
    usuarios?: UsuarioUncheckedUpdateManyWithoutTerreiroNestedInput
    adms?: AdmUncheckedUpdateManyWithoutTerreiroNestedInput
  }

  export type TerreiroCreateManyInput = {
    id_terreiro?: number
    nome_terreiro: string
    cnpj_terreiro: string
    Cep_terreiro: string
    Tipo_terreiro?: string | null
  }

  export type TerreiroUpdateManyMutationInput = {
    nome_terreiro?: StringFieldUpdateOperationsInput | string
    cnpj_terreiro?: StringFieldUpdateOperationsInput | string
    Cep_terreiro?: StringFieldUpdateOperationsInput | string
    Tipo_terreiro?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TerreiroUncheckedUpdateManyInput = {
    id_terreiro?: IntFieldUpdateOperationsInput | number
    nome_terreiro?: StringFieldUpdateOperationsInput | string
    cnpj_terreiro?: StringFieldUpdateOperationsInput | string
    Cep_terreiro?: StringFieldUpdateOperationsInput | string
    Tipo_terreiro?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsuarioCreateInput = {
    nome_usuario: string
    idade_usuario: Date | string
    email_usuario: string
    contato_usuario: string
    senha_usuario: string
    permicao_adm?: boolean | null
    terreiro?: TerreiroCreateNestedOneWithoutUsuariosInput
  }

  export type UsuarioUncheckedCreateInput = {
    id_usuario?: number
    nome_usuario: string
    idade_usuario: Date | string
    email_usuario: string
    contato_usuario: string
    senha_usuario: string
    permicao_adm?: boolean | null
    id_terreiro_fk?: number | null
  }

  export type UsuarioUpdateInput = {
    nome_usuario?: StringFieldUpdateOperationsInput | string
    idade_usuario?: DateTimeFieldUpdateOperationsInput | Date | string
    email_usuario?: StringFieldUpdateOperationsInput | string
    contato_usuario?: StringFieldUpdateOperationsInput | string
    senha_usuario?: StringFieldUpdateOperationsInput | string
    permicao_adm?: NullableBoolFieldUpdateOperationsInput | boolean | null
    terreiro?: TerreiroUpdateOneWithoutUsuariosNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nome_usuario?: StringFieldUpdateOperationsInput | string
    idade_usuario?: DateTimeFieldUpdateOperationsInput | Date | string
    email_usuario?: StringFieldUpdateOperationsInput | string
    contato_usuario?: StringFieldUpdateOperationsInput | string
    senha_usuario?: StringFieldUpdateOperationsInput | string
    permicao_adm?: NullableBoolFieldUpdateOperationsInput | boolean | null
    id_terreiro_fk?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UsuarioCreateManyInput = {
    id_usuario?: number
    nome_usuario: string
    idade_usuario: Date | string
    email_usuario: string
    contato_usuario: string
    senha_usuario: string
    permicao_adm?: boolean | null
    id_terreiro_fk?: number | null
  }

  export type UsuarioUpdateManyMutationInput = {
    nome_usuario?: StringFieldUpdateOperationsInput | string
    idade_usuario?: DateTimeFieldUpdateOperationsInput | Date | string
    email_usuario?: StringFieldUpdateOperationsInput | string
    contato_usuario?: StringFieldUpdateOperationsInput | string
    senha_usuario?: StringFieldUpdateOperationsInput | string
    permicao_adm?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nome_usuario?: StringFieldUpdateOperationsInput | string
    idade_usuario?: DateTimeFieldUpdateOperationsInput | Date | string
    email_usuario?: StringFieldUpdateOperationsInput | string
    contato_usuario?: StringFieldUpdateOperationsInput | string
    senha_usuario?: StringFieldUpdateOperationsInput | string
    permicao_adm?: NullableBoolFieldUpdateOperationsInput | boolean | null
    id_terreiro_fk?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AdmCreateInput = {
    nome_adm: string
    terreiro?: TerreiroCreateNestedOneWithoutAdmsInput
  }

  export type AdmUncheckedCreateInput = {
    id_adm?: number
    nome_adm: string
    id_terreiro_fk?: number | null
  }

  export type AdmUpdateInput = {
    nome_adm?: StringFieldUpdateOperationsInput | string
    terreiro?: TerreiroUpdateOneWithoutAdmsNestedInput
  }

  export type AdmUncheckedUpdateInput = {
    id_adm?: IntFieldUpdateOperationsInput | number
    nome_adm?: StringFieldUpdateOperationsInput | string
    id_terreiro_fk?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AdmCreateManyInput = {
    id_adm?: number
    nome_adm: string
    id_terreiro_fk?: number | null
  }

  export type AdmUpdateManyMutationInput = {
    nome_adm?: StringFieldUpdateOperationsInput | string
  }

  export type AdmUncheckedUpdateManyInput = {
    id_adm?: IntFieldUpdateOperationsInput | number
    nome_adm?: StringFieldUpdateOperationsInput | string
    id_terreiro_fk?: NullableIntFieldUpdateOperationsInput | number | null
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

  export type UsuarioListRelationFilter = {
    every?: UsuarioWhereInput
    some?: UsuarioWhereInput
    none?: UsuarioWhereInput
  }

  export type AdmListRelationFilter = {
    every?: AdmWhereInput
    some?: AdmWhereInput
    none?: AdmWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UsuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdmOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TerreiroOrderByRelevanceInput = {
    fields: TerreiroOrderByRelevanceFieldEnum | TerreiroOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TerreiroCountOrderByAggregateInput = {
    id_terreiro?: SortOrder
    nome_terreiro?: SortOrder
    cnpj_terreiro?: SortOrder
    Cep_terreiro?: SortOrder
    Tipo_terreiro?: SortOrder
  }

  export type TerreiroAvgOrderByAggregateInput = {
    id_terreiro?: SortOrder
  }

  export type TerreiroMaxOrderByAggregateInput = {
    id_terreiro?: SortOrder
    nome_terreiro?: SortOrder
    cnpj_terreiro?: SortOrder
    Cep_terreiro?: SortOrder
    Tipo_terreiro?: SortOrder
  }

  export type TerreiroMinOrderByAggregateInput = {
    id_terreiro?: SortOrder
    nome_terreiro?: SortOrder
    cnpj_terreiro?: SortOrder
    Cep_terreiro?: SortOrder
    Tipo_terreiro?: SortOrder
  }

  export type TerreiroSumOrderByAggregateInput = {
    id_terreiro?: SortOrder
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

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type TerreiroNullableScalarRelationFilter = {
    is?: TerreiroWhereInput | null
    isNot?: TerreiroWhereInput | null
  }

  export type UsuarioOrderByRelevanceInput = {
    fields: UsuarioOrderByRelevanceFieldEnum | UsuarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsuarioCountOrderByAggregateInput = {
    id_usuario?: SortOrder
    nome_usuario?: SortOrder
    idade_usuario?: SortOrder
    email_usuario?: SortOrder
    contato_usuario?: SortOrder
    senha_usuario?: SortOrder
    permicao_adm?: SortOrder
    id_terreiro_fk?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id_usuario?: SortOrder
    id_terreiro_fk?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id_usuario?: SortOrder
    nome_usuario?: SortOrder
    idade_usuario?: SortOrder
    email_usuario?: SortOrder
    contato_usuario?: SortOrder
    senha_usuario?: SortOrder
    permicao_adm?: SortOrder
    id_terreiro_fk?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id_usuario?: SortOrder
    nome_usuario?: SortOrder
    idade_usuario?: SortOrder
    email_usuario?: SortOrder
    contato_usuario?: SortOrder
    senha_usuario?: SortOrder
    permicao_adm?: SortOrder
    id_terreiro_fk?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id_usuario?: SortOrder
    id_terreiro_fk?: SortOrder
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

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type AdmOrderByRelevanceInput = {
    fields: AdmOrderByRelevanceFieldEnum | AdmOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AdmCountOrderByAggregateInput = {
    id_adm?: SortOrder
    nome_adm?: SortOrder
    id_terreiro_fk?: SortOrder
  }

  export type AdmAvgOrderByAggregateInput = {
    id_adm?: SortOrder
    id_terreiro_fk?: SortOrder
  }

  export type AdmMaxOrderByAggregateInput = {
    id_adm?: SortOrder
    nome_adm?: SortOrder
    id_terreiro_fk?: SortOrder
  }

  export type AdmMinOrderByAggregateInput = {
    id_adm?: SortOrder
    nome_adm?: SortOrder
    id_terreiro_fk?: SortOrder
  }

  export type AdmSumOrderByAggregateInput = {
    id_adm?: SortOrder
    id_terreiro_fk?: SortOrder
  }

  export type UsuarioCreateNestedManyWithoutTerreiroInput = {
    create?: XOR<UsuarioCreateWithoutTerreiroInput, UsuarioUncheckedCreateWithoutTerreiroInput> | UsuarioCreateWithoutTerreiroInput[] | UsuarioUncheckedCreateWithoutTerreiroInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutTerreiroInput | UsuarioCreateOrConnectWithoutTerreiroInput[]
    createMany?: UsuarioCreateManyTerreiroInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type AdmCreateNestedManyWithoutTerreiroInput = {
    create?: XOR<AdmCreateWithoutTerreiroInput, AdmUncheckedCreateWithoutTerreiroInput> | AdmCreateWithoutTerreiroInput[] | AdmUncheckedCreateWithoutTerreiroInput[]
    connectOrCreate?: AdmCreateOrConnectWithoutTerreiroInput | AdmCreateOrConnectWithoutTerreiroInput[]
    createMany?: AdmCreateManyTerreiroInputEnvelope
    connect?: AdmWhereUniqueInput | AdmWhereUniqueInput[]
  }

  export type UsuarioUncheckedCreateNestedManyWithoutTerreiroInput = {
    create?: XOR<UsuarioCreateWithoutTerreiroInput, UsuarioUncheckedCreateWithoutTerreiroInput> | UsuarioCreateWithoutTerreiroInput[] | UsuarioUncheckedCreateWithoutTerreiroInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutTerreiroInput | UsuarioCreateOrConnectWithoutTerreiroInput[]
    createMany?: UsuarioCreateManyTerreiroInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type AdmUncheckedCreateNestedManyWithoutTerreiroInput = {
    create?: XOR<AdmCreateWithoutTerreiroInput, AdmUncheckedCreateWithoutTerreiroInput> | AdmCreateWithoutTerreiroInput[] | AdmUncheckedCreateWithoutTerreiroInput[]
    connectOrCreate?: AdmCreateOrConnectWithoutTerreiroInput | AdmCreateOrConnectWithoutTerreiroInput[]
    createMany?: AdmCreateManyTerreiroInputEnvelope
    connect?: AdmWhereUniqueInput | AdmWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UsuarioUpdateManyWithoutTerreiroNestedInput = {
    create?: XOR<UsuarioCreateWithoutTerreiroInput, UsuarioUncheckedCreateWithoutTerreiroInput> | UsuarioCreateWithoutTerreiroInput[] | UsuarioUncheckedCreateWithoutTerreiroInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutTerreiroInput | UsuarioCreateOrConnectWithoutTerreiroInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutTerreiroInput | UsuarioUpsertWithWhereUniqueWithoutTerreiroInput[]
    createMany?: UsuarioCreateManyTerreiroInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutTerreiroInput | UsuarioUpdateWithWhereUniqueWithoutTerreiroInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutTerreiroInput | UsuarioUpdateManyWithWhereWithoutTerreiroInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type AdmUpdateManyWithoutTerreiroNestedInput = {
    create?: XOR<AdmCreateWithoutTerreiroInput, AdmUncheckedCreateWithoutTerreiroInput> | AdmCreateWithoutTerreiroInput[] | AdmUncheckedCreateWithoutTerreiroInput[]
    connectOrCreate?: AdmCreateOrConnectWithoutTerreiroInput | AdmCreateOrConnectWithoutTerreiroInput[]
    upsert?: AdmUpsertWithWhereUniqueWithoutTerreiroInput | AdmUpsertWithWhereUniqueWithoutTerreiroInput[]
    createMany?: AdmCreateManyTerreiroInputEnvelope
    set?: AdmWhereUniqueInput | AdmWhereUniqueInput[]
    disconnect?: AdmWhereUniqueInput | AdmWhereUniqueInput[]
    delete?: AdmWhereUniqueInput | AdmWhereUniqueInput[]
    connect?: AdmWhereUniqueInput | AdmWhereUniqueInput[]
    update?: AdmUpdateWithWhereUniqueWithoutTerreiroInput | AdmUpdateWithWhereUniqueWithoutTerreiroInput[]
    updateMany?: AdmUpdateManyWithWhereWithoutTerreiroInput | AdmUpdateManyWithWhereWithoutTerreiroInput[]
    deleteMany?: AdmScalarWhereInput | AdmScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsuarioUncheckedUpdateManyWithoutTerreiroNestedInput = {
    create?: XOR<UsuarioCreateWithoutTerreiroInput, UsuarioUncheckedCreateWithoutTerreiroInput> | UsuarioCreateWithoutTerreiroInput[] | UsuarioUncheckedCreateWithoutTerreiroInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutTerreiroInput | UsuarioCreateOrConnectWithoutTerreiroInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutTerreiroInput | UsuarioUpsertWithWhereUniqueWithoutTerreiroInput[]
    createMany?: UsuarioCreateManyTerreiroInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutTerreiroInput | UsuarioUpdateWithWhereUniqueWithoutTerreiroInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutTerreiroInput | UsuarioUpdateManyWithWhereWithoutTerreiroInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type AdmUncheckedUpdateManyWithoutTerreiroNestedInput = {
    create?: XOR<AdmCreateWithoutTerreiroInput, AdmUncheckedCreateWithoutTerreiroInput> | AdmCreateWithoutTerreiroInput[] | AdmUncheckedCreateWithoutTerreiroInput[]
    connectOrCreate?: AdmCreateOrConnectWithoutTerreiroInput | AdmCreateOrConnectWithoutTerreiroInput[]
    upsert?: AdmUpsertWithWhereUniqueWithoutTerreiroInput | AdmUpsertWithWhereUniqueWithoutTerreiroInput[]
    createMany?: AdmCreateManyTerreiroInputEnvelope
    set?: AdmWhereUniqueInput | AdmWhereUniqueInput[]
    disconnect?: AdmWhereUniqueInput | AdmWhereUniqueInput[]
    delete?: AdmWhereUniqueInput | AdmWhereUniqueInput[]
    connect?: AdmWhereUniqueInput | AdmWhereUniqueInput[]
    update?: AdmUpdateWithWhereUniqueWithoutTerreiroInput | AdmUpdateWithWhereUniqueWithoutTerreiroInput[]
    updateMany?: AdmUpdateManyWithWhereWithoutTerreiroInput | AdmUpdateManyWithWhereWithoutTerreiroInput[]
    deleteMany?: AdmScalarWhereInput | AdmScalarWhereInput[]
  }

  export type TerreiroCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<TerreiroCreateWithoutUsuariosInput, TerreiroUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: TerreiroCreateOrConnectWithoutUsuariosInput
    connect?: TerreiroWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type TerreiroUpdateOneWithoutUsuariosNestedInput = {
    create?: XOR<TerreiroCreateWithoutUsuariosInput, TerreiroUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: TerreiroCreateOrConnectWithoutUsuariosInput
    upsert?: TerreiroUpsertWithoutUsuariosInput
    disconnect?: TerreiroWhereInput | boolean
    delete?: TerreiroWhereInput | boolean
    connect?: TerreiroWhereUniqueInput
    update?: XOR<XOR<TerreiroUpdateToOneWithWhereWithoutUsuariosInput, TerreiroUpdateWithoutUsuariosInput>, TerreiroUncheckedUpdateWithoutUsuariosInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TerreiroCreateNestedOneWithoutAdmsInput = {
    create?: XOR<TerreiroCreateWithoutAdmsInput, TerreiroUncheckedCreateWithoutAdmsInput>
    connectOrCreate?: TerreiroCreateOrConnectWithoutAdmsInput
    connect?: TerreiroWhereUniqueInput
  }

  export type TerreiroUpdateOneWithoutAdmsNestedInput = {
    create?: XOR<TerreiroCreateWithoutAdmsInput, TerreiroUncheckedCreateWithoutAdmsInput>
    connectOrCreate?: TerreiroCreateOrConnectWithoutAdmsInput
    upsert?: TerreiroUpsertWithoutAdmsInput
    disconnect?: TerreiroWhereInput | boolean
    delete?: TerreiroWhereInput | boolean
    connect?: TerreiroWhereUniqueInput
    update?: XOR<XOR<TerreiroUpdateToOneWithWhereWithoutAdmsInput, TerreiroUpdateWithoutAdmsInput>, TerreiroUncheckedUpdateWithoutAdmsInput>
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type UsuarioCreateWithoutTerreiroInput = {
    nome_usuario: string
    idade_usuario: Date | string
    email_usuario: string
    contato_usuario: string
    senha_usuario: string
    permicao_adm?: boolean | null
  }

  export type UsuarioUncheckedCreateWithoutTerreiroInput = {
    id_usuario?: number
    nome_usuario: string
    idade_usuario: Date | string
    email_usuario: string
    contato_usuario: string
    senha_usuario: string
    permicao_adm?: boolean | null
  }

  export type UsuarioCreateOrConnectWithoutTerreiroInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutTerreiroInput, UsuarioUncheckedCreateWithoutTerreiroInput>
  }

  export type UsuarioCreateManyTerreiroInputEnvelope = {
    data: UsuarioCreateManyTerreiroInput | UsuarioCreateManyTerreiroInput[]
    skipDuplicates?: boolean
  }

  export type AdmCreateWithoutTerreiroInput = {
    nome_adm: string
  }

  export type AdmUncheckedCreateWithoutTerreiroInput = {
    id_adm?: number
    nome_adm: string
  }

  export type AdmCreateOrConnectWithoutTerreiroInput = {
    where: AdmWhereUniqueInput
    create: XOR<AdmCreateWithoutTerreiroInput, AdmUncheckedCreateWithoutTerreiroInput>
  }

  export type AdmCreateManyTerreiroInputEnvelope = {
    data: AdmCreateManyTerreiroInput | AdmCreateManyTerreiroInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithWhereUniqueWithoutTerreiroInput = {
    where: UsuarioWhereUniqueInput
    update: XOR<UsuarioUpdateWithoutTerreiroInput, UsuarioUncheckedUpdateWithoutTerreiroInput>
    create: XOR<UsuarioCreateWithoutTerreiroInput, UsuarioUncheckedCreateWithoutTerreiroInput>
  }

  export type UsuarioUpdateWithWhereUniqueWithoutTerreiroInput = {
    where: UsuarioWhereUniqueInput
    data: XOR<UsuarioUpdateWithoutTerreiroInput, UsuarioUncheckedUpdateWithoutTerreiroInput>
  }

  export type UsuarioUpdateManyWithWhereWithoutTerreiroInput = {
    where: UsuarioScalarWhereInput
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyWithoutTerreiroInput>
  }

  export type UsuarioScalarWhereInput = {
    AND?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    OR?: UsuarioScalarWhereInput[]
    NOT?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    id_usuario?: IntFilter<"Usuario"> | number
    nome_usuario?: StringFilter<"Usuario"> | string
    idade_usuario?: DateTimeFilter<"Usuario"> | Date | string
    email_usuario?: StringFilter<"Usuario"> | string
    contato_usuario?: StringFilter<"Usuario"> | string
    senha_usuario?: StringFilter<"Usuario"> | string
    permicao_adm?: BoolNullableFilter<"Usuario"> | boolean | null
    id_terreiro_fk?: IntNullableFilter<"Usuario"> | number | null
  }

  export type AdmUpsertWithWhereUniqueWithoutTerreiroInput = {
    where: AdmWhereUniqueInput
    update: XOR<AdmUpdateWithoutTerreiroInput, AdmUncheckedUpdateWithoutTerreiroInput>
    create: XOR<AdmCreateWithoutTerreiroInput, AdmUncheckedCreateWithoutTerreiroInput>
  }

  export type AdmUpdateWithWhereUniqueWithoutTerreiroInput = {
    where: AdmWhereUniqueInput
    data: XOR<AdmUpdateWithoutTerreiroInput, AdmUncheckedUpdateWithoutTerreiroInput>
  }

  export type AdmUpdateManyWithWhereWithoutTerreiroInput = {
    where: AdmScalarWhereInput
    data: XOR<AdmUpdateManyMutationInput, AdmUncheckedUpdateManyWithoutTerreiroInput>
  }

  export type AdmScalarWhereInput = {
    AND?: AdmScalarWhereInput | AdmScalarWhereInput[]
    OR?: AdmScalarWhereInput[]
    NOT?: AdmScalarWhereInput | AdmScalarWhereInput[]
    id_adm?: IntFilter<"Adm"> | number
    nome_adm?: StringFilter<"Adm"> | string
    id_terreiro_fk?: IntNullableFilter<"Adm"> | number | null
  }

  export type TerreiroCreateWithoutUsuariosInput = {
    nome_terreiro: string
    cnpj_terreiro: string
    Cep_terreiro: string
    Tipo_terreiro?: string | null
    adms?: AdmCreateNestedManyWithoutTerreiroInput
  }

  export type TerreiroUncheckedCreateWithoutUsuariosInput = {
    id_terreiro?: number
    nome_terreiro: string
    cnpj_terreiro: string
    Cep_terreiro: string
    Tipo_terreiro?: string | null
    adms?: AdmUncheckedCreateNestedManyWithoutTerreiroInput
  }

  export type TerreiroCreateOrConnectWithoutUsuariosInput = {
    where: TerreiroWhereUniqueInput
    create: XOR<TerreiroCreateWithoutUsuariosInput, TerreiroUncheckedCreateWithoutUsuariosInput>
  }

  export type TerreiroUpsertWithoutUsuariosInput = {
    update: XOR<TerreiroUpdateWithoutUsuariosInput, TerreiroUncheckedUpdateWithoutUsuariosInput>
    create: XOR<TerreiroCreateWithoutUsuariosInput, TerreiroUncheckedCreateWithoutUsuariosInput>
    where?: TerreiroWhereInput
  }

  export type TerreiroUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: TerreiroWhereInput
    data: XOR<TerreiroUpdateWithoutUsuariosInput, TerreiroUncheckedUpdateWithoutUsuariosInput>
  }

  export type TerreiroUpdateWithoutUsuariosInput = {
    nome_terreiro?: StringFieldUpdateOperationsInput | string
    cnpj_terreiro?: StringFieldUpdateOperationsInput | string
    Cep_terreiro?: StringFieldUpdateOperationsInput | string
    Tipo_terreiro?: NullableStringFieldUpdateOperationsInput | string | null
    adms?: AdmUpdateManyWithoutTerreiroNestedInput
  }

  export type TerreiroUncheckedUpdateWithoutUsuariosInput = {
    id_terreiro?: IntFieldUpdateOperationsInput | number
    nome_terreiro?: StringFieldUpdateOperationsInput | string
    cnpj_terreiro?: StringFieldUpdateOperationsInput | string
    Cep_terreiro?: StringFieldUpdateOperationsInput | string
    Tipo_terreiro?: NullableStringFieldUpdateOperationsInput | string | null
    adms?: AdmUncheckedUpdateManyWithoutTerreiroNestedInput
  }

  export type TerreiroCreateWithoutAdmsInput = {
    nome_terreiro: string
    cnpj_terreiro: string
    Cep_terreiro: string
    Tipo_terreiro?: string | null
    usuarios?: UsuarioCreateNestedManyWithoutTerreiroInput
  }

  export type TerreiroUncheckedCreateWithoutAdmsInput = {
    id_terreiro?: number
    nome_terreiro: string
    cnpj_terreiro: string
    Cep_terreiro: string
    Tipo_terreiro?: string | null
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutTerreiroInput
  }

  export type TerreiroCreateOrConnectWithoutAdmsInput = {
    where: TerreiroWhereUniqueInput
    create: XOR<TerreiroCreateWithoutAdmsInput, TerreiroUncheckedCreateWithoutAdmsInput>
  }

  export type TerreiroUpsertWithoutAdmsInput = {
    update: XOR<TerreiroUpdateWithoutAdmsInput, TerreiroUncheckedUpdateWithoutAdmsInput>
    create: XOR<TerreiroCreateWithoutAdmsInput, TerreiroUncheckedCreateWithoutAdmsInput>
    where?: TerreiroWhereInput
  }

  export type TerreiroUpdateToOneWithWhereWithoutAdmsInput = {
    where?: TerreiroWhereInput
    data: XOR<TerreiroUpdateWithoutAdmsInput, TerreiroUncheckedUpdateWithoutAdmsInput>
  }

  export type TerreiroUpdateWithoutAdmsInput = {
    nome_terreiro?: StringFieldUpdateOperationsInput | string
    cnpj_terreiro?: StringFieldUpdateOperationsInput | string
    Cep_terreiro?: StringFieldUpdateOperationsInput | string
    Tipo_terreiro?: NullableStringFieldUpdateOperationsInput | string | null
    usuarios?: UsuarioUpdateManyWithoutTerreiroNestedInput
  }

  export type TerreiroUncheckedUpdateWithoutAdmsInput = {
    id_terreiro?: IntFieldUpdateOperationsInput | number
    nome_terreiro?: StringFieldUpdateOperationsInput | string
    cnpj_terreiro?: StringFieldUpdateOperationsInput | string
    Cep_terreiro?: StringFieldUpdateOperationsInput | string
    Tipo_terreiro?: NullableStringFieldUpdateOperationsInput | string | null
    usuarios?: UsuarioUncheckedUpdateManyWithoutTerreiroNestedInput
  }

  export type UsuarioCreateManyTerreiroInput = {
    id_usuario?: number
    nome_usuario: string
    idade_usuario: Date | string
    email_usuario: string
    contato_usuario: string
    senha_usuario: string
    permicao_adm?: boolean | null
  }

  export type AdmCreateManyTerreiroInput = {
    id_adm?: number
    nome_adm: string
  }

  export type UsuarioUpdateWithoutTerreiroInput = {
    nome_usuario?: StringFieldUpdateOperationsInput | string
    idade_usuario?: DateTimeFieldUpdateOperationsInput | Date | string
    email_usuario?: StringFieldUpdateOperationsInput | string
    contato_usuario?: StringFieldUpdateOperationsInput | string
    senha_usuario?: StringFieldUpdateOperationsInput | string
    permicao_adm?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type UsuarioUncheckedUpdateWithoutTerreiroInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nome_usuario?: StringFieldUpdateOperationsInput | string
    idade_usuario?: DateTimeFieldUpdateOperationsInput | Date | string
    email_usuario?: StringFieldUpdateOperationsInput | string
    contato_usuario?: StringFieldUpdateOperationsInput | string
    senha_usuario?: StringFieldUpdateOperationsInput | string
    permicao_adm?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type UsuarioUncheckedUpdateManyWithoutTerreiroInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nome_usuario?: StringFieldUpdateOperationsInput | string
    idade_usuario?: DateTimeFieldUpdateOperationsInput | Date | string
    email_usuario?: StringFieldUpdateOperationsInput | string
    contato_usuario?: StringFieldUpdateOperationsInput | string
    senha_usuario?: StringFieldUpdateOperationsInput | string
    permicao_adm?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type AdmUpdateWithoutTerreiroInput = {
    nome_adm?: StringFieldUpdateOperationsInput | string
  }

  export type AdmUncheckedUpdateWithoutTerreiroInput = {
    id_adm?: IntFieldUpdateOperationsInput | number
    nome_adm?: StringFieldUpdateOperationsInput | string
  }

  export type AdmUncheckedUpdateManyWithoutTerreiroInput = {
    id_adm?: IntFieldUpdateOperationsInput | number
    nome_adm?: StringFieldUpdateOperationsInput | string
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