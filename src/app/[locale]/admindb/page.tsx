"use client";

import { useState } from "react";
import deTranslations from "../../../../messages/de.json";

type NestedObject = {
  [key: string]: string | NestedObject;
};

export default function AdminDB() {
  const [translations, setTranslations] = useState<typeof deTranslations>(deTranslations);
  console.log(translations);

  const [editingKey, setEditingKey] = useState<string>("");
  const [editingValue, setEditingValue] = useState<string>("");

  const flattenObject = (
    obj: NestedObject,
    prefix = ""
  ): Record<string, string> => {
    return Object.keys(obj).reduce(
      (acc: Record<string, string>, key: string) => {
        const prefixedKey = prefix ? `${prefix}.${key}` : key;
        const value = obj[key];

        if (typeof value === "object" && value !== null) {
          Object.assign(acc, flattenObject(value, prefixedKey));
        } else if (typeof value === "string") {
          acc[prefixedKey] = value;
        }
        return acc;
      },
      {}
    );
  };

  const handleEdit = (key: string, value: string) => {
    setEditingKey(key);
    setEditingValue(value);
  };

  const handleSave = () => {
    const keys = editingKey.split(".");
    const newTranslations = JSON.parse(JSON.stringify(translations));
    let current = newTranslations;

    for (let i = 0; i < keys.length - 1; i++) {
      current = current[keys[i]];
    }
    current[keys[keys.length - 1]] = editingValue;

    setTranslations(newTranslations);
    setEditingKey("");
    setEditingValue("");
  };

  const flatTranslations = flattenObject(translations);
  //   console.log(flatTranslations);

  const handleSaveToFile = async () => {
    try {
      const response = await fetch("/api/savefile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(translations),
      });

      if (response.ok) {
        alert("Translations saved to backup file successfully!");
      } else {
        throw new Error("Failed to save translations");
      }
    } catch (error) {
      console.error("Error saving translations:", error);
      alert("Failed to save translations to file");
    }
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center sticky top-20 bg-white z-10">
        <h1 className="text-2xl font-bold mb-4">Translation Editor</h1>

        <button
          onClick={handleSaveToFile}
          className="ml-4 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Save to Backup File
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {Object.entries(flatTranslations).map(([key, value]) => (
          <div key={key} className="border p-4 rounded-lg whitespace-pre-line">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                {/* key of object */}
                <p className="text-md text-green font-bold">Key - {key}</p>
                {/* value of object */}
                <p className="mt-1">{value.replace(/\n/g, "↵\n")}</p>
              </div>

              {/* edit button */}
              <button
                onClick={() => handleEdit(key, value)}
                className="ml-4 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ############################## Edit Modal ############################## */}

      {editingKey && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-4/5 ">
            <h2 className="text-xl font-bold mb-4">Edit Translation</h2>
            <p className="text-md text-green font-bold mb-2">{editingKey}</p>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-2">Edit Text:</label>
                <textarea
                  value={editingValue}
                  onChange={(e) => setEditingValue(e.target.value)}
                  className="w-full h-96 p-4 border rounded font-mono whitespace-pre-wrap overflow-y-auto"
                />
                {/* <textarea
                  value={editingValue.replace(/\n/g, "↵\n")}
                  onChange={(e) =>
                    setEditingValue(e.target.value.replace(/↵\n/g, "\n"))
                  }
                  className="w-full h-96 p-4 border rounded font-mono whitespace-pre-wrap [&>*]:text-red-500"
                /> */}
              </div>
              <div>
                <label className="block mb-2">Preview on website:</label>
                <div className="w-full h-96 p-2 border rounded bg-gray-50 whitespace-pre-line overflow-y-auto">
                  {editingValue}
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => setEditingKey("")}
                className="p-4 border rounded hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
