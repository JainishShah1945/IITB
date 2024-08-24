import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { GrFormView } from "react-icons/gr";
import { MdDeleteSweep } from "react-icons/md";
import { IoIosRemoveCircle } from "react-icons/io";

function Instance() {
  const [data, setData] = useState([]);
  const [descview, setDesc] = useState(false);
  const [id, setId] = useState([]);
  const [getId, setGetId] = useState([]);
  const [showyear, setyear] = useState([]);
  const [showsem, setsem] = useState([]);
  let course_sem = useRef();

  let course_title = useRef();
  let year = useRef();

  const handleonSubmit = async (e) => {
    e.preventDefault();
    const title = course_title.current.value;
    const in_year = year.current.value;
    const in_sem = course_sem.current.value;

    const response = await fetch(
      "http://127.0.0.1:8000/api/instances/",

      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          course_instance: title,
          instance_year: in_year,
          instance_sem: in_sem,
        }),
      }
    );
    if (response.ok) {
      const newdata = await response.json();
      setData((data) => [...data, newdata]);
      course_title.current.value = "";
      year.current.value = "";
      course_sem.current.value = "";
    }
  };

  const handleonDelete = async (instanceId) => {
    const response = await fetch(
      `http://127.0.0.1:8000/api/instances/${instanceId}/`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      setData((data) => data.filter((course) => course.id !== instanceId));
    } else {
      console.log("Something went wrong");
    }
  };
  const handleonRetrive = async (e) => {
    e.preventDefault();
    try {
      await axios
        .get(
          `http://127.0.0.1:8000/api/instances/${getId}/${showyear}/${showsem}/`
        )

        .then((response) => {
          console.log(response.data);
          setData(response.data);
        });
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/instances/")
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
              <th scope="col">Course ID</th>
              <th scope="col">Year</th>
              <th scope="col">Sem</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  name="title"
                  ref={course_title}
                  placeholder="Eg:1,2,3,4..."
                ></input>
              </td>
              <td>
                <input
                  type="text"
                  name="desc"
                  ref={year}
                  placeholder="Eg:2022,2023...."
                ></input>
              </td>
              <td>
                <input
                  type="text"
                  name="insem"
                  ref={course_sem}
                  placeholder="Eg:1,2,3,4....."
                ></input>
              </td>
            </tr>
          </tbody>
          <div className="">
            <button type="submit" className="btn btn-success mt-3 mb-3">
              ADD
            </button>
          </div>
        </table>
      </form>

      <div className=" container bg-white justify-content-center mt-5 mb-5">
        <form className="container bg-white h-100 mt-5">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Course ID</th>
                <th scope="col">Year</th>
                <th scope="col">Sem</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    value={getId}
                    onChange={(e) => {
                      setGetId(e.target.value);
                    }}
                    className="mt-2 mb-2"
                    placeholder="Eg:1,2,3,........"
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="desc"
                    value={showyear}
                    onChange={(e) => {
                      setyear(e.target.value);
                    }}
                    placeholder="Eg:2022,2023...."
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="code"
                    onChange={(e) => {
                      setsem(e.target.value);
                    }}
                    placeholder="Eg:1,2,3,4....."
                  ></input>
                </td>
              </tr>
            </tbody>
            <div className="">
              <button
                type="button"
                className="btn btn-success mt-3 mb-3"
                onClick={handleonRetrive}
              >
                SHOW
              </button>
            </div>
          </table>
        </form>
      </div>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">Instance Id</th>
            <th scope="col">Course Title</th>
            <th scope="col">Year-Sem</th>
            <th scope="col">Code</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(data) ? (
            data.map((course, index) => (
              <>
                <tr key={course.id}>
                  <th scope="row">{course.id}</th>
                  <td colspan="1">{course.course_title}</td>
                  <td>
                    {course.instance_year} - {course.instance_sem}
                  </td>
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
                    {course.course_desc}
                  </td>
                ) : null}
              </>
            ))
          ) : (
            <>
              <tr>
                <th scope="row">{data.id}</th>
                <td colspan="1">{data.course_title}</td>
                <td>
                  {data.instance_year} - {data.instance_sem}
                </td>

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
                  {data.course_desc}
                </td>
              ) : null}
            </>
          )}
        </tbody>
      </table>
    </>
  );
}

export default Instance;
