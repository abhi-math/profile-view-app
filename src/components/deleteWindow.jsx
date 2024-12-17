import React from "react";

export default function DeleteState({
  activeProfile,
  handleDelete,
  setDeleteView,
}) {
  return (
    <>
      <div className="relative">
        <div
          className="border min-w-96 mx-auto flex items-center justify-center bg-opacity-1"
          style={{
            position: "fixed",
            top: "30%",
            opacity: "1",
            backgroundColor: "#E9EAEC",
          }}
        >
          <div className="p-6 bg-white rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-lg font-bold mb-4">Delete dialog box</h2>
            <p className="text-sm text-gray-700 mb-4">
              Are you sure you want to delete?
            </p>
            <div className="flex justify-end space-x-2">
              <button
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                onClick={() => setDeleteView(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-black rounded hover:bg-red-600"
                onClick={() => handleDelete(activeProfile)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
