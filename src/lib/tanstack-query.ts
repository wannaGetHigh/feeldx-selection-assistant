import type {
  QueryFunctionContext,
  QueryKey,
  UseMutationOptions,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';

export type UseCustomMutationOptions<Data, Params, Ctx = unknown> = Omit<
  UseMutationOptions<Data, Error, Params, Ctx>,
  'mutationFn'
>;

export type UseCustomQueryOptions<
  Data,
  TransformData,
  TQueryKey extends QueryKey = string[],
> = Omit<
  UseQueryOptions<Data, Error, TransformData, TQueryKey>,
  'queryKey' | 'queryFn'
>;

export function createQueryHook<
  Params = void,
  Data = unknown,
  TQueryKey extends QueryKey = string[],
>(
  getQueryKey: (params: Params) => TQueryKey,
  fetcher: (
    params: Params,
    ctx?: QueryFunctionContext<TQueryKey>,
  ) => Promise<Data>,
  defaultOptions?: UseCustomQueryOptions<Data, Data, TQueryKey>,
) {
  return <TData = Data>(
    params: Params,
    options?: UseCustomQueryOptions<Data, TData, TQueryKey>,
  ): UseQueryResult<TData, Error> => {
    const mergedOptions = Object.assign({}, defaultOptions, options);

    return useQuery<Data, Error, TData, TQueryKey>({
      queryKey: getQueryKey(params),
      queryFn: (ctx) => fetcher(params, ctx),
      ...mergedOptions,
    });
  };
}
