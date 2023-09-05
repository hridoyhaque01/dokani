import React from "react";
import AdSettingForm from "../forms/AdSettingForm";

function AdSetup() {
  return (
    <section className="w-full h-fulll overflow-auto px-8 py-6">
      <div className="bg-white rounded-2xl p-6">
        <AdSettingForm></AdSettingForm>
      </div>
    </section>
  );
}

export default AdSetup;
