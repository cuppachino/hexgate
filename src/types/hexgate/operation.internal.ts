import type { UnionToIntersection } from '@cuppachino/type-space'
import type { LcuResponseCode } from '../dto/lcu-response-code.js'
import type { OperationParameters, OperationResponses } from './operation.js'

/**
 * Used internally to infer details about an operation.
 * @see {@link OperationParameters} and {@link OperationResponses}
 * @internal
 */
export type OperationWith = {
  parameters: {
    parameters: {
      [K: string]: {
        [Arg: string]: any
      }
    }
  }
  requestBody: {
    requestBody?: {
      content: {
        'application/json': any
      }
    }
  }
  responses: {
    responses:
      | {
          [Code in Exclude<LcuResponseCode, 204>]?: {
            content: {
              'application/json': any
            }
          }
        }
      | {
          204: never
        }
  }
}

/**
 * Infer the request parameters type from an operation.
 * This is useful for extracting the request parameters from an operation.
 *
 * You probably want to use {@link OperationParameters} instead.
 * @internal
 */
export type ExtractRequestParams<T extends OperationWith['parameters']> = UnionToIntersection<
  T['parameters'][keyof T['parameters']]
>

/**
 * Infer the request body type from an operation.
 * This is useful for extracting the request body from an operation.
 *
 * You probably want to use {@link OperationParameters} instead.
 * @internal
 */
export type ExtractRequestBody<Op extends OperationWith['requestBody']> = NonNullable<
  Op['requestBody']
>['content']['application/json']

/**
 * Infer the response type from an operation.
 * This is useful for extracting the response type from an operation.
 *
 * You probably want to use {@link OperationResponses} instead.
 * @internal
 */
export type ExtractRequestResponses<Op extends OperationWith['responses']> =
  Op['responses'][keyof Op['responses']] extends {
    content: { 'application/json': infer T }
  }
    ? T
    : never
