"use client";
import VariantForm from "./component/VariantForm";
import VariantTable from "./component/Table";
import { useState } from "react";

export default function Home() {
  const [variants, setVariants] = useState([{ type: "Color", value: ["Red"] }]);
  return (
    <>
      <h1 className="my-8 text-3xl font-bold text-center">Variant Form</h1>
      <main className="grid grid-cols-6 gap-4 m-6 pt-4">
        <VariantForm variants={variants} setVariants={setVariants} />
        <VariantTable variants={variants} />
      </main>
    </>
  );
}
