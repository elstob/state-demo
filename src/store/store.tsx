import { create } from "zustand";

// A Basic robot type, properties like xScale, rotation, etc could be added
// to flesh this out with more customisation
type Robot = {
  name: string;
  x: Number;
  y: Number;
};

export interface State {
  addRobot: (robot: any) => void;
  removeRobot: (robot: any) => void;
  robots: Robot[];
}

export const useRobotStore = create<State>((set) => ({
  // Hold a list of all the robots we want to show in the scene
  robots: [],
  // Provide a function that can add robots to our list
  addRobot: (robot: Robot) =>
    set((state) => {
      if (!state.robots.find((existing) => existing.name === robot.name)) {
        return { robots: [...state.robots, robot] };
      }
      return state;
    }),
  removeRobot: (robot: Robot) =>
    set((state) => ({
      robots: state.robots.filter((existing) => existing.name !== robot.name),
    })),
}));
