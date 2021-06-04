import { IUserProfession } from './professions';

export interface IRegisterUserData {
  firstName: string;
  lastName: string;
  email: string;
  cellphone: string;
  password: string;
  confirmPassword: string;
  language: string;
  profession: IUserProfession;
  agreeOfTerms: boolean;
}

export interface IRegisterUserField {
  firstName: string;
  lastName: string;
  email: string;
  cellphone: string;
  password: string;
  confirmPassword: string;
  agreeOfTerms: boolean;
}
