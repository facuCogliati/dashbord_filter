"use client";

import { useEffect, useState } from "react";

function VariantTable({ variants }) {
  const [variantTable, setVariantTable] = useState([]);

  const combineVariants = (variantIndex, currentCombination) => {
    // Caso base: Si hemos alcanzado el final de las variantes
    if (variantIndex === variants.length) {
      // Agregar la combinación actual al resultado y retornarla
      return [currentCombination.join(" / ")];
    }

    // Obtener la variante actual en el índice dado
    const currentVariant = variants[variantIndex];
    // Para cada valor de la variante actual, llamada recursiva para las variantes restantes
    return currentVariant?.value?.flatMap((value) =>
      combineVariants(variantIndex + 1, [...currentCombination, `${value}`])
    );
  };

  useEffect(() => {
    setVariantTable(combineVariants(0, []));
    console.log(variantTable);
  }, [variants]);

  // Obtener las combinaciones finales, comenzando con la primera variante (índice 0)

  return (
    <div className="col-span-full sm:col-span-3 bg-white rounded-md shadow-md">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Variant
            </th>
          </tr>
        </thead>
        <tbody>
          {variantTable.map((element) => (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17"
              </th>
              <td className="px-6 py-4">{element}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default VariantTable;
