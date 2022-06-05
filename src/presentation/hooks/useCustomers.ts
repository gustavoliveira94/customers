import { useEffect, useState } from 'react';

import { HttpResponse } from 'data/protocols/http/httpResponse';

import { customers } from 'data/usecases/customers/customers';
import { Customer } from 'domain/models/customer';

export const useCustomers = (): HttpResponse<Customer[]> => {
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
