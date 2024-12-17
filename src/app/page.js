"use client";
import Image from "next/image";
import ProfileEdit from "@/src/components/profileEdit";
import ProfileDetail from "@/src/components/profileDetail";
import ProfileHead from "@/src/components/profileHead";
import celebrities from "@/celebrities.json";
import React, { useState } from "react";
import DeleteState from "@/src/components/deleteWindow";

export default function Home() {
  const [profiles, setProfiles] = useState(celebrities);
  const [activeProfile, setActiveProfile] = useState(null);
  const [editProfile, setEditProfile] = useState(null);
  const [deleteView, setDeleteView] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleEdit = (editData) => {
    setProfiles((prev) =>
      prev.map((prof) => (prof.id === editData.id ? editData : prof))
    );
  };

  const handleDelete = (activeProfile) => {
    setProfiles((prev) => prev.filter((prof) => prof.id !== activeProfile));
    setDeleteView(false);
  };

  const searchedProfiles = profiles.filter(
    (profile) =>
      profile.first?.toLowerCase().includes(searchText.toLowerCase()) ||
      profile.last?.toLowerCase().includes(searchText.toLowerCase()) ||
      profile.dob?.toLowerCase().includes(searchText.toLowerCase()) ||
      profile.gender?.toLowerCase().includes(searchText.toLowerCase()) ||
      profile.country?.toLowerCase().includes(searchText.toLowerCase()) ||
      profile.desription?.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <div className="p-6 max-w-md mx-auto mt-2 border rounded-lg shadow-sm">
        <h2 className="text-xl font-bold mb-4">List View</h2>
        <input
          type="text"
          value={searchText}
          placeholder="Search user"
          className="border p-2 rounded w-full mb-4"
          onChange={(e) => setSearchText(e.target.value)}
        />

        {searchedProfiles.map((profile, index) => (
          <div key={index}>
            <ProfileHead
              profile={profile}
              activeProfile={activeProfile}
              setActiveProfile={setActiveProfile}
              setEditProfile={setEditProfile}
            />
            <ProfileDetail
              profile={profile}
              activeProfile={activeProfile}
              editProfile={editProfile}
              setEditProfile={setEditProfile}
              setDeleteView={setDeleteView}
            />
            <ProfileEdit
              profile={profile}
              activeProfile={activeProfile}
              editProfile={editProfile}
              setEditProfile={setEditProfile}
              handleEdit={handleEdit}
            />
          </div>
        ))}
        {deleteView && (
          <DeleteState
            activeProfile={activeProfile}
            handleDelete={handleDelete}
            setDeleteView={setDeleteView}
          />
        )}
      </div>
    </>
  );
}
