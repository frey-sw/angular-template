// Login response interface
export interface IResetResponse {
  element: {
    accessToken: string;
    refreshToken: string;
    inneraccessTokenMessage: string;
  };
  message: string;
}

export interface IResetRequest {
  password: string;
  confirmPassword: string;
  email: string;
  token: string;
}
