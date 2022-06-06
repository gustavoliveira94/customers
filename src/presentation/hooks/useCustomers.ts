import { useEffect, useState } from 'react';

import { HttpResponse } from 'data/protocols/http/httpResponse';

import { customers } from 'data/usecases/customers/customers';
import { ICustomer } from 'domain/models/customer';

export const useCustomers = (): HttpResponse<ICustomer[]> => {
  const [data, setData] = useState<HttpResponse>({} as HttpResponse);

  const getCustomers = async () => {
    const response = await customers();

    return setData({
      statusCode: response?.statusCode,
      data: response?.data,
    });
  };

  useEffect(() => {
    getCustomers();
  }, []);

  return {
    statusCode: data.statusCode,
    data: data.data || [],
  };
};
