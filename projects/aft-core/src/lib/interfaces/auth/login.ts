// Login response interface
export interface ILoginResponse {
  element: {
    accessToken: string;
    refreshToken: string;
    inneraccessTokenMessage: string;
  };
  message: string;
}

export interface ILoginRequest {
  email: string;
  password: string;
}
