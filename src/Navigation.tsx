import { useRobotStore } from "./store/store";

function Navigation() {
  // Fetch the method we use to add robots to our store
  const addRobot = useRobotStore((state) => state.addRobot);

  // Return a couple of buttons to add 2 robots, this navigation
  // could be created dynamically if we had a config file
  // with robot details in that we could loop over
  return (
    <nav>
      <ul>
        <li>
          <button
            onClick={() =>
              // Clicking here will call the stores addRobot method with a new Robot object
              // This will add this object to our stores robot list.
              addRobot({
                name: "Robot 1",
                x: 0,
                y: 0,
              })
            }
          >
            Add Robot 1
          </button>
        </li>
        <li>
          <button
            onClick={() =>
              // Same as above but with a differently named robot
              addRobot({
                name: "Robot 2",
                x: 10,
                y: 20,
              })
            }
          >
            Add Robot 2
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
