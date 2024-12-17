import React from "react";
import Image from "next/image";
import profileImage from "@/assets/images/blank-profile-icon.jpg";

export default function ProfileHead({
  profile,
  setActiveProfile,
  activeProfile,
  setEditProfile,
}) {
  return (
    <>
      <div className="space-y-2 mt-2">
        <div
          className="flex items-center justify-between p-2 border rounded hover:bg-gray-50"
          onClick={() => {
            setActiveProfile(activeProfile === profile.id ? null : profile.id);
            setEditProfile(null);
          }}
        >
          <div className="flex items-center h-12">
            <Image
              src={profile.picture}
              width={50}
              height={50}
              alt="Profile"
              className="w-8 h-8 rounded-full border mr-1"
            />
            <span>
              {profile.first} {profile.last}
            </span>
          </div>
          <button className=" text-gray-500 hover:text-gray-700">▼</button>
        </div>
      </div>
    </>
  );
}
