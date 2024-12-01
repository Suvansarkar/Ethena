import { create } from "zustand";

export type Store = {
  currentQuestion: number;
  setQuestion: (id: number) => void;
  incQuestion: () => void;
  decQuestion: () => void;
};

export const useStore = create<Store>()((set) => ({
  currentQuestion: 0,
  setQuestion: (id) => set({ currentQuestion: id }),
  incQuestion: () => {
    set((state) => ({ currentQuestion: state.currentQuestion + 1 }));
  },
  decQuestion: () => {
    set((state) => ({ currentQuestion: state.currentQuestion - 1 }));
  },
}));

type Answer = {
  id: number;
  selectedOption: number;
  markedForReview: boolean;
};
export type Responses = {
  answers: Answer[];
  updateAnswer: (
    id: number,
    selectedOption: number,
    markedForReview: boolean
  ) => void;
  updateReview: (id: number, markedForReview: boolean) => void;
};

export const useResposeStore = create<Responses>((set) => ({
  answers: [],
  updateAnswer: (id, selectedOption, markedForReview) =>
    set((state) => {
      const index = state.answers.findIndex((answer) => answer.id === id);
      if (index === -1) {
        return {
          answers: [...state.answers, { id, selectedOption, markedForReview }],
        };
      }
      state.answers[index].selectedOption = selectedOption;
      state.answers[index].markedForReview = markedForReview;
      return { answers: state.answers };
    }),
  updateReview: (id, markedForReview) =>
    set((state) => {
      const index = state.answers.findIndex((answer) => answer.id === id);
      if (index === -1) {
        return {
          answers: [
            ...state.answers,
            { id, selectedOption: -1, markedForReview },
          ],
        };
      }
      state.answers[index].markedForReview = markedForReview;
      return { answers: state.answers };
    }),
}));

export type Option = {
  selected: number;
  setSelected: (id: number) => void;
};

export const useOptionStore = create<Option>((set) => ({
  selected: -1,
  setSelected: (id) => set({ selected: id }),
}));
