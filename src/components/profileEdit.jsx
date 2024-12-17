import React, { useState } from "react";
import Image from "next/image";
import profileImage from "@/assets/images/blank-profile-icon.jpg";

const nullProfile = {
  first: "",
  last: "",
  dob: "",
  gender: "",
  email: "",
  country: "",
  description: "",
};

export default function ProfileEdit({
  profile,
  activeProfile,
  editProfile,
  setEditProfile,
  handleEdit,
}) {
  const [editData, setEditData] = useState(nullProfile);

  const handleSave = (event) => {
    event.preventDefault();
    editData.id = profile.id;
    handleEdit(editData);
    setEditData(nullProfile);
  };
  return (
    <>
      {profile.id === editProfile && profile.id === activeProfile && (
        <form
          className="p-6 max-w-md mx-auto border rounded-lg shadow-sm"
          onSubmit={handleSave}
        >
          <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
          <div className="flex items-center mb-4">
            <Image
              src={profile.picture}
              height={100}
              width={100}
              alt="Profile"
              className="w-12 h-12 rounded-full border mr-4"
            />
            <input
              type="text"
              value={editData.first}
              className="border p-2 rounded w-full"
              placeholder="First name"
              onChange={(e) =>
                setEditData({ ...editData, first: e.target.value })
              }
            />
            <input
              type="text"
              value={editData.last}
              className="border p-2 rounded w-full"
              placeholder="Last name"
              onChange={(e) =>
                setEditData({ ...editData, last: e.target.value })
              }
            />
          </div>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Date of birth
              </label>
              <input
                type="text"
                value={editData.dob}
                className="border p-2 rounded w-full"
                placeholder="yyyy-mm-dd"
                onChange={(e) =>
                  setEditData({ ...editData, dob: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Gender
              </label>
              <select
                className="border p-2 rounded w-full"
                value={editData.gender}
                onChange={(e) =>
                  setEditData({ ...editData, gender: e.target.value })
                }
              >
                <option>Rather not say</option>
                <option>Male</option>
                <option>female</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Country
              </label>
              <input
                type="text"
                value={editData.country}
                className="border p-2 rounded w-full"
                placeholder="India"
                onChange={(e) =>
                  setEditData({ ...editData, country: e.target.value })
                }
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              rows="3"
              className="border p-2 rounded w-full"
              value={editData.description}
              onChange={(e) =>
                setEditData({ ...editData, description: e.target.value })
              }
            ></textarea>
          </div>
          <div className="flex justify-end space-x-2">
            <button
              className="px-4 py-2 border bg-white text-gray-700 rounded hover:border-gray-300"
              onClick={() => setEditProfile(null)}
            >
              cancel
            </button>
            <button
              className="px-4 py-2 border bg-white text-green-400 rounded hover:border-green-500"
              type="submit"
            >
              save
            </button>
          </div>
        </form>
      )}
    </>
  );
}
