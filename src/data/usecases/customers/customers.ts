import { get } from 'infra/http/axiosHttpClient';
import { Customer } from 'domain/models/customer';
import { HttpStatusCode } from 'data/protocols/http/httpStatusCode';
import { HttpResponse } from 'data/protocols/http/httpResponse';

export const customers = async (): Promise<HttpResponse> => {
  const response = await get<Customer[]>({
    url: '/users',
  });

  switch (response.statusCode) {
    case HttpStatusCode.success:
      return {
        statusCode: response?.statusCode,
        data: response?.data,
      };
    default:
      return {
        statusCode: response.statusCode,
        data: [],
      };
  }
};
