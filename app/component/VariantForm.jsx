"use client";

import { useState, useEffect } from "react";

function VariantForm({ variants, setVariants }) {
  const handleAddVariant = () => {
    setVariants((prev) => {
      return [...prev, { type: "Size", value: ["S"] }];
    });
  };

  const handleAddVariantValue = (index) => {
    const addVariantValue = [...variants];
    addVariantValue[index].value = [...addVariantValue[index].value, "Blue"];
    setVariants(addVariantValue);
  };

  const handleDeleteVariantOption = (index) => {
    const AllVariants = [...variants];
    AllVariants.splice(index, 1);
    setVariants(AllVariants);
  };

  const handleDeleteVariantValue = (i, index) => {
    const AllVariants = [...variants];
    const element = AllVariants[index];
    element.value.splice(i, 1);
    AllVariants[index] = { ...element };
    setVariants(AllVariants);
  };

  const handleChangeVariantOption = (value, index) => {
    const variant = [...variants];
    variant[index].type = value;
    setVariants([...variant]);
  };

  const handleChangeVariantValue = (val, i, option, index) => {
    const updatedVariants = [...variants];
    const varint = updatedVariants[index];
    const updatedValues = [...varint.value];
    updatedValues[i] = val;

    updatedVariants[index] = { ...varint, value: updatedValues };
    setVariants(updatedVariants);
  };

  return (
    <div className="col-span-full sm:col-span-3 bg-white rounded-md shadow-md">
      <div className="p-3" action="">
        <h3 className="mb-4">Variants</h3>
        {variants.map((variant, index) => (
          <div key={index} className="my-7 border-b border-black">
            <div className="flex flex-col gap-3">
              <label htmlFor="option-variant">Variant option</label>
              <input
                onChange={(e) =>
                  handleChangeVariantOption(e.target.value, index)
                }
                type="text"
                value={variant?.type}
                className="border py-2 px-1"
                placeholder="Color"
              />
            </div>
            <div className="flex flex-col gap-3 mb-4">
              <label htmlFor="value-variant">Variant Value</label>
              {variant?.value?.map((val, i) => (
                <div className="flex gap-3 items-center">
                  <input
                    key={i}
                    onChange={(e) =>
                      handleChangeVariantValue(
                        e.target.value,
                        i,
                        variant.type,
                        index
                      )
                    }
                    type="text"
                    value={val}
                    className="border py-2 px-1"
                    placeholder="Red"
                  />
                  <button
                    onClick={() => handleDeleteVariantValue(i, index)}
                    className="bg-gray-500 rounded-full h-7 w-7 text-white hover:bg-gray-800"
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
            <button
              onClick={() => handleAddVariantValue(index)}
              className="bg-green-400 px-3 py-2 rounded-md"
            >
              Add Value
            </button>
            <button
              onClick={() => handleDeleteVariantOption(index)}
              className="bg-red-400 px-3 py-2 rounded-md"
            >
              Delete Option
            </button>
          </div>
        ))}
        <div className="flex items-center pt-5 border-t">
          <button
            onClick={() => handleAddVariant()}
            className="bg-blue-500 px-4 py-3 rounded-md shadow-md text-white mx-auto"
          >
            Add Variant option
          </button>
        </div>
      </div>
    </div>
  );
}

export default VariantForm;
