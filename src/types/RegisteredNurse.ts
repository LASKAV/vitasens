export type RegisteredNurse = {
  id?: number;
  firstName: string;
  lastName: string;
  middleName: string;
  position: string;
  description: string;
  additional?: string;
  workingDays: string;
  serviceAppointmentPrice?: number;
  outOfOfficeAppointmentPrice?: number;
  rnPhotoLink: string;
};
