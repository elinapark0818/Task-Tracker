import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router";
import Button from "./Button";

const TaskDetails = () => {
  const [loading, setLoading] = useState(true);
  const [task, setTask] = useState({});
  // const [error, setError] = useState(null);

  const params = useParams();

  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTask = async () => {
      const res = await fetch(`http://localhost:5000/tasks/${params.id}`);
      const data = await res.json();

      if (res.status === 404) {
        // react-router 의 useNavigate 로 Link보다 더 직관적으로 사용하기
        navigate("/");
      }

      setTask(data);
      setLoading(false);
    };

    fetchTask();
  });

  // react-router Navigate 로 Link처럼 사용하는거
  // if (error) {
  //   return <Navigate to="/" />;
  // }

  return loading ? (
    <h3>Loading...</h3>
  ) : (
    <div>
      <p>{pathname}</p>
      <h3>{task.text}</h3>
      <p>{task.day}</p>
      {/* react-router 뒤로가기 사용법 (feat. useNavigate) */}
      <Button
        onClick={() => {
          navigate(-1);
        }}
        text="Go Back"
      />
    </div>
  );
};

export default TaskDetails;
