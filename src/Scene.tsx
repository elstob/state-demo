import { useRobotStore } from "./store/store";

function Scene() {
  const removeRobot = useRobotStore((state) => state.removeRobot);
  const robots = useRobotStore((state) => state.robots);

  return (
    <>
      {/* Loop over the robots in our stores list and output some details */}
      {/* In your app this would probably render out all the mesh or geometry */}
      {/* that is required to render a full robot model. */}
      {/* Properties like rotation, size and color can all be added to your Robot object */}
      {/* and then passed to the relevant react-three-fiber components */}

      {/* You can also click a robot to remove it using the removeRobot method */}
      {/* that we've also grabbed from the store */}
      {robots.map((robot) => (
        <div
          key={robot.name}
          onClick={() => removeRobot(robot)}
          style={{
            marginBottom: "2rem",
            outline: "1px solid white",
            padding: "1rem",
          }}
        >
          <strong>{robot.name}</strong>
          <br />
          x: {robot.x.toString()}
          <br />
          y: {robot.y.toString()}
        </div>
      ))}
    </>
  );
}

export default Scene;
