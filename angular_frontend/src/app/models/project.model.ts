export interface IProject {
  _id: string,
  emp: [],
  title: string,
  description: string,
  technologies: string,
  client_name: string,
  hours: number,
  price: number,
  status: string,
  createdAt?: string,
  updatedAt?: string,
  __v?: number
}

export interface IAddProjectPayload {
  emp?: [],
  title: string,
  description: string,
  technologies: string,
  client_name: string,
  hours: number,
  price: number
}

export interface IAddProjectResponse {
  message: string;
  project: IProject;
}

export interface IUpdateProjectPayload {
  emp?: [],
  title?: string,
  description?: string,
  technologies: string,
  client_name: string,
  hours: number,
  price: number,
  status: string
}

export interface IUpdateProjectResponse {
  message: string;
  project: IProject;
}

export interface ProjectFilters {
  hours?: number,
  price?: number,
  status?: string
}
