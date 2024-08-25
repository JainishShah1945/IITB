import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { GrFormView } from "react-icons/gr";
import { MdDeleteSweep } from "react-icons/md";
import { IoIosRemoveCircle } from "react-icons/io";

function Course() {
  const [data, setData] = useState([]);
  const [descview, setDesc] = useState(false);
  const [id, setId] = useState([]);
  const [getId, setGetId] = useState([]);
  let course_title = useRef();
  let course_desc = useRef();
  let course_code = useRef();

  const handleonSubmit = async (e) => {
    e.preventDefault();
    const title = course_title.current.value;
    const desc = course_desc.current.value;
    const code = course_code.current.value;
    try {
      const response = await fetch("http://127.0.0.1:8000/api/courses/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          course_title: title,
          course_description: desc,
          course_code: code,
        }),
      });
      if (response.ok) {
        const newdata = await response.json();
        setData((data) => [...data, newdata]);
        course_title.current.value = "";
        course_desc.current.value = "";
        course_code.current.value = "";
      } else {
        alert("Invalid Credentials");
      }
    } catch (error) {
      alert(error, " failed to fetch");
    }
  };

  const handleonDelete = async (courseId) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/courses/${courseId}/`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        setData((data) => data.filter((course) => course.id !== courseId));
      } else {
        console.log("Something went wrong");
      }
    } catch {
      alert("Invalid action");
    }
  };
  const handleonChange = (e) => {
    setGetId(e.target.value);
  };
  const handleonRetrive = async (courseId) => {
    try {
      axios
        .get(`http://127.0.0.1:8000/api/courses/${courseId}/`)

        .then((response) => {
          console.log(response.data);
          setData(response.data);
        })
        .catch((error) => alert("Invalid credentials"));
    } catch (error) {
      alert(error, " failed to fetch");
    }
  };

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/courses/")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })

      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <form className="container bg-white h-100 mt-5" onSubmit={handleonSubmit}>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Course Title</th>
              <th scope="col">Course Description</th>
              <th scope="col">Course Code</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  name="title"
                  ref={course_title}
                  placeholder="Eg:Java,Python..."
                ></input>
              </td>
              <td>
                <input
                  type="text"
                  name="desc"
                  ref={course_desc}
                  placeholder="Eg:Boost your career..."
                ></input>
              </td>
              <td>
                <input
                  type="text"
                  name="code"
                  ref={course_code}
                  placeholder="Eg:104,105.."
                ></input>
              </td>
            </tr>
          </tbody>
          <div className="">
            <button className="btn btn-success mt-3 mb-3">ADD</button>
          </div>
        </table>
      </form>

      <div className=" container bg-white justify-content-center mt-5 mb-5">
        <div className="d-flex align-items-center justify-content-center gap-3">
          <th>Enter Course ID</th>
          <tr>
            <input
              type="text"
              name={getId}
              onChange={handleonChange}
              className="mt-2 mb-2"
              placeholder="Eg:1,2,3,........"
            ></input>
          </tr>
        </div>
        <div className="d-flex align-items-center justify-content-center mt-2">
          <button
            className="btn btn-success mb-3 "
            onClick={() => handleonRetrive(getId)}
          >
            SHOW
          </button>
        </div>
      </div>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">Course Id</th>
            <th scope="col">Course Title</th>
            <th scope="col">Course Code</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(data) ? (
            data.map((course, index) => (
              <>
                <tr key={index}>
                  <th scope="row">{course.id}</th>
                  <td colspan="1">{course.course_title}</td>

                  <td>{course.course_code}</td>
                  <td>
                    <button
                      onClick={() => {
                        {
                          !descview ? setDesc(true) : setDesc(false);
                        }
                        setId(course.id);
                      }}
                    >
                      {descview && course.id === id ? (
                        <IoIosRemoveCircle />
                      ) : (
                        <GrFormView />
                      )}
                    </button>
                    <button
                      className="ms-4"
                      onClick={() => handleonDelete(course.id)}
                    >
                      <MdDeleteSweep />
                    </button>
                  </td>
                </tr>
                {descview && course.id === id ? (
                  <td colspan="4" className="bg-black text-white fs-5">
                    {course.course_description}
                  </td>
                ) : null}
              </>
            ))
          ) : (
            <>
              <tr>
                <th scope="row">{data.id}</th>
                <td colspan="1">{data.course_title}</td>

                <td>{data.course_code}</td>
                <td>
                  <button
                    onClick={() => {
                      {
                        !descview ? setDesc(true) : setDesc(false);
                      }
                      setId(data.id);
                    }}
                  >
                    {descview && data.id === id ? (
                      <IoIosRemoveCircle />
                    ) : (
                      <GrFormView />
                    )}
                  </button>
                  <button
                    className="ms-4"
                    onClick={() => handleonDelete(data.id)}
                  >
                    <MdDeleteSweep />
                  </button>
                </td>
              </tr>
              {descview && data.id === id ? (
                <td colspan="4" className="bg-black text-white fs-5">
                  {data.course_description}
                </td>
              ) : null}
            </>
          )}
        </tbody>
      </table>
    </>
  );
}

export default Course;
