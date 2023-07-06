import { AxiosError } from "axios";

interface ValidationError {
  location: string;
  msg: string;
  path: string;
  type: string;
  value: string;
}

export type ExtendedAxiosError = AxiosError & {
  response: {
    data: {
      errors?: ValidationError[];
      message?: string;
    };
  };
};
