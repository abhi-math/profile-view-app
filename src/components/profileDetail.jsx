import React from "react";
import Image from "next/image";
import profileImage from "@/assets/images/blank-profile-icon.jpg";

export default function ProfileDetail({
  profile,
  activeProfile,
  editProfile,
  setEditProfile,
  setDeleteView,
}) {
  return (
    <>
      {activeProfile === profile.id && editProfile !== activeProfile && (
        <div className="p-6 max-w-md mx-auto border rounded-lg shadow-sm">
          <h2 className="text-xl font-bold mb-4">Profile View</h2>
          <div className="flex items-center mb-4">
            <Image
              src={profile.picture}
              height={100}
              width={100}
              alt="Profile"
              className="w-12 h-12 rounded-full border mr-4"
            />

            <p>
              {profile.first} {profile.last}
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Date of Brith
              </label>

              <p>{profile.dob}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Gender
              </label>
              <p>{profile.gender}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Country
              </label>

              <p>{profile.country}</p>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>

            <p>{profile.description}</p>
          </div>
          <div className="flex justify-end space-x-2">
            <button
              className="px-4 py-2 rounded border bg-white text-red-500 hover:border-red-600"
              onClick={() => setDeleteView(true)}
            >
              delete
            </button>
            <button
              className="px-4 py-2 border text-blue-500  bg-white rounded hover:border-blue-600"
              onClick={() => setEditProfile(activeProfile)}
            >
              edit
            </button>
          </div>
        </div>
      )}
    </>
  );
}
