export type States = "CHANGE_FILTER" | "LOADING" | "LOADED";

export type State = {
  filters?: Filter;
  isLoading: boolean;
  data?: any;
};

export type Filter = {
  dateFrom: Date;
  dateTo: Date;
};

export type Action = {
  type: States;
  filters?: Filter;
  data?: any;
};

export const init = (initial: State): State => ({
  filters: initial.filters,
  isLoading: initial.isLoading,
  data: initial.data,
});

export const initial: State = {
  filters: {
    dateFrom: new Date(),
    dateTo: new Date(),
  },
  isLoading: false
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "CHANGE_FILTER":
      return {
        ...state,
        isLoading: true,
        filters: action.filters,
      };
    case "LOADED":
      return {
        ...state,
        isLoading: false,
        data: action.data,
      };
    default:
      throw new Error();
  }
};
