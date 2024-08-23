import React from "react";
import { IconEdit, IconSquareLetterX, IconTrash } from "@tabler/icons-react";
import { useForm } from "react-hook-form";

const DisplayProfilesTable = ({ profiles }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  //   console.log(profiles);
  const deleteProfile = (id) => {
    console.log(`Profile with id : ${id} deleted!`);
  };

  const editProfile = (id) => {
    console.log(`Profile with id : ${id} edited!`);
  };

  return (
    <div className="">
      <div className="overflow-x-auto p-16 ">
        <table className="table table-zebra">
          {/* head */}
          <thead className="bg-slate-400 ">
            <tr>
              <th>Sr.No.</th>
              <th>Name</th>
              <th>Job</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {profiles.map((profile) => (
              <tr key={profile.id}>
                <th>{profile.id}</th>
                <td>{profile.name}</td>
                <td>{profile.role}</td>
                <td>{profile.address}</td>
                <td>
                  <div className="flex gap-2">
                    <button
                      className="btn btn-sm bg-blue-300 hover:bg-blue-400"
                      onClick={() =>
                        document.getElementById("edit-modal").showModal()
                      }
                    >
                      {" "}
                      <IconEdit /> Edit
                    </button>
                    {/* edit modal */}
                    <dialog
                      key={profile.id}
                      id="edit-modal"
                      className="modal modal-bottom sm:modal-middle"
                    >
                      <div className="modal-box">
                        <form>
                          <div className="flex flex-col gap-4">
                            <label className="input flex items-center gap-2">
                              <input
                                type="text"
                                className="grow"
                                placeholder="Name"
                              />
                            </label>
                            <label className="input  flex items-center gap-2">
                              <input
                                type="text"
                                className="grow"
                                placeholder="Job Role"
                              />
                            </label>
                            <label className="input flex items-center gap-2">
                              <input
                                type="text"
                                className="grow"
                                placeholder="Address"
                              />
                            </label>
                          </div>
                        </form>
                        <div className="modal-action">
                          <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}

                            {/*  */}
                            <div className="flex gap-4">
                              <button
                                className="btn "
                                onClick={() => editProfile(profile.id)}
                              >
                                <IconEdit /> Edit
                              </button>

                              <button className="btn hover:bg-red-400">
                                <IconSquareLetterX /> Close
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </dialog>
                    <button
                      className="btn btn-sm bg-red-300 hover:bg-red-400"
                      onClick={() => deleteProfile(profile.id)}
                    >
                      {" "}
                      <IconTrash /> Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add New Profile */}
      <div className="flex justify-center items-center h-[10rem] w-[10rem]">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          {/* register your input into the hook by invoking the "register" function */}
          <input {...register("name", { required: true })} placeholder="Name" />
          {errors.name && <span>This field is required</span>}

          {/* include validation with required or other standard HTML validation rules */}
          <input {...register("role", { required: true })} placeholder="Job Role"/>
          {errors.role && <span>This field is required</span>}

          <input {...register("address", { required: true })} placeholder="Address"/>
          {errors.address && <span>This field is required</span>}


          <input {...register("des", { required: true })} placeholder="Description"/>
        
          
          {/* errors will return when field validation fails  */}
          {errors.des && <span>This field is required</span>}


          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default DisplayProfilesTable;
