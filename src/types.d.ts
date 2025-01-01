declare global {
  type PageType = {
    id: number | string;
    name: string;
    desc: string;
    route: string;
  };

  type PaginationType = {
    pageIndex: number;
    pageSize: number;
  };

  //TData
  type User = {
    id: string;
    firstName: string;
    lastName: string;
    age: number;
    visits: number;
    progress: number;
    status: string;
  };

  type Lang = "en" | "mm";

  type Theme = "dark" | "light";

  type DataType = { value: string | Record<string, unknown>; label: string };
}

export {};
